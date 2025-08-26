import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [index, setIndex] = useState(0);
  const itemsPerPage = 10; // how many categories to show at once

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://travel-app-backend-5cti.onrender.com/api/category"
        );
        setCategories(data);
        setVisibleCategories(data.slice(0, itemsPerPage));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleNext = () => {
    const newIndex = index + itemsPerPage;
    if (newIndex < categories.length) {
      setIndex(newIndex);
      setVisibleCategories(categories.slice(newIndex, newIndex + itemsPerPage));
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(index - itemsPerPage, 0);
    setIndex(newIndex);
    setVisibleCategories(categories.slice(newIndex, newIndex + itemsPerPage));
  };

  return (
    <section className="flex items-center gap-2 px-8 py-2 sticky top-0 bg-white z-10">
      {index !== 0 && (
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="p-2 rounded  disabled:opacity-40"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      )}

      <div className="flex gap-3 overflow-hidden text-gray-600">
        {visibleCategories.map((item) => (
          <span
            key={item._id}
            className="px-4 py-2  rounded-full cursor-pointer hover:underline underline-offset-4"
          >
            {item.category}
          </span>
        ))}
      </div>

      {index + itemsPerPage <= categories.length && (
        <button
          onClick={handleNext}
          disabled={index + itemsPerPage >= categories.length}
          className="p-2 rounded  disabled:opacity-40"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      )}
    </section>
  );
};

export default Categories;
