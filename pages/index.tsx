import type { NextPage } from "next";
import SideBar from "./components/SideBar";
import Channels from "./components/Channels";
import Chats from "./components/Chats";
import Users from "./components/Users";


const Home: NextPage = () => {
    return (
        <div className="bg-white dark:bg-gray-700 flex h-screen w-full">
            <header>
                <SideBar />
            </header>
            <main className="flex w-full h-screen pl-16 text-black dark:text-white ">
                <Channels />
                <Chats />
                <Users />
            </main>
        </div>
    );
};

export default Home;
