import { QuoteHeader, SectionTitle, PaymentTerms, LegalAndGuarantees } from './components/Shared'

export function ProyectoC() {
  return (
    <div className="space-y-8">
      <QuoteHeader quoteId="COT-003" title="Implementación Integral (Marketplace + Antirrobo)" />

      {/* Presentación del Paquete */}
      <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-900/20 to-[#0a0a12] p-6 sm:p-8 space-y-4">
        <SectionTitle subtitle="Propuesta Estratégica" title="Beneficio por Contratación Conjunta" />
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          Esta propuesta unifica el desarrollo del <strong>Marketplace de Medicamentos</strong> y el <strong>Sistema Antirrobo (PoC + MVP)</strong> otorgando un <strong>5% de beneficio comercial directo</strong> sobre la inversión total.
        </p>
      </section>

      {/* Tabla Financiera con Descuento */}
      <section>
        <SectionTitle subtitle="Inversión Preferencial" title="Resumen del Paquete Conjunto" />
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#060712]">
          <table className="w-full text-left text-xs sm:text-sm text-white/80">
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-bold text-white">Proyecto 1: Marketplace de Medicamentos</td>
                <td className="px-6 py-4 text-right">$352,157.41</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-white">Proyecto 2: Sistema Antirrobo (PoC + MVP)</td>
                <td className="px-6 py-4 text-right">$441,278.01</td>
              </tr>
              <tr className="bg-white/5 text-white/60">
                <td className="px-6 py-3">Precio de Referencia Individual (sin IVA)</td>
                <td className="px-6 py-3 text-right line-through">$793,435.00</td>
              </tr>
              <tr className="bg-emerald-500/10 text-emerald-400 font-bold">
                <td className="px-6 py-4">Beneficio por Contratación Conjunta (-5%)</td>
                <td className="px-6 py-4 text-right">-$39,672.00</td>
              </tr>
              <tr className="bg-blue-600/10 font-bold text-base">
                <td className="px-6 py-4 text-white">PRECIO PREFERENCIAL PAQUETE (sin IVA)</td>
                <td className="px-6 py-4 text-right text-blue-400">$753,763.00</td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-white/60">IVA (16%)</td>
                <td className="px-6 py-3 text-right text-white/60">$120,602.00</td>
              </tr>
              <tr className="bg-blue-600/20 font-extrabold text-lg">
                <td className="px-6 py-4 text-white">TOTAL PAQUETE INTEGRAL (CON IVA)</td>
                <td className="px-6 py-4 text-right text-blue-300">$874,365.00 MXN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cláusulas de Protección del Paquete */}
      <section className="rounded-2xl border border-white/10 bg-[#0a0a12] p-6 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Condiciones de Protección Comercial</h3>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-white/70 marker:text-amber-400">
          <li><strong>Vigencia y simultaneidad:</strong> El beneficio comercial del 5% aplica exclusivamente si ambas iniciativas se contratan simultáneamente dentro de la vigencia de la cotización.</li>
          <li><strong>Condición de ejecución MVP:</strong> La ejecución del MVP del Sistema Antirrobo queda sujeta a los resultados de la PoC. Si la PoC requiere una reorientación sustancial de la arquitectura, los costos del MVP podrán reestimarse.</li>
        </ul>
      </section>

      <PaymentTerms />
      <LegalAndGuarantees />
    </div>
  )
}