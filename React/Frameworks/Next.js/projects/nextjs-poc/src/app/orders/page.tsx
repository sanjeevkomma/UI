export default async function OrdersPage() {
    const res = await fetch("http://localhost:3000/api/orders", {
        cache: "no-store",
    });
    const orders = await res.json();

    return (
        <ul>
            {orders.map((o: any) => (
                <li key={o.id}>{o.title}</li>
            ))}
        </ul>
    );
}
