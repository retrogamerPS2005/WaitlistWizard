import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import WaitlistForm from "@/components/landing/waitlist-form";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WaitlistForm />
    </div>
  );
}
