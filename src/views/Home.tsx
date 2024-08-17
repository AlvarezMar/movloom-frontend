import { useEffect, useState } from "react";
import Movie from "../components/Movie";

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

        <div className="bg-[#17141B] rounded-tl-[3rem] p-8 flex flex-col gap-6">
            <h1 className="text-start font-bold text-xl">Now Playing</h1>
            <div className="grid grid-cols-7 gap-4">
                {data.map((movie) => (
                    <Movie movie={movie}/>
                ))}

            </div>
   

        </div>

    </div>
    </>
}

export default Home;