import { event } from '../config/event'
export function WhatsAppRSVP(){if(!event.whatsappRsvpNumber)return null;const msg=encodeURIComponent("Hi Jobin, thank you for inviting us to Jake's baptism. We would be happy to join you.");return <a className="button button-light" href={`https://wa.me/${event.whatsappRsvpNumber}?text=${msg}`} target="_blank" rel="noreferrer">RSVP on WhatsApp</a>}
