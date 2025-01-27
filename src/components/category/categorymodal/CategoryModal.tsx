import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CategoryForm from "../categoryform/CategoryForm";

function CategoryModal() {
  return (
    <>
      <Popup
        trigger={<button className="btn btn-primary">Criar Categoria</button>}
        modal
      >
        <CategoryForm />
      </Popup>
    </>
  );
}

export default CategoryModal;
