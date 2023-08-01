export const fetchMovies = async (endpoint: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
    },
  };

  const { results } = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}`,
    options
  ).then((response) => response.json());
  return results;
};

//endpoints latest, now_playing, popular, top_rated, upcoming
