import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Category from "../../../models/Category";
import { delet } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";

function CategoryDelete() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category>({} as Category);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function searchById(id: string) {
    useEffect(() => {
      if (id !== undefined) {
        searchById(id);
      }
    }, [id]);

    async function deleteCategory(id: string) {
      
      try {
        await delet(`/temas/${id}`
          
        );

        alert("Categoria apagada com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          console.log("logout");
        } else {
          alert("Erro ao deletar a categoria.");
        }
      }

      setIsLoading(false);
      retornar();
    }

    function retornar() {
      navigate("/categories");
    }

    return (
      <>
        <div className="bg-base-100 min-h-screen my-4">
          <div className="container flex flex-col items-center justify-center mx-auto ">
            <h1 className="text-4xl text-center my-8 ">Delete category</h1>
            <p className="text-center font-semibold mb-4">
              Você tem certeza de que deseja apagar o category a seguir?
            </p>
            <div className="card bg-neutral-content w-96 m-5 shadow-xl ">
              <div className="card-body text-center">
                <h2 className="card-title justify-center mb-4">Category</h2>
                <p>{category.categoryName}</p>
                <div className="card-actions grid grid-flow-col justify-stretch items-end pt-6">
                  <button
                    className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
                    onClick={retornar}
                  >
                    Não
                  </button>
                  <button
                    className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800 "
                    onClick={deleteCategory}
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
                      <span>Sim</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CategoryDelete;
