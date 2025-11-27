import React from 'react'
import { differenceInCalendarWeeks, getDay } from 'date-fns'
import CellComponent from './CellComponent'
type Props = { DateOFBirth: Date | undefined }

export default function TableComponent({ DateOFBirth }: Props) {
    const TwoDimensionalArray = []

    if (DateOFBirth != undefined) {
        const weekstart = getDay(DateOFBirth) as 0 | 1 | 2 | 3 | 4 | 5 | 6;
        console.log(weekstart);
        const livedWeeks = differenceInCalendarWeeks(new Date(), DateOFBirth, { weekStartsOn: weekstart })
        console.log(livedWeeks)
        for (let i = 0; i < Math.ceil(livedWeeks / 52); i++) {
            const realArr = []
            for (let j = 0; j < 52; j++) {
                if (i * 52 + j < livedWeeks) {
                    realArr.push(1)
                }
                else {
                    realArr.push(0)
                }
            }
            TwoDimensionalArray.push(realArr);
            // console.log(realArr);
        }
        for (let i = 0; i < 90 - Math.ceil(livedWeeks / 52); i++) {
            TwoDimensionalArray.push(new Array(52).fill(0))
        }

    }
    const yearInWeeks = new Array(52).fill(1);
    // console.log(TwoDimensionalArray);
    return (
        <div className="bg-black flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl text-white font-bold">90 years of life in weeks</h1>
            <div className="flex flex-row items-start justify-center gap-1">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className='size-5 border border-white flex items-center justify-center text-xs'>y\w</div>
                    {TwoDimensionalArray.map((year, y_index) => <div key={y_index} className="size-5 border border-white flex items-center justify-center">{y_index}</div>)}
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="grid grid-cols-52 grid-rows-1 gap-1">
                        {yearInWeeks.map((week, w_index) => <div className="size-5 flex items-center justify-center text-white border border-white" key={w_index}> {w_index + 1}</div>)}
                    </div>
                    <div className="grid grid-cols-52 grid-rows-90 gap-1">
                        {TwoDimensionalArray.map((year, y_index) => {
                            return year.map((week: number, x_index: number) =>
                                <CellComponent key={(y_index) * 52 + (x_index)} colored={week == 1 ? true : false} />

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}