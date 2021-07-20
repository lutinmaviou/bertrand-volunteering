import { useEffect } from 'react';
import textAnim from './gsap/textAnim';
import './App.css';

function App() {
  useEffect(() => {
    textAnim();
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div className="App fred">
      <header className="App-header">
        <div className="smiley-container">
          <img
            src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626612610/volunteering/smiley-left-hand-min_uzrsju.png"
            alt="smiley"
            id="left-hand"
            className="hands"
          />
          <img
            src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626613440/volunteering/smiley-body-min_fqhchc.png"
            alt="smiley"
            id="smiley"
          />
          <img
            src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626612610/volunteering/smiley-right-hand-min_ptlwfh.png"
            alt="smiley"
            id="right-hand"
            className="hands"
          />
        </div>
        <img
          src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626616306/volunteering/bulle_xqb6ep.png"
          alt="smiley"
          id="bulle"
        />
        <div className="title owl">
          <div className="letter">H</div>
          <div className="letter">e</div>
          <div className="letter">l</div>
          <div className="letter">l</div>
          <div className="letter">o</div>
          <div className="letter">&nbsp; &nbsp;</div>
          <div className="letter">W</div>
          <div className="letter">o</div>
          <div className="letter">r</div>
          <div className="letter">l</div>
          <div className="letter">d</div>
          <div className="letter">&nbsp;</div>
          <div className="letter">!</div>
        </div>
      </header>
      <main>
        <p>
          T'es un dev backend et n'as aucune présentation sur la toile pour montrer ton
          travail ?
        </p>
        <p>
          Ou tu es d'un autre corps de métier mais n'as pas les compétences pour
          développer une jolie page web ?
        </p>
        <p>
          Je propose mon aide pour te créer une identité visuelle
          <span> à titre gracieux !</span>
        </p>
        <img
          src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626706962/volunteering/humble-min_dlwtqc.png"
          alt="smiley"
          id="humble"
        />
      </main>
      <div className="subtitles-wrapper">
        <h2 className="subtitles">Ma démarche :</h2>
      </div>
      <section className="explain">
        <p>
          Issu de la restauration (côté front : serveur ={'>'} pléonasme) et après 20
          années de bons et loyaux services, je me suis reconverti en 2019 au métier de
          développeur web.
        </p>
        <p>
          Je cherche un tremplin pour démarrer ma nouvelle carrière, et cet{' '}
          <span>échange de bons procédés</span> me semble un excellent moyen d'y parvenir.
        </p>
        <img
          src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626708492/volunteering/handskake-min_cnkfve.png"
          alt="smiley"
          id="handshake"
        />
        <img
          src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626708491/volunteering/hands-min_zs1buf.png"
          alt="smiley"
          id="hands"
        />
      </section>
      <div className="subtitles-wrapper" id="subtitle-2">
        <h2 className="subtitles">Ce que je propose :</h2>
      </div>
      <section id="skillz">
        <div className="card">
          <i className="far fa-lightbulb card-icon"></i>
          <ul>
            <li>
              <i className="far fa-dot-circle"></i> Une jolie interface
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Quelques animations
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Une expérience utilisateur agréable
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Un bon référencement
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Des règles d'accessibilité
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Un code maintenable
            </li>
          </ul>
        </div>
        <div className="card">
          <i className="fas fa-tools card-icon"></i>
          <ul>
            <li>
              <i className="far fa-dot-circle"></i> JavaScript
            </li>
            <li>
              <i className="far fa-dot-circle"></i> React
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Node.js
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Next.js
            </li>
            <li>
              <i className="far fa-dot-circle"></i> Sass
            </li>
            <li>
              <i className="far fa-dot-circle"></i> GSAP
            </li>
          </ul>
        </div>
      </section>
      <section id="go-further">
        <div className="subtitles-wrapper">
          <h2 className="subtitles">Aller plus loin :</h2>
        </div>
        <p>
          Gestion d'une base de données, système de routage, interface admin, sécurité,
          ...
        </p>
        <p id="call-text">
          <span>On en discute !</span>
        </p>
        <img
          src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626723589/volunteering/call-smiley-min_e0d4wz.png"
          alt="smiley"
          id="call-smiley"
        />
      </section>
      <section id="contact">
        <div className="subtitles-wrapper" id="subtitle-2">
          <h2 className="subtitles">Me contacter :</h2>
        </div>
        <a href="mailto:bertrand.bourion555@gmail.com">
          <img
            src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626772962/volunteering/leprechaun-computer-min_qecff9.png"
            alt="smiley"
            className="logo"
            id="leprechaun"
          />
        </a>
        <a href="https://www.linkedin.com/in/bertrandbourion/" target="blank">
          <img
            src="https://res.cloudinary.com/lutinmaviou/image/upload/v1626773651/volunteering/linkedin-min_s4n1vu.png"
            alt="smiley"
            className="logo"
            id="linkedin"
          />
        </a>
      </section>
      <footer>
        <div className="footer-text">
          Certaines images proviennent de : &nbsp;
          <a href="https://fr.pngtree.com/so/clipart-de-médias-sociaux">
            clipart de médias sociaux png de fr.pngtree.com
          </a>
        </div>
        <div>&nbsp;</div>
        <span className="footer-text">Copyright &copy; 2021</span>
      </footer>
    </div>
  );
}

export default App;
