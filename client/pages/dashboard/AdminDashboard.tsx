import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, TrendingUp, AlertCircle, LogOut, Menu, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "w-64" : "w-0"} transition-smooth border-r border-border bg-sidebar overflow-hidden`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <Link to="/" className="font-bold text-lg text-sidebar-foreground">
            Advorix
          </Link>
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "overview"
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <BarChart3 size={20} />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "users"
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Users size={20} />
            Users
          </button>
          <button
            onClick={() => setActiveTab("employers")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "employers"
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Briefcase size={20} />
            Employers
          </button>
          <button
            onClick={() => setActiveTab("jobs")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "jobs"
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <AlertCircle size={20} />
            Job Posts
          </button>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-sidebar-foreground gap-2">
              <LogOut size={18} />
              Logout
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="h-16 border-b border-border bg-card flex items-center px-6 justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
              AD
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === "overview" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground mb-8">
                Platform overview and key metrics
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Total Users", value: "5,234", icon: Users, color: "text-blue-600" },
                  { label: "Total Employers", value: "428", icon: Briefcase, color: "text-purple-600" },
                  { label: "Active Jobs", value: "1,247", icon: TrendingUp, color: "text-green-600" },
                  { label: "Total Applications", value: "12,560", icon: AlertCircle, color: "text-orange-600" },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="p-6 rounded-lg border border-border bg-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                          <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                        </div>
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      "New user registered: john.doe@email.com",
                      "New employer: TechCorp Inc.",
                      "Job post pending approval: Senior Developer",
                      "User application: Full Stack Engineer",
                    ].map((activity, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending Approvals */}
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">Pending Approvals</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Senior Developer Role", from: "TechCorp", type: "Job Post" },
                      { name: "Marketing Manager Position", from: "StartupXYZ", type: "Job Post" },
                      { name: "New Employer Registration", from: "Creative Studios", type: "Employer" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-muted rounded-lg"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.from}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            Approve
                          </Button>
                          <Button size="sm" variant="ghost" className="text-destructive">
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Manage Users</h1>
              <p className="text-muted-foreground mb-8">
                View and manage all candidate profiles
              </p>

              <div className="space-y-2">
                {[
                  { name: "John Doe", email: "john@example.com", joined: "2024-01-15", status: "Active" },
                  { name: "Jane Smith", email: "jane@example.com", joined: "2024-01-20", status: "Active" },
                  { name: "Mike Johnson", email: "mike@example.com", joined: "2024-01-10", status: "Suspended" },
                ].map((user, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-smooth"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                          {user.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">Joined {user.joined}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "employers" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Manage Employers</h1>
              <p className="text-muted-foreground mb-8">
                View and manage all hiring partner accounts
              </p>

              <div className="space-y-4">
                {[
                  { name: "TechCorp Inc.", contact: "hr@techcorp.com", jobs: 15, status: "Verified" },
                  { name: "StartupXYZ", contact: "careers@startupxyz.com", jobs: 8, status: "Pending" },
                  { name: "Creative Studios", contact: "jobs@creative.com", jobs: 5, status: "Verified" },
                ].map((employer, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 transition-smooth"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{employer.name}</h3>
                        <p className="text-sm text-muted-foreground">{employer.contact}</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          employer.status === "Verified"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {employer.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{employer.jobs}</span> Active Jobs
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Profile</Button>
                        <Button variant="outline" size="sm" className="text-destructive">Suspend</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "jobs" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Job Post Moderation</h1>
              <p className="text-muted-foreground mb-8">
                Review and approve job postings
              </p>

              <div className="space-y-4">
                {[
                  { title: "Senior Developer", company: "TechCorp", status: "Pending Review" },
                  { title: "Product Manager", company: "StartupXYZ", status: "Approved" },
                  { title: "UX Designer", company: "Creative Studios", status: "Flagged" },
                ].map((job, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-smooth"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          job.status === "Pending Review"
                            ? "bg-blue-100 text-blue-700"
                            : job.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                    {job.status === "Pending Review" && (
                      <div className="flex gap-2">
                        <Button size="sm">Approve</Button>
                        <Button size="sm" variant="outline" className="text-destructive">
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
