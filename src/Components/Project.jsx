import React from 'react'
import { PROJECTS } from '../Constants/datas'
import { motion } from 'framer-motion'

const Project = ({lightmode}) => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <section id="projects">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.2}} className={lightmode?'my-20 text-center text-4xl text-white':'my-20 text-center text-4xl text-black'}>
        Projects
        </motion.h2>
        </section>
        <div>
            {
                PROJECTS.map((item,i)=>(
                    <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full  lg:w-1/4'>
                        <motion.img whileInView={{opacity:1,y:0}} initial={{opacity:1,y:70}} transition={{duration:1.2}} className='md:mx-1 rounded' width={330} height={300} src={item.image} alt="" />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <motion.h5 whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.2}} className={lightmode?'mb-2 text-white font-semibold':'mb-2 text-black font-semibold'}>{item.title}</motion.h5>
                            <motion.p whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.4}} className={lightmode?'mb-4 text-neutral-400':'mb-4 text-neutral-900'}>{item.description}</motion.p>
                            {item.technologies.map((item, i) =>(
                                <motion.span whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.5}} key={i} className=' mr-2 rounded bg-neutral-900 md:py-5 px-2 py-1 font-medium text-purple-500'>
                            {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))
            }
            </div>  
    </div>
  )
}

export default Project