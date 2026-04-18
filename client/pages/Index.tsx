import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, TrendingUp, CheckCircle, Zap, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                  Find Your Dream <span className="text-primary">Job</span> Today
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Connect with top employers, showcase your skills, and land your perfect role. The modern job portal for ambitious professionals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/candidate-signup">
                  <Button size="lg" className="w-full sm:w-auto gap-2 text-base">
                    Get Started as Candidate <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/auth/partner-signup">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                    Post Jobs as Employer
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-semibold border-2 border-background"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">5,000+</span> professionals already found their jobs
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative h-full min-h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/20 rounded-3xl blur-3xl opacity-20 animate-pulse" />
                <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-semibold">Join Our Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Advorix?
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need in one powerful platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Search and apply to jobs in seconds with our optimized platform"
              },
              {
                icon: Globe,
                title: "Global Opportunities",
                description: "Access thousands of job opportunities from leading companies worldwide"
              },
              {
                icon: Shield,
                title: "Secure & Verified",
                description: "All employers are verified to ensure your data and privacy are protected"
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "Get insights and recommendations to advance your career journey"
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-6 rounded-xl border border-border bg-background hover:border-primary/50 transition-smooth">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Sign Up",
                description: "Create your account as a candidate or employer. Complete your profile in minutes."
              },
              {
                num: "02",
                title: "Browse or Post",
                description: "Candidates search jobs, employers post opportunities. Find the perfect match."
              },
              {
                num: "03",
                title: "Connect & Succeed",
                description: "Apply or review applications, interview, and start your new opportunity today."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.num}</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center md:text-left">
                    {step.description}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute -right-4 top-8 text-primary/30">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Perfect For Every Role
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Candidate Card */}
            <div className="p-8 rounded-2xl border-2 border-border bg-background hover:border-primary transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Candidates
              </h3>
              <p className="text-muted-foreground mb-6">
                Discover thousands of job opportunities tailored to your skills and experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Search & filter jobs",
                  "Upload your resume",
                  "Track applications",
                  "Get recommendations"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/auth/candidate-signup" className="w-full">
                <Button className="w-full">Start Applying</Button>
              </Link>
            </div>

            {/* Hiring Partner Card */}
            <div className="p-8 rounded-2xl border-2 border-secondary bg-background hover:border-secondary transition-smooth md:scale-105">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Employers
              </h3>
              <p className="text-muted-foreground mb-6">
                Find and hire the best talent for your company. Manage all your hiring in one place.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Post job openings",
                  "Review applications",
                  "Shortlist candidates",
                  "Manage hiring"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/auth/partner-signup" className="w-full">
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Post a Job
                </Button>
              </Link>
            </div>

            {/* Admin Card */}
            <div className="p-8 rounded-2xl border-2 border-border bg-background hover:border-primary transition-smooth">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Administrators
              </h3>
              <p className="text-muted-foreground mb-6">
                Moderate, analyze, and manage the entire platform with powerful analytics.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Monitor platform",
                  "Approve job posts",
                  "View analytics",
                  "Manage users"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/auth/admin-login" className="w-full">
                <Button variant="outline" className="w-full">
                  Admin Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of professionals and employers who are building meaningful connections on Advorix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/candidate-signup">
              <Button size="lg" className="gap-2">
                Find Jobs Now <ArrowRight size={18} />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
