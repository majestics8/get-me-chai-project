import React from 'react'

const page = () => {
    return (
        < >
       <div className="max-w-4xl mx-auto px-4 py-10">
  {/* Header Section */}
  <div className="flex items-center justify-center gap-3 mb-8">
    <h1 className="text-3xl font-extrabold text-teal-700">About Get Me a Chai</h1>
    <img className="w-16 h-16 object-contain" src="/tea.gif" alt="Chai gif" />
  </div>

  {/* Section */}
  <section className="space-y-8 text-gray-300 leading-relaxed text-lg">
    {/* Intro */}
    <div>
      <h2 className="text-2xl  font-semibold mb-2">🫖 Welcome to Get Me a Chai</h2>
      <p>
        A simple and meaningful way to support creators, changemakers, students, and anyone in need — one cup at a time.
        <br />
        Whether you're an artist trying to fund your next project, a student needing help with education costs, or someone going through a tough time — this platform helps you raise funds transparently and easily.
      </p>
    </div>

    {/* What is it? */}
    <div>
      <h2 className="text-2xl font-semibold mb-2">☕ What is Get Me a Chai?</h2>
      <p>
        <span className="font-medium">Get Me a Chai</span> is a light-hearted but powerful fundraising platform where supporters can donate small (or large!) amounts to help individuals they care about.
        <br />
        Instead of asking for big contributions, we make it feel like you're simply "buying someone a chai" — a warm, familiar gesture in Indian culture that means you're there for them.
      </p>
    </div>

    {/* Why we built this */}
    <div>
      <h2 className="text-2xl font-semibold mb-2">🌟 Why We Built This</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Clean and secure interface for sending and receiving payments.</li>
        <li>Personal donation pages with messages, profile, and cover photos.</li>
        <li>Razorpay integration for safe, fast transactions.</li>
        <li>A creator-focused approach to fundraising — where every chai counts.</li>
      </ul>
    </div>

    {/* Trust & Transparency */}
    <div>
      <h2 className="text-2xl font-semibold mb-2">🔒 Trust & Transparency</h2>
      <p>
        All donations go directly to the recipient’s payment account. Supporters can see the number of chais shared, messages sent, and how much has been raised — building a community of honest, transparent giving.
      </p>
    </div>

    {/* Who is it for */}
    <div>
      <h2 className="text-2xl font-semibold mb-2">🚀 Who is it For?</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Creators & Artists</strong>: Writers, musicians, developers, and more.</li>
        <li><strong>Students</strong>: Raise money for books, exams, or fees.</li>
        <li><strong>Helpers in Need</strong>: Anyone going through financial hardship.</li>
        <li><strong>Friends & Family</strong>: Send love and chai to someone who needs it.</li>
      </ul>
    </div>

    {/* Final Sip */}
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-inner text-gray-300">
      <h2 className="text-2xl font-semibold mb-2">💬 Final Sip</h2>
      <p>
        We're more than just a fundraising site — we're a reminder that even a small gesture can make a big difference.
        <br />
        So the next time someone says, “Get me a chai,” go ahead — support them.
        <br />
        <strong>Because kindness starts with one cup.</strong>
      </p>
    </div>
  </section>
</div>
      </>
    )
}

export default page

export const metadata={
  title:"About - Get Me A Chai",
}