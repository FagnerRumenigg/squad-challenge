import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
  Footer,
  BlueFooter,
  BlackFooter,
  BlueBox,
  Risks,
} from "./style";
import {
  LogoHeader,
  MoneyIcon,
  SqIcon,
  OpenQuot,
  CloseQuot,
  SqFooterOne,
  SqFooterTwo,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  GoogleIcon,
  IndeSignIcon,
  WppIcon,
  SqTextBoxOne,
  SqTextBoxTwo,
  CreditCard,
  Background,
  TestOne,
  TestTwo,
} from "../../assets/images";

function Home() {
  return (
    <Container>
      <div id="allStuffs">
        <TopHeader>
          <img src={CreditCard} alt="Credit Cart" id="creditCard" />
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
        <Carousel showThumbs={false}>
          <div>
            <img src={Background} height="712px" alt="Credit Cart" />
          </div>
          <div>
            <img src={TestOne} height="712px" alt="Credit Cart" />
          </div>
          <div>
            <img src={TestTwo} height="712px" alt="Credit Cart" />
          </div>
        </Carousel>
        <Modal />
        <VideoBox />
      </div>
      <BlueBox>
        <div id="textBlueBox">
          <span>
            Squad Capital.
            <br />
            Alta performance em assessoria para seus investimentos.
          </span>
        </div>
      </BlueBox>
      <div id="textAndButtomWithIcon">
        <img src={SqTextBoxOne} alt="Sq Text Box One" id="sqTextBoxOne" />
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
                mais de 400 produtos, de diferentes bancos e renomadas gestoras
                de recursos, sempre alinhando expectativa e perfil dos clientes,
                com o que o mercado financeiro tem de melhor.
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
        <img src={SqTextBoxTwo} alt="Sq Text Box Two" id="sqTextBoxTwo" />
      </div>
      <OurTeam />
      <SecondBlueBox>
        <div id="textWithQuot">
          <img src={OpenQuot} alt="Open Quot" id="openQuotImg" />
          <div id="textDiv">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper turpis sed vehicula tristique. Maecenas vestibulum
              rhoncus enim, et congue arcu scelerisque id.{" "}
            </p>
          </div>
          <img src={CloseQuot} alt="Open Quot" id="closeQuotImg" />
        </div>
        <div id="clientOliveira">
          <p>
            Cliente de Oliveira,
            <br /> sobre um de nossos assessores.
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
      <Footer>
        <BlueFooter>
          <img src={SqFooterOne} alt="Sq Footer One" id="sqFooterOneId" />
          <div id="blueFooterText">
            <div id="blueFooterUpperText">
              <ul>
                <h3>QUE SOMOS</h3>
                <li>Apresentação</li>
                <li>Diferenciais</li>
                <li>Historia</li>
                <li>O time</li>
              </ul>
              <ul>
                <h3>INVESTIMENTOS</h3>
                <li>Renda Fixa</li>
                <li>Renda Variável</li>
                <li>Fundos de Investimentos</li>
                <li>Fundos Imobiliários</li>
                <li>Ações</li>
                <li>Tesouro Direto</li>
                <li>Private</li>
                <li>Para sua empresa</li>
              </ul>
              <ul>
                <h3>ATENDIMENTO DIGITAL</h3>
                <li>Stock guide </li>
                <li>Carteira FIIs</li>
                <li>Carteira Ações</li>
                <li>Carteira BDRs</li>
                <li>Carteira Small caps</li>
                <li>Squad Play</li>
                <li>Resumo Semanal</li>
                <li>Panorama Mensal</li>
                <li>Análise FIIs</li>
                <li>Carteira Dividendos</li>
              </ul>
              <ul>
                <h3>NOTÍCIAS</h3>
              </ul>
              <ul>
                <h3>FAQ</h3>
              </ul>
              <ul>
                <h3>CONTATO</h3>
                <li>Fale conosco</li>
                <li>Seja nosso assessor</li>
              </ul>
              <ul>
                <h3>TERMOS LEGAIS</h3>
                <li>Configuração de Preferências de Privacidade </li>
                <li>Termos de uso e Política de Privacidade</li>
              </ul>
            </div>
            <div id="blueFooterBottomText">
              <img src={LogoHeader} alt="Logo Header" />
              <div id="iconsBox">
                <img src={FacebookIcon} alt="Facebook Icon" id="facebookIcon" />
                <img src={TwitterIcon} alt="Twitter Icon" id="twitterIcon" />
                <img
                  src={InstagramIcon}
                  alt="Instagram Icon"
                  id="instagramIcon"
                />
                <img src={GoogleIcon} alt="Google Icon" id="googleIcon" />
                <img src={IndeSignIcon} alt="IndeSign Icon" id="indeSignIcon" />
              </div>
            </div>
          </div>
          <img src={SqFooterTwo} alt="Sq Footer Two" id="sqFooterTwoId" />
        </BlueFooter>
        <BlackFooter>
          <span>
            <p>{`A Squad Capital Investimentos – Agente Autônomo de Investimentos
            Ltda é uma empresa de agentes autônomos de investimento devidamente
            registrada na Comissão de Valores Mobiliários (CVM), na forma da
            Instrução Normativa nº 497/11.`}</p>
            <p>{`A Squad Capital Investimentos – Agente Autônomo de Investimentos
            Ltda atua no mercado financeiro através da XP Investimentos CCTVM
            S/A, o que pode ser verificado através do site da CVM
            (www.cvm.gov.br > Agentes Autônomos > Relação dos Agentes Autônomos
            contratados por uma Instituição Financeira > Corretoras > XP
            Investimentos) ou através do site da ANCORD para escritórios
            credenciados a partir de outubro de 2012
            (http://www.ancord.org.br/Website_Ancord/index.html > Agentes
            Autônomos > Consultas) ou através do site da própria XP
            Investimentos CCTVM S/A (www.xpi.com.br > Encontre um escritório >
            Selecione abaixo o estado e a cidade que deseja pesquisar > Veja a
            lista dos agentes autônomos).`}</p>
            <p>{`Na forma da legislação da CVM, o agente autônomo de investimento não
            pode administrar ou gerir o patrimônio de investidores. O agente
            autônomo é um intermediário e depende da autorização prévia do
            cliente para realizar operações no mercado financeiro. Esta
            mensagem, incluindo os seus anexos, contém informações confidenciais
            destinadas a indivíduo e propósito específicos, sendo protegida por
            lei. Caso você não seja a pessoa a quem foi dirigida a mensagem,
            deve apagá-la. É terminantemente proibida a utilização, acesso,
            cópia ou divulgação não autorizada das informações presentes nesta
            mensagem. As informações contidas nesta mensagem e em seus anexos
            são de responsabilidade de seu autor, não representando
            necessariamente ideias, opiniões, pensamentos ou qualquer forma de
            posicionamento por parte da Squad Capital Investimentos – Agente
            Autônomo de Investimentos Ltda.`}</p>
            <p>{`O investimento em ações é um investimento de risco e rentabilidade
            passada não é garantia de rentabilidade futura. Na realização de
            operações com derivativos existe a possibilidade de perdas
            superiores aos valores investidos, podendo resultar em
            significativas perdas patrimoniais. Para informações e dúvidas,
            favor contatar seu agente de investimentos. Para reclamações, favor
            contatar a Ouvidoria da XP Investimentos no telefone nº
            0800-722-3710.`}</p>
          </span>
          <div id="bgWppIcon">
            <img src={WppIcon} alt="WhatsApp Icon" id="whasAppIcon" />
          </div>
        </BlackFooter>
      </Footer>
    </Container>
  );
}

export default Home;
