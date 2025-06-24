import React, { useState, useEffect } from "react";
import "../css/style.css";
import "../css/nav.css";

const Header = ({ onConnectWalletClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-left">
        <a href="#" className="logo">
          <img src="/images/logo3.png" alt="Logo" />
        </a>
      </div>

      <div className="nav-center">
        <a href="#">Minigame</a>
        <a
          href="https://link3.to/thevapelabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          href="https://thevapelabs.gitbook.io/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitepaper
        </a>
        <a
          href="https://drive.google.com/drive/u/0/folders/129MR7tZiGVDbQ_SiRtOarQRhcZ8Fn4kS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Media kit
        </a>
      </div>

      <div className="nav-right">
        <button
          type="button"
          className="connect-wallet-btn"
          onClick={onConnectWalletClick}
        >
          Connect Wallet <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
