import React, { useState } from 'react';

interface LightStatus {
  isLightOn: boolean;
}

const App: React.FC = () => {
  const [lightStatus, setLightStatus] = useState<LightStatus>({ isLightOn: false });

  const handleToggleLight = () => {
    setLightStatus({ isLightOn: !lightStatus.isLightOn });
  };

  return (
    <div className="App">
      <h1>Living Room Light</h1>
      <button onClick={handleToggleLight}>
        {lightStatus.isLightOn ? 'Turn Off' : 'Turn On'}
      </button>
      {lightStatus.isLightOn && <p> The light is on!</p>}
    </div>
  );
};

export default App;


