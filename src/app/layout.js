import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeModeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

export const metadata = {
  title: "Pokédex Next - Accueil",
  description: "Liste complète des Pokémon avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <ThemeModeProvider>
            <Header/>
            {children}
          </ThemeModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}