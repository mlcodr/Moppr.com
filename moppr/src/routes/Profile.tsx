import { Link, useParams } from 'react-router-dom'
import RatingStars from '@/components/RatingStars'
import SkillsChips from '@/components/SkillsChips'
import BookingDrawer from '@/components/BookingDrawer'
import maids from '@/data/maids.json'
import reviews from '@/data/reviews.json'
import { useMemo, useState } from 'react'

export default function Profile() {
  const { id } = useParams()
  const maid = useMemo(() => (maids as any[]).find(m => m.id === id), [id])
  const maidReviews = useMemo(() => (reviews as any[]).filter(r => r.maidId === id), [id])
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (!maid) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-slate-600 dark:text-slate-300">Maid not found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 h-64 rounded-xl bg-slate-100 dark:bg-slate-800" />
            <div className="h-64 rounded-xl bg-slate-100 dark:bg-slate-800" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold">{maid.name}</h1>
          <div className="mt-2 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>{maid.location}</span>
            <span>•</span>
            <span>${maid.hourlyRate}/hr</span>
            <span>•</span>
            <RatingStars value={maid.ratingAvg} className="inline-flex" />
            <span>({maid.ratingCount})</span>
          </div>
          <SkillsChips skills={maid.skills} />

          <div className="mt-8">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Experienced and reliable. This is demo content for the prototype profile page.</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Reviews</h2>
            <div className="mt-3 space-y-4">
              {maidReviews.length === 0 && (
                <div className="text-sm text-slate-500">No reviews yet.</div>
              )}
              {maidReviews.map(r => (
                <div key={r.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="text-sm font-medium">{r.user}</div>
                    <RatingStars value={r.rating} className="ml-auto" />
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-soft h-fit">
          <div className="text-sm text-slate-500">From</div>
          <div className="text-2xl font-semibold">${maid.hourlyRate}<span className="text-sm font-normal">/hr</span></div>
          <div className="mt-4">
            <button onClick={() => setDrawerOpen(true)} className="w-full rounded-md bg-brand-gradient text-white px-4 py-2 text-sm shadow-soft">Request Service</button>
          </div>
          <button className="mt-2 w-full rounded-md border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Save</button>
          <Link to="/messages" className="mt-2 inline-block w-full text-center rounded-md border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Message</Link>
        </aside>
      </div>

      <BookingDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} hourlyRate={maid.hourlyRate} />
    </div>
  )
}
