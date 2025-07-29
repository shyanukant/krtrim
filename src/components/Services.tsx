import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Phone, Code, ArrowRight } from "lucide-react"

const services = [
  {
    team: "Alpha Team",
    title: "AI Knowledge Chatbots",
    description: "Deploy intelligent chatbots trained on your unique business data. Handle customer support, qualify leads, and provide instant, accurate answers 24/7.",
    icon: <MessageSquare className="w-8 h-8" />,
    features: [
      "Custom training on your data",
      "24/7 customer support automation",
      "Lead qualification & routing",
      "Multi-language support",
      "Analytics & insights"
    ],
    gradient: "from-blue-600 to-cyan-600",
    calLink: "https://cal.com/krtrim/alpha-team-chatbot"
  },
  {
    team: "Meta Team", 
    title: "AI Voice Agents",
    description: "Go beyond chatbots with sophisticated AI voice agents. Perfect for managing appointments, handling customer inquiries, and automating outbound calls.",
    icon: <Phone className="w-8 h-8" />,
    features: [
      "Human-like voice interactions",
      "Appointment scheduling",
      "Outbound call automation",
      "Real-time conversation handling",
      "CRM integration"
    ],
    gradient: "from-purple-600 to-pink-600",
    calLink: "https://cal.com/krtrim/meta-team-voice"
  },
  {
    team: "Nexus Team",
    title: "Custom SaaS & AI Products", 
    description: "Partner with our full-stack development team to design, build, and launch market-ready SaaS products or custom AI-powered software solutions.",
    icon: <Code className="w-8 h-8" />,
    features: [
      "Full-stack development",
      "AI-powered features",
      "Scalable architecture",
      "Modern tech stack",
      "Ongoing support & maintenance"
    ],
    gradient: "from-emerald-600 to-teal-600",
    calLink: "https://cal.com/krtrim/nexus-team-saas"
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Elite AI Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each specialized team brings unique expertise to transform your business with cutting-edge AI solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-4 shadow-lg`}>
                  {service.icon}
                </div>
                
                <div className="space-y-2">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${service.gradient} text-white`}>
                    {service.team}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  onClick={() => window.open(service.calLink, '_blank')}
                >
                  Book the {service.team}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
