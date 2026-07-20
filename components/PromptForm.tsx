"use client";

import { useState } from "react";
import GenerateButton from "./GenerateButton";

interface PromptFormProps {
  setTitles: (titles: string[]) => void;
}

export default function PromptForm({
  setTitles,
}: PromptFormProps) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Landing Page");

  function handleSubmit() {

  setTitles([
    "Título generado 1",
    "Título generado 2",
    "Título generado 3",
  ]);

}

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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Content type
        </label>

        <select
          className="w-full rounded-lg border p-3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Landing Page</option>
          <option>Instagram Post</option>
          <option>YouTube Title</option>
          <option>Blog</option>
          <option>Product</option>
        </select>
      </div>

      <GenerateButton onClick={handleSubmit} />
    </div>
  );
}