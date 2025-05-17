import React from "react";
import CardProduto from "../components/CardProduto";
import { useListaProdutos } from "../hooks/useApi";
import BannerCarousel from '../components/BannerCarousel';


const Home = () => {
  
  const produtos = useListaProdutos();

  return (
    <div >
    <BannerCarousel />
    <hr />
      <h1>Lista de Cursos:</h1>
      <div className="d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap">
        {produtos.map((prod) => (
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
