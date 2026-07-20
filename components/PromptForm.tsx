export default function PromptForm() {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block font-medium">
          Describe your content
        </label>

        <textarea
          className="w-full rounded-lg border p-3"
          rows={5}
          placeholder="Example: A landing page for a web design agency"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Content type
        </label>

        <select className="w-full rounded-lg border p-3">
          <option>Landing Page</option>
          <option>Instagram Post</option>
          <option>YouTube Title</option>
          <option>Blog</option>
          <option>Product</option>
        </select>
      </div>

      <button className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800">
        Generate Titles
      </button>
    </div>
  );
}