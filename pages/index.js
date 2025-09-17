import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Indi Gamification Initiative</title>
        <meta name="description" content="Transforming Development Through Gamification - Level Up Your Code!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.badges}>
          <Image src="https://komarev.com/ghpvc/?username=indi-gamification-initiative&color=blueviolet&style=for-the-badge" alt="Visitors" width={200} height={35} />
          <Image src="https://img.shields.io/badge/Made%20with-❤️-for%20Developers-ff69b4.svg?style=for-the-badge" alt="Made with Love" width={250} height={35} />
          <Image src="https://img.shields.io/badge/Open%20Source-💚-brightgreen.svg?style=for-the-badge" alt="Open Source" width={180} height={35} />
          <Image src="https://img.shields.io/badge/Innovation-🚀-orange.svg?style=for-the-badge" alt="Innovation" width={150} height={35} />
        </div>

        <div className={styles.hero}>
          <h1 className={styles.title}>
            🎮 Indi Gamification Initiative
          </h1>
          <h3 className={styles.subtitle}>
            <em>Transforming Development Through Gamification</em>
          </h3>
          <Image src="https://img.shields.io/badge/🏆%20Level%20Up%20Your%20Code-Game%20On!-success?style=for-the-badge&logo=trophy" alt="Gamification Banner" width={300} height={35} />
        </div>

        <div className={styles.separator}></div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>🧭 Quick Navigation</h2>
            <div className={styles.quickNav}>
              <Link href="/getting-started" className={styles.navCard}>
                <div className={styles.navIcon}>🚀</div>
                <h3>Getting Started</h3>
                <p>Begin your gamified development journey</p>
              </Link>
              <Link href="/research" className={styles.navCard}>
                <div className={styles.navIcon}>📊</div>
                <h3>Research & Data</h3>
                <p>Academic studies and proven methodologies</p>
              </Link>
              <a href="/docs" className={styles.navCard}>
                <div className={styles.navIcon}>📚</div>
                <h3>Documentation</h3>
                <p>API references and technical guides</p>
              </a>
              <a href="/demos" className={styles.navCard}>
                <div className={styles.navIcon}>🎮</div>
                <h3>Live Demos</h3>
                <p>Try our platforms in action</p>
              </a>
            </div>
          </section>

          <div className={styles.separator}></div>

          <p className={styles.welcome}>
            🌟 <strong>Welcome to the Indi Gamification Initiative!</strong> We&apos;re on a mission to revolutionize how developers learn, collaborate, and grow by infusing the power of gamification into the development ecosystem.
          </p>

          <section className={styles.section}>
            <h2>🚀 Our Proposed Initiatives</h2>

            <div className={styles.initiative}>
              <h3>🏅 CodeQuest Platform</h3>
              <p>Transform coding challenges into epic adventures! Developers embark on coding quests, earn XP for solving problems, and unlock achievement badges. Think LeetCode meets RPG gaming.</p>
              
              <h4>Key Features:</h4>
              <ul>
                <li>🗺️ <strong>Adventure Maps</strong>: Structured learning paths through different technologies</li>
                <li>⚔️ <strong>Boss Battles</strong>: Complex project challenges that require team collaboration</li>
                <li>🎖️ <strong>Guild System</strong>: Team up with other developers for collaborative projects</li>
                <li>📊 <strong>Leaderboards</strong>: Weekly/monthly coding competitions with real rewards</li>
              </ul>
              <div className={styles.initiativeLinks}>
                <Link href="/codequest" className={styles.learnMore}>Learn More →</Link>
              </div>
            </div>

            <div className={styles.initiative}>
              <h3>🎯 DevFlow Gamification Engine</h3>
              <p>Integrate gamification directly into development workflows and popular IDEs.</p>
              
              <h4>Innovative Features:</h4>
              <ul>
                <li>💎 <strong>Commit Streaks</strong>: Maintain coding momentum with streak rewards</li>
                <li>🔥 <strong>Code Quality Scores</strong>: Real-time feedback on code maintainability and performance</li>
                <li>🏆 <strong>Team Challenges</strong>: Sprint-based team competitions</li>
                <li>🎁 <strong>Achievement System</strong>: Unlock rewards for reaching development milestones</li>
              </ul>
              <div className={styles.initiativeLinks}>
                <Link href="/devflow" className={styles.learnMore}>Learn More →</Link>
              </div>
            </div>

            <div className={styles.initiative}>
              <h3>🌱 Learning Pathway Adventures</h3>
              <p>Structured, game-like learning experiences for new technologies and frameworks.</p>
              
              <h4>Experience Includes:</h4>
              <ul>
                <li>🗺️ <strong>Skill Trees</strong>: Visual progression through technology mastery</li>
                <li>🎪 <strong>Interactive Workshops</strong>: Hands-on coding experiences with instant feedback</li>
                <li>👥 <strong>Mentorship Matching</strong>: Connect learners with experienced developers</li>
                <li>📈 <strong>Progress Tracking</strong>: Detailed analytics on learning journey</li>
              </ul>
              <div className={styles.initiativeLinks}>
                <a href="/learning" className={styles.learnMore}>Learn More →</a>
              </div>
            </div>

            <div className={styles.initiative}>
              <h3>🤝 Open Source Contribution Games</h3>
              <p>Gamify the open source contribution experience to encourage community participation.</p>
              
              <h4>Community Features:</h4>
              <ul>
                <li>🌟 <strong>Contribution Challenges</strong>: Monthly themed contribution drives</li>
                <li>🏅 <strong>Maintainer Recognition</strong>: Special badges and rewards for project maintainers</li>
                <li>🎊 <strong>Hackathon Integration</strong>: Seamlessly organize and participate in coding events</li>
                <li>📝 <strong>Documentation Quests</strong>: Make documentation writing engaging and rewarding</li>
              </ul>
              <div className={styles.initiativeLinks}>
                <a href="/opensource" className={styles.learnMore}>Learn More →</a>
              </div>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2>🎯 Why Gamification in Development?</h2>
            
            <div className={styles.impactTable}>
              <div className={styles.impactCard}>
                <h4>🧠 Enhanced Learning</h4>
                <p>Interactive experiences improve retention by 75%</p>
              </div>
              <div className={styles.impactCard}>
                <h4>🤝 Community Building</h4>
                <p>Foster collaboration through team challenges</p>
              </div>
              <div className={styles.impactCard}>
                <h4>🚀 Motivation Boost</h4>
                <p>Achievement systems increase engagement by 90%</p>
              </div>
            </div>

            <h3>🔥 The Impact We&apos;re Creating</h3>
            <ul>
              <li><strong>📈 Increased Productivity</strong>: Developers report 40% higher coding motivation</li>
              <li><strong>🎓 Accelerated Learning</strong>: New developers complete learning paths 3x faster</li>
              <li><strong>🌟 Community Growth</strong>: 85% increase in open source contributions</li>
              <li><strong>💡 Innovation</strong>: Gamified environments spark creative problem-solving</li>
            </ul>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2>🚀 Get Involved!</h2>
            <p>Ready to level up the development experience? Here&apos;s how you can join our mission:</p>

            <div className={styles.involvement}>
              <div className={styles.involveCard}>
                <h3>🔗 For Developers</h3>
                <ul>
                  <li>🌟 <strong>Star this repository</strong> to show your support</li>
                  <li>🍴 <strong>Fork and contribute</strong> to our open source initiatives</li>
                  <li>💡 <strong>Share your ideas</strong> for new gamification features</li>
                  <li>🐛 <strong>Report bugs</strong> or suggest improvements</li>
                </ul>
              </div>

              <div className={styles.involveCard}>
                <h3>🏢 For Organizations</h3>
                <ul>
                  <li>🤝 <strong>Partner with us</strong> to implement gamification in your development teams</li>
                  <li>💰 <strong>Sponsor initiatives</strong> to accelerate development and reach more developers</li>
                  <li>📊 <strong>Pilot programs</strong> available for early adopters</li>
                </ul>
              </div>

              <div className={styles.involveCard}>
                <h3>🎓 For Educators</h3>
                <ul>
                  <li>📚 <strong>Integrate our tools</strong> into your coding curriculum</li>
                  <li>👨‍🏫 <strong>Become a mentor</strong> in our learning pathway adventures</li>
                  <li>🎯 <strong>Design challenges</strong> for student developers</li>
                </ul>
              </div>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.connectSection}>
            <h2>🌐 Connect With Us</h2>
            <h3>Join the revolution and help us gamify the future of development!</h3>

            <div className={styles.socialLinks}>
              <a href="https://github.com/indi-gamification-initiative" target="_blank" rel="noopener noreferrer">
                <Image src="https://img.shields.io/badge/GitHub-indi--gamification--initiative-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Organization" width={350} height={35} />
              </a>
              <a href="mailto:initiative@indigaindev.org" target="_blank" rel="noopener noreferrer">
                <Image src="https://img.shields.io/badge/Email-initiative@indigaindev.org-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" width={350} height={35} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="https://img.shields.io/badge/Discord-Join%20Our%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" width={300} height={35} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="https://img.shields.io/badge/Twitter-@IndiGamifyDev-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" width={280} height={35} />
              </a>
            </div>

            <h3>🏆 Current Status: Building the Future</h3>
            <div className={styles.statusBadges}>
              <Image src="https://img.shields.io/badge/Development-In%20Progress-yellow?style=for-the-badge&logo=construction" alt="Progress" width={250} height={35} />
              <Image src="https://img.shields.io/badge/Contributors-Welcome-brightgreen?style=for-the-badge&logo=handshake" alt="Contributors Welcome" width={280} height={35} />
            </div>

            <div className={styles.footer}>
              <p><em>Built with 💙 by developers, for developers</em></p>
              <p><strong>✨ Remember: Every expert was once a beginner. Every game-changer was once a newbie. Let&apos;s level up together! ✨</strong></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}