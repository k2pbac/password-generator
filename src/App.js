import "./App.css";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { css } from "@emotion/css";
import generatePassword from "./helper";

function App() {
  const [charLength, setCharLength] = useState(0);
  const [background, setBackground] = useState("");
  const [password, setPassword] = useState("");
  const [filters, setFilters] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const handleChange = (e) => {
    setCharLength(e.target.value);
    const tempSliderValue = e.target.value;
    const progress = (tempSliderValue / 20) * 100;
    const background = `linear-gradient(to right, #a4ffaf ${progress}%, #18171F ${progress}%)`;
    setBackground(background);
  };
  const handleCheck = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  const handleImageCheck = (label) => {
    setFilters((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleGenerator = () => {
    setPassword(generatePassword(charLength, filters));
  };

  return (
    <div className="App">
      <div className="password-container">
        <div className="copy-section">
          <InputGroup>
            <Form.Control
              placeholder="P4$5W0rD!"
              aria-label="Amount (to the nearest dollar)"
              value={password}
              readOnly
            />
            <InputGroup.Text>
              <img src="./icon-copy.svg" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="generate-section">
          <div className="character-length">
            <p>
              Character Length <span>{charLength}</span>
            </p>
          </div>
          <Form.Range
            id="range1"
            min={0}
            max={20}
            onChange={handleChange}
            value={charLength}
            className={css`
              &::-webkit-slider-runnable-track {
                background: ${background};
              }
            `}
          />
          <div className="filters">
            <div className="icon-container">
              <Form.Check
                checked={filters["uppercase"]}
                label="Include Uppercase Letters"
                onChange={(e) => handleCheck(e)}
                name="uppercase"
              />
              {!!filters["uppercase"] ? (
                <img
                  onClick={() => handleImageCheck("uppercase")}
                  className="check-icon"
                  src="./icon-check.svg"
                  alt="checked"
                />
              ) : null}
            </div>
            <div className="icon-container">
              <Form.Check
                checked={filters["lowercase"]}
                onChange={(e) => handleCheck(e)}
                label="Include Lowercase Letters"
                name="lowercase"
              />
              {!!filters["lowercase"] ? (
                <img
                  onClick={() => handleImageCheck("lowercase")}
                  className="check-icon"
                  src="./icon-check.svg"
                  alt="checked"
                />
              ) : null}
            </div>
            <div className="icon-container">
              <Form.Check
                name="numbers"
                onChange={(e) => handleCheck(e)}
                checked={filters["numbers"]}
                label="Include Numbers"
              />
              {!!filters["numbers"] ? (
                <img
                  onClick={() => handleImageCheck("numbers")}
                  className="check-icon"
                  src="./icon-check.svg"
                  alt="checked"
                />
              ) : null}
            </div>
            <div className="icon-container">
              <Form.Check
                name="symbols"
                onChange={(e) => handleCheck(e)}
                checked={filters["symbols"]}
                label="Include Symbols"
              />
              {!!filters["symbols"] ? (
                <img
                  onClick={() => handleImageCheck("symbols")}
                  className="check-icon"
                  src="./icon-check.svg"
                  alt="checked"
                />
              ) : null}
            </div>
          </div>
          <div className="strength">
            <p>STRENGTH</p>
            <div className="levels">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <button onClick={handleGenerator} className="generate-btn">
            GENERATE{" "}
            <span>
              <img src="./icon-arrow-right.svg" alt="right-arrow"></img>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
