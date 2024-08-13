import logo from "../assets/logo.svg"

function Navbar(){

    return <>
    <div className="flex justify-between items-center p-9">
        <div className="flex gap-5 items-center text-[#DB0341]">
            <h1>&gt;</h1>
            <div className="flex items-center gap-1">
                <img src={logo} alt="" width="35px"/>

            <h1 className="uppercase text-2xl font-light"><span className="font-bold">Mov</span>loom</h1>
            </div>
        </div>
        <div className="flex gap-5 items-center">
            <input type="text" placeholder="Search for a movie, TV show or celebrity" className="rounded-md border-none focus:ring-white focus:ring-2 text-white min-w-96 bg-[#313037] placeholder:text-[#615d5d] hover:ring-2 hover:ring-gray-500 transition ease-in-out duration-200 "/>
            <h1 className="flex border w-14 h-14 rounded-full items-center justify-center">PP</h1>
        </div>

    </div>
    </>
}

export default Navbar;