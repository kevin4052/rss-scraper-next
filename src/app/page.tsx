import Link from "next/link";

type Feed = {
    id: string;
    name: string;
    url: string;
    user_id: string;
    created_at: string;
    updated_at: string;
};

export default async function Home() {
    const data = await fetch("http://localhost:8000/v1/feeds");
    const feeds: Feed[] = await data.json();

    return (
        <ul>
            {feeds.map((feed: Feed) => (
                <li key={feed.id}>
                    <Link href={feed.url} target="_blank">
                        {feed.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
