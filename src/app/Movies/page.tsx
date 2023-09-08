"use client";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import { notFound } from "next/navigation";
async function fetchData() {
  const response = await fetch(
    "https://www.tesorobysania.com/api/category/getAllCategory/"
  );

  if (!response.ok) {
    // throw new Error("Network response was not ok");
    console.log(response)
    notFound;
  }

  return response.json();
}

export default async function Movies() {
  //   const [data, setData] = useState([]);

  const movie = await fetchData();

  return (
    <div>
      {/* {data.length != 0 ? (
        <div>
          {data.map(
            (e: {
              row: number;
              catID: number;
              category_name: string;
              category_active: string;
            }) => (
              <h1 className="">{e.catID}</h1>
            )
          )}{" "}
        </div> // Assuming the API response has a "message" property
      ) : (
        Loading()
      )} */}
      {/* <div>
        {movie?.map(
          (e: {
            row: number;
            catID: number;
            category_name: string;
            category_active: string;
          }) => (
            <h1 className="">{e.catID}</h1>
          )
        )}{" "}
      </div> */}
      movie
    </div>
  );
}
