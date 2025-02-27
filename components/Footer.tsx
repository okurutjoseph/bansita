'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full bg-background border-t border-foreground/[.08] pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* HELP Section */}
          <div className="md:col-span-2">
            <h3 className="font-montserrat text-sm font-medium mb-4">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-foreground/70">FAQ</Link></li>
              <li><Link href="/delivery-information" className="hover:text-foreground/70">Delivery Information</Link></li>
              <li><Link href="/returns-policy" className="hover:text-foreground/70">Returns Policy</Link></li>
              <li><Link href="/make-a-return" className="hover:text-foreground/70">Make A Return</Link></li>
              <li><Link href="/orders" className="hover:text-foreground/70">Orders</Link></li>
            </ul>
          </div>

          {/* MY ACCOUNT Section */}
          <div className="md:col-span-2">
            <h3 className="font-montserrat text-sm font-medium mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="hover:text-foreground/70">Login</Link></li>
              <li><Link href="/register" className="hover:text-foreground/70">Register</Link></li>
            </ul>
          </div>

          {/* PAGES Section */}
          <div className="md:col-span-2">
            <h3 className="font-montserrat text-sm font-medium mb-4">PAGES</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gymshark-central" className="hover:text-foreground/70">Bansita Central</Link></li>
              <li><Link href="/about-us" className="hover:text-foreground/70">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-foreground/70">Careers</Link></li>
              <li><Link href="/student-discount" className="hover:text-foreground/70">Contact Us</Link></li>
              <li><Link href="/accessibility" className="hover:text-foreground/70">Accessibility Statement</Link></li>
              <li><Link href="/sustainability" className="hover:text-foreground/70">Sustainability</Link></li>
            </ul>
          </div>

          {/* MORE ABOUT BANSITA Section */}
          <div className="md:col-span-6">
            <h3 className="font-montserrat text-sm font-medium mb-4">MORE ABOUT BANSITA</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/blog" className="block flex-1">
                <div className="p-4 rounded-lg">
                  <Image
                    src="/images/blog.avif"
                    alt="BLOG"
                    width={640}
                    height={360}
                    className="mb-0"
                  />
                  <div className="bg-[#e7e7e7] p-2">
                    <span className="text-sm">BLOG</span>
                  </div>
                </div>
              </Link>
              <Link href="/email-signup" className="block flex-1">
                <div className="p-4 rounded-lg">
                  <Image
                    src="/images/email.avif"
                    alt="EMAIL SIGN UP"
                    width={640}
                    height={360}
                    className="mb-0"
                  />
                  <div className="bg-[#e7e7e7] p-2">
                    <span className="text-sm">EMAIL SIGN UP</span>
                  </div>
                </div>
              </Link>
              <Link href="/training" className="block flex-1">
                <div className="p-4 rounded-lg">
                  <Image
                    src="/images/training.avif"
                    alt="BANSITA TRAINING"
                    width={640}
                    height={360}
                    className="mb-0"
                  />
                  <div className="bg-[#e7e7e7] p-2">
                    <span className="text-sm">BANSITA TRAINING</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods and Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Payment Methods */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <Image src="/images/visa-card.svg" alt="Visa" width={42} height={25} />
            <Image src="/images/mastercard-card.svg" alt="Mastercard" width={42} height={25} />
            <Image src="/images/paypal-card.svg" alt="PayPal" width={42} height={25} />
            <Image src="/images/mtn-mobile-money.svg" alt="MTN" width={42} height={25} />
            <Image src="/images/airtel-money.svg" alt="Airtel" width={42} height={25} />
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com/bansita" className="bg-black rounded-full p-2 hover:bg-black/80">
              <svg className="w-4 h-4 text-white" viewBox="0 0 320 512" fill="currentColor">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </Link>
            <Link href="https://x.com/bansita" className="bg-black rounded-full p-2 hover:bg-black/80">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="https://instagram.com/bansita" className="bg-black rounded-full p-2 hover:bg-black/80">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </Link>
            <Link href="https://tiktok.com/@bansita" className="bg-black rounded-full p-2 hover:bg-black/80">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/[.08]">
          {/* Copyright */}
          <div className="text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Bansita Limited | All Rights Reserved. | We Do Gym.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
            <Link href="/terms" className="hover:text-foreground/70">Terms</Link>
            <Link href="/privacy" className="hover:text-foreground/70">Privacy</Link>
            <Link href="/cookies" className="hover:text-foreground/70">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;