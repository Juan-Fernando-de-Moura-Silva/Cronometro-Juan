import React,{useState, useEffect} from 'react';

function App() {
  const [TempoEmSegundos, setTempoEmSegundos] = useState(-1 * 60);
  const Minutos = Math.floor (TempoEmSegundos / 60);
  const Segundos = (TempoEmSegundos % 60);
  
  useEffect(() => {
    if(TempoEmSegundos===0){
      alert('O tempo acabou!!!');
      return
    }else{setTimeout(() => { setTempoEmSegundos(TempoEmSegundos-1) }, 1000)}
      
  }, [TempoEmSegundos])
  
  return (
    
    <div className="App">

      <input type="number" name="Tempo" id="tempo" />
      <span>{Minutos.toString().padStart(2,"0")}</span>
      <span>:</span>
      <span>{Segundos.toString().padStart(2,"0")}</span>      
    </div>
  );
}

export default App;
