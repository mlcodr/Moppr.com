import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, #22D3EE, transparent)' }} />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, #6366F1, transparent)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold leading-tight"
            >
              Hire trusted maids with a
              <span className="block gradient-text">modern, simple experience</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl"
            >
              Moppr helps you discover reliable professionals for cleaning, cooking, babysitting, and more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex gap-3"
            >
              <Link to="/browse" className="rounded-md bg-brand-gradient text-white px-5 py-3 text-sm shadow-soft">Search Maids</Link>
              <a href="#how" className="rounded-md border border-slate-200 dark:border-slate-800 px-5 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">How it works</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl p-6 shadow-soft bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            <div className="text-sm text-slate-500 mb-2">Quick search</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <input placeholder="Location" className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2" />
              <input placeholder="Skill (e.g., cleaning)" className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2" />
              <input placeholder="Min rating" className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2" />
              <input placeholder="Price range" className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2" />
            </div>
            <Link to="/browse" className="mt-4 inline-block rounded-md bg-brand-gradient text-white px-4 py-2 text-sm shadow-soft">See results</Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
