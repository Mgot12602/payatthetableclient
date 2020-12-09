import logo from "../logo.svg";
import "../App.css";

function HomePage() {
  return (
    <div className="main-container">
      <h1>Restaurant "La polla de l'estany"</h1>
      <div className="main-box">
        <div className="option-box">
          <h2>Scan the QR code on your table</h2>
        </div>
        <div>Or</div>
        <div className="option-box">
          <label id="table-number"><h2>Enter your table Number:</h2></label>
          <form>
              <input name="table-number" type="number" />
              <button>Enter</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default HomePage;
