import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div id="pagepiling">
                <Hero />
                <Services />
                <section className="section pp-scrollable slide3 team p-0" id="team" data-anchor="team" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div className="bg-overlay bg-brown opacity-8"></div>
                    <div className="container expand-container">
                        {/* Section Heading */}
                        <div className="row mb-4 section-heading text-center">
                            <div className="col-12 wow" data-wow-delay=".3s">
                                <h2 className="main-font text-white mb-2" style={{ fontSize: '2.2rem', fontWeight: 700 }}>About DiaSam</h2>
                                <p className="text-white" style={{ fontSize: '1.1rem', opacity: 0.9 }}>Smart Solutions for Modern Living</p>
                            </div>
                        </div>
                        <div className="row align-items-stretch wow" data-wow-delay=".5s">
                            <About />
                            <Team />
                        </div>
                    </div>
                </section>
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
};

export default App;
