'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
// Import ApexTradingBot from '@/public/images/logo.png'
import ApexTradingBot from '@/public/images/logo.png'
import Optimal from '@/public/images/opt.jpg'
import Risk from '@/public/images/risk.jpg'
import Started from '@/public/images/start.jpg'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesBg1 from '@/public/images/features-bg1.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function Features() {

  const [tab, setTab] = useState<number>(0)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative" id='about'>

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-[#1E293B]">Explore our solutions</h1>
            <p className="text-xl text-gray-600">High-performing trading bots with profitable track records.</p>
          </div>
          {/* <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl'>
                  <h3 className="h3 mb-3">About ApexTradingBot</h3>
                  <p className="text-xl text-gray-600">We understand the intricacies of navigating financial markets.
                    For this reason, we have developed a variety of cutting-edge bots that are meant to provide traders of all levels with the tools they require to be successful in their trading endeavours.</p>
                </div>

              </div> */}

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6 ">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
             

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 0 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gradient-to-r from-gray-900 to-[#1E293B] border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(0); }}
                >
                  <div>
                    <div className={`font-bold leading-snug tracking-tight mb-1 text-gray-500
                    `}>Optimal performance</div>
                    <div className={`${tab !== 0 ? 'text-gray-600' : 'text-gray-200'}`}>ApexTradingBot has demonstrated an impressive 80% victory rate in testing.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gradient-to-r from-gray-900 to-[#1E293B] border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-500">Risk management filter</div>
                    <div className={`${tab !== 1 ? 'text-gray-600' : 'text-gray-200'}`}>Using ApexTradingBot, you may select your lotsize based on your risk tolerance; it is also compatible with prop firms.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gradient-to-r from-gray-900 to-[#1E293B] border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-500">Fully Automated</div>
                    <div className={`${tab !== 2 ? 'text-gray-600' : 'text-gray-200'}`}>All transactions are automatically opened and handled with ApexTradingBot, ensuring a healthy risk-to-reward ratio.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gradient-to-r from-gray-900 to-[#1E293B] border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-gray-500">Get started with a free trial</div>
                    <div className={`${tab !== 3 ? 'text-gray-600' : 'text-gray-200'}`}>You are in doubt? ApexTradingBot comes with a free trial to proof our perfomance when you register with our affiliate broker</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current  shrink-0 " viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" fill="#191919" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 0}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded sm:mt-12" src={Optimal} width={500} height="462" alt="Features bg" />
                      {/* <Image className="md:max-w-none absolute w-full left-0 mt-24 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                      <Image className="md:max-w-none absolute w-full left-0 mt-48 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                     <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded sm:mt-12" src={Risk} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 mt-24 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                      <Image className="md:max-w-none absolute w-full left-0 mt-48 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                     <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded sm:mt-24" src={FeaturesBg1} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 mt-24 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                      <Image className="md:max-w-none absolute w-full left-0 mt-48 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                  {/* Item 4 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                     <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded sm:mt-12" src={Started} width={500} height="462" alt="Features bg" />
                      {/* <Image className="md:max-w-none absolute w-full left-0 mt-24 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                      <Image className="md:max-w-none absolute w-full left-0 mt-48 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}