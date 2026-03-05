import React from "react";
import { motion } from "framer-motion";
import { BookUserIcon, FileQuestionIcon } from "lucide-react";
import Title from "./Title";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const faqs = [
    {
      question: "How to create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button located at the top right corner of the homepage. Fill in the required information and submit the form to create your account.",
    },
    {
      question: "What features does the platform offer?",
      answer:
        "Our platform offers a wide range of features designed to help you find the perfect job. These include advanced search filters, personalized job recommendations, and a streamlined application process.",
    },
    {
      question: "Is the platform mobile-friendly?",
      answer:
        "Yes, our platform is fully responsive and mobile-friendly. You can access all features and functionalities from your smartphone or tablet without any issues.",
    },
    {
      question: "Can I customize my CV?",
      answer:
        "Absolutely! Our platform provides various templates and customization options to help you create a CV that stands out. You can choose from different layouts, fonts, and colors to make your CV uniquely yours.",
    },
    {
        question: "How can I contact support?",
        answer:
          "If you need assistance, you can contact our support team by clicking on the 'Contact Us' link at the bottom of the page. We are available 24/7 to help you with any questions or issues you may have.",
    }
  ];
  return (
    <>
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0 mt-28 scroll-mt-12" id="faq">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 rounded-full px-6 py-1.5"
        >
          <FileQuestionIcon className="size-4.5 stroke-green-600" />
          <span>Frequently Asked Questions</span>
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
            title="Looking for answer?"
            description="Find answers to common questions about our platform, features, and more."
          />
        </motion.div>

        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer w-full mt-2"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-75 translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
