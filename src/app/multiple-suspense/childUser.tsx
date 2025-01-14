import {UserData} from "@/lib/getBlog";

interface ChildUserProps {
    userDataPromise: Promise<UserData>;
}

export default async function ChildUser({ userDataPromise }: ChildUserProps) {
    // Await the user data
    const userData = await userDataPromise;

    return (
        <section style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
            <h2>ChildUser Component</h2>
            <p>User ID: {userData.id}</p>
            <p>User Name: {userData.name}</p>
        </section>
    );
}
