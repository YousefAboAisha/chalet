import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

type CustomTooltipType = {
  textTitle: string;
  toolTipTitle: string;
  id: string;
};

const CustomTooltip = ({ textTitle, toolTipTitle, id }: CustomTooltipType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border-theme bg-primary w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-sm">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(false)}
        data-tooltip-id={id}
        data-tooltip-content={toolTipTitle}
      >
        {textTitle}
      </div>

      <Tooltip
        isOpen={isOpen}
        id={id}
        className="full-theme !max-w-3/12 !w-fit !p-3 !h-fit"
      />
    </div>
  );
};

export default CustomTooltip;
