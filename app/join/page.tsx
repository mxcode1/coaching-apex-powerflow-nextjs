import JoinForm from '@/components/forms/JoinForm'
import { getPricingPlans } from '@/lib/content'
import Link from 'next/link'

export default async function JoinPage() {
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
          <h1 className="fw-bold mb-2">Join PowerFlow</h1>
          <p className="lead">Start your fitness journey today</p>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="text-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <img src="/images/misc/c2.webp" className="w-100" alt="Join PowerFlow" />
            </div>
            <div className="col-lg-6">
              <JoinForm />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="bg-dark-2 text-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Membership Plans</h2>
            <p>Choose the plan that works best for you</p>
          </div>
          <div className="row g-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="relative bg-dark-3 rounded-3 p-40 h-100">
                  {plan.featured && (
                    <div className="absolute top-0 end-0 mt-3 me-3">
                      <span className="badge bg-color">Most Popular</span>
                    </div>
                  )}
                  <h3 className="mb-3">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="fs-1 fw-bold">${plan.price}</span>
                    <span className="text-gray">{plan.durationUnit}</span>
                  </div>
                  <p className="text-gray mb-4">{plan.tagline}</p>
                  <ul className="list-unstyled mb-4">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="mb-2">
                        <i className="icofont-check-circled id-color me-2"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link href="#join_form" className="btn-main w-100 text-center">
                    <span>Select Plan</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="text-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Join PowerFlow?</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="icofont-users-social fs-1 id-color mb-3"></i>
                <h4>Expert Trainers</h4>
                <p>
                  Work with certified professionals who are passionate about helping you achieve your
                  goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="icofont-dumbbell fs-1 id-color mb-3"></i>
                <h4>Modern Equipment</h4>
                <p>
                  Access state-of-the-art facilities and cutting-edge training equipment.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <i className="icofont-heart-alt fs-1 id-color mb-3"></i>
                <h4>Supportive Community</h4>
                <p>Join a welcoming community that motivates and inspires you every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
