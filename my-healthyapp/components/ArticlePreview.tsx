interface ArticleProps {
  title: string;
  excerpt: string;
  link: string;
}

export default function ArticlePreview({ title, excerpt, link }: ArticleProps) {
  return (
    <div className="border p-4 rounded-lg shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-3 text-gray-700">{excerpt}</p>
      <a href={link} className="text-green-700 underline">Read More</a>
    </div>
  );
}
