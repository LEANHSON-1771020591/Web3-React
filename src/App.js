import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import PartnersSection from "./components/PartnersSection";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";

import Popup from "./components/Popup.js";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <div className="container">
        <Header onConnectWalletClick={openPopup} />
        <main>
          <SectionOne />
          <SectionTwo />
          <PartnersSection />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </main>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
}

export default App;
