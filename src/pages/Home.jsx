import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import posts from '../data/posts.json'

function formatDate(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default function Home() {
    const latestPosts = posts.slice(0, 3)

    useEffect(() => {
        document.title = 'Piwi.ai Blog — Process Information with Intelligence'
    }, [])

    return (
        <>
            <section className="hero">
                <h1 className="hero-name">
                    <span className="accent">Piwi.ai</span> Blog
                </h1>
                <p className="hero-tagline">
                    Process Information with Intelligence
                </p>
                <p className="hero-intro">
                    Insights on intelligent document processing, AI automation, and privacy-first technology.
                    Explore how modern IDP is transforming business workflows.
                </p>
                <div className="hero-actions">
                    <Link to="/" className="btn btn-primary">
                        Read the Blog →
                    </Link>
                    <a
                        href="https://piwi.ai"
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Piwi.ai
                    </a>
                </div>
            </section>

            <section className="latest-posts">
                <h2 className="section-title">Latest Posts</h2>
                <ul className="post-list">
                    {latestPosts.map((post) => (
                        <li key={post.slug} className="post-item">
                            <span className="post-date">{formatDate(post.date)}</span>
                            <h3>
                                <Link to={`/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="post-excerpt">{post.excerpt}</p>
                        </li>
                    ))}
                </ul>
                <Link to="/" className="view-all">
                    View all posts →
                </Link>
            </section>

            <section className="features">
                <h2 className="section-title">What We Cover</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📄</div>
                        <h3>Document Intelligence</h3>
                        <p>Beyond OCR — contextual extraction, validation, and template injection.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🤖</div>
                        <h3>AI Orchestration</h3>
                        <p>Multi-model strategies, agentic workflows, and the shift from prompting to building.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Privacy-First AI</h3>
                        <p>Local processing, sovereign AI, and data that never leaves your device.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Business Automation</h3>
                        <p>Reducing manual work, scaling without hiring, and actionable ROI strategies.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
