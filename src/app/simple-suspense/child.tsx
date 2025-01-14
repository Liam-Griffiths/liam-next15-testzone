import {DataResponse} from "@/lib/getData";

interface ChildProps {
    dataPromise: Promise<DataResponse>;
}

export default async function Child({ dataPromise }: ChildProps) {
    // Await the data
    const data = await dataPromise;

    return (
        <section
            style={{
                border: '1px solid #ccc',
                padding: '1rem',
                marginTop: '1rem',
            }}
        >
            <h2>Child Component</h2>
            <p>Data: {data.message}</p>
        </section>
    );
}
