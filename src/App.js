import "./App.css";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { css } from "@emotion/css";
import generatePassword from "./helper";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [charLength, setCharLength] = useState(0);
  const [background, setBackground] = useState("");
  const [levelBackground, setLevelBackground] = useState("transparent");
  const [levelValue, setLevelValue] = useState(-1);
  const [password, setPassword] = useState("");
  const [filters, setFilters] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [copied, setCopied] = useState(false);
  const levels = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
  const backgroundColors = ["#F64A4A", "#FB7C58", "#F8CD65", "#A4FFAF"];
  const handleChange = (e) => {
    setCharLength(e.target.value);
    const tempSliderValue = e.target.value;
    const progress = (tempSliderValue / 20) * 100;
    const background = `linear-gradient(to right, #a4ffaf ${progress}%, #18171F ${progress}%)`;
    setBackground(background);
    setLevelValue(-1);
  };
  const handleCheck = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    setLevelValue(-1);
  };
  const handleImageCheck = (label) => {
    setFilters((prev) => ({ ...prev, [label]: !prev[label] }));
    setLevelValue(-1);
  };

  const handleGenerator = () => {
    const level = Object.values(filters).filter((el) => !!el).length - 1;
    setPassword(generatePassword(charLength, filters));
    setLevelValue(level);
    setLevelBackground(backgroundColors[level]);
  };

  const handleCopied = () => {
    setCopied(true);
  };
  return (
    <div className="App">
      <h1 className="title">Password Generator</h1>
      <div className="password-container">
        <div className="copy-section">
          <InputGroup className="align-items-center">
            <Form.Control
              placeholder="P4$5W0rD!"
              aria-label="Amount (to the nearest dollar)"
              value={password}
              readOnly
            />
            {copied ? <span className="copied-text">COPIED</span> : null}

            <CopyToClipboard text={password} onCopy={() => handleCopied()}>
              <InputGroup.Text>
                <img className="copy-image" src="./icon-copy.svg" />
              </InputGroup.Text>
            </CopyToClipboard>
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
              {levelValue !== -1 ? (
                <p>{charLength <= 5 ? levels[0] : levels[levelValue]}</p>
              ) : null}
              <span
                style={{
                  background: `${levelValue >= 0 ? levelBackground : ""}`,
                }}
              ></span>
              <span
                style={{
                  background: `${levelValue >= 1 ? levelBackground : ""}`,
                }}
              ></span>
              <span
                style={{
                  background: `${levelValue >= 2 ? levelBackground : ""}`,
                }}
              ></span>
              <span
                style={{
                  background: `${levelValue >= 3 ? levelBackground : ""}`,
                }}
              ></span>
            </div>
          </div>
          <button onClick={handleGenerator} className="generate-btn">
            GENERATE
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
