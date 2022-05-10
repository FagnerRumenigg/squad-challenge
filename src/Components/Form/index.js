import { Form, RadioButton } from "./style";
import Buttom from "../Button";

function SecondForm() {
  return (
    <>
      <Form>
        <div className="fields">
          <label htmlFor="nameInput">
            Nome* <br />
          </label>
          <input
            type="nome"
            className="form-control"
            id="nameInput"
            name="name"
            required
          />
          <label htmlFor="emailInput">
            Email* <br />
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            required
          />
          <label htmlFor="telephoneInput">
            Telefone* <br />
          </label>
          <input
            type="telephone"
            className="form-control"
            id="telephoneInput"
            required
          />
          <p>Você já investe?</p>
          <RadioButton width="120px">
            <input type="radio" id="yesButton" name="isInvest" value="yes" />
            <label htmlFor="yesButton">Sim</label>
            <input type="radio" id="noButton" name="isInvest" value="no" />
            <label htmlFor="noButton">Não</label>
          </RadioButton>
          <p>Quanto quer investir?</p>
          <select name="select">
            <option value="0">Selecione</option>
            <option value="1">R$ 5.000,00</option>
            <option value="2">R$ 10.000,00</option>
            <option value="3">R$ 20.000,00</option>
          </select>
          <p>Como deseja receber o contato?</p>
          <RadioButton>
            <input
              type="radio"
              id="emailButton"
              name="hasContact"
              value="email"
            />
            <label htmlFor="emailButton">Email</label>
            <input
              type="radio"
              id="telephoneButton"
              name="hasContact"
              value="telephone"
            />
            <label htmlFor="telephoneButton">Telefone</label>
          </RadioButton>
          <p>* Campos de preenchimento obrigatório</p>
        </div>
        <Buttom
          name="Enviar"
          style={{ width: "100px", marginRight: "330px" }}
        />
      </Form>
    </>
  );
}

export default SecondForm;
