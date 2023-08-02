import React, { useState } from "react";

type StepTwoProps = {
  onNext: (data: { nombreDenunciante: string, correoDenunciante: string, telefonoDenunciante: string, anonimo: string }) => void;

};

const StepTwo: React.FC<StepTwoProps> = ({ onNext }) => {
  const [anonimo, setAnonimo] = useState<string>("");
  const [correoDenunciante, setcorreoDenunciante] = useState<string>("");
  const [telefonoDenunciante, setTelefono] = useState<string>("");
  const [nombreDenunciante, setNombre] = useState<string>("");

  const handleAnonimoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnonimo(event.target.value);
  };

  const handlecorreoDenuncianteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcorreoDenunciante(event.target.value);
  };

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value); // Actualizamos el estado del nombre cuando cambia el valor del campo de entrada
  };

  const handleTelefonoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefono(event.target.value);
  };

  const validatecorreoDenunciante = (correoDenunciante: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoDenunciante);
  };

  const validateTelefono = (telefonoDenunciante: string) => {
    return /^\d{10}$/.test(telefonoDenunciante);
  };

  const handleNext = () => {
    if (anonimo === "no") {
      if (!validatecorreoDenunciante(correoDenunciante)) {
        alert("Ingresa un correoDenunciante válido");
        return;
      }
      if (!validateTelefono(telefonoDenunciante)) {
        alert("Ingresa un teléfono válido (10 dígitos)");
        return;
      }
    }
    onNext({ nombreDenunciante, correoDenunciante, telefonoDenunciante, anonimo });
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">CONTACTO</h2>
        <p className="mb-2">¿Quieres permanecer anónimo?</p>
        <div>
          <label>
            Si
            <input
              type="radio"
              name="anonimo"
              value="si"
              checked={anonimo === "si"}
              onChange={handleAnonimoChange}
            />
          </label>
        </div>
        <div>
          <label>
            No
            <input
              type="radio"
              name="anonimo"
              value="no"
              checked={anonimo === "no"}
              onChange={handleAnonimoChange}
            />
          </label>
        </div>

        {anonimo === "no" && (
          <>
            <p className="mb-2">Ingresa tu correoDenunciante:</p>
            <input
              className="border border-gray-400 px-2 py-1 mb-4"
              type="text"
              value={correoDenunciante}
              onChange={handlecorreoDenuncianteChange}
            />

            <p className="mb-2">Ingresa tu nombre:</p>
            <input
              className="border border-gray-400 px-2 py-1 mb-4"
              type="text"
              value={nombreDenunciante}
              onChange={handleNombreChange} 
            />

            <p className="mb-2">Ingresa tu teléfono:</p>
            <input
              className="border border-gray-400 px-2 py-1 mb-4"
              type="text"
              value={telefonoDenunciante}
              onChange={handleTelefonoChange}
            />
          </>
        )}

        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
