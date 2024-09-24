import { useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [count, setCount] = useState(0);
    const [content, setContent] = useState("");

    const getCount = (data: number) => setCount(data);
    const getContent = (data: string) => setContent(data);

    return (
        <div>
            <h2>Parent count: {count}</h2>
            <h2>Parent content: {content}</h2>

            <button onClick={() => setCount(prev => prev + 1)}> +1 </button>
            <Child count={count} username="John Smith" onCount={getCount} onContent={getContent}/>
        </div>
    )
}

