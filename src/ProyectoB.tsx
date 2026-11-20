// ProyectoB.tsx

import {
  QuoteHeader,
  SectionTitle,
  PaymentTerms,
  LegalAndGuarantees,
} from "./components/Shared";

export function ProyectoB() {
  return (
    <div className="space-y-10">
      <QuoteHeader
        quoteId="COT-002"
        title="Tienda Digital + Branding Estratégico"
      />

      {/* 1. Presentación */}
      <section className="rounded-2xl border border-white/5 bg-[#0a0a12] p-6 sm:p-8 space-y-4">
        <SectionTitle
          subtitle="Propuesta Estratégica"
          title="Digitalización y Profesionalización de Marca"
        />

        <div>
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">
            Oportunidad
          </h3>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            La incorporación de un canal digital de ventas representa
            una oportunidad para ampliar la presencia comercial de
            Dulcerías Tapse. Para acompañar esta expansión, resulta
            conveniente contar con una identidad visual consistente
            que permita comunicar de forma clara la personalidad del
            negocio, sus productos y su propuesta comercial.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">
            Solución Propuesta
          </h3>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Esta propuesta integra el desarrollo de la tienda digital
            con un proceso de branding estratégico que permita
            establecer una identidad visual definida y aplicable
            tanto al entorno digital como a los materiales
            comerciales de Dulcerías Tapse.
          </p>
        </div>
      </section>

      {/* 2. Tienda */}
      <section className="rounded-2xl border border-blue-500/20 bg-blue-900/10 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white">
          Módulo 1: Desarrollo de Tienda Digital
        </h2>

        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          Se contempla el mismo alcance funcional de la Propuesta A, 
          incluyendo análisis, prototipado, desarrollo,
          pruebas y despliegue de la plataforma de comercio
          electrónico.
        </p>

        <p className="text-xs text-white/50 leading-relaxed">
          El alcance técnico y las funcionalidades de la tienda
          deberán corresponder al documento de alcance aprobado.
          Este módulo puede contratarse de forma independiente.
        </p>
      </section>

      {/* 3. Branding */}
      <section className="rounded-2xl border border-purple-500/20 bg-[#060712] p-6 sm:p-8 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
            Módulo 2
          </span>

          <h2 className="text-2xl font-bold text-white mt-1">
            Branding Estratégico
          </h2>

          <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
            <strong>¿Qué es y por qué se propone?</strong> El branding
            busca definir y estructurar los elementos visuales y
            estratégicos que representan a Dulcerías Tapse. No se
            limita a la creación de un logotipo, sino que busca
            establecer criterios de identidad que permitan mantener
            consistencia en sus comunicaciones, productos y canales
            comerciales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-purple-400 mb-2">
              Definición Estratégica
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Análisis de la personalidad de la marca, atributos,
              posicionamiento deseado, público objetivo y criterios
              de diferenciación comercial.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-purple-400 mb-2">
              Identidad Visual
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Desarrollo o rediseño del logotipo, selección de
              paleta cromática, elementos gráficos
              complementarios y lineamientos de composición.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-purple-400 mb-2">
              Aplicaciones de Marca
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Definición de lineamientos para la aplicación de la
              identidad en redes sociales y
              materiales comerciales seleccionados.
            </p>
          </div>
        </div>

        {/* Entregables */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <h3 className="text-sm font-bold text-purple-400 mb-3">
            Entregables Principales
          </h3>

          <ul className="list-disc pl-4 text-xs sm:text-sm text-white/70 space-y-2 marker:text-purple-400">
            <li>Logotipo principal y variantes aprobadas.</li>
            <li>Paleta cromática institucional.</li>
            <li>Elementos gráficos complementarios.</li>
            <li>Lineamientos de identidad visual.</li>
            <li>
              Manual o brandbook con criterios de aplicación.
            </li>
            <li>
              Archivos finales de identidad en formatos acordados.
            </li>
          </ul>
        </div>

        {/* Aplicaciones */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <h3 className="text-sm font-bold text-purple-400 mb-3">
            Aplicaciones Contempladas
          </h3>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Los lineamientos podrán considerar aplicaciones en
            redes sociales, recursos gráficos de la tienda digital,
            materiales promocionales y piezas comerciales
            seleccionadas, de acuerdo con el alcance acordado.
          </p>
        </div>
      </section>

      {/* 4. Inversión */}
      <section>
        <SectionTitle
          subtitle="Inversión"
          title="Presupuesto Integrado"
        />

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#060712]">
          <table className="w-full text-left text-xs sm:text-sm text-white/80">
            <tbody className="divide-y divide-white/5">
              <tr className="bg-white/5 font-bold text-white">
                <td className="px-6 py-4">Concepto</td>
                <td className="px-6 py-4 text-right">
                  Importe (MXN)
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Módulo 1: Tienda Digital
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  45,000.00
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Módulo 2: Branding Estratégico
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  10,000.00
                </td>
              </tr>

              <tr className="bg-blue-600/20 font-extrabold text-base">
                <td className="px-6 py-4 text-white">
                  TOTAL PROYECTO B
                </td>

                <td className="px-6 py-4 text-right text-blue-300 font-mono">
                  55,000.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Condiciones */}
      <section className="rounded-2xl border border-white/10 bg-[#0a0a12] p-6 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
          Condiciones del Módulo de Branding
        </h3>

        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-white/70 marker:text-amber-400">
          <li>
            El proceso de branding contempla rondas de revisión y
            ajustes conforme a los límites establecidos en el
            alcance definitivo.
          </li>

          <li>
            La aprobación de conceptos visuales será responsabilidad
            del cliente.
          </li>

          <li>
            Cambios sustanciales en conceptos aprobados, nuevos
            entregables o aplicaciones adicionales podrán
            cotizarse por separado.
          </li>

          <li>
            El registro de marca ante el IMPI, estudios formales
            de mercado, investigación de consumidores, producción
            de materiales físicos y servicios externos no están
            incluidos.
          </li>
        </ul>
      </section>

      <PaymentTerms />
      <LegalAndGuarantees />
    </div>
  );
}