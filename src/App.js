import styled from 'styled-components';
import {useState} from 'react';
import GlobalStyle from './globalStyle';
import H2Tag from "./Components/H2Tag/H2Tag";
import Image from "./Components/Top/Image";
import Icons from "./Components/Icon/Icons";
import Topcard from "./Components/TopCardComponent/Topcard";
// import "./index.css";
import BottomCard from "./Components/BottomCard/BottomCard";
import ReferalLink from "./Components/ReferralLink/ReferalLink";
import ConnectButton from './Components/ConnectButton/ConnectButton';
import ConnectionModal from './Components/ConnectionModal/ConnectionModal';


function App() {

  const [connectModal, showConnectModal] = useState(false);
  const [account, setAccount] = useState('');

  function isConnected() {
    return account.length > 0;
  }
  function toggleButton() {
    showConnectModal(!connectModal);
  }
  const Main = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;

  @media (max-width: 600px) {
    width : 90vw;
  }

  `

  const Content = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 400px;

  @media (max-width: 600px) {
    width : 90%;
  }
  `
  return (
    <>

    <Main>

    <ConnectionModal showModal={connectModal} toggleModal={toggleButton} connectAccount={setAccount}/>
      <GlobalStyle />
      
      <Content>

        <Image />
        <ConnectButton toggleModal={toggleButton} account={account} connectAccount={setAccount} />
        <H2Tag />
        <Topcard />
        <BottomCard/>
        <ReferalLink/>
        <Icons/>
      </Content>
    </Main>
    </>
  );
}

export default App;
