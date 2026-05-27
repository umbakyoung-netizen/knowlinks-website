import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Mail, Phone, MapPin, BarChart3, GraduationCap,
  BriefcaseBusiness, ClipboardList, FileText, Users, Building2, Target,
  Lightbulb, ShieldCheck
} from 'lucide-react';
import './styles.css';

const services = [
  { title: 'Business & Management Consultancy', description: 'Strategic advisory support to improve organizational performance, systems, and decision-making.', icon: BriefcaseBusiness },
  { title: 'Training & Capacity Building', description: 'Practical learning programs that strengthen people, teams, and institutions for long-term impact.', icon: GraduationCap },
  { title: 'Research & Data Analysis', description: 'Evidence-based research, analytics, and insights that help clients understand challenges and opportunities.', icon: BarChart3 },
  { title: 'Project Planning & Management', description: 'Support for designing, managing, and delivering projects efficiently and effectively.', icon: ClipboardList },
  { title: 'Policy Development & Advisory', description: 'Professional policy support for institutions, programs, and development initiatives.', icon: FileText },
  { title: 'Monitoring & Evaluation', description: 'M&E systems, assessments, learning processes, and reporting for better program performance.', icon: Target },
];

const values = [
  { title: 'Integrity', icon: ShieldCheck },
  { title: 'Professionalism', icon: BriefcaseBusiness },
  { title: 'Innovation', icon: Lightbulb },
  { title: 'Collaboration', icon: Users },
  { title: 'Client-Centeredness', icon: CheckCircle },
];

const clients = [
  'Government institutions', 'Non-governmental organizations', 'Private sector companies',
  'Development partners', 'Academic and research institutions', 'Entrepreneurs and startups'
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand">
            <div className="brandMark">KL</div>
            <div><strong>KnowLinks</strong><span>Consultancy Company Limited</span></div>
          </a>
          <nav className="links">
            <a href="#about">About</a><a href="#services">Services</a><a href="#approach">Approach</a><a href="#clients">Clients</a><a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn primary">Contact Us</a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container heroGrid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow">Management Consultancy • Training • Capacity Building</p>
              <h1>We connect knowledge to empower success.</h1>
              <p className="lead">KnowLinks Consultancy Company Limited delivers reliable, innovative, and knowledge-driven consultancy services for sustainable growth and transformative impact.</p>
              <div className="actions"><a href="#services" className="btn gold">Explore Services <ArrowRight size={18}/></a><a href="#contact" className="btn outline">Request Consultancy</a></div>
            </motion.div>
            <motion.div className="heroCard" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="whiteCard"><Building2 size={48}/><h2>Professional solutions for organizations and individuals</h2><p>Supporting monitoring, evaluation, research, learning, capacity strengthening, and institutional development.</p></div>
              <div className="stats"><div><b>M&E</b><span>Systems</span></div><div><b>Data</b><span>Insights</span></div><div><b>Growth</b><span>Impact</span></div></div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="container split section">
          <div><p className="sectionTag">About Us</p><h2>A dynamic consultancy firm built for transformative impact.</h2><p className="text">KnowLinks Consultancy Company Limited is dedicated to providing high-quality professional services across diverse sectors. We connect clients to knowledge, expertise, and strategic solutions that drive sustainable growth and success.</p><div className="miniCards"><div><h3>Our Vision</h3><p>To be a leading consultancy firm recognized for excellence in connecting knowledge, people, and solutions.</p></div><div><h3>Our Mission</h3><p>To empower organizations and individuals through reliable, innovative, and knowledge-driven services.</p></div></div></div>
          <div className="values"><h3>Core Values</h3>{values.map(({title, icon: Icon}) => <div className="value" key={title}><span><Icon size={20}/></span><b>{title}</b></div>)}</div>
        </section>

        <section id="services" className="section white"><div className="container"><p className="sectionTag">Services Offered</p><h2>Practical consultancy services for better results.</h2><p className="text narrow">We provide a wide range of services designed to strengthen institutions, improve programs, and support evidence-based decision-making.</p><div className="serviceGrid">{services.map(({title, description, icon: Icon}) => <article className="service" key={title}><div className="icon"><Icon size={28}/></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section id="approach" className="container section"><div className="approach"><div><p className="sectionTag goldText">Our Approach</p><h2>Client-focused, evidence-based, and results-oriented.</h2><p>We understand client needs and challenges, apply evidence-based solutions, leverage professional networks and expertise, and deliver timely, impactful results.</p></div><div className="approachGrid">{['Understand needs','Apply evidence','Leverage expertise','Deliver impact'].map(item => <div key={item}><CheckCircle/><h3>{item}</h3></div>)}</div></div></section>

        <section id="clients" className="section light"><div className="container"><p className="sectionTag">Target Clients</p><h2>Serving diverse institutions and partners.</h2><p className="text narrow">KnowLinks works with organizations and individuals across public, private, academic, development, and civil society sectors.</p><div className="clientGrid">{clients.map(client => <div key={client}><CheckCircle size={18}/>{client}</div>)}</div></div></section>

        <section id="contact" className="section white"><div className="container contact"><div><p className="sectionTag goldText">Contact Us</p><h2>Let’s connect knowledge to your next success.</h2><p>Contact KnowLinks Consultancy Company Limited for management consultancy, training, capacity building, research, M&E, and advisory services.</p><p><Phone size={18}/> +211 925 380 573</p><p><Phone size={18}/> +211 925 464 038</p><p><Mail size={18}/> knowlinks@gmail.com</p><p><MapPin size={18}/> South Sudan</p></div><form action="mailto:knowlinks@gmail.com" method="post" encType="text/plain"><h3>Send a Message</h3><input name="name" placeholder="Your name"/><input name="email" placeholder="Email address"/><input name="organization" placeholder="Organization"/><textarea name="message" placeholder="Tell us what support you need"></textarea><button className="btn primary" type="submit">Submit Inquiry</button></form></div></section>
      </main>
      <footer>© 2026 KnowLinks Consultancy Company Limited. All rights reserved.</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
