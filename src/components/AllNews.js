import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import {useGetNewsQuery} from '../redux/services/newsApi';
import React, {useEffect, useState} from 'react';

function AllNews() {
    const {data, isFetching} = useGetNewsQuery();
    const [dataNews, setDataNews] = useState();
    const [filterTermForNews, setFilterTermForNews] = useState('');


    // useEffect(() => {
    //     setDataNews(data);
    //     const filtereDataNews = data.filter((news) => news.title.toLowerCase().includes(filterTermForNews.toLowerCase()));
    //     setDataNews(filtereDataNews);
    //     }, [data,filterTermForNews]);

        useEffect(() => {
            filterNews(data,filterTermForNews);
        }, [data,filterTermForNews]);

    function filterNews(data,filterN) {
        if (data && filterN) {
            const filtereDataNews = data.filter((news) => news.title.toLowerCase().includes(filterN.toLowerCase()));
            setDataNews(filtereDataNews);
        }
        setDataNews(data);
        }

    if (!data) {
        return 'Number of connection to APi exceeded...';
    }

    if (isFetching) {
        return 'Loading all news...';
    }

    

    return (
        <>
        <Container fluid className="around2 endView">
        <h1 className="heading">Crypto news</h1>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Filter by title</InputGroup.Text>
        <FormControl onChange={(e) => setFilterTermForNews(e.target.value)} value={filterTermForNews} aria-label="Filter" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row xs={1} sm={2} md={3}>
        {dataNews ? dataNews.map((news, index) => {
            return (
                <Col>
                <Card>
                <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>Date:{news.date}</Card.Text>
                <Card.Text>Source: {news.source}</Card.Text>
               <Button href={news.url} target="_blank" variant="primary">Go to news</Button>
                </Card.Body>
                </Card>
                </Col>
                );
        }) : <p className="nocoin"> There are no news </p> }
        </Row>
        </Container>
        </>
        );
}

export default AllNews;
