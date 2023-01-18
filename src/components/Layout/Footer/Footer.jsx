import React from 'react'
import {FaFacebook,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-secondary text-white'>
        <div className='d-flex justify-content-between p-md-3 px-3  align-items-center'>
            <div className="paragraph">
                <p>All Rights reserved &copy;2023 || Er.Satis Kumar Chaudhary</p>
            </div>
            <div className='d-flex'>
                <a href="_target" className='mx-2'><FaFacebook/></a>
                <a href="_target" className='mx-2'><FaInstagram/></a>
                <a href="_target" className='mx-2'><FaLinkedinIn/></a>
                <a href="_target" className='mx-2'><FaGithub/></a>

            </div>
        </div>
      
    </footer>
  )
}

export default Footer
