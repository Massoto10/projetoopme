import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Nav } from "@/components/Nav";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <Nav
      role={session.user.role}
      displayName={session.user.name ?? session.user.email ?? ""}
    >
      {children}
    </Nav>
  );
}
