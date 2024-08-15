
interface SidebarProps{
    isOpen: boolean;
}

function Sidebar({isOpen}: SidebarProps){

    const menu = [
        {option: "Home", svg: "./src/assets/sidebar/home.svg"},
        {option: "Movies", svg: "./src/assets/sidebar/movies.svg"},
        {option: "Series", svg: "./src/assets/sidebar/series.svg"},
        {option: "My List", svg: "./src/assets/sidebar/myList.svg"},
        {option: "Comming Soon", svg: "./src/assets/sidebar/commingSoon.svg"},
        {option: "Genres", svg: "./src/assets/sidebar/genres.svg"},
        {option: "About", svg: "./src/assets/sidebar/about.svg"},
    ]

    return <>
    <div className={`flex text-start top-24 left-8 w-18 ${isOpen ? 'translate-x-0' : '-translate-x-40'}`}>
        <ul className="flex flex-col gap-3">
            {menu.map((link) => (
                <li className="hover:text-[#c5e951] transition ease-in-out duration-250" key={link.option}>
                    <a href="" className="flex gap-3">
                        <img src={link.svg} alt="" width="25px"/>
                        {link.option}
                    </a></li>
            ))}
        </ul>
    </div>
    </>
}

export default Sidebar;