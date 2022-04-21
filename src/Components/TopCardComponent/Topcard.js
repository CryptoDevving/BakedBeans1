import styled from 'styled-components';

import { useState } from 'react';
import Topcardcontent from "./Topcardcontent";
import Reward from "./Reward";

const Card = (props) => {

  const CardContainer = styled.div`
  background: white;
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

  const FormInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  `

  const FormInputItem = styled.div`
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

  const FormInputElement = styled.input`
    width: 250px;
    height: 50px;
    border: 0px;
    outline: none;
    text-align: right;
    margin-right: 10px;
    font-size: x-large;
  `

  const FormInputSpan = styled.p`
    margin-right: 10px;
    font-size: x-large;
  `

  const FormButtonContainer = styled.div`
  font-size: x-large;
  cursor: pointer;
  color: white;
  border-radius: 6px;
  margin-bottom: 10px;
  `

  const FormButton = styled.button`
  width: 360px;
  height: 60px;
  font-size: large;
  cursor: pointer;
  border: 1px solid #f2b04f;
  background-color: #f2b04f;
  color: white;
  border-radius: 10px;
  margin-bottom: 0px;

  &:hover {
    background-color: #ebc489;
    border-color: #ebc489;
  }

  &:active {
    background-color: #ebc489;
    border-color: #ebc489;
  }
  `

  const [value ,setValue] = useState(0);

  const changeVal = (e) => {
    console.log(e.target.value)
    const val = e.target.value
    try {
      const valFloat = Number(val)
      setValue(valFloat)
    } catch {
      console.error('no string')
    }
  }
  return (
    <CardContainer>
      <Topcardcontent></Topcardcontent>
      <form>
        <FormInput>
          <FormInputItem >
            <FormInputElement
              type="text"
              placeholder="0"
              onChange={changeVal}
              value={value || ''}
            />
            <FormInputSpan>BNB</FormInputSpan>
          </FormInputItem>
        </FormInput>
        <FormButtonContainer>
          <FormButton type="submit">BAKE BEANS</FormButton>
        </FormButtonContainer>
      </form>
      <Reward/>
    </CardContainer>
  );
};

export default Card;
