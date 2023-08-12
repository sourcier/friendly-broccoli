import type { HeroProps } from './components/server/hero';

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
  homepage: {
    hero: {
      title: 'Lorem ipsum sit amet ullamco',
      subTitle:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      image: {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
        alt: '',
      },
    },
  },
};

export default config;
