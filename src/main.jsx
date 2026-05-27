import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle, ClipboardList, FileText, GraduationCap, Mail, MapPin, Phone, ShieldCheck, Target, Users } from 'lucide-react';
import './index.css';

const services = [
  ['Business & Management Consultancy', 'Strategic support to improve systems, leadership, planning and organizational performance.', BriefcaseBusiness],
  ['Training & Capacity Building', 'Practical learning programs that strengthen people, teams and institutions.', GraduationCap],
  ['Research & Data Analysis', 'Reliable research and data insights for evidence-based decisions.', BarChart3],
  ['Project Planning & Management', 'Support for designing, managing and delivering projects effectively.', ClipboardList],
  ['Policy Development & Advisory', 'Professional policy guidance for institutions, programs and development initiatives.', FileText],
  ['Monitoring & Evaluation', 'M&E systems, assessments, learning processes and reporting for better program performance.', Target]
];

const clients = ['Government institutions', 'Non-governmental organizations', 'Private sector companies', 'Development partners', 'Academic and research institutions', 'Entrepreneurs and startups'];
const values = ['Integrity', 'Professionalism', 'Innovation', 'Collaboration', 'Client-Centeredness'];

function App() {
  return (
    <div>
      <header className="header">
        <a className="brand" href="#home">
          <div className="logo">KL</div>
          <div><strong>KnowLinks</strong><span>Consultancy Company Limited</span></div>
        </a>
        <nav>
          <a href="#about">About</a><a href="#services">Services</a><a href="#clients">Clients</a><a href="#contact">Contact</a>
        </nav>
        <a className="btn small" href="#contact">Contact Us</a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">Management Consultancy • Training • Capacity Building</p>
            <h1>We connect knowledge to empower success.</h1>
            <p className="lead">KnowLinks Consultancy Company Limited provides innovative, reliable and knowledge-driven services that help organizations grow, improve performance and create sustainable impact.</p>
            <div className="actions"><a className="btn" href="#services">Explore Services <ArrowRight size={18}/></a><a className="btn ghost" href="#contact">Request Consultancy</a></div>
          </div>
          <div className="heroCard">
            <ShieldCheck size={48}/>
            <h2>Professional solutions for organizations and individuals</h2>
            <p>Supporting monitoring, evaluation, research, learning, capacity strengthening and institutional development.</p>
            <div className="stats"><span>M&E Systems</span><span>Data Insights</span><span>Growth Impact</span></div>
          </div>
        </section>

        <section id="about" className="section twoCol">
          <div>
            <p className="eyebrow dark">About Us</p>
            <h2>A dynamic consultancy firm built for transformative impact.</h2>
            <p>KnowLinks Consultancy Company Limited is dedicated to providing high-quality professional services across diverse sectors. We connect clients to knowledge, expertise and strategic solutions that drive sustainable growth and success.</p>
          </div>
          <div className="cardsTwo">
            <div className="card"><h3>Vision</h3><p>To be a leading consultancy firm recognized for excellence in connecting knowledge, people and solutions for transformative impact.</p></div>
            <div className="card"><h3>Mission</h3><p>To empower organizations and individuals through reliable, innovative and knowledge-driven consultancy services.</p></div>
          </div>
        </section>

        <section className="section values">
          <p className="eyebrow dark">Core Values</p>
          <div className="valueGrid">{values.map(v => <div className="value" key={v}><CheckCircle size={20}/>{v}</div>)}</div>
        </section>

        <section id="services" className="section white">
          <p className="eyebrow dark">Services Offered</p>
          <h2>Practical consultancy services for better results.</h2>
          <div className="serviceGrid">{services.map(([title, text, Icon]) => <div className="service" key={title}><Icon size={34}/><h3>{title}</h3><p>{text}</p></div>)}</div>
        </section>

        <section className="section approach">
          <div><p className="eyebrow">Our Approach</p><h2>Client-focused, evidence-based and results-oriented.</h2><p>We understand client needs, apply evidence-based solutions, leverage professional networks and deliver timely, impactful results.</p></div>
          <div className="steps"><span>Understand needs</span><span>Apply evidence</span><span>Leverage expertise</span><span>Deliver impact</span></div>
        </section>

        <section id="clients" className="section">
          <p className="eyebrow dark">Target Clients</p>
          <h2>Serving diverse institutions and partners.</h2>
          <div className="clientGrid">{clients.map(c => <div className="client" key={c}><Users size={20}/>{c}</div>)}</div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h2>Let’s connect knowledge to your next success.</h2>
            <p>Contact KnowLinks for consultancy, training, capacity building, research, M&E and advisory services.</p>
            <p><Phone size={18}/> +211 925 380 573</p>
            <p><Phone size={18}/> +211 925 464 038</p>
            <p><Mail size={18}/> knowlinks@gmail.com</p>
            <p><MapPin size={18}/> South Sudan</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()}>
            <h3>Send a Message</h3>
            <input placeholder="Your name"/><input placeholder="Email address"/><input placeholder="Organization"/><textarea placeholder="Tell us what support you need"></textarea><button className="btn" type="submit">Submit Inquiry</button>
          </form>
        </section>
      </main>
      <footer>© 2026 KnowLinks Consultancy Company Limited. All rights reserved.</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
