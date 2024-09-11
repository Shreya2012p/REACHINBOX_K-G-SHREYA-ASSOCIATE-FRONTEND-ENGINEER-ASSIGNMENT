import { useEffect, useState } from "react";
import './ThemeToggle.css'; // Make sure to add the required styles for the toggle
import theme from "../Images/light_mode.png"; // Light mode icon
import { FaMoon } from "react-icons/fa"; // Dark mode icon

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Add or remove 'dark' class based on the darkMode state
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="theme-toggle-container">
            <label className="theme-toggle-switch">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(prevMode => !prevMode)}
                />
                <span className="theme-toggle-slider"></span>
                <span className="theme-toggle-icons">
                    {darkMode ? (
                        <img className="theme-toggle-icon" src={theme} alt="Light Mode" />
                    ) : (
                        <FaMoon className="theme-toggle-icon" />
                    )}
                </span>
            </label>
        </div>
    );
}

export default ThemeToggle;
