import MaidCard, { type Maid } from '@/components/MaidCard'
import maids from '@/data/maids.json'

export default function Browse() {
  const list = maids as Maid[]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Browse Maids</h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">Use filters to narrow down your search.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <input placeholder="Skills" className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
          <input placeholder="Min rating" className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
          <input placeholder="Price range" className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((m, i) => (
          <MaidCard key={m.id} maid={m} index={i} />
        ))}
      </div>
    </div>
  )
}
