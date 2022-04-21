import styled from 'styled-components';

const Reward = () => {
  const Seperator = styled.div`
    width: 100%;
    height: 30px;
    color: #dcd4c6;
    margin-top: -10px;
    border-bottom : 2px solid #dcd4c6;
  `

  const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    width: 100%;
    margin-top: 24px;
    font-weight: bolder;
  `

  const CardText = styled.div`
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: x-large;
  `

  const ButtonContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  `

  const Button = styled.button`
  width: 170px;
  height: 53px;
  font-size: large;
  cursor: pointer;
  border: 1px solid #f2b04f;
  background-color: #f2b04f;
  color: white;
  border-radius: 6px;

  &:hover {
    background-color: #ebc489;
    border-color: #ebc489;
  }

  &:active {
    background-color: #ebc489;
    border-color: #ebc489;
  }
  `
  return (
    <div> 
      <Seperator />
      <CardContent>
        <div>
          <CardText>Your Rewards</CardText>
        </div>
        <div>
          <CardText>0 BNB</CardText>
        </div>
      </CardContent>
      <ButtonContainer>
        <Button>
          RE-BAKE
        </Button>
        <Button >
          EAT BEANS
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Reward;
