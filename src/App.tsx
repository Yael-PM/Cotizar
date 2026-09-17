import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, NavLink, Outlet } from 'react-router-dom'
import { ProyectoA } from './ProyectoA'
import { ProyectoB } from './ProyectoB'
import { ProyectoC } from './ProyectoC'
import Quienes from './Quienes'
import mexiwareLogo from './assets/MEXIWARE.png'

function Layout() {
  const navItems = [
    { label: 'Propuesta Sinergia Farmaceútica', path: '/cotizacion-a' },
    { label: 'Propuesta Ctrl + Farma', path: '/cotizacion-b' },
    { label: 'Propuesta Conjunta', path: '/cotizacion-c' },
    { label: '¿Quienes somos?', path: '/about-us' },
  ]

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#030308] text-white selection:bg-blue-600/40 grain">
      {/* Navbar */}
      <header className="relative z-30 mx-auto mt-6 flex w-[calc(100%-2rem)] max-w-[1440px] items-center justify-between rounded-full border border-white/10 bg-white/[0.02] px-6 py-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.05] to-transparent" />
        
        <div className="relative z-10 flex items-center gap-4">
          <img src={mexiwareLogo} alt="Mexiware Logo" className="h-5 w-auto object-contain sm:h-6 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
          <span className="hidden sm:block text-xs font-bold tracking-[0.2em] text-white/30 border-l border-white/10 pl-4">GRUPO FARMA</span>
        </div>
        
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
      </header>

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