"use client";

import { useForm } from "react-hook-form";

export default function OnboardPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Artist Submitted:", data);
    alert("Form submitted! Check console.");
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Artist Onboarding Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        <textarea
          {...register("bio")}
          placeholder="Bio"
          className="w-full border p-2 rounded"
        />

        <select {...register("category")} className="w-full border p-2 rounded">
          <option value="">Select Category</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="DJ">DJ</option>
          <option value="Speaker">Speaker</option>
        </select>

        <div>
          <label className="block mb-1">Languages Spoken:</label>
          <label>
            <input type="checkbox" {...register("languages")} value="English" />{" "}
            English
          </label>
          <br />
          <label>
            <input type="checkbox" {...register("languages")} value="Hindi" />{" "}
            Hindi
          </label>
          <br />
          <label>
            <input type="checkbox" {...register("languages")} value="Tamil" />{" "}
            Tamil
          </label>
        </div>

        <select {...register("fee")} className="w-full border p-2 rounded">
          <option value="">Select Fee Range</option>
          <option value="₹5k-₹10k">₹5k–₹10k</option>
          <option value="₹10k-₹20k">₹10k–₹20k</option>
          <option value="₹20k+">₹20k+</option>
        </select>

        <input
          {...register("location")}
          placeholder="Location"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
