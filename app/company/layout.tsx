import { DefinitivesSubNav } from "@/components/definitives/sub-nav";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefinitivesSubNav />
      {children}
    </>
  );
}
