"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLE_CATEGORIES, ARTICLES } from "@/lib/articles";
import { EASE } from "@/lib/motion";

export default function ArticlesGrid() {
  const [cat, setCat] = useState<(typeof ARTICLE_CATEGORIES)[number]>("All");
  const list = ARTICLES.filter((a) => (cat === "All" ? true : cat === "Hindi" ? a.lang === "hi" : a.category === cat));
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0" role="tablist" aria-label="Filter articles">
        {ARTICLE_CATEGORIES.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition-[background-color,color,border-color,transform] duration-300 ease-spring active:scale-95 ${cat === c ? "border-teal bg-teal text-white" : "border-line bg-surface text-teal-deep hover:border-teal/40"}`}>
            {c}
          </button>
        ))}
      </div>
      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((a, i) => (
            <motion.div key={a.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, ease: EASE }}>
              <ArticleCard a={a} index={i} number={ARTICLES.indexOf(a) + 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
