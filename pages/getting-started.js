import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/GettingStarted.module.css'

export default function GettingStarted() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Getting Started - Indi Gamification Initiative</title>
        <meta name="description" content="Start your gamified development journey. Complete setup guides, tutorials, and onboarding for all Indi Gamification platforms." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>← Back to Home</Link>
          <div className={styles.navLinks}>
            <Link href="/docs" className={styles.navLink}>API Docs</Link>
            <Link href="/tools" className={styles.navLink}>Tools</Link>
            <Link href="/demos" className={styles.navLink}>Demos</Link>
            <Link href="/research" className={styles.navLink}>Research</Link>
          </div>
        </nav>

        <div className={styles.hero}>
          <h1 className={styles.title}>🚀 Getting Started</h1>
          <p className={styles.subtitle}>
            Begin your gamified development journey in just a few minutes. 
            Choose your adventure and start earning XP today!
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>🎯 Choose Your Path</h2>
            <p>
              Select the gamification platform that best fits your needs and current development workflow.
            </p>
            
            <div className={styles.pathGrid}>
              <div className={styles.pathCard}>
                <div className={styles.pathIcon}>🏅</div>
                <h3>CodeQuest Platform</h3>
                <p>Perfect for developers who want to level up their coding skills through epic adventures and challenges.</p>
                <div className={styles.pathFeatures}>
                  <span>✓ Skill-based quests</span>
                  <span>✓ Achievement system</span>
                  <span>✓ Team collaborations</span>
                  <span>✓ Leaderboards</span>
                </div>
                <Link href="#codequest-setup" className={styles.pathCta}>
                  Start CodeQuest →
                </Link>
              </div>

              <div className={styles.pathCard}>
                <div className={styles.pathIcon}>🎯</div>
                <h3>DevFlow Engine</h3>
                <p>Ideal for teams wanting to gamify their existing development workflows and IDE experiences.</p>
                <div className={styles.pathFeatures}>
                  <span>✓ IDE integration</span>
                  <span>✓ Commit streaks</span>
                  <span>✓ Code quality scores</span>
                  <span>✓ Team challenges</span>
                </div>
                <Link href="#devflow-setup" className={styles.pathCta}>
                  Install DevFlow →
                </Link>
              </div>

              <div className={styles.pathCard}>
                <div className={styles.pathIcon}>🌱</div>
                <h3>Learning Pathways</h3>
                <p>Best for developers focused on structured learning and skill development with mentorship.</p>
                <div className={styles.pathFeatures}>
                  <span>✓ Skill trees</span>
                  <span>✓ Interactive workshops</span>
                  <span>✓ Mentorship matching</span>
                  <span>✓ Progress tracking</span>
                </div>
                <Link href="#learning-setup" className={styles.pathCta}>
                  Begin Learning →
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.section} id="codequest-setup">
            <h2>🏅 CodeQuest Platform Setup</h2>
            
            <div className={styles.setupSteps}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4>Create Your Account</h4>
                  <p>Sign up for CodeQuest using your GitHub, GitLab, or email account.</p>
                  <div className={styles.codeBlock}>
                    <pre>
{`# Visit https://codequest.indigaindev.org
# Click "Sign Up" and connect your GitHub account
# Complete your developer profile`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4>Select Your Starting Quest</h4>
                  <p>Choose from beginner-friendly quests or jump into advanced challenges.</p>
                  <div className={styles.questOptions}>
                    <span className={styles.questBadge}>🟢 Beginner: JavaScript Fundamentals</span>
                    <span className={styles.questBadge}>🟡 Intermediate: React Component Mastery</span>
                    <span className={styles.questBadge}>🔴 Advanced: System Design Challenges</span>
                  </div>
                </div>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4>Join a Guild (Optional)</h4>
                  <p>Team up with other developers for collaborative quests and team challenges.</p>
                  <div className={styles.guildBenefits}>
                    <ul>
                      <li>Shared knowledge and mentorship</li>
                      <li>Team-based challenges and competitions</li>
                      <li>Guild leaderboards and achievements</li>
                      <li>Collaborative project opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h4>Start Your First Quest</h4>
                  <p>Begin earning XP, unlocking achievements, and progressing through your chosen path.</p>
                  <div className={styles.rewardPreview}>
                    <span>🏆 First Quest Completion: +100 XP</span>
                    <span>🎖️ Early Adopter Badge</span>
                    <span>⭐ Skill Tree Unlock</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} id="devflow-setup">
            <h2>🎯 DevFlow Engine Installation</h2>
            
            <div className={styles.installationTabs}>
              <div className={styles.tabHeader}>
                <button className={`${styles.tabButton} ${styles.active}`}>VS Code</button>
                <button className={styles.tabButton}>JetBrains</button>
                <button className={styles.tabButton}>GitHub</button>
                <button className={styles.tabButton}>CLI</button>
              </div>
              
              <div className={styles.tabContent}>
                <div className={styles.installStep}>
                  <h4>📦 Install VS Code Extension</h4>
                  <div className={styles.codeBlock}>
                    <pre>
{`# Method 1: VS Code Marketplace
# Search for "DevFlow Gamification" in Extensions

# Method 2: Command Line
code --install-extension indigain.devflow-gamification

# Method 3: Manual Installation
# Download .vsix from https://releases.indigaindev.org`}
                    </pre>
                  </div>
                </div>

                <div className={styles.installStep}>
                  <h4>⚙️ Configure Settings</h4>
                  <div className={styles.codeBlock}>
                    <pre>
{`// In VS Code settings.json
{
  "devflow.autoTrack": true,
  "devflow.showNotifications": true,
  "devflow.teamId": "your-team-id",
  "devflow.apiKey": "your-api-key"
}`}
                    </pre>
                  </div>
                </div>

                <div className={styles.installStep}>
                  <h4>🔐 Authenticate & Connect</h4>
                  <div className={styles.codeBlock}>
                    <pre>
{`# Open Command Palette (Ctrl+Shift+P)
# Run: DevFlow: Connect Account
# Follow OAuth flow to connect your account
# Start earning XP immediately!`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🛠️ Quick Start Commands</h2>
            
            <div className={styles.commandGrid}>
              <div className={styles.commandCard}>
                <h4>🏅 CodeQuest CLI</h4>
                <div className={styles.codeBlock}>
                  <pre>
{`# Install CodeQuest CLI
npm install -g @indigain/codequest-cli

# Login and start tracking
codequest login
codequest start-session

# Submit solution
codequest submit solution.js`}
                  </pre>
                </div>
              </div>

              <div className={styles.commandCard}>
                <h4>🎯 DevFlow API</h4>
                <div className={styles.codeBlock}>
                  <pre>
{`# Track commits programmatically
curl -X POST https://api.devflow.io/track \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{
    "event": "commit",
    "repository": "your-repo",
    "metrics": {"lines": 42, "files": 3}
  }'`}
                  </pre>
                </div>
              </div>

              <div className={styles.commandCard}>
                <h4>🌱 Learning SDK</h4>
                <div className={styles.codeBlock}>
                  <pre>
{`# JavaScript SDK
import { LearningPath } from '@indigain/learning-sdk';

const path = new LearningPath('react-mastery');
await path.startWorkshop('components-101');
await path.submitProject(projectData);`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🎮 First Steps Checklist</h2>
            
            <div className={styles.checklistGrid}>
              <div className={styles.checklistColumn}>
                <h4>👤 Profile Setup</h4>
                <div className={styles.checklist}>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Complete developer profile</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Connect GitHub/GitLab</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Set skill interests</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Choose learning goals</span>
                  </label>
                </div>
              </div>

              <div className={styles.checklistColumn}>
                <h4>🔧 Tool Integration</h4>
                <div className={styles.checklist}>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Install IDE extension</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Configure API settings</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Test tracking functionality</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Join team workspace</span>
                  </label>
                </div>
              </div>

              <div className={styles.checklistColumn}>
                <h4>🚀 First Actions</h4>
                <div className={styles.checklist}>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Complete first quest/challenge</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Earn your first achievement</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Join a guild or team</span>
                  </label>
                  <label className={styles.checklistItem}>
                    <input type="checkbox" />
                    <span>Share progress on social media</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>❓ Need Help?</h2>
            
            <div className={styles.helpGrid}>
              <div className={styles.helpCard}>
                <h4>📚 Documentation</h4>
                <p>Comprehensive guides and API references</p>
                <Link href="/docs" className={styles.helpLink}>
                  Browse Docs →
                </Link>
              </div>

              <div className={styles.helpCard}>
                <h4>💬 Community Discord</h4>
                <p>Get help from other developers and our team</p>
                <Link href="#" className={styles.helpLink}>
                  Join Discord →
                </Link>
              </div>

              <div className={styles.helpCard}>
                <h4>🎥 Video Tutorials</h4>
                <p>Step-by-step setup and usage videos</p>
                <Link href="/tutorials" className={styles.helpLink}>
                  Watch Tutorials →
                </Link>
              </div>

              <div className={styles.helpCard}>
                <h4>🐛 Report Issues</h4>
                <p>Found a bug or have a feature request?</p>
                <Link href="https://github.com/indi-gamification-initiative/issues" className={styles.helpLink}>
                  GitHub Issues →
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>🎮 Ready to Level Up?</h2>
            <p>Choose your starting platform and begin your gamified development journey today!</p>
            <div className={styles.ctaButtons}>
              <Link href="https://codequest.indigaindev.org" className={styles.primaryCta}>
                Launch CodeQuest
              </Link>
              <Link href="/demos" className={styles.secondaryCta}>
                Try Demo First
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}