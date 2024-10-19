import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";
import { FaHome, FaSitemap, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

function HeaderLinks() {
  const { logout } = useAccountContext();
  return (
    <div className="HeaderLinks">
      <Link to="/" className="HeaderLinks__link">
        <FaHome className="HeaderLinks__icon" /> Return To Menu
      </Link>
      <span className="HeaderLinks__separator">|</span>
      <Link to="/sitemap" className="HeaderLinks__link">
        <FaSitemap className="HeaderLinks__icon" /> Site Map
      </Link>
      <span className="HeaderLinks__separator">|</span>
      <Link to="/help" className="HeaderLinks__link">
        <FaQuestionCircle className="HeaderLinks__icon" /> Help
      </Link>
      <span className="HeaderLinks__separator">|</span>
      <Link to="/login" className="HeaderLinks__link" onClick={() => logout()}>
        <FaSignOutAlt className="HeaderLinks__icon" /> Logout
      </Link>
    </div>
  );
}

export default HeaderLinks;
