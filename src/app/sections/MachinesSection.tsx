"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const machines = [
  {
    name: "Betonera",
    description: "Ideal para mezclas de hormigón y trabajos de construcción.",
    image: "/images/betonera.png",
  },
  {
    name: "Cango Demoledor",
    description: "Potencia y precisión para demolición pesada.",
    image: "/images/cangodemoledor.jpg",
  },
  {
    name: "Placa Compactadora",
    description: "Compactación eficiente para suelos y pavimentos.",
    image: "/images/placacompactadora.webp",
  },
  {
    name: "Vibropisón",
    description: "Perfecto para espacios reducidos y zanjas.",
    image: "/images/vibropison.jpg",
  },
  {
    name: "Motobomba",
    description: "Solución rápida para extracción y traslado de agua.",
    image: "/images/motobomba.jpg",
  },
  {
    name: "Bomba Sumergible",
    description: "Equipos confiables para drenaje y bombeo.",
    image: "/images/bombasumergible.jpg",
  },
];

export default function MachinesSection() {
  return (
    <section
      id="maquinas"
      className="py-32 px-6 bg-gradient-to-b from-white via-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-20">
          <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase mb-4">
            Catálogo
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Nuestras <span className="text-orange-500">Máquinas</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Equipos confiables para construcción, demolición, compactación
            y soluciones profesionales para cada proyecto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {machines.map((machine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >
              
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition">
                  {machine.name}
                </h3>

                <p className="text-gray-600 leading-relaxed min-h-[80px]">
                  {machine.description}
                </p>

                {/* Botón */}
                <a
                  href="https://wa.me/56900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-md hover:shadow-lg"
                >
                  Consultar
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}