import React, { useEffect,useState } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const Newscomponent = (props) => {
    const [articles, setarticles] = useState([])
    // const [loading, setloading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalresults, setTotalResults] = useState(0)
    

    

   const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    // constructor() {
    //     super();
    //     state = {
    //         articles: [],
    //         loading: false,
    //         page: 1
    //     }




    
    const updateNews=async ()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2523fc0f0b94d1b8ba14925c375dc2f&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url)
        let parseData = await data.json()
        // console.log(parseData)
        setarticles(parseData.articles)
        setTotalResults( parseData.totalResults)
        // setloading(false)
        // setState({ articles: parseData.articles, totalResults: parseData.totalResults })
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    },[])
    
    // async componentDidMount() {
    //     updateNews();
    // }
    // handleNext = async () => {

    //     setState({ page: state.page + 1, });
    //     updateNews();
    // }
    // handlePrevious = async () => {
    //     setState({ page: state.page - 1, });
    //     updateNews();
    // }
    const fetchMoreData = async () => {
        // setState({ page: state.page + 1 });
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2523fc0f0b94d1b8ba14925c375dc2f&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url)
        let parseData = await data.json()
        // console.log(parseData)
        setarticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        // setState({ articles: state.articles.concat(parseData.articles), totalResults: parseData.totalResults })
    };

    
        return (
            <>
                <h2 className='text-center ' style={{margin:'80px 0 0 0'}}> Daily News - Top {capitalizeFirstLetter(props.category)}  Headings</h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalresults}
                    loader={<h4>Loading...</h4>}
                >
                    <div className='container'>
                        <div className='row my-5'>
                            {articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <Newsitems title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                                </div>

                            })}

                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
                    <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
                </div> */}

            </>
        )
    

            }

Newscomponent.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

Newscomponent.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default Newscomponent
