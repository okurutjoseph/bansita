'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* First Section - Text Left, Image Right */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
              <p className="text-gray-700 mb-4">
                At Bansita, we believe in the transformative power of fitness and style coming together. Founded with a vision to revolutionize athletic wear, we've grown from a small startup to a global community of fitness enthusiasts.
              </p>
              <p className="text-gray-700">
                Our mission is simple: to create the most innovative, high-quality fitness apparel that empowers you to push your limits and achieve your goals. Every piece we design is crafted with purpose, combining cutting-edge technology with contemporary style.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/about-1.avif"
                alt="About Bansita"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Image Left, Text Right */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] order-2 md:order-1">
              <Image
                src="/images/about-2.avif"
                alt="Our Quality"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">OUR QUALITY</h2>
              <p className="text-gray-700 mb-4">
                Quality is at the heart of everything we do. Each garment is carefully crafted using premium materials and innovative manufacturing techniques to ensure durability, comfort, and performance.
              </p>
              <p className="text-gray-700">
                We work closely with professional athletes and fitness experts to test and refine our products, ensuring they meet the highest standards of performance and style. Our commitment to quality extends beyond our products to every aspect of our business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Text Left, Image Right */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">OUR COMMUNITY</h2>
              <p className="text-gray-700 mb-4">
                The Bansita community is what drives us forward. We're more than just a clothing brand – we're a global movement of individuals committed to living healthier, more active lives.
              </p>
              <p className="text-gray-700">
                Through our events, social media platforms, and ambassador program, we create spaces for fitness enthusiasts to connect, share experiences, and inspire each other to reach new heights in their fitness journeys.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/about-3.avif"
                alt="Our Community"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 