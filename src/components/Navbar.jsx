import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import iconMenu from "/images/icon-hamburger.svg"
import iconclose from "/images/icon-close.svg"
import logo from "/images/logo.svg"

const Navbar = () => {

    const navigation = [
        { name: ' About', href: '#', current: false },
        { name: 'Careers', href: '#', current: false },
        { name: 'Events', href: '#', current: false },
        { name: 'Products', href: '#', current: false },
        { name: 'Support', href: '#', current: false },
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <Disclosure as="nav" className="bg-bg-Mobile sm:bg-bg-Desktop h-74">
      {({ open }) => (
        <div className='px-8 py-4'>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center text-white">
              <div className="flex flex-1 items-center justify-between w-full sm:w-auto">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="nav-link"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <img src={iconclose} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <img src={iconMenu} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-Black">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          <div className='sm:w-64 mt-10 ml-4 p-4 border-2 border-White mb-4'>
            <p className='text-2xl text-White uppercase'>Immersive experiences that deliver</p>
          </div>
        </div>
      )}
    </Disclosure>
    )
}

export default Navbar
