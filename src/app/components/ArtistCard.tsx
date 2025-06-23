interface Artist {
  name: string;
  category: string;
  location: string;
  fee: number;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{artist.name}</h2>
      <p>
        {artist.category} • {artist.location}
      </p>
      <p>Fee: ₹{artist.fee}</p>
      <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">
        Ask for Quote
      </button>
    </div>
  );
}
