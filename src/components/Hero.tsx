import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { photos } from '../data/photos'
export function Hero({onReady,instant=false}:{onReady:()=>void;instant?:boolean}){
 const reduced=useReducedMotion(); const {scrollY}=useScroll(); const y=useTransform(scrollY,[0,900],[0,reduced?0:70]); const scale=useTransform(scrollY,[0,900],[1.03,reduced?1.03:1.09])
 return <header className="hero">
  <motion.img src={photos.hero.src} alt={photos.hero.alt} fetchPriority="high" onLoad={onReady} className="hero-image" style={{y,scale,objectPosition:'var(--hero-position)'}} />
  <div className="hero-wash"/><motion.div className="hero-copy" initial={instant?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:2,duration:1}}>
   <p className="eyebrow text-white/80">The Holy Baptism of</p><h1><span>Jake <em>John</em></span><span>Jobin</span></h1><p className="hero-date">30 · 08 · 2026</p>
  </motion.div><div className="scroll-cue">Scroll to celebrate <span>↓</span></div>
 </header>
}
