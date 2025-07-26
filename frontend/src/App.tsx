import { useEffect, useState } from 'react';

function App() {
const [message, setMessage] = useState('Loading...');
const backendBaseUrl = "https://jrdevopsdemo-a8c6bjatcbhmffb0.australiasoutheast-01.azurewebsites.net/api"
const helloworldEndpoint = `${backendBaseUrl}/helloworld`;

useEffect(() => {
console.log('Fetching from:', helloworldEndpoint);
fetch(helloworldEndpoint)
.then((res) => {
console.log('Response status:', res.status);
if (!res.ok) {
throw new Error(`HTTP error! status: ${res.status}`);
}
return res.text();
})
.then((data) => {
console.log('Received data:', data);
setMessage(data);
})
.catch((err) => {
console.error('Error fetching:', err);
setMessage(`Failed to load message: ${err.message}`);
});
}, []);

return (
<div style={{ padding: '40px' }}>
<h1>⚪️ Frontend Talking to Backend</h1>
<p><strong>{message}</strong></p>
<p style={{ fontSize: '12px', color: '#666' }}>
Backend URL: {helloworldEndpoint}
</p>
</div>
);
}

export default App;
