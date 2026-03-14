// =============================================================================
// 7 Pasos para Cambiar tu Vida - Structured Content
// =============================================================================

export interface StepSection {
  type: 'heading' | 'paragraph' | 'quote' | 'list' | 'exercise' | 'table';
  content: string;
  items?: string[];
  rows?: { col1: string; col2: string; col3: string }[];
}

export interface StepExercise {
  title: string;
  description: string;
  weeks: string[];
}

export interface StepContent {
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  summary: string;
  sections: StepSection[];
  exercise: StepExercise;
  closingQuote: string;
  connectionText: string;
}

// =============================================================================
// STEP 1 - Todo Cuenta
// =============================================================================

const step1: StepContent = {
  number: 1,
  title: 'Todo Cuenta',
  subtitle: 'Cada micro-decisión define tu vida',
  icon: '\u26A1',
  color: 'emerald',
  summary:
    'Cada día tenés 1.440 minutos. Lo que hagas con cada uno de ellos construye o destruye tu futuro. No hay decisiones neutrales.',
  sections: [
    {
      type: 'heading',
      content: 'Las 1.440 oportunidades de cada día',
    },
    {
      type: 'paragraph',
      content:
        'Cada día tiene 1.440 minutos. Cada uno de esos minutos es una oportunidad de acercarte o alejarte de la persona que querés ser. No existen las decisiones neutrales: o sumás o restás.',
    },
    {
      type: 'heading',
      content: 'Leer vs. mirar televisión',
    },
    {
      type: 'paragraph',
      content:
        'Si cambiás 30 minutos de televisión por 30 minutos de lectura, en un año leés entre 12 y 15 libros. En dos años, eso equivale a un posgrado completo en conocimiento. La diferencia entre quien lee y quien no, es la diferencia entre quien crece y quien se estanca.',
    },
    {
      type: 'heading',
      content: 'Los últimos minutos del día',
    },
    {
      type: 'paragraph',
      content:
        'Lo último que entra a tu cerebro antes de dormir es lo que tu subconsciente procesa durante la noche. Si te dormís mirando noticias negativas o scrolleando redes, eso es lo que tu mente trabaja. Cambiá eso por lectura, gratitud o planificación del día siguiente.',
    },
    {
      type: 'heading',
      content: 'La matemática de las micro-decisiones',
    },
    {
      type: 'paragraph',
      content:
        'Las micro-decisiones parecen insignificantes en el momento, pero los números no mienten.',
    },
    {
      type: 'list',
      content: 'Ejemplos concretos',
      items: [
        '20 minutos de caminata por día x 180 días = 60 horas de ejercicio en 6 meses',
        'Dejar las gaseosas = 5 kg menos de azúcar al año en tu cuerpo',
        '40 minutos de aprendizaje diario = 120 horas de formación en 6 meses',
        '10 minutos de meditación x 365 = 60 horas de calma mental al año',
      ],
    },
    {
      type: 'quote',
      content:
        'No es lo que hacés una vez lo que define tu vida. Es lo que hacés todos los días, en lo pequeño, cuando nadie te ve.',
    },
    {
      type: 'paragraph',
      content:
        'Todo cuenta. Cada vaso de agua que elegís sobre una gaseosa. Cada escalera que subís en vez de tomar el ascensor. Cada libro que abrís en vez de abrir una red social. La acumulación de micro-decisiones positivas crea resultados extraordinarios.',
    },
  ],
  exercise: {
    title: 'Registro de micro-decisiones',
    description:
      'Cada noche antes de dormir, observá y registrá 3 micro-decisiones que tomaste durante el día. Anotalas en un cuaderno o en tu celular. No las juzgues, solo registralas. La conciencia es el primer paso para el cambio.',
    weeks: [
      'Semana 1-2: Solo observá y registrá. No intentes cambiar nada todavía. El objetivo es tomar conciencia de cuántas micro-decisiones tomás sin pensar.',
      'Semana 3-4: Identificá patrones. ¿Cuáles se repiten? ¿Cuáles te suman y cuáles te restan?',
      'Semana 5-8: Empezá a reemplazar una micro-decisión negativa por una positiva. Solo una.',
      'Semana 9-12: Agregá una segunda. La primera ya debería ser automática.',
    ],
  },
  closingQuote:
    'Tu vida no cambia el día que decidís cambiarla. Cambia el día que empezás a hacer las cosas de manera diferente, una micro-decisión a la vez.',
  connectionText:
    'Todo Cuenta es la base de los 7 pasos. Si no entendés que cada decisión importa, los otros pasos no tienen sentido. Una vez que lo internalizás, el siguiente paso natural es preguntarte: ¿hacia dónde quiero que sumen esas decisiones? Ahí entra el Paso 2.',
};

// =============================================================================
// STEP 2 - Objetivos
// =============================================================================

const step2: StepContent = {
  number: 2,
  title: 'Objetivos',
  subtitle: 'Definí 10 objetivos concretos para 180 días',
  icon: '\uD83C\uDFAF',
  color: 'blue',
  summary:
    'Definí 10 objetivos concretos para los próximos 180 días. No deseos vagos: objetivos escritos en presente, específicos y medibles.',
  sections: [
    {
      type: 'heading',
      content: 'Deseo vs. Objetivo',
    },
    {
      type: 'paragraph',
      content:
        'Hay una diferencia enorme entre un deseo y un objetivo. Un deseo es "quiero bajar de peso". Un objetivo es "voy al gimnasio 2 veces por semana y camino 20 minutos los otros días". El deseo es pasivo. El objetivo es una declaración de acción.',
    },
    {
      type: 'quote',
      content:
        'Un deseo es una fantasía. Un objetivo es un compromiso con vos mismo, escrito en presente, como si ya lo estuvieras haciendo.',
    },
    {
      type: 'heading',
      content: 'Las 5 reglas de un buen objetivo',
    },
    {
      type: 'list',
      content: 'Tu objetivo debe ser:',
      items: [
        'Específico: no "quiero leer más" sino "leo 20 páginas por día"',
        'Posible: algo que esté dentro de tu alcance real en 180 días',
        'Medible: que puedas verificar si lo cumpliste o no, sin ambigüedades',
        'Para 180 días: ni una semana ni cinco años. Seis meses es el horizonte perfecto',
        'Escrito en tiempo presente: "voy al gimnasio", no "voy a ir al gimnasio"',
      ],
    },
    {
      type: 'heading',
      content: '¿Por qué en tiempo presente?',
    },
    {
      type: 'paragraph',
      content:
        'Cuando escribís un objetivo en futuro ("voy a dejar de fumar"), tu cerebro lo procesa como algo que todavía no está pasando. Cuando lo escribís en presente ("yo elijo no fumar"), tu subconsciente lo registra como una realidad actual y empieza a trabajar a tu favor.',
    },
    {
      type: 'heading',
      content: 'Las 4 categorías',
    },
    {
      type: 'paragraph',
      content:
        'Tus 10 objetivos deben cubrir las cuatro áreas fundamentales de tu vida. No vale poner los 10 en una sola categoría.',
    },
    {
      type: 'list',
      content: 'Categorías:',
      items: [
        'Personal: salud, hábitos, crecimiento, lectura, meditación',
        'Profesional: carrera, proyectos, habilidades, ingresos',
        'Relaciones: pareja, familia, amigos, red de contactos',
        'Financiero: ahorro, deudas, inversiones, gastos conscientes',
      ],
    },
    {
      type: 'heading',
      content: 'Leelos en voz alta cada mañana',
    },
    {
      type: 'paragraph',
      content:
        'Leer tus objetivos en voz alta cada mañana no es un acto místico. Es un ejercicio de programación mental. Tu cerebro necesita recordar hacia dónde va. Si no le recordás todos los días, se distrae con lo urgente y se olvida de lo importante.',
    },
  ],
  exercise: {
    title: 'Escribí tus 10 objetivos',
    description:
      'Sentate con un cuaderno y escribí 10 objetivos concretos para los próximos 180 días. Usá tiempo presente. Cubrí las 4 categorías. Leelos en voz alta cada mañana al despertar.',
    weeks: [
      'Semana 1: Escribí los 10 objetivos. No te preocupes si no son perfectos. Ponelos en papel.',
      'Semana 2: Revisalos. ¿Son específicos? ¿Son medibles? ¿Están en presente? Ajustá lo que haga falta.',
      'Semana 3-4: Leelos en voz alta cada mañana. Observá cómo te sentís al hacerlo.',
      'Semana 5-12: Seguí leyéndolos. Cada 30 días, marcá tu progreso en cada uno.',
    ],
  },
  closingQuote:
    'Sin objetivos claros, tus micro-decisiones no tienen dirección. Es como caminar rápido pero sin saber a dónde vas.',
  connectionText:
    'Los objetivos le dan dirección a las micro-decisiones del Paso 1. Pero de nada sirve tener objetivos claros si tu entorno te tira para abajo. Por eso el Paso 3 es fundamental.',
};

// =============================================================================
// STEP 3 - Tu Entorno
// =============================================================================

const step3: StepContent = {
  number: 3,
  title: 'Tu Entorno',
  subtitle: 'Tu entorno define tus resultados',
  icon: '\uD83D\uDC65',
  color: 'violet',
  summary:
    'Tu entorno te empuja o te frena. Si las personas que te rodean no van hacia donde vos querés ir, vas a terminar yendo hacia donde van ellos.',
  sections: [
    {
      type: 'heading',
      content: 'Tu entorno te define',
    },
    {
      type: 'paragraph',
      content:
        'Sos el promedio de las cinco personas con las que más tiempo pasás. Si tus amigos solo quieren juntarse a tomar alcohol, y vos querés dejar de tomar, tenés un problema de entorno, no de voluntad.',
    },
    {
      type: 'heading',
      content: 'Entorno que empuja vs. entorno que frena',
    },
    {
      type: 'paragraph',
      content:
        'Hay personas que te empujan hacia adelante: te inspiran, te desafían, te apoyan cuando crecés. Y hay personas que te frenan: te critican cuando cambiás, se burlan de tus objetivos, te dicen "para qué" o "no vas a poder".',
    },
    {
      type: 'quote',
      content:
        'Es más fácil cambiar de entorno que tener una disciplina de acero. No hace falta ser un héroe. Hace falta rodearte de las personas correctas.',
    },
    {
      type: 'heading',
      content: 'Las personas que dicen "no" a todo',
    },
    {
      type: 'paragraph',
      content:
        'Cuidado con las personas que dicen "no" a todo. "No se puede", "no funciona", "no vale la pena". Esas personas no te están protegiendo, te están proyectando sus propios miedos. Su "no" no habla de vos, habla de ellos.',
    },
    {
      type: 'heading',
      content: 'Cuando tu entorno se vuelve hostil',
    },
    {
      type: 'paragraph',
      content:
        'Cuando empezás a cambiar, tu entorno se incomoda. Porque tu cambio les recuerda lo que ellos no están haciendo. No te sorprendas si al empezar a crecer, algunas personas se alejan o te critican. No es personal. Es su propio espejo.',
    },
    {
      type: 'paragraph',
      content:
        'No necesitás cortar relaciones de un día para el otro. Pero sí necesitás ser consciente de quién te suma y quién te resta. Y deliberadamente pasar más tiempo con quienes te empujan.',
    },
  ],
  exercise: {
    title: 'Auditoría de entorno',
    description:
      'Hacé una lista de las 10 personas con las que más tiempo pasás. Al lado de cada nombre, escribí si te empujan (te suman, te inspiran, te desafían) o te frenan (te critican, te limitan, te distraen).',
    weeks: [
      'Semana 1: Escribí la lista de 10 personas. Sé honesto con la clasificación.',
      'Semana 2: Observá cuánto tiempo pasás con cada grupo. Anotá las horas.',
      'Semana 3-4: Aumentá deliberadamente el tiempo con quienes te empujan. Buscá un grupo o comunidad alineada con tus objetivos.',
      'Semana 5-12: Reducí gradualmente el tiempo con quienes te frenan. No hace falta dramatismo. Simplemente priorizá diferente.',
    ],
  },
  closingQuote:
    'No le pidas peras al olmo. No le pidas apoyo a quien no puede darte lo que no tiene. Buscá las personas correctas.',
  connectionText:
    'El entorno correcto te facilita todo. Pero hay una voz más poderosa que cualquier amigo o familiar: la voz con la que te hablás a vos mismo. Eso es el Paso 4.',
};

// =============================================================================
// STEP 4 - Autopercepción
// =============================================================================

const step4: StepContent = {
  number: 4,
  title: 'Autopercepción',
  subtitle: 'Cómo te hablás a vos mismo lo cambia todo',
  icon: '\uD83E\uDE9E',
  color: 'amber',
  summary:
    'La forma en que te hablás a vos mismo programa tu subconsciente. Cada "yo no puedo" es una orden directa a tu cerebro para que no lo intente.',
  sections: [
    {
      type: 'heading',
      content: 'El poder de cómo te hablás',
    },
    {
      type: 'paragraph',
      content:
        'Cada vez que decís "yo no puedo", "yo no sirvo para esto", "yo siempre fui así", estás programando tu subconsciente. Tu cerebro no distingue entre lo que es verdad y lo que le repetís. Si le decís que no podés, te va a creer.',
    },
    {
      type: 'heading',
      content: 'El mismo mecanismo que los objetivos',
    },
    {
      type: 'paragraph',
      content:
        '¿Recordás que los objetivos se escriben en presente? La autopercepción funciona con el mismo mecanismo, pero al revés. Cuando decís "yo soy un desastre" en presente, tu cerebro lo procesa como una verdad establecida. Es el mismo poder, pero jugando en tu contra.',
    },
    {
      type: 'quote',
      content:
        'Yo amo a mi persona. Yo soy capaz. Yo soy responsable de mi vida. Repetí esto hasta que tu cerebro lo crea, porque lo va a creer.',
    },
    {
      type: 'heading',
      content: 'Yo soy responsable - Plan Fénix',
    },
    {
      type: 'paragraph',
      content:
        'Brian Tracy lo llama el Plan Fénix: el momento en que dejás de culpar a otros y decís "yo soy responsable". No porque todo sea tu culpa, sino porque solo vos podés cambiar tu situación. Mientras culpes a otros, les estás dando el poder sobre tu vida.',
    },
    {
      type: 'heading',
      content: 'Valorá lo que tenés',
    },
    {
      type: 'paragraph',
      content:
        'Parte de la autopercepción es dejar de enfocarte solo en lo que te falta y empezar a valorar lo que ya tenés. No desde la conformidad, sino desde la gratitud. La gratitud no te frena, te da una base sólida desde donde crecer.',
    },
    {
      type: 'heading',
      content: 'El mantra de la mañana',
    },
    {
      type: 'paragraph',
      content:
        'Cada mañana, antes de mirar el celular, antes de hacer cualquier cosa, repetí en voz alta frases que te programen para el día. "Yo soy capaz", "Hoy sumo", "Yo elijo crecer". Suena simple porque es simple. Pero funciona.',
    },
  ],
  exercise: {
    title: 'Reprogramá cómo te hablás',
    description:
      'Durante el día, prestá atención cada vez que te digas algo negativo: "yo no puedo", "soy un idiota", "siempre me pasa lo mismo". Registralo. Después, reescribilo en positivo y en presente.',
    weeks: [
      'Semana 1-2: Solo registrá. Cada vez que te descubras hablando en negativo, anotalo. No lo juzgues, solo anotalo.',
      'Semana 3-4: Al lado de cada frase negativa, escribí la versión positiva. "No puedo" se convierte en "estoy aprendiendo".',
      'Semana 5-8: Empezá a corregirte en el momento. Cuando te descubras diciendo "no puedo", pará y decilo de nuevo en positivo.',
      'Semana 9-12: Incorporá el mantra matutino. 3 frases positivas en voz alta cada mañana antes de tocar el celular.',
    ],
  },
  closingQuote:
    'No sos lo que te pasó. Sos lo que elegís hacer con lo que te pasó. Y esa elección empieza por cómo te hablás.',
  connectionText:
    'Cuando cambiás cómo te hablás, te das la energía para hacer lo más difícil: ser disciplinado. El Paso 5 es el que separa a quienes hablan de cambiar de quienes realmente cambian.',
};

// =============================================================================
// STEP 5 - Disciplina
// =============================================================================

const step5: StepContent = {
  number: 5,
  title: 'Disciplina',
  subtitle: 'El paso más difícil y el más importante',
  icon: '\uD83D\uDCAA',
  color: 'rose',
  summary:
    'La disciplina es un músculo: se entrena con micro-decisiones diarias. Cada pequeña victoria genera oxitocina y tu cerebro quiere más.',
  sections: [
    {
      type: 'heading',
      content: 'La disciplina es un músculo',
    },
    {
      type: 'paragraph',
      content:
        'La disciplina no es un talento con el que se nace. Es un músculo que se entrena. Y como todo músculo, se trabaja de a poco, con repetición, hasta que se fortalece. No arranques queriendo correr una maratón. Arrancá caminando.',
    },
    {
      type: 'heading',
      content: 'Trabajala en las micro-decisiones',
    },
    {
      type: 'paragraph',
      content:
        'No empieces con grandes gestas de disciplina. Empezá con lo chico: el azúcar en el café, la gaseosa del almuerzo, la galletita de la tarde. Reemplazá gradualmente. Si tomás 3 cucharadas de azúcar, bajá a 2. Después a 1. Después a ninguna. Eso es disciplina real.',
    },
    {
      type: 'heading',
      content: '21 días para formar un hábito',
    },
    {
      type: 'paragraph',
      content:
        'Dicen que se necesitan 21 días para formar un hábito. Es como la gallina y el huevo: el hábito nace de la disciplina, y la disciplina se sostiene con el hábito. Los primeros 21 días son los más difíciles. Después, tu cerebro automatiza y se vuelve más fácil.',
    },
    {
      type: 'heading',
      content: 'Oxitocina: la ciencia de las micro-victorias',
    },
    {
      type: 'paragraph',
      content:
        'Acá está la clave que nadie te cuenta: cada vez que tomás una micro-decisión positiva, tu cerebro libera oxitocina. Esa hormona te hace sentir bien, te da satisfacción. Y tu cerebro registra esa victoria y quiere más. Es un circuito virtuoso.',
    },
    {
      type: 'quote',
      content:
        '10 micro-decisiones positivas por día x 365 días = 3.650 victorias al año. Eso es lo que separa a quien cambia de quien se queda donde está.',
    },
    {
      type: 'paragraph',
      content:
        'La disciplina no se trata de sacrificio. Se trata de acumular micro-victorias hasta que tu cerebro no quiera volver atrás. Cada vez que elegís bien, tu cuerpo te lo agradece con química. Usá eso a tu favor.',
    },
  ],
  exercise: {
    title: 'Elegí UNA batalla diaria',
    description:
      'Elegí UNA sola micro-decisión diaria y comprometete a ganarla todos los días. No dos, no tres. UNA. Cuando esa ya sea automática (21 días mínimo), agregá otra.',
    weeks: [
      'Semana 1-3: Elegí tu batalla. Puede ser: no azúcar en el café, caminar 15 min, no celular antes de dormir. Cualquiera, pero UNA.',
      'Semana 4-6: Si la ganaste 21 días seguidos, ya es hábito. Agregá una segunda batalla.',
      'Semana 7-9: Dos batallas activas. Seguí acumulando victorias.',
      'Semana 10-12: Agregá la tercera si las dos anteriores ya son automáticas. Al final tenés 3 hábitos nuevos sólidos.',
    ],
  },
  closingQuote:
    'La disciplina es hacer lo que tenés que hacer, cuando lo tenés que hacer, tengas ganas o no. Pero el secreto es que cuanto más lo hacés, más ganas tenés.',
  connectionText:
    'La disciplina se aplica a todo, pero hay un área donde el impacto es más inmediato y visible: tu cuerpo. El Paso 6 es donde la disciplina se materializa.',
};

// =============================================================================
// STEP 6 - Tu Cuerpo
// =============================================================================

const step6: StepContent = {
  number: 6,
  title: 'Tu Cuerpo',
  subtitle: 'Tu cuerpo es la suma de todo',
  icon: '\uD83E\uDDEC',
  color: 'cyan',
  summary:
    'Tu cuerpo es el vehículo de todo lo demás. El cerebro usa el 20% de tu energía. Lo que comés, cómo dormís y cuánto te movés determina tu capacidad mental.',
  sections: [
    {
      type: 'heading',
      content: 'Tu cuerpo es la suma de todo',
    },
    {
      type: 'paragraph',
      content:
        'Tu cuerpo no es algo separado de tu mente. Tu cerebro usa el 20% de toda la energía de tu cuerpo. Si le das basura, funciona como basura. Si le das lo que necesita, rinde al máximo. Es así de simple.',
    },
    {
      type: 'heading',
      content: 'La ciencia del azúcar',
    },
    {
      type: 'paragraph',
      content:
        'El azúcar activa las mismas zonas del cerebro que la cocaína. No es una exageración, es neurociencia. Cuando comés azúcar, tu cerebro pide más. Es una adicción real. Y la industria alimentaria lo sabe y lo explota.',
    },
    {
      type: 'heading',
      content: 'Qué sacar y qué sumar',
    },
    {
      type: 'table',
      content: 'Guía práctica de cambios',
      rows: [
        {
          col1: 'Azúcar refinada',
          col2: 'Activa adicción, inflama, roba energía',
          col3: 'Proteína en cada comida',
        },
        {
          col1: 'Ultra-procesados',
          col2: 'Sin nutrientes reales, llenos de químicos',
          col3: 'Verduras y frutas reales',
        },
        {
          col1: 'Harina blanca',
          col2: 'Se convierte en azúcar en tu cuerpo',
          col3: '2 litros de agua por día',
        },
        {
          col1: 'Sedentarismo',
          col2: 'Tu cuerpo se atrofia sin movimiento',
          col3: 'Movimiento diario (caminar, entrenar)',
        },
        {
          col1: 'Celular antes de dormir',
          col2: 'Destruye la calidad de sueño',
          col3: '7-8 horas de sueño real',
        },
        {
          col1: 'Comer por ansiedad',
          col2: 'Ciclo emocional destructivo',
          col3: 'Respiración consciente 5 min/día',
        },
      ],
    },
    {
      type: 'heading',
      content: 'El efecto dominó',
    },
    {
      type: 'paragraph',
      content:
        'Cuando dormís bien, tenés energía. Cuando tenés energía, comés mejor. Cuando comés mejor, te movés más. Cuando te movés más, dormís mejor. Es un círculo virtuoso. Solo necesitás empujar la primera ficha.',
    },
    {
      type: 'heading',
      content: 'La matemática de 180 días',
    },
    {
      type: 'paragraph',
      content:
        'En 180 días tu cuerpo se transforma completamente. Cada célula de tu cuerpo se renueva. Si durante esos 180 días le das los materiales correctos, el cuerpo que vas a tener en 6 meses va a ser literalmente diferente al que tenés hoy.',
    },
    {
      type: 'quote',
      content:
        'Tu cuerpo no es un obstáculo. Es tu herramienta principal. Cuidalo como cuidarías la única herramienta que tenés para construir la vida que querés.',
    },
  ],
  exercise: {
    title: 'Registro de cuerpo + 1 cambio',
    description:
      'Llevá un registro diario simple de 3 cosas: qué comiste, cuánto dormiste y cuánto te moviste. Además, eliminá 1 cosa mala y agregá 1 cosa buena.',
    weeks: [
      'Semana 1-2: Solo registrá comida, sueño y movimiento. No cambies nada todavía. Observá tus patrones.',
      'Semana 3-4: Eliminá UNA cosa de la columna "Qué sacar". Empezá por la más fácil para vos.',
      'Semana 5-8: Agregá UNA cosa de la columna "Qué sumar". Sostené las dos.',
      'Semana 9-12: Evaluá. Agregá un segundo cambio en cada columna si los primeros ya son hábito.',
    ],
  },
  closingQuote:
    'En 180 días podés tener un cuerpo completamente diferente. No necesitás un gimnasio caro ni una dieta imposible. Necesitás micro-decisiones conscientes, todos los días.',
  connectionText:
    'Con el cuerpo funcionando bien, tenés la energía y la claridad para el último paso: tu relación con el mundo. El Paso 7 cierra el círculo y conecta todo.',
};

// =============================================================================
// STEP 7 - Tu Relación con el Mundo
// =============================================================================

const step7: StepContent = {
  number: 7,
  title: 'Tu Relación con el Mundo',
  subtitle: 'Todo es personal, hasta el perdón',
  icon: '\uD83D\uDD4A\uFE0F',
  color: 'indigo',
  summary:
    'Perdonar es soltar el peso que te frena. Sé Suiza: no entres en guerras que no son tuyas. Priorizá a tu familia y limpiá tus vínculos.',
  sections: [
    {
      type: 'heading',
      content: 'Todo es personal',
    },
    {
      type: 'paragraph',
      content:
        'Todo lo que te pasa en la vida es personal. Tus relaciones, tus conflictos, tus resentimientos. Todo pesa. Y ese peso te frena. Para avanzar, necesitás soltar.',
    },
    {
      type: 'heading',
      content: 'El perdón es para vos',
    },
    {
      type: 'paragraph',
      content:
        'Perdonar no es decirle al otro que lo que hizo está bien. Perdonar es soltar el peso que llevás encima. Es para vos, no para el otro. Mientras no perdones, esa persona sigue teniendo poder sobre tu vida, tu energía y tus emociones.',
    },
    {
      type: 'quote',
      content:
        'Sé Suiza. No entres en guerras que no son tuyas. No gastes energía en batallas que no te van a llevar a ningún lado.',
    },
    {
      type: 'heading',
      content: 'Sé Suiza',
    },
    {
      type: 'paragraph',
      content:
        'Ser Suiza significa ser neutral. No entrar en chismes, no meterte en conflictos ajenos, no alimentar dramas. Cada minuto que gastás en la guerra de otro es un minuto que le robás a tu propio crecimiento. ¿Recordás el Paso 1? Todo cuenta. También lo que gastás en conflictos inútiles.',
    },
    {
      type: 'heading',
      content: 'Relaciones que nutren vs. relaciones tóxicas',
    },
    {
      type: 'paragraph',
      content:
        'Las relaciones son como la comida: hay relaciones que te nutren y relaciones que te intoxican. Así como en el Paso 6 aprendiste a elegir qué entra en tu cuerpo, acá aprendés a elegir qué relaciones entran en tu vida.',
    },
    {
      type: 'table',
      content: 'Qué soltar y qué priorizar',
      rows: [
        {
          col1: 'Resentimientos viejos',
          col2: 'Te roban energía presente por algo del pasado',
          col3: 'Tu familia nuclear',
        },
        {
          col1: 'Chismes y dramas',
          col2: 'Consumen tiempo y energía sin retorno',
          col3: 'Relaciones que te empujan a crecer',
        },
        {
          col1: 'Necesidad de tener razón',
          col2: 'Destruye vínculos por ego',
          col3: 'Conversaciones genuinas',
        },
        {
          col1: 'Relaciones por obligación',
          col2: 'Drenan sin aportar',
          col3: 'Tiempo de calidad con quienes importan',
        },
        {
          col1: 'Compararte con otros',
          col2: 'Carrera que no podés ganar',
          col3: 'Compararte con vos de ayer',
        },
      ],
    },
    {
      type: 'heading',
      content: 'La familia primero, siempre',
    },
    {
      type: 'paragraph',
      content:
        'Al final del día, lo que más importa es tu familia. Tu pareja, tus hijos, tus padres. Todo lo demás es secundario. No sacrifiques lo más importante por lo urgente. La familia es tu base, tu red de contención, tu motor.',
    },
    {
      type: 'heading',
      content: 'La fórmula de los 7 pasos',
    },
    {
      type: 'paragraph',
      content:
        'Todo se conecta: tus micro-decisiones (1) tienen dirección gracias a tus objetivos (2), tu entorno (3) te facilita o te frena, tu autopercepción (4) te da o te quita energía, la disciplina (5) es el motor, tu cuerpo (6) es el vehículo, y tu relación con el mundo (7) es el camino. Los 7 pasos funcionan juntos, no por separado.',
    },
  ],
  exercise: {
    title: 'Limpiá tu relación con el mundo',
    description:
      'Identificá a las personas con las que tenés conflictos pendientes, resentimientos, o relaciones que te restan. Practicá ser Suiza: neutral, sin guerras innecesarias.',
    weeks: [
      'Semana 1-2: Hacé una lista de resentimientos y conflictos pendientes. No para resolverlos todos, sino para verlos con claridad.',
      'Semana 3-4: Elegí uno y perdonalo. No hace falta llamar a la persona. El perdón es interno, es soltar.',
      'Semana 5-8: Practicá ser Suiza en el día a día. Cuando alguien te invite a un drama, no entres. Observá cuánta energía te ahorrás.',
      'Semana 9-12: Invertí esa energía ahorrada en tu familia y en las relaciones que te nutren. Medí la diferencia.',
    ],
  },
  closingQuote:
    'Los 7 pasos no son una receta mágica. Son un sistema. Y como todo sistema, funciona cuando lo aplicás completo, todos los días, un paso a la vez.',
  connectionText:
    'El Paso 7 cierra el círculo. Tu relación con el mundo es el resultado de los 6 pasos anteriores. Cuando los 7 funcionan juntos, tu vida cambia. No en un día, sino en 180.',
};

// =============================================================================
// Export
// =============================================================================

export const stepsContent: StepContent[] = [
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
];

/**
 * Get a specific step by its number (1-7).
 * Returns undefined if the step number is out of range.
 */
export function getStep(stepNumber: number): StepContent | undefined {
  return stepsContent.find((step) => step.number === stepNumber);
}
