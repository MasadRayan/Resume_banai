import React from "react";
import Title from "./Title";
import { BookUserIcon, Zap } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [isYearly, setIsYearly] = React.useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const pricingData = [
    {
      name: "Free",
      pricing: 0,
      features: [
        "Simple Templates",
        "Limited Customization",
        "Basic Analytics",
        "Community Support",
        "Limited Integrations",
        "Limited CV Versions",
      ],
    },
    {
      name: "Pro plan",
      pricing: 19,
      mostPopular: true,
      features: [
        "All Free features",
        "Premium Templates",
        "Advanced Customization",
        "Detailed Analytics",
        "Priority Support",
        "Unlimited Integrations",
        "Unlimited CV Versions",
      ],
    },
    {
      name: "Enterprise",
      pricing: 49,
      features: [
        "All Pro features",
        "Custom Template Design",
        "Dedicated Account Manager",
        "Team Collaboration",
        "Advanced Security",
        "Custom Integrations",
      ],
    },
  ];

  return (
    <>
      <div id="pricing" className="flex flex-col items-center py-16 px-4 mt-16">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 rounded-full px-6 py-1.5"
        >
          <BookUserIcon className="size-4.5 stroke-green-600" />
          <span>Pricing</span>
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
            title="Choose the Plan That Fits Your Needs"
            description="Whether you're just starting out or need advanced features, we have a plan for you."
          />
        </motion.div>

        <div className="relative p-1 bg-white border border-gray-200 rounded-full inline-flex items-center mb-10 w-60 mt-10">
          <div
            className={`absolute -z-10 w-[calc(50%-4px)] h-13.25 rounded-full bg-linear-to-r from-green-600 to-green-400 transition-transform duration-300 ease-in-out pointer-events-none
                        ${isYearly ? "translate-x-full" : "translate-x-0"}`}
          ></div>

          <button
            onClick={() => setIsYearly(false)}
            className={`relative bg-white z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center transition-colors duration-300
                        ${!isYearly ? "text-green-600" : "text-gray-500 hover:text-gray-900"}`}
          >
            Monthly
          </button>

          <button
            onClick={() => setIsYearly(true)}
            className={`relative z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center flex items-center justify-center gap-1 transition-colors duration-300
                        ${isYearly ? "text-green-600" : "text-gray-500 hover:text-gray-900"}`}
          >
            Yearly
            <span className="text-xs">15% off</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full items-end">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={
                plan.mostPopular
                  ? "bg-linear-to-r from-green-600 to-green-200 rounded-3xl p-2 shadow-xl hover:shadow-lg transition-shadow"
                  : ""
              }
            >
              {plan.mostPopular && (
                <p className="text-center text-green-700 text-sm py-1.5">
                  Popular
                </p>
              )}
              <div
                key={index}
                className={`rounded-3xl p-6 bg-white ${!plan.mostPopular ? "border border-neutral-200 hover:shadow-lg transition-shadow" : ""}`}
              >
                <h3 className="text-neutral-700 text-sm mb-6">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-[28px] text-neutral-900">
                    {isYearly
                      ? `$${plan.pricing - Math.round(plan.pricing * 0.15)}`
                      : `$${plan.pricing}`}
                  </span>
                  <span className="text-neutral-600 text-xs">/ month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-neutral-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-circle-check-icon lucide-circle-check"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full cursor-pointer py-3 rounded-full bg-linear-to-r from-green-500 to-green-300 text-white text-sm hover:opacity-95 transition-opacity">
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingSection;
