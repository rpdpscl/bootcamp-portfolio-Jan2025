import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

// Add your Projects Here
const projects = [
  {
    title: "Science Q&A Fine-tuning with Gemma 2B",
    image: "https://unsplash.com/photos/lab-glassware-science-laboratory-research-and-development-concept-LdwPILe8Tlc",
    problem: "Need to create an AI model that can accurately answer science-related questions with proper reasoning and analysis, while maintaining high performance metrics like BLEU, ROUGE, and METEOR scores.",
    solution: "Fine-tuned Google's Gemma 2B instruction model on a science Q&A dataset, implementing a custom prompt template and evaluation metrics. The model generates structured responses with analysis and answers in XML-style tags.",
    tools: ["Python", "PyTorch", "Hugging Face Transformers", "Google Gemma", "CUDA"],
    link : "https://github.com/rpdpscl/bootcamp-project-fine-tuning-AIFirst-Oct2024" 
  },
  {
    title: "AI-Powered News Summarizer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Information overload from lengthy news articles makes it difficult for readers to quickly grasp key points and essential information, leading to time inefficiency and reduced comprehension.",
    solution: "Developed a Streamlit-based web application that leverages OpenAI's GPT-4 model to generate concise, accurate summaries of news articles. The tool maintains objectivity while extracting core facts, events, and themes through carefully crafted system prompts.",
    tools: ["Python", "Streamlit", "OpenAI API", "GPT-4"],
    link : "https://github.com/rpdpscl/bootcamp-project-news-summarizer-AIFirst-Nov2024" 
  },
  {
    title: "Quiz Genius",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Educators and students struggle to create customized, high-quality practice quizzes from educational content, especially for technical subjects requiring proper mathematical notation and comprehensive explanations.",
    solution: "Developed a Streamlit application that uses GPT-4 to automatically analyze educational content from URLs, detect subject areas, and generate tailored quizzes with LaTeX math support. Features include automatic subject detection, format suggestions, and PDF export functionality.",
    tools: ["Python", "Streamlit", "OpenAI API", "GPT-4", "LaTeX", "BeautifulSoup"],
    link : "https://github.com/rpdpscl/bootcamp-project-quiz-genius-AIFirst-Nov2024"
  },
  {
    title: "ShopRisk",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "E-commerce businesses in the Philippines need better ways to predict and analyze delivery risks, financial losses, and courier performance across different regions and weather conditions.",
    solution: "An AI-powered risk assessment platform that analyzes delivery data to provide insights on financial loss predictions, courier performance tracking, weather impact analysis, and regional risk mapping for Lazada and Shopee operations.",
    tools: ["Python", "Streamlit", "OpenAI", "FAISS", "Pandas", "NumPy"],
    link : "https://github.com/rpdpscl/bootcamp-project-shoprisk-AIFirst-Dec2024"
  },
  {
    title: "Natural Language Generation for Delivery Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Converting raw delivery data into readable, natural language reports is time-consuming and prone to human error. There's a need to automate the generation of comprehensive delivery performance narratives from structured data.",
    solution: "Developed a Python-based natural language generation system that automatically converts delivery analytics data into coherent paragraphs. The system analyzes various delivery metrics (orders, delays, returns, etc.) and generates human-readable reports in both TXT and PDF formats using OpenAI's GPT model.",
    tools: ["Python", "OpenAI", "Pandas", "FPDF"],
    link : "https://github.com/rpdpscl/bootcamp-project-NLG-AIFirst-Dec2024"
  },
  {
    title: "ReveNEW: Intelligent Revenue Analysis & Reporting Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Businesses struggle with converting complex revenue data into actionable insights. Manual analysis and report generation is time-consuming, while traditional BI tools often lack the ability to generate narrative insights and natural language explanations of trends.",
    solution: "Created a two-part revenue analysis system: (1) A data processing pipeline that transforms raw revenue data into natural language narratives using GPT-4, handling multiple metrics including transaction details, customer segments, and performance indicators. (2) A Streamlit-based interactive platform that enables real-time revenue analysis, forecasting, and insight generation with semantic search capabilities.",
    tools: ["Python", "OpenAI", "Streamlit", "Pandas", "FAISS"],
    link : "https://github.com/rpdpscl/bootcamp-project-revenew-AIFirst-Dec2024" // Github Link make sure it has https://
  },
  {
    title: "ReveNEW 2.0: Multi-Agent Revenue Analysis System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "While the original ReveNEW platform successfully automated basic revenue analysis, it lacked specialized domain expertise and real-time collaborative analysis capabilities. Businesses needed deeper, multi-perspective insights that could adapt to changing market conditions and cross-validate findings across different analytical domains.",
    solution: "Enhanced the original ReveNEW system with a sophisticated multi-agent architecture featuring three specialized AI analysts (Pricing, Traffic, and Sales) that work collaboratively to provide comprehensive insights. The system now offers dynamic price optimization, advanced traffic source analysis, and detailed sales performance metrics, while maintaining the natural language processing capabilities of the original platform.",
    tools: ["Python", "OpenAI", "Swarm AI"],
    link : "https://github.com/rpdpscl/bootcamp-project-revenew-2.0-AIFirst-Dec2024" // Github Link make sure it has https://
  },
  {
    title: "Self-Evaluation Assistant",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Performance evaluations are often subjective and time-consuming, making it difficult for employees to effectively document and analyze their achievements. Traditional methods lack standardization and data-driven insights.",
    solution: "Developed a Streamlit-based AI application that analyzes performance data using OpenAI's GPT-4 to provide objective, comprehensive evaluations across strategic objectives, behavioral competencies, and innovation metrics. The tool processes CSV/XLSX files and generates detailed assessments with specific achievements, scores, and reasoning.",
    tools: ["Python", "Streamlit", "OpenAI", "FAISS", "Langchain"],
    link : "https://github.com/rpdpscl/work-self-evaluation-automation-Dec2024" // Github Link make sure it has https://
  },
  {
    title: "PropGuard - Real Estate Listing Validation System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "The real estate market faces challenges with fraudulent listings, unverified agents, and inconsistent property information across platforms. Traditional validation methods are time-consuming and prone to human error, making it difficult to ensure listing authenticity and protect buyers.",
    solution: "PropGuard is a comprehensive real estate listing validation system that combines multiple verification layers:\n- Image authentication to detect duplicates and suspicious property photos\n- Agent verification across platforms using AI\n- Cross-platform listing consistency checks\n- Review sentiment analysis\n- Qualitative trust scoring system\nThe system provides automated validation with clear trust scores and actionable recommendations.",
    tools: ["Python", "OpenAI", "X.AI Grok", "Langchain", "Google Search API", "Flask"],
    link : "https://github.com/rpdpscl/bootcamp-hackathon-propguard-Nov2024" // Github Link make sure it has https://
  },
  {
    title: "ALAB - AI Career Preparation Assistant",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Bootcamp graduates often struggle with creating targeted resumes, preparing for technical interviews, and finding the right career path in tech. The manual process of customizing applications and preparing for interviews is time-consuming and may not align with industry standards.",
    solution: "Developed an AI-powered application that streamlines the career preparation process by offering automated resume customization, intelligent mock interviews, and personalized career guidance. The system uses GPT-4 to analyze job requirements and user qualifications, providing tailored recommendations and real-time interview feedback.",
    tools: ["Python", "Streamlit", "OpenAI"],
    link : "https://github.com/rpdpscl/bootcamp-hackathon-ALAB-AIFirst-Dec2024" // Github Link make sure it has https://
  },
  
];


export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">ALL PROJECTS</h1>
        <p className="text-gray-400 mb-8 sm:mb-12">Exploring the intersection of AI and real-world solutions</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/40 transition-all duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 saturate-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
              </div>
              
              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 tracking-tight">{project.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">PROBLEM:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">SOLUTION:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a href = {project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium tracking-wide"
                  >
                    VIEW PROJECT
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

