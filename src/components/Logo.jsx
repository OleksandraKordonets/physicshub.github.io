import { Link } from 'react-router-dom';
import logoSrc from '/Icon.png';

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Home">
      <img src={logoSrc} alt="PhysicsHub Logo" draggable={false} title='PhysicsHub' />
    </Link>
  );
}
