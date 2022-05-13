import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => props.width || "176px"};
  height: 45px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  color: #fff;
  background: #3b52a1;
  border-radius: 21px;
  text-transform: uppercase;
  border-width: 0px;
  margin-right: ${(props) => props.marginRight};
  z-index: 1001;
  cursor: pointer;

  &:hover {
    background: #aa8c3c;
  }
`;
