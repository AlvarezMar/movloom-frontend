function Sidebar(){

    const menu = [
        "Home",
        "Movies",
        "Series",
        "My List",
        "Comming Soon",
        "Genres",
        "About"
    ]

    return <>
    <div className="flex text-start">
        <ul className="flex flex-col gap-2">
            {menu.map((link) => (
                <li className="hover:text-[#c5e951]"><a href="">{link}</a></li>
            ))}
        </ul>
    </div>
    </>
}

export default Sidebar;