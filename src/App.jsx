import { useState } from "react";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import posts from "./data/posts.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    const text = `${post.title} ${post.description}`.toLowerCase();
    const matchesSearch = text.includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div>
            <p className="small-title">WELCOME TO DEVBLOG</p>
            <h1>Ideas, Tutorials & <span>Developer Stories</span></h1>
            <p className="hero-text">
              Explore articles about React, JavaScript, CSS and modern web development.
            </p>
          </div>
        </section>

        <section className="blog-section" id="articles">
          <div className="section-header">
            <div>
              <h2>Latest Articles</h2>
              <p>Explore our latest developer content</p>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search articles"
              />
            </div>
          </div>

          <div className="filters" aria-label="Filter by category">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try a different search term or category.</p>
            </div>
          )}
        </section>
      </main>

      <footer id="about">
        <p>© 2026 DevBlog. Built with React.</p>
      </footer>
    </>
  );
}

export default App;
