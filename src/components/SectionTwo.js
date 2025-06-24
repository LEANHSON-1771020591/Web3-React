import React from "react";
import "../css/section_two.css";

const packIncludes = [
  "Free Omega Series Smart Vape Device",
  "Free TheVapeNads NFT",
  "6 Free Pods",
  "15% lifetime discount on all TheVapeLabs products & services",
  "Profit-sharing from TheVapeNodes",
  "Priority access to future launches, including TheVapePass",
  "Exclusive incentives from TheVapeLabs ecosystem partners",
];

const iconStyle = {
  color: "var(--light-violet-blue)",
  marginRight: "15px",
};

export default function SectionOne() {
  return (
    <section id="section-two">
      <div id="section-two-content">
        <div id="section-two-content-left" className="section-two-content-box">
          <div id="section-two-content-left-title">
            <div id="section-two-content-left-title-one">OG Pass</div>
            <div id="section-two-content-left-title-two">
              Exclusively for the OGs
            </div>
          </div>
        </div>
        <div id="section-two-content-right" className="section-two-content-box">
          <div id="section-two-content-right-title">
            <div id="section-two-content-right-title-content">
              <i className="ri-box-3-fill" style={iconStyle}></i>
              <span>Pack include</span>
            </div>
          </div>
          <div id="section-two-content-right-content">
            {packIncludes.map((item, index) => (
              <div
                className="section-two-content-right-content-items"
                key={index}
              >
                <i className="ri-box-3-fill" style={iconStyle}></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
