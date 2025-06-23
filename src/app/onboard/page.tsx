"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useState } from "react";

// ✅ Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee is required"),
  location: yup.string().required("Location is required"),
});

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["Hindi", "English", "Marathi", "Tamil"];

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [image, setImage] = useState<File | null>(null);

  const onSubmit = (data: Record<string, unknown>) => {
    console.log("Submitted Data:", { ...data, image });
    alert("Form submitted successfully! ✅ Check console.");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-sky-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Artist Onboarding</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}

        {/* Bio */}
        <textarea
          {...register("bio")}
          placeholder="Bio"
          className="w-full p-2 border rounded"
        />
        {errors.bio && (
          <p className="text-red-600 text-sm">{errors.bio.message}</p>
        )}

        {/* Category */}
        <label className="font-semibold">Category</label>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input type="checkbox" value={cat} {...register("category")} />
              {cat}
            </label>
          ))}
        </div>
        {errors.category && (
          <p className="text-red-600 text-sm">{errors.category.message}</p>
        )}

        {/* Languages */}
        <label className="font-semibold">Languages Spoken</label>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages && (
          <p className="text-red-600 text-sm">{errors.languages.message}</p>
        )}

        {/* Fee - styled for dark mode */}
        <select
          {...register("fee")}
          className="w-full p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        >
          <option value="">Select Fee Range</option>
          <option value="Below ₹10,000">Below ₹10,000</option>
          <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
          <option value="Above ₹20,000">Above ₹20,000</option>
        </select>
        {errors.fee && (
          <p className="text-red-600 text-sm">{errors.fee.message}</p>
        )}

        {/* Location */}
        <input
          {...register("location")}
          placeholder="Location"
          className="w-full p-2 border rounded"
        />
        {errors.location && (
          <p className="text-red-600 text-sm">{errors.location.message}</p>
        )}

        {/* File Upload - styled */}
        <label className="font-semibold block">Profile Image (optional)</label>
        <div className="w-full border border-dashed border-gray-400 rounded-lg p-4 text-center hover:bg-gray-100 transition">
          <label
            htmlFor="profileImage"
            className="cursor-pointer text-blue-600 font-medium"
          >
            {image ? image.name : "Click to choose a file"}
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Submit */}
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
