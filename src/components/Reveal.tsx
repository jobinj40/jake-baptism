import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
export function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 const reduced=useReducedMotion()
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:28,filter:'blur(8px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:true,amount:.16}} transition={{duration:reduced?.01:.9,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
export function Section({children,className=''}:PropsWithChildren<{className?:string}>){return <section className={`section ${className}`}>{children}</section>}
