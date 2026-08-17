import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
export function Intro({visible}:{visible:boolean}){
 const reduced=useReducedMotion()
 return <AnimatePresence>{visible&&<motion.div className="intro" aria-hidden="true" exit={{opacity:0}} transition={{duration:reduced?.01:.65}}>
   <motion.div initial={{opacity:0}} animate={{opacity:[0,1,1,0]}} transition={{duration:reduced?.1:2.25,times:[0,.2,.78,1]}} className="text-center">
    <span className="cross">✝</span><p className="eyebrow mt-5">With grateful hearts</p><p className="intro-sub">we invite you to celebrate</p>
   </motion.div>
  </motion.div>}</AnimatePresence>
}
