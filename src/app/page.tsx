import { Button } from "@/components/ui/button";
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
    let data;
    let feeds: Feed[];

    try {
        data = await fetch("http://localhost:8000/v1/feeds");
    } catch (error) {
        console.log("failed to fetch feed data: ", error);
    }

    if (data?.ok) {
        feeds = await data.json();
    }

    return (
        <>
            <Button>click me</Button>
            <ul>
                {data?.ok &&
                    feeds.map((feed: Feed) => (
                        <li key={feed.id}>
                            <Link href={feed.url} target="_blank">
                                {feed.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
}
