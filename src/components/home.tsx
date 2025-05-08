import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight, Code, Globe, Laptop, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Innovative IT Solutions for{" "}
              <span className="text-primary">Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Aorus Solutions delivers cutting-edge web development and IT
              services to help your business thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="z-n1 absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in delivering high-quality development services using
            the latest technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="text-primary h-6 w-6" />
              </div>
              <CardTitle>React Development</CardTitle>
              <CardDescription>
                Custom React applications built with modern practices and state
                management solutions.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                Our React experts create responsive, performant, and
                maintainable applications that deliver exceptional user
                experiences.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="group" asChild>
                <Link to="/contact" className="flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Angular Development</CardTitle>
              <CardDescription>
                Enterprise-grade Angular applications with robust architecture
                and scalability.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                We leverage Angular's powerful features to build complex,
                feature-rich applications that meet your business requirements.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="group" asChild>
                <Link to="/contact" className="flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Laptop className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Website Creation</CardTitle>
              <CardDescription>
                Professional websites designed to convert visitors into
                customers.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                From simple landing pages to complex e-commerce solutions, we
                create websites that are both beautiful and functional.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="group" asChild>
                <Link to="/contact" className="flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Aorus Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional results through our
              expertise, dedication, and client-focused approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our developers have years of experience and stay updated with
                the latest technologies and best practices.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Code</h3>
              <p className="text-muted-foreground">
                We write clean, maintainable, and well-documented code that
                stands the test of time.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Laptop className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">
                We understand the importance of deadlines and ensure your
                project is delivered on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your digital presence?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Contact us today to discuss how Aorus Solutions can help your
              business succeed in the digital world.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
