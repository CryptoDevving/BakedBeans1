import "./Topcard.css";
import Topcardcontent from "./Topcardcontent";
import Reward from "./Reward";

const Card = (props) => {
  return (
    <div className="card">
      <Topcardcontent></Topcardcontent>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__input">
            <input
              type="text"
              className="new-expense__input2"
              placeholder="0"
            />
            <p className="new-expense__input3">BNB</p>
          </div>
        </div>
        <div className="new-expense__buttondiv">
          <button className="new-expense__button" type="submit">BAKE BEANS</button>
        </div>
      </form>
      <Reward/>
    </div>
  );
};

export default Card;
