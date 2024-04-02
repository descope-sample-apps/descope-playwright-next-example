"use client";

import { useSession, useUser } from "@descope/nextjs-sdk/client";
import "../App.css";

export default function ProtectedPage() {
  const { isSessionLoading } = useSession();
  const { isUserLoading, user } = useUser();

  return (
    <div className="App">
      <header className="App-header">
        <p>This is a Protected Page</p>
        {isSessionLoading || isUserLoading ? (
          <>Loading..</>
        ) : (
          <p>Hello, {user.userId}</p>
        )}
      </header>
    </div>
  );
}
