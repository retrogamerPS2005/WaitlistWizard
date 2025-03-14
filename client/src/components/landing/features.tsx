import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, LineChart, Shield } from "lucide-react";

const features = [
  {
    title: "Lightning Fast Analytics",
    description:
      "Process millions of data points in seconds with our advanced analytics engine.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53",
  },
  {
    title: "Predictive Insights",
    description:
      "Leverage AI-powered predictions to stay ahead of market trends and opportunities.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1559273514-468728ffc16c",
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade security ensures your data is protected at every level.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4",
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
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with intuitive design to
            deliver unparalleled business insights.
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