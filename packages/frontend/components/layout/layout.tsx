import '@fontsource-variable/inter';

import config from '../../config';
import { Footer } from '../footer';
import { NavBar } from '../nav-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar navigation={config.navigation} />
      {children}
      <Footer copyright={config.copyright} navigation={config.navigation} />
    </>
  );
}
