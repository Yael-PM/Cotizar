import { BrowserRouter, Routes, Route, Navigate, NavLink, Outlet } from 'react-router-dom'
import { ProyectoA } from './ProyectoA'
import { ProyectoB } from './ProyectoB'
import { ProyectoC } from './ProyectoC'
import { useState } from 'react'
import Quienes from './Quienes'
import mexiwareLogo from './assets/MEXIWARE.png'

interface NavItem {
  label: string;
  path: string;
}

function Layout() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navItems: NavItem[] = [
    { label: 'Propuesta Sinergia Farmaceútica', path: '/cotizacion-a' },
    { label: 'Propuesta Ctrl + Farma', path: '/cotizacion-b' },
    { label: 'Propuesta Conjunta', path: '/cotizacion-c' },
    { label: '¿Quienes somos?', path: '/about-us' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#030308] text-white selection:bg-blue-600/40 grain">
      {/* Navbar Header */}
      <header className="relative z-30 mx-auto mt-6 flex w-[calc(100%-2rem)] max-w-[1440px] items-center justify-between rounded-full border border-white/10 bg-white/[0.02] px-6 py-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.05] to-transparent" />
        
        {/* Logo */}
        <div className="relative z-10 flex items-center gap-4">
          <img src={mexiwareLogo} alt="Mexiware Logo" className="h-5 w-auto object-contain sm:h-6 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
          <span className="hidden sm:block text-xs font-bold tracking-[0.2em] text-white/30 border-l border-white/10 pl-4">GRUPO FARMA</span>
        </div>
        
        {/* Nav Desktop (pantallas grandes) */}
        <nav className="relative z-10 hidden items-center gap-4 text-[11px] font-bold tracking-[0.2em] xl:flex">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `rounded-full px-5 py-2.5 transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-600/20 text-white border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.2)]' 
                    : 'text-white/50 border border-transparent hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Botón Hamburguesa Mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 xl:hidden focus:outline-none"
        >
          {isOpen ? (
            /* Ícono X */
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Ícono Hamburguesa */
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="relative z-20 mx-auto mt-3 w-[calc(100%-2rem)] max-w-[1440px] rounded-2xl border border-white/10 bg-[#0a0a12]/95 p-4 backdrop-blur-2xl shadow-2xl xl:hidden sm:w-[calc(100%-4rem)]">
          <nav className="flex flex-col gap-2 text-xs font-bold tracking-[0.15em]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600/20 text-white border border-blue-500/40'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Contenedor dinámico */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-12">
        <Outlet />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="cotizacion-a" replace />} />
          <Route path="cotizacion-a" element={<ProyectoA />} />
          <Route path="cotizacion-b" element={<ProyectoB />} />
          <Route path="cotizacion-c" element={<ProyectoC />} />
          <Route path="about-us" element={<Quienes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}