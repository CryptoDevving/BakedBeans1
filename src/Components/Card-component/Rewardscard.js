import "./Topcard.css";
import "./Topcardcontent.css";
import "./Rewardscard.css";

const Rewardscard = () => {
  return (
    <div className="card">
      <div className="cardcontent">
        <div>
          <div>Your Rewards</div>
        </div>
        <div>
          <div>0 BEANS</div>
        </div>
      </div>
      <div className="buttons">
        <button className="asd">
          Re-Bake
        </button>
        <button className="asd">
          Eat Beans
        </button>
      </div>
    </div>
  );
};

export default Rewardscard;
