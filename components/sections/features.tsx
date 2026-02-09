import { CheckCircle, Gamepad2, Award, Users, Clock, Target } from "lucide-react";

/**
 * FEATURES - Server Component
 *
 * Static content showcasing app features.
 * No client-side interactivity needed.
 */

const features = [
  {
    icon: Gamepad2,
    title: "Interactive Learning",
    description: "Engage with fun quizzes, scenarios, and hands-on activities",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: CheckCircle,
    title: "Track Your Progress",
    description: "See your growth with detailed progress tracking and certificates",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Short lessons designed to fit your busy schedule",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Award,
    title: "Earn Certificates",
    description: "Get recognized for completing courses with digital badges",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with fellow learners and share your journey",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Target,
    title: "Real-World Skills",
    description: "Apply what you learn immediately in your daily life",
    color: "bg-orange-100 text-orange-600",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
            Why StudySpark?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Learning Made <span className="text-gradient">Engaging</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is designed specifically for students, making life
            skills education fun and effective.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
