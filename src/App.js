import H2Tag from "./Components/H2Tag/H2Tag";
import Image from "./Components/Top/Image/Image/Image";
import Icons from "./Components/Icon/Icons";
import Topcard from "./Components/TopCardComponent/Topcard";
import "./index.css";
import BottomCard from "./Components/BottomCard/BottomCard";
import ReferalLink from "./Components/ReferralLink/ReferalLink";

function App() {
  return (
    <div className="main">
      <div className="main_div">
        <Image />
        <H2Tag />
        <Topcard />
        <BottomCard/>
        <ReferalLink/>
        <Icons/>
      </div>
    </div>
  );
}

export default App;
