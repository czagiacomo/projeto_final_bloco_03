function Home() {
  return (
    <>
      <div className="hero bg-base-300 ">
        <div className="hero-content flex-col lg:flex-row-reverse ml-12 p-8">
          <img
            src="https://media-public.canva.com/2DheE/MAFh1t2DheE/1/tl.png"
            className="max-w-sm  scale"
          />
          <div className="m-12"/>
          <div className="">
            <h1 className="text-5xl font-bold">Farmácia Dracônica</h1>
            <p className="py-6">
              Os melhores preços do mercado para seu filhote de dragão!
            </p>
            <a href="" target="_blank">
              <button className="btn btn-primary w-1/2 py-2 mx-auto flex justify-center">
                Compre agora!
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
