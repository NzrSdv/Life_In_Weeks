'use client';
import React, { useState } from "react";
import { eachWeekOfInterval } from "date-fns";
import InputComponent from "./components/InputComponent";
import TableComponent from "./components/TableComponent";


export default function Home() {

  const [DateOFBirth, changeDate] = useState<Date | undefined>(undefined)


  return (
    <div>
      {DateOFBirth == undefined ? <InputComponent onChange={changeDate} /> : <><button className="" onClick={() => changeDate(undefined)}>Change Date</button> <TableComponent DateOFBirth={DateOFBirth} /></>}
    </div>
  );
}
