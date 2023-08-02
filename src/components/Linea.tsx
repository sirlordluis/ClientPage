import React, { useState } from 'react';
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const Linea = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    numeroCentro: '',
    empresa: '',
    pais: '',
    estado: '',
    nombreDenunciante: '',
    correoDenunciante: '',
    telefonoDenunciante: '',
    detalle: '',
    fecha: '',
    contrasena: '',
    status: "En proceso",
    fk_admin: ''
  });

  const handleNext = (data) => {
    setFormData({ ...formData, ...data }); // Agregar los datos recogidos del paso actual a formData
    if (data.pais === 'Argentina') {
      setFormData((prevData) => ({ ...prevData, fk_admin: '1' }));
    } else if (data.pais === 'Estados Unidos') {
      setFormData((prevData) => ({ ...prevData, fk_admin: '2' }));
    } else if (data.pais === 'México') {
      setFormData((prevData) => ({ ...prevData, fk_admin: '3' }));
    }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {

    console.log(formData);

    // Realizar la llamada a la API REST aquí usando fetch
    try {
      const response = await fetch('http://cooproject.test/api/denuncia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // El formulario se envió correctamente, puedes mostrar una alerta o redirigir a otra página
        alert('Formulario enviado exitosamente!');
      } else {
        // Ocurrió un error al enviar el formulario
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      // Error de conexión u otro tipo de error
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
        {step === 1 && <StepOne onNext={handleNext} />}
        {step === 2 && <StepTwo onNext={handleNext} />}
        {step === 3 && <StepThree onNext={handleNext} />}
        {step === 4 && <StepFour onPrevious={handlePrevious}  onSubmit={handleSubmit} />}
      </div>
    </>
  );
};

export default Linea;
