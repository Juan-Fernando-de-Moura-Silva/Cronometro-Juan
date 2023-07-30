import React, { useState, useRef } from 'react';

const Cronometro = () => {
  const [TempoEmSegundos, setTempoEmSegundos] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStartStop = () => {
    setRunning(!running);
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTempoEmSegundos((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalRef.current);
            setRunning(false);
            alert('O tempo acabou!!!');
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTempoEmSegundos(0);
    setRunning(false);
  };

  const handleInputChange = (event) => {
    const inputTime = parseInt(event.target.value, 10);
    if (inputTime >= 0) {
      setTempoEmSegundos(inputTime);
    }
  };

  const formatTime = (timeInSeconds) => {
    const Minutos = Math.floor(timeInSeconds / 60);
    const Segundos = timeInSeconds % 60;
    return `${Minutos.toString().padStart(2, '0')}:${Segundos.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Cronômetro de Contagem Regressiva</h1>
      <div className="timer">{formatTime(TempoEmSegundos)}</div>
      <input
        type="number"
        value={TempoEmSegundos}
        onChange={handleInputChange}
        disabled={running}
        placeholder="Digite o tempo em segundos..."
      />
      <button onClick={handleStartStop}>
        {running ? 'Parar' : 'Iniciar'}
      </button>
      <button onClick={handleReset} disabled={TempoEmSegundos <= 0}>
        Reiniciar
      </button>
    </div>
  );
};

export default Cronometro;
