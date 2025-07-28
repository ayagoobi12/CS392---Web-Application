import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">📘 About This Project</h1>
        <p className="text-gray-300 text-lg">
          This mini project allows you to explore public holidays across different countries and dates.
          It uses the Abstract API and demonstrates secure API key usage via a server-side Next.js route.
        </p>
        <p className="mt-4 text-gray-400">
          Built with the Next.js App Router and styled using Tailwind CSS.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 text-blue-400 hover:text-blue-300 underline transition"
        >
          ← Back to Global Holiday Finder
        </Link>
      </div>
    </main>
  );
}
