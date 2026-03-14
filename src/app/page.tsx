import Link from "next/link";
import {
  Zap,
  Target,
  Users,
  Eye,
  Dumbbell,
  HeartPulse,
  Feather,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Trophy,
  Calendar,
  Star,
} from "lucide-react";

const chapters = [
  { number: 1, title: "Todo Cuenta", icon: Zap, teaser: "1.440 minutos por día. Cada uno suma o resta. No hay decisiones neutrales.", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
  { number: 2, title: "Objetivos", icon: Target, teaser: "10 objetivos concretos, escritos en presente, para 180 días.", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
  { number: 3, title: "Tu Entorno", icon: Users, teaser: "Sos el promedio de las 5 personas con las que más tiempo pasás.", color: "text-violet-500", bg: "bg-violet-50", border: "border-violet-200" },
  { number: 4, title: "Autopercepción", icon: Eye, teaser: "Cada 'yo no puedo' es una orden directa a tu cerebro.", color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200" },
  { number: 5, title: "Disciplina", icon: Dumbbell, teaser: "No es un talento. Es un músculo que se entrena de a poco.", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200" },
  { number: 6, title: "Tu Cuerpo", icon: HeartPulse, teaser: "Tu cerebro usa el 20% de tu energía. Si le das basura, funciona como basura.", color: "text-cyan-500", bg: "bg-cyan-50", border: "border-cyan-200" },
  { number: 7, title: "Tu Relación con el Mundo", icon: Feather, teaser: "Perdoná, soltá, sé Suiza. Tu familia primero, siempre.", color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-200" },
];

const stats = [
  { number: "60hs", label: "de ejercicio caminando 20 min/día" },
  { number: "5kg", label: "menos de azúcar sin gaseosa" },
  { number: "120hs", label: "de formación sin redes sociales" },
  { number: "3.650", label: "victorias con 10 micro-decisiones/día" },
];

const howItWorks = [
  {
    step: 1,
    icon: BookOpen,
    title: "Leé el libro",
    description: "7 capítulos que te dan el marco completo para transformar tu vida. Lectura inmersiva, paso a paso.",
    color: "text-victoria-600",
    bg: "bg-victoria-50",
  },
  {
    step: 2,
    icon: Target,
    title: "Escribí tus 10 objetivos",
    description: "El libro te guía a escribir 10 objetivos concretos, en presente, para los próximos 180 días.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    step: 3,
    icon: Trophy,
    title: "Trackeá tus victorias",
    description: "Cada día sumás micro-victorias. Tu cerebro genera oxitocina y quiere más. Así se construye el cambio.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <BookOpen size={24} className="text-victoria-500" />
          <span className="text-xl font-display font-bold text-stone-900">
            7 Pasos
          </span>
        </div>
        <Link
          href="/login"
          className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
        >
          Iniciar sesión
        </Link>
      </nav>

      {/* Hero — El libro como protagonista */}
      <section className="px-6 md:px-12 pt-12 pb-16 md:pt-20 md:pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-victoria-100 text-victoria-700 text-sm font-medium mb-6">
              <BookOpen size={15} />
              Libro digital + App companion
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 leading-tight mb-5">
              7 Pasos para{" "}
              <span className="text-victoria-500">Cambiar tu Vida</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-4">
              Un libro que te da el sistema completo para transformarte en 180 días.
              No motivación vacía: un método concreto basado en micro-decisiones,
              oxitocina y disciplina progresiva.
            </p>
            <p className="text-base text-stone-400 mb-8">
              Leé el libro. Escribí tus objetivos. Trackeá tus victorias diarias.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-victoria-500 text-white font-semibold text-lg hover:bg-victoria-600 transition-all shadow-lg shadow-victoria-500/20 hover:shadow-xl hover:shadow-victoria-500/30"
              >
                Leer el libro
                <ArrowRight size={20} />
              </Link>
              <span className="text-sm text-stone-400">
                Empezar por $9 USD
              </span>
            </div>
          </div>

          {/* Right: Book Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Book shadow */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-stone-200/50 rounded-2xl" />
              {/* Book spine */}
              <div className="absolute left-0 top-2 bottom-2 w-4 bg-gradient-to-r from-victoria-700 to-victoria-600 rounded-l-lg -translate-x-2 shadow-inner" />
              {/* Book cover */}
              <div className="relative w-72 md:w-80 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-8 md:p-10 shadow-2xl">
                {/* Decorative line */}
                <div className="w-12 h-1 bg-victoria-500 rounded-full mb-6" />
                <p className="text-victoria-400 text-sm font-medium tracking-wider uppercase mb-3">
                  El método de 180 días
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
                  7 Pasos para Cambiar tu Vida
                </h2>
                <div className="w-8 h-0.5 bg-stone-600 rounded-full mb-4" />
                <p className="text-stone-400 text-sm leading-relaxed mb-8">
                  Micro-decisiones · Oxitocina · Disciplina progresiva
                </p>
                {/* Chapter preview */}
                <div className="space-y-2">
                  {chapters.slice(0, 4).map((ch) => (
                    <div
                      key={ch.number}
                      className="flex items-center gap-2 text-stone-500 text-xs"
                    >
                      <span className="text-victoria-500 font-mono">{ch.number}.</span>
                      <span>{ch.title}</span>
                    </div>
                  ))}
                  <span className="text-stone-600 text-xs">... y 3 capítulos más</span>
                </div>
                {/* Bottom decoration */}
                <div className="absolute bottom-6 right-8 text-stone-700 text-xs font-mono">
                  180 días
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hay adentro — Los 7 capítulos */}
      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-victoria-500 uppercase tracking-wider mb-3">
            Qué hay adentro del libro
          </h2>
          <p className="text-3xl md:text-4xl font-display font-bold text-stone-900">
            7 capítulos, un sistema completo
          </p>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Cada capítulo se conecta con el siguiente. Juntos forman el método
            para transformar tu vida en 180 días.
          </p>
        </div>
        <div className="space-y-3">
          {chapters.map((ch) => (
            <div
              key={ch.number}
              className={`flex items-start gap-5 bg-white rounded-2xl border ${ch.border} p-5 md:p-6 hover:shadow-sm transition-all`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${ch.bg} flex items-center justify-center flex-shrink-0`}
              >
                <ch.icon size={22} className={ch.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                    Capítulo {ch.number}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-stone-900 text-lg">
                  {ch.title}
                </h3>
                <p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  {ch.teaser}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona — Las 3 etapas */}
      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-victoria-500 uppercase tracking-wider mb-3">
            Cómo funciona
          </h2>
          <p className="text-3xl md:text-4xl font-display font-bold text-stone-900">
            Leé. Escribí. Trackeá.
          </p>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            No es solo un libro. Es un libro con una app que te acompaña
            180 días para que realmente apliques lo que leíste.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {howItWorks.map((item, i) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-stone-200" />
              )}
              <div className="bg-white rounded-2xl border border-stone-100 p-6 h-full">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon size={22} className={item.color} />
                </div>
                <div className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                  Etapa {item.step}
                </div>
                <h3 className="text-lg font-display font-semibold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats — La matematica */}
      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <h2 className="text-center text-sm font-semibold text-stone-400 uppercase tracking-wider mb-8">
          Hacé las cuentas de 180 días
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="bg-white rounded-2xl border border-stone-100 p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-victoria-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Oxitocina — La ciencia */}
      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-victoria-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-victoria-500/5 rounded-full blur-2xl" />
          <div className="relative">
            <p className="text-victoria-400 text-sm font-semibold uppercase tracking-wider mb-3">
              La ciencia detrás del método
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Tu cerebro quiere que ganes
            </h2>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed max-w-2xl">
              Cada micro-victoria libera oxitocina en tu cerebro. Tu cerebro
              registra esa victoria y quiere repetirla. No es magia, es
              neurociencia. El libro te explica cómo usar ese circuito a tu favor.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 size={18} className="text-victoria-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Micro-decisión positiva</p>
                  <p className="text-stone-400 text-xs mt-1">Tu cerebro libera oxitocina</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <Star size={18} className="text-victoria-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Victoria registrada</p>
                  <p className="text-stone-400 text-xs mt-1">Tu cerebro quiere más</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <Calendar size={18} className="text-victoria-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">180 días de circuito</p>
                  <p className="text-stone-400 text-xs mt-1">Transformación real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quien es */}
      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">
            Este libro es para vos si...
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            "Sentís que tu vida no avanza pero no sabés por dónde empezar",
            "Probaste mil cosas pero no podés sostener los cambios",
            "Te falta un sistema concreto, no más motivación vacía",
            "Querés resultados reales en los próximos 6 meses",
            "Estás cansado de apps de hábitos que no conectan con nada",
            "Buscás algo práctico, directo y sin chamuyo",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-100"
            >
              <CheckCircle2 size={18} className="text-victoria-500 mt-0.5 flex-shrink-0" />
              <p className="text-stone-700 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final + Pricing Card */}
      <section className="px-6 md:px-12 pb-20 max-w-6xl mx-auto">
        <div className="max-w-md mx-auto">
          {/* Pricing Card */}
          <div className="bg-white rounded-3xl border-2 border-victoria-200 p-8 text-center shadow-lg shadow-victoria-500/5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-victoria-100 text-victoria-700 text-xs font-semibold uppercase tracking-wider mb-5">
              Libro completo
            </div>
            <div className="mb-1">
              <span className="text-5xl font-bold text-stone-900">$9</span>
            </div>
            <p className="text-sm text-stone-400 mb-6">USD · Acceso de por vida</p>

            <div className="space-y-3 text-left mb-8">
              {[
                "Los 7 pasos completos",
                "Framework de micro-decisiones y oxitocina",
                "Definí tus 10 objetivos (4 categorías)",
                "Tracker diario con cuenta (180 días)",
                "Lectura matutina de tus objetivos",
                "Progreso guardado y visualización de racha",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-victoria-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-stone-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/login"
              className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-2xl bg-victoria-500 text-white font-semibold text-lg hover:bg-victoria-600 transition-all shadow-lg shadow-victoria-500/20 hover:shadow-xl hover:shadow-victoria-500/30"
            >
              Empezar por $9
              <ArrowRight size={20} />
            </Link>
          </div>

          <p className="text-xs text-stone-400 italic max-w-sm mx-auto text-center mt-6">
            &ldquo;Tu vida no cambia el día que decidís cambiarla.
            Cambia el día que empezás a hacer las cosas de manera diferente,
            una micro-decisión a la vez.&rdquo;
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-stone-400" />
            <span className="text-sm text-stone-400">
              7 Pasos para Cambiar tu Vida
            </span>
          </div>
          <span className="text-sm text-stone-400">
            Un libro + app para 180 días de transformación
          </span>
        </div>
      </footer>
    </div>
  );
}
