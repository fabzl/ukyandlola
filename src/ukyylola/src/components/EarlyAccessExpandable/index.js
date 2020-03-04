import React from "react"
import {
  ExpandedHolder,
  ExpandedTextHolder,
  Container,
  Container2,
  Content,
  TextHolder,
  Button,
  CollapseIcon,
  StoreHolder,
  Mobile,
} from "./EarlyAccessExpandable.css"

import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"
import Apstore from "../../images/apstore.svg"
import Gplay from "../../images/gplay.svg"
import MobileHandImage from "../../images/movil.png"
import CollapseIconURL from "../../images/collapse.svg"

class EarlyAccessExpandable extends React.Component {
  constructor(props) {
    super(props)
    this.clickScroll = this.clickScroll.bind(this)
  }
  state = {
    expanded: false,
  }

  collapseContent() {
    this.setState({ expanded: false })
  }

  expandContent() {
    this.setState({ expanded: !this.state.expanded })
  }
  clickScroll() {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      })
    }
  }
  render() {
    return (
      <Container2>
        <Container>
          <Content>
            <Mobile src={MobileHandImage} alt="compromiso" />
            <Fade bottom>
              <TextHolder>
                <h2>Las noticias del mañana, hoy.</h2>
                <p>
                  Porque las noticias no esperan, La Tercera se anticipa. Obtén
                  acceso prioritario a la edición impresa del diario de mañana
                  en la palma de tu mano a través de un correo electrónico.
                  Exclusivo para suscriptores digitales.
                </p>
                <Flip bottom>
                  <Button onClick={() => this.expandContent()}>Leer más</Button>
                </Flip>
                <StoreHolder>
                  <img src={Gplay} alt="google-play" />
                  <img src={Apstore} alt="app-store" />
                </StoreHolder>
              </TextHolder>
            </Fade>
          </Content>
          <ExpandedHolder className={this.state.expanded ? "active" : ""}>
            <CollapseIcon
              src={CollapseIconURL}
              onClick={() => this.collapseContent()}
            />

            <ExpandedTextHolder>
              <p>
                Con Early Access los suscriptores de nuestro diario recibirán en
                su correo electrónico el acceso a la edición del día siguiente
                para poder leer los contenidos primero que nadie en sus
                teléfonos móviles, tablets o computadores. Este acceso
                anticipado es un beneficio exclusivo que va en la línea de la
                constante búsqueda de La Tercera por llegar con más y mejores
                contenidos para los lectores. Al entregar la edición impresa al
                momento en que se genera, la apuesta es llevar antes y de mejor
                manera la información y análisis de calidad que hace de La
                Tercera el diario líder en preferencia e innovación, y el
                periódico más valorado por los chilenos.
              </p>
              <h4>Sebastián Rivas V.</h4>
              <h5>Editor General de Audiencias</h5>
            </ExpandedTextHolder>
          </ExpandedHolder>
        </Container>
      </Container2>
    )
  }
}

export default EarlyAccessExpandable
