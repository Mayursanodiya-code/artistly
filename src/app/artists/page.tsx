"use client";

import { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import FilterBlock from "../components/FilterBlock";

interface Artist {
  name: string;
  category: string;
  location: string;
  fee: number;
}

export default function ArtistListing() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

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
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>

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
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </main>
  );
}
