'use client';
import React from "react";

type Props = {
    colored: boolean
}

function CellComponent({ colored }: Props) {
    return <div className={`size-5 rounded-sm ${colored ? 'bg-red-500' : 'bg-green-500'}`}>

    </div>

}
export default CellComponent;