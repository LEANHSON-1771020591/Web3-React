import React from "react";
import "../css/popup.css";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popupTitle"
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 id="popupTitle" className="popup-title">
          Connect Wallet
        </h2>

        <ul className="wallet-list">
          <li className="wallet-item">
            <img
              src="/images/wallet.webp"
              alt="WalletConnect Logo"
              className="wallet-logo"
            />
            WalletConnect <span className="qr-code">QR CODE</span>
          </li>
          <li className="wallet-item">
            <img
              src="/images/fox.webp"
              alt="MetaMask Logo"
              className="wallet-logo"
            />
            MetaMask
          </li>
          <li className="wallet-item">
            <img
              src="/images/shilde.webp"
              alt="Trust Wallet Logo"
              className="wallet-logo"
            />
            Trust Wallet
          </li>
          <li className="wallet-item">
            <img
              src="/images/four.svg"
              alt="All Wallets Logo"
              className="wallet-logo"
              id="four"
            />
            All Wallets <span className="wallet-count">70+</span>
          </li>
        </ul>

        <p className="footer-text">
          Haven't got a wallet?
          <a
            href="https://metamask.io/download/"
            className="get-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started
          </a>
        </p>
      </div>
    </>
  );
};

export default Popup;
