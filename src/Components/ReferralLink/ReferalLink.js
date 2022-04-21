import styled from 'styled-components';


const ReferalLink = () => {
  const CardContent = styled.div`
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 59%) 6px 6px 20px 6px;
    border-radius: 20px;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fbf1e1;
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
    padding-bottom: 8px;
    justify-content: center;
  `

  const CardInputContainer = styled.div`
    width: 360px;
    height: 53px;
    align-items: center;
    display: flex;
    text-align: right;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    border: 1px solid rgb(85, 85, 85);
    border-radius: 10px;
  `

  const CardInput = styled.input`
    width: 250px;
    height: 50px;
    border: 0px;
    outline: none;
    text-align: right;
    margin-right: 10px;
    font-size: x-large;
  `

  const CardDescription = styled.h2`
    margin-bottom: 5px;
    font-size: small;
    text-align: center;
  `
  return (
    <CardContent>
      <CardTitle>Referral Link</CardTitle>
      <CardInputContainer>
        <CardInput
          type="text"
          placeholder="Please enter the link."
        />
      </CardInputContainer>
      <CardDescription>Earn 12% of the BNB used to bake beans from anyone who uses your referral link</CardDescription>
    </CardContent>
  );
};

export default ReferalLink;
