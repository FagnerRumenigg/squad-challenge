import { Form } from "./style";

function SecondForm() {
  return (
    <>
      <Form>
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
          <input type="telephone" className="form-control" id="telephone" />
          <label htmlFor="telephone">
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
      </Form>
    </>
  );
}

export default SecondForm;
