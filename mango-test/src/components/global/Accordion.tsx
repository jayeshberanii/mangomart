import { useState } from "react";

const Accordion = ({
  label,
  items = [],
}: {
  label: string;
  items: { title: string; content: string }[];
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold">{label}</h2>
      <hr className="my-2" />
      {items.map((item, index) => (
        <div key={index + 1} className="mb-2 border rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              expandedIndex === index ? "max-h-[200px]" : "max-h-0"
            }`}
            style={{
              maxHeight: expandedIndex === index ? "1000px" : "0",
            }}
          >
            <div className="p-4 bg-white text-sm">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
