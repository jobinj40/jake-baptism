import { photos } from '../data/photos'
import { Reveal } from './Reveal'
import { ShareButton } from './ShareButton'
import { WhatsAppRSVP } from './WhatsAppRSVP'
export function FamilySection(){return <footer className="family family-finale"><Reveal className="family-main"><img src={photos.family.src} alt={photos.family.alt} width={photos.family.width} height={photos.family.height} loading="lazy"/><div><p className="eyebrow">Together with his parents</p><h2>Ashly <i>&</i> Jobin</h2><p>We would be blessed<br/>to celebrate this beautiful day with you.</p><span className="family-date">30 · 08 · 2026</span><span className="cross family-cross">✝</span><strong className="see-you">See you there. ♡</strong><div className="family-actions"><ShareButton/><WhatsAppRSVP/></div></div></Reveal></footer>}
