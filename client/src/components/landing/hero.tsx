import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf')",
            opacity: 0.1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Transform Your Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join the waitlist for the next generation of business intelligence
            tools. Be the first to experience innovation that drives results.
          </p>
          <Button
            size="lg"
            onClick={() => {
              document
                .querySelector("#waitlist-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
