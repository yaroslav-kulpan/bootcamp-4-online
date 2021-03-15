import React from "react";
import statusEnum from "../../enums/status.enum";

const buttons = [
  {
    label: statusEnum.ALL,
    value: statusEnum.ALL,
  },
  {
    label: statusEnum.DONE,
    value: statusEnum.DONE,
  },
  {
    label: statusEnum.NO_DONE,
    value: statusEnum.NO_DONE,
  },
];

const Filters = ({ handleStatusChange, status }) => {
  return (
    <div>
      {buttons.map(({ label, value }) => {
        const isActive = status === label;
        const className = isActive ? "btn btn-info" : "btn btn-outline-info";

        return (
          <button
            key={value}
            className={className}
            onClick={() => handleStatusChange(value)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
