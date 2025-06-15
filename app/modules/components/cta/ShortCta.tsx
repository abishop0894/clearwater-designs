import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const comparisons = [
  {
    id: 1,
    category: "Lorem ipsum dolor",
    title: "Consectetur vs Adipiscing",
    href: "#",
    borderColor: "border-primary-600 dark:border-primary-500",
    textColor: "text-primary-600 dark:text-primary-500"
  },
  {
    id: 2,
    category: "Sed do eiusmod tempor", 
    title: "Incididunt vs Labore",
    href: "#",
    borderColor: "border-purple-600 dark:border-purple-500",
    textColor: "text-purple-600 dark:text-purple-500"
  },
  {
    id: 3,
    category: "Ut aliquip ex ea commodo",
    title: "Duis aute vs Irure", 
    href: "#",
    borderColor: "border-teal-600 dark:border-teal-500",
    textColor: "text-teal-600 dark:text-teal-500"
  }
]

export default function ComparisonSection() {
  return (
    <section className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
          <div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </h2>
            <p className="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center font-medium sm:text-lg text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              Lorem ipsum dolor sit amet
              <ChevronRightIcon className="ml-1 w-5 h-5" />
            </a>
          </div>
          
          <div>
            {comparisons.map((comparison, index) => (
              <a 
                key={comparison.id}
                href={comparison.href} 
                className={`flex justify-between items-center p-4 bg-white rounded-lg border-l-8 shadow dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 ${comparison.borderColor} ${index < comparisons.length - 1 ? 'mb-6' : ''}`}
              >
                <div>
                  <span className="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                    {comparison.category}
                  </span>
                  <span className={`text-xl font-semibold ${comparison.textColor}`}>
                    {comparison.title}
                  </span>
                </div>
                <ArrowRightIcon className={`w-6 h-6 ${comparison.textColor}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}