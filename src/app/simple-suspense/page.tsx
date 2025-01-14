import React, { Suspense } from 'react';
import {getData} from "@/lib/getData";
import Child from "@/app/simple-suspense/child";

export default function Page() {
    // Calling our data-fetching function returns a Promise<DataResponse>
    const dataPromise = getData();

    return (
        <main>
            <h1>Using Suspense with a Promise in Next.js (TypeScript)</h1>
            <Suspense fallback={<p>Loading data...</p>}>
                {/*
                  Passing the promise to <Child />. Suspense will keep showing
                  the fallback until dataPromise resolves.
                */}
                <Child dataPromise={dataPromise} />
            </Suspense>
        </main>
    );
}
