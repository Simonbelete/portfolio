import React, { ReactElement } from "react";

const StartButton: React.FC = (): ReactElement => {
  return (
    <div className="hover:brightness-12">
      <img src="/images/start_button.png" alt="start Menu" />
    </div>
  );
};

export default StartButton;
