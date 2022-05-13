import { useState } from "react";
import { DivForm, RadioButton } from "./style";
import Buttom from "../Button";
import { Email } from "../../utils/smtp";

function SecondForm() {
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [telephoneValue, setTelephoneValue] = useState();
  const [isInvestValue, setIsInvestValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [hasContactValue, setHasContactValue] = useState("");

  const emailTo = "alexandre@movedigital.com.br";

  const sendEmail = async () => {
    let selectSwitch = "";

    switch (selectValue) {
      case "1":
        selectSwitch = "R$ 5.000";
        break;
      case "2":
        selectSwitch = "R$ 10.000";
        break;
      case "3":
        selectSwitch = "R$ 20.000";
        break;

      default:
        selectSwitch = "0";
        break;
    }

    const link = `Olá, esses são os dados adiquiridos no formulário:<br/>
    Nome: ${nameValue}<br/>
    Email: ${emailValue}<br/>
    Telefone: ${telephoneValue}<br/>
    Você já investe?: ${isInvestValue}<br/>
    Quanto quer investir?: ${selectSwitch}<br/>
    Como deseja receber contato?:${hasContactValue}<br/>
    Atenciosamente,<br/> Eu.`;

    const validation = !!nameValue && !!emailValue && !!telephoneValue;

    if (validation) {
      await Email.send({
        Host: "smtp.elasticemail.com",
        Username: "enviaremailsquadcapital@gmail.com",
        Password: "5F47E93882F59424E257EBC9BCA67D49A451",
        To: emailTo,
        From: "enviaremailsquadcapital@gmail.com",
        Subject: "Dados do Usuário",
        Body: link,
      });
    }
  };

  return (
    <>
      <DivForm name="secondForm">
        <form>
          <div className="fields">
            <label htmlFor="nameInput">Nome*</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              onChange={(e) => setNameValue(e.target.value)}
              required
            />
            <label htmlFor="emailInput">Email*</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              onChange={(e) => setEmailValue(e.target.value)}
              required
            />
            <label htmlFor="telephoneInput">Telefone*</label>
            <input
              type="tel"
              className="form-control"
              id="telephoneInput"
              name="telephone"
              onChange={(e) => setTelephoneValue(e.target.value)}
              required
            />
            <p>Você já investe?</p>
            <RadioButton width="120px">
              <input
                type="radio"
                id="yesButton"
                name="isInvest"
                value={isInvestValue}
                onChange={() => setIsInvestValue("Sim")}
              />
              <label htmlFor="yesButton">Sim</label>
              <input
                type="radio"
                id="noButton"
                name="isInvest"
                onChange={() => setIsInvestValue("Não")}
                value={isInvestValue}
              />
              <label htmlFor="noButton">Não</label>
            </RadioButton>
            <p>Quanto quer investir?</p>
            <select
              name="select"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
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
                value={hasContactValue}
                onChange={() => setHasContactValue("Email")}
              />
              <label htmlFor="emailButton">Email</label>
              <input
                type="radio"
                id="telephoneButton"
                name="hasContact"
                value={hasContactValue}
                onChange={() => setHasContactValue("Telefone")}
              />
              <label htmlFor="telephoneButton">Telefone</label>
            </RadioButton>
            <p>* Campos de preenchimento obrigatório</p>
          </div>
          <Buttom
            name="Enviar"
            action={sendEmail}
            style={{ width: "100px", marginRight: "330px" }}
          />
        </form>
      </DivForm>
    </>
  );
}

export default SecondForm;
