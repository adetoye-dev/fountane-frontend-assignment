"use server";
import DashboardFrame from "@/components/DashboardFrame";
import { fetchMovies } from "@/util/fetchMovies";
import getQueryClient from "@/util/get-query-client";
import Hydrate from "@/components/Hydrate";
import { dehydrate } from "@tanstack/query-core";
import ListMovies from "@/components/ListMovies";

const Upcoming = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ["upcoming-movies"],
    () => fetchMovies("upcoming"),
    { retry: 2 }
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <DashboardFrame title="Upcoming" bgClass="bg-upcoming_bg_img" />
      <Hydrate state={dehydratedState}>
        <ListMovies queryKey="upcoming-movies" endpoint="upcoming" />
      </Hydrate>
    </div>
  );
};

export default Upcoming;
