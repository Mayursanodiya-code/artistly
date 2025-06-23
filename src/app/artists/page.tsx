const artists = [
  { name: "DJ Rhea", category: "DJ", location: "Mumbai", fee: "₹20,000" },
  { name: "Singer Dev", category: "Singer", location: "Delhi", fee: "₹15,000" },
  { name: "Dance Vibes", category: "Dancer", location: "Pune", fee: "₹10,000" },
];

export default function ArtistListing() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Browse Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-1">{artist.name}</h2>
            <p className="text-gray-400">
              {artist.category} • {artist.location}
            </p>
            <p className="mt-2 font-medium">Fee: {artist.fee}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Ask for Quote
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
