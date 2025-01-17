import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Terminal, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-6 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-purple-400">LET'S COLLABORATE</p>
            <h1 className="space-y-2">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                I'M PAT PASCUAL
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-purple-400 leading-relaxed">
                DATA SCIENTIST & AI ENGINEER
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
              With over 6 years at the intersection of AI and finance, I transform data challenges into business opportunities. My expertise includes:
            </p>
            <ul className="text-lg sm:text-xl text-gray-400 list-none space-y-2 mt-4">
              <li>- 🤖 LLM & RAG Systems: Custom AI solutions that understand your business context</li>
              <li>- 📊 Predictive Analytics: Turn historical data into future insights</li>
              <li>- 💡 Intelligent Applications: Build AI-powered tools that solve real problems</li>
              <li>- 📈 Risk & Financial Modeling: Data-driven decisions for financial success</li>
            </ul>
            <div className="mt-6">
              <Link href="/projects">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  VIEW MY PROJECTS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              <Image
                src="https://raw.githubusercontent.com/rpdpscl/bootcamp-portfolio-Jan2025/main/app/images/pat_pascual.png"
                alt="Profile"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h2>
              <div className="relative h-40 sm:h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROBLEM:</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.problem}</p>
              <h3 className="text-lg font-semibold mb-2">SOLUTION:</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.solution}</p>
                <a href = {project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </Card>
          ))}
        </div>
      </section>

      
    </main>
  );
}

// Only your Top 3 Projects

const projects = [
  {
    title: "Self-Evaluation Assistant",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Performance evaluations lack standardization and are time-consuming, making it difficult for employees to effectively document and analyze their achievements.",
    solution: "Developed an AI application that analyzes performance data using GPT-4 to provide objective evaluations and generates detailed assessments with specific achievements, scores, and reasoning.",
    tools: ["Python", "Streamlit", "OpenAI", "FAISS", "Langchain"],
    link : "https://github.com/rpdpscl/work-self-evaluation-automation-Dec2024"
  },
  {
    title: "PropGuard - Real Estate Listing Validation System", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "The real estate market faces challenges with fraudulent listings, unverified agents, and inconsistent property information across platforms. Manual validation methods are inefficient and error-prone.",
    solution: "PropGuard is a comprehensive real estate listing validation system that combines AI-powered image authentication, agent verification, cross-platform consistency checks, and review sentiment analysis. The system provides automated validation with clear trust scores and actionable recommendations.",
    tools: ["Python", "OpenAI", "X.AI Grok", "Langchain", "Google Search API", "Flask"],
    link : "https://github.com/rpdpscl/bootcamp-hackathon-propguard-Nov2024"
  },
  {
    title: "ReveNEW: Intelligent Revenue Analysis & Reporting Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", 
    problem: "Businesses struggle with converting complex revenue data into actionable insights, while traditional BI tools lack natural language explanation capabilities. Manual analysis and reporting is time-consuming and inefficient.",
    solution: "Created a two-part revenue analysis system with a data processing pipeline that transforms revenue data into natural language narratives using GPT-4, and a Streamlit-based platform for real-time analysis and forecasting.",
    tools: ["Python", "OpenAI", "Streamlit", "Pandas", "FAISS"],
    link : "https://github.com/rpdpscl/bootcamp-project-revenew-AIFirst-Dec2024"
  },
  
];