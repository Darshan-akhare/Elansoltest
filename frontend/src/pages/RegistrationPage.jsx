import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      await axios.post('/api/register', { name, dob, email, password });
      // Registration successful, you may redirect to login page or auto-login
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicDob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleRegistration}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationPage;