import React from 'react';
import Image from 'next/image';
import {NewsItem} from "@/lib/getNews";
import LikeButton from "@/app/newsfeed/likeButton";


interface NewsItemProps {
    item: NewsItem;
}

export default function NewsItemComponent({ item }: NewsItemProps) {
    return (
        <article style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{item.title}</h3>
            {/* next/image helps with performance & reduces CLS by reserving space */}
            <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                style={{ maxWidth: '100%', height: 'auto' }}
                // placeholder="blur" // optionally use placeholder="blur" with a local image or blurDataURL
            />
            <p>{item.summary}</p>
            {/* A client component for interactive features */}
            <LikeButton itemId={item.id} />
        </article>
    );
}
