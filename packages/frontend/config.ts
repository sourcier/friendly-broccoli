import type { HeroProps } from './components/hero';

export type NavigationLink = {
  name: string;
  href: string;
};

type Config = {
  company: string;
  copyright: string;
  navigation: {
    main: NavigationLink[];
  };
  homepage: {
    hero: HeroProps;
  };
};

const config: Config = {
  company: 'Sourcier Ltd.',
  copyright: '© 2021 Sourcier Ltd. All rights reserved',
  navigation: {
    main: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Our Courses', href: '/our-courses' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact Us', href: '/contact-us' },
    ],
  },
};

export default config;
