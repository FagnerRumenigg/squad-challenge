import styled from "styled-components";

export const HeaderForm = styled.header`
  width: 100%;
  height: 90px;
  background-color: #3b52a1;
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 2000;
`;

export const TitleAccount = styled.span`
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #3b52a1;
  z-index: 2001;
`;

export const FormProperty = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 568px;
  z-index: 2002;

  .subtitle {
    width: 339px;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
  }

  .fields {
    width: 430px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input {
    height: 40px;
    border: 2px solid #b8b8b8;
    border-radius: 74px;
    padding-left: 10px;
    padding-right: 10px;
  }

  button {
    color: #fff;
    width: 176px;
    height: 45px;
    background: #3b52a1;
    border-radius: 21px;
    text-transform: uppercase;
    border-width: 0px;
  }
`;
