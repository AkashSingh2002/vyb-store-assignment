"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How much does it cost to set up a store?",
    answer:
      "Setting up a store is free; transaction fees may apply for each sale.",
  },
  {
    question: "What kind of digital products can I sell?",
    answer:
      "You can sell various digital products like ebooks, music, art, courses, software, and more.",
  },
  {
    question: "Do I need technical skills to use the platform?",
    answer:
      "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
  },
  {
    question: "Is there a limit to the number of products I can list?",
    answer:
      "There is no limit to the number of products you can list on our platform.",
  },
  {
    question: "How do I receive payments for my sales?",
    answer:
      "Payments are processed through integrated payment gateways and are transferred directly to your account.",
  },
  {
    question: "Can I sell internationally on this marketplace?",
    answer: "Yes, you can sell to customers worldwide.",
  },
  {
    question: "What support and resources are available for sellers?",
    answer:
      "We offer a range of resources, including tutorials, customer support, and a dedicated help center.",
  },
  {
    question: "Is there a review process for uploaded products?",
    answer:
      "Yes, products go through a review process to ensure quality and compliance with our guidelines.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="faq-title-desc">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Quick answers to questions you may have. Can’t find what you’re
            looking for? Check out our full documentation.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="toggle-icon">
                  {openIndex === index ? "—" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq-container {
          background-color: black;
          color: #ffffff;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .faq-header {
          display: flex;
          justify-content: space-between;
          gap: 3rem;
          align-items: center;
        }
        .faq-title-desc {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex: 1;
        }
        .faq-title {
          font-size: 2rem;
          color: #00ff84;
          margin-bottom: 1rem;
        }
        .faq-description {
          font-size: 1rem;
          color: #cccccc;
        }
        .faq-list {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        .faq-item {
          background-color: white;
          color: black;
          border-radius: 10px;
          border-bottom: 1px solid #333;
          padding: 0.75rem 0;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
          cursor: pointer;
          margin: 5px;
        }
        .faq-answer {
          margin: 5px;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: black;
        }
        .toggle-icon {
          font-size: 1.5rem;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default FAQ;