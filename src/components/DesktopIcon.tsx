import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
// import { Rnd } from "react-rnd";
import Rnd from "react-rnd";

const DesktopIcon: React.FC<{
  children: string;
  iconUrl: string;
  x: number;
  y: number;
}> = ({ children, iconUrl, x, y }): ReactElement => {
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
    <Rnd
      default={{
        x: x,
        y: y,
        width: "auto",
        height: 50,
      }}
      // enableResizing={false}
      bounds="parent"
    >
      <div
        ref={el}
        className="inline-flex flex-col justify-center items-center gap-1 cursor-xp"
      >
        <img src={iconUrl} alt="" className="aspect-square h-8 w-8" />
        <p
          className="text-xs text-white w-[96px] text-center line-clamp-2"
          style={{
            textShadow: "0.1em 1px 1px black",
            fontSize: "0.7em",
            letterSpacing: "-0.025em",
          }}
        >
          {children}
        </p>
      </div>
    </Rnd>
  );
};

export default DesktopIcon;
