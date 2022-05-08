import Modal from "../../Components/Modal";
import { Container, TopHeader, Header } from "./style";
import { LogoHeader } from "../../assets/images";

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
      </div>
      <div id="blueBox" />
    </Container>
  );
}

export default Home;
