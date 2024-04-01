"use client";

import { useSession, useUser } from "@descope/nextjs-sdk/client";
import { Descope } from "@descope/nextjs-sdk";

import "./App.css";

export default function Home() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { isUserLoading, user } = useUser();

  return (
    <div className="App">
      <header className="App-header">
        {isSessionLoading || isUserLoading ? (
          <>Loading..</>
        ) : isAuthenticated ? (
          <p>Hello, {user.userId}</p>
        ) : (
          <Descope
            flowId={
              process.env.NEXT_PUBLIC_DESCOPE_SIGN_IN_FLOW_ID || "sign-up-or-in"
            }
            onSuccess={(e) => {
              console.log("Logged in!");
            }}
            onError={(e) => console.log("Error!")}
          />
        )}
      </header>
    </div>
  );
}
