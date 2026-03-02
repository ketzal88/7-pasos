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
  TrendingUp,
} from "lucide-react";

const steps = [
  { number: 1, title: "Todo Cuenta", icon: Zap, description: "Cada micro-decisión te acerca o te aleja", color: "text-amber-500", bg: "bg-amber-50" },
  { number: 2, title: "Objetivos", icon: Target, description: "10 objetivos concretos para 180 días", color: "text-blue-500", bg: "bg-blue-50" },
  { number: 3, title: "Tu Entorno", icon: Users, description: "Rodeáte de los que empujan", color: "text-violet-500", bg: "bg-violet-50" },
  { number: 4, title: "Autopercepción", icon: Eye, description: "Cómo te hablás define lo que creés posible", color: "text-rose-500", bg: "bg-rose-50" },
  { number: 5, title: "Disciplina", icon: Dumbbell, description: "El músculo que sostiene todo", color: "text-emerald-500", bg: "bg-emerald-50" },
  { number: 6, title: "Tu Cuerpo", icon: HeartPulse, description: "Tu vehículo para los 180 días", color: "text-cyan-500", bg: "bg-cyan-50" },
  { number: 7, title: "Tu Relación con el Mundo", icon: Feather, description: "Perdoná, soltá, sé Suiza", color: "text-indigo-500", bg: "bg-indigo-50" },
];

const stats = [
  { number: "60hs", label: "de movimiento si caminás 20 min/día" },
  { number: "5kg", label: "menos de azúcar sin gaseosa" },
  { number: "120hs", label: "de formación sin redes sociales" },
  { number: "900", label: "victorias con 5 micro-decisiones/día" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <span className="text-2xl font-display font-bold text-stone-900">
          7 Pasos
        </span>
        <Link
          href="/login"
          className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
        >
          Iniciar sesión
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-victoria-100 text-victoria-700 text-sm font-medium mb-8">
          <TrendingUp size={16} />
          Programa de 180 días
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-stone-900 leading-tight mb-6">
          Cambiá tu vida con{" "}
          <span className="text-victoria-500">micro-decisiones</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          No necesitás cambiar todo de un día para el otro. Necesitás cambiar una
          micro-decisión hoy. Mañana otra. Y en 180 días, no vas a poder creer lo
          lejos que llegaste.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-victoria-500 text-white font-semibold text-lg hover:bg-victoria-600 transition-all shadow-lg shadow-victoria-500/20 hover:shadow-xl hover:shadow-victoria-500/30"
          >
            Empezar ahora
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* 7 Steps Preview */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 text-center mb-4">
            7 pasos simples, miles de victorias
          </h2>
          <p className="text-stone-500 text-center mb-12 max-w-xl mx-auto">
            Cada paso se conecta con los demás. Juntos, sostenidos 180 días, te
            transforman la vida.
          </p>
          <div className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-5 bg-white rounded-2xl border border-stone-100 p-5 hover:border-stone-200 hover:shadow-sm transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <step.icon size={22} className={step.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-stone-400 uppercase">
                      Paso {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone-900">{step.title}</h3>
                  <p className="text-sm text-stone-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oxitocina Section */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-victoria-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            La magia de la oxitocina
          </h2>
          <p className="text-white/80 text-lg mb-6 leading-relaxed">
            Cada micro-logro que alcanzás genera oxitocina en tu cerebro. Tu
            cerebro lo registra como una victoria y quiere volver a hacerlo.
            Así se construye el cambio: no con heroísmo, sino con pequeñas
            victorias repetidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-white/80" />
              <span className="text-white/90">5 victorias/día = 900 en 180 días</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-white/80" />
              <span className="text-white/90">Cada victoria genera más oxitocina</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-display text-stone-600 italic mb-8">
            &ldquo;Todo cuenta. Todo sucede en vos. Y vos tenés el poder de elegir.
            Hoy es el día 1 de los próximos 180. Hacé que cuente.&rdquo;
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-all"
          >
            Empezá tus 180 días
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-sm text-stone-400">
            7 Pasos para Cambiar tu Vida
          </span>
          <span className="text-sm text-stone-400">180 días de micro-decisiones</span>
        </div>
      </footer>
    </div>
  );
}
