export const revalidate = 10; // seconds

export default async function Products() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return (
        <ul>
            {data.map((p: any) => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    );
}
