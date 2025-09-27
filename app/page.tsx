"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Cloud,
  Brain,
  ChevronDown,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Sparkles,
  Zap,
  Target,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to download the resume
  const downloadResume = () => {
    // Create a link to the resume file in the public folder
    const link = document.createElement("a")
    link.href = "/Siddharth_Hiraou_Resume.pdf" // This path is relative to the public folder
    link.download = "Siddharth_Hiraou_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                SH
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-lg blur opacity-75"></div>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Skills", "Education", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : "text-slate-300"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-violet-500/5 to-indigo-500/5" />
        </motion.div>

        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative w-40 h-40 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-slate-950 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  SH
                </span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
                Siddharth
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Hiraou
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-slate-300 mb-4">Data Science Graduate Student & ML Engineer</p>
              <div className="flex items-center justify-center space-x-2 text-purple-400">
                <Sparkles className="w-5 h-5" />
                <span className="text-lg font-medium">Transforming Data into Intelligent Solutions</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 group overflow-hidden"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 backdrop-blur-sm bg-transparent"
                onClick={downloadResume}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: Mail, href: "mailto:sidhiraou@gmail.com" },
                { icon: Linkedin, href: "https://linkedin.com/in/siddharth-hiraou" },
                { icon: Github, href: "https://github.com/siddharth-hiraou" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-3 rounded-full bg-slate-800/50 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group"
                >
                  <social.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="p-2 rounded-full border border-purple-500/30">
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Data Science graduate student at the University at Buffalo with a strong foundation
                  in machine learning, data engineering, and software development. With hands-on experience across
                  multiple internships, I specialize in building intelligent systems that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise spans from developing ML models with{" "}
                  <span className="text-purple-400 font-semibold">93.1% accuracy</span> for poultry monitoring systems
                  to creating automated ETL pipelines that save{" "}
                  <span className="text-purple-400 font-semibold">48 hours of manual work per week</span>. I'm driven by
                  the challenge of transforming complex data into actionable insights.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <span>Buffalo, NY</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <span>(716) 750-9361</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Brain, title: "Machine Learning", desc: "Advanced ML algorithms and deep learning" },
                { icon: Database, title: "Data Engineering", desc: "ETL pipelines and data architecture" },
                { icon: Cloud, title: "Cloud Computing", desc: "AWS, GCP, and Azure platforms" },
                { icon: Code, title: "Software Development", desc: "Full-stack development and APIs" },
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05, rotateY: 5 }} className="relative group">
                  <Card className="text-center p-6 bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative">
                      <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                company: "Intisca Technologies",
                role: "Data Pipeline Engineering Intern",
                location: "Texas, USA",
                period: "May 2025 – Jul 2025",
                achievements: [
                  "Designed and developed an ETL pipeline integrating multiple LLMs (OpenAI GPT-4.0, HuggingFace) to process user-defined natural language inputs into structured data workflows",
                  "Conducted detailed financial scoping to estimate operational costs across AWS infrastructure (EC2, S3, Lambda) and LLM API usage, enabling informed budgeting and deployment strategy",
                  "Implemented and orchestrated the pipeline using Apache Airflow and Python, ensuring modularity, scalability, and fault tolerance for production-ready deployment",
                ],
                highlight: "LLM Integration",
              },
              {
                company: "Hanker Analytics",
                role: "Data Engineering Intern",
                location: "Pleasanton, California",
                period: "May 2023 – Jul 2023",
                achievements: [
                  "Developed and executed a Data Quality Management (DQM) model in Python, achieving a 35.9% improvement in analysis report accuracy",
                  "Created Power BI dashboard to showcase client applications, resulting in 3 times increase in client engagement with the company",
                  "Built an end-to-end ETL pipeline and designed web scrapers to extract pharmaceutical data from government websites, ensuring timely and accurate data flow for analysis",
                  "Implemented a machine learning model to predict disease causes, reaching a prediction accuracy of 86.1%",
                  "Designed statistical visualization charts to track economic progress, enhancing decision-making processes and boosting company engagement",
                ],
                highlight: "35.9% improvement",
              },
              {
                company: "Internlabs",
                role: "Data Analyst Intern",
                location: "Pune, India",
                period: "Dec 2022 – May 2023",
                achievements: [
                  "Developed and orchestrated a Real Estate Data Analysis application, using multiple data scraping techniques to extract data from informal verified sources, including Facebook, Telegram channels, and WhatsApp communities",
                  "Consolidated data from diverse sources into a unified data structure, processing over 90,000 real estate listings in Pune for accurate analysis",
                  "Spearheaded the development of an automated data pipeline, eliminating manual data entry, and saving approximately 48 hours of work per week",
                ],
                highlight: "48 hours saved/week",
              },
              {
                company: "IsquareIT",
                role: "Research Assistant",
                location: "Pune, India",
                period: "Jun 2022 – May 2023",
                achievements: [
                  "Developed a real-time poultry monitoring system for Venky's Chicken farm using AI/ML algorithms, achieving a model accuracy of 93.1%",
                  "Utilized Python, OpenCV, and CNN-based pattern recognition to monitor flock behavior, analyzing over 41,000 images for health trend identification and risk mitigation",
                  "Conducted on-ground research at IPMT (Institute of Poultry Management and Technology) to study chicken herd behavior, optimizing AI models for pattern recognition",
                  "Implemented an attendance monitoring system for farm workers, improving workforce accountability and boosting operational efficiency",
                  "Co-authored a research paper, published in the International Journal of Technological Exploration and Learning (IJTE)",
                ],
                highlight: "93.1% accuracy",
              },
              {
                company: "Orgpedia",
                role: "Software Intern (Python)",
                location: "Pune, India",
                period: "Feb 2023 – Apr 2023",
                achievements: [
                  "Worked on debugging Python code for the company's document analysis model, increasing model accuracy by 22.61%",
                  "Collaborated with the data science team to identify and resolve critical issues in the existing codebase and mentored 2 juniors on future work",
                  "Spearheaded the implementation of code optimization techniques, reducing runtime by 15%, improving overall system efficiency",
                ],
                highlight: "22.61% accuracy boost",
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Card className="relative p-6 bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-purple-400">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                      <div className="flex items-center space-x-1 text-slate-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        <Target className="w-3 h-3 mr-1" />
                        {exp.highlight}
                      </Badge>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Smart Chicken Disease Detection and Farm Management Solution",
                description:
                  "Real-time poultry monitoring system using AI/ML algorithms for early disease detection, enhancing productivity and reducing losses for Venky's Chicken farm.",
                technologies: [
                  "Python",
                  "AI/ML",
                  "OpenCV",
                  "CNN",
                  "Automation",
                  "Cloud Integration",
                  "Farm Management",
                ],
                features: [
                  "Real-time disease detection with 93.1% accuracy",
                  "Automated temperature control mechanisms",
                  "Worker attendance monitoring system",
                  "Health trend analysis and risk mitigation",
                ],
                github: "#",
                demo: "#",
                gradient: "from-purple-500 to-violet-500",
              },
              {
                title: "AutoETL",
                description:
                  "Natural language-driven ETL pipeline generator that converts user prompts into executable Pandas or PySpark code using GPT-4 via LangChain.",
                technologies: ["GPT-4 API", "LangChain", "Airflow", "Python", "Pandas", "Streamlit", "Docker"],
                features: [
                  "Natural language to code conversion",
                  "Apache Airflow DAG auto-generation",
                  "Interactive Streamlit interface for data preview",
                  "Zero manual coding required for ETL workflows",
                ],
                github: "#",
                demo: "#",
                gradient: "from-violet-500 to-indigo-500",
              },
              {
                title: "Predictive Analytics for Credit Risk Evaluation",
                description:
                  "Predictive system to evaluate credit risk using customer demographics and financial history with multiple ML models and real-time inference.",
                technologies: [
                  "Python",
                  "Machine Learning",
                  "Scikit-learn",
                  "Flask",
                  "XGBoost",
                  "SHAP/LIME",
                  "PyTorch",
                ],
                features: [
                  "Multiple ML models comparison (Logistic Regression, Random Forest, XGBoost)",
                  "Flask API with PyTorch backend for scalable inference",
                  "SHAP/LIME visualizations for model explainability",
                  "Extensive hyperparameter tuning with GridSearchCV",
                ],
                github: "#",
                demo: "#",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "End-to-End ML Deployment Pipeline",
                description:
                  "Complete data intelligence pipeline with preprocessing, ML models, experiment tracking, and real-time dashboard for bank marketing campaign insights.",
                technologies: ["Python", "SQLite", "Scikit-learn", "MLflow", "FastAPI", "Streamlit", "DagsHub"],
                features: [
                  "End-to-end ETL pipeline with SQLite storage",
                  "MLflow experiment tracking and DagsHub version control",
                  "FastAPI endpoints for real-time predictions",
                  "Responsive Streamlit dashboard for campaign insights",
                ],
                github: "#",
                demo: "#",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-20 rounded-xl blur group-hover:opacity-30 transition-opacity`}
                ></div>
                <Card className="relative h-full bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                        {project.title}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-500/20">
                            <Github className="w-4 h-4 text-purple-400" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-500/20">
                            <ExternalLink className="w-4 h-4 text-purple-400" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                    <CardDescription className="text-slate-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-white mb-2 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-purple-400" />
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm text-slate-300">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2 flex items-center">
                          <Code className="w-4 h-4 mr-2 text-purple-400" />
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Programming Languages",
                icon: Code,
                skills: ["Python", "Java", "JavaScript", "C/C++", "R", "SQL", "Bash"],
                gradient: "from-purple-500 to-violet-500",
              },
              {
                category: "Databases & Cloud",
                icon: Database,
                skills: ["Oracle SQL", "MySQL", "MongoDB", "PostgreSQL", "Firebase", "Hadoop", "AWS", "GCP"],
                gradient: "from-violet-500 to-indigo-500",
              },
              {
                category: "Frameworks & Libraries",
                icon: Brain,
                skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Keras", "Scikit-learn", "OpenCV", "LangChain"],
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                category: "Tools & Platforms",
                icon: Cloud,
                skills: ["Airflow", "Docker", "Kubernetes", "Power BI", "Tableau", "MLflow", "Streamlit", "FastAPI"],
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${skillGroup.gradient} opacity-20 rounded-xl blur group-hover:opacity-30 transition-opacity`}
                ></div>
                <Card className="relative h-full text-center p-6 bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="relative mb-4">
                    <skillGroup.icon className="w-12 h-12 text-purple-400 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.05 }} className="inline-block m-1">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                degree: "Master of Science in Data Science",
                school: "University at Buffalo, The State University of New York",
                location: "Buffalo, NY",
                period: "August 2024 – December 2025",
                gpa: "In Progress",
                coursework: [
                  "Data Intensive Computing",
                  "Machine Learning",
                  "Statistical Learning and Data Mining",
                  "Data Models and Query Languages",
                  "Numerical Mathematics for Data Science",
                  "Probability Theory for Data Science",
                ],
                gradient: "from-purple-500 to-violet-500",
              },
              {
                degree: "Bachelor of Engineering in Information Technology",
                school: "International Institute of Information Technology",
                location: "Pune, India",
                period: "June 2020 – June 2024",
                gpa: "4.0/4.0",
                coursework: [
                  "Data Structures & Algorithms",
                  "Machine Learning",
                  "Cloud Computing",
                  "Data Mining & Warehousing",
                  "Artificial Intelligence",
                  "Big Data Analytics",
                ],
                gradient: "from-violet-500 to-indigo-500",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} opacity-20 rounded-xl blur group-hover:opacity-30 transition-opacity`}
                ></div>
                <Card className="relative p-6 bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient}`}></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-purple-400" />
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-purple-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="flex items-center space-x-1 text-slate-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-purple-400" />
                        <span className="font-medium text-purple-300">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-purple-400" />
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "AWS Certified Cloud Practitioner",
                provider: "Amazon Web Services",
                description:
                  "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
                icon: Cloud,
                skills: ["Cloud Computing", "AWS Services", "Security", "Architecture", "Cost Management"],
                gradient: "from-orange-500 to-yellow-500",
                providerColor: "text-orange-400",
              },
              {
                title: "Google Data Analytics Professional Certificate",
                provider: "Google",
                description:
                  "Comprehensive data analytics skills including data cleaning, analysis, visualization, and storytelling with data.",
                icon: Database,
                skills: ["Data Analysis", "Data Visualization", "SQL", "R Programming", "Tableau", "Data Storytelling"],
                gradient: "from-blue-500 to-green-500",
                providerColor: "text-blue-400",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${cert.gradient} opacity-20 rounded-xl blur group-hover:opacity-30 transition-opacity`}
                ></div>
                <Card className="relative h-full bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`}></div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="relative mr-3">
                            <cert.icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <div>
                            <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                              {cert.title}
                            </CardTitle>
                            <p className={`text-sm font-medium ${cert.providerColor}`}>{cert.provider}</p>
                          </div>
                        </div>
                        <CardDescription className="text-slate-300 text-sm leading-relaxed">
                          {cert.description}
                        </CardDescription>
                      </div>
                      <div className="ml-4">
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          <Award className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-medium text-white mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                        Key Skills Covered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certification Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "2", label: "Professional Certifications", icon: Award },
                { number: "2", label: "Cloud Platforms", icon: Cloud },
                { number: "100%", label: "Industry Recognition", icon: Target },
              ].map((stat, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Card className="relative p-6 bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm text-center">
                    <div className="relative mb-3">
                      <stat.icon className="w-8 h-8 text-purple-400 mx-auto group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work
              together to create something amazing!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              {[
                { icon: Mail, title: "Email", info: "sidhiraou@gmail.com", gradient: "from-purple-500 to-violet-500" },
                { icon: Phone, title: "Phone", info: "(716) 750-9361", gradient: "from-violet-500 to-indigo-500" },
                { icon: MapPin, title: "Location", info: "Buffalo, NY", gradient: "from-indigo-500 to-purple-500" },
              ].map((contact, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05, rotateY: 5 }} className="relative group">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} opacity-20 rounded-xl blur group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <Card className="relative p-6 bg-slate-900/50 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative mb-4">
                      <contact.icon className="w-12 h-12 text-purple-400 mx-auto group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className="font-bold text-white mb-2">{contact.title}</h3>
                    <p className="text-slate-300">{contact.info}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex justify-center space-x-6 mb-8">
                {[
                  { icon: Mail, href: "mailto:sidhiraou@gmail.com" },
                  { icon: Linkedin, href: "https://linkedin.com/in/siddharth-hiraou" },
                  { icon: Github, href: "https://github.com/siddharth-hiraou" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative p-4 rounded-full bg-slate-800/50 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group"
                  >
                    <social.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  </motion.a>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            &copy; 2025 Siddharth Hiraou. Crafted with <span className="text-purple-400">💜</span> and cutting-edge
            technology.
          </p>
        </div>
      </footer>
    </div>
  )
}
