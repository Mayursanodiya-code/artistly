import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white px-4">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Welcome to Artistly
        </h1>
        <p className="text-lg">
          Book DJs, Singers, Dancers, and Speakers for your event
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/artists">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition">
              Explore Artists
            </button>
          </Link>
          <Link href="/onboard">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow transition">
              Join as Artist
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-lg shadow transition">
              Manager Dashboard
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {["Singer", "Dancer", "DJ", "Speaker"].map((category) => (
            <Link key={category} href={`/artists?category=${category}`}>
              <div className="p-4 border rounded-xl shadow text-lg font-semibold text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:border-gray-600">
                {category}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
