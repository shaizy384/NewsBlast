import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateData = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
        setLoading(false);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsBlast`;
        updateData();
        /* eslint-disable */
    }, [])

    // const handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
    //     setLoading(true);
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setArticles(parsedData.articles);
    //     setTotalResults(parsedData.totalResults);
    //     setPage(page - 1);
    //     setLoading(false);
    // }
    // const handleNextClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    //     setLoading(true);
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setArticles(parsedData.articles);
    //     setTotalResults(parsedData.totalResults);
    //     setPage(page + 1);
    //     setLoading(false);
    // }

    const fetchMoreData=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    return (
        <div className="container my-3">
            <h2 className='text-center' style={{ margin: '90px 0px 30px 0px' }}>NewsBlast - Top {capitalizeFirstLetter(props.category)} HeadLines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            >
                <div className="container">
                <div className="row">
                    {/* {!loading && articles.map((element) => { */}
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex align-items-center justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePrevClick}>&larr; Previous</button>
                {!loading && <p className='my-auto'>{page} of {Math.ceil(totalResults / `${props.pageSize}`)}</p>}
                <button disabled={page + 1 > Math.ceil(totalResults / `${props.pageSize}`)} type="button" className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
        </div>
    )
}

News.defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 8
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}
export default News;