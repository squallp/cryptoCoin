import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import millify from "millify";
import {useGetCryptosQuery} from '../redux/services/cryptoApi';

function Total() {
    const {data, isFetching} = useGetCryptosQuery();

    if (isFetching) {
        return 'Loading total...';
    }
    const stats = data?.data?.stats;

    const setOptions = () => ({precision: 2,   decimalSeparator: ",", space: true});

    return (
        <>
        <Container fluid className="around">
        <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={6}>
        <h1 className="heading">Total</h1>
        <Card >
            <ListGroup variant="flush">
            <ListGroup.Item>Total: {millify(stats.total, setOptions())}</ListGroup.Item>
            <ListGroup.Item>Total 24h volume: {millify(stats.total24hVolume, setOptions())}</ListGroup.Item>
            <ListGroup.Item>Total coins: {millify(stats.totalCoins, setOptions())}</ListGroup.Item>
            <ListGroup.Item>Total exchanges: {millify(stats.totalExchanges, setOptions())}</ListGroup.Item>
            <ListGroup.Item>Total marketCap: {millify(stats.totalMarketCap, setOptions())}</ListGroup.Item>
            <ListGroup.Item>Total markets: {millify(stats.totalMarkets, setOptions())}</ListGroup.Item>
        </ListGroup>
        </Card>
        </Col>
        <Col xs={12} md={3}></Col>
        </Row>
        </Container>
        </>
        );
}

export default Total;
