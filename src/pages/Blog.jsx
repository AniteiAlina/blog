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

export default function Blog() {
    useEffect(() => {
        document.title = 'Blog — Piwi.ai'
    }, [])

    return (
        <div className="blog-page">
            <h1>Blog</h1>
            <p className="blog-description">
                Insights on AI automation, document intelligence, and building privacy-first systems.
            </p>

            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.slug} className="post-item">
                        <span className="post-date">{formatDate(post.date)}</span>
                        <h3>
                            <Link to={`/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="post-excerpt">{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
