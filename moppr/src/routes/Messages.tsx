import { useMemo, useState } from 'react'
import messagesData from '@/data/messages.json'
import maids from '@/data/maids.json'
import { motion, AnimatePresence } from 'framer-motion'

export default function Messages() {
  const threads = useMemo(() => messagesData as any[], [])
  const [activeThread, setActiveThread] = useState(() => threads[0])
  const [draft, setDraft] = useState('')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 h-[60vh] flex flex-col">
          <div className="text-sm text-slate-500 mb-3">Conversations</div>
          <div className="flex-1 space-y-2 overflow-y-auto pr-1">
            {threads.map((thread) => {
              const maid = (maids as any[]).find(m => m.id === thread.maidId)
              const isActive = activeThread?.threadId === thread.threadId
              return (
                <button
                  key={thread.threadId}
                  onClick={() => setActiveThread(thread)}
                  className={`w-full text-left rounded-xl border px-3 py-3 transition ${isActive ? 'border-brand-400 bg-brand-50 dark:bg-slate-800/60 dark:border-brand-500' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div>
                      <div className="text-sm font-medium">{maid?.name ?? 'Maid'}</div>
                      <div className="text-xs text-slate-500">Last message • {new Date(thread.lastMessageAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </aside>

        <section className="col-span-12 lg:col-span-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 h-[60vh] flex flex-col">
          {activeThread ? (
            <>
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                <div>
                  <div className="text-sm font-medium">
                    {(maids as any[]).find(m => m.id === activeThread.maidId)?.name ?? 'Maid'}
                  </div>
                  <div className="text-xs text-green-500">Online now</div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto py-4 space-y-3">
                <AnimatePresence initial={false}>
                  {activeThread.messages.map((message: any) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${message.sender === 'user' ? 'ml-auto bg-brand-gradient text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}`}
                    >
                      {message.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                  className="text-xs text-slate-400"
                >
                  Typing…
                </motion.div>
              </div>

              <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                <input
                  placeholder="Type a message"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className="flex-1 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
                />
                <button className="rounded-md bg-brand-gradient text-white px-4 py-2 text-sm">Send</button>
              </div>
            </>
          ) : (
            <div className="flex-1 grid place-items-center text-sm text-slate-500">Select a thread to view messages.</div>
          )}
        </section>
      </div>
    </div>
  )
}
