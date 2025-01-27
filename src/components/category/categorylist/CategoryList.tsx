import { useEffect, useState } from "react";
import Category from "../../../models/Category";
import { DNA } from "react-loader-spinner";
import CategoryCard from "../categorycard/CategoryCard";
import { getAll } from "../../../services/Service";

function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function getAllCat() {
    try {
      await getAll("/categories", setCategories);
    } catch (error: any) {
      if (error.toString().includes("403")) {
      }
    }
  }

  useEffect(() => {
    getAllCat();
  }, [categories.length]);

  return (
    <>
      <div className="bg-base-100 min-h-screen">
        {categories.length === 0 ? (
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper mx-auto"
          />
        ) : (
          <div className="container mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryList;
