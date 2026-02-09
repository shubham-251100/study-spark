import Image from "next/image";
import { Star, Quote } from "lucide-react";

/**
 * TESTIMONIALS - Server Component
 *
 * Static testimonial content - no client interactivity needed.
 */

const testimonials = [
  {
    name: "Emily Johnson",
    role: "High School Senior",
    image: "/testimonial-1.png",
    quote:
      "StudySpark taught me how to budget my allowance and save for college. I wish I had this years ago!",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "College Freshman",
    image: "/testimonial-2.png",
    quote:
      "The emotional intelligence course helped me navigate relationships and manage stress during exams.",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    role: "High School Junior",
    image: "/testimonial-3.png",
    quote:
      "Finally, a learning platform that teaches real skills! The career planning course gave me clarity.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
            Student Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Students <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who are transforming their lives with
            practical skills.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 relative hover:shadow-card transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary-purple/20 absolute top-6 right-6" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
