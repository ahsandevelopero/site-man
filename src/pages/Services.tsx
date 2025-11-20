import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Smartphone, Globe, Database, Cloud, LineChart } from "lucide-react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices for optimal performance.",
      features: ["Responsive Design", "SEO Optimization", "API Integration", "Performance Tuning"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Deployment"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description: "Scalable database architecture and optimization for efficient data management and retrieval.",
      features: ["Database Design", "Query Optimization", "Data Migration", "Backup Solutions"],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management for reliable, scalable, and secure applications.",
      features: ["AWS/Azure/GCP", "DevOps", "Auto-scaling", "Security"],
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Analytics & SEO",
      description: "Data-driven insights and search engine optimization to grow your online presence and reach.",
      features: ["Google Analytics", "SEO Audit", "Keyword Research", "Performance Reports"],
    },
  ];

  return (
    <div className="services-page">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-4 text-accent">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-hero p-8 sm:p-12 text-center border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your ideas into reality? Get in touch with us today.
            </p>
            <Button asChild size="lg" className="bg-gradient-accent">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
