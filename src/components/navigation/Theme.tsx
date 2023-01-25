import { FC } from "react";
import { SvgIcon, Tooltip } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux-hooks";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";

interface ITheme {
  currentTheme: string;
  switchTheme: any;
}

const Theme: FC<ITheme> = ({ currentTheme, switchTheme }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {currentTheme === "light" ? (
        <Tooltip
          title="Dark-mode"
          arrow
          placement="right"
          onClick={() => dispatch(switchTheme("dark"))}
        >
          <div className="icon">
            <SvgIcon component={DarkModeOutlinedIcon} />
          </div>
        </Tooltip>
      ) : (
        <Tooltip
          title="Light-mode"
          arrow
          placement="right"
          onClick={() => dispatch(switchTheme("light"))}
        >
          <div className="icon">
            <SvgIcon component={Brightness5OutlinedIcon} />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default Theme;
