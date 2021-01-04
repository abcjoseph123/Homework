import React, { useState, SyntheticEvent } from "react";
import { Form } from "../../components/Form/Form";
import { FormItem } from "../../components/Form/FormItem";
import { SubmitButton } from "../../components/Form/SubmitButton";

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
  const isEnabled = description.length > 0;
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const onSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    onCreateTime({
      description,
      duration,
    });
    setDescription("");
    setDuration(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

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
      <FormItem label="Hour">
        <input
          type="number"
          value={hours}
          onChange={(e) => {
            setHours(e.currentTarget.valueAsNumber);
          }}
        ></input>
      </FormItem>
      <FormItem label="Minute">
        <input
          type="number"
          value={minutes}
          onChange={(e) => {
            setMinutes(e.currentTarget.valueAsNumber);
          }}
        ></input>
      </FormItem>
      <FormItem label="Second">
        <input
          type="number"
          value={seconds}
          onChange={(e) => {
            setSeconds(e.currentTarget.valueAsNumber);
          }}
        ></input>
      </FormItem>

      <SubmitButton type="submit" disabled={!isEnabled} onClick={onSubmit}>
        Submit
      </SubmitButton>
    </Form>
  );
};
export {};
