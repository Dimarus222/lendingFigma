'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Laptop, Cpu, HardDrive, Wifi, Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  const services = [
    { icon: Laptop, title: 'Ремонт ноутбуков', description: 'Диагностика и устранение неисправностей любой сложности' },
    { icon: Cpu, title: 'Замена комплектующих', description: 'Апгрейд и замена процессоров, памяти, видеокарт' },
    { icon: HardDrive, title: 'Восстановление данных', description: 'Спасение информации с поврежденных носителей' },
    { icon: Wifi, title: 'Настройка сети', description: 'Установка и конфигурация домашних и офисных сетей' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">КомпМастер</div>
            <div className="hidden md:flex space-x-4">
              <a href="#services" className="hover:text-blue-200 transition duration-300">Услуги</a>
              <a href="#about" className="hover:text-blue-200 transition duration-300">Обо мне</a>
              <a href="#contact" className="hover:text-blue-200 transition duration-300">Контакты</a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-blue-500 py-2"
          >
            <a href="#services" className="block px-6 py-2 hover:bg-blue-600 transition duration-300">Услуги</a>
            <a href="#about" className="block px-6 py-2 hover:bg-blue-600 transition duration-300">Обо мне</a>
            <a href="#contact" className="block px-6 py-2 hover:bg-blue-600 transition duration-300">Контакты</a>
          </motion.div>
        )}
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <motion.div style={{ opacity }} className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Профессиональный<br className="hidden sm:inline" /> ремонт компьютеров
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">Быстро, качественно, с гарантией</p>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-100 transition duration-300">
              Связаться
            </a>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10"
          >
            <ChevronDown size={40} />
          </motion.div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Мои услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <img src="/placeholder.svg?height=400&width=400" alt="Фото мастера" className="rounded-full shadow-lg" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pl-8"
              >
                <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
                <p className="text-gray-600 mb-4">
                  Здравствуйте! Я Иван Петров, сертифицированный специалист по ремонту компьютеров с более чем 10-летним опытом работы. 
                  Моя цель - предоставить вам быстрое и эффективное решение любых проблем с вашим компьютером или ноутбуком.
                </p>
                <p className="text-gray-600">
                  Я постоянно обновляю свои знания и навыки, чтобы быть в курсе последних технологических тенденций и предлагать наилучший сервис своим клиентам.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Свяжитесь со мной</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Phone className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center"
              >
                <Mail className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p>ivan@compmaster.ru</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
              >
                <MapPin className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p>г. Москва, ул. Примерная, д. 1</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} КомпМастер. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

