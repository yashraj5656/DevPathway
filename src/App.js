import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Components/Navbar";
import Frontend from "./Components/Frontend";
import Backend from "./Components/Backend";
import DevOps from "./Components/DevOps";
import FullStack from "./Components/FullStack";
import AIEngineer from "./Components/AIEngineer";
import DataAnalyst from "./Components/DataAnalyst";
import AIAndDataScience from "./Components/AIAndDataScience";
import Android from "./Components/Android";
import PostgreSQL from "./Components/PostgreSQL";
import Blockchain from "./Components/Blockchain";
import QA from "./Components/QA";
import SoftwareArchitect from "./Components/SoftwareArchitect";
import CyberSecurity from "./Components/CyberSecurity";
import UXDesign from "./Components/UXDesign";
import GameDeveloper from "./Components/GameDeveloper";
import TechnicalWriter from "./Components/TechnicalWriter";
import MLOps from "./Components/MLOps";
import SQL from "./Components/SQL";
import ComputerScience from "./Components/ComputerScience";
import ReactRoadmap from "./Components/ReactRoadmap";
import VueRoadmap from "./Components/VueRoadmap";
import AngularRoadmap from "./Components/AngularRoadmap";
import JavaScriptRoadmap from "./Components/JavaScriptRoadmap";
import NodejsRoadmap from "./Components/NodejsRoadmap";
import TypeScriptRoadmap from "./Components/TypeScriptRoadmap";
import PythonRoadmap from "./Components/PythonRoadmap";
import SystemDesignRoadmap from "./Components/SystemDesignRoadmap";
import APIDesignRoadmap from "./Components/APIDesignRoadmap";
import AspNetCoreRoadmap from "./Components/AspNetCoreRoadmap";
import JavaRoadmap from "./Components/JavaRoadmap";
import CppRoadmap from "./Components/CppRoadmap";
import FlutterRoadmap from "./Components/FlutterRoadmap";
import SpringBootRoadmap from "./Components/SpringBootRoadmap";
import GoRoadmap from "./Components/GoRoadmap";
import RustRoadmap from "./Components/RustRoadmap";
import GraphQLRoadmap from "./Components/GraphQLRoadmap";
import SoftwareDesignArchitecture from "./Components/SoftwareDesignArchitecture";
import DesignSystemRoadmap from "./Components/DesignSystemRoadmap";
import FrontendProjects from "./Components/FrontendProjects";
import BackendProjects from "./Components/BackendProjects";
import DevOpsProjects from "./Components/DevOpsProjects";
import BackendPerformance from "./Components/BackendPerformance";
import FrontendPerformance from "./Components/FrontendPerformance";
import APISecurity from "./Components/APISecurity";
import CodeReviews from "./Components/CodeReviews";
import AWSBestPractices from "./Components/AWSBestPractices";
import JavaScriptQuestions from "./Components/JavaScriptQuestions";
import NodeJSQuestions from "./Components/NodeJSQuestions";
import ReactQuestions from "./Components/ReactQuestions";
import SQLQueriesQuestions from "./Components/SQLQueriesQuestions";
import SQLTheoryQuestions from "./Components/SQLTheoryQuestions";
import BackendQuestions from "./Components/BackendQuestions";
import DataAnalystQuestions from "./Components/DataAnalystQuestions";
import FullStackQuestions from "./Components/FullStackQuestions";
import GolangQuestions from "./Components/GolangQuestions";
import DataScienceQuestions from "./Components/DataScienceQuestions";
import FrontendQuestions from "./Components/FrontendQuestions";
import DevOpsQuestions from "./Components/DevOpsQuestions";
import ReactNative from "./Components/ReactNative";
import AWS from "./Components/AWS";
import CodeReview from "./Components/CodeReview";
import Docker from "./Components/Docker";
import Kubernetes from "./Components/Kubernetes";
import Linux from "./Components/Linux";
import MongoDB from "./Components/MongoDB";
import PromptEngineering from "./Components/PromptEngineering";
import Terraform from "./Components/Terraform";
import DataStructures from "./Components/DataStructures";
import GitGitHub from "./Components/GitGitHub";
import Redis from "./Components/Redis";
import PHP from "./Components/PHP";
import Cloudflare from "./Components/Cloudflare";
import AIAgents from "./Components/AIAgents";
import AIRedTeaming from "./Components/AIRedTeaming";
//import ProductDescription from "./Components/ProductDescription"; 
//import PythonBasics from "./Components/PythonBasics";
//import ReactHandbook from "./Components/ReactHandbook";
//import NodejsEssentials from "./Components/NodejsEssentials";
//import SqlFundamentals from "./Components/SqlFundamentals";
import JavaScriptQuiz from "./Components/JavaScriptQuiz";
import PythonQuiz from "./Components/PythonQuiz";
import BashQuiz from "./Components/BashQuiz";
import TypeScriptQuiz from "./Components/TypeScriptQuiz";
import DockerQuiz from "./Components/DockerQuiz";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import ContactUs from "./Components/ContactUs";
import HeroSection from "./Components/HeroSection";


const games = [
  {
    title: "Quiz Games",
    items: [
      { url: "https://zyqentrapy.netlify.app", image: "PY.png" },
      { url: "https://zyqentrabash.netlify.app", image: "BA.png" },
      { url: "https://yourdomain.com/typescript-quiz", image: "TSP.png" },
      { url: "https://yourdomain.com/docker-quiz", image: "DK.png" },
      { url: "https://zyqentrajs.netlify.app", image: "JSP.png" },
    ],
  },
];

//const ebook =[
//  {
//    title: "eBooks",
//    items: [
//      { name: "JavaScript Guide", image: "JS.png" },
//      { name: "Python Basics", image: "P.png" },
//      { name: "React Handbook", image: "R.png" },
//      { name: "Node.js Essentials", image: "NJS.png" },
//      { name: "SQL Fundamentals", image: "SQL.png" },
//    ],
//  },
//]

const sections = [
  {
    title: "Role-based Roadmaps",
    items: [
      "Frontend",
      "Backend",
      "DevOps",
      "Full Stack",
      "AI Engineer",
      "Data Analyst",
      "AI and Data Scientist",
      "Android",
      // "iOS-Roadmap", // Removed since no iOSRoadmap component is imported
      "PostgreSQL",
      "Blockchain",
      "QA",
      "Software Architect",
      "Cyber Security",
      "UX Design",
      "Game Developer",
      "Technical Writer",
      "MLOps",
    ],
  },
  {
    title: "Skill-based Roadmaps",
    items: [
      "SQL",
      "Computer Science",
      "React",
      "Vue",
      "Angular",
      "JavaScript",
      "Nodejs",
      "TypeScript",
      "Python",
      "System Design",
      "API Design",
      "ASPNET Core",
      "Java",
      "Cpp",
      "Flutter",
      "Spring Boot",
      "Go Roadmap",
      "Rust",
      "GraphQL",
      "Software Design and Architecture",
      "Design System",
    ],
  },
  {
    title: "Project Ideas",
    items: ["Frontend Projects", "Backend Projects", "DevOps Projects"],
  },
  {
    title: "Best Practices",
    items: [
      "Backend Performance",
      "Frontend Performance",
      "API Security",
      "Code Reviews",
      "AWS Best Practices",
    ],
  },
  {
    title: "Questions",
    items: [
      "JavaScript Questions",
      "Node.js Questions",
      "React Questions",
      "SQL Queries Questions",
      "SQL Theory Questions",
      "Backend Questions",
      "Data Analyst Questions",
      "Full-stack Questions",
      "Golang Questions",
      "Data Science Questions",
      "Frontend Questions",
      "DevOps Questions",
    ],
  },
  {
    title: "Other Topics",
    items: [
      "React Native",
      "AWS",
      "Code Review",
      "Docker",
      "Kubernetes",
      "Linux",
      "MongoDB",
      "Prompt Engineering",
      "Terraform",
      "Data Structures",
      "Git and GitHub",
      "Redis",
      "PHP",
      "Cloudflare",
      "AI Agents",
      "AI Red Teaming",
    ],
  },
];

function Home() {
  return (
    <div className="app">
        <HeroSection />
      
     {/* <header className="header">
       <h1>Zyqentra</h1>
        
      </header>*/} 

      {/*<div id="games" className="gam">Quiz Lab</div>*/}
      <div className="games">
  {games.map((section, index) => (
    <div key={index} className="section">
      <h2>{section.title}</h2>
      <div className="cad-grid">
        {section.items.map((item, idx) => (
          <a
            key={idx}
            href={item.url}       // use URL now
            target="_blank"
            rel="noreferrer"
            className="cad"
          >
            <img
              src={item.image}
              alt="game"          // optional: generic alt if name removed
              className="cad-image"
            />
          </a>
        ))}
      </div>
      <br />
    </div>
  ))}
</div>


      <div id="roadmap" className="roadmap">Skill Track</div>
      <div className="sections">
        {sections.map((section, index) => (
          section.items.length > 0 && (
            <div key={index} className="section">
              <h2>{section.title}</h2>
              <div className="card-grid">
                {section.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/${slugify(item)}`}
                    className="card"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/*<div id="ebooks" className="ebooks">Learn Shelf</div>
      <div className="ebook">
        {ebook.map((ebook, index) => (
          <div key={index} className="section">
            <h2>{ebook.title}</h2>
            <div className="cad-grid">
              {ebook.items.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/${slugify(item.name)}`}
                  className="cadd"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cad-image"
                  />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>*/}
      <br />
    </div>
  );
}


function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />  
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/devops" element={<DevOps />} />
        <Route path="/full-stack" element={<FullStack />} />
        <Route path="/ai-engineer" element={<AIEngineer />} />
        <Route path="/data-analyst" element={<DataAnalyst />} />
        <Route path="/ai-and-data-scientist" element={<AIAndDataScience />} />
        <Route path="/android" element={<Android />} />
        {/* <Route path="/ios-roadmap" element={<iOSRoadmap />} /> */} {/* Uncomment if iOSRoadmap component is added */}
        <Route path="/postgresql" element={<PostgreSQL />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/software-architect" element={<SoftwareArchitect />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/ux-design" element={<UXDesign />} />
        <Route path="/game-developer" element={<GameDeveloper />} />
        <Route path="/technical-writer" element={<TechnicalWriter />} />
        <Route path="/mlops" element={<MLOps />} />
        <Route path="/sql" element={<SQL />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/react" element={<ReactRoadmap />} />
        <Route path="/vue" element={<VueRoadmap />} />
        <Route path="/angular" element={<AngularRoadmap />} />
        <Route path="/javascript" element={<JavaScriptRoadmap />} />
        <Route path="/nodejs" element={<NodejsRoadmap />} />
        <Route path="/typescript" element={<TypeScriptRoadmap />} />
        <Route path="/python" element={<PythonRoadmap />} />
        <Route path="/system-design" element={<SystemDesignRoadmap />} />
        <Route path="/api-design" element={<APIDesignRoadmap />} />
        <Route path="/aspnet-core" element={<AspNetCoreRoadmap />} />
        <Route path="/java" element={<JavaRoadmap />} />
        <Route path="/cpp" element={<CppRoadmap />} />
        <Route path="/flutter" element={<FlutterRoadmap />} />
        <Route path="/spring-boot" element={<SpringBootRoadmap />} />
        <Route path="/go-roadmap" element={<GoRoadmap />} />
        <Route path="/rust" element={<RustRoadmap />} />
        <Route path="/graphql" element={<GraphQLRoadmap />} />
        <Route path="/software-design-and-architecture" element={<SoftwareDesignArchitecture />} />
        <Route path="/design-system" element={<DesignSystemRoadmap />} />
        <Route path="/frontend-projects" element={<FrontendProjects />} />
        <Route path="/backend-projects" element={<BackendProjects />} />
        <Route path="/devops-projects" element={<DevOpsProjects />} />
        <Route path="/backend-performance" element={<BackendPerformance />} />
        <Route path="/frontend-performance" element={<FrontendPerformance />} />
        <Route path="/api-security" element={<APISecurity />} />
        <Route path="/code-reviews" element={<CodeReviews />} />
        <Route path="/aws-best-practices" element={<AWSBestPractices />} />
        <Route path="/javascript-questions" element={<JavaScriptQuestions />} />
        <Route path="/node.js-questions" element={<NodeJSQuestions />} />
        <Route path="/react-questions" element={<ReactQuestions />} />
        <Route path="/sql-queries-questions" element={<SQLQueriesQuestions />} />
        <Route path="/sql-theory-questions" element={<SQLTheoryQuestions />} />
        <Route path="/backend-questions" element={<BackendQuestions />} />
        <Route path="/data-analyst-questions" element={<DataAnalystQuestions />} />
        <Route path="/full-stack-questions" element={<FullStackQuestions />} />
        <Route path="/golang-questions" element={<GolangQuestions />} />
        <Route path="/data-science-questions" element={<DataScienceQuestions />} />
        <Route path="/frontend-questions" element={<FrontendQuestions />} />
        <Route path="/devops-questions" element={<DevOpsQuestions />} />
        <Route path="/react-native" element={<ReactNative />} />
        <Route path="/aws" element={<AWS />} />
        <Route path="/code-review" element={<CodeReview />} />
        <Route path="/docker" element={<Docker />} />
        <Route path="/kubernetes" element={<Kubernetes />} />
        <Route path="/linux" element={<Linux />} />
        <Route path="/mongodb" element={<MongoDB />} />
        <Route path="/prompt-engineering" element={<PromptEngineering />} />
        <Route path="/terraform" element={<Terraform />} />
        <Route path="/data-structures" element={<DataStructures />} />
        <Route path="/git-and-github" element={<GitGitHub />} />
        <Route path="/redis" element={<Redis />} />
        <Route path="/php" element={<PHP />} />
        <Route path="/cloudflare" element={<Cloudflare />} />
        <Route path="/ai-agents" element={<AIAgents />} />
        <Route path="/ai-red-teaming" element={<AIRedTeaming />} />
        <Route path="/python-quiz" element={<PythonQuiz />} />
        <Route path="/bash-quiz" element={<BashQuiz />} />
        <Route path="/typescript-quiz" element={<TypeScriptQuiz />} />
        <Route path="/docker-quiz" element={<DockerQuiz />} />
        <Route path="/javascript-quiz" element={<JavaScriptQuiz />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactUs />} />
       {/* <Route path="/javascript-guide" element={<ProductDescription />} /> 
        <Route path="/python-basics" element={<PythonBasics />} />
        <Route path="/react-handbook" element={<ReactHandbook />} /> 
        <Route path="/nodejs-essentials" element={<NodejsEssentials />} />
        <Route path="/sql-fundamentals" element={<SqlFundamentals />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
}