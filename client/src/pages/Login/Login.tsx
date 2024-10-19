import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [message, setMessage] = useState(null);
  const { login } = useAccountContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login(email, password);
      console.log(message);
      setMessage(message);
      if (message.toLocaleLowerCase() !== "account not found") {
        setIsError(false);  
        navigate('/');
      } else {
        setIsError(true);  // Failed login, display error
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return (
    <div className="Login">
      <Container className="Login__panel">
        <div className="Login__panel__content animate-fadeInUp">
          <img src="/carleton_logo_black.png" alt="Carleton University" className="img-fluid" />
          <div className="Login__panel__content__message">
            <h4>Welcome to the Carleton SSO Federated Portal</h4>
            <p>Enter your <a href="https://myone.carleton.ca" target="_blank" rel="noopener noreferrer">MyCarletonOne</a> username and password.</p>
          </div>
          {message && (
            <p className={`Login__message ${isError ? 'Login__message--error' : 'Login__message--success'}`}>
              {message}
            </p>
          )}
          <Form>
            <div className="Login__panel__content__input">
              <InputGroup>
                <InputGroup.Text><FaUser /></InputGroup.Text>
                <Form.Control 
                  type="text" 
                  placeholder="MyCarletonOne username" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text><FaLock /></InputGroup.Text>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="Login__panel__content__checkbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </div>
            <Button className="Login__panel__button" onClick={() => attemptLogin()}>
              <span className="button-content justify-content-center">
                <FaSignInAlt className="button-icon" />
                <span className="button-text">Sign In</span>
              </span>
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
