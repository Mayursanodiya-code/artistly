"use client";

import { useForm, FieldValues } from "react-hook-form";
import Link from "next/link";

export default function OnboardPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    alert("Form Submitted!");
    console.log(data);
  };

  return (
    <main className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Artist Onboarding</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("location")}
          placeholder="Location"
          className="w-full p-2 border rounded"
        />
        <textarea
          {...register("bio")}
          placeholder="Bio"
          className="w-full p-2 border rounded"
        />
        <select {...register("category")} className="w-full p-2 border rounded">
          <option value="">Select Category</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="DJ">DJ</option>
          <option value="Speaker">Speaker</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div className="text-center">
        <Link href="/">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
