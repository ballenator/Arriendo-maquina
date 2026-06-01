"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/56912345678"
      target="_blank"
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