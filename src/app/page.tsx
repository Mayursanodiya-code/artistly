'use client'

import { useForm, FieldValues } from 'react-hook-form'

export default function OnboardPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: FieldValues) => {
    alert("Form Submitted!")
    console.log(data)
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Artist Onboarding</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="w-full p-2 border rounded" />
        <input {...register("location")} placeholder="Location" className="w-full p-2 border rounded" />
        <textarea {...register("bio")} placeholder="Bio" className="w-full p-2 border rounded" />
        <select {...register("category")} className="w-full p-2 border rounded">
          <option value="">Select Category</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="DJ">DJ</option>
        </select>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </main>
  )
}
