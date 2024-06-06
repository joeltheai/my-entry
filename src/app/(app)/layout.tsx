import { ModeToggle } from "@/components/mode-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" h-screen w-screen ">
      <div className=" p-6">
          <ModeToggle />
      </div>
      {children}
      </div>
    </>
  );
}
