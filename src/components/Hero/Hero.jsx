import React, { useState } from 'react'
import EmailModal from './EmailModal'
import './Hero.css'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCTAClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">ELA NÃO mata de uma vez.</h1>
          <p className="hero-subtext">
            Mas quando você percebe....já perdeu tudo.<br />
            Conheça a História de Beth Mirage
          </p>
          <button className="btn hero-cta" onClick={handleCTAClick}>
            Quero baixar o ebook agora
          </button>
          <p className="hero-features">
            Acesso imediato * PDF * Leitura forte e real
          </p>
        </div>
      </div>
      {isModalOpen && <EmailModal onClose={handleCloseModal} />}
    </section>
  )
}

export default Hero
