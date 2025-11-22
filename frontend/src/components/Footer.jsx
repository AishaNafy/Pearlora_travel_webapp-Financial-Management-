import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-purple-800">pearlora.</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
              <li><Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms</Link></li>
              <li><Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/help" className="text-base text-gray-500 hover:text-gray-900">Help/FAQ</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Call Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">More</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/feedback" className="text-base text-gray-500 hover:text-gray-900">Feedback</Link></li>
              <li><Link to="/blogs" className="text-base text-gray-500 hover:text-gray-900">Blogs</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">All rights pearlora</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;