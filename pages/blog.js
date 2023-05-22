import Link from "next/link";
import Layout from "../components/Layout";

import { posts } from "../profile";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <img src={post.imageURL} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link legacyBehavior href={`/post?title=${post.title}`}>
          <button className="btn btn-light">ver</button>
        </Link>
      </div>
    </div>
  </div>
);

const blog = () => {
  return (
    <Layout title="Tutoriales" footer={false} dark>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;
