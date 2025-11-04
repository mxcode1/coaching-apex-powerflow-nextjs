import { getServices } from '@/lib/content'
import Link from 'next/link'
import Image from 'next/image'

export default async function ClassesPage() {
  const services = await getServices()

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
          <h1 className="fw-bold mb-2">Our Classes</h1>
          <p className="lead">Find the perfect workout for your goals</p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="text-light">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="relative overflow-hidden rounded-1 hover">
                  <Link href={`/classes/${service.slug}`}>
                    <img
                      src={typeof service.image === 'string' ? service.image : '/images/classes/default.webp'}
                      className="w-100 hover-scale-1-1"
                      alt={service.name}
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <div className="absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-top-dark">
                      <h4 className="mb-2">{service.name}</h4>
                      <p className="mb-2">{service.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-color">{service.duration} mins</span>
                        <span className="text-gray">{service.intensity}</span>
                      </div>
                    </div>
                  </Link>
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
              <h3 className="mb-0 fs-32">Ready to start your fitness journey?</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <Link className="btn-main fx-slide btn-line" href="/join">
                <span>Join Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
