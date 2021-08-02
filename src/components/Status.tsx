import React from "react";

type Props = {
  title: string;
  color: string;
  hasBg?: boolean;
  icon?: React.ReactElement;
};
export default function Status(props: Props) {
  const bg: string = props.hasBg ? `py-1 px-2 bg-${props.color}-100` : "";
  return (
    <div
      className={`rounded-full inline-flex items-center text-xs font-semibold text-${props.color}-500 ${bg}`}
    >
      {props.icon} <span className="ml-1">{props.title}</span>
    </div>
  );
}
