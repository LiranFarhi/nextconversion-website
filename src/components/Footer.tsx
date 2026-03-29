export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">NC</span>
              </div>
              <span className="font-bold text-lg">
                Next<span className="text-primary-light">Conversion</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Turning static storefronts into endless self-adaptive experiences
              with AI agent technology.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#agents"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  AI Agents
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Safety &amp; Control
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2026 NextConversion. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#"
        className="block bg-primary/10 hover:bg-primary/20 transition-colors text-center py-3"
      >
        <span className="text-sm text-primary-light font-medium">
          Back to top &uarr;
        </span>
      </a>
    </footer>
  );
}
