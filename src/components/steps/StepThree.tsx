import React, { useState } from "react";

type StepThreeProps = {
  onNext:  (data: { fecha: string, detalle: string, contrasena: string }) => void;
};

const StepThree: React.FC<StepThreeProps> = ({ onNext }) => {
  const [contrasena, setcontrasena] = useState("");
  const [confirmcontrasena, setConfirmcontrasena] = useState("");
  const [contrasenasMatch, setcontrasenasMatch] = useState(true);
  const [contrasenasNotEmpty, setcontrasenasNotEmpty] = useState(true);
  const [fecha, setFecha] = useState<string>(""); // Agregamos el estado para la fecha
  const [detalle, setDetalle] = useState<string>(""); // Agregamos el estado para el detalle


  const handleFechaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFecha(event.target.value); // Actualizamos el estado de la fecha cuando cambia el valor del campo de entrada
  };

  const handleDetalleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetalle(event.target.value); // Actualizamos el estado del detalle cuando cambia el valor del campo de entrada
  };

  const handlecontrasenaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcontrasena(event.target.value);
  };

  const handleConfirmcontrasenaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmcontrasena(event.target.value);
  };

  const handleSubmit = () => {
    if (contrasena === confirmcontrasena && contrasena !== "") {
      // Contraseñas coinciden y no están vacías, continuar con el envío del formulario
      onNext({ fecha, detalle, contrasena });
    } else {
      if (contrasena === "" && confirmcontrasena === "") {
        // Ambas contraseñas están vacías
        setcontrasenasNotEmpty(false);
      } else {
        // Contraseñas no coinciden o al menos una está vacía
        setcontrasenasNotEmpty(true);
        setcontrasenasMatch(false);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4"> DETALLE DE DENUNCIA</h2>

      <p className="mb-2">Detalle de denuncia:</p>
      <input
        className="border border-gray-400 px-2 py-1 mb-4"
        type="text"
        value={detalle}
        onChange={handleDetalleChange} 
        required
      />

      <p className="mb-2">Fecha en la que sucedieron los hechos:</p>
      <input
        className="border border-gray-400 px-2 py-1 mb-4"
        type="date"
        value={fecha}
        onChange={handleFechaChange} 
        required
      />

      <p className="mb-2">Contraseña: </p>
      <input
        className="border border-gray-400 px-2 py-1 mb-4"
        type="password"
        value={contrasena}
        onChange={handlecontrasenaChange}
        required
      />

      <p className="mb-2">Confirmar Contraseña</p>
      <input
        className="border border-gray-400 px-2 py-1 mb-4"
        type="password"
        value={confirmcontrasena}
        onChange={handleConfirmcontrasenaChange}
        required
      />

      {!contrasenasMatch && (
        <p className="text-red-500">
          Las contraseñas no coinciden. Por favor, inténtalo de nuevo.
        </p>
      )}

      {!contrasenasNotEmpty && (
        <p className="text-red-500">Por favor, ingresa una contraseña.</p>
      )}

      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default StepThree;
