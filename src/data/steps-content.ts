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
  subtitle: 'Cada micro-decision define tu vida',
  icon: '\u26A1',
  color: 'emerald',
  summary:
    'Cada dia tenes 1.440 minutos. Lo que hagas con cada uno de ellos construye o destruye tu futuro. No hay decisiones neutrales.',
  sections: [
    {
      type: 'heading',
      content: 'Las 1.440 oportunidades de cada dia',
    },
    {
      type: 'paragraph',
      content:
        'Cada dia tiene 1.440 minutos. Cada uno de esos minutos es una oportunidad de acercarte o alejarte de la persona que queres ser. No existen las decisiones neutrales: o sumas o restas.',
    },
    {
      type: 'heading',
      content: 'Leer vs. mirar television',
    },
    {
      type: 'paragraph',
      content:
        'Si cambias 30 minutos de television por 30 minutos de lectura, en un año lees entre 12 y 15 libros. En dos anios, eso equivale a un posgrado completo en conocimiento. La diferencia entre quien lee y quien no, es la diferencia entre quien crece y quien se estanca.',
    },
    {
      type: 'heading',
      content: 'Los ultimos minutos del dia',
    },
    {
      type: 'paragraph',
      content:
        'Lo ultimo que entra a tu cerebro antes de dormir es lo que tu subconsciente procesa durante la noche. Si te dormis mirando noticias negativas o scrolleando redes, eso es lo que tu mente trabaja. Cambia eso por lectura, gratitud o planificacion del dia siguiente.',
    },
    {
      type: 'heading',
      content: 'La matematica de las micro-decisiones',
    },
    {
      type: 'paragraph',
      content:
        'Las micro-decisiones parecen insignificantes en el momento, pero los numeros no mienten.',
    },
    {
      type: 'list',
      content: 'Ejemplos concretos',
      items: [
        '20 minutos de caminata por dia x 180 dias = 60 horas de ejercicio en 6 meses',
        'Dejar las gaseosas = 5 kg menos de azucar al año en tu cuerpo',
        '40 minutos de aprendizaje diario = 120 horas de formacion en 6 meses',
        '10 minutos de meditacion x 365 = 60 horas de calma mental al año',
      ],
    },
    {
      type: 'quote',
      content:
        'No es lo que haces una vez lo que define tu vida. Es lo que haces todos los dias, en lo pequenio, cuando nadie te ve.',
    },
    {
      type: 'paragraph',
      content:
        'Todo cuenta. Cada vaso de agua que elegis sobre una gaseosa. Cada escalera que subis en vez de tomar el ascensor. Cada libro que abris en vez de abrir una red social. La acumulacion de micro-decisiones positivas crea resultados extraordinarios.',
    },
  ],
  exercise: {
    title: 'Registro de micro-decisiones',
    description:
      'Cada noche antes de dormir, observa y registra 3 micro-decisiones que tomaste durante el dia. Anotalas en un cuaderno o en tu celular. No las juzgues, solo registralas. La conciencia es el primer paso para el cambio.',
    weeks: [
      'Semana 1-2: Solo observa y registra. No intentes cambiar nada todavia. El objetivo es tomar conciencia de cuantas micro-decisiones tomas sin pensar.',
      'Semana 3-4: Identifica patrones. Cuales se repiten? Cuales te suman y cuales te restan?',
      'Semana 5-8: Empieza a reemplazar una micro-decision negativa por una positiva. Solo una.',
      'Semana 9-12: Agrega una segunda. La primera ya deberia ser automatica.',
    ],
  },
  closingQuote:
    'Tu vida no cambia el dia que decidis cambiarla. Cambia el dia que empezas a hacer las cosas de manera diferente, una micro-decision a la vez.',
  connectionText:
    'Todo Cuenta es la base de los 7 pasos. Si no entiendes que cada decision importa, los otros pasos no tienen sentido. Una vez que lo internalizas, el siguiente paso natural es preguntarte: hacia donde quiero que sumen esas decisiones? Ahi entra el Paso 2.',
};

// =============================================================================
// STEP 2 - Objetivos
// =============================================================================

const step2: StepContent = {
  number: 2,
  title: 'Objetivos',
  subtitle: 'Define 10 objetivos concretos para 180 dias',
  icon: '\uD83C\uDFAF',
  color: 'blue',
  summary:
    'Defini 10 objetivos concretos para los proximos 180 dias. No deseos vagos: objetivos escritos en presente, especificos y medibles.',
  sections: [
    {
      type: 'heading',
      content: 'Deseo vs. Objetivo',
    },
    {
      type: 'paragraph',
      content:
        'Hay una diferencia enorme entre un deseo y un objetivo. Un deseo es "quiero bajar de peso". Un objetivo es "voy al gimnasio 2 veces por semana y camino 20 minutos los otros dias". El deseo es pasivo. El objetivo es una declaracion de accion.',
    },
    {
      type: 'quote',
      content:
        'Un deseo es una fantasia. Un objetivo es un compromiso con vos mismo, escrito en presente, como si ya lo estuvieras haciendo.',
    },
    {
      type: 'heading',
      content: 'Las 5 reglas de un buen objetivo',
    },
    {
      type: 'list',
      content: 'Tu objetivo debe ser:',
      items: [
        'Especifico: no "quiero leer mas" sino "leo 20 paginas por dia"',
        'Posible: algo que este dentro de tu alcance real en 180 dias',
        'Medible: que puedas verificar si lo cumpliste o no, sin ambiguedades',
        'Para 180 dias: ni una semana ni cinco anios. Seis meses es el horizonte perfecto',
        'Escrito en tiempo presente: "voy al gimnasio", no "voy a ir al gimnasio"',
      ],
    },
    {
      type: 'heading',
      content: 'Por que en tiempo presente?',
    },
    {
      type: 'paragraph',
      content:
        'Cuando escribis un objetivo en futuro ("voy a dejar de fumar"), tu cerebro lo procesa como algo que todavia no esta pasando. Cuando lo escribis en presente ("yo elijo no fumar"), tu subconsciente lo registra como una realidad actual y empieza a trabajar a tu favor.',
    },
    {
      type: 'heading',
      content: 'Las 4 categorias',
    },
    {
      type: 'paragraph',
      content:
        'Tus 10 objetivos deben cubrir las cuatro areas fundamentales de tu vida. No vale poner los 10 en una sola categoria.',
    },
    {
      type: 'list',
      content: 'Categorias:',
      items: [
        'Personal: salud, habitos, crecimiento, lectura, meditacion',
        'Profesional: carrera, proyectos, habilidades, ingresos',
        'Relaciones: pareja, familia, amigos, red de contactos',
        'Financiero: ahorro, deudas, inversiones, gastos conscientes',
      ],
    },
    {
      type: 'heading',
      content: 'Leelos en voz alta cada maniana',
    },
    {
      type: 'paragraph',
      content:
        'Leer tus objetivos en voz alta cada maniana no es un acto mistico. Es un ejercicio de programacion mental. Tu cerebro necesita recordar hacia donde va. Si no le recordas todos los dias, se distrae con lo urgente y se olvida de lo importante.',
    },
  ],
  exercise: {
    title: 'Escribe tus 10 objetivos',
    description:
      'Senta te con un cuaderno y escribi 10 objetivos concretos para los proximos 180 dias. Usa tiempo presente. Cubri las 4 categorias. Leelos en voz alta cada maniana al despertar.',
    weeks: [
      'Semana 1: Escribi los 10 objetivos. No te preocupes si no son perfectos. Ponelos en papel.',
      'Semana 2: Revisalos. Son especificos? Son medibles? Estan en presente? Ajusta lo que haga falta.',
      'Semana 3-4: Leelos en voz alta cada maniana. Observa como te sentis al hacerlo.',
      'Semana 5-12: Segui leyendolos. Cada 30 dias, marca tu progreso en cada uno.',
    ],
  },
  closingQuote:
    'Sin objetivos claros, tus micro-decisiones no tienen direccion. Es como caminar rapido pero sin saber a donde vas.',
  connectionText:
    'Los objetivos le dan direccion a las micro-decisiones del Paso 1. Pero de nada sirve tener objetivos claros si tu entorno te tira para abajo. Por eso el Paso 3 es fundamental.',
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
    'Tu entorno te empuja o te frena. Si las personas que te rodean no van hacia donde vos queres ir, vas a terminar yendo hacia donde van ellos.',
  sections: [
    {
      type: 'heading',
      content: 'Tu entorno te define',
    },
    {
      type: 'paragraph',
      content:
        'Sos el promedio de las cinco personas con las que mas tiempo pasas. Si tus amigos solo quieren juntarse a tomar alcohol, y vos queres dejar de tomar, tenes un problema de entorno, no de voluntad.',
    },
    {
      type: 'heading',
      content: 'Entorno que empuja vs. entorno que frena',
    },
    {
      type: 'paragraph',
      content:
        'Hay personas que te empujan hacia adelante: te inspiran, te desafian, te apoyan cuando creces. Y hay personas que te frenan: te critican cuando cambias, se burlan de tus objetivos, te dicen "para que" o "no vas a poder".',
    },
    {
      type: 'quote',
      content:
        'Es mas facil cambiar de entorno que tener una disciplina de acero. No hace falta ser un heroe. Hace falta rodearte de las personas correctas.',
    },
    {
      type: 'heading',
      content: 'Las personas que dicen "no" a todo',
    },
    {
      type: 'paragraph',
      content:
        'Cuidado con las personas que dicen "no" a todo. "No se puede", "no funciona", "no vale la pena". Esas personas no te estan protegiendo, te estan proyectando sus propios miedos. Su "no" no habla de vos, habla de ellos.',
    },
    {
      type: 'heading',
      content: 'Cuando tu entorno se vuelve hostil',
    },
    {
      type: 'paragraph',
      content:
        'Cuando empezas a cambiar, tu entorno se incomoda. Porque tu cambio les recuerda lo que ellos no estan haciendo. No te sorprendas si al empezar a crecer, algunas personas se alejan o te critican. No es personal. Es su propio espejo.',
    },
    {
      type: 'paragraph',
      content:
        'No necesitas cortar relaciones de un dia para el otro. Pero si necesitas ser consciente de quien te suma y quien te resta. Y deliberadamente pasar mas tiempo con quienes te empujan.',
    },
  ],
  exercise: {
    title: 'Auditoria de entorno',
    description:
      'Hace una lista de las 10 personas con las que mas tiempo pasas. Al lado de cada nombre, escribi si te empujan (te suman, te inspiran, te desafian) o te frenan (te critican, te limitan, te distraen).',
    weeks: [
      'Semana 1: Escribi la lista de 10 personas. Se honesto con la clasificacion.',
      'Semana 2: Observa cuanto tiempo pasas con cada grupo. Anota las horas.',
      'Semana 3-4: Aumenta deliberadamente el tiempo con quienes te empujan. Busca un grupo o comunidad alineada con tus objetivos.',
      'Semana 5-12: Reduce gradualmente el tiempo con quienes te frenan. No hace falta dramatismo. Simplemente prioriza diferente.',
    ],
  },
  closingQuote:
    'No le pidas peras al olmo. No le pidas apoyo a quien no puede darte lo que no tiene. Busca las personas correctas.',
  connectionText:
    'El entorno correcto te facilita todo. Pero hay una voz mas poderosa que cualquier amigo o familiar: la voz con la que te hablas a vos mismo. Eso es el Paso 4.',
};

// =============================================================================
// STEP 4 - Autopercepcion
// =============================================================================

const step4: StepContent = {
  number: 4,
  title: 'Autopercepcion',
  subtitle: 'Como te hablas a vos mismo lo cambia todo',
  icon: '\uD83E\uDE9E',
  color: 'amber',
  summary:
    'La forma en que te hablas a vos mismo programa tu subconsciente. Cada "yo no puedo" es una orden directa a tu cerebro para que no lo intente.',
  sections: [
    {
      type: 'heading',
      content: 'El poder de como te hablas',
    },
    {
      type: 'paragraph',
      content:
        'Cada vez que decis "yo no puedo", "yo no sirvo para esto", "yo siempre fui asi", estas programando tu subconsciente. Tu cerebro no distingue entre lo que es verdad y lo que le repetis. Si le decis que no podes, te va a creer.',
    },
    {
      type: 'heading',
      content: 'El mismo mecanismo que los objetivos',
    },
    {
      type: 'paragraph',
      content:
        'Recordas que los objetivos se escriben en presente? La autopercepcion funciona con el mismo mecanismo, pero al reves. Cuando decis "yo soy un desastre" en presente, tu cerebro lo procesa como una verdad establecida. Es el mismo poder, pero jugando en tu contra.',
    },
    {
      type: 'quote',
      content:
        'Yo amo a mi persona. Yo soy capaz. Yo soy responsable de mi vida. Repeti esto hasta que tu cerebro lo crea, porque lo va a creer.',
    },
    {
      type: 'heading',
      content: 'Yo soy responsable - Plan Fenix',
    },
    {
      type: 'paragraph',
      content:
        'Brian Tracy lo llama el Plan Fenix: el momento en que dejas de culpar a otros y decis "yo soy responsable". No porque todo sea tu culpa, sino porque solo vos podes cambiar tu situacion. Mientras culpes a otros, les estas dando el poder sobre tu vida.',
    },
    {
      type: 'heading',
      content: 'Valora lo que tenes',
    },
    {
      type: 'paragraph',
      content:
        'Parte de la autopercepcion es dejar de enfocarte solo en lo que te falta y empezar a valorar lo que ya tenes. No desde la conformidad, sino desde la gratitud. La gratitud no te frena, te da una base solida desde donde crecer.',
    },
    {
      type: 'heading',
      content: 'El mantra de la maniana',
    },
    {
      type: 'paragraph',
      content:
        'Cada maniana, antes de mirar el celular, antes de hacer cualquier cosa, repeti en voz alta frases que te programen para el dia. "Yo soy capaz", "Hoy sumo", "Yo elijo crecer". Suena simple porque es simple. Pero funciona.',
    },
  ],
  exercise: {
    title: 'Reprograma como te hablas',
    description:
      'Durante el dia, presta atencion cada vez que te digas algo negativo: "yo no puedo", "soy un idiota", "siempre me pasa lo mismo". Registralo. Despues, reescribilo en positivo y en presente.',
    weeks: [
      'Semana 1-2: Solo registra. Cada vez que te descubras hablando en negativo, anotalo. No lo juzgues, solo anotalo.',
      'Semana 3-4: Al lado de cada frase negativa, escribi la version positiva. "No puedo" se convierte en "estoy aprendiendo".',
      'Semana 5-8: Empeza a corregirte en el momento. Cuando te descubras diciendo "no puedo", para y decilo de nuevo en positivo.',
      'Semana 9-12: Incorpora el mantra matutino. 3 frases positivas en voz alta cada maniana antes de tocar el celular.',
    ],
  },
  closingQuote:
    'No sos lo que te paso. Sos lo que elegis hacer con lo que te paso. Y esa eleccion empieza por como te hablas.',
  connectionText:
    'Cuando cambias como te hablas, te das la energia para hacer lo mas dificil: ser disciplinado. El Paso 5 es el que separa a quienes hablan de cambiar de quienes realmente cambian.',
};

// =============================================================================
// STEP 5 - Disciplina
// =============================================================================

const step5: StepContent = {
  number: 5,
  title: 'Disciplina',
  subtitle: 'El paso mas dificil y el mas importante',
  icon: '\uD83D\uDCAA',
  color: 'rose',
  summary:
    'La disciplina es un musculo: se entrena con micro-decisiones diarias. Cada pequenia victoria genera oxitocina y tu cerebro quiere mas.',
  sections: [
    {
      type: 'heading',
      content: 'La disciplina es un musculo',
    },
    {
      type: 'paragraph',
      content:
        'La disciplina no es un talento con el que se nace. Es un musculo que se entrena. Y como todo musculo, se trabaja de a poco, con repeticion, hasta que se fortalece. No arranques queriendo correr una maraton. Arranca caminando.',
    },
    {
      type: 'heading',
      content: 'Trabajala en las micro-decisiones',
    },
    {
      type: 'paragraph',
      content:
        'No empieces con grandes gestas de disciplina. Empieza con lo chico: el azucar en el cafe, la gaseosa del almuerzo, la galletita de la tarde. Reemplaza gradualmente. Si tomas 3 cucharadas de azucar, baja a 2. Despues a 1. Despues a ninguna. Eso es disciplina real.',
    },
    {
      type: 'heading',
      content: '21 dias para formar un habito',
    },
    {
      type: 'paragraph',
      content:
        'Dicen que se necesitan 21 dias para formar un habito. Es como la gallina y el huevo: el habito nace de la disciplina, y la disciplina se sostiene con el habito. Los primeros 21 dias son los mas dificiles. Despues, tu cerebro automatiza y se vuelve mas facil.',
    },
    {
      type: 'heading',
      content: 'Oxitocina: la ciencia de las micro-victorias',
    },
    {
      type: 'paragraph',
      content:
        'Aca esta la clave que nadie te cuenta: cada vez que tomas una micro-decision positiva, tu cerebro libera oxitocina. Esa hormona te hace sentir bien, te da satisfaccion. Y tu cerebro registra esa victoria y quiere mas. Es un circuito virtuoso.',
    },
    {
      type: 'quote',
      content:
        '10 micro-decisiones positivas por dia x 365 dias = 3.650 victorias al año. Eso es lo que separa a quien cambia de quien se queda donde esta.',
    },
    {
      type: 'paragraph',
      content:
        'La disciplina no se trata de sacrificio. Se trata de acumular micro-victorias hasta que tu cerebro no quiera volver atras. Cada vez que elegis bien, tu cuerpo te lo agradece con quimica. Usa eso a tu favor.',
    },
  ],
  exercise: {
    title: 'Elige UNA batalla diaria',
    description:
      'Elige UNA sola micro-decision diaria y comprometete a ganarla todos los dias. No dos, no tres. UNA. Cuando esa ya sea automatica (21 dias minimo), agrega otra.',
    weeks: [
      'Semana 1-3: Elige tu batalla. Puede ser: no azucar en el cafe, caminar 15 min, no celular antes de dormir. Cualquiera, pero UNA.',
      'Semana 4-6: Si la ganaste 21 dias seguidos, ya es habito. Agrega una segunda batalla.',
      'Semana 7-9: Dos batallas activas. Segui acumulando victorias.',
      'Semana 10-12: Agrega la tercera si las dos anteriores ya son automaticas. Al final tenes 3 habitos nuevos solidos.',
    ],
  },
  closingQuote:
    'La disciplina es hacer lo que tenes que hacer, cuando lo tenes que hacer, tengas ganas o no. Pero el secreto es que cuanto mas lo haces, mas ganas tenes.',
  connectionText:
    'La disciplina se aplica a todo, pero hay un area donde el impacto es mas inmediato y visible: tu cuerpo. El Paso 6 es donde la disciplina se materializa.',
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
    'Tu cuerpo es el vehiculo de todo lo demas. El cerebro usa el 20% de tu energia. Lo que comes, como dormis y cuanto te moves determina tu capacidad mental.',
  sections: [
    {
      type: 'heading',
      content: 'Tu cuerpo es la suma de todo',
    },
    {
      type: 'paragraph',
      content:
        'Tu cuerpo no es algo separado de tu mente. Tu cerebro usa el 20% de toda la energia de tu cuerpo. Si le das basura, funciona como basura. Si le das lo que necesita, rinde al maximo. Es asi de simple.',
    },
    {
      type: 'heading',
      content: 'La ciencia del azucar',
    },
    {
      type: 'paragraph',
      content:
        'El azucar activa las mismas zonas del cerebro que la cocaina. No es una exageracion, es neurociencia. Cuando comes azucar, tu cerebro pide mas. Es una adiccion real. Y la industria alimentaria lo sabe y lo explota.',
    },
    {
      type: 'heading',
      content: 'Que sacar y que sumar',
    },
    {
      type: 'table',
      content: 'Guia practica de cambios',
      rows: [
        {
          col1: 'Azucar refinada',
          col2: 'Activa adiccion, inflama, roba energia',
          col3: 'Proteina en cada comida',
        },
        {
          col1: 'Ultra-procesados',
          col2: 'Sin nutrientes reales, llenos de quimicos',
          col3: 'Verduras y frutas reales',
        },
        {
          col1: 'Harina blanca',
          col2: 'Se convierte en azucar en tu cuerpo',
          col3: '2 litros de agua por dia',
        },
        {
          col1: 'Sedentarismo',
          col2: 'Tu cuerpo se atrofia sin movimiento',
          col3: 'Movimiento diario (caminar, entrenar)',
        },
        {
          col1: 'Celular antes de dormir',
          col2: 'Destruye la calidad de suenio',
          col3: '7-8 horas de suenio real',
        },
        {
          col1: 'Comer por ansiedad',
          col2: 'Ciclo emocional destructivo',
          col3: 'Respiracion consciente 5 min/dia',
        },
      ],
    },
    {
      type: 'heading',
      content: 'El efecto domino',
    },
    {
      type: 'paragraph',
      content:
        'Cuando dormis bien, tenes energia. Cuando tenes energia, comes mejor. Cuando comes mejor, te moves mas. Cuando te moves mas, dormis mejor. Es un circulo virtuoso. Solo necesitas empujar la primera ficha.',
    },
    {
      type: 'heading',
      content: 'La matematica de 180 dias',
    },
    {
      type: 'paragraph',
      content:
        'En 180 dias tu cuerpo se transforma completamente. Cada celula de tu cuerpo se renueva. Si durante esos 180 dias le das los materiales correctos, el cuerpo que vas a tener en 6 meses va a ser literalmente diferente al que tenes hoy.',
    },
    {
      type: 'quote',
      content:
        'Tu cuerpo no es un obstaculo. Es tu herramienta principal. Cuidalo como cuidarias la unica herramienta que tenes para construir la vida que queres.',
    },
  ],
  exercise: {
    title: 'Registro de cuerpo + 1 cambio',
    description:
      'Lleva un registro diario simple de 3 cosas: que comiste, cuanto dormiste y cuanto te moviste. Ademas, elimina 1 cosa mala y agrega 1 cosa buena.',
    weeks: [
      'Semana 1-2: Solo registra comida, suenio y movimiento. No cambies nada todavia. Observa tus patrones.',
      'Semana 3-4: Elimina UNA cosa de la columna "Que sacar". Empieza por la mas facil para vos.',
      'Semana 5-8: Agrega UNA cosa de la columna "Que sumar". Sostene las dos.',
      'Semana 9-12: Evalua. Agrega un segundo cambio en cada columna si los primeros ya son habito.',
    ],
  },
  closingQuote:
    'En 180 dias podes tener un cuerpo completamente diferente. No necesitas un gimnasio caro ni una dieta imposible. Necesitas micro-decisiones conscientes, todos los dias.',
  connectionText:
    'Con el cuerpo funcionando bien, tenes la energia y la claridad para el ultimo paso: tu relacion con el mundo. El Paso 7 cierra el circulo y conecta todo.',
};

// =============================================================================
// STEP 7 - Tu Relacion con el Mundo
// =============================================================================

const step7: StepContent = {
  number: 7,
  title: 'Tu Relacion con el Mundo',
  subtitle: 'Todo es personal, hasta el perdon',
  icon: '\uD83D\uDD4A\uFE0F',
  color: 'indigo',
  summary:
    'Perdonar es soltar el peso que te frena. Se Suiza: no entres en guerras que no son tuyas. Prioriza a tu familia y limpia tus vinculos.',
  sections: [
    {
      type: 'heading',
      content: 'Todo es personal',
    },
    {
      type: 'paragraph',
      content:
        'Todo lo que te pasa en la vida es personal. Tus relaciones, tus conflictos, tus resentimientos. Todo pesa. Y ese peso te frena. Para avanzar, necesitas soltar.',
    },
    {
      type: 'heading',
      content: 'El perdon es para vos',
    },
    {
      type: 'paragraph',
      content:
        'Perdonar no es decirle al otro que lo que hizo esta bien. Perdonar es soltar el peso que llevas encima. Es para vos, no para el otro. Mientras no perdones, esa persona sigue teniendo poder sobre tu vida, tu energia y tus emociones.',
    },
    {
      type: 'quote',
      content:
        'Se Suiza. No entres en guerras que no son tuyas. No gastes energia en batallas que no te van a llevar a ningún lado.',
    },
    {
      type: 'heading',
      content: 'Se Suiza',
    },
    {
      type: 'paragraph',
      content:
        'Ser Suiza significa ser neutral. No entrar en chismes, no meterte en conflictos ajenos, no alimentar dramas. Cada minuto que gastas en la guerra de otro es un minuto que le robas a tu propio crecimiento. Recordas el Paso 1? Todo cuenta. Tambien lo que gastas en conflictos inutiles.',
    },
    {
      type: 'heading',
      content: 'Relaciones que nutren vs. relaciones toxicas',
    },
    {
      type: 'paragraph',
      content:
        'Las relaciones son como la comida: hay relaciones que te nutren y relaciones que te intoxican. Asi como en el Paso 6 aprendiste a elegir que entra en tu cuerpo, aca aprendes a elegir que relaciones entran en tu vida.',
    },
    {
      type: 'table',
      content: 'Que soltar y que priorizar',
      rows: [
        {
          col1: 'Resentimientos viejos',
          col2: 'Te roban energia presente por algo del pasado',
          col3: 'Tu familia nuclear',
        },
        {
          col1: 'Chismes y dramas',
          col2: 'Consumen tiempo y energia sin retorno',
          col3: 'Relaciones que te empujan a crecer',
        },
        {
          col1: 'Necesidad de tener razon',
          col2: 'Destruye vinculos por ego',
          col3: 'Conversaciones genuinas',
        },
        {
          col1: 'Relaciones por obligacion',
          col2: 'Drenan sin aportar',
          col3: 'Tiempo de calidad con quienes importan',
        },
        {
          col1: 'Compararte con otros',
          col2: 'Carrera que no podes ganar',
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
        'Al final del dia, lo que mas importa es tu familia. Tu pareja, tus hijos, tus padres. Todo lo demas es secundario. No sacrifiques lo mas importante por lo urgente. La familia es tu base, tu red de contencion, tu motor.',
    },
    {
      type: 'heading',
      content: 'La formula de los 7 pasos',
    },
    {
      type: 'paragraph',
      content:
        'Todo se conecta: tus micro-decisiones (1) tienen direccion gracias a tus objetivos (2), tu entorno (3) te facilita o te frena, tu autopercepcion (4) te da o te quita energia, la disciplina (5) es el motor, tu cuerpo (6) es el vehiculo, y tu relacion con el mundo (7) es el camino. Los 7 pasos funcionan juntos, no por separado.',
    },
  ],
  exercise: {
    title: 'Limpia tu relacion con el mundo',
    description:
      'Identifica a las personas con las que tenes conflictos pendientes, resentimientos, o relaciones que te restan. Practica ser Suiza: neutral, sin guerras innecesarias.',
    weeks: [
      'Semana 1-2: Hace una lista de resentimientos y conflictos pendientes. No para resolverlos todos, sino para verlos con claridad.',
      'Semana 3-4: Elige uno y perdonalo. No hace falta llamar a la persona. El perdon es interno, es soltar.',
      'Semana 5-8: Practica ser Suiza en el dia a dia. Cuando alguien te invite a un drama, no entres. Observa cuanta energia te ahorra.',
      'Semana 9-12: Invierte esa energia ahorrada en tu familia y en las relaciones que te nutren. Medí la diferencia.',
    ],
  },
  closingQuote:
    'Los 7 pasos no son una receta magica. Son un sistema. Y como todo sistema, funciona cuando lo aplicas completo, todos los dias, un paso a la vez.',
  connectionText:
    'El Paso 7 cierra el circulo. Tu relacion con el mundo es el resultado de los 6 pasos anteriores. Cuando los 7 funcionan juntos, tu vida cambia. No en un dia, sino en 180.',
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
