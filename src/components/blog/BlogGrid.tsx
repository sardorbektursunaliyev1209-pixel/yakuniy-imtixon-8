import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "../../types/blog";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogGrid = ({
  posts,
  currentPage,
  totalPages,
  onPageChange,
}: BlogGridProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => String(i + 1));

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}

        {posts.length === 0 && (
          <p className="text-gray-400 col-span-full text-center py-10">
            Bu bo'limda hozircha maqola topilmadi.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-x-2">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft size={16} />
          </button>

          {pages.map((page, index) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(index + 1)}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
