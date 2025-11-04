import Hero from '@/components/Hero'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold">How it works</h2>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">Search & filter</div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">Compare profiles</div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">Book & chat</div>
        </div>
        <div className="mt-8">
          <Link to="/browse" className="rounded-md bg-brand-gradient text-white px-5 py-3 text-sm shadow-soft">Get started</Link>
        </div>
      </section>
    </>
  )
}
