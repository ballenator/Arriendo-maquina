"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";

const formRef = useRef<HTMLFormElement>(null);
const [enviado, setEnviado] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const response = await fetch(
    "https://formspree.io/f/xykvqqbg",
    {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (response.ok) {
    setEnviado(true);
    formRef.current?.reset();

    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  } else {
    alert("Ocurrió un error al enviar la consulta.");
  }
};

export default function ContactSection() {
  return (

    <section
      id="contacto"
      className="py-32 px-6 bg-gradient-to-b from-white via-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-20">
          <p className="text-orange-500 font-semibold tracking-[0.3em] uppercase mb-4">
            Contacto
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Solicita tu <span className="text-orange-500">cotización</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Contáctanos para consultar disponibilidad, valores y maquinaria
            ideal para tu proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition">
              <div className="flex items-start gap-5">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Phone className="text-orange-500 w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Teléfono
                  </h3>

                  <p className="text-gray-600 text-lg">
                    +56 9 5478 0824
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition">
              <div className="flex items-start gap-5">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Mail className="text-orange-500 w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Correo
                  </h3>

                  <p className="text-gray-600 text-lg">
                    asgspa.aguilaralonso@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition">
              <div className="flex items-start gap-5">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <MapPin className="text-orange-500 w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ubicación
                  </h3>

                  <p className="text-gray-600 text-lg">
                    Llanquihue, Region de los lagos, Chile
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

            
          {/* Formulario */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-xl space-y-6"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
            />

            <textarea
              name="mensaje"
              placeholder="¿Qué maquinaria necesitas?"
              rows={5}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-2xl hover:bg-orange-600 hover:scale-[1.02] transition shadow-lg"
            >
              Enviar consulta
            </button>

            {enviado && (
              <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-2xl text-center font-medium">
                ✅ Consulta enviada correctamente. Nos pondremos en contacto contigo pronto.
              </div>
            )}

            <p className="text-sm text-gray-500 text-center">
              También puedes contactarnos directamente por WhatsApp para una respuesta más rápida.
            </p>
          </motion.form>

        </div>
      </div>
    </section>
    
  );
}