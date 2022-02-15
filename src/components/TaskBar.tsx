import React, { ReactElement } from "react";

const TaskBar: React.FC = (): ReactElement => {
  return (
    <div
      className="w-screen"
      style={{
        background: "linear-gradient(white -26px, #225ad9 10px, #225ad9)",
      }}
    ></div>
  );
};

export default TaskBar;
