
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import MyCard from './MyCard';

function Start() {
   const texts = [
    {
        title:"Блюдо дня",
        img:"./img/soup.jpg",
        text: "Сегодняшнее блюдо дня."
    },
    {
        title:"Десерт дня!",
        img:"./img/tort.jpg",
        text: "Сегодняшней десерт дня."
    },
  ]
  return (
    <>
    <Container>
        <Row>
            <h2>
                Добро пожаловать на <Badge bg="dark">главную страницу!</Badge>
            </h2>
        </Row>
        <Row>
            {texts.map((t) => {return <Col><MyCard title={t.title} img={t.img} text={t.text}/></Col>})}
        </Row>
    </Container>
    </>
  );
}

export default Start;