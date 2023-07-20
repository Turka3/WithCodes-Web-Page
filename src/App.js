import './App.css';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTelegram} from '@fortawesome/free-brands-svg-icons';


const Home = () => (
  <div>
    <h1>Anasayfa</h1>
    <p>Hoş geldiniz!</p>
    <p>Bu web sitesi, şirketimiz hakkında bilgileri, sunduğumuz hizmetleri, yaptığımız projeleri ve daha fazlasını içermektedir.</p>
  </div>
);

const About = () => (
  <div>
    <h1>Hakkımızda</h1>
    <p>Ekibimiz, deneyimli ve tutkulu bir grup yazılım geliştiriciden oluşmaktadır.</p>
    <p>Misyonumuz, müşterilerimize en iyi kalitede yazılım hizmetlerini sunmaktır.</p>
  </div>
);

const Services = () => (
  <div>
    <h1>Hizmetler</h1>
    <p>Sunduğumuz hizmetler arasında web tasarımı, uygulama geliştirme, veritabanı yönetimi ve daha fazlası bulunmaktadır.</p>
    <p>Proje ihtiyaçlarınıza uygun çözümler sunmak için uzman ekibimizle çalışıyoruz.</p>
  </div>
);

const Projects = () => (
  <div>
    <h1>Projeler</h1>
    <p>Geçmişte birçok başarılı proje üzerinde çalıştık ve müşterilerimizin beklentilerini aştık.</p>
    <p>Örnek projelerimiz arasında e-ticaret siteleri, yönetim sistemleri ve özelleştirilmiş yazılım çözümleri bulunmaktadır.</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>İletişim</h1>
    <p>Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz:</p>
    <p>Telefon: 123-456-7890</p>
    <p>E-posta: info@example.com</p>
    <p>Adres: Örnek Cadde, Örnek Şehir, Ülke</p>
  </div>
);


function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      <a id="Logo-text" href='/'>WithCodes <FontAwesomeIcon icon={faCode} size="xs" /></a>
      <header>
      <nav>
      <button className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size='2xl'/>
      </button>

      <h2 className='menu-responsive'>WithCodes</h2>
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#anasayfa"><FontAwesomeIcon icon={faHouse} size="xs" /> Anasayfa</a>
          </li>
          <li>
            <a href="#hakkimizda"><FontAwesomeIcon icon={faUser} size="xs" /> Hakkımızda</a>
          </li>
          <li>
            <a href="#hizmetler"><FontAwesomeIcon icon={faFile} size="xs" /> Hizmetler</a>
          </li>
          <li>
            <a href="#projeler"><FontAwesomeIcon icon={faClipboard} size="xs" /> Projeler</a>
          </li>
          <li>
            <a href="#iletisim"><FontAwesomeIcon icon={faEnvelope} size="xs" /> İletişim</a>
          </li>
          <button className='button' onClick={toggleTheme}><FontAwesomeIcon icon={faMoon}/></button>
        </ul>
      </nav>
      </header>


      <section id="anasayfa">
        <Home />
      </section>

      <section id="hakkimizda">
        <About />
      </section>

      <section id="hizmetler">
        <Services />
      </section>

      <section id="projeler">
        <Projects />
      </section>

      <section id="iletisim">
        <Contact />
      </section>

      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://www.instagram.com/withcodes/?igshid=OGQ2MjdiOTE%3D" target='_blank'  rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='lg'/></a>
            </li>
            <li>
              <a href="https://discord.gg/VUGkFXmbg3" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faDiscord} size='lg'/></a>
            </li>
            <li>
              <a href="https://t.me/withcodes" target='_blank'  rel="noreferrer"><FontAwesomeIcon icon={faTelegram} size='lg'/></a>
            </li>
          </ul>
          <p id='copyright'>Copyright © 2023 | WithCodes<br></br>
          <p id='copyright'>Powered By <a id='copyLuka' href='http://lukahosting.net' rel="noreferrer">LukaHosting</a></p>
          </p>
        </nav>
      </footer>
    </div>
  );
}

export default App;
