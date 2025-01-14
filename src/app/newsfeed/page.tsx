import React, { Suspense } from 'react';
import NewsFeed from "@/app/newsfeed/newsFeed";
import FeedSkeleton from "@/app/newsfeed/feedSkeleton";

export default function HomePage() {
    return (
        <main style={{ padding: '1rem' }}>
            <h1>Dummy Newsfeed</h1>
            <p>
                Welcome to the dummy newsfeed.
            </p>

            {/* Suspense boundary with a skeleton fallback */}
            <Suspense fallback={<FeedSkeleton />}>
                <NewsFeed />
            </Suspense>
        </main>
    );
}
