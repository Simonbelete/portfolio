import React, {
  ReactElement,
  useEffect,
  useCallback,
  useState,
  useRef,
} from "react";
import Draggable from "react-draggable";

const Icon: React.FC<{
  children?: string;
  icon?: string;
  horizontal?: boolean;
  size?: string;
  dragable?: boolean;
}> = ({
  children,
  icon,
  horizontal,
  size = "h-8 w-8",
  dragable = true,
}): ReactElement => {
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

  return (
    <div
      ref={el}
      className={`inline-flex ${
        horizontal ? "flex-row" : "flex-col"
      } justify-center items-center gap-1 cursor-xp`}
    >
      <img src={icon} alt="" className={`handle aspect-square ${size}`} />
      {children && (
        <p
          className="text-xs text-white max-w-[96px] text-center line-clamp-2"
          style={{
            textShadow: "0.1em 1px 1px black",
            fontSize: "0.7em",
            letterSpacing: "-0.025em",
          }}
        >
          {children}
        </p>
      )}
    </div>
  );
};

const IconWrapper: React.FC<React.ComponentProps<typeof Icon>> = ({
  dragable,
  ...props
}): ReactElement => {
  console.group("dragable");
  console.log(dragable);
  console.groupEnd();
  if (dragable)
    return (
      <Draggable
        bounds="parent"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div className="inline-flex handle">
          <Icon {...props} />
        </div>
      </Draggable>
    );
  else return <Icon {...props} />;
};

const Folder: React.FC<React.ComponentProps<typeof IconWrapper>> = ({
  icon = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-003.ico",
  dragable,
  ...props
}): ReactElement => {
  return <IconWrapper dragable={dragable} icon={icon} {...props} />;
};

const Sound: React.FC<React.ComponentProps<typeof Icon>> = ({
  icon = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-168.ico",
  ...props
}): ReactElement => {
  return <IconWrapper icon={icon} {...props} />;
};

const PowerOff: React.FC<React.ComponentProps<typeof Icon>> = ({
  icon = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-027.ico",
  ...props
}) => {
  return <IconWrapper icon={icon} {...props} />;
};

const LogOff: React.FC<React.ComponentProps<typeof Icon>> = ({
  icon = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-044.ico",
  ...props
}): ReactElement => {
  return <IconWrapper icon={icon} {...props} />;
};

const IconObject = Object.assign(IconWrapper, {
  Folder,
  Sound,
  PowerOff,
  LogOff,
});

export default IconObject;
