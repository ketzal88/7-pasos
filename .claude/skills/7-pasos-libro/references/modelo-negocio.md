# Modelo de Negocio — 7 Pasos

## Modelo Actual (v1)

Un solo producto, un solo precio. Simple.

| Producto | Tipo | Precio | Qué incluye |
|----------|------|--------|-------------|
| Libro completo | Pago único | $9 USD | Todo: lectura + objetivos + tracker + lectura matutina + racha |

## Niveles de Acceso

### TIER 1 — Gratis (sin cuenta)
- Landing page
- Tracker básico (sin guardar progreso)
- Preview de los 7 pasos (título + resumen, sin contenido completo)

### TIER 2 — Libro completo ($9 USD, acceso de por vida)
- Los 7 pasos completos
- Framework de micro-decisiones y oxitocina
- Definí tus 10 objetivos (4 categorías)
- Tracker diario con cuenta (180 días)
- Lectura matutina de tus objetivos
- Progreso guardado y visualización de racha

## Flujo de Conversión

```
Landing (gratis) → Registro (gratis) → Preview de pasos
  → Compra libro ($9) → Acceso completo (lectura + objetivos + tracker)
```

## Copy de Pricing

**Botón CTA:** "Empezar por $9 →"

**Card de pricing:**
- Tag: "LIBRO COMPLETO"
- Precio: $9
- Subtítulo: "USD · Acceso de por vida"
- Checks:
  - Los 7 pasos completos
  - Framework de micro-decisiones y oxitocina
  - Definí tus 10 objetivos (4 categorías)
  - Tracker diario con cuenta (180 días)
  - Lectura matutina de tus objetivos
  - Progreso guardado y visualización de racha

## Implementación Técnica (Stripe)

- Pagos: Stripe (Checkout + Webhooks)
- Producto Stripe: `prod_libro` → `price_libro` ($9, one_time)
- Campo en Firestore: `subscription.plan` = "free" | "libro"
- Onboarding phase se extiende con `"preview"` para usuarios gratuitos

## Cross-sell Futuro (cuando GymCounter esté listo)

**Momento clave: Paso 6 ("Tu Cuerpo")**
- Al terminar el Paso 6, banner sugiriendo GymCounter
- En el tracker, si el usuario suma una victoria física → sugerir GymCounter
- Bundle con suscripción se definirá cuando ambas apps estén activas

## Métricas Clave
- Conversión landing → registro
- Conversión registro → compra libro ($9)
- Días promedio de retención (de 180)
- Victorias promedio por día por usuario activo
