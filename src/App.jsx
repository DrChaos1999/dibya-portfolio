import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Box, BrainCircuit,
  CheckCircle2, ChevronRight, Code2, Cpu, Download, ExternalLink, FileText,
  FlaskConical, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin,
  Menu, MoveUpRight, Network, Terminal, Workflow, Wrench, X,
} from 'lucide-react';
import { person, projects, research, skills, experience, education } from './data.js';

const resumes = {
  ai: `${import.meta.env.BASE_URL}resumes/ai-engineering.pdf`,
  robotics: `${import.meta.env.BASE_URL}resumes/robotics.pdf`,
};
const nav = [['About','about'],['Projects','projects'],['Research','research'],['Skills','skills'],['Experience','experience'],['Contact','contact']];

function IconLink({ href, label, children, className = '' }) {
  return <a aria-label={label} className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}
function SectionIntro({ number, eyebrow, title, text }) {
  return <div className="section-intro">
    <span className="eyebrow"><span className="eyebrow-number">{number}</span> {eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}
function Pill({ children }) {return <span className="pill">{children}</span>}
function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="wrap header-inner">
    <a href="#home" className="wordmark" onClick={() => setOpen(false)} aria-label="Go to home">D<span>.</span>JP <span className="wordmark-slash">/</span><small>PORTFOLIO</small></a>
    <button className="mobile-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Primary navigation">
      {nav.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{name}</a>)}
      <IconLink href={person.github} label="View GitHub profile" className="nav-github"><Github size={17}/><span>GitHub</span></IconLink>
    </nav>
  </div></header>;
}
function Hero() {
  return <section className="hero" id="home"><div className="orb orb-a"/><div className="orb orb-b"/>
    <div className="wrap hero-layout">
      <div className="hero-copy">
        <div className="availability"><span className="dot"/> AI ENGINEERING <span className="availability-divider">/</span> ROBOTICS</div>
        <p className="intro-line">HI, I'M DIBYA JOY PAUL <span className="intro-line-rule"/></p>
        <h1>Engineering<br/><span className="gradient-text">intelligence.</span><br/>Making it real.</h1>
        <p className="hero-summary">{person.introduction}</p>
        <div className="button-row">
          <a href="#projects" className="btn btn-primary">Explore projects <ArrowUpRight size={18}/></a>
          <a href={resumes.ai} className="btn btn-ghost" download="Dibya_Joy_Paul_AI_Engineering_CV.pdf"><Download size={17}/> Download AI CV</a>
        </div>
        <div className="hero-footer"><div className="social-links">
          <IconLink href={person.github} label="GitHub"><Github size={19}/></IconLink>
          <IconLink href={person.linkedin} label="LinkedIn"><Linkedin size={19}/></IconLink>
          <a href={`mailto:${person.email}`} aria-label="Send email"><Mail size={19}/></a>
        </div><span><MapPin size={15}/>{person.location}</span></div>
      </div>
      <div className="hero-art" aria-label="Decorative illustrated engineering workspace">
        <div className="workstation">
          <div className="workstation-header"><div className="win-dots"><i/><i/><i/></div><span>systems / overview</span><Terminal size={16}/></div>
          <div className="radar"><div className="radar-ring ring-outer"/><div className="radar-ring ring-inner"/><span className="radar-core"><BrainCircuit size={60} strokeWidth={1.2}/></span><span className="radar-cross vertical"/><span className="radar-cross horizontal"/></div>
          <div className="system-rows">
            <div><BrainCircuit size={18}/><span>AGENTIC SYSTEMS</span><CheckCircle2 size={16}/></div>
            <div><Cpu size={18}/><span>ROBOTICS & CONTROL</span><CheckCircle2 size={16}/></div>
            <div><Workflow size={18}/><span>ENGINEERING WORKFLOWS</span><CheckCircle2 size={16}/></div>
          </div>
        </div>
        <div className="floating-chip"><span className="chip-square"/> THINK <b>·</b> BUILD <b>·</b> TEST</div>
      </div>
    </div>
    <a href="#about" className="scroll-hint">SCROLL TO EXPLORE <ArrowDownRight size={15}/></a>
  </section>;
}
function About() {
  return <section className="section wrap" id="about">
    <SectionIntro number="01" eyebrow="ABOUT ME" title={<>Two disciplines.<br/><span className="dim-heading">One engineering mindset.</span></>} text="I work at the intersection of modern AI software and physical engineering."/>
    <div className="about-grid"><div className="about-text">
      <p>{person.about}</p>
      <p>My interests include reliable LLM applications, agent orchestration, robotics integration, predictive maintenance and systems that produce measurable results.</p>
      <div className="resume-links"><a href={resumes.ai} download="Dibya_Joy_Paul_AI_Engineering_CV.pdf"><FileText size={18}/> AI Engineering CV <Download size={16}/></a>
      <a href={resumes.robotics} download="Dibya_Joy_Paul_Robotics_CV.pdf"><FileText size={18}/> Mechatronics / Robotics CV <Download size={16}/></a></div>
    </div><div className="focus-grid">
      <div><BrainCircuit size={25}/><h3>Agentic AI</h3><p>LLMs, agents, tools and multi-step workflows.</p></div>
      <div><Layers3 size={25}/><h3>Retrieval Systems</h3><p>RAG, embeddings, retrieval and evaluation.</p></div>
      <div><Cpu size={25}/><h3>Robotics</h3><p>Sensing, motor control and embedded devices.</p></div>
      <div><Wrench size={25}/><h3>Systems Thinking</h3><p>APIs, engineering trade-offs and deployment.</p></div>
    </div></div>
  </section>;
}
function ProjectCard({ item, index, onOpen }) {
  const ai = item.category === 'AI';
  return <article className={`project-card ${ai ? 'card-ai' : 'card-robot'}`}>
    <div className="project-art"><span className="project-serial">{String(index+1).padStart(2,'0')} / {item.category.toUpperCase()}</span><div className="project-glyph">{ai ? <BrainCircuit size={55} strokeWidth={1}/> : <Cpu size={55} strokeWidth={1}/>}</div><span className="art-detail">{item.highlight}</span></div>
    <div className="project-content"><span className="mini-label">{item.subtitle}</span><h3>{item.title}</h3><p>{item.summary}</p><div className="pills">{item.tags.slice(0,4).map(t => <Pill key={t}>{t}</Pill>)}</div>
      <div className="card-footer"><button onClick={() => onOpen(item)} type="button">Case study <ArrowUpRight size={16}/></button>
      {item.repoUrl ? <IconLink href={item.repoUrl} label={`View ${item.title} code`}><Github size={19}/></IconLink> : <span className="repo-unlinked" title="Specific repository link not yet verified">Code link pending</span>}</div>
    </div>
  </article>;
}
function ProjectDialog({ item, close }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!item) return;
    const previous = document.activeElement;
    const keydown = (e) => {if (e.key === 'Escape') close();};
    document.addEventListener('keydown', keydown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {document.removeEventListener('keydown', keydown);document.body.style.overflow = '';previous?.focus?.();};
  },[item,close]);
  if (!item) return null;
  const collection = item.category === 'AI' ? person.aiCollection : null;
  return <div className="dialog-backdrop" onMouseDown={(e) => {if (e.target === e.currentTarget) close()}}>
    <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-heading"><div className="dialog-header"><span className="eyebrow">PROJECT / {item.category.toUpperCase()}</span><button className="dialog-close" type="button" onClick={close} ref={closeRef} aria-label="Close"><X size={21}/></button></div>
      <h2 id="dialog-heading">{item.title}</h2><p className="dialog-subtitle">{item.subtitle}</p><p>{item.summary}</p><h3>Engineering highlights</h3><ul>{item.details.map(d=><li key={d}>{d}</li>)}</ul><h3>Technologies</h3><div className="pills">{item.tags.map(t=><Pill key={t}>{t}</Pill>)}</div>
      <div className="dialog-buttons">{item.repoUrl ? <a href={item.repoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View repository <ExternalLink size={16}/></a> : collection ? <a href={collection} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">Browse AI projects collection <ExternalLink size={16}/></a> : <span className="caveat">Project-specific source/demo link can be added after verification.</span>}</div>
    </div>
  </div>;
}
function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  return <section className="section section-dim" id="projects"><div className="wrap">
    <SectionIntro number="02" eyebrow="PROJECTS" title={<>Work, built and <span className="gradient-text">explored.</span></>} text="AI applications, experimental benchmarks, robotics designs and embedded engineering."/>
    <div className="project-toolbar"><div className="filter-tabs" aria-label="Filter projects">{[['All','All projects'],['AI','AI engineering'],['Robotics','Robotics & hardware']].map(([k,label])=><button type="button" className={filter === k ? 'is-active' : ''} aria-pressed={filter===k} onClick={()=>setFilter(k)} key={k}>{label}</button>)}</div><span>{visible.length} PROJECTS</span></div>
    <div className="project-grid">{visible.map((p,i)=><ProjectCard key={p.id} item={p} index={i} onOpen={setSelected}/>)}</div>
    <div className="bottom-action"><IconLink href={person.aiCollection} label="Browse AI engineering projects on GitHub" className="btn btn-ghost">Browse GitHub projects <ArrowUpRight size={16}/></IconLink></div>
  </div><ProjectDialog item={selected} close={()=>setSelected(null)}/></section>;
}
function Research() {
  return <section className="section wrap" id="research"><SectionIntro number="03" eyebrow="RESEARCH" title={<>Evidence, analysis, <span className="dim-heading">inquiry.</span></>} text="Thesis and research work; a listing here does not imply peer-reviewed publication."/>
    <div className="research-grid">{research.map((r,i)=><article className="research-card" key={r.title}><div className="research-top"><span>{String(i+1).padStart(2,'0')}</span><span>{r.period}</span></div><div className="research-icon"><FlaskConical size={24}/></div><span className="mini-label">{r.type}</span><h3>{r.title}</h3><p>{r.detail}</p><div className="pills">{r.tags.map(t=><Pill key={t}>{t}</Pill>)}</div></article>)}</div>
  </section>;
}
function Skills() {
  return <section className="section section-dim" id="skills"><div className="wrap"><SectionIntro number="04" eyebrow="TECHNOLOGY" title="My working toolkit." text="Grouped by application area; relevant projects provide the best evidence of proficiency."/>
    <div className="skills-grid">{skills.map((s,i)=><article className="skill-block" key={s.area}><div className="skill-heading"><div className="skill-icon">{i===4?<Cpu size={20}/>:i===1?<BrainCircuit size={20}/>:<Code2 size={20}/>}</div><h3>{s.area}</h3></div><div className="pills">{s.items.map(t=><Pill key={t}>{t}</Pill>)}</div></article>)}</div>
  </div></section>;
}
function Timeline({items,educationType}) {
  return <div className="timeline">{items.map(x=><article className="timeline-entry" key={educationType ? x.institution : x.organization}><div className="timeline-dot">{educationType?<GraduationCap size={18}/>:<Box size={18}/>}</div><div className="timeline-details"><div className="timeline-row"><h3>{educationType ? x.degree : x.title}</h3><span>{x.period}</span></div><strong>{educationType ? x.institution : x.organization}</strong><p>{educationType ? x.focus : x.description}</p>{educationType&&<small><MapPin size={13}/>{x.location}</small>}</div></article>)}</div>;
}
function Journey() {
  return <section className="section wrap" id="experience"><SectionIntro number="05" eyebrow="BACKGROUND" title={<>Education & <span className="dim-heading">experience.</span></>} text="A foundation in mechatronics and ongoing specialization in AI engineering."/>
    <div className="journey-grid"><div><div className="subsection-label"><GraduationCap size={19}/> EDUCATION</div><Timeline items={education} educationType/></div><div><div className="subsection-label"><Wrench size={19}/> PROFESSIONAL EXPERIENCE</div><Timeline items={experience}/></div></div>
  </section>;
}
function NotesBanner() {
  return <section className="notes-space wrap"><div className="notes-banner"><div><span className="eyebrow">TECHNICAL KNOWLEDGE BASE</span><h2>Learning in public.</h2><p>Implementation-oriented notebooks about LangGraph, AI APIs, databases, software architecture, distributed systems and ML workflows.</p><IconLink href={person.aiNotes} label="Browse AI engineering notes" className="btn btn-ghost">Explore AI notes <ArrowUpRight size={17}/></IconLink></div><BookOpen className="notes-art" size={94} strokeWidth={1}/></div></section>;
}
function Contact() {
  return <section className="section contact" id="contact"><div className="wrap contact-inner"><span className="eyebrow">06 / GET IN TOUCH</span><h2>Have a problem worth <span className="gradient-text">solving?</span></h2><p>I'm interested in AI engineering, robotics and technically challenging projects. Reach out for opportunities or collaboration.</p>
    <a className="btn btn-primary" href={`mailto:${person.email}?subject=Professional%20Inquiry`}>Let's talk <Mail size={18}/></a><div className="contact-links"><IconLink href={person.github} label="GitHub profile"><Github size={18}/> GitHub</IconLink><IconLink href={person.linkedin} label="LinkedIn profile"><Linkedin size={18}/> LinkedIn</IconLink><a href={`mailto:${person.email}`}><Mail size={18}/> Email</a></div>
  </div></section>;
}
function Footer() {
  return <footer className="footer"><div className="wrap footer-inner"><div><a href="#home" className="wordmark">D<span>.</span>JP</a><p>Engineering intelligent systems.</p></div><span>© {new Date().getFullYear()} Dibya Joy Paul</span><a href="#home">Back to top <MoveUpRight size={15}/></a></div></footer>;
}
export default function App() {
  return <><Header/><main><Hero/><About/><Projects/><Research/><Skills/><Journey/><NotesBanner/><Contact/></main><Footer/></>;
}
