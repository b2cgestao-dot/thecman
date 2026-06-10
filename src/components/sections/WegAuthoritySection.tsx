import './WegAuthoritySection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faGears, faBolt, faStore, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

const items = [
  {
    num: '01',
    icon: faFan,
    title: 'Autorizada WEG Motores',
    desc: 'Manutenção e suporte com credencial oficial para motores elétricos.',
  },
  {
    num: '02',
    icon: faGears,
    title: 'Redutores / Cestari',
    desc: 'Redutores e motorredutores com respaldo técnico da marca.',
  },
  {
    num: '03',
    icon: faBolt,
    title: 'Máquinas / Energia',
    desc: 'Máquinas elétricas e sistemas de energia com autorização WEG.',
  },
  {
    num: '04',
    icon: faStore,
    title: 'Revenda com loja própria',
    desc: 'Peças e equipamentos originais com estoque local e pronta entrega.',
  },
] as const

export function WegAuthoritySection() {
  return (
    <section id="revenda-weg" className="weg-authority section-padding bg-[#F5F7FA]">
      <div className="weg-card">

        {/* Cabeçalho: texto + selo */}
        <div className="weg-head">
          <div className="weg-head__text">
            <span className="weg-eyebrow">— Autoridade técnica</span>
            <h2 className="weg-title">
              A segurança de contar com uma <span>autorizada WEG</span>
            </h2>
            <p className="weg-lead">
              Suporte técnico, manutenção e fornecimento com o padrão de uma
              autorizada oficial — para empresas que precisam de confiança e
              agilidade.
            </p>
          </div>

          <div className="weg-seal" aria-label="Selo de Qualidade WEG">
            <img
              src="/selo-weg.png"
              alt="Selo WEG Qualidade"
              className="weg-seal__img"
              loading="lazy"
              decoding="async"
            />
            <span className="weg-seal__caption">Selo de qualidade</span>
          </div>
        </div>

        {/* Strip numerada */}
        <div className="weg-grid">
          {items.map((it) => (
            <article className="weg-item" key={it.num}>
              <div className="weg-item__top">
                <span className="weg-item__num">{it.num}</span>
                <FontAwesomeIcon
                  icon={it.icon}
                  className="weg-item__icon"
                  aria-hidden="true"
                />
              </div>
              <h3 className="weg-item__title">{it.title}</h3>
              <p className="weg-item__desc">{it.desc}</p>
            </article>
          ))}
        </div>

        {/* Faixa de destaque */}
        <div className="weg-highlight">
          <FontAwesomeIcon icon={faShieldHalved} aria-hidden="true" />
          <p>
            Suporte, manutenção e fornecimento com o padrão de uma autorizada WEG.{' '}
            <strong>Única autorizada WEG em Salvador.</strong>
          </p>
        </div>

      </div>
    </section>
  )
}
