"use client";

import { useState } from "react";
import PromptForm from "@/components/PromptForm";
import TitleList from "@/components/TitleList";

export default function Home() {
  const [titles, setTitles] = useState<string[]>([]);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold text-center">
          AI Title Generator
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Generate engaging titles for your content with AI.
        </p>

        <div className="mt-10">
          <PromptForm setTitles={setTitles} />
        </div>

        <div className="mt-10">
          <TitleList titles={titles} />
        </div>
      </div>
    </main>
  );
}