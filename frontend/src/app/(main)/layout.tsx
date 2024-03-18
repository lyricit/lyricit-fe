export default function DictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex-col justify-center items-center inline-flex">
      <div>{children}</div>
    </div>
  );
}
