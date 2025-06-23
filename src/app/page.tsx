import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6 text-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Artistly</h1>
      <p className="text-gray-600">
        Book DJs, Singers, Dancers, and Speakers for your event
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <Link href="/artists">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Explore Artists
          </button>
        </Link>
        <Link href="/onboard">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Join as Artist
          </button>
        </Link>
      </div>
    </main>
  );
}
