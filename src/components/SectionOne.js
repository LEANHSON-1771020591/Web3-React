import React, { useState } from "react";
import "../css/section_one.css";

export default function SectionOne() {
  const [quantity, setQuantity] = useState(1);
  const minQuantity = 1;
  const maxQuantity = 3;
  const unitPrice = 0.1;

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > minQuantity) {
      setQuantity(quantity - 1);
    }
  };

  const total = Number((quantity * unitPrice).toFixed(3));

  const [isRoundOneContentVisible, setIsRoundOneContentVisible] =
    useState(true);

  const toggleRoundOneContent = () => {
    setIsRoundOneContentVisible(!isRoundOneContentVisible);
  };

  return (
    <section id="section-one">
      <div id="section-one-content">
        <div className="section-one-content-box">
          <div id="section-one-content-right-one">
            <div id="tier">
              <i
                className="ri-crosshair-2-line"
                style={{ color: "var(--light-violet-blue)" }}
              ></i>
              <span>Tier 1</span>
            </div>
            <div id="items">
              <i className="ri-box-3-fill"></i>
              <span>9 items left</span>
            </div>
          </div>

          <div id="section-one-content-right-two">
            <p id="special-price">Special price</p>
            <div id="price">
              <p id="price-number">0.1 ETH</p>
              <p id="price-number-sale">0.16 ETH</p>
            </div>
          </div>

          <div id="section-one-content-right-three">
            <div id="quantity">quantity</div>
            <div id="buy-content">
              <button
                id="decrease"
                className="btn-buy"
                onClick={handleDecrease}
                style={{
                  cursor: quantity <= minQuantity ? "not-allowed" : "pointer",
                }}
              >
                <i className="ri-subtract-line"></i>
              </button>
              <div id="product-buy">{quantity}</div>
              <button
                id="increase"
                className="btn-buy"
                onClick={handleIncrease}
                style={{
                  cursor: quantity >= maxQuantity ? "not-allowed" : "pointer",
                }}
              >
                <i className="ri-add-line"></i>
              </button>
            </div>
            <div id="warning">
              <span>
                <i
                  className="fa-solid fa-triangle-exclamation"
                  style={{ paddingTop: "3px" }}
                ></i>{" "}
                You can buy up to 3 products
                <br /> at a time.
              </span>
            </div>
          </div>

          <div id="section-one-content-right-four">
            <div id="title-total">Total</div>
            <div id="number-buy">{total} ETH</div>
          </div>

          <div id="section-one-content-right-five">
            <button id="visa" className="btn-pay">
              Pay by VISA
            </button>
            <button id="connect" className="btn-pay">
              Connect your wallet
            </button>
          </div>
        </div>

        <div className="section-one-content-box">
          <div
            className="round"
            id="round-one"
            onClick={toggleRoundOneContent}
            style={{ cursor: "pointer" }}
          >
            <div className="round-title">
              <i className="ri-flashlight-fill" style={{ color: "red" }}></i>
              <p>Round 1</p>
            </div>
            <div id="round-one-right">
              <button className="btn-live">
                <i className="ri-circle-fill" style={{ fontSize: "8px" }}></i>
                <p>Live</p>
              </button>
              <div className="icon-toggle">
                {isRoundOneContentVisible ? (
                  <i className="ri-arrow-up-s-line" id="up-round"></i>
                ) : (
                  <i className="ri-arrow-down-s-line" id="down-round"></i>
                )}
              </div>
            </div>
          </div>

          {isRoundOneContentVisible && (
            <div className="hidden-content">
              {[
                {
                  id: "one",
                  tier: "Tier 1",
                  price: "0.1 ETH",
                  items: "10 items",
                },
                {
                  id: "two",
                  tier: "Tier 2",
                  price: "0.105 ETH",
                  items: "10 items",
                },
                {
                  id: "three",
                  tier: "Tier 3",
                  price: "0.111 ETH",
                  items: "10 items",
                },
                {
                  id: "four",
                  tier: "Tier 4",
                  price: "0.116 ETH",
                  items: "10 items",
                },
              ].map((item, index) => (
                <div
                  className="hidden-content-item"
                  id={`hidden-content-item-${item.id}`}
                  key={index}
                >
                  <div className="hidden-content-item-left">
                    <div className="hidden-content-item-icon">
                      <i
                        className="ri-circle-fill"
                        style={{ fontSize: "8px" }}
                      ></i>
                    </div>
                    <div className="hidden-content-item-title">{item.tier}</div>
                  </div>
                  <div className="hidden-content-item-right">
                    <div className="hidden-content-item-price">
                      {item.price}
                    </div>
                    <div className="hidden-content-item-amount-hidden">
                      {item.items}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="round" id="round-two">
            <div className="round-title">
              <i
                className="ri-flashlight-fill"
                style={{ color: "rgba(255, 255, 0, 0.486)" }}
              ></i>
              <p>Round 2</p>
            </div>
          </div>

          <div className="round" id="round-three">
            <div className="round-title">
              <i className="ri-flashlight-fill" style={{ color: "green" }}></i>
              <p>Round 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
