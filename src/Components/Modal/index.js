import { useState } from "react";
import Modal from "react-modal";
import { HeaderForm, TitleAccount, FormProperty } from "./style";
import { LogoSquad } from "../../assets/images";
import Buttom from "../Button";

Modal.setAppElement(document.getElementById("root"));

function FormModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Buttom
        action={openModal}
        style={{ position: "absolute", top: "487px", left: "233px" }}
        name="Abra sua conta"
      />
      <Modal
        style={{ content: { height: "677px", width: "521px", padding: 0 } }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <HeaderForm>
          <img src={LogoSquad} alt="Logo Squad" />
        </HeaderForm>
        <FormProperty>
          <TitleAccount>ABRIR SUA CONTA É SIMPLES</TitleAccount>
          <span className="subtitle">
            Preencha os dados abaixo e siga as próximas instruções{" "}
          </span>
          <div className="fields">
            <label htmlFor="exampleInputEmail1">
              Nome* <br />
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputPassword1">
              Email* <br />
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <label htmlFor="exampleInputPassword1">
              Telefone* <br />
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <label htmlFor="exampleInputPassword1">
              Qual a sua faixa de patrimônio? <br />
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit">Próximo Passo</button>
        </FormProperty>
      </Modal>
    </>
  );
}

export default FormModal;
