interface TitleListProps {
  titles: string[];
}

export default function TitleList({ titles }: TitleListProps) {
  return (
    <div className="space-y-4">
      {titles.length === 0 ? (
        <div className="rounded-lg border bg-white p-6">
          <p className="text-gray-500">
            ✨ Your generated titles will appear here.
          </p>
        </div>
      ) : (
        titles.map((title, index) => (
          <div
            key={index}
            className="rounded-lg border bg-white p-4"
          >
            {title}
          </div>
        ))
      )}
    </div>
  );
}