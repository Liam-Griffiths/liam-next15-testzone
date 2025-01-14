import React from 'react';
import NewsItemComponent from "@/app/newsfeed/newsItem";
import {getNews, NewsItem} from "@/lib/getNews";

export default async function NewsFeed() {
    const newsItems: NewsItem[] = await getNews();

    return (
        <div>
            <h2>Latest News</h2>
            {newsItems.map((item) => (
                <NewsItemComponent key={item.id} item={item} />
            ))}
        </div>
    );
}
