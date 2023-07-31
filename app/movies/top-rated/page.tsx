"use server";
import DashboardFrame from "@/components/DashboardFrame";
import { fetchMovies } from "@/util/fetchMovies";
import getQueryClient from "@/util/get-query-client";
import Hydrate from "@/components/Hydrate";
import { dehydrate } from "@tanstack/query-core";
import ListMovies from "@/components/ListMovies";

const TopRated = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ["top-rated-movies"],
    () => fetchMovies("top_rated"),
    { retry: 2 }
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <DashboardFrame title="Top Rated" bgClass="bg-top-rated_bg_img" />
      <Hydrate state={dehydratedState}>
        <ListMovies queryKey="top-rated-movies" endpoint="top_rated" />
      </Hydrate>
    </div>
  );
};

export default TopRated;
