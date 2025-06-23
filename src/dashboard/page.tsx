"use client";

import React from "react";

interface Artist {
  name: string;
  category: string;
  location: string;
  fee: string;
}

const mockArtists: Artist[] = [
  {
    name: "DJ Rhea",
    category: "DJ",
    location: "Mumbai",
    fee: "₹20,000",
  },
  {
    name: "Singer Dev",
    category: "Singer",
    location: "Delhi",
    fee: "₹15,000",
  },
  {
    name: "Dance Vibes",
    category: "Dancer",
    location: "Pune",
    fee: "₹10,000",
  },
];

const DashboardPage = () => {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Fee</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockArtists.map((artist, idx) => (
              <tr
                key={idx}
                className="text-center hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2 border">{artist.name}</td>
                <td className="px-4 py-2 border">{artist.category}</td>
                <td className="px-4 py-2 border">{artist.location}</td>
                <td className="px-4 py-2 border">{artist.fee}</td>
                <td className="px-4 py-2 border">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DashboardPage;
