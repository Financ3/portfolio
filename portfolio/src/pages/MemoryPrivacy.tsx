export default function MemoryPrivacy() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f1724' }}>
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px', fontFamily: 'sans-serif', color: 'rgba(255, 255, 255, 0.87)', lineHeight: 1.7 }}>
      <h1>Privacy Policy — Memory</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <p>
        This Privacy Policy describes how <strong>Memory</strong> ("the App") handles your information.
        The App is a personal memory retention tool that helps you capture, organize, and review your
        memories and notes entirely on your device.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        <strong>Memory does not collect, store, or transmit any personal information to external servers.</strong> The App
        functions entirely on your device and does not require you to create an account, log in, or provide any
        personal data to us.
      </p>

      <h2>2. Data Storage</h2>
      <p>
        All memories, notes, and content you create within the App are stored locally on your device only.
        This data never leaves your device and is not accessible to us. You retain full ownership and
        control over everything you enter into the App.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>
        The App does not integrate with any third-party analytics, advertising networks, or data brokers.
        No third-party SDKs are used that collect user data.
      </p>

      <h2>4. Internet Access</h2>
      <p>
        The App does not require internet access to function. All features operate fully offline. If any
        future version of the App uses network access, this policy will be updated accordingly.
      </p>

      <h2>5. Children's Privacy</h2>
      <p>
        The App does not knowingly collect any information from children under the age of 13. Because we
        collect no personal information from any user, the App is suitable for all ages.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be reflected on this page
        with an updated effective date. We encourage you to review this page periodically.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:codebystory@gmail.com ">codebystory@gmail.com </a>
      </p>

      <hr style={{ margin: '40px 0', borderColor: '#ddd' }} />
      <p style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.45)' }}>
        &copy; {new Date().getFullYear()} CodeByStory. All rights reserved.
      </p>
    </div>
    </div>
  )
}
