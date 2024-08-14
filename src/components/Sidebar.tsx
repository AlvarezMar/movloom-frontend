
interface SidebarProps{
    isOpen: boolean;
}

function Sidebar({isOpen}: SidebarProps){

    const menu = [
        {option: "Home", svg: "./src/assets/sidebar/home.svg"},
        {option: "Movies", svg: "./src/assets/sidebar/movies.svg"},
        {option: "Series", svg: "./src/assets/sidebar/series.svg"},
        // "My List",
        // "Comming Soon",
        // "Genres",
        // "About"
    ]

    return <>
    <div className={`flex text-start absolute top-20 left-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col gap-2">
            {menu.map((link) => (
                <li className="hover:text-[#c5e951] transition ease-in-out duration-250">
                    <a href="" className="flex gap-4">
                        <img src={link.svg} alt="" width="30px"/>
                        {link.option}
                    </a></li>
            ))}
        </ul>
    </div>
    </>
}

export default Sidebar;