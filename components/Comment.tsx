export function Comment({
  type,
  children,
}: {
  type: "block" | "inline";
  children: React.ReactNode;
}) {
  return (
    <>
      {/* I refuse to have my ternaries bastardized */}
      {/* @prettier-ignore */}
      {type === "block" ? <p>{children}</p> : <span>{children}</span>}
    </>
  );
}
