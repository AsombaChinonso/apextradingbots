import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Disclaimer() {
  return (
    <section className="relative bg-[#1E293B]" id='faq' >

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-2 md:pb-4">
            <h2 className="h2 mb-4 text-gray-100">Disclaimer</h2>
            {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out">Do you have enquires about our services or anything else you want to ask, reach out to us.</p> */}
          </div>

          <ul role='list' className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-8 lg:max-w-none lg:grid-cols-2 text-gray-300'>
            <li>
              {/* <h3 className='text-lg font-semibold leading-6 text-gray-900'>How long will my subscription last?</h3> */}
              <p className=' mb-4'>This website is not a part of the Facebook website, Facebook Inc. It is also not part of the Google Website or Alphabet Inc. Additionally, this site is not endorsed by Facebook or Google in any way. FACEBOOK and GOOGLE is a trademark of META Inc and ALPHABET INC respectively. </p>
              <p className='mt-4 mb-4'>The information on the apextradingbots.com website and inside our community platform is intended for educational purposes and is not to be construed as investment advice. Trading the financial markets carries a high level of risk and may not be suitable for all investors. </p>
              
            </li>
            <li>
            <p>Before trading, you should carefully consider your investment objectives, experience, and risk appetite. Only trade with money you are prepared to lose. Like any investment, there is a possibility that you could sustain losses of some or all of your investment whilst trading. You should seek independent advice before trading if you have any doubts. Past performance in the markets is not a reliable indicator of future performance.</p>
              {/* <h3 className='text-lg font-semibold leading-6 text-gray-900'>Is there a free trial available?</h3> */}
              <p className='mt-4 mb-4'>apextradingbots.com takes no responsibility for loss incurred as a result of the content provided inside our Trading Community. By signing up as a member you acknowledge that we are not providing financial advice and that you are making the decision on the trades you place in the markets. We have no knowledge of the level of money you are trading with or the level of risk you are taking with each trade.</p>
            </li>
            
          </ul>

         
          

        </div>
      </div>
    </section>
  )
}