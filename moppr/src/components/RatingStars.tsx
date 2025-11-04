type Props = { value: number; outOf?: number; className?: string }

export default function RatingStars({ value, outOf = 5, className }: Props) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const empty = outOf - full - (half ? 1 : 0)

  return (
    <div className={className} aria-label={`Rating ${value.toFixed(1)} out of ${outOf}`}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f-${i}`} className="text-amber-400">★</span>
      ))}
      {half && <span className="text-amber-400">☆</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e-${i}`} className="text-slate-300 dark:text-slate-600">★</span>
      ))}
    </div>
  )
}
