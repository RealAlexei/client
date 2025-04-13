import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import SimpleTextToSpeech from '../SimpleTextToSpeach';

function MyCard(props) {
  return (
    <>
        <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={props.img}/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <SimpleTextToSpeech text={props.text}></SimpleTextToSpeech>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;