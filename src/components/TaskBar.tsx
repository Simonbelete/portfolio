import React, { ReactElement } from "react";
import moment from "moment";
import { NotificationArea } from "components";

const TaskBar: React.FC = (): ReactElement => {
  return (
    <div
      className="w-screen h-[31px]"
      style={{
        background: "linear-gradient(white -26px, #225ad9 10px, #225ad9)",
      }}
    >
      <div className="w-full h-full flex flex-row ">
        <NotificationArea />
      </div>
    </div>
  );
};

export default TaskBar;
