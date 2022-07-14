import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const imgStyle = {
        float: "right",
    }
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie()
    }, []);
    return (
        <div>
            {
                loading ? <h1>Loading...</h1>
                    : (
                        <div>
                            {
                                <div>
                                    <h2>{movie.title}</h2>
                                    <img src={movie.medium_cover_image} alt={movie.title}
                                        style={imgStyle}
                                    ></img>
                                    <p>{movie.description_full}</p>
                                    <ul>
                                        {movie.genres.map(g => (
                                            <li key={g}>{g}</li>
                                        ))}
                                    </ul>
                                    <p>rating: {movie.rating}</p>
                                    <p>download_count: {movie.download_count}</p>
                                </div>
                            }
                        </div>
                    )
            }
        </div>
    );
}

export default Detail;