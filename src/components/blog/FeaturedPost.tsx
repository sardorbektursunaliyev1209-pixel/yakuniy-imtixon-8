import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import type { BlogPost } from "../../types/blog";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
    >
      <div className="h-64 md:h-auto overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 gap-3">
        {post.tag && (
          <span className="text-xs font-semibold tracking-wide uppercase text-blue-600">
            {post.tag}
          </span>
        )}

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>

        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="font-medium text-gray-700">{post.author.name}</span>
          <span className="text-gray-300">•</span>
          <span>{post.date}</span>
          {post.readTime && (
            <>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
