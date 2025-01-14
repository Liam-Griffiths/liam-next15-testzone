export interface UserData {
    id: number;
    name: string;
}

export interface PostsData {
    posts: { id: number; title: string }[];
}

export function getUserData(): Promise<UserData> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 123, name: 'Alice' });
        }, 2000);
    });
}

export function getPostsData(): Promise<PostsData> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                posts: [
                    { id: 1, title: 'First Post' },
                    { id: 2, title: 'Second Post' },
                    { id: 3, title: 'Other Post' },
                    { id: 4, title: 'Best Post' },
                ],
            });
        }, 1500);
    });
}
