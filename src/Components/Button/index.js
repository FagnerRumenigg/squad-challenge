// import { useState } from "react";
import { ButtonStyle } from "./style";

function Button({ name, action }) {
  return <ButtonStyle onClick={action}>{name}</ButtonStyle>;
}

export default Button;
