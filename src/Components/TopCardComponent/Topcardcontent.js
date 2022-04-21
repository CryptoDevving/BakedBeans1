import styled from 'styled-components';

const Cardcontent = (props) => {
  const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    width: 100%;
    margin-top: 24px;
  `

  const CardText = styled.div`
    padding-bottom: 10px ;
    margin-bottom: 24px;
    font-size: x-large;
  `
  return (
    <CardContainer>
      <div>
        <CardText>Contract</CardText>
        <CardText>Wallet</CardText>
        <CardText>Your Beans</CardText>
      </div>
      <div>
        <CardText>0 BNB</CardText>
        <CardText>0 BNB</CardText>
        <CardText>0 BEANS</CardText>
      </div>
    </CardContainer>
  );
};

export default Cardcontent;
