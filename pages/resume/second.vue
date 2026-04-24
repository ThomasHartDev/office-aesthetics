<template>
  <div class="resume">
    <h1>THOMAS HART</h1>
    <p class="contact-line">
      <b>Email:</b> thomashartdev@gmail.com <b> | Phone: </b> +1 (801) 793-5456
      <b>
        |
        <a
          href="https://www.linkedin.com/in/thomashartdev"
          target="_blank"
          rel="noopener"
          >LinkedIn 🔗</a
        ></b
      >
      <b>
        |
        <a href="https://github.com/Thomas-Hart" target="_blank" rel="noopener"
          >GitHub 🔗</a
        ></b
      >
    </p>

    <section class="section">
      <h2>Work Experience</h2>
      <div class="line-break"></div>

      <div class="entry">
        <div class="details">
          <strong>Full-Stack Engineer</strong> — Redo — Draper, UT
        </div>
        <div class="date">October 2025 – Present</div>
      </div>
      <ul>
        <li>
          Building and shipping production systems on Redo's e-commerce returns
          and exchanges platform serving 5,000+ merchants including Liquid Death,
          Nike Strength, Popflex, and Freckled Poppy. Merged 77 PRs in under 4
          months — ranked "Elite" tier by industry benchmarks (LinearB 2026,
          8.1M PRs, 4,800 teams).
        </li>
        <li>
          Designed and built the Conversion Monitor from scratch — an 8,500+
          line full-stack observability system with Snowflake data pipeline,
          anomaly detection engine, Slack alerting with de-duplication,
          historical recording across 1,700+ teams, and an admin dashboard with
          interactive charting.
        </li>
        <li>
          Built multi-platform refund orchestration across 6 e-commerce
          providers (Shopify GraphQL, BigCommerce, CommentSold, Commerce Cloud
          with Adyen/PayPal/Optty/GlobalE) for the PP+ claims system with
          idempotent safeguards.
        </li>
        <li>
          Shipped an international pricing system end-to-end — price rounding
          engine with penny psychology, Shopify GraphQL catalog discovery
          handling 50+ catalogs, batch mutations, team settings UI, RPC
          endpoint, and automated nightly cron sync.
        </li>
        <li>
          Fixed a checkout-blocking bug directly impacting merchant revenue,
          plus cart token invalidation, currency label issues, and default image
          overhaul across all merchants.
        </li>
        <li>
          Shipped CSV export system with 29+ dynamic columns and role-based
          redaction, recycle dashboard (40 files), billing system improvements,
          and BigCommerce integration fixes.
        </li>
        <div class="space-break"></div>
        <em
          >Tech: TypeScript, React, Node.js, Bazel, MongoDB, Snowflake,
          Temporal, Shopify GraphQL, BigCommerce API, AWS</em
        >
      </ul>

      <div class="entry">
        <div class="details">
          <strong>Software Engineer, Full Stack</strong> — HARTECHO LLC — Salt
          Lake City, UT
        </div>
        <div class="date">May 2022 – October 2025</div>
      </div>
      <ul>
        <li>
          Led a team of 5 to build and deploy 12 custom-coded ecommerce stores
          with mobile load times averaging 1.2s, reducing bounce rates and
          improving conversions by 30% on average.
        </li>
        <li>
          Identified out-of-date tools in company tech stack and led the
          refactor of multiple projects. Switched from Vue components to the
          Nuxt3 framework and AWS Amplify to Vercel hosting. Refactor and
          optimizations improved mobile page load speeds by up to 7 seconds.
        </li>
        <li>
          Owned the CI/CD pipeline and automated testing workflow for serverless
          scalability, saving 700+ hours of labor across projects.
        </li>
        <li>
          Integrated several payment gateways (PayPal, Stripe, Square) and
          marketing tools (Klaviyo, Meta Pixel), enabling automated abandoned
          cart flows and boosting recovered revenue by 20% on average. Payment
          gateways processed $3m+ in sales.
        </li>
        <li>
          Designed dynamic routing and metadata injection system that increased
          organic traffic on client websites by 18% on average.
        </li>
        <li>
          Built custom admin portals for managing orders, inventory, promotions,
          and customers, cutting down client reliance on developer support by
          over 80%.
        </li>
        <li>
          Designed and implemented secure logins (email and Google Sign-In) and
          user dashboards for more personal user experience, marketing reach,
          and customer loyalty.
        </li>
        <div class="space-break"></div>
        <em
          >Tech: TypeScript, JavaScript, Vue, Nuxt3, React, Next.js, Node.js,
          Python, MongoDB, PostgreSQL, Redis, Docker, AWS, GCP, Vercel, GitHub
          Actions</em
        >
      </ul>

      <!-- <div class="entry">
        <div class="details">
          <strong>Software Engineer, Freelance</strong>
        </div>
        <div class="date">April 2021 – April 2022</div>
      </div>
      <ul>
        <li>
          Built a custom web app for onboarding and training door-to-door sales
          reps before they're sent into an area.
        </li>
        <br />
        <em
          >Tech: Nuxt, Vue (HTML, CSS, JavaScript, TypeScript), Pinia, Node.js,
          MongoDB, GCP, AWS, Vitest, GitHub Actions, Vercel</em
        >
        <br />
        <em
          >Third-party Integrations: Google Sign-In, Klaviyo, Meta Pixel,
          PayPal, Stripe, Square</em
        >
      </ul> -->

      <div class="entry">
        <div class="details">
          <strong>Junior Software Engineer</strong> — Brigham Young University —
          Provo, UT
        </div>
        <div class="date">April 2020 – April 2022</div>
      </div>
      <ul>
        <li>
          Led a team of 4 to brainstorm and implement NPC behavior in a
          university video game project. Crafted 100+ behaviors and mechanics
          across characters, contributing to our 5th place ranking in the
          Rookie's international video game competition.
        </li>
        <li>
          Handled SVN branching and merging using TortoiseSVN to manage features
          and bug fixes in a structured multi-developer environment of 50+
          students.
        </li>
        <li>Debugged and maintained 30,000+ lines of legacy code.</li>
        <div class="space-break"></div>
        <em>Tech: C++, C, UnrealEngine, Blueprint</em>
      </ul>
    </section>

    <section class="section">
      <h2>Projects</h2>
      <div class="line-break"></div>

      <div class="entry">
        <div class="details">
          <strong
            >Office Aestheticas (Preview:
            <NuxtLink href="https://oa-zeta.vercel.app"
              >Office Aestheticas</NuxtLink
            >)</strong
          >
          — Remote
        </div>
        <div class="date">January 2025 – Present</div>
      </div>
      <ul>
        <li>
          My personal ecommerce store with all passing Google Lighthouse scores.
          It has serverless scalability to handle any number of visitors. The
          architecture is built to sell any item with any number of variants and
          is fully optimized for customer convenience and conversions. Tech:
          Nuxt3
        </li>
      </ul>

      <div class="entry">
        <div class="details">
          <strong
            >NexGen Sales (Preview:
            <NuxtLink href="https://nexgen-sales.vercel.app"
              >NexGen Sales</NuxtLink
            >)</strong
          >
          — Remote
        </div>
        <div class="date">September 2025 – November 2025</div>
      </div>
      <ul>
        <li>
          A custom web app for NexGen Sales, a door-to-door sales recruitment
          company. The website features an SEO-optimized home page with an
          application form, blogs, and member portal. The secure login leads
          users to a dashboard where there are courses, trainings, and tests to
          screen potential sales reps. The website has processed 5000+
          applications and trained 800+ sales reps. Tech: Nuxt3
        </li>
      </ul>

      <div class="entry">
        <div class="details">
          <strong>Tweeter</strong>
          — Provo, Utah
        </div>
        <div class="date">January 2022 – April 2022</div>
      </div>
      <ul>
        <li>
          A mobile android app that replicates the functionality of Twitter. It
          has all 14 operations required to function as a social media app, and
          follows several key design principles for clean, scalable code. Tech:
          Java, AWS
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>Education</h2>
      <div class="line-break"></div>
      <div class="entry">
        <div class="details">
          <strong>Brigham Young University, Provo, UT</strong> — Bachelor of
          Science (B.S.) in Computer Science
        </div>
        <div class="date">Graduated August 2022</div>
      </div>
      <div class="entry">
        <div class="details">
          <strong>Brigham Young University, Provo, UT</strong> — Minor in
          Business Management
        </div>
        <div class="date">Graduated August 2022</div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });

useHead({
  title: "Thomas Hart — Resume",
});
</script>

<style scoped>
.resume {
  max-width: 800px;
  margin: 0 auto;
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
  color: #333;
  line-height: 1.5;
  padding: 2rem 1.5rem;
}

h1 {
  font-size: 32px;
  /* margin-bottom: 0.25em; */
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

.contact-line {
  font-size: 14px;
  margin-bottom: 0.5em;
}

.section {
  margin-top: 0.5rem;
}

h2 {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

.line-break {
  width: 100%;
  margin-bottom: 0.25em;
  border-bottom: 0.2rem solid gray;
}

.space-break {
  height: 0.5rem;
}

.entry {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

.details {
  font-size: 14px;
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

.details strong {
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

.date {
  font-size: 0.9em;
  font-style: italic;
  color: #555;
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

ul {
  margin: 0.25em 0 1em 1.5em;
  /* list-style: disc inside; */
  font-size: 14px;
  line-height: 16px;
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

li {
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

em {
  font-style: normal;
  color: #333;
  font-family: Cambria, Georgia, "Times New Roman", serif !important;
}

a {
  /* color: blue; */
}

a:hover {
  text-decoration: underline;
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
