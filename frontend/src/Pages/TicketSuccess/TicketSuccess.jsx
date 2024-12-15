import React, { useState } from "react";
import { Check, Copy, Home } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./TicketSuccess.scss";

const TicketSuccess = () => {
  const [copied, setCopied] = useState(false);
  // Example ticket code
  const location = useLocation();
  const booking = location.state || {};
  console.log("booking", booking);
  const ticketCode = booking?._id;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(ticketCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="ticket-success">
      <div className="ticket-success__container">
        {/* Success Icon */}
        <div className="ticket-success__icon">
          <Check />
        </div>

        {/* Success Message */}
        <h1 className="ticket-success__title">Đặt vé thành công!</h1>
        <p className="ticket-success__description">
          Cảm ơn bạn đã đặt vé. Dưới đây là mã vé của bạn:
        </p>

        {/* Ticket Code */}
        <div className="ticket-success__code-container">
          <code className="ticket-success__code">{ticketCode}</code>
          <button
            onClick={copyToClipboard}
            className={`ticket-success__copy-button ${
              copied ? "ticket-success__copy-button--copied" : ""
            }`}
            aria-label="Copy ticket code"
          >
            {copied ? <Check /> : <Copy />}
          </button>
        </div>

        {/* Copy Status */}
        {copied && (
          <p className="ticket-success__copy-message">
            Đã sao chép mã vé vào clipboard!
          </p>
        )}

        {/* Home Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="ticket-success__home-button"
        >
          <Home />
          Về trang chủ
        </button>
      </div>
    </div>
  );
};

export default TicketSuccess;