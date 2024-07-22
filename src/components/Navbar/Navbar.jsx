import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Company', href: '/company', current: false },
  {
    name: 'Bright Sand Canada',
    href: '/brightsandcanada',
    current: false,
  },
  {
    name: 'Bright Sand Inc.',
    href: '/brightsandinc',
    current: false,
  },
  {
    name: 'Bright Sand Industries Inc.',
    href: '/brightsandindustriesinc',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <Disclosure
      as="nav"
      className={`bg-gray-50 bg-opacity-80 tracking-wider fixed w-full z-20 transition-transform duration-300 font-changa ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <h1 className="text-3xl text-gray-500 tracking-tight">
                    <a href="/">Bright Sand Group</a>
                  </h1>
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-gray-400 text-gray-200'
                        : 'text-gray-400 hover:bg-gray-100 hover:gray-400',
                      'px-3 py-2 rounded-md text-lg font-light'
                    )}
                    aria-current={
                      location.pathname === item.href
                        ? 'page'
                        : undefined
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-gray-400 text-gray-200'
                      : 'text-gray-400 hover:bg-gray-100 hover:gray-400',
                    'block px-3 py-2 rounded-md text-base'
                  )}
                  aria-current={
                    location.pathname === item.href
                      ? 'page'
                      : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
