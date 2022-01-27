import React, {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

export enum Size {
  small = "small",
}

const Icon: React.FC<{
  iconUrl: string;
  children: string;
  description?: string;
  size?: Size;
}> = ({ iconUrl, children, description, size = "large" }): ReactElement => {
  const el = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      setXPos(`${e.pageX + 10}px`);
      setYPos(`${e.pageY + 15}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    el.current?.addEventListener("click", handleClick);
    el.current?.addEventListener("contextmenu", handleContextMenu);
    return () => {
      el.current?.addEventListener("click", handleClick);
      el.current?.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);

  return (
    <div ref={el} className="inline-flex flex-row items-center gap-2 cursor-xp">
      <img
        src={iconUrl}
        alt=""
        className={`aspect-square ${
          size == Size.small ? "h-6 w-6" : "h-8 w-8"
        } `}
      />
      <p className="text-xs text-white w-[96px] text-center line-clamp-2">
        <div className="flex flex-col text-black">
          <p className={`${size == Size.small ? "" : "font-bold"}  self-start`}>
            {children}
          </p>
          <p className="self-start text-[10px] text-gray-700 tracking-wider">
            {description}
          </p>
        </div>
      </p>
    </div>
  );
};

const IconObject = Object.assign(Icon, { Size });

export default IconObject;
