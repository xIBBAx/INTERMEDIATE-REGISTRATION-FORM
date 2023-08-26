import React, { useState } from 'react';
import './styles/styles.css'; 



import React, { useState } from 'react';

function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [displayedData, setDisplayedData] = useState('');

    const handleSubmit = () => {
        const userData = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`;
        setDisplayedData(userData);
    };

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <div id="displayData">
                <h3>Entered Data:</h3>
                <pre>{displayedData}</pre>
            </div>
        </div>
    );
}




export default RegistrationForm;
