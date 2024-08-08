import React from 'react'
import { skill } from '../Constants/datas'
import { motion } from 'framer-motion'

const Skills = ({lightmode}) => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <section id='skills'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8, delay:0.5}} className={lightmode?'text-white text-4xl my-20 text-center':'text-black text-4xl my-20 text-center'}>Skills</motion.h2>
      </section>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.2}} className='flex flex-wrap items-center mb-3 justify-center gap-4'>
            {
            skill?.map((item,i)=>(
                <div className={lightmode?'duration-500 ease-in-out hover:scale-125 rounded-2xl border-4 border-neutral-800 hover:border-purple-700 p-4':'duration-500 ease-in-out hover:scale-125 rounded-2xl border-4 border-neutral-200 hover:border-purple-700 p-4'} key={i}>
                    <img className='w-[90px] h-[90px]' src={item} alt={`Skill ${i}`} />
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Skills