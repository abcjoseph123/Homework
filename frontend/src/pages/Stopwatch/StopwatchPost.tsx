import React, { useState, SyntheticEvent, useEffect } from "react";
import { Form } from "../../components/Form/Form";
import { FormItem } from "../../components/Form/FormItem";
import { SubmitButton } from "../../components/Form/SubmitButton";
import calculateTime from "../../util/calc";
import Controls from "../../components/Controls/Controls";
import "../../components/Main/Main.css";

export type CreateTimeData = {
  description: string;
  duration: number;
};

export type CreateTimeProps = {
  onCreateTime: (data: CreateTimeData) => void;
};

export const CreateTime: React.FC<CreateTimeProps> = ({ onCreateTime }) => {
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const isEnabled = description.length > 0;

  const onSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    onCreateTime({
      description,
      duration,
    });
    setDescription("");
    setDuration(0);
  };
  useEffect(() => {
    let timeArray: Array<number | string> = calculateTime(duration);
    setTimerArray(timeArray);
  }, [duration]);

  return (
    <Form>
      <FormItem label="Description">
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        />
      </FormItem>
      <section className="time-container">
        <p className="timer-text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>
      </section>
      <Controls setDuration={setDuration} />

      <SubmitButton type="submit" disabled={!isEnabled} onClick={onSubmit}>
        Submit
      </SubmitButton>
    </Form>
  );
};
