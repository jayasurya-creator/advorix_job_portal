import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Users, Eye, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function PartnerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("jobs");

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
            onClick={() => setActiveTab("jobs")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "jobs"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <FileText size={20} />
            My Job Posts
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "applications"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Users size={20} />
            Applications
          </button>
          <button
            onClick={() => setActiveTab("company")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "company"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Eye size={20} />
            Company Profile
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
            <Button className="gap-2 bg-secondary hover:bg-secondary/90">
              <Plus size={18} />
              Post New Job
            </Button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-semibold">
              AC
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === "jobs" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Job Posts</h1>
              <p className="text-muted-foreground mb-8">
                Manage all your active and closed job listings
              </p>

              <div className="space-y-4">
                {[
                  { title: "Senior Full Stack Developer", applications: 45, views: 234, status: "Active" },
                  { title: "Product Manager", applications: 28, views: 156, status: "Active" },
                  { title: "UX/UI Designer", applications: 15, views: 89, status: "Closed" },
                ].map((job, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-border bg-card hover:border-secondary/50 transition-smooth"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">Posted 2 weeks ago</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          job.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Applications</p>
                        <p className="text-2xl font-bold text-foreground">{job.applications}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Views</p>
                        <p className="text-2xl font-bold text-foreground">{job.views}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Shortlisted</p>
                        <p className="text-2xl font-bold text-foreground">
                          {Math.floor(job.applications * 0.3)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Applications</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-destructive">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "applications" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Applications</h1>
              <p className="text-muted-foreground mb-8">
                Review and manage all candidate applications
              </p>

              <div className="space-y-4">
                {[
                  { candidate: "John Doe", position: "Senior Developer", applied: "2 days ago", status: "New" },
                  { candidate: "Jane Smith", position: "Senior Developer", applied: "1 week ago", status: "Shortlisted" },
                  { candidate: "Mike Johnson", position: "Product Manager", applied: "3 days ago", status: "Rejected" },
                ].map((app, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-border bg-card hover:border-secondary/50 transition-smooth flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                        {app.candidate.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{app.candidate}</h3>
                        <p className="text-sm text-muted-foreground">{app.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          app.status === "New"
                            ? "bg-blue-100 text-blue-700"
                            : app.status === "Shortlisted"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {app.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{app.applied}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "company" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Company Profile</h1>
              <p className="text-muted-foreground mb-8">
                Manage your company information and branding
              </p>

              <div className="max-w-2xl">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-6">Company Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Acme Corporation"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Website
                      </label>
                      <input
                        type="text"
                        defaultValue="https://acme.com"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        About
                      </label>
                      <textarea
                        rows={4}
                        defaultValue="We are a leading tech company..."
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
