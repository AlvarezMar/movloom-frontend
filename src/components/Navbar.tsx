import { useState } from "react"
import logo from "../assets/logo.svg"
import burger from "../assets/navbar/burger.svg"
import search from "../assets/navbar/search.svg"
import PPtest from "../assets/navbar/PPtest.svg"
import Sidebar from "./Sidebar"
import Home from "../views/Home"

function Navbar(){

    const [showIcon, setShowIcon] = useState(true);
    const [showSidebar, setShowSidebar] = useState(true);

    const openSidebar = () => setShowSidebar(!showSidebar);

    return <>
    <div>
        <div className="flex justify-between items-center p-6 pb-8">
            <div className="flex gap-3 items-center text-[#DB0341]">
                <button onClick={openSidebar} className="rounded-full p-1.5 hover:bg-[#2D2D2D]">
                    <img src={burger} alt="" width="30px"/>
                </button>
                <a href="">
                    <div className="flex items-center gap-1">
                        <img src={logo} alt="" width="35px"/>

                        <h1 className="uppercase text-[1.7rem] font-light"><span className="font-bold">Mov</span>loom</h1>
                    </div>
                </a>
            </div>
            <div className="flex gap-3 items-center relative">
                {showIcon && (
                    <img src={search} alt="" width="18px" className="absolute ml-2"/>
                )}
                <input type="text" placeholder="Search for a movie, TV show or celebrity" className="rounded-md border-none focus:ring-[#E0E0E0] focus:ring-2 text-[#E1E1E6] min-w-96 bg-[#313037] placeholder:text-[#615d5d] hover:ring-2 hover:ring-[#6E6E6E] transition-all ease-out duration-200 pl-9 focus:pl-2" onFocus={() => setShowIcon(false)} onBlur={() => setShowIcon(true)}/>

                <img src={PPtest} alt="" width="45px"/>

            </div>
        </div>

        <div className="flex gap-7">
            <Sidebar isOpen={showSidebar}/>
            <Home/>

        </div>
    </div>
    </>
}

export default Navbar;