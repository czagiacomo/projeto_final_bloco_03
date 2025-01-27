import { ChangeEvent, useState } from "react";
import { create, update } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import Category from "../../../models/Category";
import { RotatingLines } from "react-loader-spinner";

function CategoryForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category>({
    id: id,
    categoryName: "",
  });

  async function createNewCategory(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await update(`/${id}`, category, setCategory);
        alert("Categoria atualizada com sucesso");
      } catch (error: any) {
        setIsLoading(false);
        if (error.toString().includes("403")) {
        } else {
          alert("Erro ao atualizar a Categoria");
        }
      }
    } else {
      try {
        await create(`/categories`, category, setCategory);

        alert("Categoria cadastrada com sucesso");
      } catch (error: any) {
        console.log("error: ", error);
        setIsLoading(false);
        if (error.toString().includes("403")) {
        } else {
          alert("Erro ao cadastrar a Categoria");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  function updateCategoryState(e: ChangeEvent<HTMLInputElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categories");
  }

  //const loadingCategory = category.categoryName === "";
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">Cadastrar Categoria</h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={createNewCategory}>
        <div className="flex flex-col gap-2">
          <label htmlFor="categoryName">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Digite o nome da categoria"
            name="categoryName"
            className="border-2 border-slate-700 rounded p-2"
            value={category.categoryName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateCategoryState(e)
            }
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          //disabled={loadingCategory}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id !== undefined ? "Update" : "Create"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
