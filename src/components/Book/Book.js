import TelegramForm from '../TelegramForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Book(){
    return (
        <>
         <Row className="justfy-content-md-center m-5">
            <Col>
            <h2>Укажите количество гостей и время визита для бронирования!</h2>
            </Col>
         </Row>
         <TelegramForm></TelegramForm>
        </>
    );
}

export default Book;