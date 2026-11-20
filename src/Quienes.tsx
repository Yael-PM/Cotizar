
const Quienes = () => {
  return (
    <div className="space-y-24 py-10 text-white">

      {/* 1. Hero / Propuesta de valor */}
      <section className="relative overflow-hidden text-center space-y-6 max-w-4xl mx-auto px-4">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12),transparent_70%)]" />

        <div className="relative space-y-5">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Sobre Mexiware
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Transformamos desafíos empresariales en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              oportunidades de crecimiento.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
            Combinamos tecnología, estrategia comercial y construcción de marca
            para ayudar a las empresas a operar mejor, fortalecer su presencia
            en el mercado y desarrollar nuevas oportunidades de negocio.
          </p>
        </div>
      </section>


      {/* 2. Nuestra filosofía */}
      <section className="grid gap-8 lg:grid-cols-2 items-center">

        <div className="space-y-5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Nuestra visión
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            El crecimiento de un negocio requiere más que una buena idea.
          </h2>

          <p className="text-sm text-white/60 leading-relaxed">
            Muchas empresas cuentan con productos, servicios y clientes que les
            permiten crecer. Sin embargo, sus procesos, herramientas
            tecnológicas o estrategias comerciales no siempre evolucionan al
            mismo ritmo que sus necesidades.
          </p>

          <p className="text-sm text-white/60 leading-relaxed">
            En Mexiware entendemos que cada negocio enfrenta desafíos
            diferentes. Por eso, no partimos de una tecnología, herramienta
            o servicio predeterminado: partimos de entender el problema,
            identificar oportunidades y construir una solución que tenga
            sentido para su operación y sus objetivos.
          </p>

          <p className="text-sm text-white/60 leading-relaxed">
            Nuestro propósito es ayudar a las empresas a desarrollar las
            capacidades necesarias para competir, profesionalizarse y
            aprovechar su potencial de crecimiento.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a12] p-8 sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_55%)]" />

          <div className="relative space-y-8">
            <div className="space-y-2">
              <span className="text-xs text-blue-400 font-medium">
                Nuestra filosofía
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Soluciones que evolucionan con tu negocio.
              </h3>
            </div>

            <div className="space-y-4">
              {[
                "Entender antes de construir.",
                "Diseñar soluciones con propósito.",
                "Tecnología que responde a necesidades reales.",
                "Relaciones que evolucionan a largo plazo.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-white/5 pb-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.08] text-xs font-bold text-blue-400">
                    0{index + 1}
                  </div>

                  <p className="text-sm text-white/80 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 3. Problemas que ayudamos a resolver */}
      <section className="rounded-3xl border border-white/10 bg-[#0a0a12] p-6 sm:p-10 space-y-10">

        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Lo que hacemos
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Convertimos desafíos en capacidades empresariales.
          </h2>

          <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
            Identificamos oportunidades de mejora y desarrollamos soluciones
            que conectan tecnología, operación y estrategia comercial.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Operaciones */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.03]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <path d="M12 8V4H8" />
                <path d="M12 4L7 9" />
                <circle cx="12" cy="12" r="9" />
                <path d="M12 12L16 8" />
              </svg>
            </div>

            <h3 className="text-base font-bold">
              Eficiencia Operativa
            </h3>

            <p className="text-xs text-white/60 leading-relaxed">
              Simplificamos operaciones, automatizamos tareas repetitivas
              y centralizamos información para reducir fricción,
              errores y tiempos de ejecución.
            </p>
          </div>

          {/* Tecnología */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 transition-all duration-300 hover:border-purple-500/20 hover:bg-purple-500/[0.03]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 9l2 2-2 2" />
                <path d="M11 13h4" />
              </svg>
            </div>

            <h3 className="text-base font-bold">
              Evolución Tecnológica
            </h3>

            <p className="text-xs text-white/60 leading-relaxed">
              Desarrollamos software, integramos sistemas y aprovechamos
              tecnologías emergentes para convertir necesidades empresariales
              en herramientas funcionales.
            </p>
          </div>

          {/* Comercial */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M15 7h6v6" />
              </svg>
            </div>

            <h3 className="text-base font-bold">
              Crecimiento Comercial
            </h3>

            <p className="text-xs text-white/60 leading-relaxed">
              Diseñamos estrategias orientadas a mejorar la visibilidad,
              atraer oportunidades comerciales y desarrollar canales
              que conecten tu negocio con nuevos clientes.
            </p>
          </div>

          {/* Branding */}
          <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 transition-all duration-300 hover:border-amber-500/20 hover:bg-amber-500/[0.03]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z" />
              </svg>
            </div>

            <h3 className="text-base font-bold">
              Identidad y Posicionamiento
            </h3>

            <p className="text-xs text-white/60 leading-relaxed">
              Construimos identidades de marca consistentes que comunican
              el valor de tu negocio, fortalecen su percepción y
              contribuyen a diferenciarlo en el mercado.
            </p>
          </div>

        </div>
      </section>


      {/* 4. Nuestras capacidades */}
      <section className="space-y-8">

        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Nuestras capacidades
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Tres disciplinas. Una visión integral.
          </h2>

          <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
            Trabajamos desde diferentes especialidades para ofrecer
            soluciones alineadas a las necesidades y objetivos
            de cada organización.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Software */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12] p-7 space-y-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_50%)]" />

            <div className="relative space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                01 / Software
              </span>

              <h3 className="text-2xl font-bold">
                Tecnología para operar y escalar.
              </h3>

              <p className="text-xs text-white/60 leading-relaxed">
                Diseñamos y desarrollamos soluciones tecnológicas
                adaptadas a los procesos, necesidades y objetivos
                de cada empresa.
              </p>
            </div>

            <ul className="relative space-y-3 text-xs text-white/70">
              {[
                "Desarrollo web y móvil",
                "Sistemas empresariales",
                "Software a medida y SaaS",
                "Automatización de procesos",
                "Integraciones y APIs",
                "IA, Machine Learning y agentes",
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400">↗</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12] p-7 space-y-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />

            <div className="relative space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                02 / Marketing
              </span>

              <h3 className="text-2xl font-bold">
                Estrategias para conectar y crecer.
              </h3>

              <p className="text-xs text-white/60 leading-relaxed">
                Desarrollamos estrategias para fortalecer el posicionamiento,
                atraer audiencias y convertir oportunidades en relaciones
                comerciales.
              </p>
            </div>

            <ul className="relative space-y-3 text-xs text-white/70">
              {[
                "Estrategia de marketing",
                "Posicionamiento comercial",
                "Campañas de adquisición",
                "Publicidad digital",
                "Contenido y dirección creativa",
                "Estrategia de conversión",
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-emerald-400">↗</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Branding */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12] p-7 space-y-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_50%)]" />

            <div className="relative space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
                03 / Branding
              </span>

              <h3 className="text-2xl font-bold">
                Marcas que proyectan su verdadero valor.
              </h3>

              <p className="text-xs text-white/60 leading-relaxed">
                Construimos y fortalecemos marcas para que comuniquen
                con claridad, consistencia y diferenciación.
              </p>
            </div>

            <ul className="relative space-y-3 text-xs text-white/70">
              {[
                "Branding estratégico",
                "Identidad corporativa",
                "Naming y posicionamiento",
                "Logotipo y sistema visual",
                "Brandbooks y manuales",
                "Material comercial",
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-400">↗</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* 5. Experiencia y casos */}
      <section className="space-y-8">

        <div className="text-center space-y-3">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Experiencia aplicada
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Soluciones construidas alrededor de necesidades reales.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* CDE */}
          <div className="group rounded-3xl border border-white/10 bg-[#060712] p-7 space-y-5 transition-all duration-300 hover:border-blue-500/20">

            <div className="flex flex-wrap justify-between items-center gap-3">
              <h3 className="text-xl font-bold">
                CDE
              </h3>

              <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full border border-blue-500/20">
                Consultoría Sanitaria
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                Necesidad
              </span>

              <p className="text-sm text-white/60 leading-relaxed">
                Fortalecer su presencia digital y facilitar que potenciales
                clientes e instituciones conocieran sus servicios,
                capacidades y experiencia, reduciendo su dependencia
                de las recomendaciones directas.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                Solución
              </span>

              <p className="text-sm text-white/60 leading-relaxed">
                Desarrollamos su sitio web institucional con secciones
                de contacto y publicaciones informativas relacionadas
                con COFEPRIS, facilitando la comunicación de su
                conocimiento y servicios.
              </p>
            </div>

            <div className="pt-3 border-t border-white/5">
              <span className="text-xs text-blue-400 font-medium">
                Desarrollo web / Presencia digital
              </span>
            </div>
          </div>


          {/* Amata */}
          <div className="group rounded-3xl border border-white/10 bg-[#060712] p-7 space-y-5 transition-all duration-300 hover:border-purple-500/20">

            <div className="flex flex-wrap justify-between items-center gap-3">
              <h3 className="text-xl font-bold">
                Amata
              </h3>

              <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-3 py-1.5 rounded-full border border-purple-500/20">
                Mantenimiento Industrial
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                Necesidad
              </span>

              <p className="text-sm text-white/60 leading-relaxed">
                Reducir el tiempo dedicado a la elaboración manual de
                reportes de mantenimiento y facilitar el acceso a la
                información generada por técnicos y supervisores.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                Solución
              </span>

              <p className="text-sm text-white/60 leading-relaxed">
                Diseñamos un prototipo funcional para digitalizar la
                captura y consulta de reportes, centralizar registros
                y facilitar el seguimiento de actividades operativas.
              </p>
            </div>

            <div className="pt-3 border-t border-white/5">
              <span className="text-xs text-purple-400 font-medium">
                Prototipado / Digitalización operativa
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* 6. Equipo */}
      <section className="space-y-8">

        <div className="text-center space-y-3">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Nuestro equipo
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Experiencia, visión y ejecución.
          </h2>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto">
            Un equipo que combina gestión, tecnología y visión de negocio
            para transformar necesidades empresariales en soluciones.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Yael */}
          <div className="rounded-3xl border border-white/10 bg-[#0a0a12] p-7 sm:p-8 space-y-5">

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                Yael Pérez Méndez
              </h3>

              <p className="text-xs text-blue-400 font-medium">
                Founder & CEO | Director de Proyectos
              </p>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              Me especializo en la gestión de proyectos tecnológicos,
              coordinación de equipos multidisciplinarios y planeación
              de soluciones digitales. He liderado equipos de hasta
              11 personas, gestionando prioridades, tiempos, entregables
              y comunicación entre stakeholders.
            </p>

            <p className="text-sm text-white/60 leading-relaxed">
              En Mexiware, mi enfoque es conectar las necesidades
              estratégicas de cada cliente con una ejecución organizada,
              transparente y orientada a resultados, asegurando que
              cada proyecto avance con claridad desde su planeación
              hasta su implementación.
            </p>

            <div className="pt-3 border-t border-white/5">
              <span className="text-xs text-white/40">
                Project Management / Estrategia / Ejecución
              </span>
            </div>
          </div>


          {/* Eduardo */}
          <div className="rounded-3xl border border-white/10 bg-[#0a0a12] p-7 sm:p-8 space-y-5">

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                Eduardo Rosas Ponciano
              </h3>

              <p className="text-xs text-purple-400 font-medium">
                Co-founder de Operaciones | Consultor de Software
              </p>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              Me desempeño en el ámbito de la consultoría tecnológica,
              participando en el desarrollo de productos y soluciones
              de software orientados al sector bancario y financiero.
              Mi experiencia me permite comprender las necesidades
              de entornos tecnológicos que requieren organización,
              confiabilidad y una visión estructurada de desarrollo.
            </p>

            <p className="text-sm text-white/60 leading-relaxed">
              También cuento con especialidad en redes informáticas,
              lo que complementa mi perspectiva sobre infraestructura,
              conectividad y arquitectura tecnológica. En Mexiware,
              contribuyo a la operación, evaluación y orientación técnica
              de las soluciones que desarrollamos.
            </p>

            <div className="pt-3 border-t border-white/5">
              <span className="text-xs text-white/40">
                Consultoría de Software / Banca y Finanzas / Redes
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* 7. Cierre */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#080b16] p-8 sm:p-12 text-center space-y-5">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)]" />

        <div className="relative space-y-5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Construyamos el siguiente paso
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight max-w-3xl mx-auto">
            Tu empresa tiene potencial. Hagamos que se traduzca en oportunidades.
          </h2>

          <p className="text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            Conversemos sobre los retos de tu negocio, identifiquemos
            oportunidades y diseñemos una solución que responda a
            tus objetivos.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Quienes;
