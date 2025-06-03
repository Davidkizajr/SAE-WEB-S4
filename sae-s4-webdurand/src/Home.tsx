import "./App.css";

function Home() {
  return (
    <main className="mt-30 text-white">
      <h1 className="text-center">Bienvenue dans notre site !</h1>
      <p className="m-10">
        Notre projet consistait à afficher une carte contenant les différents
        emplacements où des points de réseaux 5G fournis par SFR se situaient.
      </p>
      <p className="mx-10">
        Vous avez accès à une carte avec les différents points 5G et leurs
        positions, aux données des points et à quelques statistiques.
      </p>
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/SFR-2022-logo.svg/langfr-1920px-SFR-2022-logo.svg.png"
          alt="SFR"
          className="m-10 w-50"
        />
        <img
          src="https://www.generationcable.net/wp-content/uploads/2020/11/logo5g-sfr-5g-optim.png"
          alt=""
        />
      </div>
    </main>
  );
}

export default Home;
