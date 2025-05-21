import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Zap,
  Clock,
  Brain,
  Database,
  Send,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import previewImage from "@/assets/Dashboard.png";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes finding the right tech talent quick
              and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Send className="w-12 h-12" />,
                title: "Post Job",
                description:
                  "Share your requirements and tech stack needs through our simple dashboard interface.",
              },
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Match Automatically",
                description:
                  "Our AI-powered system identifies the most suitable candidates from our pre-vetted talent pool.",
              },
              {
                icon: <CheckCircle2 className="w-12 h-12" />,
                title: "Hire Smarter",
                description:
                  "Review matched profiles, schedule interviews, and make offers all through one platform.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-blue-600 mb-6 mx-auto bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing tech recruitment in Prague with our
              data-driven approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Fast Matchmaking",
                description:
                  "Get matched with relevant candidates within 48 hours",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Intelligent Matching",
                description:
                  "AI-powered technology ensures cultural and technical fit",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Dashboard Access",
                description:
                  "Track your hiring process with our intuitive platform",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Extensive Talent Pool",
                description: "Access to 500+ pre-vetted tech professionals",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Manage Your Hiring Pipeline
              </h2>
              <p className="text-gray-600 mb-6">
                Our intuitive dashboard gives you complete visibility into your
                recruitment process. Track candidate progress, schedule
                interviews, and make data-driven hiring decisions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time candidate matching updates",
                  "Interview scheduling and feedback collection",
                  "Collaborative hiring team notes and ratings",
                  "Offer management and onboarding tracking",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/dashboard">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
              <div className="aspect-video bg-white rounded-lg overflow-hidden relative">
                <Image
                  src="/dashboard-preview.png"
                  alt="Dashboard preview"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-500 text-sm mt-3 text-center italic">
                This is not an identical representation of the final dashboard
                and its functionality, only an insight into what it may look
                like!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+420 123 456 789" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Tell us about your hiring needs
                </label>
                <Textarea
                  id="message"
                  placeholder="Please describe the roles you're looking to fill and any specific requirements..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
