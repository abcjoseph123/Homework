import React from "react";
import styled from "styled-components";

export type Time = {
  id: string;
  description: string;
  duration: number;
  createdAt: Date;
};

export type TimeData = {
  id: string;
};

export const TimeFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const TimeHighlight = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: none;
  width: 4px;
  background-color: rgb(54, 161, 139);
`;

export const TimeItemStyle = styled.ul`
  margin: 0;
  min-height: 3rem;
  padding: 0.75rem 3rem;
  position: relative;
  &:hover {
    ${TimeHighlight} {
      display: block;
    }
  }
`;
export const TimeList = styled.li`
  list-style: none;
  box-shadow: 0 0.125em 0.25em 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  border-radius: 0.5rem;
  background-color: rgb(45, 45, 45);
  ${TimeItemStyle} {
    border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
    &:last-of-type {
      border-bottom: 0;
    }
  }
`;

export const TimeDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;

export const TimeDuration = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export const TimeId = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: rgb(191, 191, 191);
`;
export const TimeDate = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: rgb(191, 191, 191);
`;

export type TimeItemProps = {
  time: Time;
};

export const TimeItem: React.FC<TimeItemProps> = ({
  time: { id, description, duration, createdAt },
}) => {
  return (
    <TimeItemStyle>
      <TimeHighlight />
      <TimeFlex>
        <div>
          <TimeDescription>Description: {description}</TimeDescription>
          <TimeDuration>
            Duration: {Math.floor(duration / 3600)}H,
            {Math.floor((duration % 3600) / 60)}M, {duration % 60}S
          </TimeDuration>
          <TimeId>ID:{id}</TimeId>
          <TimeDate>Created at: {createdAt}</TimeDate>
        </div>
      </TimeFlex>
    </TimeItemStyle>
  );
};
