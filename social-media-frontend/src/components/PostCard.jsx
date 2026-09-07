export default function PostCard({ post }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-2xl shadow-lg shadow-black/30 hover:shadow-black/50 p-5 transition-all duration-200">
      <h3 className="font-semibold text-white tracking-tight mb-2">@{post.author?.username}</h3>
      <p className="text-neutral-400 leading-relaxed">{post.content}</p>
       {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt=""
          className="mt-4 w-full rounded-xl border border-neutral-800 object-cover"
        />
      )}
    </div>
  );
}