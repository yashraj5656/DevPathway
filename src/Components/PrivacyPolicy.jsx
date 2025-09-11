import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          At <strong>Zyqentra</strong>, your privacy is very important to us. This Privacy Policy 
          explains how we collect, use, and protect your information when you use our platform, 
          services, and resources.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> such as name, email address, or contact details provided by you.</li>
          <li><strong>Usage Data:</strong> such as pages visited, time spent, and interactions on our platform.</li>
          <li><strong>Cookies:</strong> to improve user experience and track preferences.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We may use the collected information for:</p>
        <ul>
          <li>Improving our services and providing a personalized experience.</li>
          <li>Sending updates, newsletters, and relevant notifications.</li>
          <li>Ensuring security and preventing fraudulent activity.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing of Information</h2>
        <p>
          Zyqentra does not sell, trade, or rent your personal information to third parties. 
          We may only share it with trusted service providers to operate our platform or when 
          legally required.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving promotional communications.</li>
          <li>Request details about how your data is used.</li>
        </ul>
      </section>

      <section>
        <h2>6. Security</h2>
        <p>
          We implement strict measures to protect your personal information. However, 
          no method of transmission over the internet is 100% secure, so we cannot 
          guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be 
          posted here with the updated date at the top of this page.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can reach us at: <br />
          📧 <a href="/contact">support@zyqentra.com</a>
        </p>
      </section>
    </div>
  );
}
