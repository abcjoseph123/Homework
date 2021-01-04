import React, { useState, useEffect } from "react";
import {
  TimeItem,
  TimeList,
  Time,
  TimeData,
} from "../../components/TimeTrackItems/TimeTrackItems";

import { Response } from "../../components/Response/Response";

export const AllTimesPage: React.FC = () => {
  const [times, setTimes] = useState<Time[]>([]);
  const [size, setSize] = useState();

  useEffect(() => {
    getAllTimes();
  }, []);
  const getAllTimes = async () => {
    try {
      const res = await fetch("/backend/timetrack", {
        method: "GET",
      });
      const { data } = (await res.json()) as Response<Time[]>;
      // setSize(Object.keys(data).length);
      setTimes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onUp = async (timedata: TimeData) => {
    let path = "/backend/timetrack" + timedata.id;
    const res = await fetch(path, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    getAllTimes();
  };

  return (
    <div>
      <TimeList>
        {times.map((time) => {
          return <TimeItem time={time} />;
        })}
      </TimeList>
    </div>
  );
};
