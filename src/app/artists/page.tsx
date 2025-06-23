"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Link from "next/link";
import FilterBlock from "../components/FilterBlock";

interface Artist {
  name: string;
  category: string;
  location: string;
  fee: number;
}

export default function ArtistListing() {
  const [artists, setArtists] = useState<Artist[]>([]);

  // ✅ Replace useSearchParams with URL logic (safe for Vercel)
  const [categoryParam, setCategoryParam] = useState("");
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const cat = url.get("category") || "";
    setCategoryParam(cat);
  }, []);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  // ✅ Set initial filter if categoryParam exists
  useEffect(() => {
    if (categoryParam) setCategory(categoryParam);
  }, [categoryParam]);

  const filteredArtists = artists.filter((artist) => {
    return (
      (category === "" || artist.category === category) &&
      (location === "" ||
        artist.location.toLowerCase().includes(location.toLowerCase())) &&
      (price === "" ||
        (price === "10000" && artist.fee <= 10000) ||
        (price === "20000" && artist.fee <= 20000) ||
        (price === "20001" && artist.fee > 20000))
    );
  });

  return (
    <main className="min-h-screen p-6 space-y-6 bg-gradient-to-br from-white via-sky-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold">Browse Artists</h1>

      <FilterBlock
        category={category}
        location={location}
        price={price}
        setCategory={setCategory}
        setLocation={setLocation}
        setPrice={setPrice}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArtists.map((artist, index) => (
          <div
            key={index}
            className="p-4 border rounded shadow dark:border-gray-600"
          >
            <h2 className="text-xl font-semibold">{artist.name}</h2>
            <p>
              {artist.category} • {artist.location}
            </p>
            <p>Fee: ₹{artist.fee}</p>
            <button
              onClick={() => alert(`Requested Quote for ${artist.name}`)}
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Ask for Quote
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/onboard">
          <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded">
            Add Your Profile
          </button>
        </Link>
      </div>
    </main>
  );
}
