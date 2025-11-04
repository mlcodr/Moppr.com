import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export type Maid = {
  id: string
  name: string
  avatar?: string
  location: string
  hourlyRate: number
  skills: string[]
  ratingAvg: number
  ratingCount: number
}

export default function MaidCard({ maid, index = 0 }: { maid: Maid, index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-soft p-4"
    >
      <div className="relative h-44 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {maid.avatar ? (
          <img src={maid.avatar} alt={maid.name} className="h-full w-full object-cover" />
        ) : null}
        <div className="absolute top-2 left-2 text-xs px-2 py-1 rounded-md bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-slate-800">
          {maid.location}
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{maid.name}</h3>
          <div className="mt-1 text-xs text-slate-500">${maid.hourlyRate}/hr</div>
        </div>
        <div className="text-xs rounded-md border border-slate-200 dark:border-slate-800 px-2 py-1">
          ⭐ {maid.ratingAvg.toFixed(1)} ({maid.ratingCount})
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {maid.skills.slice(0, 3).map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            {s}
          </span>
        ))}
        {maid.skills.length > 3 ? (
          <span className="text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800">+{maid.skills.length - 3}</span>
        ) : null}
      </div>

      <Link
        to={`/maid/${maid.id}`}
        className="mt-4 inline-block rounded-md bg-brand-gradient text-white px-4 py-2 text-sm shadow-soft"
      >
        View profile
      </Link>
    </motion.div>
  )
}
