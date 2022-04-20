import "./Icons.css";
import Bscscan from "./bscscan.png";
import Twitter from "./twitter.png";
import Telegram from "./telegram.png";

const Icon = () => {
    let bscurl = "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react";
    let twurl = "";
    let telurl = "";
  return (
    <div className="positions">
      <img src={Bscscan} alt="bscscan" className="yeni"/>
      <img src={Twitter} alt="bscscan" className="yeni" />
      <img src={Telegram} alt="bscscan" className="yeni"/>
    </div>
  );
};

export default Icon;
