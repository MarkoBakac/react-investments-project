import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 500,
    expectedReturn: 6,
    duration: 30,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          id="initialInvestment"
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
            handleChange("initialInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          id="annualInvestment"
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) =>
            handleChange("annualInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">Expected Return</label>
        <input
          id="expectedReturn"
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(event) =>
            handleChange("expectedReturn", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="duration">Duration</label>
        <input
          id="duration"
          type="number"
          required
          value={userInput.duration}
          onChange={(event) => handleChange("duration", event.target.value)}
        />
      </div>
    </section>
  );
}
