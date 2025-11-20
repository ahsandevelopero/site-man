import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Palette } from "lucide-react";
import "./Home.css";

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built with performance in mind, delivering exceptional speed and responsiveness.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data and privacy.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful Design",
      description: "Carefully crafted user interface with attention to every detail.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Build Something
              <span className="bg-gradient-accent bg-clip-text text-transparent"> Amazing</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Transform your ideas into reality with our cutting-edge solutions.
              Professional, fast, and designed to exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary text-base">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Combining innovation with reliability to deliver exceptional results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let's work together to bring your vision to life
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
