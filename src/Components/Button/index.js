// import { useState } from "react";
import { ButtonStyle } from "./style";

function Button({ name, action, style }) {
  return (
    <ButtonStyle style={style} onClick={action}>
      {name}
    </ButtonStyle>
  );
}

export default Button;
