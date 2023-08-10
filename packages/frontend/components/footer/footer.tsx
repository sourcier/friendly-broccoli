const navigation = {
  year: 2023,
  company: 'Sourcier Ltd.',
  main: [
    { name: 'About', href: '#' },
    { name: 'Academy', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-5 lg:px-8">
        <nav
          className="-mb-6 columns-1 sm:flex text-center sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy;
          {' '}
          {navigation.year}
          {' '}
          {navigation.company}
          {' '}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
