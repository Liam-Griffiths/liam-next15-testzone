'use client';

import React, { useState } from 'react';

interface LikeButtonProps {
    itemId: number;
}

export default function LikeButton({ itemId }: LikeButtonProps) {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked((prev) => !prev);
        // Potentially call an API or mutate data here
    };

    return (
        <button
            onClick={handleClick}
            className={`inline-flex items-center gap-2 text-black rounded-md border my-1 px-3 py-2 transition-colors
        ${liked ? 'bg-red-100 border-red-200' : 'bg-white border-gray-300'} 
        hover:bg-red-50`}
        >
            <span>{liked ? '❤️' : '🤍'}</span>
            <span>{liked ? 'Unlike' : 'Like'} Item #{itemId}</span>
        </button>
    );
}
