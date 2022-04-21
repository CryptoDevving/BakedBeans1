import "./Icons.css";
import Bscscan from "./bscscan.png";
import Twitter from "./twitter.png";
import Telegram from "./telegram.png";

const Icon = () => {
  return (
    <div className="positions">
      <a
        href="https://www.bscscan.com/address/0xE2D26507981A4dAaaA8040bae1846C14E0Fb56bF"
        target="__blank"
      >
        <img src={Bscscan} alt="bscscan" className="yeni" />
      </a>
      <a href="https://t.me/BakedBeansMiner" target="__blank">
        <img src={Telegram} alt="bscscan" className="yeni" />
      </a>
      <a href="https://twitter.com/BakedBeansMiner" target="__blank">
        <img src={Twitter} alt="bscscan" className="yeni" />
      </a>
    </div>
  );
};

export default Icon;
