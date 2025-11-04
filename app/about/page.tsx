import { getAbout } from '@/lib/content'
import Link from 'next/link'
import Image from 'next/image'

export default async function AboutPage() {
  const about = await getAbout()

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative text-light jarallax" 
        style={{ 
          backgroundImage: `url(${about.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 0 80px'
        }}
      >
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <div className="container relative z-2 text-center">
          <h1 className="fw-bold mb-2">{about.hero.title}</h1>
          <p className="lead">{about.hero.subtitle}</p>
        </div>
      </section>

      {/* Story Section */}
      <section id="section-about" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4 gx-5">
            
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  {about.story.images[0] && (
                    <img 
                      src={typeof about.story.images[0] === 'string' ? about.story.images[0] : ''} 
                      className="img-fluid rounded-1 mb-4 wow scaleIn" 
                      alt="PowerFlow Gym" 
                    />
                  )}
                  {about.story.stats[0] && (
                    <div className="col-12 text-center">
                      <div className="bg-dark-3 text-light px-4 py-4 rounded-1 wow fadeInLeft">
                        <div className="de_count">
                          <h2 className="mb-0">{about.story.stats[0].value}<span className="id-color"></span></h2>
                          <h5 className="fs-400">{about.story.stats[0].label}</h5>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-6">
                  <div className="spacer-double sm-hide"></div>
                  {about.story.stats[1] && (
                    <div className="col-12 text-center">
                      <div className="bg-color text-light px-4 py-4 rounded-1 wow fadeInRight">
                        <div className="de_count">
                          <h2 className="mb-0">{about.story.stats[1].value}</h2>
                          <h5 className="fs-400">{about.story.stats[1].label}</h5>
                        </div>
                      </div>
                    </div>
                  )}
                  {about.story.images[1] && (
                    <img 
                      src={typeof about.story.images[1] === 'string' ? about.story.images[1] : ''} 
                      className="img-fluid rounded-1 mt-4 wow scaleIn" 
                      alt="PowerFlow Training" 
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subtitle id-color">{about.story.subtitle}</div>
              <h2 className="fw-bold mb-3">{about.story.title}</h2>
              <p>{about.story.description}</p>
              <ul className="ul-check mb-4">
                {about.story.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <Link href="/classes" className="btn-main fx-slide">
                <span>Explore Our Classes</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section 
        className="relative" 
        style={{
          backgroundImage: `url(${about.mission.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="gradient-edge-top"></div>
        <div className="gradient-edge-bottom"></div>
        <div className="sw-overlay op-8"></div>
        <div className="container text-center relative z-2">
          <h2 className="fw-bold mb-4">{about.mission.title}</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-40 bg-blur rounded-1 h-100">
                <h4>{about.mission.mission.title}</h4>
                <p>{about.mission.mission.description}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-40 bg-blur rounded-1 h-100">
                <h4>{about.mission.vision.title}</h4>
                <p>{about.mission.vision.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Core Values</h2>
          <div className="row g-4">
            {about.values.map((value, index) => (
              <div key={index} className="col-md-3">
                <div className="p-3">
                  <i className={`fa ${value.icon} fs-1 id-color mb-3`}></i>
                  <h3 className="fw-bold">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-color text-light pt-50 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">{about.cta.title}</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <Link className="btn-main fx-slide btn-line" href={about.cta.buttonLink}>
                <span>{about.cta.buttonText}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
