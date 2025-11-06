import { getContactInfo } from '@/lib/content'
import Link from 'next/link'
import ContactForm from '@/components/forms/ContactForm'

export default async function ContactPage() {
  const contact = await getContactInfo()

  const locations = [
    {
      city: 'New York',
      address: '350 5th Ave, New York, NY 10118',
      phone: '(212) 555-0134',
      email: 'nyc@powerflow.com',
    },
    {
      city: 'Los Angeles',
      address: '742 S Hill St, Los Angeles, CA 90014',
      phone: '(310) 555-0199',
      email: 'la@powerflow.com',
    },
    {
      city: 'Chicago',
      address: '233 S Wacker Dr, Chicago, IL 60606',
      phone: '(312) 555-0147',
      email: 'chicago@powerflow.com',
    },
    {
      city: 'Houston',
      address: '1200 Louisiana St, Houston, TX 77002',
      phone: '(713) 555-0182',
      email: 'houston@powerflow.com',
    },
    {
      city: 'Miami',
      address: '100 Biscayne Blvd, Miami, FL 33132',
      phone: '(305) 555-0174',
      email: 'miami@powerflow.com',
    },
    {
      city: 'Seattle',
      address: '701 5th Ave, Seattle, WA 98104',
      phone: '(206) 555-0128',
      email: 'seattle@powerflow.com',
    },
  ]

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
        <div className="gradient-edge-bottom"></div>
        <div className="container relative z-2 text-center">
          <h1 className="fw-bold mb-2">Get In Touch</h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-light">
        <div className="container">
          <div className="row g-4">
            {/* Locations */}
            <div className="col-lg-6">
              <div className="row g-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="col-md-6 wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                  >
                    <h4 className="mb-0">{location.city}</h4>
                    {location.address}
                    <br />
                    {location.phone}
                    <br />
                    {location.email}
                    <br />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <p className="col-lg-8 wow fadeInUp">
                Have a question, suggestion, or just want to say hi? We're here and happy to hear from you!
              </p>
              <div className="spacer-single"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-color text-light pt-50 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Ready to take the first step towards your fitness goals?</h3>
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
