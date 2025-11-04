import { getPricingPlans } from '@/lib/content'
import Link from 'next/link'

export default async function PricingPage() {
  const pricingPlans = await getPricingPlans()

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-light jarallax"
        style={{
          backgroundImage: 'url(/images/background/6.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 0 80px',
        }}
      >
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <div className="sw-overlay op-8"></div>
        <div className="container relative z-2 text-center">
          <h1 className="fw-bold mb-2">Membership Plans</h1>
          <p className="lead">Choose the plan that fits your lifestyle</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="text-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {pricingPlans.map((plan, index) => (
              <div key={plan.id} className="col-lg-4 col-md-6">
                <div className={`relative bg-dark-3 rounded-3 p-40 h-100 ${plan.featured ? 'border-color' : ''}`}>
                  {plan.featured && (
                    <div className="absolute top-0 end-0 mt-3 me-3">
                      <span className="badge bg-color">Most Popular</span>
                    </div>
                  )}
                  <h3 className="mb-2">{plan.name}</h3>
                  <p className="text-gray mb-4">{plan.tagline}</p>
                  <div className="mb-4">
                    <span className="fs-1 fw-bold id-color">${plan.price}</span>
                    <span className="text-gray">{plan.durationUnit}</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    {(plan.benefits || []).map((benefit, i) => (
                      <li key={i} className="mb-3">
                        <i className="icofont-check-circled id-color me-2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link href="/join" className="btn-main w-100 text-center">
                    <span>{plan.ctaText}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-dark-2 text-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What's Included</h2>
            <p>All our memberships include these amazing features</p>
          </div>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-center p-3">
                <i className="icofont-gym-alt-1 fs-1 id-color mb-3"></i>
                <h5>Full Gym Access</h5>
                <p className="text-gray">State-of-the-art equipment</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-3">
                <i className="icofont-users-social fs-1 id-color mb-3"></i>
                <h5>Group Classes</h5>
                <p className="text-gray">Unlimited class participation</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-3">
                <i className="icofont-dumbbell fs-1 id-color mb-3"></i>
                <h5>Free Weights Area</h5>
                <p className="text-gray">Complete strength training zone</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-3">
                <i className="icofont-heart-alt fs-1 id-color mb-3"></i>
                <h5>Wellness Support</h5>
                <p className="text-gray">Nutrition & recovery guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-color text-light pt-50 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Still have questions about our plans?</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <Link className="btn-main fx-slide btn-line" href="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
