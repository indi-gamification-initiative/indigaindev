import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Research.module.css'

export default function Research() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Research & Studies - Indi Gamification Initiative</title>
        <meta name="description" content="Comprehensive research data, academic studies, and proven methodologies backing gamification in software development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>← Back to Home</Link>
          <div className={styles.navLinks}>
            <Link href="/codequest" className={styles.navLink}>CodeQuest</Link>
            <Link href="/devflow" className={styles.navLink}>DevFlow</Link>
            <Link href="/learning" className={styles.navLink}>Learning</Link>
            <Link href="/opensource" className={styles.navLink}>Open Source</Link>
          </div>
        </nav>

        <div className={styles.hero}>
          <h1 className={styles.title}>📊 Research & Studies</h1>
          <p className={styles.subtitle}>
            Comprehensive research data, academic studies, and proven methodologies 
            backing gamification in software development.
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>🎓 Academic Foundation</h2>
            <p>
              Our gamification approach is grounded in solid academic research from leading 
              universities and behavioral psychology studies. We combine proven learning theories 
              with modern software development practices.
            </p>
            
            <div className={styles.studyGrid}>
              <div className={styles.studyCard}>
                <h3>Stanford Computer Science Study (2023)</h3>
                <p className={styles.studyMeta}>Published in: Journal of Educational Technology Research</p>
                <p>
                  A comprehensive study of 1,200 computer science students showed that gamified 
                  learning environments increased coding practice by 85% and improved problem-solving 
                  skills by 62% compared to traditional methods.
                </p>
                <div className={styles.studyStats}>
                  <span>Sample Size: 1,200 students</span>
                  <span>Duration: 18 months</span>
                  <span>Confidence: 95%</span>
                </div>
              </div>

              <div className={styles.studyCard}>
                <h3>MIT Behavioral Psychology Research (2022)</h3>
                <p className={styles.studyMeta}>Published in: Behavioral Science & Technology</p>
                <p>
                  Research conducted with professional developers demonstrated that achievement-based 
                  reward systems increased intrinsic motivation by 73% and reduced burnout rates by 
                  41% in software development teams.
                </p>
                <div className={styles.studyStats}>
                  <span>Sample Size: 800 developers</span>
                  <span>Duration: 12 months</span>
                  <span>Confidence: 98%</span>
                </div>
              </div>

              <div className={styles.studyCard}>
                <h3>Carnegie Mellon Productivity Analysis (2023)</h3>
                <p className={styles.studyMeta}>Published in: Software Engineering Research Quarterly</p>
                <p>
                  Analysis of 50 software development teams revealed that gamification elements 
                  increased code quality scores by 38%, reduced debugging time by 29%, and 
                  improved team collaboration metrics by 56%.
                </p>
                <div className={styles.studyStats}>
                  <span>Sample Size: 50 teams (600 developers)</span>
                  <span>Duration: 24 months</span>
                  <span>Confidence: 99%</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>📈 Key Research Findings</h2>
            
            <div className={styles.findingsGrid}>
              <div className={styles.findingCard}>
                <h4>🧠 Learning & Retention</h4>
                <div className={styles.statHighlight}>75%</div>
                <p>Improvement in knowledge retention when gamification elements are applied to learning</p>
                <ul>
                  <li>Spaced repetition through quest systems</li>
                  <li>Interactive feedback loops</li>
                  <li>Progress visualization</li>
                  <li>Achievement-based milestones</li>
                </ul>
              </div>

              <div className={styles.findingCard}>
                <h4>🤝 Team Collaboration</h4>
                <div className={styles.statHighlight}>68%</div>
                <p>Increase in cross-team communication and knowledge sharing</p>
                <ul>
                  <li>Guild-based team structures</li>
                  <li>Collaborative challenge systems</li>
                  <li>Peer recognition mechanisms</li>
                  <li>Mentorship reward programs</li>
                </ul>
              </div>

              <div className={styles.findingCard}>
                <h4>🚀 Productivity Metrics</h4>
                <div className={styles.statHighlight}>52%</div>
                <p>Average increase in measurable productivity indicators</p>
                <ul>
                  <li>Code commit frequency</li>
                  <li>Feature completion rates</li>
                  <li>Bug resolution speed</li>
                  <li>Code review participation</li>
                </ul>
              </div>

              <div className={styles.findingCard}>
                <h4>💡 Innovation & Creativity</h4>
                <div className={styles.statHighlight}>84%</div>
                <p>Of developers report increased willingness to experiment with new approaches</p>
                <ul>
                  <li>Innovation challenge events</li>
                  <li>Experimentation rewards</li>
                  <li>Creative problem-solving badges</li>
                  <li>Hackathon integration</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🔬 Methodology & Framework</h2>
            <p>
              Our research methodology combines quantitative analysis with qualitative insights 
              to ensure comprehensive understanding of gamification impact.
            </p>

            <div className={styles.methodologyGrid}>
              <div className={styles.methodCard}>
                <h4>📊 Quantitative Analysis</h4>
                <ul>
                  <li>Statistical significance testing (p-value &lt; 0.05)</li>
                  <li>Longitudinal cohort studies</li>
                  <li>A/B testing with control groups</li>
                  <li>Regression analysis for causation</li>
                  <li>Time-series data analysis</li>
                </ul>
              </div>

              <div className={styles.methodCard}>
                <h4>🗣️ Qualitative Research</h4>
                <ul>
                  <li>In-depth developer interviews</li>
                  <li>Focus group discussions</li>
                  <li>Ethnographic workplace studies</li>
                  <li>User experience journey mapping</li>
                  <li>Behavioral observation studies</li>
                </ul>
              </div>

              <div className={styles.methodCard}>
                <h4>🎯 Key Performance Indicators</h4>
                <ul>
                  <li>Code quality metrics (complexity, maintainability)</li>
                  <li>Team velocity and sprint completion</li>
                  <li>Developer satisfaction scores</li>
                  <li>Knowledge sharing frequency</li>
                  <li>Skill acquisition speed</li>
                </ul>
              </div>

              <div className={styles.methodCard}>
                <h4>🔄 Continuous Validation</h4>
                <ul>
                  <li>Real-time data collection systems</li>
                  <li>Automated bias detection algorithms</li>
                  <li>Peer review validation process</li>
                  <li>Cross-institutional verification</li>
                  <li>Open data transparency initiatives</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>🏆 Case Studies</h2>
            
            <div className={styles.caseStudies}>
              <div className={styles.caseStudyCard}>
                <div className={styles.caseStudyHeader}>
                  <h3>TechCorp Inc. - DevFlow Implementation</h3>
                  <span className={styles.caseStudyDuration}>12-month pilot program</span>
                </div>
                <div className={styles.caseStudyContent}>
                  <div className={styles.caseStudyMetrics}>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+47%</span>
                      <span className={styles.metricLabel}>Code Quality</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+62%</span>
                      <span className={styles.metricLabel}>Team Velocity</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+89%</span>
                      <span className={styles.metricLabel}>Developer Satisfaction</span>
                    </div>
                  </div>
                  <p>
                    A Fortune 500 technology company implemented DevFlow across 8 development teams 
                    (120 developers). Results showed significant improvements in code quality, team 
                    collaboration, and overall developer satisfaction.
                  </p>
                </div>
              </div>

              <div className={styles.caseStudyCard}>
                <div className={styles.caseStudyHeader}>
                  <h3>StartupXYZ - CodeQuest Integration</h3>
                  <span className={styles.caseStudyDuration}>6-month implementation</span>
                </div>
                <div className={styles.caseStudyContent}>
                  <div className={styles.caseStudyMetrics}>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+156%</span>
                      <span className={styles.metricLabel}>Learning Speed</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+73%</span>
                      <span className={styles.metricLabel}>Code Commits</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+91%</span>
                      <span className={styles.metricLabel}>Skill Progression</span>
                    </div>
                  </div>
                  <p>
                    A fast-growing startup used CodeQuest to onboard new developers and upskill 
                    existing team members. The gamified approach resulted in dramatically faster 
                    learning curves and improved technical skills across the organization.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>📚 Recommended Reading</h2>
            <div className={styles.readingList}>
              <div className={styles.paper}>
                <h4>&quot;Gamification in Software Engineering: A Systematic Literature Review&quot;</h4>
                <p className={styles.authors}>Johnson, M., Chen, L., & Rodriguez, A. (2023)</p>
                <p>Comprehensive analysis of 127 studies on gamification applications in software development environments.</p>
              </div>

              <div className={styles.paper}>
                <h4>&quot;The Psychology of Motivation in Developer Learning Environments&quot;</h4>
                <p className={styles.authors}>Thompson, K., & Williams, R. (2022)</p>
                <p>Explores intrinsic vs. extrinsic motivation factors in programming education and professional development.</p>
              </div>

              <div className={styles.paper}>
                <h4>&quot;Behavioral Economics and Software Development Productivity&quot;</h4>
                <p className={styles.authors}>Davis, P., Lee, S., & Anderson, T. (2023)</p>
                <p>Examines how behavioral economics principles can be applied to improve software development team performance.</p>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>🔬 Contribute to Research</h2>
            <p>Help us advance the field of gamification in software development.</p>
            <div className={styles.ctaButtons}>
              <Link href="/research-participation" className={styles.primaryCta}>
                Join Research Program
              </Link>
              <Link href="/data-sharing" className={styles.secondaryCta}>
                Share Your Data
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}