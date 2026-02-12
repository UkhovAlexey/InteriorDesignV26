import './Navigation.css'

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          MyApp
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Главная
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              О нас
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Услуги
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
