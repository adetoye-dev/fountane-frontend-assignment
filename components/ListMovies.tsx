"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/util/fetchMovies";
import Image from "next/image";
import { movie } from "@/types/movie";

export default function ListUsers({
  queryKey,
  endpoint,
}: {
  queryKey: string;
  endpoint: string;
}) {
  const {
    isLoading,
    isSuccess,
    error,
    data: movieList,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchMovies(endpoint),
    retry: 2,
  });

  if (isLoading) return <p>Loading movies...</p>;

  if (error || !isSuccess) return <p>An error occured</p>;

  return (
    <div
      className="flex flex-wrap
     gap-5 items-center mt-8"
    >
      {movieList?.map((movie: movie) => (
        <div
          key={movie.id}
          className="border w-[250px] mx-auto border-neutral-500 text-center"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={250}
            height={180}
            alt={movie.title}
          />
          <h3 className="break-words mt-5 font-semibold text-lg">
            {movie.title}
          </h3>
          <p className="text-neutral-400">{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}
