import { useState } from "react"

const Home = () => {
  const [blogs, setBlogs] = useState([
      {title: "Bob's Burgers", body: "Bob's burgers review", author: "Kelli", id: 1},
      {title: "Jimmy Pesto's", body: "Jimmy Pesto's review", author: "Izzie", id: 2},
      {title: "Ice Cream Shop", body: "Ice cream review", author: "Marley", id: 3}
    ]);
    
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
           </div>
    )
}

export default Home;