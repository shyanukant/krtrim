import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "The AI chatbot from Krtrim's Alpha Team revolutionized our customer support, handling over 80% of inquiries automatically. Our team is now free to focus on what matters most - growing our business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "ScaleUp Inc.",
    content: "Working with the Nexus Team was a dream. They delivered our SaaS platform ahead of schedule, and the quality exceeded all our expectations. True professionals who understand both AI and business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Watson",
    role: "Operations Director", 
    company: "Global Dynamics",
    content: "The Meta Team's voice agents transformed our appointment booking process. We went from manual scheduling chaos to a seamless, automated system that works 24/7. ROI was immediate.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Park",
    role: "CTO",
    company: "InnovateLab",
    content: "Krtrim doesn't just build AI solutions - they build partnerships. Their deep technical expertise combined with genuine care for our success made all the difference. Highly recommended.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "VP of Customer Success",
    company: "GrowthCorp",
    content: "The Alpha Team's chatbot integration was flawless. Our customer satisfaction scores increased by 40% while reducing response times from hours to seconds. Game-changing technology.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "James Mitchell",
    role: "Managing Director",
    company: "FutureVision Ltd",
    content: "The custom SaaS solution from the Nexus Team positioned us as industry leaders. Their AI-powered features gave us a competitive edge we never thought possible. Exceptional work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI solutions have transformed businesses across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden border border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-500 mb-4" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-200"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
