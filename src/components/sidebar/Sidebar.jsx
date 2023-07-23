import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcons" /> Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcons" /> Analytics
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcons" /> Sales
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
