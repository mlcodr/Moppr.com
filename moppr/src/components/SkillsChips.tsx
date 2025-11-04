export default function SkillsChips({ skills }: { skills: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {skills.map((s) => (
        <span key={s} className="text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          {s}
        </span>
      ))}
    </div>
  )
}
