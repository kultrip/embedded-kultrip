import React, { useState } from "react";

const DestinationWidget = () => {
  const [destination, setDestination] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setDestination(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination.trim() !== "") {
      setSubmitted(true);
      // Speak the response aloud
      if ("speechSynthesis" in window) {
        const utterance = new window.SpeechSynthesisUtterance(
          `You entered ${destination}`
        );
        window.speechSynthesis.speak(utterance);
      }
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 350 }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination-input">
          Enter your destination:
        </label>
        <input
          id="destination-input"
          type="text"
          value={destination}
          onChange={handleInputChange}
          placeholder="e.g., Paris"
          style={{ marginLeft: 8 }}
        />
        <button type="submit" style={{ marginLeft: 8 }}>
          Submit
        </button>
      </form>
      <div style={{ marginTop: 10 }}>
        {submitted && (
          <strong>You entered: {destination}</strong>
        )}
      </div>
    </div>
  );
};

export default DestinationWidget;