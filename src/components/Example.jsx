import React from "react";

const Example = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Landing Page</h1>
        </div>
      </header>
      <main>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Welcome to Our Website
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                This is a simple landing page built with Tailwind CSS and
                Next.js.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">Feature 1</h3>
                <p className="mt-4 text-gray-600">Description of feature 1.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">Feature 2</h3>
                <p className="mt-4 text-gray-600">Description of feature 2.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">Feature 3</h3>
                <p className="mt-4 text-gray-600">Description of feature 3.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600">
                We offer a wide range of services to meet your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">Service 1</h3>
                <p className="mt-4 text-gray-600">Description of service 1.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">Service 2</h3>
                <p className="mt-4 text-gray-600">Description of service 2.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">Service 3</h3>
                <p className="mt-4 text-gray-600">Description of service 3.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                Get in touch with us for more information.
              </p>
            </div>
            <div className="mt-8">
              <form className="max-w-lg mx-auto">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your message"
                    rows="4"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Example;
