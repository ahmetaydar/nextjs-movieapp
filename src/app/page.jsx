import React from "react";
import Movies from "@/components/Movies";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=030df84cfc3e9c710453ff4dfd29f316`
  );
  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
