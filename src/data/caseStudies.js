// Case study content for each TechAimz project, keyed by URL slug.
const caseStudies = {
  'baseline-health': {
    title: 'Baseline Health AI Platform',
    subtitle: 'AI-powered patient analytics and reporting for a healthcare start-up.',
    meta: ['Sector: Healthcare', 'Timeline: 2024 to 2026', 'Role: Full-Stack & AI Engineering'],
    overview:
      'Baseline Health is a healthcare start-up building a patient analytics and reporting platform. TechAimz was engaged to design and build the product end to end, from the AI engine and backend services to the cloud infrastructure and user-facing dashboards.',
    challenge:
      'Producing patient reports was slow and manual. Staff spent hours gathering information, interpreting intake data, and writing up reports by hand, which limited how many patients could be processed and introduced inconsistency. The team needed a faster, repeatable way to turn raw intake data into clear, accurate reports without growing headcount.',
    solutionIntro:
      'TechAimz built an AI-powered health analysis platform using Python (FastAPI) and Next.js, with OpenAI GPT-4 at its core. The solution included:',
    solutionPoints: [
      'An intelligent intake chatbot that guides patients through structured data collection.',
      'Automated PDF report generation from intake data, with custom email delivery to the right recipients.',
      'Real-time analytics dashboards that give staff visibility into patient intake workflows.',
      'Scalable, secure cloud infrastructure on Vercel and Supabase, built to grow with demand.',
    ],
    results: [
      { num: '80%', label: 'reduction in manual reporting time' },
      { num: 'Real-time', label: 'analytics dashboards for intake workflows' },
      { num: 'End-to-end', label: 'automation from intake to delivered report' },
    ],
    technologies: ['Python', 'FastAPI', 'Next.js', 'OpenAI GPT-4', 'Supabase', 'PostgreSQL', 'Vercel'],
    relevance:
      'The same building blocks behind Baseline Health, automated report generation, document processing, secure cloud infrastructure, and clear analytics dashboards, map directly onto public-sector needs such as grant reporting, case management, and citizen services. TechAimz brings this proven approach to government and public institutions.',
  },

  'goacara': {
    title: 'GoAcara Event Management Platform',
    subtitle: 'A scalable, microservices-based event management SaaS on Kubernetes.',
    meta: ['Sector: Events / SaaS', 'Timeline: 2025 to 2026', 'Role: Full-Stack & Cloud Engineering'],
    overview:
      'GoAcara is an event management SaaS product. TechAimz designed and built the platform as a set of microservices, along with the cloud infrastructure and deployment pipelines needed to run it reliably at scale.',
    challenge:
      'An event platform has to stay fast and available even when traffic spikes around popular events. The product needed a resilient, scalable architecture, reproducible infrastructure, and a deployment process that could ship updates safely and often, without manual, error-prone steps.',
    solutionIntro:
      'TechAimz built a microservices platform with a Nuxt/Vue.js frontend and a Node.js and Go backend, and engineered the full cloud foundation around it:',
    solutionPoints: [
      'A 4-node Kubernetes cluster on AWS EKS with auto-scaling and ALB load balancing to handle variable demand.',
      'Infrastructure-as-Code with Terraform, with state securely backed up in an AWS S3 bucket.',
      'Automated CI/CD pipelines via ArgoCD for safe, repeatable deployments.',
      'Services containerised with Podman and Docker for consistent local development and production builds.',
    ],
    results: [
      { num: '4-node', label: 'auto-scaling Kubernetes cluster' },
      { num: 'Automated', label: 'CI/CD deployments via ArgoCD' },
      { num: 'Reproducible', label: 'infrastructure managed as code' },
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS EKS', 'ArgoCD', 'Terraform'],
    relevance:
      'Secure, scalable, and reproducible infrastructure is exactly what mission-critical public-sector systems require. The same Kubernetes, Infrastructure-as-Code, and automated deployment practices used for GoAcara give government services high availability, smooth updates, and dependable performance.',
  },

  'grant-management': {
    title: 'Grant Application Management System',
    subtitle: 'A real-time grant and research tracking system for a government agency.',
    meta: ['Sector: Government', 'Timeline: 2024', 'Role: Full-Stack (5-person team)'],
    overview:
      'A Malaysian state government research agency needed a central system to manage grant applications and track research activity across departments. Working within a 5-person team, TechAimz helped build the platform end to end.',
    challenge:
      'Researcher profiles, publications, and performance metrics were spread across departments and tracked manually, making it hard to get an accurate, up-to-date picture. The agency needed a single, reliable system that gave real-time visibility and reduced administrative overhead.',
    solutionIntro:
      'The team built a web platform with a React and TypeScript frontend and a Node.js (Express) backend, designed around the agency’s workflows:',
    solutionPoints: [
      'Real-time tracking of researcher profiles, publications, and performance metrics across departments.',
      'A centralised grant application management workflow replacing fragmented manual processes.',
      'Deployment on cloud infrastructure with Linux shell scripting for reliable operations.',
      'Automated processing and scheduled backups using cron jobs.',
    ],
    results: [
      { num: 'Real-time', label: 'tracking across all departments' },
      { num: 'Centralised', label: 'grant and researcher data in one system' },
      { num: 'Automated', label: 'processing and scheduled backups' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'SQL', 'DigitalOcean', 'Linux'],
    relevance:
      'This project is direct, hands-on experience delivering for the public sector. TechAimz understands the realities of government work, cross-department data, accountability, and reliability, and has already built a production system that public institutions depend on.',
  },

  'trainioapp': {
    title: 'Trainioapp: Trainer & Client Marketplace',
    subtitle: 'A cross-platform mobile marketplace, live on the App Store and Google Play.',
    meta: ['Sector: Mobile / Marketplace', 'Timeline: 2025 to 2026', 'Role: Full-Stack Mobile'],
    overview:
      'Trainioapp is a cross-platform mobile app that connects clients with personal trainers. TechAimz built and shipped the product end to end, from the two-sided marketplace experience to payments and store release.',
    challenge:
      'A marketplace has to serve two very different audiences, trainers and clients, while handling discovery, communication, booking, and payments in one smooth experience, and meet the standards required to publish on both app stores.',
    solutionIntro:
      'TechAimz built a single cross-platform app with React Native, Expo, and TypeScript, backed by Supabase:',
    solutionPoints: [
      'Swipe-based trainer discovery, real-time chat, and session booking.',
      'Role-based flows for trainers and clients, including profiles, certifications, earnings tracking, client leads, and a workout and diet plan builder.',
      'In-app subscriptions with RevenueCat that gate Pro features.',
      'Published builds to both the Apple App Store and Google Play.',
    ],
    results: [
      { num: 'Live', label: 'on the App Store and Google Play' },
      { num: 'Two-sided', label: 'trainer and client marketplace' },
      { num: 'In-app', label: 'subscriptions and monetisation' },
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'RevenueCat', 'Google Maps API'],
    relevance:
      'Shipping a secure, polished, production mobile app, complete with authentication, payments, and store approval, demonstrates the ability to deliver citizen-facing mobile services that the public can actually download and trust.',
  },

  'pupmood': {
    title: 'PupMood: Dog Mood Tracking App',
    subtitle: 'A cross-platform app with AI-powered insights, shipped end to end.',
    meta: ['Sector: Mobile / Consumer', 'Timeline: 2026', 'Role: Full-Stack Mobile & AI'],
    overview:
      'PupMood is a cross-platform mobile app for logging and analysing a dog’s mood over time. TechAimz built the product end to end, including its AI features and the full release pipeline.',
    challenge:
      'The app needed to be genuinely engaging while handling real product concerns: secure accounts, reliable data sync, monetisation, AI-driven insight, and a complete, compliant store release.',
    solutionIntro:
      'TechAimz built the app with React Native and Expo, with a Supabase backend and OpenAI-powered features:',
    solutionPoints: [
      'Multi-dog support, streak tracking, time-of-day mood bucketing, and an animated UI with haptic and audio feedback.',
      'Supabase for backend, authentication, and data sync, with Google and Apple Sign-In and a route-guarded onboarding flow.',
      'AI-powered mood summaries that turn logged entries into natural-language insights, plus push notifications and reminders.',
      'In-app subscriptions with RevenueCat, and a full release pipeline using EAS Build, App Store submission, and a marketing landing page.',
    ],
    results: [
      { num: 'AI-powered', label: 'natural-language mood insights' },
      { num: 'Published', label: 'via EAS Build and App Store submission' },
      { num: 'Subscriptions', label: 'gating premium and AI features' },
    ],
    technologies: ['React Native', 'Expo', 'Supabase', 'RevenueCat', 'OpenAI GPT', 'Push Notifications'],
    relevance:
      'PupMood shows end-to-end ownership of an AI product, from data and authentication to natural-language insights and release management. That same capability lets TechAimz deliver AI-driven tools that are practical, dependable, and ready for real users.',
  },
};

export default caseStudies;
