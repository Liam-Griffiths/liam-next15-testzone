export interface NewsItem {
    id: number;
    title: string;
    imageUrl: string;
    summary: string;
}

export async function getNews(): Promise<NewsItem[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: 'Breaking News: Next.js 15 Released!',
                    imageUrl: '/imgs/600x400.jpg',
                    summary:
                        'In a surprise move, Next.js 15 offers built-in AI features. Read on to find out more...',
                },
                {
                    id: 2,
                    title: 'React 19: What We Know So Far',
                    imageUrl: '/imgs/600x400.jpg',
                    summary: 'React 19 might introduce partial hydration with suspense-only rendering...',
                },
                {
                    id: 3,
                    title: 'TypeScript Tips & Tricks',
                    imageUrl: '/imgs/600x400.jpg',
                    summary:
                        'Mastering TypeScript can greatly reduce bugs and increase code readability...',
                },
            ]);
        }, 1500);
    });
}
