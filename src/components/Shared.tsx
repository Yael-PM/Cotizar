// 1. Definimos las interfaces de tipo para las props
interface QuoteHeaderProps {
  quoteId: string;
  title: string;
}

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

// 2. Aplicamos la interfaz a los componentes
export function QuoteHeader({ quoteId, title }: QuoteHeaderProps) {
  return (
    <div className="mb-8 rounded-[2rem] border border-white/10 bg-[#0a0a12] p-6 md:p-10 shadow-2xl flex flex-col md:flex-row justify-between gap-6">
      <div>
        <h4 className="mb-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">Cotización Formal</h4>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{title}</h1>
        <p className="text-sm text-white/50 mt-2"><strong>Empresa:</strong> Grupo Farma | <strong>Contacto:</strong> Emilio Torres</p>
        <p className="text-sm text-white/50 mt-1"><strong>Proveedor:</strong> Mexiware</p>
        <p className="text-sm text-white/50 mt-1"><strong>Propuesta elaborada por:</strong> Yael Pérez Méndez | <strong>Teléfono:</strong> +52 56 2905 7250 | <strong>Email:</strong> yaelpm.dev08@gmail.com</p>
      </div>
      <div className="text-left md:text-right text-xs sm:text-sm text-white/70 space-y-1.5 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
        <p><strong className="text-white">Cotización No.:</strong> <span className="font-mono text-blue-400">{quoteId}</span></p>
        <p><strong className="text-white">Fecha:</strong> 16/09/26</p>
        <p><strong className="text-white">Vigencia:</strong> 30 días naturales</p>
      </div>
    </div>
  )
}

export function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <div className="mb-6 mt-12">
      <h4 className="mb-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">{subtitle}</h4>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</h2>
    </div>
  )
}

export function PaymentTerms() {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-[#060712] p-6">
      <h3 className="text-base font-bold text-white mb-4">Esquema de Pagos Sugerido</h3>
      <p className="text-xs sm:text-sm text-white/60 mb-4">La inversión se distribuye gradualmente para acompañar el avance del proyecto:</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="block text-xl font-extrabold text-blue-400">30%</span>
          <span className="text-[11px] text-white/60">Anticipo e Inicio</span>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="block text-xl font-extrabold text-blue-400">30%</span>
          <span className="text-[11px] text-white/60">Avance de Desarrollo</span>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="block text-xl font-extrabold text-blue-400">30%</span>
          <span className="text-[11px] text-white/60">Entrega de Sistema</span>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
          <span className="block text-xl font-extrabold text-blue-400">10%</span>
          <span className="text-[11px] text-white/60">Puesta en Producción</span>
        </div>
      </div>
    </div>
  )
}

export function AdditionalServices() {
  return (
    <div className="mt-12">
      <SectionTitle subtitle="Planes Opcionales" title="Servicios Extra de Soporte y Mantenimiento" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#060712] p-6 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-bold text-white">Póliza Mantenimiento Preventivo / Correctivo</h3>
              <p className="text-xs text-blue-400 font-medium mt-0.5">Aplica tras concluir los 40 días de garantía</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Incluye monitoreo mensual de salud del sistema, actualización de librerías, respaldos de seguridad y corrección prioritaria de eventualidades técnicas.
          </p>
          <div className="pt-2 text-xs text-white/80 font-mono">
            <strong>Modalidad:</strong> Contratación mensual o anual recurrente.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#060712] p-6 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-bold text-white">Bolsa de Horas de Evolutivos y Mejoras</h3>
              <p className="text-xs text-blue-400 font-medium mt-0.5">Aplica para nuevos requerimientos</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Diseñada para la solicitud de nuevas pantallas, ajustes operacionales o integración de nuevos modelos de Inteligencia Artificial no contemplados en el alcance inicial.
          </p>
          <div className="pt-2 text-xs text-white/80 font-mono">
            <strong>Modalidad:</strong> Paquetes adaptables según demandas de Grupo Farma.
          </div>
        </div>
      </div>
    </div>
  )
}

export function LegalAndGuarantees() {
  return (
    <div className="space-y-6 mt-12 border-t border-white/10 pt-10">
      <SectionTitle subtitle="Marco Contractual" title="Términos y Condiciones Comerciales" />
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">Supuestos Clave de Proyecto</h3>
          <ul className="list-disc pl-4 text-xs sm:text-sm text-white/60 space-y-2 marker:text-blue-400">
            <li>Grupo Farma entregará las muestras en video, imágenes y esquemas de ubicación de las cámaras/sucursales para el entrenamiento y pruebas.</li>
            <li>Grupo Farma facilitará los accesos técnicos y credenciales necesarias.</li>
            <li>La instalación y viáticos en sitio son gestionados por Grupo Farma.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">Acuerdo de Confidencialidad</h3>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Mexiware se compromete a mantener estricta reserva sobre toda la información comercial, operativa y técnica proporcionada por Grupo Farma, protegiendo sus datos bajo los estándares de confidencialidad del sector.
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">Garantía Directa (40 días)</h3>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Se otorga un periodo de soporte de <strong>40 días naturales</strong> posteriores a la entrega para corregir cualquier ajuste o falla directamente atribuible a la programación realizada dentro del alcance.
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">Solicitudes de Cambio</h3>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Cualquier requerimiento o módulo adicional fuera de las fases descritas será evaluado de común acuerdo con Grupo Farma indicando su respectivo impacto en costo y tiempo.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-xs sm:text-sm text-white/60 space-y-2">
        <p><strong>Cumplimiento de Tiempos:</strong> El calendario de trabajo dependerá de la entrega oportuna de contenidos, autorizaciones y validaciones finales por parte del equipo designado por Grupo Farma.</p>
      </div>

      {/* Servicios Extra Adicionales */}
      <AdditionalServices />

      <Footer />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-center text-[10px] sm:text-xs tracking-[0.2em] text-white/40">
      © {new Date().getFullYear()} MEXIWARE. TODOS LOS DERECHOS RESERVADOS.
    </footer>
  )
}