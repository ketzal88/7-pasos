# Plan de Monetizacion: Doble Venta + Cross-sell con GymCounter

## Contexto

Tenemos 2 productos:
- **7 Pasos** — Libro digital + tracker de transformacion personal (180 dias)
- **GymCounter** — App de tracking de gym + rutinas de entrenamiento (protocolo militar 180 dias)

Ambos comparten la filosofia de 180 dias, disciplina y micro-victorias. Hay un cruce natural.

---

## Modelo de Precios

| Producto | Tipo | Precio |
|----------|------|--------|
| 7 Pasos — Libro (lectura) | Pago unico | $7 USD |
| 7 Pasos — Tracker | Suscripcion | $2 USD/mes |
| GymCounter | Suscripcion | $5 USD/mes |
| **Bundle: 7 Pasos + GymCounter** | **Suscripcion** | **$5 USD/mes** (ahorro de $2) |

### Logica de acceso

```
Gratis (sin pago):
├── Landing page
├── Login/registro
└── Preview de los 7 pasos (titulo + resumen, sin contenido completo)

Libro ($7 unico):
├── Lectura completa de los 7 pasos
├── Escribir objetivos
└── Vista de lectura matutina

Tracker ($2/mes):
├── Todo lo del libro
├── Tracker diario de victorias
├── Calendario 180 dias
├── Estadisticas y progreso
└── Notas diarias

Bundle ($5/mes):
├── Todo lo del tracker de 7 Pasos
├── GymCounter completo
├── Dashboard unificado (victorias + gym)
└── Descuento vs comprar por separado ($7 ahorro)
```

---

## Estrategia de Cross-sell

### Desde 7 Pasos → GymCounter

**Momento clave:** Paso 6 ("Tu Cuerpo")
- Al terminar de leer el Paso 6 (que habla sobre cuidar el cuerpo), mostrar banner:
  > "El Paso 6 te pide cuidar tu cuerpo. GymCounter te ayuda a trackear tus dias de gym y seguir una rutina de entrenamiento. $5/mes o sumalo a tu plan por solo $3 mas."
- En el tracker, cuando el usuario agrega una victoria relacionada a un objetivo fisico, sugerir GymCounter
- En /objetivos, si un objetivo menciona "gym", "entrenar", "cuerpo" → CTA de GymCounter

### Desde GymCounter → 7 Pasos

- En GymCounter, agregar seccion "Transformacion completa":
  > "GymCounter cuida tu cuerpo. 7 Pasos cambia tu mente. Lee el libro que te da el marco completo para 180 dias de transformacion. $7."
- Al completar 30 dias en GymCounter → sugerir 7 Pasos como siguiente nivel
- Bundle discount visible en ambas apps

---

## Implementacion Tecnica (Stripe)

### Fase 1: Paywall en 7 Pasos

**Archivos a crear/modificar:**
- `src/lib/stripe.ts` — Config de Stripe (client + server)
- `src/app/api/stripe/checkout/route.ts` — API route para crear sesion de checkout
- `src/app/api/stripe/webhook/route.ts` — Webhook para confirmar pagos
- `src/lib/firestore.ts` — Actualizar `UserProfile.subscription`

**Productos en Stripe:**
```
prod_libro    → price_libro    ($7, one_time)
prod_tracker  → price_tracker  ($2, recurring/month)
prod_bundle   → price_bundle   ($5, recurring/month)
```

**Flujo de pago:**
```
Usuario se registra → ve preview de pasos (gratis)
  → Quiere leer → checkout $7 (libro)
  → Termina lectura + objetivos → quiere tracker → checkout $2/mes
  → O directamente bundle $5/mes
```

**Cambios en el onboarding:**
```
onboardingPhase: "preview" | "reading" | "objectives" | "tracking"
subscription: {
  plan: "free" | "libro" | "tracker" | "bundle"
  status: "active" | "expired" | "cancelled"
  stripeCustomerId: string
  stripeSubscriptionId?: string
  currentPeriodEnd?: Timestamp
}
```

- `preview`: puede ver titulos y resumenes de cada paso, pero no el contenido completo
- `reading`: compro el libro, puede leer todo
- `objectives` y `tracking`: necesita plan "tracker" o "bundle"

### Fase 2: Link entre apps

**Opcion A — Cuentas compartidas (Firebase):**
- Ambas apps usan el mismo proyecto Firebase
- El usuario se logea con la misma cuenta
- El campo `subscription.plan` incluye "bundle" que desbloquea ambas

**Opcion B — Deep links (mas simple):**
- Cada app mantiene su propio Firebase
- Al comprar el bundle en una app, se genera un token/codigo
- El usuario lo ingresa en la otra app para desbloquear
- Stripe maneja el bundle como un solo producto

**Recomendacion:** Opcion A si ambas apps van a estar bajo el mismo dominio/proyecto. Opcion B si queres mantenerlas 100% separadas.

### Fase 3: Dashboard unificado (bundle)

Para usuarios bundle, agregar una vista que combine:
- Victorias de 7 Pasos del dia
- Dias de gym de GymCounter
- "Streaks" combinados (dias que hizo ambas cosas)
- Nota: esto seria una pagina nueva en 7 Pasos que consume datos de GymCounter via API compartida

---

## Pricing Psychology

| Estrategia | Aplicacion |
|-----------|-----------|
| Ancla de precio | Mostrar "$7/mes si compras por separado" junto al bundle de $5 |
| Pago unico como gancho | $7 por el libro es bajo → una vez adentro, upgrade a tracker |
| Trial del tracker | 7 dias gratis del tracker despues de comprar el libro |
| Urgencia | "Dia 1 de tus 180 dias empieza cuando activas el tracker" |
| Social proof | Contador de usuarios activos, victorias totales de la comunidad |

---

## Orden de Implementacion

1. **Stripe basico** — Checkout para libro ($7) + redirect a lectura
2. **Paywall de contenido** — Pasos muestran preview sin pago, completo con pago
3. **Suscripcion tracker** — $2/mes para desbloquear tracker + progreso
4. **Bundle** — $5/mes que incluye ambos
5. **Cross-sell banners** — CTAs entre las dos apps
6. **Dashboard unificado** — Vista combinada para usuarios bundle

---

## Metricas a Trackear

- Conversion landing → registro (gratis)
- Conversion registro → compra libro ($7)
- Conversion libro → suscripcion tracker ($2/mes)
- Conversion a bundle ($5/mes)
- Churn rate mensual del tracker
- Cross-sell rate (7 Pasos ↔ GymCounter)
- Dias promedio de retencion (de 180)
