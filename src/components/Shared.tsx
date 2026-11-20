// components/Shared.tsx

interface QuoteHeaderProps {
  quoteId: string;
  title: string;
}

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export function QuoteHeader({ quoteId, title }: QuoteHeaderProps) {
  return (
    <div className="mb-8 rounded-[2rem] border border-white/10 bg-[#0a0a12] p-6 md:p-10 shadow-2xl flex flex-col md:flex-row justify-between gap-6">
      <div>
        <h4 className="mb-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
          Cotización Formal
        </h4>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          {title}
        </h1>

        <p className="text-sm text-white/50 mt-2">
          <strong>Empresa:</strong> Dulcerías Tapse |{" "}
          <strong>Contacto:</strong> Marco Lugano
        </p>

        <p className="text-sm text-white/50 mt-1">
          <strong>Proveedor:</strong> Mexiware
        </p>

        <p className="text-sm text-white/50 mt-1">
          <strong>Propuesta elaborada por:</strong> Yael Pérez Méndez |{" "}
          <strong>Teléfono:</strong> +52 56 2905 7250 |{" "}
          <strong>Email:</strong> yael.pm@mexiware-solutions.com
        </p>
      </div>

      <div className="text-left md:text-right text-xs sm:text-sm text-white/70 space-y-1.5 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
        <p>
          <strong className="text-white">Cotización No.:</strong>{" "}
          <span className="font-mono text-blue-400">{quoteId}</span>
        </p>

        <p>
          <strong className="text-white">Fecha:</strong> 20/11/26
        </p>

        <p>
          <strong className="text-white">Vigencia hasta:</strong> 15 de enero 2027
        </p>
      </div>
    </div>
  );
}

export function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <div className="mb-6 mt-12">
      <h4 className="mb-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </h4>

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </div>
  );
}

export function PaymentTerms() {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-[#060712] p-6">
      <h3 className="text-base font-bold text-white mb-4">
        Esquema de Pagos Sugerido
      </h3>

      <p className="text-xs sm:text-sm text-white/60 mb-4">
        La inversión se distribuye gradualmente para acompañar el avance
        del proyecto:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        {[
          { percentage: "30%", label: "Anticipo e Inicio" },
          { percentage: "30%", label: "Avance de Desarrollo" },
          { percentage: "30%", label: "Entrega de Sistema" },
          { percentage: "10%", label: "Puesta en Producción" },
        ].map((item) => (
          <div
            key={item.label}
            className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
          >
            <span className="block text-xl font-extrabold text-blue-400">
              {item.percentage}
            </span>

            <span className="text-[11px] text-white/60">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdditionalServices() {
  return (
    <div className="mt-12">
      <SectionTitle
        subtitle="Planes Opcionales"
        title="Servicios Extra de Soporte y Evolución"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#060712] p-6 space-y-3">
          <h3 className="text-base font-bold text-white">
            Mantenimiento Preventivo y Correctivo
          </h3>

          <p className="text-xs text-blue-400 font-medium mt-0.5">
            Contratación opcional posterior a la garantía
          </p>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Servicio orientado a mantener la estabilidad y funcionamiento
            de la tienda digital mediante revisiones técnicas, atención de
            incidencias, actualización de componentes y recomendaciones de
            mantenimiento, de acuerdo con el plan contratado.
          </p>

          <div className="pt-2 text-xs text-white/80 font-mono">
            <strong>Modalidad:</strong> Contratación mensual o anual.
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalAndGuarantees() {
  return (
    <div className="space-y-6 mt-12 border-t border-white/10 pt-10">
      <SectionTitle
        subtitle="Marco Contractual"
        title="Términos y Condiciones Comerciales"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">
            Supuestos Clave del Proyecto
          </h3>

          <ul className="list-disc pl-4 text-xs sm:text-sm text-white/60 space-y-2 marker:text-blue-400">
            <li>
              Dulcerías Tapse proporcionará la información de productos,
              precios, descripciones, fotografías y demás contenidos
              necesarios para la construcción de la tienda.
            </li>

            <li>
              El cliente deberá definir y proporcionar las políticas
              comerciales aplicables: entregas, devoluciones, pagos y
              disponibilidad de productos.
            </li>

            <li>
              Tapse facilitará oportunamente las validaciones, decisiones
              y accesos requeridos para el desarrollo.
            </li>

            <li>
              Los costos de servicios de terceros, licencias,
              infraestructura y plataformas externas no se encuentran
              incluidos salvo que se indique expresamente.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">
            Confidencialidad
          </h3>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Mexiware se compromete a mantener la confidencialidad de la
            información comercial, operativa, financiera y técnica
            proporcionada por Dulcerías Tapse durante la ejecución del
            proyecto.
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">
            Garantía Directa (40 días)
          </h3>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Se otorga un periodo de soporte de{" "}
            <strong>40 días naturales</strong> posteriores a la entrega
            para corregir fallas directamente atribuibles al desarrollo
            realizado por Mexiware y comprendidas dentro del alcance
            aprobado.
          </p>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-2">
            La garantía no contempla nuevos requerimientos,
            modificaciones funcionales, cambios en servicios externos,
            problemas derivados de terceros ni modificaciones realizadas
            por otros proveedores.
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-base font-bold text-white mb-2">
            Solicitudes de Cambio
          </h3>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Cualquier funcionalidad, integración, modificación o
            requerimiento adicional no contemplado en el alcance será
            evaluado de común acuerdo, estableciendo su impacto en
            tiempo, costo y entregables antes de iniciar su ejecución.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-xs sm:text-sm text-white/60 space-y-2">
        <p>
          <strong>Cumplimiento de Tiempos:</strong> El calendario de
          trabajo dependerá de la entrega oportuna de contenidos,
          decisiones, accesos, autorizaciones y validaciones finales por
          parte de Dulcerías Tapse.
        </p>
      </div>

      <AdditionalServices />

      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-center text-[10px] sm:text-xs tracking-[0.2em] text-white/40">
      © {new Date().getFullYear()} MEXIWARE. TODOS LOS DERECHOS RESERVADOS.
    </footer>
  );
}