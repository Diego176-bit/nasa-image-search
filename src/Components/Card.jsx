import '../Stylesheets/Card.css'
import { motion } from 'framer-motion'
import { Modal } from './Modal'
import { useState } from 'react'
const Card = ({ title, description, img, alt }) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className='card-modal-container'>
      <Modal
        isOpen={toggle}
        title={title}
        description={description}
        srcModal={img}
        onclick={handleToggle}
      />
      <motion.div
        className='card '
        onClick={handleToggle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.9,
          type: 'spring',
          easing: 'eaeInOut'
        }}
      >
        <div className='img-container'>
          <img src={img} alt={alt} />
        </div>
        <section className='info-img-container'>
          <span className='title-img'>{title}</span>
          <p className='description-img'>{description}</p>
          <div className='button-container'>
            <button className='button-description' onClick={handleToggle}>See more...</button>
          </div>
        </section>
      </motion.div>

    </div>
  )
}

export default Card
