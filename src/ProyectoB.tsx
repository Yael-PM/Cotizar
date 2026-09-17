import { QuoteHeader, SectionTitle, PaymentTerms, LegalAndGuarantees } from './components/Shared'

export function ProyectoB() {
  return (
    <div className="space-y-10">
      <QuoteHeader quoteId="COT-002" title="PoC y MVP: Sistema de Reconocimiento Visual" />

      {/* Antecedentes y Necesidades */}
      <section className="rounded-2xl border border-white/5 bg-[#0a0a12] p-6 sm:p-8 space-y-4">
        <SectionTitle subtitle="Antecedentes y Necesidades" title="Inteligencia Artificial Aplicada a Sucursales" />
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          Grupo Farma requiere evaluar la viabilidad técnica de utilizar análisis de video e Inteligencia Artificial en sus sucursales para automatizar la detección de eventos clave. Para minimizar el riesgo de inversión, la estrategia se divide en dos grandes etapas: una <strong>Prueba de Concepto (PoC)</strong> para validar la factibilidad en un entorno real, seguida del <strong>Producto Mínimo Viable (MVP)</strong> para desplegar la solución funcional.
        </p>
      </section>

      {/* BLOQUE 1: PRUEBA DE CONCEPTO (PoC) */}
      <section className="rounded-2xl border border-blue-500/20 bg-[#060712] p-6 sm:p-8 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Etapa 1</span>
          <h2 className="text-2xl font-bold text-white mt-1">Prueba de Concepto (PoC)</h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
            <strong>¿Qué es y por qué se debe hacer?</strong> La PoC es un experimento controlado a pequeña escala. Permite comprobar si los algoritmos de visión artificial funcionan con la calidad de video, iluminación y ángulos reales de las cámaras de Grupo Farma antes de realizar una inversión mayor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-blue-400 mb-2">Alcance de la PoC</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Análisis y procesamiento de muestras en video provistas por Grupo Farma para validar la precisión de detección del modelo en un escenario de prueba restringido.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-blue-400 mb-2">Entregables Principales</h3>
            <ul className="list-disc pl-4 text-xs text-white/70 space-y-1.5 marker:text-blue-400">
              <li>Modelo preliminar ajustado.</li>
              <li>Reporte técnico con porcentaje de precisión alcanzado.</li>
              <li>Demostración funcional del algoritmo sobre el material provisto.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-amber-400 mb-2">Riesgos Identificados</h3>
            <ul className="list-disc pl-4 text-xs text-white/70 space-y-1.5 marker:text-amber-400">
              <li>Baja resolución o mala iluminación en videos fuente.</li>
              <li>Ángulos de cámara obstruidos o no estandarizados.</li>
            </ul>
          </div>
        </div>

        {/* Criterios de Éxito / Escenarios */}
        <div className="grid gap-4 sm:grid-cols-2 pt-2">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Si la PoC es exitosa:</h4>
            <p className="text-xs text-white/70">
              Se aprueba la factibilidad técnica y se procede de inmediato con la etapa de desarrollo e integración del MVP. Previo a acuerdo de ambas partes.
            </p>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-4">
            <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Si la PoC no alcanza los criterios:</h4>
            <p className="text-xs text-white/70">
              El proyecto se detiene de forma segura. Grupo Farma únicamente habrá invertido el costo de esta fase previa sin comprometer el capital del desarrollo completo.
            </p>
          </div>
        </div>

        {/* Costo PoC */}
        <div className="flex justify-between items-center rounded-xl bg-white/5 p-4 border border-white/10 font-mono">
          <span className="text-xs sm:text-sm text-white font-sans font-bold">Costo Independiente de la PoC:</span>
          <span className="text-base sm:text-lg font-bold text-blue-400">$183,728.00 MXN + IVA</span>
        </div>
      </section>

      {/* BLOQUE 2: PRODUCTO MÍNIMO VIABLE (MVP) */}
      <section className="rounded-2xl border border-purple-500/20 bg-[#060712] p-6 sm:p-8 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Etapa 2</span>
          <h2 className="text-2xl font-bold text-white mt-1">Producto Mínimo Viable (MVP)</h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
            <strong>¿Qué es y por qué se debe hacer?</strong> Una vez validada la PoC, el MVP es la construcción del sistema listo para operar en sucursales. Empaqueta la Inteligencia Artificial en una solución estable y conectada con la infraestructura de Grupo Farma.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-purple-400 mb-2">Alcance del MVP</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Desarrollo de la plataforma completa de procesamiento, panel de visualización de eventos y configuración para despliegue en dispositivo físico (NVIDIA Jetson).
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-purple-400 mb-2">Entregables Principales</h3>
            <ul className="list-disc pl-4 text-xs text-white/70 space-y-1.5 marker:text-purple-400">
              <li>Sistema de visión procesando en tiempo real.</li>
              <li>Panel web de administración y alertas para Grupo Farma.</li>
              <li>Software empaquetado e instalado en equipo Jetson de laboratorio.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-amber-400 mb-2">Riesgos Identificados</h3>
            <ul className="list-disc pl-4 text-xs text-white/70 space-y-1.5 marker:text-amber-400">
              <li>Inestabilidad en la red local o infraestructura eléctrica de la sucursal.</li>
              <li>Retrasos en la disponibilidad de equipos físicos (hardware Jetson).</li>
            </ul>
          </div>
        </div>

        {/* Costo MVP */}
        <div className="flex justify-between items-center rounded-xl bg-white/5 p-4 border border-white/10 font-mono">
          <span className="text-xs sm:text-sm text-white font-sans font-bold">Costo Independiente del MVP:</span>
          <span className="text-base sm:text-lg font-bold text-purple-400">$257,550.00 MXN + IVA</span>
        </div>
      </section>

      {/* Fuera del Alcance Específico B */}
      <section className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6">
        <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">Fuera del Alcance y Razonamiento</h3>
        <ul className="space-y-2 text-xs sm:text-sm text-white/70">
          <li className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Viáticos y viajes de instalación en sucursales:</strong> Mexiware entregará el equipo Jetson completamente configurado y listo para conectar. La instalación física (montaje, cableado y viajes) corre a cargo de Grupo Farma o su equipo técnico local.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Adquisición de hardware o cámaras:</strong> Los costos de dispositivos Jetson, cámaras, cableado o licencias externas no están incluidos.</span>
          </li>
        </ul>
      </section>

      {/* BLOQUE 3: RESUMEN Y COSTO CONJUNTO */}
      <section>
        <SectionTitle subtitle="Resumen Financiero" title="Inversión Total del Proyecto" />
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#060712]">
          <table className="w-full text-left text-xs sm:text-sm text-white/80">
            <tbody className="divide-y divide-white/5">
              <tr className="bg-white/5 font-bold text-white">
                <td className="px-6 py-4">Etapa del Proyecto</td>
                <td className="px-6 py-4 text-right">Importe (MXN)</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5">Etapa 1: Prueba de Concepto (PoC)</td>
                <td className="px-6 py-3.5 text-right font-mono">$183,728.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5">Etapa 2: Desarrollo e Integración del MVP</td>
                <td className="px-6 py-3.5 text-right font-mono">$257,550.00</td>
              </tr>
              <tr className="bg-blue-600/10 font-bold border-t border-blue-500/20">
                <td className="px-6 py-4 text-white">Subtotal Conjunto (sin IVA)</td>
                <td className="px-6 py-4 text-right text-blue-400 font-mono">$441,278.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-white/60">IVA (16%)</td>
                <td className="px-6 py-3 text-right text-white/60 font-mono">$70,604.00</td>
              </tr>
              <tr className="bg-blue-600/20 font-extrabold text-base">
                <td className="px-6 py-4 text-white">TOTAL PROYECTO B (PoC + MVP)</td>
                <td className="px-6 py-4 text-right text-blue-300 font-mono">$511,882.00 MXN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <PaymentTerms />
      <LegalAndGuarantees />
    </div>
  )
}