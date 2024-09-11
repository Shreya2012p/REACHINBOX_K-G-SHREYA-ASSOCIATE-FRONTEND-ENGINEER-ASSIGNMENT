import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "../Switch_Theme_Button/ThemeToggle";
import './TopBar.css';

function TopBar() {
  return (
    <div className={`topbar ${document.body.classList.contains('dark') ? 'dark' : ''}`}>
      <div>Onebox</div>

      <div className="topbar-right">
        <ThemeToggle />
        <button className="dropdown-button">
        Tim's Workspace <MdOutlineKeyboardArrowDown className="topbar-icon" />
        <ul className="dropdown-menu">
            <li>Change Environment</li>
          </ul>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
