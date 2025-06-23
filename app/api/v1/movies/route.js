//import { MOVIES } from "@/lib/data"
import { db } from "@/lib/db";
import { NextResponse } from "next/server"

export const revalidate = 60;

//Our first GET API route
export const GET = async()=>{
    try{
      //  const res = await fetch("https:/api.themovie")
      const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1})
      .limit(20)
      .toArray();
      
    return NextResponse.json(movies);
    }catch(error){
        console.log("Error fetching movies:", error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );

    }
}