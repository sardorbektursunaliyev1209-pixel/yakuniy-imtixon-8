import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "../../types/blog";
import { getCategoryColor } from "../../utils/categoryColors";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
      <Link
        to={`/blog/${post.slug}`}
        className="block h-44 overflow-hidden group"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex flex-col flex-1 p-5 gap-2">
        <div className="flex items-center gap-3 text-xs">
          <span
            className={`px-2 py-1 rounded-md font-semibold ${getCategoryColor(
              post.category,
            )}`}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-gray-400">
            <Calendar size={13} />
            {post.date}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          <Link
            to={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gray-200" />
            <span className="text-sm font-medium text-gray-700">
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all"
          >
            O'qish <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
