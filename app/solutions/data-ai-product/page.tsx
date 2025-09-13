import Image from 'next/image'

export default function DataAIProduct() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/articles/datawarehouse_after.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <div className="max-w-3xl">
            <p className="text-[#B4B4B4] text-lg mb-4">SHAKUDO USE CASE</p>
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              Optimize Route Planning with Real-Time Traffic Analytics
            </h1>
            <button className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition">
              SEE IN ACTION
            </button>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl mb-12">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="w-32 h-12 relative">
              <Image 
                src="/images/tech/gcp_logo.png" 
                alt="Google Cloud Platform" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image 
                src="/images/tech/google-bigquery-logo-1.png" 
                alt="BigQuery" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image 
                src="/images/tech/google_vertex_logo.png" 
                alt="Vertex AI" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image 
                src="/images/tech/google_gemini_logo.png" 
                alt="Gemini" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image 
                src="/images/tech/langchain_logo.png" 
                alt="LangChain" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
            <div className="w-32 h-12 relative">
              <Image 
                src="/images/tech/python_logo.png" 
                alt="Python" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            AI-Driven Route Optimization: Maximizing Efficiency in Dynamic Traffic Conditions
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              Shakudo's platform revolutionizes route planning by incorporating real-time traffic analytics and AI-powered optimization algorithms. This solution processes live data from various sources, including GPS trackers, traffic cameras, and weather stations, to dynamically adjust routes for optimal efficiency. Shakudo's unique ability to rapidly deploy and scale these AI tools enables transportation and logistics companies to seamlessly integrate advanced route optimization into their existing systems.
            </p>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li>Real-time route adjustments based on current traffic conditions and predicted congestion</li>
              <li>Integration with multiple data sources for comprehensive traffic analysis</li>
              <li>Machine learning models for predictive traffic pattern analysis</li>
              <li>Scalable architecture supporting thousands of concurrent route optimizations</li>
              <li>Easy integration with existing transportation management systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
