
import { Dialog, Transition } from '@headlessui/react'
import '../Stylesheets/Modal.css'

export const Modal = ({ isOpen, title, description, srcModal, altModal, onclick }) => {
  return (
    <Transition
      show={isOpen}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'

    >
      <Dialog onClose={onclick} className='modal'>
        <Dialog.Panel className='modal-panel'>

          <Dialog.Title>{title}</Dialog.Title>
          <div className='img-modal-container'>
            <img src={srcModal} alt={altModal} />
          </div>
          <p>
            {description}
          </p>
          <div className='button-modal-container'>
            <button className='icon-btn add-btn' onClick={onclick}>
              <div className='add-icon' />
              <div className='btn-txt'>Close</div>
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}
