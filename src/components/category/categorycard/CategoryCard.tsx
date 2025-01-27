import Category from "../../../models/Category";

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <>
      <div>
        <div className="card bg-neutral-content w-96 m-5 shadow-xl ">
          <div className="card-body text-center">
            <h2 className="card-title justify-center mb-4">Categoria</h2>
            <p>{category.categoryName}</p>
            <div
              className="card-actions grid grid-flow-col justify-stretch items-end pt-6
            "
            >

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
