"use server";
import DashboardFrame from "@/components/DashboardFrame";
import { fetchMovies } from "@/util/fetchMovies";
import getQueryClient from "@/util/get-query-client";
import Hydrate from "@/components/Hydrate";
import { dehydrate } from "@tanstack/query-core";
import ListMovies from "@/components/ListMovies";

const NowPlaying = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ["now-playing-movies"],
    () => fetchMovies("now_playing"),
    { retry: 2 }
  );

  const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      <DashboardFrame title="Now Playing" bgClass="bg-now-playing_bg_img" />
      <Hydrate state={dehydratedState}>
        <ListMovies queryKey="now-playing-movies" endpoint="now_playing" />
      </Hydrate>
    </div>
  );
};

export default NowPlaying;
