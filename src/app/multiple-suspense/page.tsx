import React, { Suspense } from 'react';
import {getPostsData, getUserData} from "@/lib/getBlog";
import ChildUser from "@/app/multiple-suspense/childUser";
import ChildPosts from "@/app/multiple-suspense/childPosts";

export default function Page() {
    // Start both async calls in parallel
    const userDataPromise = getUserData();
    const postsDataPromise = getPostsData();

    return (
        <main>
            <h1>Multiple Suspense Boundaries Example</h1>

            <Suspense fallback={<p>Loading user data...</p>}>
                <ChildUser userDataPromise={userDataPromise} />
            </Suspense>

            <Suspense fallback={<p>Loading posts...</p>}>
                <ChildPosts postsDataPromise={postsDataPromise} />
            </Suspense>
        </main>
    );
}
