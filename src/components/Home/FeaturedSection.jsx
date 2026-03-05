import React, { useState } from "react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";

const FeaturedSection = () => {
  const [isHover, setIsHover] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <div className="flex flex-col items-center scroll-mt-12 mt-24" id="features">

      {/* Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 rounded-full px-6 py-1.5"
      >
        <Zap width={14} />
        <span>Powerful Features</span>
      </motion.div>

      {/* Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        <Title
          title="Everything You Need to Get Hired"
          description="From AI-written content to ATS optimization — we handle the hard parts so you can focus on landing the job."
        />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center lg:-mt-20">

        {/* Image */}
        <motion.img
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Resume builder preview"
        />

        {/* Feature Cards */}
        <div
          className="px-4 md:px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Card 1 — AI Resume Writing (violet) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 max-w-md group cursor-pointer"
          >
            <div
              className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300 flex gap-4 rounded-xl transition-all duration-300 ${
                !isHover ? "border-violet-300 bg-violet-100" : ""
              }`}
            >
              {/* Sparkle / AI icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-violet-600 shrink-0 mt-0.5"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  AI Resume Writing
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Our AI generates professional summaries, bullet points, and skill suggestions tailored to your target role.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — ATS Score Checker (green) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 max-w-md group cursor-pointer"
          >
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-all duration-300">
              {/* Chart / score icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-green-600 shrink-0 mt-0.5"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  ATS Score Checker
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Instantly see how your resume scores against Applicant Tracking Systems and get actionable tips to rank higher.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — PDF Download & Share (orange) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={5}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 max-w-md group cursor-pointer"
          >
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-all duration-300">
              {/* Download icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6 stroke-orange-600 shrink-0 mt-0.5"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  PDF Download & Share
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Export a pixel-perfect PDF in one click or share a live link directly with recruiters.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;