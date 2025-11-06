import { getHomepage, getTestimonials, getPricingPlans } from '@/lib/content'
import Link from 'next/link'

export default async function HomePage() {
  const homepage = await getHomepage()
  const testimonials = await getTestimonials()
  const pricingPlans = await getPricingPlans()

  return (
    <>
      {/* Hero Section */}
      <section 
        className="text-light relative" 
        style={{ 
          backgroundImage: `url(${homepage.hero.backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="container relative z-2">
          <div className="row g-4">
            <div className="col-xl-6 col-lg-6">
              <div className="spacer-double"></div>
              <h1 className="wow fadeInUp">{homepage.hero.title}</h1>
              <p className="me-lg-5 mb-4 wow fadeInUp">{homepage.hero.description}</p>
              
              <div className="d-flex align-items-center">
                <Link className="btn-main fx-slide me-4" href={homepage.hero.ctaPrimaryLink}>
                  <span>{homepage.hero.ctaPrimaryText}</span>
                </Link>
                {homepage.hero.videoUrl && (
                  <a className="de-flex align-items-center text-white" href={homepage.hero.videoUrl}>
                    <div className="btn-play sm circle"><span></span></div>
                    <div className="ms-3 fw-bold">{homepage.hero.ctaSecondaryText || 'Watch Video'}</div>
                  </a>
                )}
              </div>
              
              <div className="spacer-single"></div>
              <div className="d-flex align-items-center">
                <div className="relative me-4">
                  {homepage.hero.memberImages.map((img, i) => (
                    <img key={i} src={typeof img === 'string' ? img : ''} className="w-50px circle ms-min-10" alt="Member" />
                  ))}
                </div>
                <div className="fw-600 fs-14 lh-1-5">
                  <span className="fs-16 fw-bold">{homepage.hero.activeMembersCount}+</span><br/>Active Members
                </div>
              </div>
              <div className="spacer-double"></div>
            </div>
          </div>
        </div>
        <div className="gradient-edge-bottom"></div>
      </section>

      {/* About Section */}
      <section>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="relative">
                <div className="p-4 mt-3 bg-color text-light abs abs-centered rounded-1 text-center z-2">
                  <h1 className="fs-72 mb-1">{homepage.about.yearsOfExperience}</h1>
                  <div className="fs-16 lh-1-5">Years of Experience</div>
                </div>
                <div className="row g-4">
                  {homepage.about.images.slice(0, 2).map((img, i) => (
                    <div key={i} className="col-md-6">
                      <div className="relative rounded-1 overflow-hidden">
                        <img src={typeof img === 'string' ? img : ''} className="w-100" alt="About" />
                        <div className="de-overlay-gradient-color h-50 top-50"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ms-lg-4">
                <div className="subtitle id-color mb-3">{homepage.about.subtitle}</div>
                <h2>{homepage.about.title}</h2>
                <p>{homepage.about.description}</p>
                <Link className="btn-main fx-slide mb10 mb-3" href={homepage.about.ctaLink}>
                  <span>{homepage.about.ctaText}</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="spacer-double"></div>
          
          {/* Stats */}
          <div className="row g-4">
            {homepage.stats.map((stat, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="de_count text-center fs-15">
                  <h3 className="fs-48 mb-1">
                    <span>{stat.value}</span>
                    {stat.suffix && <span className="id-color">{stat.suffix}</span>}
                  </h3>
                  <div className="fs-15">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-color text-light">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12 text-center">
                <h2>What Our Members Say</h2>
              </div>
            </div>
            <div className="row g-4">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.id} className="col-lg-4">
                  <div className="de-box mb-0 p-4">
                    <div className="d-stars id-color d-block mb-3">
                      {[...Array(t.rating)].map((_, i) => <i key={i} className="icofont-star"></i>)}
                    </div>
                    <h4 className="mb-3">{t.quote}</h4>
                    <span className="fw-600">{t.author}</span>
                    {t.location && <span className="fs-14 d-block">{t.location}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {pricingPlans.length > 0 && (
        <section>
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12 text-center">
                <h2>Choose Your Plan</h2>
              </div>
            </div>
            <div className="row g-4">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="col-md-4">
                  <div className="relative overflow-hidden h-100 border-white-op-3 rounded-1 bg-blur">
                    <div className="gradient-edge-bottom color op-5"></div>
                    <div className="p-40 pb-80 z-2">
                      <h2 className="fs-32 mb-0">{plan.name}</h2>
                      <div className="mb-4">{plan.tagline}</div>
                      <h3 className="fs-48 id-color mb-4">
                        ${plan.price} <span className="fs-16">{plan.durationUnit}</span>
                      </h3>
                      <h4>Benefits:</h4>
                      <div className="border-white-bottom-op-2 mb-4"></div>
                      <ul className="ul-check mb-4">
                        {plan.benefits.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                    <div className="abs abs-center p-40 pb-30 bottom-0 z-2 w-100 text-center">
                      <Link className="btn-main fx-slide" href={plan.ctaLink}>
                        <span>{plan.ctaText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
