import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Showcase.module.css';

// Curated starred repositories showcasing diverse technical interests
const starredRepositories = [
  {
    id: 1,
    name: 'TrustVault PWA',
    description: 'Security-focused Progressive Web App credential manager built with React 19, TypeScript 5.7, and Vite 6',
    html_url: 'https://github.com/iAn-P1nt0/TrustVault-PWA',
    homepage: 'https://trustvault-pwa.vercel.app',
    github_url: 'https://github.com/iAn-P1nt0/TrustVault-PWA',
    topics: ['pwa', 'security', 'encryption', 'react', 'typescript', 'vite'],
    language: 'TypeScript',
    stargazers_count: 2,
    category: 'Security & Privacy',
    architecture: {
      type: 'Progressive Web Application',
      frontend: 'React 19 with TypeScript 5.7, Vite 6',
      backend: 'Client-side only (PWA)',
      database: 'IndexedDB with encryption',
      authentication: 'Zero-Knowledge Architecture',
      deployment: 'Vercel with Edge Network'
    },
    systemDesign: {
      pattern: 'Client-Side Encryption with Service Workers',
      security: 'AES-256-GCM Encryption, Zero-Knowledge',
      offline: 'Full offline capability via Service Workers',
      scalability: 'Edge computing with CDN distribution',
      performance: 'Optimized with Vite build system'
    },
    productDesign: {
      ux: 'Modern, intuitive interface with security-first approach',
      features: ['Password Storage', 'Secure Generation', 'Offline Mode', 'Cross-platform PWA', 'Zero-Knowledge Encryption'],
      userFlow: 'Install PWA → Create Master Password → Store Credentials → Access Anywhere',
      accessibility: 'WCAG 2.1 compliant, keyboard navigation'
    },
    downloads: [
      { platform: 'Web App', url: 'https://trustvault-pwa.vercel.app', icon: '🌐' },
      { platform: 'Android PWA', url: 'https://trustvault-pwa.vercel.app', icon: '📱' },
      { platform: 'GitHub', url: 'https://github.com/iAn-P1nt0/TrustVault-PWA', icon: '💻' }
    ]
  },
  {
    id: 2,
    name: 'TrustVault Android',
    description: 'Native Android companion app for TrustVault ecosystem with Kotlin and modern Android architecture',
    html_url: 'https://github.com/iAn-P1nt0/TrustVault-Android',
    homepage: null,
    github_url: 'https://github.com/iAn-P1nt0/TrustVault-Android',
    topics: ['android', 'kotlin', 'security', 'mobile', 'credential-manager'],
    language: 'Kotlin',
    stargazers_count: 0,
    category: 'Security & Privacy',
    architecture: {
      type: 'Native Android Application',
      frontend: 'Jetpack Compose with Material Design 3',
      backend: 'Local-first with encrypted storage',
      database: 'Room Database with SQLCipher',
      authentication: 'Biometric + Master Password',
      deployment: 'Google Play Store ready'
    },
    systemDesign: {
      pattern: 'MVVM with Clean Architecture',
      security: 'Android Keystore, Biometric Auth, Encrypted DB',
      offline: 'Full offline capability with local storage',
      scalability: 'Modular architecture for feature expansion',
      performance: 'Optimized with Kotlin Coroutines'
    },
    productDesign: {
      ux: 'Native Android experience with Material You',
      features: ['Biometric Auth', 'Offline Storage', 'Secure Sharing', 'Auto-backup', 'Material Design 3'],
      userFlow: 'Install → Setup Biometric → Import/Create → Manage Credentials',
      accessibility: 'Android accessibility standards compliant'
    },
    downloads: [
      { platform: 'GitHub', url: 'https://github.com/iAn-P1nt0/TrustVault-Android', icon: '📦' },
      { platform: 'Source Code', url: 'https://github.com/iAn-P1nt0/TrustVault-Android', icon: '💻' }
    ]
  },
  {
    id: 3,
    name: 'awesome-llm-apps',
    description: 'Collection of awesome LLM applications with AI Agents and RAG using OpenAI, Anthropic, Gemini',
    html_url: 'https://github.com/Shubhamsaboo/awesome-llm-apps',
    homepage: null,
    github_url: 'https://github.com/Shubhamsaboo/awesome-llm-apps',
    topics: ['llm', 'ai', 'rag', 'agents', 'openai', 'anthropic', 'python'],
    language: 'Python',
    stargazers_count: 7340,
    category: 'AI & Machine Learning',
    architecture: {
      type: 'Reference Implementation Collection',
      frontend: 'Various (Streamlit, Gradio, FastAPI)',
      backend: 'Python with multiple LLM providers',
      database: 'Vector databases (Pinecone, Weaviate, etc.)',
      authentication: 'API key based',
      deployment: 'Cloud-agnostic examples'
    },
    systemDesign: {
      pattern: 'RAG (Retrieval Augmented Generation)',
      security: 'API key management best practices',
      integration: 'Multi-provider LLM support',
      scalability: 'Serverless and containerized examples',
      performance: 'Optimized vector search and embeddings'
    },
    productDesign: {
      ux: 'Developer-focused example applications',
      features: ['RAG Implementations', 'AI Agents', 'Multi-modal Apps', 'Production Templates', 'Best Practices'],
      userFlow: 'Clone → Configure API Keys → Run Examples → Adapt to Use Case',
      accessibility: 'Code examples with documentation'
    },
    downloads: [
      { platform: 'GitHub', url: 'https://github.com/Shubhamsaboo/awesome-llm-apps', icon: '⭐' },
      { platform: 'Clone Repo', url: 'https://github.com/Shubhamsaboo/awesome-llm-apps', icon: '📚' }
    ]
  },
  {
    id: 4,
    name: 'vllm',
    description: 'High-throughput and memory-efficient inference and serving engine for LLMs',
    html_url: 'https://github.com/vllm-project/vllm',
    homepage: 'https://vllm.ai',
    github_url: 'https://github.com/vllm-project/vllm',
    topics: ['llm', 'inference', 'gpu', 'python', 'machine-learning', 'performance'],
    language: 'Python',
    stargazers_count: 63016,
    category: 'AI & Machine Learning',
    architecture: {
      type: 'LLM Inference Engine',
      frontend: 'REST API and Python SDK',
      backend: 'CUDA-optimized Python engine',
      database: 'In-memory model cache',
      authentication: 'Token-based API auth',
      deployment: 'Docker, Kubernetes, Cloud platforms'
    },
    systemDesign: {
      pattern: 'PagedAttention for memory efficiency',
      security: 'Configurable authentication and rate limiting',
      optimization: 'Continuous batching, tensor parallelism',
      scalability: 'Multi-GPU and distributed inference',
      performance: 'State-of-the-art throughput optimization'
    },
    productDesign: {
      ux: 'Production-ready API interface',
      features: ['PagedAttention', 'Continuous Batching', 'Multi-GPU Support', 'OpenAI-compatible API', 'Model Parallelism'],
      userFlow: 'Install → Load Model → Start Server → Send Requests',
      accessibility: 'Comprehensive API documentation'
    },
    downloads: [
      { platform: 'PyPI', url: 'https://pypi.org/project/vllm/', icon: '🐍' },
      { platform: 'GitHub', url: 'https://github.com/vllm-project/vllm', icon: '⚡' },
      { platform: 'Docs', url: 'https://vllm.ai', icon: '📖' }
    ]
  },
  {
    id: 5,
    name: 'Excalidraw',
    description: 'Virtual whiteboard for sketching hand-drawn like diagrams',
    html_url: 'https://github.com/excalidraw/excalidraw',
    homepage: 'https://excalidraw.com',
    github_url: 'https://github.com/excalidraw/excalidraw',
    topics: ['whiteboard', 'drawing', 'collaboration', 'react', 'typescript', 'design'],
    language: 'TypeScript',
    stargazers_count: 110290,
    category: 'Developer Tools',
    architecture: {
      type: 'Web-based Drawing Application',
      frontend: 'React with TypeScript, Canvas API',
      backend: 'Optional collaboration backend',
      database: 'Local storage + optional sync',
      authentication: 'Optional for collaboration',
      deployment: 'Static site, self-hostable'
    },
    systemDesign: {
      pattern: 'Event sourcing for drawing operations',
      security: 'End-to-end encryption for collaboration',
      realtime: 'WebRTC for real-time collaboration',
      scalability: 'Decentralized P2P or centralized server',
      performance: 'Canvas optimization, efficient rendering'
    },
    productDesign: {
      ux: 'Hand-drawn aesthetic, intuitive controls',
      features: ['Hand-drawn Style', 'Real-time Collaboration', 'Export Options', 'Library System', 'Infinite Canvas'],
      userFlow: 'Start Drawing → Invite Collaborators → Export Diagram',
      accessibility: 'Keyboard shortcuts, screen reader support'
    },
    downloads: [
      { platform: 'Web App', url: 'https://excalidraw.com', icon: '🎨' },
      { platform: 'VS Code Extension', url: 'https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor', icon: '⚡' },
      { platform: 'GitHub', url: 'https://github.com/excalidraw/excalidraw', icon: '📦' }
    ]
  },
  {
    id: 6,
    name: 'LocalAI',
    description: 'Free, Open Source alternative to OpenAI, Claude and others - run LLMs locally',
    html_url: 'https://github.com/mudler/LocalAI',
    homepage: 'https://localai.io',
    github_url: 'https://github.com/mudler/LocalAI',
    topics: ['ai', 'llm', 'local', 'privacy', 'go', 'self-hosted'],
    language: 'Go',
    stargazers_count: 38406,
    category: 'AI & Machine Learning',
    architecture: {
      type: 'Local LLM Inference Server',
      frontend: 'REST API with OpenAI compatibility',
      backend: 'Go with C++ bindings for models',
      database: 'File-based model storage',
      authentication: 'API key support',
      deployment: 'Docker, binary, Kubernetes'
    },
    systemDesign: {
      pattern: 'OpenAI-compatible API gateway',
      security: 'Local-first, no data leaves your machine',
      optimization: 'CPU and GPU acceleration support',
      scalability: 'Model multiplexing and caching',
      performance: 'Quantization support, optimized inference'
    },
    productDesign: {
      ux: 'Drop-in OpenAI API replacement',
      features: ['OpenAI Compatible', 'Local Execution', 'Multiple Models', 'GPU Acceleration', 'No API Costs'],
      userFlow: 'Install → Download Models → Start Server → Use OpenAI SDK',
      accessibility: 'Standard REST API interface'
    },
    downloads: [
      { platform: 'Docker', url: 'https://hub.docker.com/r/localai/localai', icon: '🐳' },
      { platform: 'GitHub', url: 'https://github.com/mudler/LocalAI/releases', icon: '📦' },
      { platform: 'Docs', url: 'https://localai.io', icon: '📖' }
    ]
  },
  {
    id: 7,
    name: 'Anthropic Skills',
    description: 'Public repository for Claude Skills - extend Claude with custom capabilities',
    html_url: 'https://github.com/anthropics/skills',
    homepage: null,
    github_url: 'https://github.com/anthropics/skills',
    topics: ['claude', 'ai', 'skills', 'automation', 'python', 'anthropic'],
    language: 'Python',
    stargazers_count: 16737,
    category: 'AI & Machine Learning',
    architecture: {
      type: 'Skills Framework',
      frontend: 'CLI and integration interfaces',
      backend: 'Python-based skill system',
      database: 'Configuration-based storage',
      authentication: 'Anthropic API keys',
      deployment: 'Local execution environment'
    },
    systemDesign: {
      pattern: 'Plugin architecture for extensibility',
      security: 'Sandboxed skill execution',
      integration: 'Claude API integration',
      scalability: 'Modular skill composition',
      performance: 'Async execution support'
    },
    productDesign: {
      ux: 'Developer-friendly skill creation',
      features: ['Custom Skills', 'Skill Marketplace', 'Python Integration', 'Claude API Access', 'Community Contributions'],
      userFlow: 'Browse Skills → Install → Configure → Use with Claude',
      accessibility: 'Documentation and examples'
    },
    downloads: [
      { platform: 'GitHub', url: 'https://github.com/anthropics/skills', icon: '⭐' },
      { platform: 'Documentation', url: 'https://github.com/anthropics/skills#readme', icon: '📚' }
    ]
  },
  {
    id: 8,
    name: 'NowInAndroid',
    description: 'Fully functional Android app built entirely with Kotlin and Jetpack Compose',
    html_url: 'https://github.com/android/nowinandroid',
    homepage: null,
    github_url: 'https://github.com/android/nowinandroid',
    topics: ['android', 'kotlin', 'jetpack-compose', 'architecture', 'best-practices'],
    language: 'Kotlin',
    stargazers_count: 19962,
    category: 'Developer Tools',
    architecture: {
      type: 'Modern Android App (Reference)',
      frontend: 'Jetpack Compose with Material 3',
      backend: 'Kotlin with Retrofit',
      database: 'Room with offline-first approach',
      authentication: 'Not applicable (news reader)',
      deployment: 'Google Play Store'
    },
    systemDesign: {
      pattern: 'Clean Architecture with MVI',
      security: 'Android best practices',
      offline: 'Offline-first with local cache',
      scalability: 'Modular multi-module architecture',
      performance: 'Baseline profiles, R8 optimization'
    },
    productDesign: {
      ux: 'Material Design 3 showcase',
      features: ['Offline-first', 'Dynamic Theming', 'Modular Architecture', 'Testing Examples', 'CI/CD Pipeline'],
      userFlow: 'Browse News → Save Topics → Offline Reading',
      accessibility: 'Android accessibility best practices'
    },
    downloads: [
      { platform: 'GitHub', url: 'https://github.com/android/nowinandroid', icon: '📦' },
      { platform: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.google.samples.apps.nowinandroid', icon: '📱' }
    ]
  }
];

export default function Showcase() {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Security & Privacy', 'AI & Machine Learning', 'Developer Tools'];

  useEffect(() => {
    // Simulate loading for better UX
    setTimeout(() => {
      setRepositories(starredRepositories);
      setFilteredRepos(starredRepositories);
      setLoading(false);
    }, 500);
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredRepos(repositories);
    } else {
      setFilteredRepos(repositories.filter(repo => repo.category === category));
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Starred Repositories - Ian Pinto&apos;s Portfolio</title>
        <meta name="description" content="Curated collection of starred repositories spanning security, AI/ML, and developer tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.backLink}>
            <Link href="/">← Back to Home</Link>
          </div>

          <h1 className={styles.title}>
            ⭐ Starred Repositories Showcase
          </h1>
          <p className={styles.subtitle}>
            A curated collection of repositories I&apos;ve starred on GitHub, reflecting my interests in security,
            AI/ML, and modern development tools. Each entry includes detailed technical architecture and insights.
          </p>

          {!loading && (
            <div className={styles.categoryFilter}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => filterByCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}>🎮</div>
            <p>Loading amazing projects...</p>
          </div>
        )}

        {!loading && (
          <div className={styles.repositoriesGrid}>
            {filteredRepos.map((repo) => (
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
            <strong>Interested in my work?</strong> Check out my{' '}
            <a href="https://github.com/iAn-P1nt0" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
            {' '}for more projects and contributions.
          </p>
          <p className={styles.footerNote}>
            This showcase represents my technical interests and the innovative projects I follow in the developer community.
          </p>
        </div>
      </main>
    </div>
  );
}
