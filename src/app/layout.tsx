import { Poppins } from "next/font/google";

import StyledComponentsRegistry from "./registry";

import { GlobalStyle } from "@/styles/global";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
