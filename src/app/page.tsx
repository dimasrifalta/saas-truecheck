import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/logo.svg" alt="TruthCheck Logo" width={180} height={40} />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/ai-detection" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">AI Detection</Link>
              <Link href="/plagiarism-detection" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Plagiarism Detection</Link>
              <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</Link>
              <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link>
              <Link href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">FAQ</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Login</Link>
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Get Started</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Detect AI Content & Plagiarism <span className="text-blue-600 dark:text-blue-400">Instantly</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Verify the originality of any text with our powerful AI detection and plagiarism checking tools. Perfect for educators, publishers, and content creators.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-center font-medium">
                  Start Free Trial
                </Link>
                <Link href="/ai-detection" className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-md text-center font-medium">
                  Try AI Detection
                </Link>
                <Link href="/plagiarism-detection" className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-md text-center font-medium">
                  Try Plagiarism Detection
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <textarea 
                    placeholder="Paste your content here to check for plagiarism and AI detection..." 
                    className="w-full h-40 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <Link href="/plagiarism-detection" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-center">
                    Check for Plagiarism
                  </Link>
                  <Link href="/ai-detection" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium text-center">
                    Detect AI Content
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Powerful Detection Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform uses advanced algorithms to provide accurate and reliable results for both AI-generated content and plagiarism detection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI Content Detection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify content created by AI tools like ChatGPT, GPT-4, and other language models with high accuracy.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Plagiarism Checker</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare text against billions of web pages, academic papers, and publications to find matching content.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Detailed Reports</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get comprehensive reports with highlighted sections, similarity scores, and source attribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs with no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for occasional use</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$9</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    5,000 words per month
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Basic reporting
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Email support
                  </li>
                </ul>
                <Link href="/signup" className="block w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-center py-3 rounded-md font-medium">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pro</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Ideal for regular content creators</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    50,000 words per month
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced reporting
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    API access
                  </li>
                </ul>
                <Link href="/signup" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md font-medium">
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">For teams and businesses</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited words
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Custom reporting
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Team management
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-center py-3 rounded-md font-medium">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our plagiarism and AI detection tools.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">How accurate is the AI detection?</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Our AI detection algorithm has a 95%+ accuracy rate for identifying content generated by popular AI tools like ChatGPT, GPT-4, and similar language models.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">How does the plagiarism checker work?</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Our plagiarism checker compares your text against billions of web pages, academic papers, and publications to find matching or similar content, providing detailed source information.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Is my content secure when I check it?</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Yes, we take data privacy seriously. Your content is encrypted during transmission and storage, and we do not store your content after analysis unless you specifically opt to save it.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Can I use this for academic papers?</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Absolutely! TruthCheck is ideal for students and educators to verify academic integrity before submission or during grading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to verify your content?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who trust TruthCheck for reliable AI detection and plagiarism checking.
            </p>
            <Link href="/signup" className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.svg" alt="TruthCheck Logo" width={150} height={36} className="mb-4" />
              <p className="mb-4">
                Advanced AI detection and plagiarism checking for content creators, educators, and publishers.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/api" className="hover:text-white">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TruthCheck. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
