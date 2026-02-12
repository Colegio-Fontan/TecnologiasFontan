"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Clock,
  Layers,
  Calendar,
  MessageSquare,
  Monitor,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowRight
} from "lucide-react";

const tools = [
  {
    title: "Fontan digital",
    url: "https://plataformafontan.azurewebsites.net",
    icon: <Monitor className="w-14 h-14" />,
    smallIcon: <Monitor className="w-8 h-8" />,
    description: "Plataforma de creación y gestión de contenidos educativos virtuales. El corazón del aprendizaje digital del colegio.",
    color: "#50007D",
  },
  {
    title: "Gestión inventario",
    url: "https://gestioninventariofontan.vercel.app/",
    icon: <ClipboardList className="w-14 h-14" />,
    smallIcon: <ClipboardList className="w-8 h-8" />,
    description: "Sistema especializado para el control y seguimiento de dispositivos electrónicos y computadores institucionales.",
    color: "#00C8FF",
  },
  {
    title: "Horario sistema",
    url: "https://horariosistemafontan.online",
    icon: <Clock className="w-14 h-14" />,
    smallIcon: <Clock className="w-8 h-8" />,
    description: "Consulta de horarios académicos de los estudiantes en tiempo real. Mantente al día con las asignaciones.",
    color: "#50007D",
  },
  {
    title: "Software procesos",
    url: "https://software-procesos-fontan.vercel.app",
    icon: <Layers className="w-14 h-14" />,
    smallIcon: <Layers className="w-8 h-8" />,
    description: "Gestión y automatización de procesos internos para una operación institucional eficiente.",
    color: "#00C8FF",
  },
  {
    title: "Calendario",
    url: "https://calendar.google.com/calendar/u/0/r?cid=Y2U3ZDc0NzgyZGU0MGEwMDNkZWU1NDkyYjQ2OTAzZTExOTk1YjE1NG%E2%80%A6",
    icon: <Calendar className="w-14 h-14" />,
    smallIcon: <Calendar className="w-8 h-8" />,
    description: "Calendario oficial del Taller U. Sincroniza eventos, fechas especiales y cronogramas institucionales.",
    color: "#50007D",
  },
  {
    title: "GPT informes",
    url: "https://chatgpt.com/g/g-692094896bd08191a0bf90946803af89-generador-informes-sistema-fontan",
    icon: <MessageSquare className="w-14 h-14" />,
    smallIcon: <MessageSquare className="w-8 h-8" />,
    description: "Generador inteligente de informes para procesos de finalización y citas de seguimiento.",
    color: "#00C8FF",
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const itv = setInterval(() => setCurrent((p) => (p + 1) % tools.length), 8000);
    return () => clearInterval(itv);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans selection:bg-fontan-cyan/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/Logo.png" alt="Fontan" className="h-10 w-auto" />
            <div className="w-[1px] h-6 bg-slate-200" />
            <h1 className="text-lg font-black tracking-tighter text-fontan-violet">Ecosistema Fontan</h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-[0.2em] text-slate-400">
            <span className="text-fontan-violet underline decoration-fontan-cyan decoration-2 underline-offset-4">Directorio</span>
            <span className="hover:text-fontan-cyan cursor-pointer transition-all">Soporte TI</span>
            <span className="hover:text-fontan-cyan cursor-pointer transition-all">Comunidad</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-20 px-6 space-y-24">

        {/* Banner Section */}
        <section className="max-w-7xl mx-auto">
          <div className="relative bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden min-h-[450px] flex items-center transition-all duration-500">
            {/* Animated Background Gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-fontan-cyan/5 rounded-full blur-[100px] -mr-20 -mt-20 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-fontan-violet/5 rounded-full blur-[100px] -ml-20 -mb-20 animate-pulse" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative grid md:grid-cols-2 gap-12 items-center w-full"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[10px] font-black tracking-widest text-slate-500"
                  >
                    <span className="w-2 h-2 rounded-full bg-fontan-cyan animate-pulse" />
                    Software Institucional
                  </motion.div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950 leading-none">
                    {tools[current].title}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                    {tools[current].description}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={tools[current].url}
                      target="_blank"
                      className="px-10 py-5 bg-fontan-violet text-white rounded-2xl font-bold tracking-widest text-xs shadow-xl shadow-fontan-violet/30 hover:shadow-fontan-violet/50 transition-all flex items-center gap-3 active:scale-95"
                    >
                      Entrar a la aplicación
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex justify-items-end">
                  <motion.div
                    key={current + "-hero-icon"}
                    initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    className="p-20 rounded-[3rem] bg-gradient-to-br from-slate-50 to-white border-4 border-white shadow-2xl text-fontan-violet"
                  >
                    {tools[current].icon}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation */}
            <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-4">
              <button onClick={() => setCurrent((c) => (c - 1 + tools.length) % tools.length)} className="p-3 rounded-full hover:bg-slate-50 transition-colors border border-slate-100 shadow-sm bg-white">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {tools.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-12 bg-fontan-violet' : 'w-3 bg-slate-200'}`}
                  />
                ))}
              </div>
              <button onClick={() => setCurrent((c) => (c + 1) % tools.length)} className="p-3 rounded-full hover:bg-slate-50 transition-colors border border-slate-100 shadow-sm bg-white">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Quick Access Grid */}
        <section className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col items-center text-center space-y-3">
            <h3 className="text-3xl font-black tracking-tighter text-slate-900 leading-none">Acceso rápido</h3>
            <div className="w-16 h-1 bg-fontan-cyan rounded-full" />
            <p className="text-[10px] font-bold tracking-[0.3em] text-slate-400">Selecciona la plataforma que deseas utilizar</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {tools.map((tool, i) => (
              <motion.a
                key={tool.title}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -12, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white rounded-[3rem] border border-slate-100 p-10 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-2xl transition-all"
              >
                <div
                  className="p-6 rounded-3xl transition-all shadow-sm group-hover:shadow-lg group-hover:-rotate-6"
                  style={{ backgroundColor: tool.color, color: 'white' }}
                >
                  {tool.smallIcon}
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-fontan-violet transition-colors">
                    {tool.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium leading-tight max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Acceder directamente
                  </p>
                </div>
                <div className="w-0 h-1 bg-fontan-cyan group-hover:w-12 transition-all duration-500 rounded-full" />
              </motion.a>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-b border-slate-800 pb-16">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <img src="/Logo.png" alt="Fontan" className="h-14 brightness-0 invert" />
            <p className="max-w-xs text-center md:text-left text-sm font-medium leading-relaxed">
              Gestionamos el futuro de la educación con tecnología de alto impacto institucional.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 md:gap-24 text-[10px] font-black tracking-[0.3em] text-slate-600">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-slate-400">Portal</span>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer transition-colors">Soporte TI</li>
                <li className="hover:text-white cursor-pointer transition-colors">Seguridad</li>
                <li className="hover:text-white cursor-pointer transition-colors">Docentes</li>
              </ul>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <span className="text-slate-400">Institución</span>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer transition-colors">Web Oficial</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
                <li className="hover:text-white cursor-pointer transition-colors">Admisiones</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black tracking-[0.4em] text-slate-700">
          <span>&copy; {new Date().getFullYear()} Colegio Fontan - Colombia</span>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <span>Desarrollado para la excelencia educativa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
