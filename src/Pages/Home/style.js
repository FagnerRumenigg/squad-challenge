import styled from "styled-components";

export const Container = styled.div`
  #allStuffs {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 712px;
    background-repeat: no-repeat;

    #insideModalDiv {
      position: absolute;
      width: 503px;
      left: 229px;
      top: 237px;
      z-index: 1001;
      color: #fff;

      span {
        font-weight: 800;
        font-size: 60px;
        line-height: 50px;
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
      }

      p {
        width: 456px;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #fff;
      }
    }

    section.awSlider .carousel {
      display: table;
      z-index: 2;
      -moz-box-shadow: 0 0 4px #444;
      -webkit-box-shadow: 0 0 4px #444;
      box-shadow: 0 0 15px rgba(1, 1, 1, 0.5);
    }

    section.awSlider {
      margin: 30px auto;
      padding: 30px;
      position: relative;
      display: table;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    section.awSlider:hover > img {
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 1;
    }

    section.awSlider img {
      pointer-events: none;
    }

    section.awSlider > img {
      position: absolute;
      top: 30px;
      z-index: 1;
      transition: all 0.3s;
      filter: blur(1.8vw);
      -webkit-filter: blur(2vw);
      -moz-filter: blur(2vw);
      -o-filter: blur(2vw);
      -ms-filter: blur(2vw);
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      opacity: 0.5;
    }
  }

  #textAndButtom {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1440px;
    height: 819px;
    background-image: url("images/textBoxBackground.png");
    background-repeat: no-repeat;
  }

  #textAndButtomWithIcon {
    display: flex;
    width: 1440px;
    background-image: url("images/textBoxBackground.png");

    #sqTextBoxOne {
      margin-top: 339px;
    }

    #sqTextBoxTwo {
      margin-bottom: 464px;
    }
  }
`;

export const BlueBox = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  height: 259px;
  background-image: url("images/blueBackground.png");

  #textBlueBox {
    width: 482px;
    font-weight: 800;
    margin-bottom: 60px;
    margin-left: 776px;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-image: url("images/blueBackground.png");
    color: #3b52a1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  background-color: #373537;
  height: 20px;
  width: 1440px;
  color: #fff;
  font-size: 12px;
  margin-right: 80px;
  z-index: 1000;

  span {
    margin-right: 187px;
  }

  #creditCard {
    width: 16px;
    margin-right: 8px;
    margin-bottom: 2px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background: transparent;
  margin-bottom: 100px;
  height: 80px;
  z-index: 1000;
  top: 20px;

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

export const ModalDiv = styled.div`
  position: absolute;
  width: 518px;
  height: 495px;
  left: 191px;
  top: 236px;
  background-image: url("images/opacityBackground.png");
  mix-blend-mode: overlay;
`;

export const VideoBox = styled.div`
  margin: 673px 730px 787px 110px;
  position: absolute;
  width: 522px;
  height: 330px;
  background-image: url("images/videoImage.png");
  background-repeat: no-repeat;
  border: 3px solid #3b52a1;
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
  background-image: url("images/textBoxBackground.png");
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

export const SecondBlueBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  height: 284px;
  background-image: url("images/blueBackground.png");
  font-family: "Gotham Book";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #fff;

  #textWithQuot {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 278px;
    width: 500px;

    #textDiv {
      width: 340px;
      text-align: center;
    }

    #openQuotImg {
      margin-bottom: 82px;
    }

    #closeQuotImg {
      margin-top: 77px;
    }
  }

  #clientOliveira {
    margin-right: 342px;
    margin-bottom: 30px;
  }
`;

export const HalfForm = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  background: #373537;
  color: #fff;

  #halfLeft {
    display: flex;
    align-items: center;
    width: 709px;
    height: 666px;
    background-image: url("images/formBackground.png");

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

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 757px;
  width: 1440px;
`;

export const BlueFooter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 478px;
  background-color: #3b52a1;

  #blueFooterText {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    font-family: "Gotham";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 23px;
    color: #fff;

    #blueFooterUpperText {
      display: flex;

      li {
        list-style-type: none;
      }
    }

    #blueFooterBottomText {
      width: 870px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      #iconsBox {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  #sqFooterOneId {
    margin-top: 153px;
  }

  #sqFooterTwoId {
    margin-bottom: 216px;
  }
`;

export const BlackFooter = styled.div`
  height: 279px;
  display: flex;
  align-items: center;
  background: #373537;
  color: #fff;
  justify-content: flex-end;

  span {
    width: 1059px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: justify;
    color: #ffffff;
  }

  #bgWppIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #25d366;
    margin: 0px 54px 144px 57px;
  }
`;

export const Risks = styled.div`
  height: ${(props) => props.height};
  border-left: 3px solid ${(props) => props.colorBorder || "#3b52a1"};
  margin-bottom: 20px;
  /* margin-top: 0px; */
`;
