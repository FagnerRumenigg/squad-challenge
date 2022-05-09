import styled from "styled-components";

export const Container = styled.div`
  #allStuffs {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 712px;
    background-image: url("background.png");
    background-repeat: no-repeat;
  }

  #blueBox {
    width: 1440px;
    height: 259px;
    background-image: url("blueBackground.png");
  }

  #openQuotImg {
    margin-left: 193px;
  }

  #textAndButtom {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1440px;
    height: 819px;
    background-image: url("textBoxBackground.png");
    background-repeat: no-repeat;
  }
`;

export const Risks = styled.div`
  height: ${(props) => props.height};
  border-left: 3px solid #3b52a1;
  margin-bottom: 20px;
`;

export const HalfForm = styled.div`
  display: flex;
  align-items: center;

  #halfLeft {
    display: flex;
    align-items: center;
    width: 720px;
    height: 667px;
    background-image: url("formBackground.png");
    background-repeat: no-repeat;

    #halfLeftText {
      width: 366px;
      color: #fff;
      margin-left: 194px;

      #upperText {
        font-family: "Gotham Bold";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
        color: #000;
      }
    }
  }
`;

export const SecondBlueBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 1440px;
  height: 284px;
  background-image: url("blueBackground.png");
  font-family: "Gotham Book";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #fff;

  #textDiv {
    margin-left: 278px;
    width: 340px;
    height: 140px;
  }

  #clientOliveira {
    margin-right: 342px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1440px;

  #textOne {
    margin-left: 235px;
    width: 422px;
    color: #fff;
    font-family: "Gotham Book";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  #textTwo {
    margin-top: 0;
    margin-right: 235px;
    width: 422px;
    color: #fff;
    font-family: "Gotham Book";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const EndTextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: Column;
  width: 1440px;
  height: 300px;
  background-image: url("textBoxBackground.png");
  background-repeat: no-repeat;

  p {
    font-family: "Gotham Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #fff;
  }
`;

export const OurTeam = styled.div`
  width: 1440px;
  height: 795px;
`;

export const VideoBox = styled.div`
  margin: 673px 730px 787px 110px;
  position: absolute;
  width: 522px;
  height: 330px;
  background-image: url("videoImage.png");
  background-repeat: no-repeat;
  border: 3px solid #3b52a1;
`;

export const TopHeader = styled.div`
  text-align: end;
  background-color: #373537;
  height: 20px;
  width: 100vw;
  color: #fff;
  font-size: 12px;

  span {
    margin-right: 187px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  margin-bottom: 100px;
  height: 80px;

  a {
    text-decoration: none;
    color: white;
    width: content;
    height: 29px;
    padding: 0px 11px;

    &:hover {
      background: #aa8c3c;
      border-radius: 22.5px;
    }
  }

  img {
    margin-right: 67.5px;
    width: 201px;
    height: 47px;
  }

  span {
    margin: 0 19px 10px 19px;
    color: #aa8c3c;
  }
`;

export const PopUpDiv = styled.div`
  width: 518px;
  height: 495px;
  background: #3b52a1;
  opacity: 0.4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
