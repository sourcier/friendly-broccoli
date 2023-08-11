import '@fontsource-variable/inter';
import './globals.css';

import { Footer } from '../components/server/footer';
import config from '../config';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer copyright={config.copyright} navigation={config.navigation} />
      </body>
    </html>
  );
}
