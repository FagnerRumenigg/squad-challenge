import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  width: 731px;
  height: 666px;

  .fields {
    width: 430px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  input {
    height: 40px;
    border: 2px solid #3b52a1;
    border-radius: 74px;
    background: #373537;
    margin-bottom: 8px;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
  }
  select {
    height: 40px;
    border: 2px solid #3b52a1;
    border-radius: 74px;
    background: #373537;
    color: #fff;
  }

  .sendButtom {
    margin-right: 100px;
  }
`;

export const RadioButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.width || "170px"};
`;
