import React from "react";

export default function PunDecorationLandingPage() {
return (
<main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white text-gray-800">
<header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold">PD</div>
<div>
<h1 className="text-xl font-extrabold">Pun Decoration</h1>
<p className="text-sm text-gray-600">Family-owned event decorators — Nepal</p>
</div>
</div>
<nav className="hidden md:flex gap-6 items-center">
<a className="hover:underline" href="#services">Services</a>
<a className="hover:underline" href="#gallery">Gallery</a>
<a className="hover:underline" href="#about">About</a>
<a className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded" href="#contact">Contact</a>
</nav>
<button className="md:hidden p-2">☰</button>
</header>

  <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold leading-tight">Make your moments unforgettable</h2>
      <p className="text-gray-700">
        We are a family-run decoration service based in Nepal. Weddings, birthdays, corporate events — we design and install beautiful setups using flowers, lights, fabrics and bespoke decor.
      </p>
      <div className="flex gap-3">
        <a href="#contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded">Book a free consult</a>
        <a href="#gallery" className="inline-block border border-amber-400 px-5 py-3 rounded">See our work</a>
      </div>
      <ul className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-700">
        <li>✓ Local, trusted family team</li>
        <li>✓ Full setup & teardown</li>
        <li>✓ Custom themes & lighting</li>
        <li>✓ Competitive pricing</li>
      </ul>
    </div>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img alt="Decoration preview" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=1000&q=60" className="w-full h-80 object-cover" />
    </div>
  </section>

  <section id="services" className="bg-white border-t py-12">
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      <article className="p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg">Weddings</h3>
        <p className="text-sm text-gray-600 mt-2">Full venue design, mandap setups, floral arches, and lighting.</p>
      </article>
      <article className="p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg">Parties & Birthdays</h3>
        <p className="text-sm text-gray-600 mt-2">Theme decoration, balloon art, photo walls and props.</p>
      </article>
      <article className="p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg">Corporate Events</h3>
        <p className="text-sm text-gray-600 mt-2">Staging, signage, branding-friendly installs and lighting.</p>
      </article>
    </div>
  </section>

  <section id="gallery" className="max-w-6xl mx-auto p-6">
    <h3 className="text-2xl font-bold mb-6">Gallery</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-lg overflow-hidden shadow">
          <img alt={`gallery-${i}`} src={`https://images.unsplash.com/photo-1513628253939-010e64ac66cd?auto=format&fit=crop&w=800&q=60&ixid=${i}`} className="w-full h-48 object-cover" />
        </div>
      ))}
    </div>
  </section>

  <section id="about" className="max-w-6xl mx-auto p-6 mt-8">
    <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold">About us</h3>
      <p className="mt-3 text-gray-700">
        Pun Decoration is run by the Pun family from Kathmandu. With over 12 years of experience, we focus on turning client visions into reality with careful planning, handcrafted decor and reliable execution.
      </p>
    </div>
  </section>

  <section id="contact" className="max-w-3xl mx-auto p-6 mt-10">
    <h3 className="text-2xl font-bold mb-4">Contact us</h3>
    <p className="text-gray-600 mb-4">Fill the form and we will get back within 48 hours.</p>
    <form className="grid gap-4">
      <label className="block">
        <span className="text-sm">Full name</span>
        <input className="mt-1 block w-full rounded border px-3 py-2" placeholder="Your name" />
      </label>

      <label className="block">
        <span className="text-sm">Phone or WhatsApp</span>
        <input className="mt-1 block w-full rounded border px-3 py-2" placeholder="e.g. +977 98X-XXXXXXX" />
      </label>

      <label className="block">
        <span className="text-sm">Event date</span>
        <input type="date" className="mt-1 block w-full rounded border px-3 py-2" />
      </label>

      <label className="block">
        <span className="text-sm">Message / Details</span>
        <textarea className="mt-1 block w-full rounded border px-3 py-2" rows={4} placeholder="Tell us about the event, guest count, budget, location..." />
      </label>

      <div className="flex gap-3">
        <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded">Send message</button>
        <button type="reset" className="border px-4 py-2 rounded">Reset</button>
      </div>
    </form>
  </section>

  <footer className="border-t mt-12 py-6">
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm">© {new Date().getFullYear()} Pun Decoration — Family business, Nepal</div>
      <div className="text-sm text-gray-600">Kathmandu · +977 98X-XXXXXXX · <a className="underline" href="#contact">Contact</a></div>
    </div>
  </footer>
</main>


);
}