import React from "react";

import "./Card.css";
import Cardcontent from "./Cardcontent";

const Card = (props) => {
  return (
    <div className="card">
      <Cardcontent></Cardcontent>
      <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input
            type="text"
            placeholder="BNB"
          />
        </div>
      </div>
      <div className="new-expense">
        <button type="submit">Bake Beans</button>
      </div>
    </form>
    </div>
  );
};

export default Card;
