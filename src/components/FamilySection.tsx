import { photos } from '../data/photos'
import { Reveal } from './Reveal'
export function FamilySection(){return <section className="family family-compact"><Reveal className="family-main"><img src={photos.family.src} alt={photos.family.alt} width={photos.family.width} height={photos.family.height} loading="lazy"/><div><p className="eyebrow">Together with his parents</p><h2>Ashly <i>&</i> Jobin</h2><p>Surrounded by love,<br/>held in grace.</p></div></Reveal></section>}
