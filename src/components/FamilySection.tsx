import { photos } from '../data/photos'
import { Reveal } from './Reveal'
export function FamilySection(){return <section className="family family-compact"><Reveal className="family-main"><img src={photos.closing.src} alt={photos.closing.alt} width={photos.closing.width} height={photos.closing.height} loading="lazy"/><div><p className="eyebrow">Together with his parents</p><h2>Ashly <i>&</i> Jobin</h2><p>Surrounded by love,<br/>held in grace.</p></div></Reveal></section>}
