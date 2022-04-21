import styled from 'styled-components';


const BottomCard = () => {
  const CardContent = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 59%) 6px 6px 20px 6px;
  border-radius: 20px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  flex-direction: column;
  margin-bottom: 25px;
  `

  const CardTitle = styled.h2`
  width: 100%;
  margin: 0px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.334;
  color: rgb(23, 33, 94);
  border-bottom: 5px solid;
  padding-bottom: 8px;
  `

  const CardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  `

  const CardDescText = styled.h2`
  margin-bottom: 5px;
  font-size: x-large;
  `
  return (
    <CardContent>
      <CardTitle>Nutrition Facts</CardTitle>
      <CardDescription>
        <div>
          <CardDescText>Daily Return</CardDescText>
          <CardDescText>APR</CardDescText>
          <CardDescText>Dev Fee</CardDescText>
        </div>
        <div>
          <CardDescText>8%</CardDescText>
          <CardDescText>2,920%</CardDescText>
          <CardDescText>3%</CardDescText>
        </div>
      </CardDescription>
    </CardContent>
  );
};

export default BottomCard;
