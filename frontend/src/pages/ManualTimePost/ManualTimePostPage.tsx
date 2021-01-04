import React, { useState } from "react";
import { CreateTime, CreateTimeData } from "./ManualTimePost";
import { Time } from "../../components/TimeTrackItems/TimeTrackItems";
import { Response } from "../../components/Response/Response";

export const CreateTimePage: React.FC = () => {
  const [times, setTimes] = useState<Time[]>([]);

  const onCreateTime = async (timeData: CreateTimeData) => {
    try {
      const res = await fetch("/backend/timetrack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timeData),
      });

      const { data } = (await res.json()) as Response<Time>;
      setTimes([...times, data]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <CreateTime onCreateTime={onCreateTime} />
    </div>
  );
};
