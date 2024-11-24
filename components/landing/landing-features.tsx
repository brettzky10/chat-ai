import { Badge } from "../ui/badge";

export default function LandingFeatures() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center py-10">
              <Badge className="text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-3 text-[#77BA99] dark:text-[#EFF0D1]" variant={"secondary"}>
                Tools
              </Badge>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
                Tools for Growth
              </h3>
              {/* Start - Explain What we do */}
              <p className="items-center text-[#77BA99] dark:text-[#EFF0D1] text-lg mt-5 mx-10">
                Take full control of the customer experience using our toolkit.
              </p>
            </div>
          <div className="py-12 md:py-20">

            
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
  
              {/* 1st item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current text-[#77BA99] " width="64" height="64" rx="32" />
                  <path className="stroke-current " d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                  <path className="stroke-current " d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
                </svg>
                <h4 className="h4 mb-2">Customer Service</h4>
                <p className="text-lg text-gray-400 text-center">Countertop translator for multilingual customer experiences. In-person conversations allow customers to speak their own language and you in yours.</p>
              </div>
  
              {/* 2nd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-[#77BA99] " cx="32" cy="32" r="32" />
                  <path className="stroke-current " strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                  <path className="stroke-current " d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                </svg>
                <h4 className="h4 mb-2">Chat with Employees</h4>
                <p className="text-lg text-gray-400 text-center">Chat with employees or clients in any language. Converting instantly as you chat. No more language barriers.</p>
              </div>
  
              {/* 3rd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current text-[#77BA99] " width="64" height="64" rx="32" />
                  <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <ellipse className="stroke-current " cx="11" cy="11" rx="5.5" ry="11" />
                    <path className="stroke-current " d="M11 0v22M0 11h22" />
                    <circle className="stroke-current " cx="11" cy="11" r="11" />
                  </g>
                </svg>
                <h4 className="h4 mb-2">Bespoke Solutions</h4>
                <p className="text-lg text-gray-400 text-center">Book a consultation with one of our agents and we&apos;ll get to work creating your companies own white label solution with your companies logo.</p>
              </div>
  
            
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }