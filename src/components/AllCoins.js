import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import millify from "millify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {useGetCryptosQuery} from '../redux/services/cryptoApi';
import React, {useEffect, useState} from 'react';
import Chart from './Chart';

function AllCoins() {
    const {data, isFetching} = useGetCryptosQuery();
    const [dataCoins, setDataCoins] = useState();
    const [filterTermForCoin, setFilterTermForCoin] = useState('');

    useEffect(() => {
        setDataCoins(data?.data?.coins);
        const filtereddataCoins = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(filterTermForCoin.toLowerCase()))
        setDataCoins(filtereddataCoins);
    }, [filterTermForCoin,data]);
    
    const bgStyle = (color) => ({backgroundColor: color});

    const setOptions = () => ({precision: 2,   decimalSeparator: ",", space: true});

    function downOrUpArrow(change) {
        if (change > 0) return <FontAwesomeIcon  icon={faArrowUp} className="green" />
            if (change < 0) return <FontAwesomeIcon icon={faArrowDown} className="red" />
        };
    
    if (isFetching) {
        return 'Loading all coins...';
    }

    return (
        <>
        <Container fluid className="around2 endView">
        <h1 className="heading">All coins</h1>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Filter by name</InputGroup.Text>
        <FormControl onChange={(e) => setFilterTermForCoin(e.target.value)} aria-label="Filter" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row xs={1} sm={2} md={2} lg={3}>

        {dataCoins ? dataCoins.map((coin, index) => {
            let parsirano =[];

            coin.sparkline.forEach(function(element) {
               parsirano.push({price: element})
           });

            let color="#1a47a2";
            if (coin.color != '#000000' && coin.color != null ) {
                color = coin.color;
            }

            return (
                <Col>
                <Card key={index} >
                <Row className="hdRow" xs={1} sm={2}>
                <Col>
                    <Card.Img variant="top" className="image" src={coin.iconUrl} />
                </Col>
                <Col>
                    <Card.Title>{coin.name}</Card.Title>
                    <Card.Link href={coin.coinrankingUrl}  target="_blank">{coin.symbol}</Card.Link>
                    <Card.Text>Rank: {coin.rank}</Card.Text>
                </Col>
                </Row>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price: ${millify(coin.price, setOptions())}</ListGroup.Item>
                    <ListGroup.Item>Change: {downOrUpArrow(coin.change)} ${coin.change}</ListGroup.Item>
                    <ListGroup.Item>MarketCap: ${millify(coin.marketCap, setOptions())}</ListGroup.Item>
                </ListGroup>
                <h4>Price chart:</h4>

                <Chart width={250} height={100} data={parsirano} color={color} />

                <Card.Footer className="text-muted" style={bgStyle(coin.color)}></Card.Footer>
                </Card>
                </Col>
                );
        }) : <p className="nocoin"> There are no coins </p> }

        </Row>
        </Container>
        </>
        );
}

export default AllCoins;
