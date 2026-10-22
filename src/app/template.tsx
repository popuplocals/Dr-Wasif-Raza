export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden="true" className="page-wipe" />
      <div className="page-enter">{children}</div>
    </>
  );
}
