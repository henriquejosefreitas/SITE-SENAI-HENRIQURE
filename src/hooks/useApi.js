// Importa a url da api vindo do .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../contexts/UserContext";

export function useVerificaLogin() {
  const [usuarios, setUsuarios] = useState([]);

  const { login } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuarios`);
        const users = await req.json();
        setUsuarios(users);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  const verificaLogin = (data) => {
    const userToFind = usuarios.find((user) => {
      return user.email === data.email;
    });

    if (userToFind != undefined && userToFind.senha == data.senha) {
      login(userToFind);
      console.log("Usuário logado", userToFind.nome);
      return "Login efetuado com sucesso";
    } else {
      return "Usuário ou senha inválidos";
    }
  };
  return { verificaLogin };
}

export function useListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/produtos`);
        const produtos = await req.json();
        setProdutos(produtos);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  return produtos;
}

export function useListaCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/categorias`);
        const cate = await req.json();
        console.log(cate);
        setCategorias(cate);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);
  return categorias;
}



export function getUsuarios(){
    
    const [usuarios, setUsuarios] = useState([]);

    useEffect( () => {
        async function fetchData(){
            try{
                const response = await fetch(url)
                const data = await response.json()
                setUsuarios(data)
                console.log("Dados recebidos: ", data)
            }
            catch(error){
                console.log("Erro ao buscar os dados:", error)
            }
        }
        fetchData()
    },[])

    return usuarios;
}


export function addUsuarios(usuario){
    async function fetchBase(){
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(usuario)
            })
            const data = await response.json()
            console.log("Usuário adicionado: ", data)
        }
        catch(error){
            console.log("Erro ao cadastrar usuario:", error)
        }
    }
    fetchBase()
}