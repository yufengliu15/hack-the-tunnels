import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <div className="NotFound">
      <Container className="NotFound__container">
        <div className="NotFound__content glass-card animate-fadeInUp">
          <img src="/carleton_logo_black.png" alt="Carleton University" className="img-fluid NotFound__logo" />
          <h1>404 - Page Not Found</h1>
          <p>
            Oops! The page you're looking for doesn't exist. It might have been removed, renamed, or did not exist in the first place.
          </p>

          <div className="NotFound__buttons">
            <Button className="btn-primary" onClick={goHome}>Go to Home</Button>
            <Button className="btn-primary" href="https://carleton.ca/">Visit Carleton</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;
