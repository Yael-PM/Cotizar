const Quienes = () => {
  return (
    <div className="space-y-16 py-6 text-white">
      {/* 1. Encabezado Principal y Propuesta de Valor */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
          Sobre Mexiware
        </h4>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Impulsamos el crecimiento de tu negocio eliminando sus barreras
        </h1>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
          Diseñamos soluciones tecnológicas a la medida y estrategias de marca adaptadas a las necesidades reales de cada empresa. Eliminamos la fricción operativa para que te enfoques en escalar.
        </p>
      </section>

      {/* 2. El Problema que Resolvemos (Grid de Dolores) */}
      <section className="rounded-3xl border border-white/10 bg-[#0a0a12] p-6 sm:p-10 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">¿Qué desafíos ayudamos a superar?</h2>
          <p className="text-xs sm:text-sm text-white/50">
            Transformamos las limitaciones comunes en ventajas competitivas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Operativos */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
              ⚙️
            </div>
            <h3 className="text-base font-bold text-white">Eficiencia Operativa</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Eliminamos tareas repetitivas, procesos manuales en Excel o WhatsApp y errores humanos mediante la centralización y automatización de datos.
            </p>
          </div>

          {/* Tecnológicos */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
              💻
            </div>
            <h3 className="text-base font-bold text-white">Modernización Digital</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Reemplazamos sistemas obsoletos por software especializado, conectando tus herramientas en un ecosistema integrado y escalable.
            </p>
          </div>

          {/* Comerciales */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              📈
            </div>
            <h3 className="text-base font-bold text-white">Estrategia Comercial</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Aumentamos tu visibilidad y comunicamos tu verdadero valor comercial para atraer al cliente ideal y maximizar el retorno de inversión.
            </p>
          </div>

          {/* Marca */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
              🎨
            </div>
            <h3 className="text-base font-bold text-white">Identidad de Marca</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Construimos un branding profesional y consistente que proyecte la solidez y el nivel real de tu negocio en el mercado.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Casos de Éxito / Confianza */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Experiencia Comprobada
          </h4>
          <h2 className="text-2xl sm:text-3xl font-bold">Empresas que confían en nosotros</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#060712] p-6 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">CDE</h3>
              <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                Consultoría Sanitaria
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Desarrollamos su plataforma web oficial optimizada para prospección, incrementando de forma directa su visibilidad y posicionamiento ante instituciones y clientes extranjeros.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#060712] p-6 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Amata</h3>
              <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
                Mantenimiento Industrial
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Diseñamos el prototipo funcional para su aplicación móvil de reportes en campo, digitalizando el flujo de datos de sus técnicos operativos.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Conoce al Equipo (Presentaciones Homologadas) */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-blue-400">
            Liderazgo Técnico
          </h4>
          <h2 className="text-2xl sm:text-3xl font-bold">Conoce a una parte del equipo detrás de Mexiware</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Yael */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0a12] p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Yael Pérez Méndez</h3>
              <p className="text-xs text-blue-400 font-medium">Founder & CEO | Director de Proyectos</p>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Hola, soy Yael. Me apasiona aplicar metodologías ágiles como Scrum para impulsar la innovación y el trabajo en equipo. He coordinado equipos de hasta 11 personas gestionando tiempos, tareas y entregables de alta calidad. Mi enfoque es brindarle a tu empresa un liderazgo organizado y transparente que convierta ideas complejas en resultados claros.
            </p>
          </div>

          {/* Mario */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0a12] p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Mario Pérez Barrera</h3>
              <p className="text-xs text-purple-400 font-medium">CV/ML Engineer | Especialista en Robótica e IA</p>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Hola, soy Mario. Me especializo en robótica, visión computacional e Inteligencia Artificial. Desarrollo sistemas inteligentes integrando herramientas como ROS 2, detección con YOLO y algoritmos de Machine Learning. Mi objetivo es llevar la tecnología avanzada desde el modelo matemático hasta su implementación real y funcional en tu operación.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quienes;