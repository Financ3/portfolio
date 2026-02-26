export default function QuoteOfTheDaySupport() {
  return (
    <div style={{ minHeight: '100vh', background: '#0f1724' }}>
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px', fontFamily: 'sans-serif', color: 'rgba(255, 255, 255, 0.87)', lineHeight: 1.7 }}>
      <h1>Support — Quote of the Day</h1>

      <p>
        Need help with <strong>Quote of the Day</strong>? We're happy to assist. Reach out to us at{' '}
        <a href="mailto:codebystory@gmail.com">codebystory@gmail.com</a> and we'll get back to you as soon as we can.
      </p>

      <hr style={{ margin: '40px 0', borderColor: '#ddd' }} />
      <p style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.45)' }}>
        &copy; {new Date().getFullYear()} Tanner Francis. All rights reserved.
      </p>
    </div>
    </div>
  )
}
