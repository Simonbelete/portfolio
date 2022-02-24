import React, {
  ReactElement,
  useEffect,
  useCallback,
  useState,
  useRef,
} from "react";
import { RightClickMenu } from "components";
import { Rnd } from "react-rnd";

const Icon: React.FC<{
  children?: string | ReactElement | ReactElement[];
  icon?: string;
  horizontal?: boolean;
  size?: string;
  dragable?: boolean;
  description?: string;
  x?: number;
  y?: number;
  onClick?: (e: any, xPos: string, yPos: string, showMenu: boolean) => void;
}> = ({
  children,
  icon,
  horizontal,
  size = "h-8 w-8",
  dragable = true,
  description,
  x = 0,
  y = 0,
  onClick,
}): ReactElement => {
  const el = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      setXPos(`${e.pageX + 0}px`);
      setYPos(`${e.pageY + 0}px`);
      setShowMenu(true);
      if (onClick !== undefined)
        onClick(e, `${e.pageX + 0}px`, `${e.pageY + 0}px`, true);
    },
    [setXPos, setYPos, onClick]
  );

  const handleClick = useCallback(
    (e) => {
      if (onClick !== undefined) onClick(e, xPos, yPos, false);
      showMenu && setShowMenu(false);
    },
    [showMenu, onClick]
  );

  useEffect(() => {
    el.current?.addEventListener("click", handleClick);
    el.current?.addEventListener("contextmenu", handleContextMenu);
    return () => {
      el.current?.addEventListener("click", handleClick);
      el.current?.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showMenu && el.current && !el.current.contains(e.target)) {
        setShowMenu(false);
        if (onClick !== undefined) onClick(e, xPos, yPos, false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showMenu]);

  // const clickEvnent = useCallback((e) => {}, [onClick]);

  return (
    <>
      <div
        ref={el}
        className={`inline-flex ${description ? "" : "w-[69px]"} ${
          horizontal ? "flex-row" : "flex-col"
        }  items-center gap-1 cursor-xp`}
      >
        <img src={icon} alt="" className={`handle aspect-square ${size}`} />
        {children && (
          <p
            className="text-xs text-white max-w-[96px] text-center line-clamp-2"
            style={
              description
                ? {
                    textShadow: "0",
                    fontSize: "0.7em",
                    letterSpacing: "-0.025em",
                  }
                : {
                    textShadow: "0.1em 1px 1px black",
                    fontSize: "0.7em",
                    letterSpacing: "-0.025em",
                  }
            }
          >
            {description ? (
              <div className="flex flex-col text-black">
                <p
                  className="self-start"
                  // className={`${
                  //   size == Size.small ? "" : "font-bold"
                  // }  self-start`}
                >
                  {children}
                </p>
                <p className="self-start text-[10px] text-gray-700 tracking-wider">
                  {description}
                </p>
              </div>
            ) : (
              children
            )}
          </p>
        )}
      </div>
    </>
  );
};

const IconWrapper: React.FC<React.ComponentProps<typeof Icon>> = ({
  dragable,
  x = 0,
  y = 0,
  ...props
}): ReactElement => {
  if (dragable)
    return (
      <Rnd
        bounds="parent"
        enableResizing={false}
        handle=".handle"
        default={{ x: x, y: y, width: "auto", height: "auto" }}
      >
        <div className="inline-flex handle">
          <Icon {...props} />
        </div>
      </Rnd>
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

const Github: React.FC<React.ComponentProps<typeof IconWrapper>> = ({
  icon = "/images/github-logo.png",
  dragable,
  ...props
}): ReactElement => {
  return <IconWrapper dragable={dragable} icon={icon} {...props} />;
};

const RecycleBin: React.FC<React.ComponentProps<typeof IconWrapper>> = ({
  icon = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-145.ico",
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

const InternetExplore: React.FC<React.ComponentProps<typeof Icon>> = ({
  icon = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-220.ico",
  ...props
}): ReactElement => {
  return <IconWrapper icon={icon} {...props} />;
};

const MyDocument: React.FC<React.ComponentProps<typeof Icon>> = ({
  icon = "/win_xp_shell32_dll_ico/winxp_ico_shell32_dll-126.ico",
  ...props
}): ReactElement => {
  return <IconWrapper icon={icon} {...props} />;
};

const Phone: React.FC<React.ComponentProps<typeof Icon>> = ({
  icon = "/icons_temp/Phone.ico",
  ...props
}): ReactElement => {
  return <IconWrapper icon={icon} {...props} />;
};

const IconObject = Object.assign(IconWrapper, {
  Folder,
  Sound,
  PowerOff,
  LogOff,
  InternetExplore,
  Github,
  RecycleBin,
  MyDocument,
  Phone,
});

export default IconObject;
