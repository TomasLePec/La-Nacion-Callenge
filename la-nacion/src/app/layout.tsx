import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'La Nacion Challenge',
  description: 'La nacion challenge App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full">
          <nav className="w-full flex flex-col items-center p-5">
            <h1 className="font-bold text-3xl">La Nacion Challenge</h1>
            <p>Lista de todos los productos en la base de datos.</p>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
