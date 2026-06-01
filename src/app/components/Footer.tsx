"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">

          {/* Marca */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Maq<span className="text-orange-500">Rental</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Arriendo de maquinaria y herramientas para construcción,
              demolición y compactación con atención rápida y equipos confiables.
            </p>

            {/* Redes */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="bg-white/10 p-3 rounded-xl hover:bg-orange-500 transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="bg-white/10 p-3 rounded-xl hover:bg-orange-500 transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/56900000000"
                target="_blank"
                className="bg-white/10 p-3 rounded-xl hover:bg-orange-500 transition"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contacto
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                +56 9 1234 5678
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                asgspa.aguilaralonso@gmail.com
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Ubicación
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                Llanquihue, Chile
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 mt-1" />
                Lun - Sáb / 08:00 - 19:00
              </li>
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Navegación
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-orange-500 transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#maquinas" className="hover:text-orange-500 transition">
                  Máquinas
                </a>
              </li>

              <li>
                <a href="#nosotros" className="hover:text-orange-500 transition">
                  Nosotros
                </a>
              </li>

              <li>
                <a href="#contacto" className="hover:text-orange-500 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} MaqRental. Todos los derechos reservados.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Diseñado y desarrollado por{" "}
            <span className="text-orange-500 font-semibold">
              Felipe Balle
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}