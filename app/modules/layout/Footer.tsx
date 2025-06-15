import { 
  EnvelopeIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid'

const navigation = {

 
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: BuildingOfficeIcon },
    { name: 'Instagram', href: '#', icon: GlobeAltIcon },
    { name: 'X', href: '#', icon: UserGroupIcon },
    { name: 'GitHub', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'YouTube', href: '#', icon: EnvelopeIcon },
  ],
}

const sections = [
  { title: 'Company', items: navigation.company },
  { title: 'Legal', items: navigation.legal },
]

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div>
            <h2 className="text-base/7 font-semibold text-indigo-400">Get started</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Boost your productivity. Start using our app today.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-400">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get started
            </a>
          </div>
        </div>
        
        <div className="mt-24 border-t border-white/10 pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            alt="Company name"
            src="https://jrdisplays.s3.us-east-1.amazonaws.com/clearwater-designs/noBgColor_2.png"
            className="h-[200px] w-[200px]"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {sections.map((section, index) => (
              <div key={section.title} className={index % 2 === 0 ? "md:grid md:grid-cols-2 md:gap-8" : ""}>
                <div className={index % 2 === 1 ? "mt-10 md:mt-0" : ""}>
                  <h3 className="text-sm/6 font-semibold text-white">{section.title}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex gap-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}