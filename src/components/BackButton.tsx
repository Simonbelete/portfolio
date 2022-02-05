import React, { ReactElement } from "react";

const BackButton: React.FC = (): ReactElement => {
  return (
    <button type="button" className="py-1 px-1 hover:border text-[11px]">
      Back
    </button>
  );
};

export default BackButton;
