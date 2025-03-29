'use client'
import AppHeader from "@/components/AppHeader/appHeader";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleSearch = (query: string) => {
    console.log("Buscando por:", query);
  };
  
  return (
    <html lang="en">
      <body>
        <AppHeader onSearch={handleSearch} />
        {children}
      </body>
    </html>
  );
}
