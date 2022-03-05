import React, { ReactElement } from "react";
import { Window } from "components";

const PageNotFound: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <div>
        <img src="" alt="Info Icon" />
        <p>The Page cannot be displayed</p>
      </div>
    </div>
  );
};

const GithubWindow: React.FC<React.ComponentProps<typeof Window>> = ({
  ...props
}): ReactElement => {
  return (
    <Window
      {...props}
      width={600}
      height={500}
      title={<p>Github - Simon Belete</p>}
    >
      <div className="bg-white flex h-auto w-full">
        <iframe
          title="Github - Simonbelete"
          className="w-full h-full"
          src="https://github.com/Simonbelete"
        ></iframe>
      </div>
    </Window>
  );
};

export default GithubWindow;
