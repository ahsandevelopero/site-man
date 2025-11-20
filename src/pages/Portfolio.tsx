import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with seamless checkout and inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization and reporting system for business intelligence.",
      tags: ["TypeScript", "D3.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking solution with biometric authentication.",
      tags: ["React Native", "Firebase", "API"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      title: "Social Media Platform",
      description: "Community-driven platform with real-time messaging and content sharing.",
      tags: ["Next.js", "WebSocket", "Redis"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered tool for automated content creation and optimization.",
      tags: ["Python", "TensorFlow", "REST API"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },
    {
      title: "Project Management Tool",
      description: "Collaborative workspace for teams with task tracking and time management.",
      tags: ["Vue.js", "GraphQL", "MySQL"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="portfolio-page">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
              Showcasing our latest projects and success stories
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="portfolio-card group overflow-hidden">
                <div className="portfolio-image-wrapper relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="portfolio-overlay absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-90 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
