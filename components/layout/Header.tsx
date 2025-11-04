import Link from 'next/link'
import Image from 'next/image'

/**
 * Header component with navigation
 * Extracted from PowerFlow HTML template
 */
export function Header() {
  return (
    <header className="transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex">
              <div className="de-flex-col">
                {/* Logo */}
                <div id="logo">
                  <Link href="/">
                    <Image 
                      className="logo-main" 
                      src="/images/logo.webp" 
                      alt="PowerFlow" 
                      width={200} 
                      height={50}
                      priority
                    />
                  </Link>
                </div>
              </div>

              <div className="de-flex-col">
                <div className="de-flex-col header-col-mid">
                  {/* Main Navigation */}
                  <ul id="mainmenu">
                    <li>
                      <Link className="menu-item" href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" href="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" href="/schedule">
                        Schedule
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" href="/classes">
                        Classes
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" href="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="de-flex-col">
                <Link className="btn-main fx-slide w-100" href="/join">
                  <span>Join Now</span>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <span id="menu-btn"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
