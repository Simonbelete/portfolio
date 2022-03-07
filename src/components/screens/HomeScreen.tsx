import React, {
  ReactElement,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { TaskBar, RightClickMenu } from "components";
import { Windows } from "rootSlice";

const HomeScreen: React.FC<{
  background?: string;
  children: ReactElement | ReactElement[];
  windows?: Windows[];
  onTaskBarWindowToggle: (i: number) => void;
}> = ({
  background = "/backgrounds/bliss.jpg",
  children,
  windows = [],
  onTaskBarWindowToggle,
}): ReactElement => {
  const bRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      if (e.currentTarget != e.target) {
        setShowMenu(false);
        return;
      }
      setXPos(`${e.pageX + 0}px`);
      setYPos(`${e.pageY + 0}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = useCallback(
    (e) => {
      // Prevent closing when the clicking on the menu
      if (e.currentTarget !== e.target) {
        // setShowMenu(false);
        return;
      }
      showMenu && setShowMenu(false);
    },
    [showMenu]
  );

  useEffect(() => {
    bRef.current?.addEventListener("click", handleClick);
    bRef.current?.addEventListener("contextmenu", handleContextMenu);
    return () => {
      bRef.current?.addEventListener("click", handleClick);
      bRef.current?.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return (
    <div
      className="w-screen h-screen  aspect-square bg-cover"
      style={{
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full relative overflow-hidden">
        <div className="w-full h-full relative mx-0 py-0" ref={bRef}>
          <RightClickMenu.Desktop x={xPos} y={yPos} show={showMenu} />
          {children}
        </div>
        <TaskBar
          windows={windows}
          onTaskBarWindowToggle={onTaskBarWindowToggle}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
