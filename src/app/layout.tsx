import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'TruthCheck | AI Detection & Plagiarism Checker',
  description: 'Verify the originality of any text with our powerful AI detection and plagiarism checking tools.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased bg-slate-50`}>
          <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
            <div className="container-custom py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                  <Image src="/logo.svg" alt="TruthCheck" width={140} height={32} />
                </Link>
                
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/ai-detection" className="text-slate-600 hover:text-indigo-500 font-medium transition-colors">
                    AI Detection
                  </Link>
                  <Link href="/plagiarism-detection" className="text-slate-600 hover:text-indigo-500 font-medium transition-colors">
                    Plagiarism Checker
                  </Link>
                  <Link href="/#features" className="text-slate-600 hover:text-indigo-500 font-medium transition-colors">
                    Features
                  </Link>
                  <Link href="/#pricing" className="text-slate-600 hover:text-indigo-500 font-medium transition-colors">
                    Pricing
                  </Link>
                </nav>
                
                <div className="flex items-center space-x-4">
                  <SignedOut>
                    <Link href="/sign-in" className="text-slate-600 hover:text-indigo-500 font-medium">
                      Log in
                    </Link>
                    <Link href="/sign-up" className="btn-primary">
                      Sign up
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer className="bg-white border-t border-slate-100 py-12">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <Image src="/logo.svg" alt="TruthCheck" width={140} height={32} className="mb-4" />
                  <p className="text-slate-500 mb-4">
                    Advanced AI detection and plagiarism checking for content creators, educators, and publishers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-slate-900 font-semibold mb-4">Product</h3>
                  <ul className="space-y-3">
                    <li><Link href="/#features" className="text-slate-500 hover:text-indigo-500 transition-colors">Features</Link></li>
                    <li><Link href="/#pricing" className="text-slate-500 hover:text-indigo-500 transition-colors">Pricing</Link></li>
                    <li><Link href="/api" className="text-slate-500 hover:text-indigo-500 transition-colors">API</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-slate-900 font-semibold mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog" className="text-slate-500 hover:text-indigo-500 transition-colors">Blog</Link></li>
                    <li><Link href="/docs" className="text-slate-500 hover:text-indigo-500 transition-colors">Documentation</Link></li>
                    <li><Link href="/help" className="text-slate-500 hover:text-indigo-500 transition-colors">Help Center</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-slate-900 font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="text-slate-500 hover:text-indigo-500 transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="text-slate-500 hover:text-indigo-500 transition-colors">Contact</Link></li>
                    <li><Link href="/privacy" className="text-slate-500 hover:text-indigo-500 transition-colors">Privacy</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-slate-100 mt-12 pt-8 text-center text-slate-500">
                <p>&copy; {new Date().getFullYear()} TruthCheck. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}