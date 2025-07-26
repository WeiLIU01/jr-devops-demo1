import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  const backendBaseUrl = "jrdevopsdemo-a8c6bjatcbhmffb0.australiasoutheast-01.azurewebsites.net/api"
  const helloworldEndpoint = `${backendBaseUrl}/helloworld`;

  useEffect(() => {
    fetch(helloworldEndpoint)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error('Error fetching:', err);
        setMessage('Failed to load message');
      });
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h1>⚪️ Frontend Talking to Backend</h1>
      <p><strong>{message}</strong></p>
    </div>
  );
}

export default App;
