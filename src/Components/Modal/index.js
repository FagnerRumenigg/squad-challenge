import { useState } from "react";
import Modal from "react-modal";
import { HeaderForm, TitleAccount } from "./style";
import { LogoSquad } from "../../assets/images/index";

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
      <button onClick={openModal}>Open Modal</button>
      <Modal
        style={{ content: { height: "677px", width: "521px", padding: 0 } }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <HeaderForm>
          <img src={LogoSquad} alt="Logo Squad" />
        </HeaderForm>
        <form className="form">
          <div className="form-group">
            <TitleAccount>ABRIR SUA CONTA É SIMPLES</TitleAccount>
            <h2> Preencha os dados abaixo e siga as próximas instruções </h2>
            <label htmlFor="exampleInputEmail1">
              Nome* <br />
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Email* <br />
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Telefone* <br />
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              Qual a sua faixa de patrimônio* <br />
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check" />
        </form>
      </Modal>
    </>
  );
}

export default FormModal;
