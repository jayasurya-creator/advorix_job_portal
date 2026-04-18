import { useNavigate } from "react-router-dom"

export default function CandidateDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Candidate Dashboard</h1>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome to your dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Available Jobs</h3>
            <p className="text-gray-600">Browse job opportunities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">My Applications</h3>
            <p className="text-gray-600">Track your applications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">My Profile</h3>
            <p className="text-gray-600">Manage your profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}
