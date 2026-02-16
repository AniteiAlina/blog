import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:slug" element={<BlogPost />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
