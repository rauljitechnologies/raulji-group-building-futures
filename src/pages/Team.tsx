import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dharmendrasinh Raulji",
    role: "Chairman & Founder",
    bio: "Visionary leader with 15+ years of experience building businesses across consulting, technology, insurance, and finance. Founded Raulji Group with a mission to deliver end-to-end business solutions across India.",
    initials: "DR",
  },
  {
    name: "Raulji Brothers & Sons",
    role: "Co-Founders",
    bio: "The founding family behind Raulji Group, bringing together decades of expertise in business, finance, and law to build a trusted holding company serving 500+ clients across India.",
    initials: "RB",
  },
];

const departments = [
  { name: "Business Consulting", count: "15+", desc: "Consultants & Strategy Experts" },
  { name: "IT & Technology", count: "20+", desc: "Developers, Designers & DevOps" },
  { name: "Insurance Advisory", count: "10+", desc: "Insurance Advisors & Claim Experts" },
  { name: "Finance & Legal", count: "15+", desc: "CAs, Tax & Legal Professionals" },
  { name: "Digital Marketing", count: "10+", desc: "SEO, Ads & Content Specialists" },
  { name: "Operations & Support", count: "30+", desc: "Admin, HR & Client Support" },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Our Team | Leadership & Experts — Raulji Group Vadodara"
        description="Meet the team behind Raulji Group — led by Chairman Dharmendrasinh Raulji and 100+ professionals across consulting, IT, insurance, finance, legal, and digital services in Vadodara, Gujarat."
        canonical="https://www.raulji.com/team"
        keywords="Raulji Group team, Dharmendrasinh Raulji, business consultants Vadodara, IT experts Gujarat, leadership team Raulji"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Raulji Group Team",
        "url": "https://www.raulji.com/team",
        "description": "Meet the leadership and expert team at Raulji Group, Vadodara.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Raulji Group",
          "url": "https://www.raulji.com",
          "employee": [
            {
              "@type": "Person",
              "name": "Dharmendrasinh Raulji",
              "jobTitle": "Chairman & Founder",
              "worksFor": { "@type": "Organization", "name": "Raulji Group" }
            }
          ]
        }
      })}} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-up">
                Our Team
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                The People Behind{" "}
                <span className="text-gradient">Your Success</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up delay-200">
                100+ professionals across consulting, technology, insurance, finance, and legal —
                all working to build your future.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
                Our <span className="text-gradient">Founders</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.name} className="glass-card rounded-3xl p-8 hover-lift animate-fade-up">
                  <div className="w-20 h-20 brand-gradient rounded-full flex items-center justify-center mb-6">
                    <span className="text-primary-foreground font-bold text-2xl">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                Our Departments
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
                100+ Professionals Across <span className="text-gradient">6 Verticals</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, i) => (
                <div key={dept.name} className="glass-card rounded-2xl p-6 hover-lift animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-4xl font-extrabold text-primary mb-2">{dept.count}</div>
                  <h3 className="text-lg font-bold text-secondary mb-1">{dept.name}</h3>
                  <p className="text-muted-foreground text-sm">{dept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Want to Join Our Team?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                We're always looking for talented professionals to join our growing team in Vadodara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:rauljigroup@gmail.com?subject=Career Opportunity at Raulji Group">
                  <Button variant="heroOutline" size="xl">
                    <Mail className="w-5 h-5" />
                    Send Your Resume
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Contact Us <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
