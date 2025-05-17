// Importação components do bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

// Importação do icone de mercado do react-icon
import { BsPersonCircle } from "react-icons/bs";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const BarraNavegacao = () => {
  const { usuarioNome, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          {/* Logomarca do site */}
          <Navbar.Brand href="/home">
          <img
            src="https://www.imagemhost.com.br/images/2024/11/22/Logo-novo-SENAI_-sem-slogan_755X325.png"
            width=""
            height="50"
            className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />

          <Navbar.Collapse id="minha-nav">
            <Nav className="me-auto">
              {/* Páginas */}
              <Nav.Link href="/home"> Inicio </Nav.Link>
              <Nav.Link href="/cadastra"> Suporte </Nav.Link>
              <Nav.Link href="/historia"> Sobre Nós </Nav.Link>
            </Nav>

          {/*Barra de Pesquisa*/}
          <form className="d-flex">
            <input className=" form-control me-2" style={{ backgroundColor: '#2a43b2', padding: '8px 20px' }} type="search" placeholder="Pesquisar..."/>
          </form>
          
            <Nav className="justify-content-end">
              {/* Nome do usuário */}
              <Navbar.Text style={{ color: "white", marginRight: "5px" }}>
                Usuário: {usuarioNome} |
              </Navbar.Text>
              {/* Caso o usuario tenha feito login, aparece o botao de sair, se não, o botão de entrar */}
              {usuarioNome === "Visitante" ? (
                <>
                  <Nav.Link variant="primary" href="/login">
                  <BsPersonCircle size="1.5em" className="me-2" color="white" />
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Button variant="danger" href="/login" onClick={logout}>
                    Sair
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;
