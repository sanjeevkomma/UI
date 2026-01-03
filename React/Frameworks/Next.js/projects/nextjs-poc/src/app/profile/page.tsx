"use client";

import { useEffect, useState } from "react";

export default function Profile() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(setData);
    }, []);

    return (
        <ul>
            {data.slice(0, 5).map(d => (
                <li key={d.id}>{d.email}</li>
            ))}
        </ul>
    );
}
