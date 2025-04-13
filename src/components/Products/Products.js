import Table from 'react-bootstrap/Table';
import Product from './Product/Product';
import { Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useStore from '../../store';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Products() {
  
  const {
    products,
    filteredProducts,
    soteredProducts,
    getProduct,
    getFilteredProducts,
    getSorteredProducts,
  } = useStore();

  const [filtersApplied, setFiltersApplied] = useState(false);
  const [sortApplied, setSortApplied] = useState(false);

  const [filters, setFilters] = useState({
    field: "price",
    operator:">",
    value: "",
  });
  
  const [sort, setSort] = useState({
    field: "price",
    direction: "asc",
  });

  useEffect(() => {
    getProduct();
  }, []);

  const applyFilters = async () => {
    await getFilteredProducts({
      field: filters.field,
      operator: filters.operator,
      value: filters.field === "price" ? Number(filters.value) : filters.value,
    });
    setFiltersApplied(true);
    setSortApplied(false);
  };

  const applySorting = async () => {
    await getSorteredProducts({
      field: sort.field,
      direction: sort.direction,
    });
    setSortApplied(true);
  };

  const resetFilters = async () => {
    await getProduct();
    setFiltersApplied(false);
    setSortApplied(false);
  };

  const getDisplayProducts = () => {
    if (sortApplied && soteredProducts.length > 0) {
      return soteredProducts;
    }
    if (filtersApplied) {
      return filteredProducts;
    }
    return products;
  };
  
  const displayProducts = getDisplayProducts();

  return (
    <div>
      <Form className='m-3'>
        <Row>
          <Col md={3}>
          <FormGroup>
          <Form.Label>Поле для фильтрации</Form.Label>
          <Form.Select aria-label="Default select example" className='m-3' style={{ width: '20rem' }}>
            <option>Цена</option>
            <option value="1">По возрастанию</option>
            <option value="2">По убыванию</option>
          </Form.Select>
          </FormGroup>
          </Col>
          <Col md={3}>
          <Form.Label>Оператор</Form.Label>
          <Form.Select aria-label="Default select example" className='m-3' style={{ width: '20rem' }}>
            <option value="1">равно</option>
            <option value="2">больше</option>
            <option value="3">меньше</option>
          </Form.Select>
          </Col>
          <Col md={2}>
          <Form.Label>Значение</Form.Label>
          <Form.Control type="value" className='m-3' placeholder="Введите значение" style={{ width: '20rem' }}/>
          <Button variant='primary' className='m-3'>Применить</Button>
          <Button variant='primary' className='m-3'>Сбросить</Button>
          </Col>
        </Row>
      </Form>
      <Form className='m-3'>
        <Row>
          <Col md={3}>
          <Form.Label>Сортировать по</Form.Label>
          <Form.Select aria-label="Default select example"  style={{ width: '20rem' }}>
            <option>Цена</option>
          </Form.Select>
          </Col>
          <Col md={2}>
          <Form.Label>Направление</Form.Label>
          <Form.Select aria-label="Default select example"  style={{ width: '20rem' }}>
            <option value="1">По возрастанию</option>
            <option value="2">По убыванию</option>
          </Form.Select>
          <Button variant='primary' className='my-3'>Применить сортировку</Button>
          </Col>
        </Row>
      </Form>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Фото</th>
            <th>Цена</th>
            <th>Настройки</th>
          </tr>
        </thead>
        <tbody>
            {products.map((prod) => {return <Product key={prod.id} dish={prod}></Product>})}
        </tbody>
      </Table>
      <Link to={`/dishes_form/`}><Button variant="primary">Создать</Button></Link>
    </div>
  );
}

export default Products;