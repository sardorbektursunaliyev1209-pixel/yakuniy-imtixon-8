import { useMemo, useState } from "react";
import type { FaqCategory } from "../types/faq.type";
import { faqCategories, faqItems } from "../data/faq.data";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

import FaqHero from "../components/faq/FaqHero";
import FaqTabs from "../components/faq/FaqTabs";
import FaqList from "../components/faq/FaqList";
import FaqCta from "../components/faq/FaqCta";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "Hammasi">(
    "Hammasi",
  );
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "Hammasi" || item.category === activeCategory;
      const matchesSearch = item.question
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setActiveCategory("Hammasi");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <FaqHero searchValue={searchValue} onSearchChange={handleSearchChange} />

      {/* Asosiy kontent */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-10 flex flex-col gap-6">
        {/* Kategoriya tablari */}
        <FaqTabs
          categories={faqCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Savollar ro'yxati */}
        <FaqList items={filteredItems} />

        {/* CTA bloki */}
        <FaqCta />
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
