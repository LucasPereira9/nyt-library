
import "./globals.css";
import { QueryProvider } from "./providers/QueryProvider";
import * as S from './page.styles'
import { useGendersListQuery } from "@/hooks/useGenderList";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
