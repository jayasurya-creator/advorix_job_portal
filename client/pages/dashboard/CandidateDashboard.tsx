import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Heart, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function CandidateDashboard() {
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
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Briefcase size={20} />
            Find Jobs
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "applications"
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <FileText size={20} />
            My Applications
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "saved"
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Heart size={20} />
            Saved Jobs
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
              JD
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === "jobs" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Find Jobs</h1>
              <p className="text-muted-foreground mb-8">
                Search and apply to thousands of job opportunities
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-smooth cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Job Title {i}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Company Name</p>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Full-time
                      </span>
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        Remote
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">$80K - $120K</p>
                    <Button className="w-full">Apply Now</Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "applications" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Applications</h1>
              <p className="text-muted-foreground mb-8">
                Track the status of your job applications
              </p>

              <div className="space-y-4">
                {[
                  { title: "Senior Developer", company: "Tech Corp", status: "Under Review", date: "2 days ago" },
                  { title: "Product Manager", company: "StartupXYZ", status: "Rejected", date: "1 week ago" },
                  { title: "UX Designer", company: "Creative Studios", status: "Interview", date: "3 days ago" },
                ].map((app, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-border bg-card flex items-center justify-between hover:border-primary/50 transition-smooth"
                  >
                    <div>
                      <h3 className="font-semibold text-foreground">{app.title}</h3>
                      <p className="text-sm text-muted-foreground">{app.company}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          app.status === "Under Review"
                            ? "bg-blue-100 text-blue-700"
                            : app.status === "Interview"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {app.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "saved" && (
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Saved Jobs</h1>
              <p className="text-muted-foreground mb-8">
                Jobs you've bookmarked for later
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-smooth"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Job Title {i}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Company Name</p>
                    <p className="text-sm text-muted-foreground mb-4">$100K - $150K</p>
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">Apply</Button>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
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
