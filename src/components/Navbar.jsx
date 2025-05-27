import React from 'react';

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:ml-6 sm:flex justify-between">
              <div className="flex space-x-4">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'contact', label: 'Contact Us' },
                ].map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleScroll(e, id)}
                    className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-blue-700 hover:text-white cursor-pointer"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-900 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
            >
              <div>
                <div className="flex shrink-0 items-center text-white gap-5">
                  <div className="hover:text-blue-600">+19408081569</div>
                </div>
              </div>
            </button>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-lg bg-blue-600 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2
                p-2 focus:ring-offset-gray-800 text-white hover:bg-blue-800 focus:outline-none"
                >
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
