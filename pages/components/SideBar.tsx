import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import useColorMode from "../hooks/useColorMode";

const SideBar = () => {
    const [colorMode, setColorMode] = useColorMode();
    const theme = "dark";
    return (
        <div
            className="fixed top-0 h-screen w-16 m-0
                        flex flex-col
                        bg-white text-black
                        dark:bg-gray-900 dark:text-white 
                        shadow-lg"
        >
            <SideBarIcon icon={<BsGearFill size="28" />} />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<VscTerminalLinux size="20" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="23" />} />
            <SideBarIcon icon={<AiFillAndroid size="30" />} />
            <button
                className="absolute bottom-0 w-16 bg-gray-200 dark:bg-gray-700"
                onClick={() => {
                    setColorMode(colorMode === "light" ? "dark" : "light");
                }}
            >
                <div
                    className="
                    relative flex items-center justify-center 
                    h-12 w-12 mt-2 mb-2 mx-auto  
                    bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
                    text-gray-500 dark:text-red-600 hover:text-white
                    hover:rounded-xl rounded-3xl
                    transition-all duration-300 ease-linear
                    cursor-pointer shadow-lg"
                >
                    <BsFillBrightnessHighFill size="30" />
                </div>
            </button>
        </div>
    );
};

const SideBarIcon = ({ icon, text = "Fack you 💡" }: any) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100 z-50">{text}</span>
    </div>
);

export default SideBar;
