import { photos } from '../data/photos'
import { Reveal } from './Reveal'
const words=['A little miracle.\nA lifetime of love.','Blessed beyond\nmeasure.','A joy beyond\nwords.','Held in grace.\nLoved always.']
export function PhotoStory(){return <section className="story"><div className="name-feature" aria-hidden="true">Jake</div>{photos.story.map((p,i)=><article className={`story-frame story-${i}`} key={p.src}><Reveal className="story-image-wrap"><img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy"/></Reveal><Reveal className="story-words"><p>{words[i].split('\n').map((x,j)=><span key={j}>{x}</span>)}</p></Reveal></article>)}</section>}
