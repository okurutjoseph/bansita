'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full bg-background border-t border-foreground/[.08] pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* HELP Section */}
          <div>
            <h3 className="font-montserrat text-sm font-medium mb-4">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-foreground/70">FAQ</Link></li>
              <li><Link href="/delivery-information" className="hover:text-foreground/70">Delivery Information</Link></li>
              <li><Link href="/returns-policy" className="hover:text-foreground/70">Returns Policy</Link></li>
              <li><Link href="/make-a-return" className="hover:text-foreground/70">Make A Return</Link></li>
              <li><Link href="/orders" className="hover:text-foreground/70">Orders</Link></li>
              <li><Link href="/submit-fake" className="hover:text-foreground/70">Submit a Fake</Link></li>
            </ul>
          </div>

          {/* MY ACCOUNT Section */}
          <div>
            <h3 className="font-montserrat text-sm font-medium mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="hover:text-foreground/70">Login</Link></li>
              <li><Link href="/register" className="hover:text-foreground/70">Register</Link></li>
            </ul>
          </div>

          {/* PAGES Section */}
          <div>
            <h3 className="font-montserrat text-sm font-medium mb-4">PAGES</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/refer-friend" className="hover:text-foreground/70">Refer a Friend</Link></li>
              <li><Link href="/gymshark-central" className="hover:text-foreground/70">Gymshark Central</Link></li>
              <li><Link href="/about-us" className="hover:text-foreground/70">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-foreground/70">Careers</Link></li>
              <li><Link href="/student-discount" className="hover:text-foreground/70">Student Discount</Link></li>
              <li><Link href="/military-discount" className="hover:text-foreground/70">Military Discount</Link></li>
              <li><Link href="/accessibility" className="hover:text-foreground/70">Accessibility Statement</Link></li>
              <li><Link href="/factory-list" className="hover:text-foreground/70">Factory List</Link></li>
              <li><Link href="/sustainability" className="hover:text-foreground/70">Sustainability</Link></li>
            </ul>
          </div>

          {/* MORE ABOUT BANSITA Section */}
          <div>
            <h3 className="font-montserrat text-sm font-medium mb-4">MORE ABOUT BANSITA</h3>
            <div className="space-y-4">
              <Link href="/blog" className="block">
                <div className="bg-foreground/[.02] p-4 rounded-lg">
                  <Image
                    src="/images/bansita.svg"
                    alt="BLOG"
                    width={100}
                    height={32}
                    className="mb-2"
                  />
                  <span className="text-sm">BLOG</span>
                </div>
              </Link>
              <Link href="/email-signup" className="block">
                <div className="bg-foreground/[.02] p-4 rounded-lg">
                  <Image
                    src="/images/bansita.svg"
                    alt="EMAIL SIGN UP"
                    width={100}
                    height={32}
                    className="mb-2"
                  />
                  <span className="text-sm">EMAIL SIGN UP</span>
                </div>
              </Link>
              <Link href="/training" className="block">
                <div className="bg-foreground/[.02] p-4 rounded-lg">
                  <Image
                    src="/images/bansita.svg"
                    alt="BANSITA TRAINING"
                    width={100}
                    height={32}
                    className="mb-2"
                  />
                  <span className="text-sm">BANSITA TRAINING</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods and Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Payment Methods */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <Image src="/images/visa.svg" alt="Visa" width={38} height={24} />
            <Image src="/images/mastercard.svg" alt="Mastercard" width={38} height={24} />
            <Image src="/images/paypal.svg" alt="PayPal" width={38} height={24} />
            <Image src="/images/apple-pay.svg" alt="Apple Pay" width={38} height={24} />
            <Image src="/images/klarna.svg" alt="Klarna" width={38} height={24} />
            <Image src="/images/amex.svg" alt="American Express" width={38} height={24} />
            <Image src="/images/afterpay.svg" alt="Afterpay" width={38} height={24} />
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link href="https://discord.gg/bansita" className="hover:text-foreground/70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </Link>
            <Link href="https://facebook.com/bansita" className="hover:text-foreground/70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="https://pinterest.com/bansita" className="hover:text-foreground/70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174c-.105-.949-.2-2.405.041-3.441c.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914c1.023 0 1.518.769 1.518 1.69c0 1.029-.655 2.568-.994 3.995c-.283 1.194.599 2.169 1.777 2.169c2.133 0 3.772-2.249 3.772-5.495c0-2.873-2.064-4.882-5.012-4.882c-3.414 0-5.418 2.561-5.418 5.207c0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161c-1.499-.698-2.436-2.889-2.436-4.649c0-3.785 2.75-7.262 7.929-7.262c4.163 0 7.398 2.967 7.398 6.931c0 4.136-2.607 7.464-6.227 7.464c-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12c0-6.628-5.373-12-12-12z"/></svg>
            </Link>
            <Link href="https://youtube.com/bansita" className="hover:text-foreground/70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
            <Link href="https://instagram.com/bansita" className="hover:text-foreground/70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
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