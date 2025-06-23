export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Artistly.com</h1>
      <p className="mb-6">
        Artistly is a platform to connect Event Planners with Artists like
        Singers, Dancers, and DJs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {["Singers", "Dancers", "DJs", "Speakers"].map((category, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow text-center font-medium"
          >
            {category}
          </div>
        ))}
      </div>

      <a
        href="/artists"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Explore Artists
      </a>
    </main>
  );
}
