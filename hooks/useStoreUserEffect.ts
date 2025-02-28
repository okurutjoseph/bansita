'use client';

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export function useStoreUserEffect() {
  const { user } = useUser();
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (!user) return;

    // Store user data in Convex with default role as 'customer'
    storeUser({
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
      clerkId: user.id,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
      // Only use the role from metadata if it exists, otherwise it will default to 'customer' in the store function
      role: (user.publicMetadata?.role as string) ?? undefined,
    }).catch(console.error);
  }, [user, storeUser]);
} 