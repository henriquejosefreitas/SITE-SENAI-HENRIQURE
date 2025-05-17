import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (props) => {
  
  return (
    <div>
      <Card style={{ width: "20rem", height: "28rem" }}>
        <Card.Img
          variant="top"
          src={
            props.imagemUrl != "null"
              ? props.imagemUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdssSl3-znyXhffS9Qy09SBO0B-kIfYFlJQ&s"
          }
          height="200px"
        />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
          <Card.Text>
            <b>Descrição:</b> <br></br>
            {props.descricao}
          </Card.Text>
          <Card.Text>
            <b>Modalidade:</b>
            <br></br>
            {props.categoria}
          </Card.Text>
          <Card.Link href={`/cursos`}>
            <Button className="w-100" variant="warning">Ver mais</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
