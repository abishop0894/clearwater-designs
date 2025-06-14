import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
        <div className="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Contact Us</h2>
          <p className="mb-16 font-light text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>
      </div>

      <div className="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6">
        <form
          action="#"
          className="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Bonnie"
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Green"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="number"
              id="phone-number"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="+12 345 6789"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
            <p className="mt-4 text-sm text-gray-500">
              By submitting this form you agree to our{' '}
              <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">
                terms and conditions
              </a>{' '}
              and our{' '}
              <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">
                privacy policy
              </a>{' '}
              which explains how we may collect, use and disclose your personal information including to third parties.
            </p>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>

        <div className="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
          {/* Email */}
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Email us:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Email us for general queries, including marketing and partnership opportunities.
            </p>
            <a href="mailto:abc@example.com" className="font-semibold text-primary-600 dark:text-primary-500 hover:underline">
              hello@clearwaterdisplays.com
            </a>
          </div>

          {/* Call */}
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Call us:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Call us to speak to a member of our team. We are always happy to help.</p>
            <span className="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</span>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
