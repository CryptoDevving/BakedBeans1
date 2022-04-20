import H2Tag from "./Components/H2Tag/H2Tag";
import Image from "./Components/Top/Image/Image/Image";
import Button from "./Components/UI/Button";
import Card from "./Components/Card-component/Card";
import "./index.css";

function App() {
  return (
    <div className="main">
      <div className="main_div">
        <Image />
        <H2Tag />
        <Card>
        </Card>
      </div>
      <Button />
    </div>
  );
}

export default App;
