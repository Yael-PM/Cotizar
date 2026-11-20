// ProyectoA.tsx

import {
  QuoteHeader,
  SectionTitle,
  PaymentTerms,
  LegalAndGuarantees,
} from "./components/Shared";

export function ProyectoA() {
  return (
    <div className="space-y-8">
      <QuoteHeader quoteId="COT-001" title="Tienda Digital para Dulcerías Tapse" />

      {/* 1. Antecedentes */}
      <section className="rounded-2xl border border-white/5 bg-[#0a0a12] p-6 sm:p-8 space-y-4">
        <SectionTitle
          subtitle="Antecedentes y Necesidades"
          title="Expansión del Canal Comercial"
        />

        <div>
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">
            Situación Actual
          </h3>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Dulcerías Tapse cuenta con una operación comercial activa y
            busca ampliar sus oportunidades de venta, acercando su
            catálogo de productos a nuevos consumidores y zonas
            geográficas. Actualmente, su presencia digital no cuenta
            con un canal de comercio electrónico propio que permita
            centralizar la consulta de productos y la gestión de compras
            en línea.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">
            Solución Propuesta
          </h3>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Desarrollar una tienda digital que permita a los clientes
            explorar el catálogo de Dulcerías Tapse, consultar
            información de productos y realizar pedidos a través de
            internet. La plataforma busca habilitar un nuevo canal
            comercial, facilitar la experiencia de compra y sentar las
            bases para ampliar progresivamente su alcance.
          </p>
        </div>
      </section>

      {/* 3. Alcance Funcional */}
      <section>
        <SectionTitle
          subtitle="Funcionalidades"
          title="Componentes de la Tienda Digital"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Catálogo Digital",
              description:
                "Organización de productos por categorías, consulta de información, imágenes y precios.",
            },
            {
              title: "Búsqueda y Navegación",
              description:
                "Herramientas para facilitar la exploración del catálogo y encontrar productos.",
            },
            {
              title: "Carrito de Compra",
              description:
                "Selección, revisión y modificación de productos y cantidades antes de realizar el pedido.",
            },
            {
              title: "Proceso de Pedido",
              description:
                "Captura y registro de la información necesaria para realizar una compra.",
            },
            {
              title: "Gestión de Pedidos",
              description:
                "Panel administrativo para consultar y dar seguimiento a los pedidos recibidos.",
            },
            {
              title: "Administración",
              description:
                "Herramientas para gestionar los productos, precios, información y contenidos contemplados en el alcance.",
            },
            {
              title: "Perfil de Usuario",
              description:
                "Herramientas para gestionar la información personal, direcciones y métodos de pago de los usuarios.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5"
            >
              <h3 className="text-sm font-bold text-blue-400 mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-white/50 mt-4 leading-relaxed">
          Las funcionalidades específicas de pagos, inventario,
          entregas, descuentos, promociones, usuarios, facturación
          y cualquier integración dependerán de los requerimientos
          acordados durante la fase de análisis y deberán quedar
          expresamente contempladas en el alcance definitivo.
        </p>
      </section>

      {/* 4. Fuera del alcance */}
      <section className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6">
        <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">
          Fuera del Alcance
        </h3>

        <ul className="space-y-2 text-xs sm:text-sm text-white/70">
          <li className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>

            <span>
              <strong>Aplicaciones móviles nativas:</strong> El
              alcance contempla una plataforma web. El desarrollo
              de aplicaciones nativas para Android o iOS no se
              encuentra incluido.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>

            <span>
              <strong>Servicios externos:</strong> Licencias,
              pasarelas de pago, servicios de envío, infraestructura,
              dominios y plataformas de terceros no se encuentran
              incluidos salvo que se indiquen expresamente.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>

            <span>
              <strong>Integraciones adicionales:</strong> Conexiones
              con sistemas externos, ERP, CRM, sistemas de punto de
              venta, sistemas contables o proveedores no contemplados
              en el alcance acordado.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>

            <span>
              <strong>Operación logística:</strong> Preparación
              física de pedidos, almacenamiento, empaquetado,
              distribución, entrega y administración de inventario
              físico.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>

            <span>
              <strong>Producción de contenidos:</strong> Fotografía
              profesional, producción audiovisual, redacción masiva
              de catálogo y campañas publicitarias no contempladas
              expresamente.
            </span>
          </li>
        </ul>
      </section>

      {/* 5. Inversión */}
      <section>
        <SectionTitle
          subtitle="Inversión"
          title="Presupuesto del Proyecto"
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
                  Fase 1: Análisis y Definición de reglas de negocio
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  9,000.00
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Fase 2: Prototipado
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  9,000.00
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Fase 3: Desarrollo
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  18,000.00
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Fase 4: Pruebas y Validación
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  6,750.00
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Fase 5: Despliegue
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  2,250.00
                </td>
              </tr>
              <tr className="bg-blue-600/20 font-extrabold text-base">
                <td className="px-6 py-4 text-white">
                  TOTAL Propuesta A
                </td>

                <td className="px-6 py-4 text-right text-blue-300 font-mono">
                  45,000.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <PaymentTerms />
      <LegalAndGuarantees />
    </div>
  );
}