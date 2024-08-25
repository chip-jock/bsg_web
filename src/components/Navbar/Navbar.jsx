import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '/src/assets/bsg-logo-nobg.png';

const navigation = [
  { name: 'Company History', href: '/company', current: false },
  { name: 'divider-0', divider: true }, // Divider entry
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
  { name: 'divider-1', divider: true }, // Divider entry

  { name: 'White Papers', href: '/whitepapers', current: false },
  { name: 'Consulting', href: '/consulting', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Vertical Navbar for xl and larger screens */}
      <div className="fixed top-0 left-0 w-full lg:w-80 lg:h-full z-20 bg-gray-50 transition-transform duration-300">
        <Disclosure as="nav" className="tracking-wider font-changa">
          {({ open }) => (
            <>
              <div className="lg:flex lg:flex-col h-full w-full lg:w-80">
                <div className="flex items-center justify-between px-4 lg:flex-col lg:items-start lg:justify-start whitespace-nowrap">
                  <div className="flex-shrink-0 min-w-0 flex flex-row items-center">
                    <a href="/">
                      <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-16 object-contain cursor-pointer" // Adjust width and height
                      />
                    </a>
                    <a href="/">
                      <h1 className="text-2xl text-black tracking-tight overflow-hidden text-ellipsis ml-2">
                        Bright Sand Group
                      </h1>
                    </a>
                  </div>
                  <div className="lg:hidden">
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
                <div className="hidden lg:flex lg:flex-col lg:flex-grow lg:overflow-y-auto">
                  <div className="px-4">
                    {navigation.map((item, index) => (
                      <React.Fragment key={item.name}>
                        {item.divider ? (
                          <div className="my-2 border-t border-gray-300" />
                        ) : (
                          <Link
                            to={item.href}
                            className={classNames(
                              location.pathname === item.href
                                ? 'bg-gray-300 text-gray-100'
                                : 'text-black hover:bg-gray-200 hover:gray-400',
                              'block px-3 py-2 rounded-md text-lg font-light whitespace-nowrap'
                            )}
                            aria-current={
                              location.pathname === item.href
                                ? 'page'
                                : undefined
                            }
                          >
                            {item.name}
                          </Link>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Navbar for screens up to lg */}
              <Disclosure.Panel className="lg:hidden">
                <div className="flex flex-col bg-gray-50 space-y-1 px-2 pb-3 pt-2">
                  <div className="flex items-center justify-between "></div>
                  <div className="space-y-1">
                    {navigation.map((item, index) => (
                      <React.Fragment key={item.name}>
                        {item.divider ? (
                          <div className="my-2 border-t border-gray-300" />
                        ) : (
                          <Disclosure.Button
                            as={Link}
                            to={item.href}
                            className={classNames(
                              location.pathname === item.href
                                ? 'bg-gray-300 text-gray-100'
                                : 'text-black hover:bg-gray-200 hover:gray-400',
                              'block px-3 py-2 rounded-md text-lg font-light whitespace-nowrap'
                            )}
                            aria-current={
                              location.pathname === item.href
                                ? 'page'
                                : undefined
                            }
                          >
                            {item.name}
                          </Disclosure.Button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="pt-16 lg:pt-0 lg:pl-80">
        {/* This div reserves space for the navbar */}
      </div>
    </>
  );
};

export default Navbar;
