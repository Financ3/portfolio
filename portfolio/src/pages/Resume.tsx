export default function Resume() {
  const pdfUrl = '/resume.pdf'

  return (
    <section className="page">
      <h2 className="title">Resume</h2>
      <p className="lead">Preview my resume below. Use the download button to get the PDF.</p>

      <div style={{ margin: '1rem 0' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href={pdfUrl} download className="nav-link" style={{ display: 'inline-block' }}>
            Download PDF
          </a>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-block' }}>
            Open in new tab
          </a>
        </div>
      </div>

      <div className="pdf-container" style={{ border: '1px solid rgba(255,255,255,0.06)', padding: 0 }}>
        <iframe className="pdf-embed" src={pdfUrl} title="Resume Preview" />
      </div>

      <p style={{ marginTop: '0.5rem' }}>
        If the preview doesn't render in your browser, click <a href={pdfUrl} target="_blank" rel="noopener noreferrer">here</a> to open or download the file.
      </p>
    </section>
  )
}
