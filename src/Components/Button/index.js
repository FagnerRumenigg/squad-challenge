import { ButtonStyle } from "./style";

function Button({ id, type, name, action, style }) {
  return (
    <ButtonStyle id={id} type={type} style={style} onClick={action}>
      {name}
    </ButtonStyle>
  );
}

export default Button;
