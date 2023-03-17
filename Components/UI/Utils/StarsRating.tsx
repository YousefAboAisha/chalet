import { useState } from "react";
import ReactStars from "react-stars";

export const StarsRating = () => {
  // const [value, setValue] = useState(4);

  return (
    <div className="flex gap-2 items-center my-1">
      <ReactStars
        count={5}
        value={4}
        // onChange={() => setValue(value)}
        size={14}
        color2={"#D61355"}
        color1={"#DDD"}
        edit={false}
      />

      <div className="text-[12px]">4 out of 5</div>
    </div>
  );
};
