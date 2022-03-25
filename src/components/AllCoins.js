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
        <Row xs={1} sm={2} md={3} lg={4}>
        {dataCoins ? dataCoins.map((coin, index) => {
            return (
                <Col>
                <Card >
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
                <Card.Footer className="text-muted" style={bgStyle(coin.color)}></Card.Footer>
                </Card>
                </Col>
                );
            }) : <p className="nocoin"> There are no coins </p> }

{/* <Movie key={index} id={movie.id} title={movie.original_title} backdrop_path={movie.backdrop_path} release_date={movie.release_date} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average}/>
24hVolume: "23310897554"
listedAt: 1330214400
lowVolume: false
marketCap: "799411105091"
sparkline: (27) ['42567.4457420748672005640000', '42503.0814984113360776530000', '42434.1050389926034392290000', '42692.9836408194864951650000', '42633.7694261928007783270000', '42435.3654301922313370590000', '42384.2803248171362708330000', '42212.6183315447987849520000', '42338.9101724823112377620000', '42298.7201899395560275910000', '42107.8364860644416813600000', '41895.1410982718378815320000', '41986.4048870745764464820000', '42070.4093632164036778000000', '42087.4299089542514166230000', '42223.9544975119964827210000', '42113.4049086378798316170000', '42151.7026800971276850250000', '41989.7700283675404603830000', '42146.1662870350734045980000', '42104.3406931541347055010000', '42242.9261006770496666460000', '42495.5226243280139742410000', '42564.2028590123981742640000', '42304.0722974383769373910000', '42118.8743435684063089480000', '42092.3395949959941712820000']
tier: 1
uuid: "Qwsogvtv82FCd"*/}
</Row>
</Container>
</>
);
}

export default AllCoins;
