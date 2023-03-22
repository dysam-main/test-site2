import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Accordion from '../components/accordion'
import Feature from '../components/feature'
import Check from '../components/check'
import Quote from '../components/quote'
import Footer from '../components/footer'
import './home.css'
import { Scrollchor } from 'react-scrollchor'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DysamFin</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <Navbar></Navbar>
        </div>
        <div className="home-hero" id='Home'>
          <div className="home-content">
            <h1 className="home-title">
              dysamFin es sencilla y fácil de usar
            </h1>
            <span className="home-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
            <div className="home-hero-buttons">
              <div className="home-io-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-zmzg.svg"
                  className="home-apple"
                />
                <span className="home-caption1">Descargar para iOS</span>
              </div>
              <div className="home-android-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ld65.svg"
                  className="home-android"
                />
                <span className="home-caption2">Descargar para Android</span>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-oy26-1500h.png"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-5cga-1500h.png"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-c39.png"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-column2">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-iqnj.png"
                className="home-pasted-image3"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-06e.svg"
                className="home-pasted-image4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-video" id='Video'>
        <div className="home-content01">
          <div className="home-header1">
            <h2 className="home-text">
              Diseñada para transacciones ágiles y rápidas
            </h2>
          </div>
          <div className="home-video-container">
            <video
              src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
              loop
              muted
              poster="/playground_assets/pastedimage-09r-900w.png"
              autoPlay
              className="home-video1"
            ></video>
            <div className="home-heading-container">
              <div className="home-heading01">
                <span className="home-text01">
                  Consectetur adipiscing elit, sed do eiusmod tempor
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-explore">
                <Scrollchor to='#Pricing'>
                <span className="home-text03">Descubre nuestros planes -&gt;</span>

                </Scrollchor>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <span className="home-caption3">200k</span>
          <span className="home-description">
            Lorem ipsum dolor sit ametconsectetur adipiscing
          </span>
        </div>
        <div className="home-stat1">
          <span className="home-caption4">$3,5 mil millones</span>
          <span className="home-description1">
            Lorem ipsum dolor sit ametconsectetur adipiscing
          </span>
        </div>
        <div className="home-stat2">
          <span className="home-caption5">10.000 +</span>
          <span className="home-description2">
            Lorem ipsum dolor sit ametconsectetur adipiscing
          </span>
        </div>
      </div>
      <div className="home-sections" id='Sections'>
        <div className="home-section">
          <div className="home-image">
            <div className="home-image-highlight">
              <span className="home-text04">
                <span>
                  mantenete al tanto de todo
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-content02">
            <h2 className="home-text07">Todo lo que ofrece dysamFin</h2>
            <Highlight
              Title="Lorem ipsum dolor sit amet, consectetur "
              Description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
            ></Highlight>
            <Highlight
              Title="Lorem ipsum dolor sit amet, consectetur "
              Description="Sed do eiusmod tempor incididunt ut labore et dolore"
            ></Highlight>
            <div className="home-explore1">
              <Scrollchor to='#Pricing'>
              <span>Explore pricing plans -&gt;</span>
              </Scrollchor>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-content03">
            <div className="home-heading02">
              <h2 className="home-text09">Seguimiento de cada transacción</h2>
              <span className="home-text10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
            <div className="home-content04">
              <div className="home-points">
                <Point></Point>
                <Point text="Quis nostrud exercitation ullamco"></Point>
                <Point text="Reprehenderit qui in ea voluptate velit"></Point>
              </div>
              <Link to="/" className="home-navlink1">
                <div className="home-get-started">
                  <span className="home-sign-up">Empezá Ahora!</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-image1"></div>
        </div>
        <div className="home-section2">
          <div className="home-image2">
            <div className="home-image-overlay"></div>
          </div>
          <div className="home-content05">
            <h2 className="home-text11">
              <span>Create Metas</span>
              <br></br>
            </h2>
            <Accordion></Accordion>
          </div>
        </div>
      </div>
      <div className="home-banner-container">
        <div className="home-banner">
          <div className="home-overlay">
            <span className="home-text14">
              Iniciate en las finanzas con dysamFin
            </span>
            <div className="home-book-btn">
              <span className="home-text15">Solicitá una demo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features" id='Features'>
        <div className="home-header2">
          <div className="home-tag">
            <span className="home-text16">Características</span>
          </div>
          <div className="home-heading03">
            <h2 className="home-text17">Todo lo que obtenés con dysamFin</h2>
            <span className="home-text18">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
          </div>
        </div>
        <div className="home-feature-list">
          <Feature></Feature>
          <Feature
            Title="Dispositivos Múltiples"
            Thumbnail="/playground_assets/vector6113-r6dl.svg"
          ></Feature>
          <Feature
            Title="Analíticas"
            Thumbnail="/playground_assets/vector6113-6zj.svg"
          ></Feature>
          <Feature
            Title="Tarjeta Virtual"
            Thumbnail="/playground_assets/vector6113-lvvs.svg"
          ></Feature>
          <Feature
            Title="Transacciones Seguras"
            Thumbnail="/playground_assets/vector6114-cupp.svg"
          ></Feature>
          <Feature
            Title="Metas Personales"
            Thumbnail="/playground_assets/vector6114-6m1e.svg"
          ></Feature>
          <Feature
            Title="Operá"
            Thumbnail="/playground_assets/vector6114-yjl.svg"
          ></Feature>
          <Feature
            Title="Billetera"
            Thumbnail="/playground_assets/vector6113-lvvs.svg"
          ></Feature>
        </div>
      </div>
      <div className="home-pricing" id='Pricing'>
        <div className="home-content06">
          <div className="home-header3">
            <div className="home-tag1">
              <span className="home-text19">Nuestros Planes</span>
            </div>
            <div className="home-heading04">
              <h2 className="home-text20">Precios finales</h2>
            </div>
          </div>
          <div className="home-pricing-plans">
            <div className="home-plans">
              <div className="home-plan">
                <div className="home-top">
                  <div className="home-heading05">
                    <span className="home-text21">Básico</span>
                    <span className="home-text22">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost">
                    <span className="home-text23">Gratis</span>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-check-list">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button">
                    <span className="home-text24">Get</span>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-top1">
                  <div className="home-heading06">
                    <span className="home-text25">Plus</span>
                    <span className="home-text26">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost1">
                    <span className="home-text27">$8</span>
                    <span className="home-text28">/mes</span>
                  </div>
                </div>
                <div className="home-bottom1">
                  <div className="home-check-list1">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button1">
                    <span className="home-text29">Get</span>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-top2">
                  <div className="home-heading07">
                    <span className="home-text30">Premium</span>
                    <span className="home-text31">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost2">
                    <span className="home-text32">$16</span>
                    <span className="home-text33">/mes</span>
                  </div>
                </div>
                <div className="home-bottom2">
                  <div className="home-check-list2">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button2">
                    <span className="home-text34">Get</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-expand">
              <div className="home-overlay1">
                <div className="home-header4">
                  <div className="home-heading08">
                    <span className="home-text35">Personalizado</span>
                    <span className="home-text36">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home-check-list3">
                    <div className="home-check">
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text37">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home-check1">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text38">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home-check2">
                      <svg viewBox="0 0 1024 1024" className="home-icon04">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text39">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button3">
                  <span className="home-text40">
                    <span>Contactanos</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-plans1">
            <div className="home-plan3">
              <div className="home-top3">
                <div className="home-heading09">
                  <span className="home-text43">Básico</span>
                  <span className="home-text44">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost3">
                  <span className="home-text45">Gratis</span>
                </div>
              </div>
              <div className="home-bottom3">
                <div className="home-check-list4">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button4">
                  <span className="home-text46">Get</span>
                </div>
              </div>
            </div>
            <div className="home-plan4">
              <div className="home-top4">
                <div className="home-heading10">
                  <span className="home-text47">Plus</span>
                  <span className="home-text48">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost4">
                  <span className="home-text49">$8</span>
                  <span className="home-text50">/mes</span>
                </div>
              </div>
              <div className="home-bottom4">
                <div className="home-check-list5">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button5">
                  <span className="home-text51">Get</span>
                </div>
              </div>
            </div>
            <div className="home-plan5">
              <div className="home-top5">
                <div className="home-heading11">
                  <span className="home-text52">Premium</span>
                  <span className="home-text53">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost5">
                  <span className="home-text54">$16</span>
                  <span className="home-text55">/mes</span>
                </div>
              </div>
              <div className="home-bottom5">
                <div className="home-check-list6">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button6">
                  <span className="home-text56">Get</span>
                </div>
              </div>
            </div>
            <div className="home-expand1">
              <div className="home-overlay2">
                <div className="home-header5">
                  <div className="home-heading12">
                    <span className="home-text57">Personalizado</span>
                    <span className="home-text58">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home-check-list7">
                    <div className="home-check3">
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text59">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home-check4">
                      <svg viewBox="0 0 1024 1024" className="home-icon08">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text60">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home-check5">
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text61">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button7">
                  <span className="home-text62">
                    <span>Contactanos</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-help">
          <span className="home-text65">Necesitas ayuda?</span>
          <div className="home-explore2">
            <span className="home-text66">
              Contactanos YA -&gt;
            </span>
          </div>
        </div>
      </div>
      <div className="home-testimonials">
        <div className="home-logo-container">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-idcu.svg"
            className="home-logo"
          />
        </div>
        <div className="home-content07">
          <div id="quotes" className="home-quotes">
            <div className="quote active-quote">
              <Quote rootClassName="quote-root-class-name"></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Increibles diseños."'
                Title="Developer @ Vista La Vista"
                Author="Author 2"
                rootClassName="quote-root-class-name"
              ></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Funciona Fenomenal!'
                Title="Designer @ OhBoy"
                rootClassName="quote-root-class-name"
              ></Quote>
            </div>
          </div>
          <div className="home-buttons">
            <div id="quote-before" className="home-left">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
              </svg>
            </div>
            <div id="quote-next" className="home-right">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={` <script>
    /* Quote Slider - Code Embed */

    let current = 1;

    const nextButton = document.querySelector("#quote-next");
    const previousButton = document.querySelector("#quote-before");
    const quotes = document.querySelectorAll(".quote");

    if (nextButton && previousButton && quotes) {
      nextButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == quotes.length ? (current = 1) : current++;
        quotes[current - 1].classList.add("active-quote");
      });

      previousButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == 1 ? (current = quotes.length) : current--;
        quotes[current - 1].classList.add("active-quote");
      });
    }
  </script>`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <div className="home-faq" id='Faq'>
        <div className="home-content08">
          <div className="home-header6">
            <div className="home-tag2">
              <span className="home-text67">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading13">
              <h2 className="home-text70">Preguntas Frecuentes</h2>
            </div>
          </div>
          <div className="home-rows">
            <div className="home-column3">
              <div className="Question">
                <span className="home-title1">
                  Consectetur adipiscing elit, sed do?
                </span>
                <span className="home-description3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </span>
              </div>
              <div className="Question">
                <span className="home-title2">
                Consectetur adipiscing elit, sed do?
                </span>
                <span className="home-description4">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                  </span>
                </span>
              </div>
              <div className="home-question2 Question">
                <span className="home-title3">
                Consectetur adipiscing elit, sed do?
                </span>
                <span className="home-description5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
            </div>
            <div className="home-column4">
              <div className="home-question3 Question">
                <span className="home-title4">
                Consectetur adipiscing elit, sed do?
                </span>
                <span className="home-description6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="home-question4 Question">
                <span className="home-title5">
                Consectetur adipiscing elit, sed do?
                </span>
                <span className="home-description7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="home-question5 Question">
                <span className="home-title6">
                Consectetur adipiscing elit, sed do?
                </span>
                <span className="home-description8">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-get-started1" id='Download'>
        <div className="home-content09">
          <div className="home-heading14">
            <h2 className="home-text77">Empezá a operar con nostros!</h2>
            <span className="home-text78">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna.
            </span>
          </div>
          <div className="home-hero-buttons1">
            <div className="home-io-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-zmzg.svg"
                className="home-apple1"
              />
              <span className="home-caption6">Descargar para iOS</span>
            </div>
            <div className="home-android-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-ld65.svg"
                className="home-android1"
              />
              <span className="home-caption7">Descargar para Android</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
