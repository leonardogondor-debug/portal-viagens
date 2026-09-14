import type { Metadata } from "next";
import "./globals.css";
import React from "react";

// Descrição e palavras-chave para melhorar SEO:
export const metadata: Metadata = {
    title: "Portal de Viagens",
    description: "Descubra destinos incríveis pelo mundo e planeje sua próxima aventura com nosso portal de viagens.",
    keywords: "viagens, turismo, destinos, aventuras, férias, viagens internacionais, viagens nacionais, dicas de viagem",
};  

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    );
}