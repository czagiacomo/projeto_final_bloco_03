import CategoryList from "../../components/category/categorylist/CategoryList";
import CategoryModal from "../../components/category/categorymodal/CategoryModal";

function Home() {
  return (
    <>
      <div className="hero bg-base-300 ">
        <div className="hero-content flex-col lg:flex-row-reverse ml-12 p-8">
          <img
            src="https://media-public.canva.com/2DheE/MAFh1t2DheE/1/tl.png"
            className="max-w-sm  scale"
          />
          <div className="m-12" />
          <div className="">
            <h1 className="text-5xl font-bold">Farmácia Dracônica</h1>
            <p className="py-6">
              Os melhores preços do mercado para seu filhote de dragão!
            </p>
            <div>
              <CategoryModal />
            </div>
          </div>
        </div>
      </div>
      <CategoryList />
    </>
  );
}

export default Home;
