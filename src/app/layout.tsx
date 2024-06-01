// src/app/layout.tsx
import "./globals.css";
import Header from "@/app/componentes/header";
import Footer from "@/app/componentes/footer";
import Doacoes from "./doacoes/page";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'SOS Ocean',
  description: 'global solution, solução oceanos',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
