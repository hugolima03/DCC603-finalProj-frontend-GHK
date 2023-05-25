import { Raleway } from "next/font/google";

import StyledComponentsRegistry from "./registry";

import { GlobalStyle } from "styles/global";

const inter = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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
