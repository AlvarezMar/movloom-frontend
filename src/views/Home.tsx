import { useEffect, useState } from "react";

function Home(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/movies/now-playing')
        .then((response) => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => setData(data.results))
        .catch(error => console.log("Error fetching movies: ", error));  
    });

    return <>
    <div className="">

        <div className="bg-[#17141B] rounded-tl-[3rem]">
            {data.map((movie) => (
                <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="" />
            ))}
   

        </div>

    </div>
    </>
}

export default Home;