function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img src={post.image} alt={post.title} />
      <div className="card-content">
        <span className="category">{post.category}</span>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="post-info">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
        <button type="button">Read More →</button>
      </div>
    </article>
  );
}

export default BlogCard;
