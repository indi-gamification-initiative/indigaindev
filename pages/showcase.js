import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Showcase.module.css';

// Starred repositories data with technical details
const starredRepositories = [
  {
    id: 1,
    name: 'TrustVault PWA',
    description: 'A gamified Progressive Web App for secure credential management with zero-knowledge encryption',
    html_url: 'https://trust-vault-pwa.vercel.app',
    homepage: 'https://trust-vault-pwa.vercel.app',
    github_url: 'https://github.com/trust-vault/trust-vault-pwa',
    topics: ['pwa', 'security', 'encryption', 'react', 'gamification'],
    language: 'JavaScript',
    stargazers_count: 250,
    architecture: {
      type: 'Progressive Web Application',
      frontend: 'React 18 with Next.js 14',
      backend: 'Serverless Functions (Vercel)',
      database: 'IndexedDB (Client-side)',
      authentication: 'Zero-Knowledge Architecture',
      deployment: 'Vercel Edge Network'
    },
    systemDesign: {
      pattern: 'Client-Side Encryption with Service Workers',
      security: 'AES-256-GCM Encryption, OWASP Top 10 Compliant',
      offline: 'Full offline capability via Service Workers',
      scalability: 'Edge computing with global CDN',
      performance: 'Lighthouse Score 95+'
    },
    productDesign: {
      ux: 'Gamified interface with achievement system',
      features: ['Credential Storage', 'Password Generator', 'Offline Mode', 'XP & Badges', 'Multi-platform Support'],
      userFlow: 'Install PWA → Create Account → Store Credentials → Earn Achievements',
      accessibility: 'WCAG 2.1 AA Compliant'
    },
    downloads: [
      { platform: 'Web', url: 'https://trust-vault-pwa.vercel.app', icon: '🌐' },
      { platform: 'Android', url: 'https://trust-vault-pwa.vercel.app', icon: '📱' },
      { platform: 'iOS', url: 'https://trust-vault-pwa.vercel.app', icon: '🍎' },
      { platform: 'Desktop', url: 'https://trust-vault-pwa.vercel.app', icon: '💻' }
    ]
  },
  {
    id: 2,
    name: 'CodeQuest Platform',
    description: 'An RPG-style coding challenge platform that transforms learning into an epic adventure',
    html_url: 'https://github.com/indi-gamification-initiative/codequest',
    homepage: 'https://codequest.indigaindev.org',
    github_url: 'https://github.com/indi-gamification-initiative/codequest',
    topics: ['education', 'gamification', 'coding-challenges', 'nodejs', 'mongodb'],
    language: 'TypeScript',
    stargazers_count: 180,
    architecture: {
      type: 'Full-Stack Web Application',
      frontend: 'React 18 with TypeScript, Tailwind CSS',
      backend: 'Node.js with Express',
      database: 'MongoDB Atlas',
      authentication: 'JWT with OAuth 2.0',
      deployment: 'Docker + Kubernetes'
    },
    systemDesign: {
      pattern: 'Microservices Architecture',
      security: 'JWT Authentication, Role-Based Access Control',
      caching: 'Redis for session management',
      scalability: 'Horizontal scaling with Kubernetes',
      performance: 'GraphQL for efficient data fetching'
    },
    productDesign: {
      ux: 'Interactive quest maps with progress tracking',
      features: ['Coding Challenges', 'Boss Battles', 'Guild System', 'Leaderboards', 'XP & Levels'],
      userFlow: 'Sign Up → Choose Quest Path → Solve Challenges → Level Up → Join Guild',
      accessibility: 'Keyboard navigation, Screen reader support'
    },
    downloads: [
      { platform: 'Web App', url: 'https://codequest.indigaindev.org', icon: '🌐' },
      { platform: 'GitHub', url: 'https://github.com/indi-gamification-initiative/codequest', icon: '⚡' }
    ]
  },
  {
    id: 3,
    name: 'DevFlow Gamification Engine',
    description: 'IDE plugin and workflow engine that gamifies the entire development process',
    html_url: 'https://github.com/indi-gamification-initiative/devflow',
    homepage: 'https://devflow.indigaindev.org',
    github_url: 'https://github.com/indi-gamification-initiative/devflow',
    topics: ['ide-plugin', 'vscode', 'gamification', 'productivity', 'analytics'],
    language: 'TypeScript',
    stargazers_count: 320,
    architecture: {
      type: 'IDE Extension + Cloud Service',
      frontend: 'VS Code Extension API, React for Dashboard',
      backend: 'Node.js with NestJS',
      database: 'PostgreSQL + TimescaleDB',
      authentication: 'OAuth 2.0 with GitHub',
      deployment: 'AWS ECS + CloudFront'
    },
    systemDesign: {
      pattern: 'Event-Driven Architecture',
      security: 'End-to-end encryption for code metrics',
      realtime: 'WebSocket for live updates',
      scalability: 'Event queue with AWS SQS',
      performance: 'Time-series database for metrics'
    },
    productDesign: {
      ux: 'Non-intrusive IDE integration with optional dashboard',
      features: ['Commit Streaks', 'Code Quality Scores', 'Team Challenges', 'Achievement System', 'Analytics Dashboard'],
      userFlow: 'Install Extension → Connect GitHub → Start Coding → Track Progress → Compete',
      accessibility: 'Follows VS Code accessibility guidelines'
    },
    downloads: [
      { platform: 'VS Code', url: 'https://marketplace.visualstudio.com/devflow', icon: '⚡' },
      { platform: 'JetBrains', url: 'https://plugins.jetbrains.com/devflow', icon: '💡' },
      { platform: 'GitHub', url: 'https://github.com/indi-gamification-initiative/devflow', icon: '📦' }
    ]
  },
  {
    id: 4,
    name: 'Learning Pathway Adventures',
    description: 'Interactive learning platform with skill trees and hands-on workshops',
    html_url: 'https://github.com/indi-gamification-initiative/learning-pathways',
    homepage: 'https://learn.indigaindev.org',
    github_url: 'https://github.com/indi-gamification-initiative/learning-pathways',
    topics: ['education', 'e-learning', 'skill-development', 'react', 'python'],
    language: 'Python',
    stargazers_count: 145,
    architecture: {
      type: 'Full-Stack Learning Platform',
      frontend: 'React with Redux, D3.js for visualizations',
      backend: 'Python with FastAPI',
      database: 'PostgreSQL with PostGIS',
      authentication: 'Auth0',
      deployment: 'Google Cloud Platform'
    },
    systemDesign: {
      pattern: 'Monolithic with modular design',
      security: 'OAuth 2.0, Content Security Policy',
      contentDelivery: 'Cloud CDN for video content',
      scalability: 'Auto-scaling with GCP',
      performance: 'Server-side rendering for SEO'
    },
    productDesign: {
      ux: 'Visual skill trees with interactive nodes',
      features: ['Skill Trees', 'Interactive Workshops', 'Mentorship Matching', 'Progress Analytics', 'Certificates'],
      userFlow: 'Choose Path → Complete Modules → Practice Labs → Get Mentorship → Earn Certificate',
      accessibility: 'ARIA labels, High contrast mode'
    },
    downloads: [
      { platform: 'Web Platform', url: 'https://learn.indigaindev.org', icon: '🎓' },
      { platform: 'Mobile App', url: 'https://learn.indigaindev.org/mobile', icon: '📱' },
      { platform: 'GitHub', url: 'https://github.com/indi-gamification-initiative/learning-pathways', icon: '📚' }
    ]
  },
  {
    id: 5,
    name: 'Open Source Contribution Games',
    description: 'Platform that gamifies open source contributions with challenges and rewards',
    html_url: 'https://github.com/indi-gamification-initiative/os-contrib-games',
    homepage: 'https://opensource.indigaindev.org',
    github_url: 'https://github.com/indi-gamification-initiative/os-contrib-games',
    topics: ['open-source', 'github', 'gamification', 'community', 'go'],
    language: 'Go',
    stargazers_count: 210,
    architecture: {
      type: 'Microservices Platform',
      frontend: 'Vue.js 3 with Vuex',
      backend: 'Go with Gin framework',
      database: 'MongoDB + Redis',
      authentication: 'GitHub OAuth',
      deployment: 'Kubernetes on DigitalOcean'
    },
    systemDesign: {
      pattern: 'Event-driven microservices',
      security: 'API Gateway with rate limiting',
      integration: 'GitHub Webhooks for real-time updates',
      scalability: 'Container orchestration with K8s',
      performance: 'Caching layer with Redis'
    },
    productDesign: {
      ux: 'Gamified contribution dashboard with leaderboards',
      features: ['Contribution Challenges', 'Maintainer Recognition', 'Hackathon Integration', 'Documentation Quests', 'Badges'],
      userFlow: 'Connect GitHub → Browse Challenges → Make Contributions → Earn Badges → Climb Leaderboard',
      accessibility: 'Keyboard shortcuts, Screen reader compatible'
    },
    downloads: [
      { platform: 'Web Platform', url: 'https://opensource.indigaindev.org', icon: '🌟' },
      { platform: 'GitHub App', url: 'https://github.com/apps/os-contrib-games', icon: '🤝' },
      { platform: 'CLI Tool', url: 'https://github.com/indi-gamification-initiative/os-contrib-games/releases', icon: '⚙️' }
    ]
  }
];

export default function Showcase() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    setTimeout(() => {
      setRepositories(starredRepositories);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Starred Repositories Showcase - Indi Gamification Initiative</title>
        <meta name="description" content="Explore our curated collection of gamified development tools and platforms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.backLink}>
            <a href="/">← Back to Home</a>
          </div>
          
          <h1 className={styles.title}>
            ⭐ Starred Repositories Showcase
          </h1>
          <p className={styles.subtitle}>
            Explore our curated collection of gamified development tools, platforms, and projects. 
            Each repository features detailed technical architecture, system design, and ready-to-use builds.
          </p>
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}>🎮</div>
            <p>Loading amazing projects...</p>
          </div>
        )}

        {!loading && (
          <div className={styles.repositoriesGrid}>
            {repositories.map((repo) => (
              <div key={repo.id} className={styles.repoCard}>
                <div className={styles.repoHeader}>
                  <h2 className={styles.repoName}>
                    <span className={styles.repoIcon}>🎯</span>
                    {repo.name}
                  </h2>
                  <div className={styles.repoMeta}>
                    <span className={styles.language}>{repo.language}</span>
                    <span className={styles.stars}>⭐ {repo.stargazers_count}</span>
                  </div>
                </div>

                <p className={styles.repoDescription}>{repo.description}</p>

                <div className={styles.topics}>
                  {repo.topics.map((topic, index) => (
                    <span key={index} className={styles.topic}>
                      #{topic}
                    </span>
                  ))}
                </div>

                <div className={styles.technicalSection}>
                  <h3>🏗️ Technical Architecture</h3>
                  <div className={styles.techDetails}>
                    <div className={styles.techItem}>
                      <strong>Type:</strong> {repo.architecture.type}
                    </div>
                    <div className={styles.techItem}>
                      <strong>Frontend:</strong> {repo.architecture.frontend}
                    </div>
                    <div className={styles.techItem}>
                      <strong>Backend:</strong> {repo.architecture.backend}
                    </div>
                    <div className={styles.techItem}>
                      <strong>Database:</strong> {repo.architecture.database}
                    </div>
                    <div className={styles.techItem}>
                      <strong>Auth:</strong> {repo.architecture.authentication}
                    </div>
                    <div className={styles.techItem}>
                      <strong>Deploy:</strong> {repo.architecture.deployment}
                    </div>
                  </div>
                </div>

                <div className={styles.systemSection}>
                  <h3>⚙️ System Design</h3>
                  <div className={styles.systemDetails}>
                    <div className={styles.systemItem}>
                      <strong>Pattern:</strong> {repo.systemDesign.pattern}
                    </div>
                    <div className={styles.systemItem}>
                      <strong>Security:</strong> {repo.systemDesign.security}
                    </div>
                    {repo.systemDesign.offline && (
                      <div className={styles.systemItem}>
                        <strong>Offline:</strong> {repo.systemDesign.offline}
                      </div>
                    )}
                    {repo.systemDesign.realtime && (
                      <div className={styles.systemItem}>
                        <strong>Real-time:</strong> {repo.systemDesign.realtime}
                      </div>
                    )}
                    <div className={styles.systemItem}>
                      <strong>Scalability:</strong> {repo.systemDesign.scalability}
                    </div>
                    <div className={styles.systemItem}>
                      <strong>Performance:</strong> {repo.systemDesign.performance}
                    </div>
                  </div>
                </div>

                <div className={styles.productSection}>
                  <h3>🎨 Product Design</h3>
                  <div className={styles.productDetails}>
                    <div className={styles.productItem}>
                      <strong>UX:</strong> {repo.productDesign.ux}
                    </div>
                    <div className={styles.productItem}>
                      <strong>Features:</strong>
                      <ul className={styles.featureList}>
                        {repo.productDesign.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.productItem}>
                      <strong>User Flow:</strong> {repo.productDesign.userFlow}
                    </div>
                    <div className={styles.productItem}>
                      <strong>Accessibility:</strong> {repo.productDesign.accessibility}
                    </div>
                  </div>
                </div>

                <div className={styles.downloadSection}>
                  <h3>📦 Download & Install</h3>
                  <div className={styles.downloadButtons}>
                    {repo.downloads.map((download, index) => (
                      <a
                        key={index}
                        href={download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                      >
                        <span className={styles.downloadIcon}>{download.icon}</span>
                        <span>{download.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.repoLinks}>
                  <a
                    href={repo.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <span>📚</span> View on GitHub
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.homepageLink}
                    >
                      <span>🌐</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <p>
            <strong>🎮 Want to contribute?</strong> Check out our{' '}
            <a href="https://github.com/indi-gamification-initiative" target="_blank" rel="noopener noreferrer">
              GitHub Organization
            </a>
          </p>
          <p className={styles.footerNote}>
            All projects are open source and welcome contributions from the community!
          </p>
        </div>
      </main>
    </div>
  );
}
