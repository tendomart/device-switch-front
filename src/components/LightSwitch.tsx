import React, { useState } from 'react';

interface LightState {
  isLightOn: boolean;
}

const App: React.FC = () => {
  const [lightState, setLightState] = useState<LightState>({ isLightOn: false });

  const handleToggleLight = () => {
    setLightState({ isLightOn: !lightState.isLightOn });
  };

  return (
    <div className="App">
      <h1>Living Room Light</h1>
      <button onClick={handleToggleLight}>
        {lightState.isLightOn ? 'Turn Off' : 'Turn On'}
      </button>
      {lightState.isLightOn && <p> The light is on!</p>}
    </div>
  );
};

export default App;
