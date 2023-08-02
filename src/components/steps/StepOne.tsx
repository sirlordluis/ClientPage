import React, { useState } from 'react';

type StepOneProps = {
  onNext: (data: { empresa: string, pais: string, estado:string, numeroCentro: string }) => void;

};

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [numeroCentro, setnumeroCentro] = useState<string>('');
  const [formError, setFormError] = useState<boolean>(false);

  const companies = [
    'Afore Coppel',
    'BanCoppel',
    'Coppel',
  ];

  const countries = [
    { name: 'Argentina', states: ['Buenos Aires'] },
    { name: 'Estados Unidos', states: ['California'] },
    { name: 'México', states: ['Aguascalientes', 'Campeche', 'Cdmx'] },
  ];

  const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompany(event.target.value);
  };
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setSelectedState('');
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  const handlenumeroCentroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnumeroCentro(event.target.value);
  };

  const handleNext = () => {
    // Realiza la validación aquí antes de continuar al siguiente paso
    if (selectedCompany && selectedState && numeroCentro) {
      setFormError(false); // Resetea el mensaje de error si todo es válido
      onNext({ empresa: selectedCompany, pais: selectedCountry, estado: selectedState, numeroCentro });
    } else {
      // Si falta algún campo requerido, muestra un mensaje de error y evita avanzar al siguiente paso
      setFormError(true);
    }
  };


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">DATOS DE LA DENUNCIA</h2>
      <p className="mb-2">Empresa/Organizacion:</p>
      <select required onChange={handleCompanyChange} value={selectedCompany} className="border border-gray-400 px-2 py-1 mb-4" name="empresa"  >
        <option value="">Selecciona una opción</option>
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>

      <p className="mb-2">País:</p>
      <select
        required
        className="border border-gray-400 px-2 py-1 mb-4"
        name="pais"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Selecciona una opcion</option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <p className="mb-2">Estado:</p>
      <select
        required
        className="border border-gray-400 px-2 py-1 mb-4"
        name="estado"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Selecciona una opcion</option>
        {selectedCountry &&
          countries
            .find((country) => country.name === selectedCountry)
            ?.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
      </select>

      <p className="mb-2">Número de centro:</p>
      <input
        required
        className="border border-gray-400 px-2 py-1 mb-4"
        type="text"
        value={numeroCentro}
        onChange={handlenumeroCentroChange}
      />

      {formError && (
        <p className="text-red-500">Por favor, completa todos los campos requeridos.</p>
      )}

      <div>
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
