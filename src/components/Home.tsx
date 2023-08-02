import { NavLink } from "react-router-dom";

const ApiDenuncias = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap ">
        <div className="w-full sm:w-8/12 mx-auto px-3">
          {/* Cambiamos w-10 por w-full en pantallas pequeñas */}
          <h1 className="font-semibold text-[32px] text-black mb-3">
            Línea de Denuncias
          </h1>
          <p className="text-black my-6">
            Si fuiste victima o testigo de cualquier comportamiento en Grupo
            Coppel que vaya en contra de nuestro Código de Ética o las
            Disposiciones, presenta aquí tu denuncia.
          </p>
          <div className="p-2 flex">
            <div className="w-1/2 flex justify-end">
              <NavLink to="/linea">
                <button
                  type="submit"
                  className="bg-gray-500 text-white p-2 ml-6 rounded text-lg w-auto"
                >
                  Línea de denuncias
                </button>
              </NavLink>
              <NavLink to="/seguimiento">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white p-2 ml-6 rounded text-lg w-auto"
                >
                  Seguimieto
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="">
            <img src="https://i.imgur.com/2TFpBGw.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDenuncias;
