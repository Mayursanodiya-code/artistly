"use client";

import React from "react";

// Mock artist data
const mockArtists = [
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
  {
    name: "Motivator Meera",
    category: "Speaker",
    location: "Bangalore",
    fee: "₹25,000",
  },
];

export default function DashboardPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🎧 Manager Dashboard</h1>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="text-left text-gray-800 dark:text-white">
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Category</th>
              <th className="p-4 border">Location</th>
              <th className="p-4 border">Fee</th>
              <th className="p-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockArtists.map((artist, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 dark:hover:bg-gray-900 text-sm text-gray-700 dark:text-gray-200"
              >
                <td className="p-4 border">{artist.name}</td>
                <td className="p-4 border">{artist.category}</td>
                <td className="p-4 border">{artist.location}</td>
                <td className="p-4 border">{artist.fee}</td>
                <td className="p-4 border">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
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
}
