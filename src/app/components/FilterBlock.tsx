interface FilterProps {
  category: string;
  location: string;
  price: string;
  setCategory: (value: string) => void;
  setLocation: (value: string) => void;
  setPrice: (value: string) => void;
}

export default function FilterBlock({
  category,
  location,
  price,
  setCategory,
  setLocation,
  setPrice,
}: FilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="p-2 border rounded"
      />

      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Price Ranges</option>
        <option value="10000">Below ₹10k</option>
        <option value="20000">Below ₹20k</option>
        <option value="20001">Above ₹20k</option>
      </select>
    </div>
  );
}
