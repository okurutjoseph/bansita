'use client';

import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { useStoreUserEffect } from '@/hooks/useStoreUserEffect';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function ClerkWithConvex({ children }: { children: React.ReactNode }) {
  useStoreUserEffect();
  return children;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ClerkWithConvex>
          {children}
        </ClerkWithConvex>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
} 