// Importação dos componentes do Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./Cadastro.module.css";
import Button from "react-bootstrap/Button";

// Importação do hook do React Hook Form para lidar com o formulário
import { useForm } from "react-hook-form";

import { addUsuarios } from "../hooks/useApi";

import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";

const Cadastrar = () => {
  // Hook useForm para gerenciar o estado do formulário
  // register: função para registrar os campos do formulário
  // handleSubmit: função para lidar com o envio do formulário
  // formState: objeto que contém o estado do formulário, incluindo erros
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Função chamada quando o formulário é enviado com sucesso

  const onSubmit = async (data) => {
    console.log("Dados:", data);
    addUsuarios(data)
    window.location.reload();
    alert("Funcionario cadastrado com sucesso")
};


  // Função chamada quando há erros no envio do formulário
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  return (
    <div>
      <Container
        style={{ height: "100vh" }}
        className="justify-content-center align-content-center"
      >
<div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
<Card style={{ width: "30rem" }}>

        <img
          src="https://www.imagemhost.com.br/images/2024/11/22/Logo-novo-SENAI_-sem-slogan_755X325.png"
          style={{
            fontSize: "300px",
            color: "blue",
            margin: "auto",
            width: "50%",
          }}
        />
      <form
        className={styles.formulario}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {/* Caixinha de nome */}
        <FloatingLabel
          controlId="floatingInputNome"
          label="Nome"
          className="mb-4 w-100"
        >
          <Form.Control
            size="sm"
            type="text"
            placeholder=""
            {...register("nome", {
              required: "O nome é obrigatório",
              minLength: {
                value: 2,
                message: "O nome deve ter pelo menos 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O nome deve ter ate 20 caracteres",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/i,
                message: "O nome só pode conter letras",
              },
            })}
          />
          {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        </FloatingLabel>

        {/* Caixinha de email */}
        <FloatingLabel
          controlId="floatingInputEmail"
          label="Email:"
          className="mb-4 w-100"
        >
          <Form.Control
            size="sm"
            type="email"
            placeholder=""
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Email inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </FloatingLabel>

        {/* Caixinha de Senha */}
        <FloatingLabel
          controlId="floatingPassword"
          label="Senha"
          className="mb-4 w-100"
        >
          <Form.Control
            type="password"
            placeholder=""
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "A senha deve ter pelo menos 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "A senha deve ter menos de 20 caracteres",
              },
            })}
          />
          {errors.senha && (
            <p className={styles.error}>{errors.senha.message}</p>
          )}
        </FloatingLabel>

        <Button
          as="input"
          type="submit"
          value="Cadastrar"
          className="mb-4 w-30 mx-auto"
        />
      </form>
      </Card>
    </div>
    </Container>
  </div>
  );
};

export default Cadastrar;
