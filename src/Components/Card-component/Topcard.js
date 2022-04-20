import React from "react";

import "./Topcard.css";
import Topcardcontent from "./Topcardcontent";

const Card = (props) => {
  return (
    <div className="card">
      <Topcardcontent></Topcardcontent>
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
