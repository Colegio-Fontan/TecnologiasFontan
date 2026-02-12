import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colegio Fontan - Hub de aplicaciones",
  description: "Acceso centralizado para empleados del Colegio Fontan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
