export type NavigationLink = {
  id: string;
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
      {
        id: 'a6716ca5-6f22-48db-b464-dbe8ef99638c',
        name: 'About Us',
        href: '/about-us',
      },
      {
        id: '7e560674-74e1-49d7-8814-4982e06c2bd1',
        name: 'Our Courses',
        href: '/our-courses',
      },
      {
        id: '6766b945-f99b-4a29-b7f3-4a03a108c7d4',
        name: 'Blog',
        href: '/blog',
      },
      {
        id: 'b61b4fca-6d15-4bab-ba64-4cbb461ac3ea',
        name: 'Contact Us',
        href: '/contact-us',
      },
    ],
  },
};

export default config;
