import React, { useEffect, useState } from "react";
import {
  TimeItem,
  TimeList,
  Time,
  TimeData,
} from "../../components/TimeTrackItems/TimeTrackItems";

import { Response } from "../../components/Response/Response";
import { FormItem } from "../../components/Form/FormItem";
import { SubmitButton } from "../../components/Form/SubmitButton";

export const GetDescriptionPage: React.FC = () => {
  const [time, setTimetrack] = useState<Time[]>([]);
  const [description, setDescription] = useState("");
  const isEnabled = description.length > 0;

  useEffect(() => {
    GetDescription();
  }, []);
  const GetDescription = async () => {
    try {
      let path: string = "/backend/timetrack/searchdescr/" + description;
      const res = await fetch(path, {
        method: "GET",
      });
      const { data } = (await res.json()) as Response<Time[]>;
      setTimetrack(data);
      setDescription(description);
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <FormItem label="Description">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </FormItem>
      <SubmitButton disabled={!isEnabled} onClick={GetDescription}>
        Show all descriptions with desired text.
      </SubmitButton>

      <TimeList>
        {time !== undefined &&
          time.map((time) => {
            return <TimeItem time={time} />;
          })}
      </TimeList>
    </div>
  );
};
