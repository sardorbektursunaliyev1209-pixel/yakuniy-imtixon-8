import { Link } from "react-router-dom";
import type { Category, PopularPost } from "../../types/blog";

const HIGHLIGHTED_TAGS: Record<string, string> = {
  JavaScript: "text-yellow-600 bg-yellow-50",
  React: "text-blue-600 bg-blue-50",
  Python: "text-emerald-600 bg-emerald-50",
  Flutter: "text-cyan-600 bg-cyan-50",
  ML: "text-rose-600 bg-rose-50",
};

interface BlogSidebarProps {
  categories: Category[];
  popularPosts: PopularPost[];
  popularTags: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onTagSelect?: (tag: string) => void;
}

const BlogSidebar = ({
  categories,
  popularPosts,
  popularTags,
  activeCategory,
  onCategoryChange,
  onTagSelect,
}: BlogSidebarProps) => {
  return (
    <aside className="flex flex-col gap-6">
      {/* Kategoriyalar */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
          Kategoriyalar
        </h3>

        <ul className="flex flex-col gap-1">
          {categories.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <li key={category.name}>
                <button
                  type="button"
                  onClick={() =>
                    onCategoryChange(isActive ? null : category.name)
                  }
                  className={`w-full flex items-center justify-between px-2 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-gray-400">{category.count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mashhur maqolalar */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
          Mashhur maqolalar
        </h3>

        <ul className="flex flex-col gap-4">
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.id}`}
                className="flex items-start gap-3 group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    {post.views}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mashhur teglar */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
          Mashhur teglar
        </h3>

        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagSelect?.(tag)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                HIGHLIGHTED_TAGS[tag] ??
                "text-gray-600 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
