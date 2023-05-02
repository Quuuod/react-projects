function Post({ id, title, body, userId }) {
  return (
    <div className="post">
      <h1>{id}</h1>
      <h1>{title}</h1>
      <p>{body}</p>
      <h2>User ID: {userId}</h2>
    </div>
  );
}

export default Post;
