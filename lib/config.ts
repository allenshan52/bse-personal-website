import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Allen Yitian Shan",
	headline: "Aspiring Innovator | Full-Stack Developer | AI Enthusiast",
	bio: "A results-driven computer science student at [Your University] with a passion for building disruptive, scalable, and user-centric applications. Eager to leverage modern technologies to solve real-world problems and drive impactful change. Currently seeking high-growth internship opportunities for Summer 202X.",

	// Your contact email
	email: "allenshan.yitian@gmail.com",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https" },
		{ name: "LinkedIn", url: "https" },
		{ name: "Twitter", url: "https" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"JavaScript/TypeScript", "Tailwind CSS", "React", "Node.js", "Python", "Tensorflow" , "PyTorch", "C++", "Java", "AWS", 
		"OpenAI API", "Ollama", "OpenVino", "HuggingFace", "Fast API"
	],

	// Add your projects here
	projects: [
		{
			title: "Secondhand Object Exchange APP",
			description: "A decentralized, AI-powered platform to streamline cross-functional team collaboration using a novel blockchain consensus algorithm. Built with a microservices architecture.",
			stack: ["JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "VibeCheck",
			description: "A mobile-first social app that uses sentiment analysis to curate positive news feeds. Leveraged serverless functions for infinite scalability and low-cost operation.",
			stack: ["React Native", "Firebase", "Google Cloud Functions", "NLP.js"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "AlgoVisualizer",
			description: "A web-based tool for visualizing complex data structures and algorithms, built to help students (like me) understand core CS concepts in an interactive way.",
			stack: ["TypeScript", "React", "D3.js"],
			githubLink: "",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "AI Software Engineer Intern",
			company: "Lenovo",
			date: "June to August 2025",
			location: "Beijing, China",
			description: "Architected a FastAPI based AI agent pipeline that generates real-time multimodal meeting-note for Microsoft Teams meetings by locally deploying LLMs and the OpenAI API, leading prompt engineering for generating meeting keypoints as well as complementary images and videos, and designing a tiered NLP architecture to optimize the grouping of meeting segments, improving pipeline run speed by 80% and increasing chosen image/video correlation with generated notes by 55% under rigid token restrictions."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "University of California, Los Angeles",
			date: "Expected May 2028",
			note: "GPA: 3.8/4"
		}
	]
};

export default PORTFOLIO_DATA;