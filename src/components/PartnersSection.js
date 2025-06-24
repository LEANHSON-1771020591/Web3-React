import React from "react";
import PartnerCard from "./PartnerCard";
import "../css/section_three.css";

const partnersData = [
  {
    imgSrc: "/images/partner-1.png",
    infoText:
      "Monad is an Ethereum-compatible <br> Layer 1 blockchain optimized for high <br> throughput.",
  },
  {
    imgSrc: "/images/partner-2.png",
    infoText:
      "Holdstation is a zkSync Era project for <br> non-custodial wallets, derivatives <br> trading, and a launchpad.",
  },
  {
    imgSrc: "/images/partner-3.png",
    infoText:
      "U2U Network is a collaborative Web3 <br> ecosystem that unites innovators to <br> drive collective economic value.",
  },
  {
    imgSrc: "/images/partner-4.png",
    infoText:
      "K300 Ventures is a venture capital firm <br> supporting early-stage blockchain <br> projects with funding, advice, and <br> guidance.",
  },
  {
    imgSrc: "/images/partner-5.png",
    infoText: "The Vape Club is Vietnam's #1 vape <br> brand.",
  },
  {
    imgSrc: "/images/partner-6.png",
    infoText:
      "9 CAT DIGITAL GROUP is a Web3 <br> conglomerate offering comprehensive <br> blockchain solutions for businesses and <br>entrepreneurs.",
  },
];

export default function PartnersSection() {
  return (
    <section id="section-three">
      <p id="section-three-title">PARTNERS</p>
      <div id="partners">
        {partnersData.map((partner, index) => (
          <PartnerCard
            key={index}
            imgSrc={partner.imgSrc}
            infoText={partner.infoText}
          />
        ))}
      </div>
    </section>
  );
}
