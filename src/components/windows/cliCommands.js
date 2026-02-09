const commands = {
  help: {
    description: "List all available commands",
    fn: () => `
Available commands:

about        → Who I am
skills       → Tech stack overview
projects     → Highlighted work
resume       → Resume download link
contact      → How to reach me
clear        → Clear terminal
`
  },

  about: {
    description: "About the developer",
    fn: () => `
Harsh Malu
Undergraduate IT student exploring full-stack systems,
low-level computing, and applied AI.

Interests:
• React UI engineering
• System-level programming
• Database architecture
• ML exploration
`
  },

  skills: {
    description: "View technical skills",
    fn: () => `
Frontend:
- React
- JavaScript
- SCSS / CSS
- UI Component Design

Backend / Data:
- Node.js
- SQL / DBMS
- API design basics

Systems:
- C++
- x86 Assembly
- 8051 Microcontrollers

Tools:
- Git
- Linux
- Docker (basic)
`
  },

  projects: {
    description: "Portfolio highlights",
    fn: () => `
Highlighted Work:

1️⃣ Railway Navigation Web App
   QR-based station navigation prototype

2️⃣ Blood Bank DB System
   Relational schema + constraints

3️⃣ Duty Management System
   Allocation + query operations

4️⃣ React Portfolio UI
   macOS-inspired interface components
`
  },

  resume: {
    description: "Get resume link",
    fn: () => `
Resume:
https://your-resume-link-here.com
`
  },

  contact: {
    description: "Contact information",
    fn: () => `
Email: your@email.com
GitHub: github.com/harshmalu9
LinkedIn: your-linkedin-url
`
  }
}

export default commands