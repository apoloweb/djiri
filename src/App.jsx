import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import anime from 'animejs/lib/anime.es.js'
import logo from './assets/logo_new2.png'
import lojaNova6 from './assets/loja_nova (6).jpg'
import lojaNova1 from './assets/loja_nova (1).jpg'
import lojaNova2 from './assets/loja_nova (2).jpg'
import lojaNova3 from './assets/loja_nova (3).jpg'
import lojaNova4 from './assets/loja_nova (4).jpg'
import lojaNova5 from './assets/loja_nova (5).jpg'

const storeGallery = [lojaNova1, lojaNova6, lojaNova2, lojaNova3, lojaNova4, lojaNova5]

gsap.registerPlugin(ScrollTrigger)

const phoneNumber = '5514991163773'
const whatsappHref = `https://wa.me/${phoneNumber}`
const mapsHref = 'https://www.google.com/maps/search/?api=1&query=Av.+Antonio+Prado+Lyra+357+Jardim+Diamante+Jau+SP'
const googleReviewsHref =
  'https://www.google.com/search?q=djiri+suplementos#lrd=0x94b8a7ff4cf29b0d:0xdabc3ea7d9dbca92,1,,,'

import heroDesktop from './assets/hero-desktop.jpg'
import heroMacbook from './assets/hero_mackbook.jpg'
import heroIpad from './assets/ipad-air.jpg'
import heroMobile from './assets/hero-mobile.jpg'
import marca1 from './assets/marca_1.webp'
import marca2 from './assets/marca_2.webp'
import marca3 from './assets/marca_3.webp'
import marca4 from './assets/marca_4.webp'
import marca5 from './assets/marca_5.webp'
import marca7 from './assets/marca_7.webp'
import marca8 from './assets/marca_8.webp'
import marca9 from './assets/marca_9.webp'
import marca11 from './assets/marca_11.webp'

const partnerLogos = [marca11, marca9, marca8, marca7, marca5, marca4, marca3, marca2, marca1]

const testimonialItems = [
  { name: 'Barbara Hanshkov', text: 'Ótimos preços, produtos e atendimento! Super recomendo!', stars: 5 },
  {
    name: 'Jéssica Jeniffer',
    text: 'Loja bonita, ambiente climatizado, muitas opções de preços, atendimento diferenciado e várias formas de pagamento.',
    stars: 5,
  },
  { name: 'Leonardo Melo de Almeida', text: 'Sensacional... atendimento de primeira. Melhores marcas. Top.', stars: 5 },
  {
    name: 'Bianca Dadalto',
    text: 'Ótimo atendimento, equipe responsável e melhores preços e variedades. Super recomendo, sempre.',
    stars: 5,
  },
  { name: 'Éllen Rocha', text: 'Sempre com muita variedade e ótimos preços!!', stars: 5 },
  { name: 'Juliano Medeiros', text: 'Loja top, melhores produtos, preço sensacional, tem de tudo.', stars: 5 },
]

const stats = [
  { value: 20, suffix: 'k+', label: 'Clientes Satisfeitos' },
  { value: 100, suffix: '+', label: 'Marcas Exclusivas' },
  { value: 200, suffix: '+', label: 'Avaliações no Google' },
]

const benefits = [
  {
    number: '01',
    title: 'Curadoria Profissional',
    body: 'Para objetivo real: ganho de massa, energia e recuperação com as marcas certas.',
  },
  {
    number: '02',
    title: 'Atendimento Consultivo',
    body: 'No WhatsApp para comprar com segurança e sem perda de tempo.',
  },
  {
    number: '03',
    title: 'Entrega Ágil',
    body: 'Em Jaú e região para manter seu treino e rotina sem interrupções.',
  },
]

const faqItems = [
  {
    q: 'Quais tipos de suplementos vocês oferecem?',
    a: 'Trabalhamos com whey, creatina, pré-treino, vitaminas, performance e bem-estar.',
  },
  {
    q: 'Vocês entregam em Jaú e região?',
    a: 'Sim. Atendemos Jaú e região. Chame no WhatsApp para confirmar prazo e disponibilidade.',
  },
  {
    q: 'Qual é o horário de funcionamento da loja?',
    a: 'A loja funciona de segunda a sexta das 8h às 19h e aos sábados das 9h às 13h.',
  },
  {
    q: 'Vocês indicam o suplemento ideal?',
    a: 'Sim. Orientamos de acordo com seu objetivo, rotina e fase de treino.',
  },
  {
    q: 'É possível comprar direto pelo WhatsApp?',
    a: 'Sim. Você compra direto no WhatsApp com suporte rápido da equipe.',
  },
]

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#parceiros', label: 'Marcas' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function IconWhatsApp({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function SiteFooter({ setPage }) {
  return (
    <footer className="footer js-reveal">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo} alt="Djiri Suplementos" className="footer__logo" />
            <p>© {new Date().getFullYear()} Djiri Suplementos<br />Todos os direitos reservados.</p>
            <div className="footer__socials">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="footer__social" aria-label="WhatsApp">
                <IconWhatsApp size={18} />
              </a>
              <a href="https://www.instagram.com/djirisuplementos" target="_blank" rel="noreferrer" className="footer__social" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href="https://www.facebook.com/djirisuplementos" target="_blank" rel="noreferrer" className="footer__social" aria-label="Facebook">
                <IconFacebook />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Contato</h4>
            <p>(14) 9 9179-6003</p>
            <p>djirisuplestore@gmail.com</p>
            <p>@djirisuplementos</p>
          </div>
          <div className="footer__col">
            <h4>Políticas</h4>
            <p><button className="footer__link" onClick={() => { setPage('privacy'); window.scrollTo(0,0) }}>Política de Privacidade</button></p>
            <p><button className="footer__link" onClick={() => { setPage('terms'); window.scrollTo(0,0) }}>Termos de Uso</button></p>
          </div>
        </div>
        <div className="footer__div" />
        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Djiri Suplementos — Todos os direitos reservados.</p>
          <a
            href={`https://wa.me/5514997199773?text=${encodeURIComponent('Olá! Vi você no site da Djiri Suplementos e gostaria de saber mais sobre seus serviços.')}`}
            target="_blank"
            rel="noreferrer"
            className="footer__credit"
          >
            Designed by Apolo Web
          </a>
        </div>
      </div>
    </footer>
  )
}

function PolicyPage({ title, setPage, children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const goBack = () => window.location.reload()
  return (
    <div className="policy">
      <header className="nav">
        <div className="nav__inner">
          <a href="#" onClick={(e) => { e.preventDefault(); goBack() }} className="nav__logo-link" aria-label="Voltar">
            <img src={logo} alt="Djiri Suplementos" className="nav__logo" />
          </a>
          <button className="policy__back" onClick={goBack}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Voltar ao site
          </button>
        </div>
      </header>
      <div className="policy__body">
        <div className="policy__inner">
          <h1 className="policy__title">{title}</h1>
          {children}
        </div>
      </div>
      <SiteFooter setPage={setPage} />
    </div>
  )
}

function App() {
  const rootRef = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const [page, setPage] = useState('home')
  const curtainDone = useRef(false)
  const pendingScroll = useRef(null)

  const closeMobile = () => setMobileOpen(false)

  const doScroll = (href) => {
    const el = document.querySelector(href)
    if (!el) return
    let top = 0
    let node = el
    while (node) {
      top += node.offsetTop
      node = node.offsetParent
    }
    window.scrollTo({ top: Math.max(0, top - 98), behavior: 'smooth' })
  }

  const scrollTo = (href, delay = 0) => {
    const run = () => {
      if (!curtainDone.current) {
        pendingScroll.current = href
        return
      }
      doScroll(href)
    }
    delay ? setTimeout(run, delay) : run()
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (!reduceMotion) {
        // ── Curtain + hero entrance (chained timeline)
        gsap
          .timeline()
          .to('.curtain__progress', {
            scaleX: 1,
            duration: 0.6,
            ease: 'power2.inOut',
          }, 0)
          .to('.curtain', {
            yPercent: -100,
            duration: 1.05,
            ease: 'power3.inOut',
          }, 0.55)
          .add(() => {
            curtainDone.current = true
            if (pendingScroll.current) {
              const href = pendingScroll.current
              pendingScroll.current = null
              requestAnimationFrame(() => doScroll(href))
            }
          })
          .from('.nav', { y: -20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.45')
          .from('.hero__kicker', { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
          .from('.hero__title-word', { y: '110%', duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.35')
          .from('.hero__subtitle', { y: 18, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.35')
          .from('.hero__action', { y: 14, opacity: 0, stagger: 0.12, duration: 0.45, ease: 'power3.out' }, '-=0.3')
          .from('.hero__scroll-hint', { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.15')

      } else {
        curtainDone.current = true
        gsap.from('.nav', { y: -20, opacity: 0, duration: 0.55, ease: 'power3.out', delay: 0.1 })
      }

      // ── Scroll reveals
      gsap.utils.toArray('.js-reveal').forEach((el) => {
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.75, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      gsap.utils.toArray('.js-stagger').forEach((parent) => {
        gsap.from(parent.querySelectorAll('.js-stagger-item'), {
          y: 30, opacity: 0, duration: 0.65, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: parent, start: 'top 83%' },
        })
      })

      // ── Counters
      gsap.utils.toArray('.stat__count').forEach((el) => {
        const target = parseInt(el.dataset.target, 10)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2.4,
          ease: 'power3.out',
          snap: { val: 1 },
          onUpdate() { el.textContent = obj.val },
          scrollTrigger: { trigger: el.closest('.stat'), start: 'top 88%' },
        })
      })
    }, rootRef)

    // ── Partners marquee
    let marquee
    if (!reduceMotion) {
      marquee = anime({
        targets: '.partners__track',
        translateX: ['0%', '-50%'],
        duration: 38000,
        easing: 'linear',
        loop: true,
      })
    }

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      if (marquee) marquee.pause()
    }
  }, [])

  if (page === 'privacy') {
    return (
      <PolicyPage title="Política de Privacidade" setPage={setPage}>
        <section className="policy__section">
          <h2>Informações Coletadas</h2>
          <p>Coletamos informações de contato (nome, e-mail, telefone) fornecidas voluntariamente. Dados de pagamento são processados por terceiros e não são coletados diretamente por nós.</p>
        </section>
        <section className="policy__section">
          <h2>Uso das Informações</h2>
          <p>Os dados coletados são utilizados para atendimento ao cliente, atualizações sobre pedidos e comunicações promocionais relevantes.</p>
        </section>
        <section className="policy__section">
          <h2>Armazenamento e Segurança</h2>
          <p>Adotamos medidas técnicas e administrativas adequadas para proteger suas informações contra acesso não autorizado. Nenhum método de segurança é 100% infalível, mas nos esforçamos ao máximo para proteger seus dados.</p>
        </section>
        <section className="policy__section">
          <h2>Compartilhamento de Dados</h2>
          <p>Suas informações não são compartilhadas com terceiros, exceto quando necessário para cumprimento legal ou com prestadores de serviço de entrega diretamente envolvidos no atendimento do seu pedido.</p>
        </section>
        <section className="policy__section">
          <h2>Cookies</h2>
          <p>Utilizamos cookies não identificadores para melhorar a experiência de navegação e personalização do conteúdo exibido.</p>
        </section>
        <section className="policy__section">
          <h2>Direitos do Usuário</h2>
          <p>Você pode acessar, corrigir, atualizar ou solicitar a exclusão dos seus dados pessoais a qualquer momento, exceto nos casos em que a retenção seja exigida por lei. Entre em contato conosco pelo WhatsApp ou e-mail para exercer esses direitos.</p>
        </section>
        <section className="policy__section">
          <h2>Contato</h2>
          <p>Dúvidas sobre esta política? Fale com nossa equipe pelo WhatsApp <strong>(14) 9 9179-6003</strong> ou pelo e-mail <strong>djirisuplestore@gmail.com</strong>.</p>
        </section>
      </PolicyPage>
    )
  }

  if (page === 'terms') {
    return (
      <PolicyPage title="Termos de Uso" setPage={setPage}>
        <section className="policy__section">
          <h2>Uso do Site</h2>
          <p>A Djiri Suplementos fornece produtos e informações relacionadas a suplementação. Todo o conteúdo disponível neste site é protegido por direitos autorais e não pode ser reproduzido sem autorização prévia.</p>
        </section>
        <section className="policy__section">
          <h2>Cadastro e Acesso</h2>
          <p>Para realizar compras ou consultas, o usuário pode precisar fornecer dados pessoais como nome, telefone e e-mail. É responsabilidade do usuário garantir que as informações fornecidas sejam precisas e atualizadas.</p>
        </section>
        <section className="policy__section">
          <h2>Propriedade Intelectual</h2>
          <p>Todos os conteúdos do site — textos, imagens, logotipos e gráficos — são protegidos por leis de direitos autorais e marcas registradas. O uso não autorizado é expressamente proibido.</p>
        </section>
        <section className="policy__section">
          <h2>Limitação de Responsabilidade</h2>
          <p>A empresa não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do site ou dos produtos adquiridos, exceto nos casos em que a lei exija o contrário.</p>
        </section>
        <section className="policy__section">
          <h2>Modificações</h2>
          <p>A empresa reserva-se o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por meio do próprio site.</p>
        </section>
        <section className="policy__section">
          <h2>Suporte</h2>
          <p>Atendimento disponível pelo WhatsApp <strong>(14) 9 9179-6003</strong> ou pelo e-mail <strong>djirisuplestore@gmail.com</strong>.</p>
        </section>
      </PolicyPage>
    )
  }

  return (
    <>
    <div ref={rootRef} className="site">
      <div className="grain" aria-hidden="true" />

      {/* ── CURTAIN ────────────────────────────────────────── */}
      <div className="curtain" aria-hidden="true">
        <img src={logo} alt="" className="curtain__logo" />
        <p className="curtain__name">DJIRI SUPLEMENTOS</p>
        <div className="curtain__progress" />
      </div>

      {/* ── NAV ────────────────────────────────────────────── */}
      <header className="nav">
        <div className="nav__inner">
          <a href="/" className="nav__logo-link" aria-label="Djiri Suplementos — início" onClick={() => { window.location.href = '/' }}>
            <img src={logo} alt="Djiri Suplementos" className="nav__logo" />
          </a>

          <nav className="nav__links" aria-label="Menu principal">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={(e) => { e.preventDefault(); scrollTo(href) }}>{label}</a>
            ))}
          </nav>

          <a href={whatsappHref} target="_blank" rel="noreferrer" className="nav__cta">
            Comprar
          </a>

          <button
            className={`nav__burger${mobileOpen ? ' nav__burger--open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`m-nav${mobileOpen ? ' m-nav--open' : ''}`} aria-hidden={!mobileOpen}>
        <nav>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={(e) => { e.preventDefault(); closeMobile(); scrollTo(href, 360) }}>{label}</a>
          ))}
        </nav>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="m-nav__cta" onClick={closeMobile}>
          <IconWhatsApp /> Comprar no WhatsApp
        </a>
      </div>

      <main>
        {/* ── HERO ───────────────────────────────────────────── */}
        <section id="inicio" className="hero s-anchor">
          <div className="hero__bg" style={{
            '--img-desktop': `url(${heroDesktop})`,
            '--img-macbook': `url(${heroMacbook})`,
            '--img-ipad':    `url(${heroIpad})`,
            '--img-mobile':  `url(${heroMobile})`,
          }} />
          <div className="hero__veil" />

          <div className="hero__body">
            <p className="hero__kicker">
              <span className="hero__kicker-rule" />
              ELEVE SUAS HABILIDADES
              <span className="hero__kicker-rule" />
            </p>

            <h1 className="hero__title">
              <span className="hero__title-clip">
                <span className="hero__title-word">DESBLOQUEIE</span>
              </span>
              <span className="hero__title-clip">
                <span className="hero__title-word">SEU</span>
              </span>
              <span className="hero__title-clip hero__title-clip--gold">
                <span className="hero__title-word">POTENCIAL.</span>
              </span>
              <span className="sr-only"> — Djiri Suplementos, loja de suplementos em Jaú/SP</span>
            </h1>

            <div className="hero__foot">
              <p className="hero__subtitle">
                Marcas top, atendimento consultivo<br />e entrega rápida em Jaú e região.
              </p>
              <div className="hero__actions">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="hero__action btn-primary">
                  <IconWhatsApp /> Comprar suplementos
                </a>
                <a href="#contato" className="hero__action btn-ghost">
                  Falar com a equipe
                </a>
              </div>
            </div>
          </div>

          <div className="hero__scroll-hint" aria-hidden="true">
            <span>SCROLL</span>
            <div className="hero__scroll-line" />
          </div>
        </section>

        {/* ── STATS ──────────────────────────────────────────── */}
        <section className="stats-band js-reveal">
          <div className="stats">
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="stat">
                <div className="stat__num">
                  <span className="stat__count" data-target={value}>0</span>
                  <span className="stat__suffix">{suffix}</span>
                </div>
                <p className="stat__label">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PARTNERS ───────────────────────────────────────── */}
        <section id="parceiros" className="partners s-anchor js-reveal">
          <div className="partners__head">
            <div className="partners__rule" />
            <p className="partners__label">MARCAS PARCEIRAS</p>
            <div className="partners__rule" />
          </div>
          <div className="partners__vp">
            <div className="partners__track">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((src, i) => (
                <div key={i} className="partners__card">
                  <img
                    src={src}
                    alt={`Marca parceira ${(i % 10) + 1}`}
                    loading="lazy"
                    className={i % 10 === 4 ? 'partner-img--sm' : ''}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────── */}
        <section id="depoimentos" className="s-block s-anchor" style={{ background: 'var(--bg-a)' }}>
          <div className="s-inner">
            <div className="s-head js-reveal">
              <p className="s-tag">DEPOIMENTOS REAIS</p>
              <h2 className="s-title">O que nossos clientes dizem</h2>
              <p className="s-sub">
                Avaliações 5 estrelas publicadas no Google sobre a experiência com a Djiri.
              </p>
            </div>
            <div className="testis js-stagger">
              {testimonialItems.map((item) => (
                <article key={item.name} className="testi js-stagger-item">
                  <div className="testi__stars">
                    {Array.from({ length: item.stars }).map((_, i) => <IconStar key={i} />)}
                  </div>
                  <blockquote className="testi__text">"{item.text}"</blockquote>
                  <cite className="testi__author">{item.name}</cite>
                </article>
              ))}
            </div>
            <div className="s-action js-reveal">
              <a href={googleReviewsHref} target="_blank" rel="noreferrer" className="btn-primary">
                Ver avaliações no Google
              </a>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ───────────────────────────────────────── */}
        <section id="beneficios" className="s-block s-anchor benefits-section">
          <div className="s-inner">
            <div className="s-head js-reveal">
              <p className="s-tag">POR QUE ESCOLHER</p>
              <h2 className="s-title">Suplementação com direção</h2>
              <p className="s-sub">
                Menos ruído, mais constância. A Djiri organiza sua compra com foco no que realmente funciona.
              </p>
            </div>
            <div className="benefits js-stagger">
              {benefits.map((b) => (
                <article key={b.number} className="benefit js-stagger-item">
                  <div className="benefit__top">
                    <span className="benefit__num">{b.number}</span>
                    <div className="benefit__rule" />
                  </div>
                  <h3 className="benefit__title">{b.title}</h3>
                  <p className="benefit__body">{b.body}</p>
                </article>
              ))}
            </div>
            <div className="gallery js-reveal">
              {storeGallery.map((src, i) => (
                <div
                  key={i}
                  className="gallery__item"
                  onClick={() => setLightbox(src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(src)}
                  aria-label={`Abrir foto ${i + 1} da loja`}
                >
                  <img src={src} alt={`Djiri Suplementos — foto ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section id="faq" className="s-block s-anchor" style={{ background: 'var(--bg-a)' }}>
          <div className="s-inner">
            <div className="faq-layout">
              <div className="faq-layout__left js-reveal">
                <p className="s-tag">DÚVIDAS</p>
                <h2 className="s-title faq-title">Respostas rápidas para você</h2>
                <p className="s-sub">Ainda restou dúvida? Fale conosco diretamente no WhatsApp.</p>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary faq-cta">
                  <IconWhatsApp /> Falar no WhatsApp
                </a>
              </div>

              <div className="faq-list js-reveal">
                {faqItems.map((item, i) => (
                  <div
                    key={item.q}
                    className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`}
                  >
                    <button
                      className="faq-item__btn"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span>{item.q}</span>
                      <span className="faq-item__ico" aria-hidden="true">+</span>
                    </button>
                    <div className="faq-item__ans">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────── */}
        <section id="contato" className="s-block s-anchor" style={{ background: 'var(--bg-b)' }}>
          <div className="s-inner">
            <div className="contact">
              <div className="contact__map js-reveal">
                <iframe
                  title="Mapa Djiri Suplementos"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Av.+Antonio+Prado+Lyra+357+Jardim+Diamante+Jau+SP&z=17&output=embed"
                />
                <div className="store-card">
                  <img src={lojaNova4} alt="" className="store-card__img" aria-hidden="true" />
                  <div className="store-card__vignette" />

                  <div className="store-card__corners" aria-hidden="true">
                    <span className="sc-tl" /><span className="sc-tr" />
                    <span className="sc-bl" /><span className="sc-br" />
                  </div>

                  <div className="store-card__panel">
                    <div className="store-card__eyebrow">
                      <span className="store-card__rule" />
                      <span className="store-card__eyebrow-txt">Venha nos visitar</span>
                    </div>
                    <h3 className="store-card__title">Visite nossa<br />loja em Jaú</h3>
                    <address className="store-card__addr">
                      <span>Av. Antônio Prado Lyra, 357</span>
                      <span>Jardim Diamante · Jaú – SP</span>
                      <span>CEP: 17210-326</span>
                      <span>
                        <a href="tel:+5514991796003" style={{ color: 'inherit' }}>(14) 99179-6003</a>
                        {' · '}
                        <a href="tel:+5514991163773" style={{ color: 'inherit' }}>(14) 99116-3773</a>
                      </span>
                      <span style={{ marginTop: '0.4rem', color: 'var(--gold-lt)' }}>Seg a Sex: 8h às 20h | Sáb: 8h às 14h</span>
                      <span style={{ color: 'var(--gold-lt)' }}>Domingos e feriados: 8h às 12h</span>
                    </address>
                    <a href={mapsHref} target="_blank" rel="noreferrer" className="store-card__cta">
                      <span>Abrir no Maps</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__panel js-reveal">
                <div className="s-head" style={{ marginBottom: '2rem' }}>
                  <p className="s-tag">CONTATO</p>
                  <h2 className="s-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                    Fale com<br />a equipe
                  </h2>
                </div>
                <form
                  className="c-form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const { nome, email, tel } = e.target
                    const msg =
                      `Olá! Vim pelo site da Djiri Suplementos e gostaria de saber como comprar.\n\n` +
                      `Nome: ${nome.value}\n` +
                      `E-mail: ${email.value}\n` +
                      `Telefone: ${tel.value}`
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`,
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }}
                >
                  <input type="text" name="nome" placeholder="Nome completo *" required />
                  <input type="email" name="email" placeholder="E-mail *" required />
                  <input type="tel" name="tel" placeholder="Celular / WhatsApp *" required />
                  <label className="c-form__check">
                    <input type="checkbox" required />
                    <span>Concordo em enviar minhas informações para contato.</span>
                  </label>
                  <button type="submit" className="btn-primary c-form__submit">
                    <IconWhatsApp /> Confirmar e falar no WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <SiteFooter setPage={setPage} />

      {/* ── LIGHTBOX ───────────────────────────────────────── */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label="Foto da loja">
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Fechar">✕</button>
          <img src={lightbox} alt="Djiri Suplementos" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </div>

    {/* ── FLOATING CTA ───────────────────────────────────── */}
    <a href={whatsappHref} target="_blank" rel="noreferrer" className="fab" aria-label="Falar no WhatsApp">
      <IconWhatsApp size={22} />
      <span>WhatsApp</span>
    </a>
    </>
  )
}

export default App
