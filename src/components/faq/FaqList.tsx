import FaqAccordionItem from "./FaqAccordionItem";
interface FaqListProps {
  items: FaqItem[];
}

const FaqList = ({ items }: FaqListProps) => {
  if (items.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10">Bunday savol topilmadi.</p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <FaqAccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FaqList;
