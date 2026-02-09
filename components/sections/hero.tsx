"use client";

/**
 * HERO - Client Component
 *
 * This is a Client Component because:
 * 1. Uses GSAP for entrance animations (requires DOM access)
 * 2. Uses useRef and useEffect for animation setup
 *
 * Note: In a fully optimized app, you could split this into
 * a Server Component wrapper with a Client Component for animations.
 */

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-buttons",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-image",
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-brand border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                50,000+ students learning
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold text-gray-900">4.9</span>
              </div>
            </div>

            <h1 className="hero-title font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn the{" "}
              <span className="text-gradient">Life Skills</span>{" "}
              School Doesn&apos;t Teach
            </h1>

            <p className="hero-subtitle text-lg text-gray-600 mb-8 max-w-xl">
              Master financial literacy, emotional intelligence, career planning,
              and more with engaging, interactive courses designed for students.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button className="bg-gradient-brand text-white rounded-xl px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="rounded-xl px-8 py-6 text-lg font-medium border-2"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image hidden lg:flex justify-center">
            <div className="relative">
              <Image
                src="/hero-student.png"
                alt="Student learning with StudySpark"
                width={500}
                height={500}
                priority
                className="drop-shadow-2xl"
              />
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg">💰</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Financial Literacy</p>
                    <p className="text-sm font-bold text-gray-900">8 Lessons</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-card animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg">🧠</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Emotional Intelligence</p>
                    <p className="text-sm font-bold text-gray-900">6 Lessons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
