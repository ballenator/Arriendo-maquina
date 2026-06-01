"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-32 px-6 bg-gradient-to-b from-orange-50 via-white to-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Imagen Premium */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl group"
        >
          <Image
            src="/images/betonera.png"
            alt="Maquinaria"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

          {/* Badge flotante */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-orange-500 font-bold text-lg">
              + Calidad + Confianza
            </p>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase mb-4">
            Quiénes Somos
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            Soluciones reales en{" "}
            <span className="text-orange-500">
              maquinaria y Construccion 
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Nos encargamos de arriendo de maquinaria para construcción,
            demolición, compactación y trabajo en terreno, ofreciendo equipos
            confiables, atención rápida y soluciones efectivas para cada cliente.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Nuestro compromiso es entregar herramientas de calidad, respaldo
            profesional y una experiencia segura para proyectos pequeños,
            medianos y grandes.
          </p>

          {/* Beneficios */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">
                Atención rápida
              </h3>
              <p className="text-gray-600 text-sm">
                Respuesta eficiente para cotizaciones y disponibilidad.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">
                Equipos confiables
              </h3>
              <p className="text-gray-600 text-sm">
                Maquinaria preparada para alto rendimiento.
              </p>
            </div>
          </div>

          {/* Botón */}
          <a
            href="#contacto"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition"
          >
            Solicitar información
          </a>
        </motion.div>

      </div>
    </section>
  );
}