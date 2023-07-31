"use server";
import DashboardFrame from "@/components/DashboardFrame";
import { fetchMovies } from "@/util/fetchMovies";
import getQueryClient from "@/util/get-query-client";
import Hydrate from "@/components/Hydrate";
import { dehydrate } from "@tanstack/query-core";
import ListMovies from "@/components/ListMovies";

const Popular = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ["popular-movies"],
    () => fetchMovies("popular"),
    { retry: 2 }
  );

  const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      <DashboardFrame title="Popular" bgClass="bg-popular_bg_img" />
      <Hydrate state={dehydratedState}>
        <ListMovies queryKey="popular-movies" endpoint="popular" />
      </Hydrate>
    </div>
  );
};

export default Popular;
