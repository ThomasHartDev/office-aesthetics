<template>
  <div class="resume">
    <NuxtImg src="/Graphics/resumeLeaves.svg" alt="" class="leaf-graphic" />

    <aside class="sidebar">
      <div class="profile-photo">
        <img src="/ProfilePic.jpeg" alt="Your Photo" />
      </div>

      <div class="section">
        <h2>CONTACT</h2>
        <ul class="contact-list">
          <li>
            <NuxtImg src="/Graphics/resumeLocation.svg" class="icon-location" />
            <span>SLC, Utah</span>
          </li>
          <li>
            <NuxtImg src="/Graphics/resumePhone.svg" class="icon-location" />
            <span>+1 (801) 793 5456</span>
          </li>
          <li>
            <NuxtImg src="/Graphics/resumeMail.svg" class="icon-location" />
            <span>thomashartdev@gmail.com</span>
          </li>
          <li>
            <NuxtImg src="/Graphics/resumeWorld.svg" class="icon-location" />
            <a
              href="https://github.com/Thomas-Hart"
              target="_blank"
              rel="noopener"
            >
              github.com/Thomas-Hart
            </a>
          </li>
        </ul>
      </div>

      <div class="section">
        <h2>EDUCATION</h2>
        <p>
          <strong>Computer Science</strong><br />
          Brigham Young University / Provo UT<br />
          2016 – 2022
        </p>
        <p>
          <strong>Business Management</strong><br />
          Brigham Young University / Provo UT<br />
          2016 – 2022
        </p>
      </div>

      <div class="section">
        <h2><strong>REFERENCES</strong></h2>
        <h3>Dalan Brown</h3>
        <ul>
          <li>CEO</li>
          <li>Subsource</li>
          <li>Phone: +1 (971) 712 8422</li>
        </ul>
        <h3>Beau Ruffner</h3>
        <ul>
          <li>CEO</li>
          <li>NexGen Sales</li>
          <li>Phone: +1 (949) 547 3815</li>
        </ul>
      </div>
    </aside>

    <main class="content">
      <header class="header">
        <h1>
          <span class="first-name">THOMAS</span>
          <span class="last-name">HART</span>
        </h1>
        <h2>FULL-STACK SOFTWARE ENGINEER</h2>
        <p>
          <span class="intro">My Name is Thomas Hart</span> and I'm a full-stack
          software engineer who loves building fast, custom websites and
          applications. I’m passionate about creating solutions that feel
          seamless, perform flawlessly, and make a real difference for
          businesses and their customers.
        </p>
      </header>

      <section class="work-experience">
        <h2>WORK EXPERIENCE</h2>
        <div class="timeline-container">
          <canvas ref="timelineCanvas" class="timeline-canvas"></canvas>
          <div class="timeline" ref="timelineContainer">
            <div class="timeline-item">
              <h3>
                <span class="job-title">Junior Software Developer</span>
                / Brigham Young University
              </h3>
              <time>April 2021 – April 2022</time>
              <ul>
                <li>
                  Lead NPC AI design by creating 30+ different
                  behaviors/mechanics
                </li>
                <li>
                  Awarded 5<sup>th</sup> place in the world at the Rookie's
                  International Game Competition
                </li>
                <li>
                  Used TortoiseSVN to program collaboratively with a group of
                  50+ students
                </li>
                <li>Successfully debugged 30,000+ lines of code</li>
                <li>
                  Awarded Talisman Scholarship Award for exemplary work ethic,
                  quality, and attitude
                </li>
              </ul>
            </div>
            <div class="timeline-item">
              <h3>
                <span class="job-title">Full-Stack Software Engineer</span>
                / HARTECHO
              </h3>
              <time>December 2022 – May 2025</time>
              <ul>
                <li>
                  Designed and built custom ecommerce stores with Nuxt3,
                  achieving mobile load speeds under 1 second
                </li>
                <li>
                  Integrated third-party tools (Klaviyo, Stripe, PayPal, Meta
                  Pixel, Google Sign-In, and more) to enhance functionality and
                  marketing performance.
                </li>
                <li>
                  Developed admin dashboards for full control over products,
                  orders, users, and content.
                </li>
                <li>
                  Optimized dynamic SEO metadata, increasing organic client
                  traffic by 35%.
                </li>
                <li>Designed fully responsive UX/UI for dozens of projects.</li>
                <li>
                  Deployed websites using GitHub Actions and Vercel for
                  fully-automated CI/CD workflow and serverless scalability.
                </li>
                <li>
                  Managed complete project lifecycles with a 100% client
                  satisfaction rate.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="skills">
        <h2>SKILLS</h2>
        <div class="skill-list">
          <div class="skill-item">
            <h3>Professional Skills</h3>
            <p>Problem Solving & Critical Thinking</p>
            <p>Agile Project Planning</p>
            <p>Client Communication & Collaboration</p>
          </div>

          <div class="skill-item">
            <h3>Programming Languages</h3>
            <p>JavaScript · TypeScript · Java · Python · C · C++ · C#</p>
          </div>

          <div class="skill-item">
            <h3>Frontend Technologies</h3>
            <p>Vue / Nuxt3 · React / Next.js</p>
            <p>HTML5 · CSS3 (SCSS, Responsive Design)</p>
          </div>

          <div class="skill-item">
            <h3>Backend & API Design</h3>
            <p>Node.js · Express · Ruby on Rails · Django</p>
            <p>RESTful Services & GraphQL</p>
          </div>

          <div class="skill-item">
            <h3>Databases & Storage</h3>
            <p>MongoDB · SQL (MySQL, PostgreSQL)</p>
          </div>

          <div class="skill-item">
            <h3>DevOps & CI/CD</h3>
            <p>Docker · Kubernetes · GitHub Actions · AWS · GCP · Vercel</p>
          </div>

          <div class="skill-item">
            <h3>Testing & Tooling</h3>
            <p>Jest · Vitest</p>
          </div>

          <div class="skill-item">
            <h3>Design & UI</h3>
            <p>UML & System Modeling (Mermaid · Lucidchart)</p>
            <p>TailwindCSS · Design Principles · Accessibility (ADA)</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
definePageMeta({ layout: false });

const timelineCanvas = ref(null);
const timelineContainer = ref(null);

onMounted(() => {
  nextTick(drawTimeline);
  if (typeof window !== "undefined") {
    window.addEventListener("beforeprint", drawTimeline);
    window.addEventListener("afterprint", drawTimeline);
  }
});

function drawTimeline() {
  const canvas = timelineCanvas.value;
  const container = timelineContainer.value;
  const ctx = canvas.getContext("2d");
  const items = container.querySelectorAll(".timeline-item");
  const containerHeight = container.clientHeight;

  canvas.width = 20;
  canvas.height = containerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const lineX = canvas.width / 2;

  ctx.beginPath();
  ctx.moveTo(lineX, 0);
  ctx.lineTo(lineX, canvas.height);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#333a4c";
  ctx.stroke();

  const containerRect = container.getBoundingClientRect();
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const y = rect.top - containerRect.top + rect.height * 0.1;

    ctx.beginPath();
    ctx.arc(lineX, y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#333a4c";
    ctx.stroke();
  });
}
</script>

<style scoped>
.resume {
  display: grid;
  max-width: 1200px;
  grid-template-columns: 30% 70%;
  position: relative;
  font-family: "Source Sans Pro", Montserrat, sans-serif, "HelveticaNeue-Light",
    "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande",
    sans-serif;
  color: #333;
  background: #fff;
  min-height: 100vh;
}

.leaf-graphic {
  position: absolute;
  top: 0;
  right: 0;
  width: 180px;
  pointer-events: none;
}

.sidebar {
  background-color: #333a4c;
  padding: 3rem 0 3rem 3rem;
  box-sizing: border-box;
  color: #fff;
}

.profile-photo {
  width: 130px;
  height: 130px;
  margin: 1rem 0 3rem 1rem;
  border-radius: 50%;
  overflow: hidden;
}
.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section {
  margin-bottom: 25px;
}
.section h2 {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 10px;
  padding-bottom: 4px;
  border-bottom: 2px solid rgba(255, 255, 255, 1);
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.contact-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
}
.contact-list li img {
  width: 20px;
  margin-right: 10px;
}

.section p,
.section ul {
  font-size: 12px;
  line-height: 1.4;
  color: #e0e0e0;
  margin-bottom: 1rem;
}
.section ul {
  list-style: none;
  padding: 0;
}
.section ul li {
  padding-right: 1rem;
}

.section h3 {
  font-size: 12px;
  margin: 12px 0 6px;
}
.section h3 code {
  font-family: "Source Code Pro", monospace;
  color: #cbd5e0;
  font-weight: bolder;
}

.content {
  padding: 40px;
  box-sizing: border-box;
}

.header h1 {
  font-size: 40px;
  text-transform: uppercase;
  margin: 0;
}
.header .first-name {
  font-weight: 700;
  letter-spacing: 4px;
  color: #333a4c;
  margin-right: 1rem;
}
.header .last-name {
  font-weight: 300;
  letter-spacing: 4px;
  color: #333a4c;
}
.intro {
  font-weight: 700;
}
.header h2 {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #333a4c;
  letter-spacing: 0.5px;
  margin: 8px 0 20px;
  font-family: "Montserrat";
}
.header p {
  font-size: 12px;
  color: #333a4c;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2.6rem;
}

.work-experience h2,
.skills h2 {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  padding-bottom: 4px;
  border-bottom: 2px solid #333a4c;
  color: #333a4c;
}

.timeline-container {
  position: relative;
}
.timeline-canvas {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 20px;
  height: 100%;
  pointer-events: none;
}

.timeline {
  margin-left: 40px;
}
.timeline-item {
  margin-bottom: 1.5rem;
}
.job-title {
  font-weight: bolder;
}
.timeline-item h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #333a4c;
}
.timeline-item time {
  display: block;
  font-size: 12px;
  color: #333a4c;
  margin: 0.25rem 0 0.25rem;
}
.timeline-item ul {
  font-size: 12px;
  color: #333a4c;
  margin: 0;
  list-style: disc inside;
  margin-top: 0.5rem;
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}
.skill-item h3 {
  font-size: 14px;
  margin: 0 0 4px;
  color: #333a4c;
}
.skill-item p {
  font-size: 12px;
  color: #666;
  margin: 2px 0;
}

@page {
  margin: 0;
}
@media print {
  .sidebar {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .timeline-canvas {
    bottom: 0;
    height: 100% !important;
  }
}
</style>
