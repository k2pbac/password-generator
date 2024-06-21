import "./App.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div className="App">
      <div className="password-container">
        <div className="copy-section">
          <InputGroup>
            <Form.Control
              placeholder="P4$5W0rD!"
              aria-label="Amount (to the nearest dollar)"
            />
            <InputGroup.Text>
              <img src="./icon-copy.svg" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="generate-section">
          <div className="character-length">
            <p>Character Length</p>
            <input type="text" value={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
