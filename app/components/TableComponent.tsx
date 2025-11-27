import React from 'react'
import { eachWeekOfInterval } from 'date-fns'
import CellComponent from './CellComponent'
type Props = { DateOFBirth: Date | undefined }

export default function TableComponent({ DateOFBirth }: Props) {
    const TwoDimensionalArray = new Array(90)
    if (DateOFBirth != undefined) {
        const livedWeeks = eachWeekOfInterval({ start: DateOFBirth, end: new Date() })
        console.log(livedWeeks.length)
        for (let i = 0; i < TwoDimensionalArray.length; i++) {
            const YearInWeeks = new Array(52);
            for (let j = 0; j < YearInWeeks.length; j++) {
                if ((i + 1) * 52 + (j + 1) < livedWeeks.length - 4) {
                    YearInWeeks[j] = 1
                }
                else {
                    YearInWeeks[j] = 0
                }
            }
            TwoDimensionalArray[i] = YearInWeeks
        }
    }
    const yearInWeeks = new Array(52).fill(1);
    return (
        <div className="bg-black flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl text-white font-bold">90 years of life in weeks</h1>
            <div className="flex flex-row items-center justify-center gap-1">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-5 h-5"> f</div>
                    {TwoDimensionalArray.map((year, y_index) => <div key={y_index} className="w-5 h-5 border border-white flex items-center justify-center">{y_index + 1}</div>)}
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="grid grid-cols-52 grid-rows-1 gap-1">
                        {yearInWeeks.map((week, w_index) => <div className="w-5 h-5 flex items-center justify-center text-white border border-white" key={w_index}> {w_index + 1}</div>)}
                    </div>
                    <div className="grid grid-cols-52 grid-rows-90 gap-1">
                        {TwoDimensionalArray.map((year, y_index) => {
                            //ts-ignore
                            return year.map((week: number, x_index: number) =>
                                <CellComponent key={(y_index) * 52 + (x_index + 1)} colored={week == 1 ? true : false} />

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}