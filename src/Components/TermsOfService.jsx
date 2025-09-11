import React from "react";
import "./TermsOfService.css";

export default function TermsOfService() {
  return (
    <div className="terms-of-service">
      <h1>Terms of Service</h1>
      <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using <strong>Zyqentra</strong>, you agree to comply with and be bound by 
          these Terms of Service. If you do not agree, please do not use our platform.
        </p>
      </section>

      <section>
        <h2>2. Use of the Platform</h2>
        <ul>
          <li>You must be at least 13 years old to use our services.</li>
          <li>You agree not to use Zyqentra for any unlawful purpose.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        </ul>
      </section>

      <section>
        <h2>3. Intellectual Property</h2>
        <p>
          All content, including roadmaps, resources, and designs provided by Zyqentra, 
          are protected by copyright and intellectual property laws. You may not copy, 
          modify, or distribute our materials without prior permission.
        </p>
      </section>

      <section>
        <h2>4. User Content</h2>
        <p>
          You retain ownership of any content you submit (such as feedback or community posts). 
          By submitting, you grant Zyqentra a non-exclusive license to display and use that content 
          for improving services.
        </p>
      </section>

      <section>
        <h2>5. Disclaimers</h2>
        <p>
          Zyqentra provides educational content "as is" without warranties of any kind. 
          We do not guarantee results or job placements through the use of our resources.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          Zyqentra shall not be held liable for any damages arising from the use or inability 
          to use our platform, including but not limited to data loss, interruptions, or errors.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access if you violate these Terms 
          or misuse the platform.
        </p>
      </section>

      <section>
        <h2>8. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Changes will be effective 
          upon posting on this page with the updated date.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please reach out to us at: <br />
          📧 <a href="/contact">support@zyqentra.com</a>
        </p>
      </section>
    </div>
  );
}
