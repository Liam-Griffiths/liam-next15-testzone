export interface DataResponse {
    message: string;
}

export function getData(): Promise<DataResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'Hello from getData()!' });
        }, 2000);
    });
}
