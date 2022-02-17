import React, { ReactElement } from "react";
import moment from "moment";
import { NotificationArea } from "components";

const TaskBar: React.FC = (): ReactElement => {
  return (
    <div
      className="w-screen absolute bottom-0 left-0 right-0 h-[31px]"
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
