"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const hora = new Date().getHours();

  const saludo =
    hora < 12
      ? "buenos días"
      : hora < 19
      ? "buenas tardes"
      : "buenas noches";

  const mensaje = encodeURIComponent(
    `Hola, ${saludo}. Vi su página web y me gustaría consultar disponibilidad y valor de arriendo para una de sus máquinas. Quedo atento. Gracias.`
  );

  return (
    <motion.a
      href={`https://wa.me/56954780824?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </motion.a>
  );
}