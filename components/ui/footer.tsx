import Image from 'next/image'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className='border-t border-gray-200' id='contact'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16'>
          <div>
            <div className='flex items-center text-gray-900'>
              <Logo />
              <div className='ml-4'>
                <h3 className='text-base font-semibold'>ApexTradingBot</h3>
                <p className='mt-1 text-sm'>Stay Competitive: Optimize Investments</p>

              </div>

            </div>
            <nav className='mt-11 flex gap-8 sm:items-end sm:justify-items-end'>
              <a href="#home" className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0'>
                <span className=' relative z-10'>Home</span>
              </a>
              <a href="#about" className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0'>
                <span className=' relative z-10'>About</span>
              </a>
              <a href="#price" className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0'>
                <span className=' relative z-10'>Pricing</span>
              </a>
              <a href="#faq" className='relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0'>
                <span className=' relative z-10'>FAQs</span>
              </a>
            </nav>
          </div>
          <div className='group relative -mx-4 sm:flex hidden items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6 cursor-pointer'>
          <Image
          src="/images/logo.png" // Path to your image file (relative to the public folder)
          alt="Apex Trading Bots" // Alt text for accessibility
          width={200} // Width in pixels
          height={200} // Height in pixels
        />

          </div>

        </div>

        <div className='flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6'>
          <form action="" className='flex w-full justify-center md:w-auto'>
            <div className='w-60 min-w-0 shrink'>
              <input type="email" name="" id="" placeholder='Email Address' autoComplete='email' className='block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm' />

            </div>
            <button type="submit" className='inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-800 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none'>
                Join Our Newsletter
            </button>

          </form>

          <p className='mt-6 text-sm text-gray-500 md:mt-0'></p>
          © Copyright 2024. All rights reserved.
        </div>
      </div>

    </footer>
  )
}
