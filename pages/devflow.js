import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Initiative.module.css'

export default function DevFlow() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevFlow Gamification Engine - Indi Gamification Initiative</title>
        <meta name="description" content="Integrate gamification directly into development workflows and popular IDEs. Transform your daily coding into an engaging adventure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>← Back to Home</Link>
          <div className={styles.navLinks}>
            <Link href="/codequest" className={styles.navLink}>CodeQuest</Link>
            <Link href="/learning" className={styles.navLink}>Learning</Link>
            <Link href="/opensource" className={styles.navLink}>Open Source</Link>
            <Link href="/research" className={styles.navLink}>Research</Link>
          </div>
        </nav>

        <div className={styles.hero}>
          <h1 className={styles.title}>🎯 DevFlow Gamification Engine</h1>
          <p className={styles.subtitle}>
            Integrate gamification directly into development workflows and popular IDEs. 
            Transform your daily coding into an engaging adventure.
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>🔄 Seamless Workflow Integration</h2>
            <p>
              DevFlow Gamification Engine revolutionizes the development experience by seamlessly integrating 
              gamification elements into existing workflows. Our engine works behind the scenes to track, 
              analyze, and reward coding activities without disrupting your natural development process.
            </p>
          </section>

          <section className={styles.section}>
            <h2>⚡ Core Features</h2>
            
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3>💎 Commit Streaks</h3>
                <p>Maintain coding momentum with intelligent streak tracking and rewards.</p>
                <ul>
                  <li>Daily, weekly, and monthly streak tracking</li>
                  <li>Smart streak protection for weekends and holidays</li>
                  <li>Streak milestone rewards and celebrations</li>
                  <li>Team streak challenges and competitions</li>
                  <li>Historical streak analytics and insights</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>🔥 Code Quality Scores</h3>
                <p>Real-time feedback on code maintainability, performance, and best practices.</p>
                <ul>
                  <li>Real-time code analysis and scoring</li>
                  <li>Maintainability index calculations</li>
                  <li>Performance optimization suggestions</li>
                  <li>Security vulnerability detection</li>
                  <li>Best practices adherence tracking</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>🏆 Team Challenges</h3>
                <p>Sprint-based team competitions that foster collaboration and healthy competition.</p>
                <ul>
                  <li>Sprint-based coding challenges</li>
                  <li>Cross-functional team competitions</li>
                  <li>Bug bash events and hackathons</li>
                  <li>Code review quality contests</li>
                  <li>Innovation and creativity challenges</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>🎁 Achievement System</h3>
                <p>Comprehensive achievement tracking for reaching development milestones.</p>
                <ul>
                  <li>Milestone-based achievement unlocking</li>
                  <li>Skill progression badges</li>
                  <li>Contribution recognition rewards</li>
                  <li>Leadership and mentorship badges</li>
                  <li>Custom company-specific achievements</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🛠️ IDE Integration</h2>
            <p>
              DevFlow seamlessly integrates with popular development environments through our comprehensive plugin ecosystem:
            </p>
            
            <div className={styles.techSpecs}>
              <div className={styles.techCard}>
                <h4>Visual Studio Code</h4>
                <ul>
                  <li>Real-time XP tracking in status bar</li>
                  <li>Achievement notifications</li>
                  <li>Code quality suggestions</li>
                  <li>Team challenge dashboard</li>
                </ul>
              </div>
              
              <div className={styles.techCard}>
                <h4>JetBrains IDEs</h4>
                <ul>
                  <li>IntelliJ IDEA integration</li>
                  <li>WebStorm plugin support</li>
                  <li>PyCharm gamification features</li>
                  <li>Native UI component integration</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <h4>GitHub Integration</h4>
                <ul>
                  <li>Pull request quality scoring</li>
                  <li>Commit message analysis</li>
                  <li>Repository contribution tracking</li>
                  <li>Issue resolution rewards</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <h4>CI/CD Pipeline</h4>
                <ul>
                  <li>Build success streak tracking</li>
                  <li>Deployment frequency rewards</li>
                  <li>Test coverage improvement goals</li>
                  <li>Performance optimization achievements</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>📊 Analytics & Insights</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3>📈 Personal Dashboard</h3>
                <p>Comprehensive view of your coding journey and achievements.</p>
                <ul>
                  <li>Daily coding activity heatmaps</li>
                  <li>Skill progression visualizations</li>
                  <li>Achievement timeline</li>
                  <li>Goal tracking and progress indicators</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>👥 Team Analytics</h3>
                <p>Team performance insights and collaboration metrics.</p>
                <ul>
                  <li>Team velocity and productivity trends</li>
                  <li>Collaboration network analysis</li>
                  <li>Knowledge sharing metrics</li>
                  <li>Team challenge performance</li>
                </ul>
              </div>

              <div className={styles.featureCard}>
                <h3>🏢 Organization Metrics</h3>
                <p>Enterprise-level insights for engineering managers.</p>
                <ul>
                  <li>Department-wide engagement metrics</li>
                  <li>Skill gap analysis and recommendations</li>
                  <li>ROI tracking for gamification initiatives</li>
                  <li>Custom reporting and exports</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🎮 Gamification Mechanics</h2>
            <div className={styles.achievementCategories}>
              <div className={styles.categoryCard}>
                <h4>🏅 XP & Leveling</h4>
                <ul>
                  <li>Dynamic XP calculation based on impact</li>
                  <li>Skill-specific leveling systems</li>
                  <li>Prestige levels for masters</li>
                  <li>Seasonal XP multipliers</li>
                </ul>
              </div>
              
              <div className={styles.categoryCard}>
                <h4>🎯 Challenges & Quests</h4>
                <ul>
                  <li>Daily coding challenges</li>
                  <li>Weekly team objectives</li>
                  <li>Monthly epic quests</li>
                  <li>Seasonal events and competitions</li>
                </ul>
              </div>
              
              <div className={styles.categoryCard}>
                <h4>🏆 Rewards & Recognition</h4>
                <ul>
                  <li>Digital badges and trophies</li>
                  <li>Leaderboard rankings</li>
                  <li>Team shout-outs and highlights</li>
                  <li>Real-world rewards integration</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>📈 Proven Impact</h2>
            <div className={styles.researchStats}>
              <div className={styles.statCard}>
                <h3>67%</h3>
                <p>Increase in code commit frequency after DevFlow integration</p>
              </div>
              <div className={styles.statCard}>
                <h3>2.4x</h3>
                <p>Improvement in code review participation rates</p>
              </div>
              <div className={styles.statCard}>
                <h3>89%</h3>
                <p>Developer satisfaction rate with gamified workflows</p>
              </div>
              <div className={styles.statCard}>
                <h3>43%</h3>
                <p>Reduction in technical debt accumulation</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🔧 Technical Architecture</h2>
            <div className={styles.techSpecs}>
              <div className={styles.techCard}>
                <h4>Real-time Engine</h4>
                <ul>
                  <li>WebSocket-based live updates</li>
                  <li>Event-driven architecture</li>
                  <li>Microservices backend</li>
                  <li>Redis-based caching layer</li>
                </ul>
              </div>
              
              <div className={styles.techCard}>
                <h4>Analytics Pipeline</h4>
                <ul>
                  <li>Apache Kafka message streaming</li>
                  <li>Machine learning insights</li>
                  <li>Time-series data storage</li>
                  <li>Real-time dashboard updates</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <h4>Security & Privacy</h4>
                <ul>
                  <li>End-to-end data encryption</li>
                  <li>GDPR compliance</li>
                  <li>Anonymized analytics options</li>
                  <li>Secure API authentication</li>
                </ul>
              </div>

              <div className={styles.techCard}>
                <h4>Scalability</h4>
                <ul>
                  <li>Auto-scaling infrastructure</li>
                  <li>Multi-region deployment</li>
                  <li>Load balancing optimization</li>
                  <li>99.9% uptime SLA</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>🚀 Transform Your Development Workflow</h2>
            <p>Ready to gamify your team&apos;s development process and boost productivity?</p>
            <div className={styles.ctaButtons}>
              <Link href="/getting-started" className={styles.primaryCta}>
                Start Free Trial
              </Link>
              <Link href="/demos" className={styles.secondaryCta}>
                Schedule Demo
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}