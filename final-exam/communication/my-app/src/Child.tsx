import { ChangeEvent, useState } from "react";

type ChildProps = {
    count: number;
    username: string;
    onCount : (data: number) => void;
    onContent: (data: string) => void;
}

export default function Child({count, username, onCount, onContent} : ChildProps) {
    const [content, setContent] = useState('');
    const [plus, setPlus] = useState(0);

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }
    return (
        <>
        <div>
            Child, count: {count}
        </div>
        <h2>Hello {username}</h2>

        <h3>Child to Parent: {count}, {content}</h3>
        <h3>Child to Parent +2: {plus}</h3>

        <input onChange={handleChange} />
        <button onClick={() => {onCount(plus); onContent(content)}}>Send to Parent</button>
        <button onClick={() => setPlus(prev => prev + 2)}>+2</button>

        </>
        
    )
}