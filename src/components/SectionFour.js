import React, { useState } from "react";
import "../css/section_four.css";

const FaqItem = ({ faq, index, activeIndex, toggleFaq }) => {
  const isActive = index === activeIndex;

  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="faqs" onClick={() => toggleFaq(index)}>
        {faq.question}
        <i className="ri-arrow-down-s-line arrow down-round"></i>
        <i className="ri-arrow-up-s-line arrow up-round"></i>
      </div>
      <div className="faq-content">
        <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
      </div>
    </div>
  );
};

export default function SectionFour() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the OG Pass?",
      answer:
        "The OG Pass is an <strong>exclusive membership NFT</strong> that unlocks <strong>premium benefits</strong> within TheVapeLabs ecosystem. It grants holders <strong>profit-sharing, free vape devices, staking APY boosts, and early access to sales and events.</strong>",
    },
    {
      question: "What benefits do OG Pass holders get?",
      answer: `OG Pass holders receive: <br>
                     <ul>
                         <li>Free Omega Series Smart Vape Device</li>
                         <li>Free TheVapeNads NFT</li>
                         <li>6 Free Pods</li>
                         <li>15% lifetime discount on all TheVapeLabs products & services</li>
                         <li>Profit-sharing from TheVapeNodes</li>
                         <li>Priority access to future launches, including TheVapePass</li>
                         <li>Exclusive incentives from TheVapeLabs ecosystem partners</li>
                     </ul>`,
    },
    {
      question: "How many OG Passes are available?",
      answer:
        "Only 3333 OG Passes will be sold. Once they're gone, no more will be issued.",
    },
    {
      question: "How much does an OG Pass cost?",
      answer:
        "The OG Pass will be sold at a limited-time early adopter price. Full details will be revealed closer to launch.",
    },
    {
      question: "How do I buy an OG Pass?",
      answer:
        "You can purchase the OG Pass on TheVapeLabs official platform when the sale goes live. Ensure you have a crypto wallet ready with the accepted payment method.",
    },
    {
      question: "How will the Omega Series device be shipped?",
      answer: "Details to be updated.",
    },
    {
      question: "Is the OG Pass an NFT?",
      answer:
        "Yes, the OG Pass is a blockchain-based NFT that grants exclusive access to rewards, benefits, and future perks within TheVapeLabs ecosystem.",
    },
    {
      question: "Can I sell or trade my OG Pass?",
      answer:
        "Yes, as an NFT, the OG Pass can be sold or transferred on secondary markets. However, only the original holder can claim the one-time rewards (such as free devices and pods).",
    },
    {
      question: "When do I receive my rewards?",
      answer: `<ul>
                        <li>Devices & pods will be shipped shortly after purchase verification.</li>
                        <li>Profit-sharing & staking APY boosts activate automatically.</li>
                        <li>Future incentives and access benefits will roll out as TheVapeLabs ecosystem expands.</li>
                     </ul>`,
    },
    {
      question: "Why should I buy an OG Pass?",
      answer:
        "OG Pass holders get exclusive perks that won't be available elsewhere. It's a first-mover opportunity to secure lifetime benefits and be at the forefront of AI x DePIN x DeSciinnovation in vaping.",
    },
    {
      question: "How do I stay updated?",
      answer: `Follow TheVapeLabs official channels for the latest announcements:
                     <ul>
                         <li><a href="https://x.com/thevapelabs">X/Twitter</a></li>
                         <li><a href="https://thevapelabs.io/">Website</a></li>
                         <li><a href="https://t.me/thevapelabs_channel">Telegram</a></li>
                         <li><a href="https://discord.com/invite/JVRVCtTKQ5">Discord</a></li>
                     </ul>`,
    },
  ];

  return (
    <section id="section-four">
      <p id="section-four-title">FAQS</p>
      {faqData.map((faq, index) => (
        <FaqItem
          key={index}
          faq={faq}
          index={index}
          activeIndex={activeIndex}
          toggleFaq={toggleFaq}
        />
      ))}
    </section>
  );
}
