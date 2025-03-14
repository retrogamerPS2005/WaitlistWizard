import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Brain, Sparkles } from "lucide-react";

const features = [
  {
    title: "Bite-sized Learning",
    description:
      "Transform complex subjects into 2-5 minute daily reads. Perfect for busy schedules and better retention.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e",
  },
  {
    title: "Consistent Progress",
    description:
      "Build lasting knowledge through daily micro-lessons. Small steps lead to big achievements.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06",
  },
  {
    title: "Smart Learning Path",
    description:
      "AI-curated content adapts to your pace and learning style for maximum engagement.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Microlearning Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more effectively with our scientifically-proven approach to
            continuous learning through small, manageable chunks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 h-48 overflow-hidden rounded-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <feature.icon className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}