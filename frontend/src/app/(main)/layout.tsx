export default function DictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex h-screen w-screen flex-col items-center justify-center">
      <div>{children}</div>
    </div>
  );
}
