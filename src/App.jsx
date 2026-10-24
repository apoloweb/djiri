import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from './assets/logo_new2.png'
import lojaNova6 from './assets/loja_nova (6).jpg'
import lojaNova1 from './assets/loja_nova (1).jpg'
import lojaNova2 from './assets/loja_nova (2).jpg'
import lojaNova3 from './assets/loja_nova (3).jpg'
import lojaNova4 from './assets/loja_nova (4).jpg'
import lojaNova5 from './assets/loja_nova (5).jpg'

const storeGallery = [lojaNova1, lojaNova6, lojaNova2, lojaNova3, lojaNova4, lojaNova5]

const phoneNumber = '5514991163773'
const whatsappHref = `https://wa.me/${phoneNumber}`
const comprarHref = 'https://wa.me/5514991796003'
const mapsHref = 'https://www.google.com/maps/search/?api=1&query=Av.+Antonio+Prado+Lyra+357+Jardim+Diamante+Jau+SP'
const googleReviewsHref =
  'https://www.google.com/search?q=djiri+suplementos#lrd=0x94b8a7ff4cf29b0d:0xdabc3ea7d9dbca92,1,,,'

// Imagens do hero servidas de /public (URL estável p/ preload do LCP)
const heroDesktop = '/hero-desktop.jpg'
const heroMacbook = '/hero_mackbook.jpg'
const heroIpad = '/ipad-air.jpg'
const heroMobile = '/hero-mobile.jpg'
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

const historiaParagraphs = [
  'Em 12 de agosto de 2017, nasceu a DJIRI com um propósito: tornar a saúde, a alimentação saudável e o bem-estar mais presentes na rotina das pessoas.',
  'Desde o início, construímos nossa história ao lado dos nossos clientes. Cada objetivo, conquista e transformação nos inspira a oferecer produtos de qualidade para uma vida mais equilibrada.',
  'Hoje, somos uma loja de suplementos e produtos naturais em Jaú, com opções para diferentes estilos de vida.',
  'Nosso diferencial está na combinação de qualidade, variedade e atendimento próximo: mais do que oferecer produtos, queremos fazer parte da sua jornada de saúde e bem-estar.',
  'DJIRI — saúde, confiança e cuidado desde 2017.',
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
    a: 'Segunda a sexta das 8h às 20h, sábado das 8h às 14h e domingos e feriados das 8h às 12h.',
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
  { page: 'produtos', label: 'Produtos' },
  { href: '#parceiros', label: 'Marcas' },
  { href: '#depoimentos', label: 'Depoimentos' },
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
            href="https://apoloweb.net.br"
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

// ─────────────────────────────────────────────────────────
//  CATÁLOGO DE PRODUTOS (por tipo)
// ─────────────────────────────────────────────────────────
const WA_STORE = '5514991163773'
const produtoWhats = (name) =>
  `https://wa.me/${WA_STORE}?text=${encodeURIComponent(`Olá! Tenho interesse em ${name}. Pode me ajudar com disponibilidade e preço?`)}`

const productCatalog = [
  {
    cat: 'Whey & Proteínas',
    items: [
      { name: 'Whey Isolado', desc: 'Proteína do soro do leite com alto grau de pureza e baixíssimo teor de carboidratos, gordura e lactose. Absorção rápida.', uso: 'Em média 1 dose (±30 g) ao dia, geralmente após o treino.' },
      { name: 'Whey Concentrado', desc: 'A forma mais clássica e com melhor custo-benefício do whey, rica em proteínas para apoiar o ganho e a manutenção muscular.', uso: '1 dose (±30 g) ao dia, conforme sua necessidade de proteína.' },
      { name: 'Whey 3W', desc: 'Blend com três fontes de proteína (concentrada, isolada e hidrolisada) para liberação em diferentes velocidades.', uso: '1 dose (±30 g) ao dia, antes ou após o treino.' },
      { name: 'Whey Beef (Proteína da Carne)', desc: 'Proteína isolada da carne bovina — opção para quem tem restrição à lactose e quer alto teor proteico.', uso: '1 dose ao dia conforme o rótulo.' },
      { name: 'Proteína Vegana', desc: 'Proteína de origem vegetal (ervilha, arroz, amêndoa) para dietas veganas ou com restrição à lactose.', uso: '1 dose ao dia, ótima no café da manhã ou pós-treino.' },
    ],
  },
  {
    cat: 'Creatina',
    items: [
      { name: 'Creatina Monohidratada', desc: 'O suplemento de performance mais estudado do mundo. Auxilia força, potência e ganho de massa.', uso: 'Geralmente 3 a 5 g por dia, em qualquer horário, de forma contínua.' },
      { name: 'Creatina Saborizada (Zero Açúcar)', desc: 'A mesma creatina, com sabor e sem açúcar — praticidade e gosto agradável.', uso: '3 a 5 g por dia, dissolvida na água.' },
      { name: 'Creatina Micronizada', desc: 'Partículas menores para melhor dissolução e conforto digestivo.', uso: '3 a 5 g por dia, em qualquer horário.' },
      { name: 'Creatina Creapure®', desc: 'Creatina alemã com selo Creapure®, referência mundial em pureza e qualidade.', uso: '3 a 5 g por dia, de forma contínua.' },
      { name: 'Creatina Gummy', desc: 'Creatina em goma mastigável — prática para levar na bolsa e consumir sem água.', uso: 'Conforme a porção indicada no rótulo.' },
    ],
  },
  {
    cat: 'Cafés & Energéticos',
    items: [
      { name: 'Supercoffee', desc: 'Café funcional com cafeína e compostos termogênicos para energia e foco.', uso: '1 dose pela manhã ou antes do treino.' },
      { name: 'Ultra Coffee', desc: 'Café com blend de ativos para disposição, foco e auxílio na queima de gordura.', uso: '1 dose ao dia, de preferência pela manhã.' },
      { name: 'V-Coffee', desc: 'Café funcional com ativos para energia e bem-estar.', uso: '1 dose ao dia conforme o rótulo.' },
      { name: 'Brainstorm', desc: 'Café focado em foco e cognição (nootrópico).', uso: '1 dose antes de atividades que exijam concentração.' },
    ],
  },
  {
    cat: 'Aminoácidos & Performance',
    items: [
      { name: "EAA's (Aminoácidos Essenciais)", desc: 'Conjunto completo de aminoácidos essenciais para síntese proteica e recuperação.', uso: 'Durante ou após o treino.' },
      { name: 'Glutamina', desc: 'Aminoácido que auxilia recuperação e saúde intestinal e imunológica.', uso: 'Geralmente 5 g ao dia.' },
      { name: 'Arginina', desc: 'Precursor de óxido nítrico, ligado a vasodilatação e desempenho.', uso: 'Conforme o rótulo, antes do treino.' },
      { name: 'HMB', desc: 'Metabólito da leucina, associado à preservação de massa muscular.', uso: 'Conforme o rótulo.' },
    ],
  },
  {
    cat: 'Vitaminas, Minerais & Antioxidantes',
    items: [
      { name: 'Ômega 3', desc: 'Ácidos graxos EPA e DHA para saúde cardiovascular e cerebral.', uso: 'Conforme o rótulo, junto às refeições.' },
      { name: 'Colágeno Skin', desc: 'Peptídeos de colágeno para pele, cabelos e unhas, muitas vezes com vitamina C.', uso: '1 dose ao dia.' },
      { name: 'Colágeno Tipo 2', desc: 'Colágeno voltado à saúde de articulações e cartilagens.', uso: 'Conforme o rótulo.' },
      { name: 'Magnésio', desc: 'Mineral essencial para músculos, energia e sono.', uso: 'Conforme o rótulo.' },
      { name: 'Magnésio + Inositol', desc: 'Combinação voltada ao relaxamento, bem-estar e qualidade do sono.', uso: 'Geralmente à noite.' },
      { name: 'Vitamina D3', desc: 'Essencial para ossos, imunidade e saúde hormonal.', uso: 'Conforme o rótulo.' },
      { name: 'Complexo B', desc: 'Conjunto de vitaminas do complexo B para energia e metabolismo.', uso: 'Conforme o rótulo.' },
      { name: 'Multivitamínico', desc: 'Combinação de vitaminas e minerais para o dia a dia.', uso: '1 dose ao dia.' },
      { name: 'NAC', desc: 'N-acetilcisteína, precursor de glutationa, com ação antioxidante.', uso: 'Conforme o rótulo.' },
      { name: 'Cúrcuma', desc: 'Antioxidante e anti-inflamatório natural (curcumina).', uso: 'Conforme o rótulo.' },
      { name: 'Resveratrol', desc: 'Antioxidante associado à longevidade e saúde vascular.', uso: 'Conforme o rótulo.' },
      { name: 'CoQ10', desc: 'Coenzima Q10, ligada à energia celular e saúde cardiovascular.', uso: 'Conforme o rótulo.' },
      { name: 'Melatonina', desc: 'Auxilia a regulação do sono.', uso: 'Pouco antes de dormir, conforme o rótulo.' },
      { name: 'Própolis', desc: 'Extrato com ação antioxidante e de suporte à imunidade.', uso: 'Conforme o rótulo.' },
      { name: 'Probióticos', desc: 'Bactérias benéficas para a saúde intestinal.', uso: 'Conforme o rótulo.' },
      { name: 'Prebióticos', desc: 'Fibras que alimentam a microbiota intestinal.', uso: 'Conforme o rótulo.' },
    ],
  },
  {
    cat: 'Saúde Hormonal & Libido',
    items: [
      { name: 'Feno Grego', desc: 'Planta associada a vitalidade e suporte hormonal.', uso: 'Conforme o rótulo.' },
      { name: 'Tribulus', desc: 'Extrato ligado a disposição e saúde hormonal.', uso: 'Conforme o rótulo.' },
      { name: 'Maca Peruana', desc: 'Raiz andina associada a energia, disposição e libido.', uso: 'Conforme o rótulo.' },
      { name: 'Ginseng', desc: 'Adaptógeno ligado a energia, foco e bem-estar.', uso: 'Conforme o rótulo.' },
    ],
  },
  {
    cat: 'Endurance',
    items: [
      { name: 'Gel de Carboidrato', desc: 'Energia rápida para atividades de longa duração.', uso: 'Durante o exercício, conforme a necessidade.' },
      { name: 'Nitrato de Beterraba', desc: 'Auxilia vasodilatação e desempenho aeróbico.', uso: 'Antes do treino/prova.' },
      { name: 'Eletrólitos', desc: 'Reposição de sódio, potássio e magnésio perdidos no suor.', uso: 'Durante e após o exercício.' },
      { name: 'Isotônicos', desc: 'Bebidas para hidratação e reposição durante o esforço.', uso: 'Durante a atividade.' },
      { name: 'Cápsula de Sal', desc: 'Reposição prática de sódio em provas longas.', uso: 'Conforme o rótulo, durante o esforço.' },
      { name: 'Garrafas Térmicas', desc: 'Garrafas e squeezes para manter sua hidratação na temperatura ideal.', uso: 'Acessório para treino e dia a dia.' },
    ],
  },
  {
    cat: 'Zero Lactose',
    items: [
      { name: 'Doces Zero Lactose', desc: 'Opções de doces sem lactose para quem tem restrição.', uso: '' },
      { name: 'Chocolates Zero Lactose', desc: 'Chocolates sem lactose, incluindo versões fit.', uso: '' },
      { name: 'Barras Proteicas', desc: 'Barras práticas e ricas em proteína, sem lactose.', uso: '' },
      { name: 'Snacks Zero Lactose', desc: 'Salgadinhos e snacks saudáveis sem lactose.', uso: '' },
      { name: 'Bebidas Zero Lactose', desc: 'Bebidas e shakes sem lactose.', uso: '' },
      { name: 'Leites Vegetais (coco, castanha, amêndoa)', desc: 'Alternativas vegetais ao leite, sem lactose.', uso: '' },
      { name: 'Iogurtes Zero Lactose', desc: 'Iogurtes sem lactose, incluindo versões proteicas.', uso: '' },
    ],
  },
  {
    cat: 'Sem Glúten',
    items: [
      { name: 'Doces Sem Glúten', desc: 'Doces próprios para dieta sem glúten.', uso: '' },
      { name: 'Pães Integrais Sem Glúten', desc: 'Pães integrais livres de glúten.', uso: '' },
      { name: 'Comidas Congeladas', desc: 'Refeições congeladas práticas e sem glúten.', uso: '' },
      { name: 'Snacks Sem Glúten', desc: 'Snacks e salgadinhos sem glúten.', uso: '' },
      { name: 'Macarrão (a granel)', desc: 'Macarrões especiais vendidos a granel.', uso: '' },
      { name: 'Torradas (a granel)', desc: 'Torradas saudáveis a granel.', uso: '' },
      { name: 'Brownies (a granel)', desc: 'Brownies fit vendidos a granel.', uso: '' },
      { name: 'Molhos (a granel)', desc: 'Molhos especiais a granel.', uso: '' },
    ],
  },
  {
    cat: 'Empório & A Granel',
    items: [
      { name: 'Temperos', desc: 'Temperos e especiarias selecionados, vendidos a granel.', uso: '' },
      { name: 'Castanhas', desc: 'Castanhas frescas a granel.', uso: '' },
      { name: 'Amêndoas', desc: 'Amêndoas selecionadas a granel.', uso: '' },
      { name: 'Chás', desc: 'Variedade de chás e ervas a granel.', uso: '' },
      { name: 'Snacks', desc: 'Snacks saudáveis a granel.', uso: '' },
      { name: 'Drageados Zero Açúcar', desc: 'Drageados e confeitos sem açúcar.', uso: '' },
      { name: 'Chocolates', desc: 'Chocolates especiais a granel.', uso: '' },
      { name: 'Farinhas', desc: 'Farinhas funcionais e integrais a granel.', uso: '' },
      { name: 'Granola', desc: 'Granolas artesanais a granel.', uso: '' },
      { name: 'Aveia', desc: 'Aveia em flocos e farelo a granel.', uso: '' },
      { name: 'Frutas Liofilizadas', desc: 'Frutas liofilizadas crocantes e naturais.', uso: '' },
      { name: 'Azeite de Avocado', desc: 'Azeite de abacate premium.', uso: '' },
      { name: 'Azeite de Trufas Negras', desc: 'Azeite aromatizado com trufas negras.', uso: '' },
      { name: 'Mel de Trufas Negras', desc: 'Mel especial com trufas negras.', uso: '' },
      { name: 'Mel Natural', desc: 'Mel puro e natural.', uso: '' },
      { name: 'Manteiga Ghee', desc: 'Manteiga clarificada, sem lactose.', uso: '' },
      { name: 'Ghee de Trufas Negras', desc: 'Ghee aromatizado com trufas negras.', uso: '' },
      { name: 'Óleo de Coco', desc: 'Óleo de coco extravirgem.', uso: '' },
      { name: 'Vinagre de Maçã', desc: 'Vinagre de maçã natural.', uso: '' },
      { name: 'Geleia de Pimenta', desc: 'Geleia artesanal de pimenta.', uso: '' },
      { name: 'Geleia de Trufas Negras', desc: 'Geleia gourmet de trufas negras.', uso: '' },
      { name: 'Geleia de Alho Negro Trufado', desc: 'Geleia gourmet de alho negro com trufas.', uso: '' },
      { name: 'Sal Integral', desc: 'Sal integral natural.', uso: '' },
      { name: 'Sal Rosa', desc: 'Sal rosa do Himalaia.', uso: '' },
      { name: 'Palmitos', desc: 'Palmitos selecionados.', uso: '' },
      { name: 'Azeitonas', desc: 'Azeitonas e conservas a granel.', uso: '' },
    ],
  },
]

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [onClose])
  if (!product) return null
  return (
    <div className="pm-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="pm" onClick={(e) => e.stopPropagation()}>
        <button className="pm__close" onClick={onClose} aria-label="Fechar">×</button>
        <div className="pm__media" aria-hidden="true">
          <span className="pm__initial">{product.name.charAt(0)}</span>
        </div>
        <div className="pm__body">
          <p className="pm__cat">{product.cat}</p>
          <h3 className="pm__title">{product.name}</h3>
          <p className="pm__desc">{product.desc}</p>
          {product.uso && (
            <div className="pm__uso">
              <span className="pm__uso-label">Modo de uso sugerido</span>
              <p>{product.uso}</p>
            </div>
          )}
          <a className="pm__cta" href={produtoWhats(product.name)} target="_blank" rel="noreferrer">
            <IconWhatsApp size={18} /> Perguntar no WhatsApp
          </a>
          <p className="pm__note">As informações são gerais. Para orientação individual, fale com nossa equipe.</p>
        </div>
      </div>
    </div>
  )
}

function ProductsPage() {
  const [selected, setSelected] = useState(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const goHome = () => { window.location.href = '/' }
  return (
    <div className="produtos">
      <header className="nav nav--solid">
        <div className="nav__inner">
          <a href="/" className="nav__logo-link" aria-label="Voltar ao início" onClick={(e) => { e.preventDefault(); goHome() }}>
            <img src={logo} alt="Djiri Suplementos" className="nav__logo" />
          </a>
          <button className="policy__back" onClick={goHome}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Voltar ao site
          </button>
        </div>
      </header>

      <section className="produtos__hero">
        <p className="produtos__eyebrow">NOSSO CATÁLOGO</p>
        <h1 className="produtos__title">Produtos</h1>
        <p className="produtos__sub">Suplementos, empório e produtos a granel. Clique em um item para saber mais — ou fale com a gente no WhatsApp.</p>
      </section>

      <div className="produtos__body">
        {productCatalog.map((group) => (
          <section className="prodcat" key={group.cat}>
            <h2 className="prodcat__title">{group.cat}</h2>
            <div className="prodgrid">
              {group.items.map((item) => (
                <button
                  key={item.name}
                  className="prodcard"
                  onClick={() => setSelected({ ...item, cat: group.cat })}
                >
                  <div className="prodcard__media" aria-hidden="true">
                    <span className="prodcard__initial">{item.name.charAt(0)}</span>
                  </div>
                  <div className="prodcard__foot">
                    <span className="prodcard__name">{item.name}</span>
                    <span className="prodcard__more">Ver mais +</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
      <SiteFooter setPage={() => {}} />
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
    gsap.registerPlugin(ScrollTrigger)
    curtainDone.current = true
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      // ── Scroll reveals (seções abaixo do hero)
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
    }, rootRef)

    // ── Partners marquee (anime.js carregado só no cliente)
    let marquee
    import('animejs/lib/anime.es.js').then(({ default: anime }) => {
      marquee = anime({
        targets: '.partners__track',
        translateX: ['0%', '-50%'],
        duration: 38000,
        easing: 'linear',
        loop: true,
      })
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      if (marquee) marquee.pause()
    }
  }, [])

  if (page === 'produtos') {
    return <ProductsPage />
  }

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

      {/* ── NAV ────────────────────────────────────────────── */}
      <header className="nav">
        <div className="nav__inner">
          <a href="/" className="nav__logo-link" aria-label="Djiri Suplementos — início" onClick={() => { window.location.href = '/' }}>
            <img src={logo} alt="Djiri Suplementos" className="nav__logo" />
          </a>

          <nav className="nav__links" aria-label="Menu principal">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.page ? '#produtos' : item.href}
                onClick={(e) => { e.preventDefault(); item.page ? (setPage(item.page), window.scrollTo(0, 0)) : scrollTo(item.href) }}
              >{item.label}</a>
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
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.page ? '#produtos' : item.href}
              onClick={(e) => { e.preventDefault(); closeMobile(); item.page ? (setPage(item.page), window.scrollTo(0, 0)) : scrollTo(item.href, 360) }}
            >{item.label}</a>
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
              VIVA O DESEJO DE EVOLUIR
              <span className="hero__kicker-rule" />
            </p>

            <h1 className="hero__title hero__title--story">
              <span className="hero__title-clip">
                <span className="hero__title-word">Mais que alimentação.</span>
              </span>
              <span className="hero__title-clip hero__title-clip--gold">
                <span className="hero__title-word">Um novo estilo de vida.</span>
              </span>
              <span className="sr-only"> — Djiri Suplementos, loja de suplementos em Jaú/SP</span>
            </h1>

            <div className="hero__foot">
              <p className="hero__subtitle">
                O que te move também nos inspira.
              </p>
              <div className="hero__actions">
                <a href={comprarHref} target="_blank" rel="noreferrer" className="hero__action btn-primary">
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
        <section id="historia" className="s-block s-anchor benefits-section">
          <div className="s-inner">
            <div className="s-head js-reveal">
              <p className="s-tag">NOSSA HISTÓRIA</p>
              <h2 className="s-title">Saúde, confiança e cuidado desde 2017</h2>
              <div className="historia-text">
                {historiaParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
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
                  <img src={src} alt={`Djiri Suplementos — foto ${i + 1}`} width="1000" height="1333" loading="lazy" decoding="async" />
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
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Av.+Antonio+Prado+Lyra+357+Jardim+Diamante+Jau+SP&z=17&output=embed"
                />
                <div className="store-card">
                  <img src={lojaNova4} alt="" className="store-card__img" aria-hidden="true" loading="lazy" decoding="async" />
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
