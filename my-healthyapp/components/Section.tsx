interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
