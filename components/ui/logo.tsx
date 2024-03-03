import Link from 'next/link'
import Image from 'next/image'


export default function Logo() {
  return (
    <a href="#home" className="block" aria-label="Cruip">
      <div className=' flex flex-row justify-center items-center gap-3'>
        <Image
          src="/images/flav.png" // Path to your image file (relative to the public folder)
          alt="Apex Trading Bots" // Alt text for accessibility
          width={64} // Width in pixels
          height={64} // Height in pixels
        />
        {/* <h2 className=' h4 font-bolder sm:text-xl lg:text-2xl'>ApexTradingBot</h2> */}
      </div>


      {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
            <stop stopColor="#4FD1C5" offset="0%" />
            <stop stopColor="#81E6D9" offset="25.871%" />
            <stop stopColor="#338CF5" offset="100%" />
          </radialGradient>
        </defs>
        <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
      </svg> */}
    </a>
  )
}
