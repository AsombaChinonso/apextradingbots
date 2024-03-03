export default function FeaturesBlocks() {
  return (
    <section className="relative" id="price">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-6">
            <h2 className="h2 mb-4 text-[#1E293B]">Flat pricing, no management fees.</h2>
            <p className="text-xl text-gray-600">Regardless of who you are, we’ve got a plan for you.</p>
          </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3"  data-aos="zoom-y-out">

          {/* Pricing 1 */}
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
            <h3 className="flex items-center text-sm font-semibold text-gray-900">Free</h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">0$</p>
            <p className="mt-3 text-sm text-gray-700">Get started for free.</p>
            <div className="order-last mt-6">
              <ul role="list" className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
                <li className="flex py-2">
                  <span className="ml-4">Full EA features</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">lifetime updates</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">7 - 10% monthly</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">MT4 or MT5</span>
                </li>
              </ul>
            </div>
            <a href="" className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-[#1E293B] text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6" aria-label="Get started with the Starter plan for [object Object]"  >Get started for free</a>
          </section>

          {/* Pricing 2 */}
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
            <h3 className="flex items-center text-sm font-semibold text-gray-900">Currency Pair</h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">499.99$</p>
            <p className="mt-3 text-sm text-gray-700">Get started for free.</p>
            <div className="order-last mt-6">
              <ul role="list" className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
                <li className="flex py-2">
                  <span className="ml-4">Full EA features</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">lifetime updates</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">7 - 10% monthly</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">MT4 or MT5</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">Plus more</span>
                </li>
              </ul>
            </div>
            <a href="" className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-[#1E293B] text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6" aria-label="Get started with the Starter plan for [object Object]"  >Get started for free</a>
          </section>

          {/* Pricing 3 */}
          <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-[#1E293B]">
            <h3 className="flex items-center text-sm font-semibold text-gray-300">XAUUSD</h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-gray-200">999.99$</p>
            <p className="mt-3 text-sm text-gray-300">Get started for free.</p>
            <div className="order-last mt-6">
              <ul role="list" className="-my-2 divide-y text-sm divide-gray-200 text-gray-300">
                <li className="flex py-2">
                  <span className="ml-4">Full EA features</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">lifetime updates</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">7 - 10% monthly</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">MT4 or MT5</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">Premium packages</span>
                </li>
                <li className="flex py-2">
                  <span className="ml-4">Plus more</span>
                </li>
              </ul>
            </div>
            <a href="" className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-[#228C65] text-white hover:bg-[#205a47] active:bg-gray-800 active:text-white/80 mt-6" aria-label="Get started with the Starter plan for [object Object]"  >Get started for free</a>
          </section>
        </div>

        </div>
      </div>
    </section>
  )
}