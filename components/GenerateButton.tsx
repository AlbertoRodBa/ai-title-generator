"use client";

interface GenerateButtonProps {
  onClick: () => void;
}

export default function GenerateButton({
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800"
    >
      Generate Titles
    </button>
  );
}