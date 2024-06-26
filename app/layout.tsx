import { AuthProvider } from "@descope/nextjs-sdk";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID ?? ""}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
