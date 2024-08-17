import favorite from "../assets/movie/favorite.svg"

function Movie({movie}){

    return <div className="relative max-w-48 rounded-lg overflow-hidden">
        <div className="">
            <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="" className="w-full h-auto"/>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full" style={{background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 20%, transparent 30%)"}}></div>
        
        <div className="absolute bottom-0 left-0 w-full px-2">
            <h1 className="font-bold text-start text-[.98rem]">{movie.title}</h1>


            <div className="flex justify-between items-center pb-2.5 pt-1 font-bold">
                <div className="flex gap-1.5">
                    <img src={favorite} alt="" width="15px"/>
                    <h2>{movie.vote_average.toFixed(1)}<span className="text-sm font-light">/10</span></h2>
                </div>

                <h2 className="bg-[#DB0341] px-[.65rem] py-[1.5px] rounded-full text-[.84rem]">{movie.release_date.split("-")[0]}</h2>
            </div>
        </div>
    </div>
}

export default Movie

/*
 * El método toFixed formatea un número usando notación de punto fijo:
 * 123.456.toFixed(2) => 123.45 
 */