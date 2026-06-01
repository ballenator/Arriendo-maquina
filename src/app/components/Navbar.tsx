"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <Image
              src="/images/betonera.png"
              alt="Logo"
              width={55}
              height={55}
              className="object-contain group-hover:scale-105 transition duration-300"
            />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">
              ASG<span className="text-orange-500">Contru</span>
            </h1>

            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">
              Arriendo Profesional
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-700">
          <a href="#inicio" className="hover:text-orange-500 transition">
            Inicio
          </a>

          <a href="#maquinas" className="hover:text-orange-500 transition">
            Máquinas
          </a>

          <a href="#nosotros" className="hover:text-orange-500 transition">
            Nosotros
          </a>

          <a href="#contacto" className="hover:text-orange-500 transition">
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/56954780824"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-orange-600 hover:scale-105 transition shadow-md"
        >
          Cotizar
        </a>

        {/* Mobile icon */}
        <button className="md:hidden text-gray-900">
          <Menu className="w-7 h-7" />
        </button>

      </div>
    </header>
  );
}