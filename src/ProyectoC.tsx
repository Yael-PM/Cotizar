// ProyectoC.tsx

import {
  QuoteHeader,
  SectionTitle,
  PaymentTerms,
  LegalAndGuarantees,
} from "./components/Shared";

export function ProyectoC() {
  return (
    <div className="space-y-8">
      <QuoteHeader
        quoteId="COT-003"
        title="Solución Integral: Digitalización, Branding y Marketing"
      />

      {/* 1. Presentación */}
      <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-900/20 to-[#0a0a12] p-6 sm:p-8 space-y-4">
        <SectionTitle
          subtitle="Propuesta Estratégica"
          title="Construcción y Expansión de la Presencia Comercial"
        />

        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          Esta propuesta integra el desarrollo de la tienda digital,
          la profesionalización de la identidad de marca y la
          estrategia de marketing, buscando que Dulcerías Tapse
          cuente con herramientas para fortalecer su presencia
          comercial, facilitar la compra en línea y explorar nuevas
          oportunidades de adquisición de clientes.
        </p>

        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          La solución contempla tres módulos independientes que
          pueden ejecutarse de manera coordinada. La integración
          de estos servicios busca establecer una base comercial
          consistente desde la identidad de marca hasta la
          experiencia de compra y la promoción de sus productos.
        </p>
      </section>

      {/* 2. Módulo Tienda */}
      <section className="rounded-2xl border border-blue-500/20 bg-[#060712] p-6 sm:p-8 space-y-4">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
          Módulo 1
        </span>

        <h2 className="text-2xl font-bold text-white">
          Desarrollo de Tienda Digital
        </h2>

        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          Construcción del canal digital de comercio electrónico
          para que Dulcerías Tapse pueda presentar su catálogo,
          facilitar la consulta de productos y gestionar pedidos
          en línea.
        </p>

        <p className="text-xs text-white/50 leading-relaxed">
          Incluye el alcance definido en la propuesta COT-001,
          sujeto al documento final de requerimientos.
        </p>
      </section>

      {/* 3. Módulo Branding */}
      <section className="rounded-2xl border border-purple-500/20 bg-[#060712] p-6 sm:p-8 space-y-4">
        <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
          Módulo 2
        </span>

        <h2 className="text-2xl font-bold text-white">
          Branding Estratégico
        </h2>

        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
          Definición y desarrollo de la identidad visual de
          Dulcerías Tapse, incluyendo los lineamientos necesarios
          para mantener una comunicación visual consistente en
          su tienda digital, redes sociales y materiales
          comerciales.
        </p>

        <p className="text-xs text-white/50 leading-relaxed">
          Incluye el alcance definido en la propuesta COT-002
          para el módulo de branding, sujeto a los entregables
          acordados.
        </p>
      </section>

      {/* 4. Módulo Marketing */}
      <section className="rounded-2xl border border-emerald-500/20 bg-[#060712] p-6 sm:p-8 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
            Módulo 3
          </span>

          <h2 className="text-2xl font-bold text-white mt-1">
            Estrategia de Marketing y Adquisición
          </h2>

          <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
            <strong>¿Qué es y por qué se propone?</strong> La
            estrategia de marketing busca establecer un plan para
            comunicar la oferta comercial de Dulcerías Tapse,
            fortalecer su presencia digital y explorar mecanismos
            de adquisición de nuevos consumidores. A través de
            la definición de objetivos, públicos, canales,
            contenidos y campañas, se pretende orientar sus
            esfuerzos promocionales hacia oportunidades
            comerciales relevantes.
          </p>
        </div>

        {/* Alcance */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-emerald-400 mb-2">
              Estrategia Comercial y Digital
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Análisis de objetivos comerciales, definición de
              públicos, propuesta de comunicación, canales
              prioritarios y dirección estratégica para la
              presencia digital.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-emerald-400 mb-2">
              Dirección de Contenido
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Definición de líneas de contenido, mensajes,
              formatos creativos, temas promocionales y
              criterios de comunicación para los canales
              acordados.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-sm font-bold text-emerald-400 mb-2">
              Campañas de Adquisición
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Planeación y configuración de campañas digitales
              orientadas a dar visibilidad a productos,
              promociones y canales de compra, de acuerdo con
              los objetivos definidos.
            </p>
          </div>
        </div>

        {/* Entregables */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <h3 className="text-sm font-bold text-emerald-400 mb-3">
            Entregables Principales
          </h3>

          <ul className="list-disc pl-4 text-xs sm:text-sm text-white/70 space-y-2 marker:text-emerald-400">
            <li>
              Diagnóstico inicial de presencia digital y
              oportunidades comerciales.
            </li>

            <li>
              Definición de objetivos y estrategia de marketing.
            </li>

            <li>
              Identificación y segmentación de públicos
              objetivo.
            </li>

            <li>
              Propuesta de canales y plan de comunicación.
            </li>

            <li>
              Dirección creativa y líneas de contenido.
            </li>

            <li>
              Planeación de campañas promocionales.
            </li>

            <li>
              Configuración de campañas en plataformas
              publicitarias contempladas.
            </li>

            <li>
              Definición de indicadores de seguimiento.
            </li>

            <li>
              Reporte de desempeño conforme a la modalidad
              de seguimiento contratada.
            </li>
          </ul>
        </div>

        {/* Condiciones */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-5">
          <h3 className="text-sm font-bold text-amber-400 mb-3">
            Consideraciones del Módulo
          </h3>

          <ul className="list-disc pl-4 text-xs sm:text-sm text-white/70 space-y-2 marker:text-amber-400">
            <li>
              El presupuesto destinado a pauta publicitaria
              no se encuentra incluido en la inversión de
              Mexiware y deberá ser cubierto directamente
              por Dulcerías Tapse.
            </li>

            <li>
              La cantidad de publicaciones, piezas gráficas,
              videos, campañas y periodos de gestión deberá
              establecerse en el alcance definitivo.
            </li>

            <li>
              La estrategia no garantiza un volumen
              específico de ventas, conversiones,
              seguidores, alcance o retorno de inversión.
            </li>

            <li>
              La producción profesional de fotografías,
              videos, modelos, locaciones y materiales
              físicos no está incluida salvo que se
              contemple expresamente.
            </li>

            <li>
              Los costos de plataformas, licencias y
              herramientas de terceros no se encuentran
              incluidos salvo que se indique expresamente.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Resumen Financiero */}
      <section>
        <SectionTitle
          subtitle="Inversión Integral"
          title="Resumen de la Propuesta"
        />

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#060712]">
          <table className="w-full text-left text-xs sm:text-sm text-white/80">
            <tbody className="divide-y divide-white/5">
              <tr className="bg-white/5 font-bold text-white">
                <td className="px-6 py-4">Módulo</td>

                <td className="px-6 py-4 text-right">
                  Importe (MXN)
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Módulo 1: Tienda Digital
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  Por definir
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Módulo 2: Branding Estratégico
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  Por definir
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3.5">
                  Módulo 3: Marketing y Adquisición
                </td>

                <td className="px-6 py-3.5 text-right font-mono">
                  Por definir
                </td>
              </tr>

              <tr className="bg-blue-600/10 font-bold border-t border-blue-500/20">
                <td className="px-6 py-4 text-white">
                  Subtotal (sin IVA)
                </td>

                <td className="px-6 py-4 text-right text-blue-400 font-mono">
                  Por definir
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3 text-white/60">
                  IVA (16%)
                </td>

                <td className="px-6 py-3 text-right text-white/60 font-mono">
                  Por definir
                </td>
              </tr>

              <tr className="bg-blue-600/20 font-extrabold text-base">
                <td className="px-6 py-4 text-white">
                  TOTAL PROYECTO C
                </td>

                <td className="px-6 py-4 text-right text-blue-300 font-mono">
                  Por definir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Contratación */}
      <section className="rounded-2xl border border-white/10 bg-[#0a0a12] p-6 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
          Condiciones de Contratación
        </h3>

        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-white/70 marker:text-amber-400">
          <li>
            Cada módulo puede contratarse de manera independiente
            o como parte de la solución integral.
          </li>

          <li>
            La ejecución de cada módulo estará sujeta a la
            aprobación del alcance, entregables, calendario e
            inversión correspondientes.
          </li>

          <li>
            La contratación conjunta no implica que la
            ejecución de todos los módulos deba comenzar
            simultáneamente. El calendario será acordado
            entre ambas partes.
          </li>

          <li>
            Cualquier descuento o beneficio comercial por
            contratación conjunta deberá establecerse
            expresamente en la cotización definitiva.
          </li>
        </ul>
      </section>

      <PaymentTerms />
      <LegalAndGuarantees />
    </div>
  );
}