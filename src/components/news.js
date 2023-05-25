import React from 'react';
import { useState, useEffect } from 'react'
import './news.css';
const newsUrl = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=a537dd51e446a785c8bac9c2114162d7491804dc51c6b45f60a582b80adf3524';




export const News = () => {

    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        getNewsApiFetched()
    }, [])

    const getNewsApiFetched = async () => {
        const response = await fetch(`${newsUrl}`);
        const newsFeed = await response.json();
        let noticias = Object.values(newsFeed);
        console.log(noticias[3][5])

        // console.log(newsFeed)
        setNewsFeed(noticias[3])
    }


    return (
        <>
            <div className="header-news">
                <img src="https://img.icons8.com/nolan/256/us-news.png" alt="icon-news" className="icon-news" /><h1>Latest News Articles</h1>
                <img src="https://content.invisioncic.com/p289038/monthly_2020_05/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif" alt="" className="icon-news" />
            </div>
            <div></div>
            {newsFeed.map((item) => {

                return (
                    <div className="newsFeed">
                        <img src={item.imageurl} alt="" />
                        <div>
                            <h3 className="source-news">{(item.source).toUpperCase()}</h3>
                            <h3 className="source-title">{item.body}</h3>
                            <p></p>
                        </div>
                    </div>
                )
            })}





            {/* <div className="newsFeed">
            <img src={newsFeed.imageurl} alt="" />
            <div>
            <h3 className="source-news">{(newsFeed.source).toUpperCase()}</h3>
            <h3>{newsFeed.body}</h3>
            <p></p>
            </div>
        </div> */}
        </>
    )
}