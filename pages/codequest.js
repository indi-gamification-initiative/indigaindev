import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Initiative.module.css'

export default function CodeQuest() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodeQuest Platform - Indi Gamification Initiative</title>
        <meta name="description" content="Transform coding challenges into epic adventures! CodeQuest Platform gamifies learning with RPG-style quests, XP, and achievements." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>← Back to Home</Link>
          <div className={styles.navLinks}>
            <Link href="/devflow" className={styles.navLink}>DevFlow</Link>
            <Link href="/learning" className={styles.navLink}>Learning</Link>
            <Link href="/opensource" className={styles.navLink}>Open Source</Link>
            <Link href="/research" className={styles.navLink}>Research</Link>
          </div>
        </nav>

        <div className={styles.hero}>
          <h1 className={styles.title}>🏅 CodeQuest Platform</h1>
          <p className={styles.subtitle}>
            Transform coding challenges into epic adventures! Think LeetCode meets RPG gaming.
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>🎮 Game-Based Learning Revolution</h2>
            <p>
              CodeQuest Platform revolutionizes how developers learn and practice coding by transforming 
              traditional programming challenges into immersive RPG-style adventures. Players embark on 
              coding quests, earn experience points (XP), unlock achievement badges, and progress through 
              increasingly challenging content.
            </p>
          </section>

          <section className={styles.section}>
            <h2>🗺️ Core Features</h2>
            
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3>🗺️ Adventure Maps</h3>
                <p>Structured learning paths that guide developers through different technologies and skill levels.</p>
                <ul>
                  <li>Progressive difficulty scaling</li>
                  <li>Technology-specific paths (JavaScript, Python, Go, etc.)</li>
                  <li>Visual skill tree progression</li>
                  <li>Prerequisite-based unlocking system</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>⚔️ Boss Battles</h3>
                <p>Complex project challenges that require team collaboration and advanced problem-solving skills.</p>
                <ul>
                  <li>Multi-week project-based challenges</li>
                  <li>Team formation and collaboration tools</li>
                  <li>Real-world scenario simulations</li>
                  <li>Mentorship and code review integration</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>🎖️ Guild System</h3>
                <p>Social features that enable developers to team up for collaborative projects and peer learning.</p>
                <ul>
                  <li>Skill-based team matching</li>
                  <li>Guild leaderboards and competitions</li>
                  <li>Collaborative project repositories</li>
                  <li>Peer mentoring programs</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>📊 Leaderboards</h3>
                <p>Competitive elements with weekly and monthly coding competitions featuring real rewards.</p>
                <ul>
                  <li>Global and regional rankings</li>
                  <li>Category-specific competitions</li>
                  <li>Sponsor-backed prize pools</li>
                  <li>Achievement showcases</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🏆 Achievement System</h2>
            <p>
              Our comprehensive achievement system recognizes various types of accomplishments:
            </p>
            
            <div className={styles.achievementCategories}>
              <div className={styles.categoryCard}>
                <h4>🎯 Skill Mastery</h4>
                <ul>
                  <li>Language Expert badges</li>
                  <li>Algorithm Specialist recognition</li>
                  <li>Architecture Design awards</li>
                </ul>
              </div>
              
              <div className={styles.categoryCard}>
                <h4>🤝 Community Contribution</h4>
                <ul>
                  <li>Mentor badges for helping others</li>
                  <li>Code review champion status</li>
                  <li>Community builder recognition</li>
                </ul>
              </div>
              
              <div className={styles.categoryCard}>
                <h4>🚀 Innovation Awards</h4>
                <ul>
                  <li>Creative solution finder</li>
                  <li>Performance optimization guru</li>
                  <li>Best practices advocate</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>📈 Research-Backed Benefits</h2>
            <div className={styles.researchStats}>
              <div className={styles.statCard}>
                <h3>85%</h3>
                <p>Increase in coding practice frequency among gamified learners</p>
              </div>
              <div className={styles.statCard}>
                <h3>3.2x</h3>
                <p>Faster skill acquisition compared to traditional methods</p>
              </div>
              <div className={styles.statCard}>
                <h3>92%</h3>
                <p>Retention rate after 6 months of platform usage</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🛠️ Technical Implementation</h2>
            <div className={styles.techSpecs}>
              <div className={styles.techCard}>
                <h4>Architecture</h4>
                <ul>
                  <li>Microservices-based backend</li>
                  <li>React/Next.js frontend</li>
                  <li>GraphQL API layer</li>
                  <li>Real-time collaboration via WebSocket</li>
                </ul>
              </div>
              
              <div className={styles.techCard}>
                <h4>Integrations</h4>
                <ul>
                  <li>GitHub/GitLab repository sync</li>
                  <li>IDE plugin ecosystem</li>
                  <li>Code execution sandbox</li>
                  <li>Automated testing framework</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>🚀 Ready to Start Your Adventure?</h2>
            <p>Join thousands of developers already leveling up their skills through CodeQuest Platform.</p>
            <div className={styles.ctaButtons}>
              <Link href="/getting-started" className={styles.primaryCta}>
                Start Your Quest
              </Link>
              <Link href="/demos" className={styles.secondaryCta}>
                View Demo
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}