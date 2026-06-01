"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl"></div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        {/* Badge */}
        <div className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold text-sm mb-8 shadow-sm">
          Soluciones en maquinaria para construcción
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight">
          Arriendo de{" "}
          <span className="text-orange-500">
            Maquinaria
          </span>{" "}
          para proyectos reales
        </h1>

        {/* Subtexto */}
        <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed">
          Equipos confiables para construcción, demolición, compactación
          y trabajo en terreno. Atención rápida, respaldo profesional
          y soluciones efectivas.
        </p>

        {/* Botones */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

          <a
            href="#maquinas"
            className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-orange-600 hover:scale-105 transition shadow-xl"
          >
            Ver Máquinas
          </a>

          <a
            href="https://wa.me/56954780824"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-orange-500 text-orange-500 px-10 py-5 rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition"
          >
            WhatsApp
          </a>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          
          <div>
            <h3 className="text-4xl font-extrabold text-gray-900">
              +100
            </h3>

            <p className="text-gray-600 mt-2">
              Clientes atendidos
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-gray-900">
              +6
            </h3>

            <p className="text-gray-600 mt-2">
              Tipos de maquinaria
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-gray-900">
              24/7
            </h3>

            <p className="text-gray-600 mt-2">
              Atención rápida
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}