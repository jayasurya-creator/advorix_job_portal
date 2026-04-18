export default function Index() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Advorix Job Portal
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to your career destination
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/auth/candidate-signup"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Candidate Signup
          </a>
          <a
            href="/auth/partner-signup"
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Partner Signup
          </a>
          <a
            href="/auth/login"
            className="px-8 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
