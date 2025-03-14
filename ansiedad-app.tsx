import React, { useState } from 'react';

const AnsiAppReinterpretacion = () => {
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [userInterpretation, setUserInterpretation] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Base de datos con la información de la tabla
  const symptomsData = [
    {
      id: 1,
      symptom: "Taquicardia/palpitaciones",
      commonInterpretation: "\"Estoy teniendo un ataque cardíaco\" \"Voy a morir\"",
      realCause: "Respuesta natural del sistema nervioso simpático: aumento de adrenalina que prepara al cuerpo para \"luchar o huir\""
    },
    {
      id: 2,
      symptom: "Dificultad para respirar",
      commonInterpretation: "\"Me voy a asfixiar\" \"No puedo respirar\"",
      realCause: "Hiperventilación causada por respiración rápida y superficial que altera el equilibrio de oxígeno y CO2"
    },
    {
      id: 3,
      symptom: "Mareo o sensación de inestabilidad",
      commonInterpretation: "\"Voy a desmayarme\" \"Tengo algo grave en el cerebro\"",
      realCause: "Cambios en el flujo sanguíneo y la tensión arterial provocados por la hiperventilación"
    },
    {
      id: 4,
      symptom: "Opresión en el pecho",
      commonInterpretation: "\"Estoy sufriendo un infarto\"",
      realCause: "Tensión muscular en la zona torácica causada por el estrés y la respiración alterada"
    },
    {
      id: 5,
      symptom: "Sudoración",
      commonInterpretation: "\"Todos notarán que estoy nervioso\" \"Es vergonzoso\"",
      realCause: "Mecanismo natural de regulación térmica ante la activación del sistema nervioso simpático"
    },
    {
      id: 6,
      symptom: "Hormigueo en extremidades",
      commonInterpretation: "\"Estoy teniendo un derrame cerebral\"",
      realCause: "Resultado de la hiperventilación que altera los niveles de CO2 en sangre causando parestesia temporal"
    },
    {
      id: 7,
      symptom: "Tensión muscular/dolor",
      commonInterpretation: "\"Tengo una enfermedad grave\"",
      realCause: "Preparación muscular para la acción (respuesta de lucha-huida) y tensión prolongada por estrés"
    },
    {
      id: 8,
      symptom: "Nudo en la garganta",
      commonInterpretation: "\"Me voy a ahogar\"",
      realCause: "Tensión en los músculos de la garganta relacionada con la respuesta de estrés"
    },
    {
      id: 9,
      symptom: "Náuseas o molestias digestivas",
      commonInterpretation: "\"Estoy enfermo\" \"Voy a vomitar en público\"",
      realCause: "Redistribución sanguínea desde el sistema digestivo hacia músculos y órganos vitales"
    },
    {
      id: 10,
      symptom: "Sensación de irrealidad",
      commonInterpretation: "\"Me estoy volviendo loco\" \"Voy a perder el control\"",
      realCause: "Despersonalización/desrealización: mecanismo protector del cerebro ante el estrés extremo"
    },
    {
      id: 11,
      symptom: "Sensibilidad a la luz/sonido",
      commonInterpretation: "\"Algo está mal en mi cerebro\"",
      realCause: "Mayor estado de alerta sensorial (hipervigilancia) por la activación del sistema nervioso"
    },
    {
      id: 12,
      symptom: "Sofocos o escalofríos",
      commonInterpretation: "\"Tengo fiebre\" \"Estoy enfermo\"",
      realCause: "Alteraciones en la termorregulación corporal por la activación del sistema nervioso autónomo"
    }
  ];

  const handleSymptomSelect = (e) => {
    setSelectedSymptom(e.target.value);
    setShowResult(false);
    setSubmitted(false);
  };

  const handleInterpretationChange = (e) => {
    setUserInterpretation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
    setSubmitted(true);
  };

  const getSelectedSymptomData = () => {
    return symptomsData.find(item => item.symptom === selectedSymptom);
  };
  
  const resetForm = () => {
    setSelectedSymptom('');
    setUserInterpretation('');
    setShowResult(false);
    setSubmitted(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700">Reinterpretando Síntomas de Ansiedad</h1>
      
      <div className="mb-8 text-gray-600 rounded-lg bg-indigo-50 p-4">
        <p>Esta herramienta te ayuda a entender mejor los síntomas físicos de ansiedad. Selecciona el síntoma que estás experimentando, comparte lo que crees que significa, y descubre la explicación real.</p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              ¿Qué síntoma estás experimentando?
            </label>
            <select
              value={selectedSymptom}
              onChange={handleSymptomSelect}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Selecciona un síntoma</option>
              {symptomsData.map(item => (
                <option key={item.id} value={item.symptom}>{item.symptom}</option>
              ))}
            </select>
          </div>
          
          {selectedSymptom && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                ¿Qué crees que significa este síntoma? ¿Qué te preocupa que pueda ser?
              </label>
              <textarea
                value={userInterpretation}
                onChange={handleInterpretationChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
                placeholder="Escribe aquí tu interpretación..."
                required
              ></textarea>
            </div>
          )}
          
          {selectedSymptom && (
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Ver explicación
            </button>
          )}
        </form>
      ) : (
        <div className="space-y-6">
          {showResult && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg text-gray-800 mb-2">Tu síntoma:</h3>
                <p className="text-gray-700 font-bold">{selectedSymptom}</p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                <h3 className="font-medium text-lg text-amber-800 mb-2">Tu interpretación:</h3>
                <p className="text-gray-700">{userInterpretation}</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                <h3 className="font-medium text-lg text-indigo-800 mb-2">Interpretación común:</h3>
                <p className="text-gray-700">{getSelectedSymptomData().commonInterpretation}</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="font-medium text-lg text-green-800 mb-2">Causa real:</h3>
                <p className="text-gray-700">{getSelectedSymptomData().realCause}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg text-blue-800 mb-2">Recuerda:</h3>
                <p className="text-gray-700">Los síntomas de ansiedad, aunque incómodos, no son peligrosos. Son respuestas normales del cuerpo ante el estrés y la ansiedad.</p>
              </div>
              
              <button
                onClick={resetForm}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Consultar otro síntoma
              </button>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-8 text-xs text-gray-500 text-center">
        <p>Esta herramienta es informativa y no sustituye la atención médica profesional.</p>
        <p>Si experimentas síntomas graves o preocupantes, consulta con un profesional de la salud.</p>
      </div>
    </div>
  );
};

export default AnsiAppReinterpretacion;