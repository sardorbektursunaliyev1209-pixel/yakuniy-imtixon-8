import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import FeaturedPost from "../components/blog/FeaturedPost";
import BlogToolbar from "../components/blog/BlogToolbar";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

import {
  featuredPost,
  blogPosts,
  categories,
  popularPosts,
  popularTags,
} from "../data/blogPosts";

const POSTS_PER_PAGE = 8;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory
        ? post.category === activeCategory
        : true;
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchValue]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />
      {/* Sahifa sarlavhasi */}
      <div className="bg-gray-50 px-6 md:px-12 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-700 transition-colors">
              Bosh sahifa
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-gray-900">Blog</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Foydali maqolalar va yangiliklar
          </h1>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            IT, dasturlash, dizayn va karyera bo'yicha eng dolzarb materiallar.
          </p>
        </div>
      </div>

      {/* Asosiy kontent */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col gap-8">
        {/* Tanlangan maqola */}
        <FeaturedPost post={featuredPost} />

        {/* Filter va qidiruv */}
        <BlogToolbar
          categories={categories}
          activeCategory={activeCategory}
          searchValue={searchValue}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Maqolalar grid + pagination */}
          <BlogGrid
            posts={paginatedPosts}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

          {/* Yon panel */}
          <BlogSidebar
            categories={categories}
            popularPosts={popularPosts}
            popularTags={popularTags}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
