
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Zap } from "lucide-react"

export default function CTA() {
  const backgroundStyle = {
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={backgroundStyle} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Ready to Transform?</span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Let's Build Your
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Future
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ready to automate your operations and accelerate growth? Book a free discovery call and let's discuss how our AI solutions can transform your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://cal.com/krtrim/discovery-call', '_blank')}
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Your Free Discovery Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        <div className="mt-8 text-gray-400 text-sm">
          ✓ No commitment required  ✓ 30-minute consultation  ✓ Custom AI strategy included
        </div>
      </div>
    </section>
  )
}
