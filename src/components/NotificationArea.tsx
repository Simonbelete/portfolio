import React, { ReactElement } from "react";
import moment from "moment";
import { Icon } from "components";

const NotificationArea: React.FC = (): ReactElement => {
  return (
    <div
      className="shadow-lg basis-1/6 flex flex-row  gap-2 items-center justify-end px-2"
      style={{
        background: "linear-gradient(white -26px, #0e8fdf 10px, #0e8fdf)",
      }}
    >
      <Icon.Sound />
      <p className="text-white font-tahoma text-sm ml-2">
        {moment().format("hh:mm A")}
      </p>
    </div>
  );
};

export default NotificationArea;
