import { Outlet, Link, NavLink } from 'react-router-dom'
import { Moon, Sun, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

function useDarkMode() {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('moppr-theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (enabled) {
      root.classList.add('dark')
      localStorage.setItem('moppr-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('moppr-theme', 'light')
    }
  }, [enabled])

  return { enabled, setEnabled }
}

export default function App() {
  const { enabled, setEnabled } = useDarkMode()

  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-brand-gradient shadow-soft grid place-items-center text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-semibold text-lg gradient-text">Moppr</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/browse" className={({isActive}) => isActive ? 'text-brand-500' : 'text-slate-600 dark:text-slate-300'}>Browse</NavLink>
            <NavLink to="/messages" className={({isActive}) => isActive ? 'text-brand-500' : 'text-slate-600 dark:text-slate-300'}>Messages</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setEnabled(!enabled)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {enabled ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
              <span className="hidden sm:inline">{enabled ? 'Light' : 'Dark'}</span>
            </button>
            <Link to="/browse" className="rounded-md bg-brand-gradient text-white px-3 py-1.5 text-sm shadow-soft">Find a Maid</Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Moppr — Find trusted help at home.
      </footer>
    </div>
  )
}
