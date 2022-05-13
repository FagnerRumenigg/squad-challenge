import { useState } from "react";
import Modal from "react-modal";
import { HeaderForm, TitleAccount, FormProperty } from "./style";
import { LogoSquad } from "../../assets/images";
import Buttom from "../Button";
import { Email } from "../../utils/smtp";

Modal.setAppElement(document.getElementById("root"));

function FormModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [telephoneValue, setTelephoneValue] = useState();
  const [patrimonyValue, setPatrimonyValue] = useState("");

  const emailTo = "alexandre@movedigital.com.br";

  const sendEmail = async () => {
    const link = `Olá, esses são os dados adiquiridos no formulário:<br/>
      Nome: ${nameValue}<br/>
      Email: ${emailValue}<br/>
      Telefone: ${telephoneValue}<br/>
      Qual sua faixa de patrimônio?: ${patrimonyValue}<br/>
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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Buttom action={openModal} name="Abra sua conta" />
      <Modal
        id="modalId"
        style={{
          content: {
            height: "670px",
            width: "521px",
            padding: 0,
            top: "10%",
            left: "50%",
            right: "auto",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <HeaderForm>
          <img src={LogoSquad} alt="Logo Squad" />
        </HeaderForm>
        <form>
          <FormProperty>
            <TitleAccount>ABRIR SUA CONTA É SIMPLES</TitleAccount>
            <span className="subtitle">
              Preencha os dados abaixo e siga as próximas instruções{" "}
            </span>
            <div className="fields">
              <label htmlFor="inputNome">
                Nome* <br />
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNome"
                aria-describedby="name"
                onChange={(e) => setNameValue(e.target.value)}
                required
              />
              <label htmlFor="inputEmail">
                Email* <br />
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                onChange={(e) => setEmailValue(e.target.value)}
                required
              />
              <label htmlFor="inputTelefone">
                Telefone* <br />
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputTelefone"
                onChange={(e) => setTelephoneValue(e.target.value)}
                required
              />
              <label htmlFor="inputPatrimonio">
                Qual a sua faixa de patrimônio? <br />
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPatrimonio"
                onChange={(e) => setPatrimonyValue(e.target.value)}
              />
            </div>
            <Buttom name="Próximo Passo" action={sendEmail} />
          </FormProperty>
        </form>
      </Modal>
    </>
  );
}

export default FormModal;
