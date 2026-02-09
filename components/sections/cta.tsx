import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * CTA - Server Component
 *
 * Static call-to-action section - no client interactivity needed.
 */

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-purple to-primary-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="text-sm font-medium text-white">
            Start your journey today
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Learn Skills That Matter?
        </h2>

        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join over 50,000 students who are already building essential life
          skills. It&apos;s free to get started!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses">
            <Button className="bg-white text-primary-purple hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold shadow-lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-xl px-8 py-6 text-lg font-medium"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
