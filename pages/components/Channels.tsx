import { TfiAngleDown } from "react-icons/tfi";
import useColorMode from "../hooks/useColorMode";
import { TfiSettings } from "react-icons/tfi";
import Image from "next/image";
const Channels = () => {
    const [colorMode, setColorMode] = useColorMode();

    let open: any = false;
    // console.log(window);

    const category = () => {
        //const arrow = document.getElementById("arrow");
        // const channels = document.getElementById("channels");   

        // if (open == false) {
        //     channels!.style.display = "flex";
        //     open = true;
        //     // arrow.style.transform = "rotate(100px)";
        // } else {
        //     channels!.style.display = "none";
        //     open = false;
        // }
        console.log("hello world");
        
    };

    return (
        <div className="h-full w-56 bg-gray-100 dark:bg-gray-800 relative">
            <div className="w-full h-14 shadow-lg flex items-center px-4 justify-between">
                <Image
                    className="w-6 h-6 "
                    src="/nitro.gif"
                    width={20}
                    height={20}
                    alt="laa"
                />
                <h1>Rashed</h1>

                <TfiAngleDown />
            </div>

            <div className="h-full w-full flex flex-col overflow-y-scroll">


                <div className="w-full h-auto mt-10 relative">
                    <button
                        onClick={category() as any}
                        className="hover:text-gray-100 text-gray-400 w-full text-sm relative flex items-center mb-6"
                    >
                        <span className="pr-2 transition-all absolute left-3" id="arrow">
                            {">"}
                        </span>
                        <span className="absolute left-6">{"🌀:> INFO"}</span>
                        <span className="absolute right-5 text-1xl">+</span>
                    </button>
                    <ul
                        className="flex-col transition-all duration-1000"
                        id="channels"
                    >
                        <CreateChannels text="lala" />
                        <CreateChannels text="lolo" />
                        <CreateChannels text="lele" />
                    </ul>
                </div>

                <div className="w-full h-auto py-3">
                    <button
                        onClick={category() as any}
                        className="hover:text-gray-100 text-gray-400 w-full text-sm relative flex items-center mb-6"
                    >
                        <span className="pr-2 transition-all absolute left-3" id="arrow">
                            {">"}
                        </span>
                        <span className="absolute left-6">{"💬:> GENERAL"}</span>
                        <span className="absolute right-5 text-1xl">+</span>
                    </button>
                    <ul
                        className="flex-col transition-all duration-1000"
                        id="channels"
                    >
                        <CreateChannels text="chat" />
                        <CreateChannels text="memes" />
                        <CreateChannels text="cmd" />
                    </ul>
                </div>


            </div>

            <div className="w-full h-16 bg-gray-100 dark:bg-gray-1000 absolute bottom-0 p-5 flex items-center shadow-slate-50">
                <div className="w-full h-14 flex items-center gap-4">
                    <img className="w-12 h-12 object-cover rounded-full" src="https://imgs.search.brave.com/GJafsYke36vEjj45VGZSmCibJkTEgUKOUso15bxzPgI/rs:fit:1036:1036:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvZXkz/MmhiZkoxcGRQanNN/SFBjWFJBSDNkVlJx/V0hNRFFPM0J2bzdY/ZVZOQS5qcGc_YXV0/bz13ZWJwJnM9YjEz/ZGY0ZTI5ZTgwZjll/YjU0MjI1OGM2MmM3/MWE3OGQzYjJkODlh/Yw" />
                    <h2>Loard</h2>
                    <TfiSettings className="absolute right-4" size="14" />
                </div>
            </div>
        </div>
    );
};

const CreateChannels = ({ text }: any): any => {
    return (
        <span className="channels cursor-pointer">
            <span className="text-gray-500 px-2 text-2xl transition-all duration-300">
                #
            </span>
            {text}
        </span>
    );
};

export default Channels;
