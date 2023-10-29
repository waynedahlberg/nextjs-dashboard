import '@/app/ui/global.css';
import { figtree } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
