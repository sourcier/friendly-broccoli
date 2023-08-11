import '@fontsource-variable/inter';
import './globals.css';

import config from '../config';
import { Footer } from '../components/server/footer';
import { NavBar } from '../components/client/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-20">
        <NavBar navigation={config.navigation} />
        {children}
        <Footer copyright={config.copyright} navigation={config.navigation} />
      </body>
    </html>
  );
}
