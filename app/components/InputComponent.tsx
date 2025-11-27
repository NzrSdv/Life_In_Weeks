'use client';
import { useState } from "react";

type Props = {
    onChange: Function;
}

function InputComponent({ onChange }: Props) {
    const [AAA, oninp] = useState(new Date());

    return <div className="w-full flex items-center justify-center">
        <div className="bg-white text-black p-20 rounded-xl flex flex-col items-center justify-center gap-10">
            <h1 className="font-bold text-4xl uppercase">Enter your BIRTHDAY Date</h1>
            <input className="border border-2 px-4 py-2 rounded-md" type="date" value={AAA.toISOString().split('T')[0]} onChange={(e) => {
                oninp(new Date(e.target.value))
            }} />
            <button onClick={() => {
                onChange(AAA)
            }}>Submit</button>
        </div>
    </div>
}

export default InputComponent;