import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ian Pinto - Software Developer Portfolio</title>
        <meta name="description" content="Software developer passionate about security, AI/ML, and modern development. Creator of TrustVault PWA and Android apps." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.badges}>
          <img src="https://komarev.com/ghpvc/?username=iAn-P1nt0&color=blueviolet&style=for-the-badge" alt="Profile Views" />
          <img src="https://img.shields.io/badge/Security-First-red.svg?style=for-the-badge&logo=shield" alt="Security First" />
          <img src="https://img.shields.io/badge/Open%20Source-Contributor-brightgreen.svg?style=for-the-badge&logo=github" alt="Open Source" />
          <img src="https://img.shields.io/badge/AI%2FML-Explorer-blue.svg?style=for-the-badge&logo=tensorflow" alt="AI/ML" />
        </div>

        <div className={styles.hero}>
          <h1 className={styles.title}>
            Ian Pinto
          </h1>
          <h3 className={styles.subtitle}>
            <em>Software Developer | Security Enthusiast | AI Explorer</em>
          </h3>
          <img src="https://img.shields.io/badge/Building-Secure%20Solutions-success?style=for-the-badge&logo=shield" alt="Developer Banner" />
        </div>

        <div className={styles.separator}></div>

        <div className={styles.content}>
          <p className={styles.welcome}>
            Welcome! I&apos;m a software developer passionate about building secure, privacy-focused applications
            and exploring cutting-edge AI/ML technologies. My work spans from Progressive Web Apps to native mobile development,
            with a strong emphasis on security best practices and modern development tools.
          </p>

          <section className={styles.section}>
            <h2>🧭 Explore My Work</h2>
            <div className={styles.quickNav}>
              <Link href="/showcase" className={styles.navCard}>
                <div className={styles.navIcon}>⭐</div>
                <h3>Starred Repositories</h3>
                <p>Curated collection of projects I follow and admire</p>
              </Link>
              <a href="https://github.com/iAn-P1nt0/TrustVault-PWA" target="_blank" rel="noopener noreferrer" className={styles.navCard}>
                <div className={styles.navIcon}>🔐</div>
                <h3>TrustVault PWA</h3>
                <p>Security-focused credential manager</p>
              </a>
              <a href="https://github.com/iAn-P1nt0/TrustVault-Android" target="_blank" rel="noopener noreferrer" className={styles.navCard}>
                <div className={styles.navIcon}>📱</div>
                <h3>TrustVault Android</h3>
                <p>Native Android companion app</p>
              </a>
              <a href="https://github.com/iAn-P1nt0" target="_blank" rel="noopener noreferrer" className={styles.navCard}>
                <div className={styles.navIcon}>💻</div>
                <h3>GitHub Profile</h3>
                <p>Explore all my projects and contributions</p>
              </a>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2>🔐 Featured Project: TrustVault Ecosystem</h2>

            <div className={styles.initiative}>
              <h3>🌐 TrustVault PWA</h3>
              <p>A cutting-edge Progressive Web App for secure credential management, built with React 19, TypeScript 5.7, and Vite 6.
                 Features zero-knowledge encryption architecture ensuring your data remains completely private.</p>

              <h4>Technical Highlights:</h4>
              <ul>
                <li>🔐 <strong>Zero-Knowledge Encryption</strong>: AES-256-GCM client-side encryption</li>
                <li>⚡ <strong>Modern Stack</strong>: React 19, TypeScript 5.7, Vite 6 for optimal performance</li>
                <li>📱 <strong>Cross-Platform PWA</strong>: Works on Android, iOS, Desktop, and Web</li>
                <li>🔌 <strong>Offline-First</strong>: Full functionality without internet connection</li>
                <li>🎨 <strong>Modern UI</strong>: Clean, intuitive interface with accessibility in mind</li>
              </ul>
              <div className={styles.initiativeLinks}>
                <a href="https://trustvault-pwa.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.learnMore}>Live Demo →</a>
                <a href="https://github.com/iAn-P1nt0/TrustVault-PWA" target="_blank" rel="noopener noreferrer" className={styles.learnMore}>View on GitHub →</a>
              </div>
            </div>

            <div className={styles.initiative}>
              <h3>📱 TrustVault Android</h3>
              <p>Native Android companion application built with Kotlin and modern Android architecture patterns.
                 Leverages Android Keystore and biometric authentication for enhanced security.</p>

              <h4>Android Excellence:</h4>
              <ul>
                <li>🏗️ <strong>Modern Architecture</strong>: MVVM with Clean Architecture principles</li>
                <li>🎨 <strong>Material Design 3</strong>: Beautiful native Android experience with Material You</li>
                <li>👆 <strong>Biometric Auth</strong>: Fingerprint and face recognition support</li>
                <li>💾 <strong>Encrypted Storage</strong>: Room Database with SQLCipher encryption</li>
                <li>🔄 <strong>Kotlin Coroutines</strong>: Efficient async operations and state management</li>
              </ul>
              <div className={styles.initiativeLinks}>
                <a href="https://github.com/iAn-P1nt0/TrustVault-Android" target="_blank" rel="noopener noreferrer" className={styles.learnMore}>View on GitHub →</a>
              </div>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2>💡 Technical Interests</h2>

            <div className={styles.initiative}>
              <h3>🤖 AI & Machine Learning</h3>
              <p>Exploring the frontiers of artificial intelligence with a focus on practical applications and emerging technologies.</p>

              <h4>Areas of Focus:</h4>
              <ul>
                <li>🧠 <strong>Large Language Models</strong>: Following developments in GPT, Claude, and open-source alternatives</li>
                <li>⚡ <strong>Inference Optimization</strong>: vLLM, LocalAI, and efficient model serving</li>
                <li>📚 <strong>RAG Systems</strong>: Retrieval Augmented Generation for intelligent applications</li>
                <li>🔧 <strong>AI Tools</strong>: Claude Skills, coding assistants, and developer productivity</li>
              </ul>
            </div>

            <div className={styles.initiative}>
              <h3>🔐 Security & Privacy</h3>
              <p>Committed to building applications that respect user privacy and follow security best practices.</p>

              <h4>Core Principles:</h4>
              <ul>
                <li>🛡️ <strong>Zero-Knowledge Architecture</strong>: Data encryption that even servers can&apos;t access</li>
                <li>🔒 <strong>End-to-End Encryption</strong>: Protecting data in transit and at rest</li>
                <li>🎯 <strong>OWASP Guidelines</strong>: Following industry standards for secure development</li>
                <li>🔑 <strong>Modern Auth</strong>: Biometric, OAuth, and secure authentication patterns</li>
              </ul>
            </div>

            <div className={styles.initiative}>
              <h3>🚀 Modern Development</h3>
              <p>Passionate about leveraging the latest tools and frameworks to build exceptional user experiences.</p>

              <h4>Technology Stack:</h4>
              <ul>
                <li>⚛️ <strong>Frontend</strong>: React 19, TypeScript, Vite, Progressive Web Apps</li>
                <li>📱 <strong>Mobile</strong>: Kotlin, Jetpack Compose, Material Design 3</li>
                <li>🐍 <strong>Backend</strong>: Python, Node.js, FastAPI, serverless architectures</li>
                <li>🎨 <strong>Design</strong>: Accessibility-first, responsive design, modern UX patterns</li>
              </ul>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2>🎯 Development Philosophy</h2>

            <div className={styles.impactTable}>
              <div className={styles.impactCard}>
                <h4>🔒 Security First</h4>
                <p>Every feature designed with privacy and security as foundational principles</p>
              </div>
              <div className={styles.impactCard}>
                <h4>📱 User Experience</h4>
                <p>Building intuitive interfaces that make complex tasks simple</p>
              </div>
              <div className={styles.impactCard}>
                <h4>🚀 Modern Tech</h4>
                <p>Leveraging cutting-edge tools and frameworks for optimal performance</p>
              </div>
            </div>

            <h3>🔥 Core Values</h3>
            <ul>
              <li><strong>🛡️ Privacy by Design</strong>: User data protection built into every layer of the architecture</li>
              <li><strong>♿ Accessibility</strong>: Ensuring applications are usable by everyone, regardless of ability</li>
              <li><strong>🌍 Open Source</strong>: Contributing to and learning from the developer community</li>
              <li><strong>📚 Continuous Learning</strong>: Staying current with emerging technologies and best practices</li>
            </ul>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2>🤝 Let&apos;s Connect!</h2>
            <p>Interested in collaborating, discussing technology, or exploring my projects?</p>

            <div className={styles.involvement}>
              <div className={styles.involveCard}>
                <h3>💻 GitHub</h3>
                <ul>
                  <li>🌟 <strong>Explore my repositories</strong> and star projects you find interesting</li>
                  <li>🐛 <strong>Report issues</strong> or contribute to open source projects</li>
                  <li>💡 <strong>Share feedback</strong> on TrustVault and other initiatives</li>
                  <li>🔄 <strong>Follow</strong> to stay updated on new projects</li>
                </ul>
                <a href="https://github.com/iAn-P1nt0" target="_blank" rel="noopener noreferrer" className={styles.learnMore}>
                  Visit GitHub Profile →
                </a>
              </div>

              <div className={styles.involveCard}>
                <h3>⭐ Starred Projects</h3>
                <ul>
                  <li>🤖 <strong>AI/ML Tools</strong>: vLLM, LocalAI, awesome-llm-apps</li>
                  <li>🔐 <strong>Security</strong>: My own TrustVault ecosystem projects</li>
                  <li>🎨 <strong>Developer Tools</strong>: Excalidraw, NowInAndroid</li>
                  <li>📚 <strong>Learning Resources</strong>: Claude Skills, AI coding tools</li>
                </ul>
                <Link href="/showcase" className={styles.learnMore}>
                  View Full Showcase →
                </Link>
              </div>

              <div className={styles.involveCard}>
                <h3>🚀 Current Focus</h3>
                <ul>
                  <li>🔐 <strong>TrustVault Development</strong>: Enhancing PWA and Android apps</li>
                  <li>🤖 <strong>AI Integration</strong>: Exploring LLM applications and tools</li>
                  <li>📱 <strong>Mobile Development</strong>: Modern Android with Kotlin & Compose</li>
                  <li>🌐 <strong>Web Technologies</strong>: React 19, TypeScript, and PWAs</li>
                </ul>
              </div>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.sponsorSection}>
            <h2>💖 Support My Work</h2>
            <p>
              If you find my projects valuable and want to support continued development,
              consider sponsoring me on GitHub. Your support helps me dedicate more time
              to open source and building tools that benefit the community.
            </p>
            <div className={styles.sponsorCardWrapper}>
              <iframe 
                src="https://github.com/sponsors/iAn-P1nt0/card" 
                title="Sponsor iAn-P1nt0" 
                height="225" 
                width="600" 
                style={{ border: 0 }}
              ></iframe>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.connectSection}>
            <h2>🌐 Find Me Online</h2>
            <h3>Let&apos;s connect and build something amazing together!</h3>

            <div className={styles.socialLinks}>
              <a href="https://github.com/iAn-P1nt0" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/GitHub-iAn--P1nt0-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
              </a>
              <a href="https://github.com/iAn-P1nt0/TrustVault-PWA" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/TrustVault-PWA-4285F4?style=for-the-badge&logo=pwa&logoColor=white" alt="TrustVault PWA" />
              </a>
              <a href="https://trustvault-pwa.vercel.app" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Live-Demo-00C7B7?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
              </a>
            </div>

            <h3>🚀 Project Status</h3>
            <div className={styles.statusBadges}>
              <img src="https://img.shields.io/badge/TrustVault-Active%20Development-success?style=for-the-badge&logo=shield" alt="Active Development" />
              <img src="https://img.shields.io/badge/Open%20Source-Welcome-brightgreen?style=for-the-badge&logo=opensourceinitiative" alt="Open Source" />
            </div>

            <div className={styles.footer}>
              <p><em>Building secure, privacy-focused solutions with modern technology</em></p>
              <p><strong>Thanks for visiting! Feel free to explore my projects and reach out if you&apos;d like to collaborate.</strong></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}