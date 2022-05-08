import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */

  #allStuffs {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 712px;
    background-image: url("background.png");
    background-repeat: no-repeat;
  }

  #blueBox {
    width: 100vw;
    height: 259px;
    background-color: blue;
    /* position: absolute; */
  }
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
  /* max-width: 1024px; */
  background: transparent;
  margin-bottom: 100px;
  height: 80px;

  a {
    /* align-items: center; */
    text-decoration: none;
    color: white;
    /* text-align: center; */
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
