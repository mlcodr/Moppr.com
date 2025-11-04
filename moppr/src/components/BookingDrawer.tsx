import { useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  hourlyRate: number
}

export default function BookingDrawer({ open, onClose, hourlyRate }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 md:inset-auto md:right-6 md:bottom-6 md:w-[420px] rounded-t-2xl md:rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-soft p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Request Service</h3>
          <button onClick={onClose} className="text-slate-500">Close</button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <label className="text-sm">
            <div className="text-slate-500 mb-1">Date</div>
            <input type="date" className="w-full rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
          </label>
          <div className="grid grid-cols-2 gap-2">
            <label className="text-sm">
              <div className="text-slate-500 mb-1">Start</div>
              <input type="time" className="w-full rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
            </label>
            <label className="text-sm">
              <div className="text-slate-500 mb-1">End</div>
              <input type="time" className="w-full rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
            </label>
          </div>
        </div>
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Estimated price: <span className="font-semibold">~ ${hourlyRate * 2}</span> (2h demo)
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-md bg-brand-gradient text-white px-4 py-2 text-sm">Confirm Request</button>
          <button onClick={onClose} className="rounded-md border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm">Cancel</button>
        </div>
      </div>
    </div>
  )
}
