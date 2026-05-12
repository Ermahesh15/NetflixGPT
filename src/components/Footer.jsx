export default function Footer() {
  return (
    <footer className="bg-[#141414] py-10 text-sm text-gray-400">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="mb-6 text-white">Questions? Call 000-800-040-1843</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">FAQ</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Investor Relations</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Privacy</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Speed Test</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Help Center</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Jobs</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Cookies Preferences</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Legal Notices</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Account</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Ways to Watch</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Corporate Information</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Only on Netflix</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Media Center</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Terms of Use</p>
            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Contact Us</p>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500">Netflix India</p>
      </div>
    </footer>
  )
}
