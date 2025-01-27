import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Category from "../../../models/Category";
import { RotatingLines } from "react-loader-spinner";

function CategoryForm() {
  const [category, setCategory] = useState<Category>({} as Category);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function searchById(id: string) {}

  useEffect(() => {
    if (id !== undefined) {
      searchById(id);
    }
  }, [id]);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    //navigate("/categories");
  }

  async function createNewCategory(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await update(`/categories`, category, setCategory, {});
        alert("A categoria foi atualizado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
        } else {
          alert("Erro ao atualizar a categoria.");
        }
      }
    } else {
      try {
        await create(`/categories`, category, setCategory, {});
        alert("A categoria foi cadastrado com sucesso!");
      } catch (error: any) {
        alert("Erro ao cadastrar a categoria.");
      }
    }
  }

  setIsLoading(false);
  retornar();

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Postagem" : "Cadastrar Postagem"}
      </h1>
      <form className="w-1/2 flex flex-col gap-4 " onSubmit={createNewCategory}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label>

          <input
            type="text"
            name="category"
            placeholder="Categoria"
            className="input input-bordered input-secondary"
            value={category.categoryName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
          />
        </div>
        <button
          className="btn btn-secondary w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
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
            <span>{id === undefined ? "Create" : "Update"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
function useParams<T>(): { id: any } {
  throw new Error("Function not implemented.");
}

function setCategory(arg0: any) {
  throw new Error("Function not implemented.");
}

function create(
  arg0: string,
  category: Category,
  setCategory: Dispatch<SetStateAction<Category>>,
  arg3: {}
) {
  throw new Error("Function not implemented.");
}

function update(
  arg0: string,
  category: Category,
  setCategory: Dispatch<SetStateAction<Category>>,
  arg3: {}
) {
  throw new Error("Function not implemented.");
}
