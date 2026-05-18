/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  BookOpen, 
  Star, 
  ShieldCheck,
  TrendingUp,
  Infinity
} from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">K</div>
            <span className="font-bold text-xl tracking-tight">SISTEMA <span className="text-orange-500">KAIZEN</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#que-es" className="hover:text-white transition-colors">Qué es</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
            <a href="#acceso" className="hover:text-white transition-colors">Acceso</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-orange-500 border border-orange-500/30 px-2 py-1 rounded">COMUNIDAD SELECTA</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ea580c33,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,#ea580c11,transparent_50%)]" />
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop" 
            alt="Espacio Temporada Infinita" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-6">
              <Zap className="w-3 h-3" />
              Acceso Sin Barreras
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
              EL ESPACIO DE LA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">TEMPORADA INFINITA</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-white/60 mb-10 leading-relaxed">
              Donde el conocimiento de $3,000 USD se vuelve accesible. Un pedazo de nuestro plan más exclusivo, disponible para ti cada 30 días.
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-orange-500 font-bold tracking-widest uppercase text-sm border-l-2 border-orange-500 pl-4">
                Estás en el lugar donde el conocimiento de élite deja de ser un lujo y se convierte en tu realidad.
              </p>
              
              <div className="flex gap-4 pt-4">
                <button title="Compartir en Twitter" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </button>
                <button title="Compartir en Facebook" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.319.351 3.319.351v2.725h-1.392c-2.109 0-2.551 1.054-2.551 2.399v1.083h4.635l-.741 3.667h-3.894v7.98c-1.35.215-2.738.215-4.088 0z"/></svg>
                </button>
                <button title="Compartir en WhatsApp" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.033L0 24l6.117-1.605A11.84 11.84 0 0012.05 24c6.634 0 12.032-5.393 12.035-12.031a11.751 11.751 0 00-3.526-8.508z"/></svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why it was created Section */}
      <section id="que-es" className="py-24 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 tracking-tight uppercase">¿QUÉ ES ESTE ESPACIO Y <span className="text-orange-500">POR QUÉ EXISTE</span>?</h2>
              <div className="space-y-6 text-lg text-white/70">
                <p>
                  El **Espacio de la Temporada Infinita** no es una sección más de nuestra plataforma; es el puente hacia tu transformación profesional.
                </p>
                <div className="p-6 border-l-4 border-orange-600 bg-white/5 rounded-r-xl my-8">
                  <h4 className="text-white font-bold mb-2">Nuestra Misión:</h4>
                  <p className="text-sm italic italic text-white/50">
                    "Creamos este espacio para que todos tengan la oportunidad real de estudiar con materiales que normalmente cuestan miles de dólares, permitiéndoles tocar la excelencia del Sistema Kaizen."
                  </p>
                </div>
                <p>
                  Hemos seleccionado el ADN de nuestro plan más caro —valorado en **$97 mensuales** o **$599 anuales**— y hemos abierto esta ventana de 30 días.
                </p>
                <p className="font-bold text-white bg-orange-600/20 p-4 rounded-lg inline-block">
                  Cursos de más de $3,000 USD que rotan cada mes.
                </p>
                <p>
                  Lo creamos porque creemos en el talento sin importar el presupuesto inicial. Si tienes la disciplina de estudiar cada mes, tienes un lugar en la Temporada Infinita.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gradient-to-br from-orange-600/20 to-transparent rounded-3xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Infinity className="w-64 h-64" />
              </div>
              
              <div className="flex justify-between items-start">
                <div className="bg-orange-600 px-4 py-2 rounded-full text-xs font-black uppercase">Próximo Cambio</div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />)}
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="text-6xl font-black text-white/20">01</div>
                <h3 className="text-3xl font-bold">Un curso nuevo cada mes. Sin excusas.</h3>
                <p className="text-white/50">Piezas master de nuestro plan Kaizen Infinite disponibles para todos bajo un modelo de rotación estratégica.</p>
              </div>

              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "65%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-orange-600"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="beneficios" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">Por qué estudiar aquí</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Calidad Premium",
                desc: "Materiales valorados en más de $3,000 USD. No son cursos básicos, son sistemas completos de transformación."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Cada 30 Días",
                desc: "Remplazamos el contenido mensualmente. La urgencia es tu aliada: estudia, aplica y domina antes del próximo cambio."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Sistema Kaizen",
                desc: "Forma parte de una metodología diseñada para que nunca dejes de crecer. Mejora un 1% cada día."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access / Pricing Comparison */}
      <section id="acceso" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">DOS CAMINOS HACIA LA <span className="text-orange-500">EXCELENCIA</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-16 text-lg">
            Elige el nivel de acceso que mejor se adapte a tu hambre de crecimiento.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Espacio Temporada Infinita */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-orange-500/30 transition-all">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-white/30 tracking-widest uppercase italic">Acceso Rotativo</div>
              <h3 className="text-2xl font-bold mb-2">Espacio Temporada Infinita</h3>
              <div className="space-y-1 mb-6">
                <div className="text-4xl font-black">1 CURSO<span className="text-lg font-normal text-white/40">/mes</span></div>
                <div className="text-xs font-bold text-orange-500">TU PUERTA DE ENTRADA</div>
              </div>
              <ul className="text-left space-y-4 mb-8 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Un curso de élite ($3,000+) cada 30 días</li>
                <li className="flex items-center gap-2 text-white/50"><CheckCircle2 className="w-4 h-4 text-orange-500/50" /> Remplazo automático mensual</li>
                <li className="flex items-center gap-2 text-white/50"><CheckCircle2 className="w-4 h-4 text-orange-500/50" /> Un pedazo del plan más exclusivo</li>
                <li className="flex items-center gap-2 text-white/50"><CheckCircle2 className="w-4 h-4 text-orange-500/50" /> Sistema de estudio de alto rendimiento</li>
              </ul>
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-sm font-bold text-white mb-2">EL DESTINO DE QUIENES BUSCAN LO MEJOR</p>
                <p className="text-[10px] text-white/40 leading-relaxed uppercase">
                  Accedes a una oportunidad que el 99% jamás podrá obtener. El lugar adecuado para tu evolución.
                </p>
              </div>
            </div>

            {/* Plan Temporada Infinita */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-600 to-orange-900 border border-orange-400 relative overflow-hidden shadow-2xl shadow-orange-600/30 transform md:scale-105 z-10">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Poder Total</div>
              <h3 className="text-2xl font-bold mb-2">Plan Temporada Infinita</h3>
              <div className="space-y-1 mb-6 text-left">
                <div className="text-4xl font-black">$97<span className="text-lg font-normal text-white/70">/mes</span></div>
                <div className="text-[10px] font-bold text-white tracking-widest uppercase">O $599 ANUAL (VALOR INMENSO)</div>
              </div>
              <div className="p-4 bg-black/20 rounded-xl mb-6 text-left border border-white/10">
                <div className="text-white font-black text-xl mb-1">+$250,000 USD</div>
                <div className="text-[10px] text-white/60 uppercase font-bold tracking-wider">Valor total en formación de élite</div>
              </div>
              <ul className="text-left space-y-4 mb-8 text-sm">
                <li className="flex items-center gap-2 font-bold"><ShieldCheck className="w-5 h-5 text-white" /> +100 Cursos Extras Súper Caros</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-white/70" /> Acceso Instantáneo a Todo el Ecosistema</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-white/70" /> Mentorías y Comunidad de Alto Valor</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-white/70" /> Sin rotaciones: Todo tuyo para siempre</li>
              </ul>
              <div className="mt-auto pt-8 space-y-6">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                  <p className="text-xs font-black text-white italic leading-relaxed uppercase text-center">
                    "EL QUE ACEPTA EL RETO KAIZEN DE ENSEÑARNOS UN MEJOR SISTEMA QUE EL NUESTRO TIENE UN AÑO GRATIS."
                  </p>
                </div>
                <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest text-center">
                  ESTÁS EN EL LUGAR CORRECTO. AQUÍ COMIENZA TU PODER TOTAL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 grayscale group-hover:grayscale-0 transition-all opacity-50">
            <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold">K</div>
            <span className="font-bold tracking-tight">SISTEMA KAIZEN</span>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Sistema Kaizen. Todos los derechos reservados. <br className="md:hidden" />
            La Temporada Infinita es una marca de Sistema Kaizen.
          </p>
        </div>
      </footer>
    </div>
  );
}
