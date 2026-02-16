import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import posts from '../data/posts.json'
import authors from '../data/authors.json'
import AuthorSidebar from '../components/AuthorSidebar'

function formatDate(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function readingTime(text) {
    const words = text.trim().split(/\s+/).length
    return `${Math.ceil(words / 200)} min read`
}

export default function BlogPost() {
    const { slug } = useParams()
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)

    const post = posts.find((p) => p.slug === slug)
    const author = post ? authors[post.author] : null

    useEffect(() => {
        if (post) {
            document.title = `${post.title} — Piwi.ai Blog`
        } else {
            document.title = 'Post not found — Piwi.ai Blog'
        }
    }, [post])

    useEffect(() => {
        if (!post) return
        fetch(`${import.meta.env.BASE_URL}posts/${slug}.md`)
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [slug, post])

    if (!post) {
        return (
            <div className="blog-post">
                <h1>Post not found</h1>
                <p>
                    The post you're looking for doesn't exist.{' '}
                    <Link to="/">Back to blog</Link>
                </p>
            </div>
        )
    }

    return (
        <div className="blog-post-layout">
            <article className="blog-post">
                <div className="post-header">
                    <Link to="/" className="post-back-link">
                        ← Back to blog
                    </Link>
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                        <span>{formatDate(post.date)}</span>
                        {content && (
                            <span className="reading-time">{readingTime(content)}</span>
                        )}
                    </div>
                </div>

                {loading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    <div className="post-body">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                            {content}
                        </ReactMarkdown>
                    </div>
                )}

                <div className="post-footer">
                    <Link to="/">← All posts</Link>
                </div>
            </article>
            <AuthorSidebar author={author} />
        </div>
    )
}
