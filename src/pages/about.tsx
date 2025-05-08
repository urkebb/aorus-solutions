import React from "react";
// Let's check what's exported from Layout.tsx and import it correctly
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project we undertake, ensuring the highest quality of work and customer satisfaction.",
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-background">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              About Aorus Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering exceptional IT services and innovative solutions since
              2015
            </p>
          </div>

          {/* Company Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Aorus Solutions was founded with a vision to bridge the gap
                between complex technology and business needs. We specialize in
                creating custom web applications, websites, and digital
                solutions that help businesses thrive in the digital age.
              </p>
              <p className="text-lg">
                With expertise in Angular, React, and other modern frameworks,
                our team of skilled developers, designers, and consultants work
                together to deliver high-quality, scalable, and user-friendly
                solutions tailored to each client's unique requirements.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-primary/5 rounded-xl p-8 mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-center max-w-3xl mx-auto">
              To empower businesses through innovative technology solutions that
              drive growth, efficiency, and competitive advantage in an
              ever-evolving digital landscape.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m6.5 6.5 11 11"></path>
                    <path d="m21 12-9-9-9 9 9 9 9-9Z"></path>
                    <path d="M12 12v9"></path>
                    <path d="m9 3 3 3 3-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Angular Development
                </h3>
                <p className="text-muted-foreground">
                  Building robust, scalable applications with Angular's powerful
                  framework.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  React Development
                </h3>
                <p className="text-muted-foreground">
                  Creating dynamic, responsive user interfaces with React's
                  flexible library.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M7 7h10"></path>
                    <path d="M7 12h10"></path>
                    <path d="M7 17h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Designing and developing custom websites that deliver
                  exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
