import { ButtonStyle } from "./style";

function Button({ id, name, action, style }) {
  return (
    <ButtonStyle id={id} style={style} onClick={action}>
      {name}
    </ButtonStyle>
  );
}

export default Button;
