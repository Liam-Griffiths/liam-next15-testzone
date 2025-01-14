import React from 'react';

export default function FeedSkeleton() {
    return (
        <div>
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    className="mb-4 border border-gray-200 p-4 animate-pulse"
                >
                    <div className="w-3/4 h-6 bg-gray-200 mb-1" />
                    <div className="w-[600px] h-[400px] bg-gray-300 mb-1" />
                    <div className="w-full h-4 bg-gray-200 mb-1" />
                    <div className="w-3/4 h-4 bg-gray-200" />
                </div>
            ))}
        </div>
    );
}
