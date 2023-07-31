"use server";
import { redirect } from "next/navigation";

const SwitchRoute = async () => {
  redirect("/movies/now-playing");
};

export default SwitchRoute;
