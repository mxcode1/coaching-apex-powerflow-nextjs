import Link from 'next/link'
import Image from 'next/image'

/**
 * Footer component
 * Extracted from PowerFlow HTML template
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="row gx-5">
          {/* About Section */}
          <div className="col-lg-4 col-sm-6">
            <Image 
              src="/images/logo.webp" 
              className="w-250px" 
              alt="PowerFlow" 
              width={250} 
              height={62}
            />
            <div className="spacer-20"></div>
            <p>
              Transform your lifestyle with our expert gym services! From strength training to group classes, 
              we help you achieve your fitness goals with personalized, results-driven programs. Professional, 
              reliable, and passionate about your health—let us guide you to a stronger, healthier you.
            </p>

            <div className="social-icons mb-sm-30">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Company</h5>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/classes">Programs</Link></li>
                    <li><Link href="/schedule">Schedule</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Our Services</h5>
                  <ul>
                    <li><Link href="/classes/strength-conditioning">Strength & Conditioning</Link></li>
                    <li><Link href="/classes/personal-training">Personal Training</Link></li>
                    <li><Link href="/classes/hiit-training">HIIT & Group Training</Link></li>
                    <li><Link href="/classes/yoga-flexibility">Yoga & Pilates</Link></li>
                    <li><Link href="/classes/spinning-cycle">Circuit Training</Link></li>
                    <li><Link href="/classes/boxing-martial-arts">Athletic Performance</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <div className="fw-bold text-white">
                <i className="icofont-clock-time me-2 id-color"></i>We're Open
              </div>
              Monday - Sunday 06.00 - 23.00

              <div className="spacer-20"></div>

              <div className="fw-bold text-white">
                <i className="icofont-location-pin me-2 id-color"></i>Our Location
              </div>
              100 S Main St, New York, NY

              <div className="spacer-20"></div>

              <div className="fw-bold text-white">
                <i className="icofont-envelope me-2 id-color"></i>Send a Message
              </div>
              contact@powerflow.com
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  Copyright {currentYear} - PowerFlow by Designesia
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item"><Link href="/terms">Terms & Conditions</Link></li>
                  <li className="list-inline-item"><Link href="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
