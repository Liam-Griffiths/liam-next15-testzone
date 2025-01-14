import {PostsData} from "@/lib/getBlog";

interface ChildPostsProps {
    postsDataPromise: Promise<PostsData>;
}

export default async function ChildPosts({ postsDataPromise }: ChildPostsProps) {
    // Await the posts data
    const { posts } = await postsDataPromise;

    return (
        <section style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
            <h2>ChildPosts Component</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>ID:</strong> {post.id} | <strong>Title:</strong> {post.title}
                    </li>
                ))}
            </ul>
        </section>
    );
}
