import H2Tag from "./Components/H2Tag/H2Tag";
import Image from "./Components/Top/Image/Image/Image";
import Icons from "./Components/Icon/Icons";
import Button from "./Components/UI/Button";
import Topcard from "./Components/Card-component/Topcard";
import Rewardscard from "./Components/Card-component/Rewardscard";
import "./index.css";

function App() {
  return (
    <div className="main">
      <div className="main_div">
        <Image />
        <H2Tag />
        <Topcard />
        <Rewardscard/>
        <Icons/>
      </div>
    </div>
  );
}

export default App;
