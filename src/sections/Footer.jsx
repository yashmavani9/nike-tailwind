import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/"><img src={footerLogo} width={150} height={46} className='hover:-translate-y-0.5 '/></a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Nike embarks lifestyle and sport with its products. The brand is known worldwide for its quality and style.</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => {
              return(
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:-translate-y-0.5'>
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              )
            })}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((section)=>{
              return(
                <div key={section}>
                  <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6 '>{section.title}</h4>
                  <ul>
                    {section.links.map((link) => {
                      return(
                        <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer '>
                          <a>{link.name}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
        </div>

      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-2'>
            <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
              <img src={copyrightSign} alt={copyrightSign} width={20} height={20} className='rounded-full m-0' />
              <p>Copyright. All rights reserved</p>
            </div>
            <p className='font-montserrat cursor-pointer '>Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer