import emoji from "react-easy-emoji";

export const greetings = {
	name: "Hasan Shahid Kibria",
	title: "Hi there, I'm Hasan",
	description:
		"a Software Engineering student from Ontario, Canada looking for new opportunities to solve problems through technological means. Currently, I am open for ,",
	resumeLink: "www.google.com",
};

export const openSource = {
	githubUserName: "Hasankib",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/Hasankib",
	linkedin: "https://www.linkedin.com/in/hasan-kibria-880823170/",
};

export const skillsSection = {
	title: "My Technical Skills",
	subTitle:
		"Through my experience in the work enviorment, as well as personal projects, I have gained proficiency with some of the technologies shown below. I love to solve problems, and learn new ways to do so!",
	skills: [
		emoji(
			"⚡ I have solid experience in frontend and backend development with relevant stacks; technologies I am familiar with are Flask, .Net, Angular, React, etc."
		),
		emoji(
			"⚡ I have an understanding of pipelines, unit testing, and other quality-assurance related processes used in the software developement lifecycle in today's industry"
		),
		emoji(
			"⚡ As a result of my strong foundational software aptitude gained through school and work, I am a believer in my ablility to learn and implement new technologies on the fly!"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "c-sharp",
			fontAwesomeClassname: "logos:c-sharp",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const educationInfo = [
	{
		schoolName: "McMaster University",
		subHeader: "Bachelors of Software Engineering",
		duration: "September 2018 - April 2023 (expected)",
		desc: "Co-op oriented Software Engineering program",
		descBullets: [
			"Some relevant courses: Data Structures/Algorithms, Principles of Programming, Discrete Mathematics, Introduction to Software Development, Concurrent System Design",
			"Achievements: Deans Honor List (Apil 2019)",
		],
	}
];

export const experience = [
	{
		role: "Fullstack Software Developer",
		company: "ArcelorMittal Dofasco",
		companylogo: "/img/icons/common/AMD.jpg",
		date: "May 2021 – Dec 2021",
		desc: "Worked as a full stack developer on multiple web applications, writing RESTFUL APi's as well as single page user interfaces. Please see my resume for more details",
	},
	{
		role: "Incoming Software Engineer (Co-op)",
		company: "Renesas Electronics",
		companylogo: "/img/icons/common/renesas.png",
		date: "Jan 2022 – April 2022 (expected)",
		desc: "Expected to work in a team of engineers developing Python frameworks and libraries used for the organization's custom-programmed devices",
	}
];

export const projects = [
	{
		name: "Chica-go-flow",
		desc: "A React app backended through Python's Flask library that models data collected since 2001 as a graph and implements Dijkstra's Algorithm to find the safest path(ie. the path with the least amount of crimes commited through it in the past 19 years) between any 2 of the 77 community areas in the city of Chicago,IL",
		github: "https://github.com/Hasankib/Chica-go-Flow",
	},
	{
		name: "ConFib",
		desc: "This React-frontended app provides a user interface which asks the user to input their desired length of the Fibonacci Sequence, and then communicates with a Go-lang backend through a websocket to use its message passing and calculate the sequence in real time, then return the output back to the frontend. Also containerized through Docker",
		github: "https://github.com/Hasankib/conFib",
	},
];

export const feedbacks = [
	{
		name: "None",
		feedback:
			"None",
	},
];