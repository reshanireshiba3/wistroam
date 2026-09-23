import React from "react";

function WebApplications() {
  return (
    <div className="web-application-development">
      <section className="hero">
        <h1>Web Application Development</h1>
        <p>
          We build powerful, scalable, and secure web applications that help
          businesses automate processes, improve efficiency, and deliver
          exceptional user experiences across all devices.
        </p>
      </section>

      <section className="about">
        <h2>What is Web Application Development?</h2>
        <p>
          Web application development involves creating interactive software
          applications that run in a web browser. Unlike traditional websites,
          web applications allow users to perform tasks, manage data, collaborate
          with teams, and access services through a dynamic and responsive
          interface.
        </p>
      </section>

      <section className="services">
        <h2>Our Web Application Development Services</h2>

        <div className="service-card">
          <h3>Custom Web Applications</h3>
          <p>
            Tailor-made web applications designed to meet your unique business
            requirements and workflows.
          </p>
        </div>

        <div className="service-card">
          <h3>Enterprise Web Solutions</h3>
          <p>
            Robust applications that streamline operations, improve productivity,
            and support business growth.
          </p>
        </div>

        <div className="service-card">
          <h3>CRM & ERP Applications</h3>
          <p>
            Integrated systems that help manage customer relationships,
            inventory, sales, and business operations efficiently.
          </p>
        </div>

        <div className="service-card">
          <h3>Portal Development</h3>
          <p>
            Secure customer, employee, and vendor portals with role-based
            access and personalized experiences.
          </p>
        </div>

        <div className="service-card">
          <h3>Application Maintenance</h3>
          <p>
            Continuous support, performance optimization, security updates,
            and feature enhancements.
          </p>
        </div>
      </section>

      <section className="process">
        <h2>Our Development Process</h2>
        <ol>
          <li>Requirement Analysis</li>
          <li>Planning & Architecture Design</li>
          <li>UI/UX Design</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Testing & Quality Assurance</li>
          <li>Deployment</li>
          <li>Ongoing Support & Maintenance</li>
        </ol>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Responsive User Interface</li>
          <li>Role-Based Access Control</li>
          <li>Real-Time Data Processing</li>
          <li>API Integration</li>
          <li>Cloud Deployment</li>
          <li>Advanced Security</li>
          <li>Scalable Architecture</li>
          <li>Analytics & Reporting</li>
        </ul>
      </section>

      <section className="technologies">
        <h2>Technologies We Use</h2>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>AWS & Cloud Services</li>
        </ul>
      </section>

      <section className="benefits">
        <h2>Benefits of Web Applications</h2>
        <ul>
          <li>Accessible from Anywhere</li>
          <li>Improved Business Efficiency</li>
          <li>Centralized Data Management</li>
          <li>Enhanced Security</li>
          <li>Easy Maintenance & Updates</li>
          <li>Scalable for Future Growth</li>
          <li>Reduced Operational Costs</li>
          <li>Better User Experience</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Transform Your Business with Web Applications</h2>
        <p>
          Empower your organization with custom web applications that improve
          productivity, automate workflows, and drive digital transformation.
        </p>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default WebApplications;