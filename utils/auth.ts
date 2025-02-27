import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/account/login");
  }

  const metadata = user.publicMetadata as { role?: string } | undefined;
  const isAdmin = metadata?.role === "admin";

  if (!isAdmin) {
    redirect("/account");
  }

  return user;
} 