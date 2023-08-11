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
};

const config: Config = {
  company: 'Sourcier Ltd.',
  copyright: '© 2021 Sourcier Ltd. All rights reserved',
  navigation: {
    main: [
      { name: 'About', href: '#' },
      { name: 'Academy', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
};

export default config;
