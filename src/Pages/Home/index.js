import { useEffect } from "react";
import { Carousel } from "react-carousel-minimal";
import Modal from "../../Components/Modal";
import Buttom from "../../Components/Button";
import SecondForm from "../../Components/Form";
import * as Styles from "./style";
import * as Images from "../../assets/images";

function Home() {
  // const [openModal, setOpenModal] = useState(false);
  useEffect(() => {});

  const data = [
    {
      image: "/images/background.png",
    },
    {
      image: "/images/background.png",
    },
    {
      image: "/images/background.png",
    },
    {
      image: "/images/background.png",
    },
  ];

  const employeeData = [
    {
      image: "/images/carouselImages/pictureOne.png",
      title: "Alessandra Moreira",
      subTitle: "AAI | CFPº | CFA LVL III Candidate",
    },
    {
      image: "/images/carouselImages/pictureTwo.png",
      title: "André Simões",
      subTitle: "AAI | CFPº | CFA LVL II Candidate",
    },
    {
      image: "/images/carouselImages/pictureThree.png",
      title: "Kelly Nascimento",
      subTitle: "AAI | CFPº | CFA LVL II Candidate",
    },
    {
      image: "/images/carouselImages/pictureFour.png",
      title: "Adriane Castelo Branco",
      subTitle: "CEAº | CFPº | CFA LVL II Candidate",
    },
    {
      image: "/images/carouselImages/pictureFive.png",
      title: "Elisângela Varela",
      subTitle: "AAI | CEAº | CFPº | LVL II Candidate",
    },
    {
      image: "/images/carouselImages/pictureSix.png",
      title: "Jonathan Cantuária Lopes",
      subTitle: "AAI | CEAº | CFPº | CFA LVL II Candidate",
    },
    {
      image: "/images/carouselImages/pictureSeven.png",
      title: "Felipe Bertalo",
      subTitle: "AAI | CPA-20",
    },
    {
      image: "/images/carouselImages/pictureEigth.png",
      title: "Aniella Dias",
      subTitle: "AAI | CEAº | CFPº | CFA LVL II Candidate",
    },
    {
      image: "/images/carouselImages/pictureNine.png",
      title: "Douglas Fasolai",
      subTitle: "AAI | CFA LVL II Candidate",
    },
    {
      image: "/images/carouselImages/pictureTen.png",
      title: "Cíntia Falcão",
      subTitle: "AAI | CEAº | CFPº | CFA LVL I Candidate",
    },
    {
      image: "/images/carouselImages/pictureEleven.png",
      title: "Ellen Ramos",
      subTitle: "CEAº | CFPº | CFA LVL I Candidate",
    },
    {
      image: "/images/carouselImages/pictureTwelve.png",
      title: "Janaína Cavninato",
      subTitle: "AAI | CFPº | CFA LVL I Candidate",
    },
    {
      image: "/images/carouselImages/pictureThirteen.png",
      title: "Isaque Gomes",
      subTitle: "CEAº | CFPº | CFA LVL I Candidate",
    },
    {
      image: "/images/carouselImages/pictureFourteen.png",
      title: "José Alfredo Teixeira",
      subTitle: "AAI | CFPº | CFA LVL I Candidate",
    },
  ];

  const whiteBoxInfo = [
    {
      title: "Mais de",
      number: "R$2,5 BI",
      text: "de patrimônio sob custôdia",
      positionWidth: "112px",
    },
    {
      title: "Mais de",
      number: "60",
      text: "profissionais certificados",
      positionWidth: "112px",
    },
    {
      title: "São mais de",
      number: "6.000",
      text: "clientes ativos",
      positionWidth: "",
    },
    {
      title: "Satisfação dos Clientes",
      number: "82.5 NPS",
      text: "(Net Promoter Score)",
      positionWidth: "",
    },
  ];

  return (
    <Styles.Container>
      <div id="allStuffs">
        <Styles.TopHeader>
          <img src={Images.CreditCard} alt="Credit Cart" id="creditCard" />
          <span>Abra sua conta</span>
        </Styles.TopHeader>
        <Styles.Header>
          <img src={Images.LogoHeader} alt="Logo Header" />
          <a href="#somos">QUEM SOMOS</a> <span> | </span>
          <a href="#investimentos">INVESTIMENTOS</a> <span> | </span>
          <a href="#atendimento">ATENDIMENTO DIGITAL</a> <span> | </span>
          <a href="#noticias">NOTÍCIAS</a> <span> | </span>
          <a href="#faq">FAQ</a> <span> | </span>
          <a href="#contato">CONTATO</a>
        </Styles.Header>
        <Carousel
          data={data}
          time={20000}
          width="1440px"
          height="712px"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            position: "absolute",
            width: "1440px",
            height: "712px",
            left: "0px",
          }}
        />
        <div id="insideModalDiv">
          <Styles.Risks height="52px" colorBorder="#fff">
            <p />
          </Styles.Risks>
          <span>#OTIMECERTO MUDAOJOGO</span>
          <p>
            Esqueça tudo que você já ouviu sobre assessorias financeiras. Chegou
            a Squad Capital!
          </p>
          <Modal />
          <Styles.Risks height="150px" marginTop="30px" colorBorder="#fff">
            <p />
          </Styles.Risks>
        </div>
        <Styles.ModalDiv />
        <Styles.VideoBox />
      </div>
      <Styles.BlueBox>
        <div id="textBlueBox">
          <span>
            Squad Capital.
            <br />
            Alta performance em assessoria para seus investimentos.
          </span>
        </div>
      </Styles.BlueBox>
      <div id="textAndButtomWithIcon">
        <img
          src={Images.SqTextBoxOne}
          alt="Sq Text Box One"
          id="sqTextBoxOne"
        />
        <div id="textAndButtom">
          <Styles.TextBox>
            <div id="textOne">
              <Styles.Risks height="129px">
                <p />
              </Styles.Risks>
              <img src={Images.SqIcon} alt="Sq Icon" />
              <h2>SOBRE NÓS</h2>
              <p>
                Somos um Agente Autônomo de Investimentos credenciado à XP, a
                melhor e maior plataforma de investimentos do Brasil. Oferecemos
                mais de 400 produtos, de diferentes bancos e renomadas gestoras
                de recursos, sempre alinhando expectativa e perfil dos clientes,
                com o que o mercado financeiro tem de melhor.
              </p>
              <Styles.Risks height="46px">
                <p />
              </Styles.Risks>
            </div>
            <div id="textTwo">
              <Styles.Risks height="129px">
                <p />
              </Styles.Risks>
              <img src={Images.MoneyIcon} alt="Money Icon" />
              <h2>FORMAS DE ATUAÇÂO</h2>
              <p>
                Criamos uma política de relacionamento, onde seu Assessor de
                Investimentos estará sempre próximo, apresentando o resultado de
                sua carteira e sugestões de melhorias e oportunidades, que
                surgirem ao longo do tempo.
              </p>
              <Styles.Risks height="92px">
                <p />
              </Styles.Risks>
            </div>
          </Styles.TextBox>
          <Styles.EndTextBox>
            <p>Quer conhecer melhor a Squad Capital?</p>
            <Buttom name="QUEM SOMOS" />
            <span>Nossos Números</span>
          </Styles.EndTextBox>
        </div>
        <img
          src={Images.SqTextBoxTwo}
          alt="Sq Text Box Two"
          id="sqTextBoxTwo"
        />
      </div>
      <Styles.WhiteBox>
        {whiteBoxInfo.map((element, index) => {
          return (
            <div key={`key-${index}`} className="whiteBox">
              <span>{element.title}</span>
              <text>{element.number}</text>
              <span style={{ width: element.positionWidth }}>
                {element.text}
              </span>
            </div>
          );
        })}
      </Styles.WhiteBox>
      <Styles.OurTeam>
        <span>Conheça nosso time de assessores</span>
        <p>
          Somos mais de 60 profissionais, com diferentes especializações, e
          continuamos a crescer. O que não muda é o desejo de todos de oferecer
          a melhor experiência aos nossos clientes.
        </p>
        <div id="carouselEmployee">
          {employeeData.map((element, index) => {
            return (
              <>
                <div id="imageInfo">
                  <div id="riskAndImage">
                    <Styles.Risks
                      height="280px"
                      style={{ marginTop: "50px" }}
                    />
                    <img
                      src={element.image}
                      key={index}
                      alt={`imageEmployee${index}`}
                      id={`image-${index}`}
                      style={{
                        width: "160px",
                        height: "250px",
                        marginRight: "19px",
                      }}
                    />
                  </div>
                  <div style={{ height: "100px", width: "160px" }}>
                    <b>{element.title}</b>
                    <div style={{ width: "160px" }}>
                      <text>{element.subTitle}</text>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Buttom
          name="CONHEÇA TODO O TIME"
          style={{ width: "233px" }}
          id="buttomOurTeam"
        />
      </Styles.OurTeam>
      <Styles.SecondBlueBox>
        <div id="textWithQuot">
          <img src={Images.OpenQuot} alt="Open Quot" id="openQuotImg" />
          <div id="textDiv">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper turpis sed vehicula tristique. Maecenas vestibulum
              rhoncus enim, et congue arcu scelerisque id.{" "}
            </p>
          </div>
          <img src={Images.CloseQuot} alt="Open Quot" id="closeQuotImg" />
        </div>
        <div id="clientOliveira">
          <p>
            Cliente de Oliveira,
            <br /> sobre um de nossos assessores.
          </p>
        </div>
      </Styles.SecondBlueBox>
      <Styles.HalfForm>
        <div id="halfLeft">
          <div id="halfLeftText">
            <Styles.Risks height="37px">
              <p />
            </Styles.Risks>
            <p id="upperText">Receba um contato de um dos nossos assessores</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper turpis sed vehicula tristique. Maecenas vestibulum
              rhoncus enim, et congue arcu scelerisque id.
            </p>
            <Styles.Risks height="329px">
              <p />
            </Styles.Risks>
          </div>
        </div>
        <SecondForm />
      </Styles.HalfForm>
      <Styles.Footer>
        <Styles.BlueFooter>
          <img
            src={Images.SqFooterOne}
            alt="Sq Footer One"
            id="sqFooterOneId"
          />
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
              <img src={Images.LogoHeader} alt="Logo Header" />
              <div id="iconsBox">
                <img
                  src={Images.FacebookIcon}
                  alt="Facebook Icon"
                  id="facebookIcon"
                />
                <img
                  src={Images.TwitterIcon}
                  alt="Twitter Icon"
                  id="twitterIcon"
                />
                <img
                  src={Images.InstagramIcon}
                  alt="Instagram Icon"
                  id="instagramIcon"
                />
                <img
                  src={Images.GoogleIcon}
                  alt="Google Icon"
                  id="googleIcon"
                />
                <img
                  src={Images.IndeSignIcon}
                  alt="IndeSign Icon"
                  id="indeSignIcon"
                />
              </div>
            </div>
          </div>
          <img
            src={Images.SqFooterTwo}
            alt="Sq Footer Two"
            id="sqFooterTwoId"
          />
        </Styles.BlueFooter>
        <Styles.BlackFooter>
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
            <img src={Images.WppIcon} alt="WhatsApp Icon" id="whasAppIcon" />
          </div>
        </Styles.BlackFooter>
      </Styles.Footer>
    </Styles.Container>
  );
}

export default Home;
