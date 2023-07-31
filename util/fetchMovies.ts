export const fetchMovies = async (endpoint: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDlkMWVhNzM3ZGRjY2NmNTNhMzk0YWVhYWRkZmMwNyIsInN1YiI6IjY0YzZjODg4MzBmNzljMDBlNGVmZDc5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.raBs4FcaTEJxqVYJMYBCxaJPYHWEFYk-5Sa6qKSM2a4",
    },
  };

  const { results } = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}`,
    options
  ).then((response) => response.json());
  return results;
};

//endpoints latest, now_playing, popular, top_rated, upcoming
