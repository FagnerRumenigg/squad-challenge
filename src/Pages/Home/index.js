import Modal from "../../Components/Modal";
import Buttom from "../../Components/Button";
import SecondForm from "../../Components/Form";
import {
  Container,
  TopHeader,
  Header,
  VideoBox,
  TextBox,
  EndTextBox,
  OurTeam,
  SecondBlueBox,
  HalfForm,
  Risks,
} from "./style";
import {
  LogoHeader,
  MoneyIcon,
  SqIcon,
  // OpenQuot,
  // CloseQuot,
} from "../../assets/images";

function Home() {
  return (
    <Container>
      <div id="allStuffs">
        <TopHeader>
          <span>Abra sua conta</span>
        </TopHeader>
        <Header>
          <img src={LogoHeader} alt="Logo Header" />
          <a href="#somos">QUEM SOMOS</a> <span> | </span>
          <a href="#investimentos">INVESTIMENTOS</a> <span> | </span>
          <a href="#atendimento">ATENDIMENTO DIGITAL</a> <span> | </span>
          <a href="#noticias">NOTÍCIAS</a> <span> | </span>
          <a href="#faq">FAQ</a> <span> | </span>
          <a href="#contato">CONTATO</a>
        </Header>
        <Modal />
        <VideoBox />
      </div>
      <div id="blueBox" />
      <div id="textAndButtom">
        <TextBox>
          <div id="textOne">
            <Risks height="129px">
              <p />
            </Risks>
            <img src={SqIcon} alt="Sq Icon" />
            <h2>SOBRE NÓS</h2>
            <p>
              Somos um Agente Autônomo de Investimentos credenciado à XP, a
              melhor e maior plataforma de investimentos do Brasil. Oferecemos
              mais de 400 produtos, de diferentes bancos e renomadas gestoras de
              recursos, sempre alinhando expectativa e perfil dos clientes, com
              o que o mercado financeiro tem de melhor.
            </p>
            <Risks height="46px">
              <p />
            </Risks>
          </div>
          <div id="textTwo">
            <Risks height="129px">
              <p />
            </Risks>
            <img src={MoneyIcon} alt="Money Icon" />
            <h2>FORMAS DE ATUAÇÂO</h2>
            <p>
              Criamos uma política de relacionamento, onde seu Assessor de
              Investimentos estará sempre próximo, apresentando o resultado de
              sua carteira e sugestões de melhorias e oportunidades, que
              surgirem ao longo do tempo.
            </p>
            <Risks height="92px">
              <p />
            </Risks>
          </div>
        </TextBox>
        <EndTextBox>
          <p>Quer conhecer melhor a Squad Capital?</p>
          <Buttom name="QUEM SOMOS" />
        </EndTextBox>
      </div>
      <OurTeam />
      <SecondBlueBox>
        {/* <img src={OpenQuot} alt="Open Quot" id="openQuotImg" /> */}
        <div id="textDiv">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper turpis sed vehicula tristique. Maecenas vestibulum
            rhoncus enim, et congue arcu scelerisque id.{" "}
          </p>
        </div>
        {/* <img src={CloseQuot} alt="Open Quot" id="closeQuotImg" /> */}
        <div id="clientOliveira">
          <p>
            <h3>Cliente de Oliveira</h3>
            sobre um de nossos assessores.
          </p>
        </div>
      </SecondBlueBox>
      <HalfForm>
        <div id="halfLeft">
          <div id="halfLeftText">
            <Risks height="37px">
              <p />
            </Risks>
            <p id="upperText">Receba um contato de um dos nossos assessores</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper turpis sed vehicula tristique. Maecenas vestibulum
              rhoncus enim, et congue arcu scelerisque id.
            </p>
            <Risks height="329px">
              <p />
            </Risks>
          </div>
        </div>
        <SecondForm />
      </HalfForm>
    </Container>
  );
}

export default Home;
