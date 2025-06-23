import Link from "next/link";

const artists = [
  { name: "DJ Rhea", category: "DJ", location: "Mumbai", fee: "₹20,000" },
  { name: "Singer Dev", category: "Singer", location: "Delhi", fee: "₹15,000" },
  { name: "Dance Vibes", category: "Dancer", location: "Pune", fee: "₹10,000" },
];

export default function ArtistListing() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Browse Artists</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{artist.name}</h2>
            <p>
              {artist.category} • {artist.location}
            </p>
            <p>Fee: {artist.fee}</p>
            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">
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
