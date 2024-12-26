import { CalendarDays, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10">
      <div className="relative">
        <div
          className="border w-80 relative z-10 bg-white"
          style={{
            borderRadius: 25,
          }}
        >
          <div className="p-2">
            <textarea
              placeholder="What's happening?"
              className="w-full p-2 bg-white outline-none resize-none"
            />
          </div>
          <div className="pt-10 relative">
            <AnimatePresence>
              {open && (
                <motion.div
                  className="px-2 absolute top-0 size-full"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                >
                  <div className="border rounded-full overflow-hidden h-10 relative flex items-center justify-between bg-slate-100">
                    <div className="bg-white w-[90%] rounded-full flex items-center justify-between">
                      <div className="border-r h-10 w-full flex items-center justify-between p-2">
                        <span className="text-sm">01, Jan 2025</span>
                        <ChevronDown size={20} />
                      </div>
                      <div className="h-10 w-full flex items-center justify-between p-2">
                        <span className="text-sm">12:00 AM</span>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                    <button
                      className="h-10 w-10 flex items-center justify-center"
                      onClick={() => setOpen(false)}
                    >
                      <X size={20} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex items-center justify-end p-2 gap-2 relative">
              <motion.button
                className="size-10 flex items-center justify-center border bg-slate-100  duration-300 transition-opacity"
                style={{
                  borderRadius: 25,
                  opacity: open ? 0 : 1,
                }}
                onClick={() => setOpen(true)}
              >
                <CalendarDays />
              </motion.button>
              <motion.button
                className="bg-zinc-900 py-2 px-8 text-white"
                layoutId="schedule"
                style={{
                  borderRadius: 25,
                }}
              >
                Post
              </motion.button>
              <AnimatePresence>
                {open && (
                  <div className="absolute inset-0 size-full flex items-center justify-center p-2">
                    <motion.button
                      layoutId="schedule"
                      className="bg-zinc-900 h-10 py-2 px-8 text-white w-full"
                      style={{
                        borderRadius: 25,
                      }}
                    >
                      Schedule
                    </motion.button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -62 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -62 }}
              className="w-full flex items-center justify-center bg-slate-100 border rounded-tl-none rounded-tr-none rounded-[25px] absolute -bottom-10 p-3 pt-8"
            >
              <p className="text-xs font-medium text-zinc-500">
                Will be posted on 01 Jan 2025 at 12:00 AM
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
