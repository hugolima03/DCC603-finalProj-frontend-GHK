import { Inter } from "next/font/google";

import StyledComponentsRegistry from "./registry";

import { GlobalStyle } from "@/styles/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SG Cursos",
  description: "Sistema de gerenciamento de cursos da UFRR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
