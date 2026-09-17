import { QuoteHeader, SectionTitle, PaymentTerms, LegalAndGuarantees } from './components/Shared'

export function ProyectoA() {
  return (
    <div className="space-y-8">
      <QuoteHeader quoteId="COT-001" title="Marketplace de Medicamentos" />

      {/* 1. Antecedentes y Necesidades (Sin tecnicismos y personalizado) */}
      <section className="rounded-2xl border border-white/5 bg-[#0a0a12] p-6 sm:p-8 space-y-4">
        <SectionTitle subtitle="Antecedentes y Necesidades" title="Plataforma Digital de Comercio" />
        <div>
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">Situación Actual</h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Grupo Farma busca modernizar la comercialización y distribución de medicamentos mediante una plataforma centralizada que conecte la oferta de sus productos con proveedores y clientes de forma rápida, ordenada y accesible.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">Solución Propuesta</h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Diseño y construcción de un Marketplace a la medida donde Grupo Farma podrá realizar la solicitud de compra de medicamentos de forma ágil y eficiente y podrá gestionar todo el proceso de compra en un solo lugar recibiendo ofertas de diferentes proveedores para completar el stock.
          </p>
        </div>
      </section>

      {/* 2. Alcance, Fases y Exclusiones Integradas */}
      <section className="space-y-6">
        <SectionTitle subtitle="Alcance y Metodología" title="Fases del Proyecto y Entregables" />
        
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#060712]">
          <table className="w-full text-left text-xs sm:text-sm text-white/70 min-w-[600px]">
            <thead className="bg-white/5 text-[10px] uppercase tracking-wider text-white/50">
              <tr>
                <th className="px-6 py-3">Fase</th>
                <th className="px-6 py-3">Duración</th>
                <th className="px-6 py-3">¿En qué consiste esta fase?</th>
                <th className="px-6 py-3">Entregable Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-bold text-blue-400">Fase 1: Análisis y Planificación</td>
                <td className="px-6 py-4 whitespace-nowrap">2 a 3 semanas</td>
                <td className="px-6 py-4 text-white/60">Entender a fondo las reglas operativas de Grupo Farma y definir el mapa detallado del sistema.</td>
                <td className="px-6 py-4">Documento de requerimientos operacionales.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-400">Fase 2: Diseño Visual (UX/UI)</td>
                <td className="px-6 py-4 whitespace-nowrap">2 semanas</td>
                <td className="px-6 py-4 text-white/60">Crear las pantallas e interfaz interactiva para que la navegación sea intuitiva y ágil.</td>
                <td className="px-6 py-4">Prototipo visual interactivo.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-400">Fase 3: Construcción del Sistema</td>
                <td className="px-6 py-4 whitespace-nowrap">8 a 9 semanas</td>
                <td className="px-6 py-4 text-white/60">Programación de la plataforma, catálogo de productos y conexión con bases de datos.</td>
                <td className="px-6 py-4">Plataforma totalmente programada.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-400">Fase 4: Pruebas de Calidad</td>
                <td className="px-6 py-4 whitespace-nowrap">2 semanas</td>
                <td className="px-6 py-4 text-white/60">Evaluación exhaustiva del funcionamiento para corregir cualquier falla antes de salir a la luz.</td>
                <td className="px-6 py-4">Reporte de validación y ajustes finales.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-blue-400">Fase 5: Licitación y Salida en Vivo</td>
                <td className="px-6 py-4 whitespace-nowrap">2 semanas</td>
                <td className="px-6 py-4 text-white/60">Instalación formal en los servidores y activación comercial para el uso de Grupo Farma.</td>
                <td className="px-6 py-4">Sistema publicado y operando.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sección Fuera de Alcance integrada aquí */}
        <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6">
          <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">Fuera del Alcance y Razonamiento</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>Aplicaciones móviles nativas (iOS / Android):</strong> Se descartan para priorizar primero la estabilidad de la plataforma web central y reducir la inversión inicial.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>Costos de infraestructura, licencias o herramientas de terceros:</strong> Servidores, dominios o servicios de mensajería comercial son contrataciones directas a nombre de Grupo Farma para mantener la titularidad absoluta de sus activos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>Nuevas integraciones no contempladas en la Fase 1:</strong> Para evitar desviaciones en el calendario y presupuesto acordados previamente.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Inversión (Repartida limpia sin líneas sospechosas) */}
      <section>
        <SectionTitle subtitle="Inversión" title="Presupuesto por Fase" />
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#060712]">
          <table className="w-full text-left text-xs sm:text-sm text-white/80">
            <tbody className="divide-y divide-white/5">
              <tr className="bg-white/5 font-bold text-white">
                <td className="px-6 py-4">Fase de Trabajo</td>
                <td className="px-6 py-4 text-right">Importe (MXN)</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5">Fase 1: Análisis y Planificación</td>
                <td className="px-6 py-3.5 text-right font-mono">$43,000.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5">Fase 2: Diseño Visual (UX/UI)</td>
                <td className="px-6 py-3.5 text-right font-mono">$37,000.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5">Fase 3: Construcción del Sistema</td>
                <td className="px-6 py-3.5 text-right font-mono">$192,157.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5">Fase 4: Pruebas de Calidad</td>
                <td className="px-6 py-3.5 text-right font-mono">$43,000.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5">Fase 5: Licitación y Salida en Vivo</td>
                <td className="px-6 py-3.5 text-right font-mono">$37,000.00</td>
              </tr>
              <tr className="bg-blue-600/10 font-bold border-t border-blue-500/20">
                <td className="px-6 py-4 text-white">Subtotal (sin IVA)</td>
                <td className="px-6 py-4 text-right text-blue-400 font-mono">$352,157.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-white/60">IVA (16%)</td>
                <td className="px-6 py-3 text-right text-white/60 font-mono">$56,345.00</td>
              </tr>
              <tr className="bg-blue-600/20 font-extrabold text-base">
                <td className="px-6 py-4 text-white">TOTAL PROYECTO A</td>
                <td className="px-6 py-4 text-right text-blue-300 font-mono">$408,502.00 MXN</td>
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