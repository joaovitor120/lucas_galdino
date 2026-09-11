'use client';

import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { site } from '@/data/site';
import { track } from '@/lib/analytics';
import { waMessages, whatsappHref } from '@/lib/whatsapp';
import { ArrowIcon, KitIcon, MailIcon, WhatsAppIcon, delay } from './ui';

type Fields = {
  nome: string;
  empresa: string;
  cargo: string;
  telefone: string;
  email: string;
  cidade: string;
  data: string;
  formato: string;
  participantes: string;
  publico: string;
  mensagem: string;
  /** honeypot anti-spam — humanos nunca preenchem */
  site: string;
};

const EMPTY: Fields = {
  nome: '',
  empresa: '',
  cargo: '',
  telefone: '',
  email: '',
  cidade: '',
  data: '',
  formato: 'A definir',
  participantes: '',
  publico: '',
  mensagem: '',
  site: '',
};

const STORE = 'lg_proposta_v1';
const REQUIRED_1: (keyof Fields)[] = ['nome', 'empresa', 'telefone', 'email'];
const REQUIRED_2: (keyof Fields)[] = ['cidade'];

function maskPhone(v: string): string {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  const cut = d.length > 10 ? 7 : 6;
  if (d.length <= cut) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, cut)}-${d.slice(cut)}`;
}

function isValid(name: keyof Fields, value: string): boolean {
  const v = value.trim();
  if (REQUIRED_1.includes(name) || REQUIRED_2.includes(name)) {
    if (!v) return false;
  }
  if (name === 'email' && v) return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  if (name === 'telefone' && v) return v.replace(/\D/g, '').length >= 10;
  return true;
}

export default function ProposalForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const started = useRef(false);

  /* mantém os dados enquanto o visitante navega entre as etapas ou volta à página */
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORE);
      if (raw) setValues({ ...EMPTY, ...(JSON.parse(raw) as Partial<Fields>), site: '' });
    } catch {
      /* sessionStorage pode estar bloqueado */
    }
  }, []);

  const set = (name: keyof Fields, value: string) => {
    const v = name === 'telefone' ? maskPhone(value) : value;
    setValues((prev) => {
      const next = { ...prev, [name]: v };
      try {
        const { site: _hp, ...persist } = next;
        void _hp;
        sessionStorage.setItem(STORE, JSON.stringify(persist));
      } catch {
        /* ignora */
      }
      return next;
    });
    if (errors[name]) setErrors((e) => ({ ...e, [name]: !isValid(name, v) }));
    if (!started.current) {
      started.current = true;
      track('proposal_form_start');
    }
  };

  const validateStep = (s: 1 | 2): boolean => {
    const names = s === 1 ? REQUIRED_1 : REQUIRED_2;
    const next: Partial<Record<keyof Fields, boolean>> = {};
    let ok = true;
    names.forEach((n) => {
      const bad = !isValid(n, values[n]);
      next[n] = bad;
      if (bad) ok = false;
    });
    setErrors((e) => ({ ...e, ...next }));
    if (!ok) {
      const first = names.find((n) => next[n]);
      if (first) document.getElementById(`f-${first}`)?.focus();
    }
    return ok;
  };

  const compose = (): string => {
    const L: string[] = [
      'Olá, Lucas! Conheci seu trabalho pelo site e gostaria de solicitar uma proposta de palestra.',
      '',
      `Nome: ${values.nome}`,
      `Empresa: ${values.empresa}`,
    ];
    if (values.cargo) L.push(`Cargo: ${values.cargo}`);
    L.push(`Telefone: ${values.telefone}`);
    L.push(`E-mail: ${values.email}`);
    L.push(`Cidade/UF: ${values.cidade}`);
    if (values.data) L.push(`Data prevista: ${values.data}`);
    if (values.formato) L.push(`Formato: ${values.formato}`);
    if (values.participantes) L.push(`Participantes: ${values.participantes}`);
    if (values.publico) L.push(`Perfil do público: ${values.publico}`);
    if (values.mensagem) L.push(`Objetivo do evento: ${values.mensagem}`);
    return L.join('\n');
  };

  /**
   * O envio é um link de verdade, recalculado a cada digitação.
   * Um clique do usuário em <a> nunca é bloqueado por bloqueador de pop-up
   * nem por sandbox de iframe — window.open seria.
   */
  const waHref = whatsappHref(compose());
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Solicitação de proposta${values.empresa ? ` — ${values.empresa}` : ''}`
  )}&body=${encodeURIComponent(compose())}`;

  const guard =
    (channel: 'whatsapp' | 'email') => (e: MouseEvent<HTMLAnchorElement>) => {
      if (!validateStep(1)) {
        e.preventDefault();
        setStep(1);
        return;
      }
      if (!validateStep(2)) {
        e.preventDefault();
        return;
      }
      if (values.site) {
        e.preventDefault(); /* honeypot */
        return;
      }
      track('proposal_form_submit', { canal: channel });
      window.setTimeout(() => setStep(3), 120);
    };

  const field = (
    name: keyof Fields,
    label: string,
    opts: {
      type?: string;
      required?: boolean;
      placeholder?: string;
      autoComplete?: string;
      inputMode?: 'text' | 'tel' | 'email' | 'numeric';
      full?: boolean;
      error?: string;
      textarea?: boolean;
    } = {}
  ) => (
    <div
      className={`field${opts.full ? ' field--full' : ''}${errors[name] ? ' has-error' : ''}`}
      key={name}
    >
      <label htmlFor={`f-${name}`}>
        {label} {opts.required ? <span className="req">*</span> : null}
      </label>
      {opts.textarea ? (
        <textarea
          id={`f-${name}`}
          name={name}
          placeholder={opts.placeholder}
          value={values[name]}
          onChange={(e) => set(name, e.target.value)}
          onBlur={() => setErrors((er) => ({ ...er, [name]: !isValid(name, values[name]) }))}
        />
      ) : (
        <input
          id={`f-${name}`}
          name={name}
          type={opts.type ?? 'text'}
          inputMode={opts.inputMode}
          autoComplete={opts.autoComplete}
          placeholder={opts.placeholder}
          required={opts.required}
          value={values[name]}
          onChange={(e) => set(name, e.target.value)}
          onBlur={() => setErrors((er) => ({ ...er, [name]: !isValid(name, values[name]) }))}
        />
      )}
      {opts.error ? (
        <span className="err" role="alert">
          {opts.error}
        </span>
      ) : null}
    </div>
  );

  return (
    <section className="form s-pad" id="proposta" aria-labelledby="form-title">
      <div className="wrap">
        <div className="form__grid">
          <div>
            <p className="eyebrow" data-reveal>
              <span>10 — Solicitar proposta</span>
            </p>
            <h2 className="h2" id="form-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '15ch' }}>
              Vamos falar sobre o seu evento.
            </h2>
            <p className="lead" data-reveal style={{ ...delay(110), marginTop: 22, maxWidth: '38ch' }}>
              Poucas informações bastam para começar. O retorno é feito pelo canal que você preferir.
            </p>

            <div className="contact-list" data-reveal style={delay(160)}>
              <a
                href={whatsappHref(waMessages.geral)}
                target="_blank"
                rel="noopener"
                data-track="whatsapp_click"
              >
                <WhatsAppIcon size={20} />
                <span>
                  <b>WhatsApp · {site.phoneDisplay}</b>
                  <span>Resposta direta com Lucas</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent('Solicitação de proposta para palestra')}`}
                data-track="footer_contact_click"
              >
                <MailIcon />
                <span>
                  <b>{site.email}</b>
                  <span>Para propostas e materiais</span>
                </span>
              </a>
              <a href={site.mediaKit} target="_blank" rel="noopener" data-track="media_kit_download">
                <KitIcon />
                <span>
                  <b>Mídia kit</b>
                  <span>Bio, temas e informações técnicas</span>
                </span>
              </a>
            </div>
          </div>

          <div className="form__card" data-reveal style={delay(120)}>
            <form
              id="proposta-form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (validateStep(1) && validateStep(2) && !values.site) {
                  window.open(waHref, '_blank', 'noopener');
                  track('proposal_form_submit', { canal: 'whatsapp' });
                  setStep(3);
                }
              }}
            >
              {step < 3 ? (
                <div className="form__progress" id="form-progress">
                  <span className="n">
                    Etapa <span>{step}</span> / 2
                  </span>
                  <span className="bar">
                    <i style={{ width: step === 1 ? '50%' : '100%' }} />
                  </span>
                </div>
              ) : null}

              <fieldset className={step === 1 ? 'form__step is-active' : 'form__step'}>
                <legend className="visually-hidden">Dados de contato</legend>
                <div className="fields">
                  {field('nome', 'Nome', {
                    required: true,
                    full: true,
                    autoComplete: 'name',
                    placeholder: 'Seu nome completo',
                    error: 'Informe seu nome.',
                  })}
                  {field('empresa', 'Empresa', {
                    required: true,
                    autoComplete: 'organization',
                    placeholder: 'Nome da empresa',
                    error: 'Informe a empresa.',
                  })}
                  {field('cargo', 'Cargo', {
                    autoComplete: 'organization-title',
                    placeholder: 'Seu cargo',
                  })}
                  {field('telefone', 'WhatsApp', {
                    required: true,
                    type: 'tel',
                    inputMode: 'tel',
                    autoComplete: 'tel',
                    placeholder: '(27) 90000-0000',
                    error: 'Informe um telefone válido.',
                  })}
                  {field('email', 'E-mail', {
                    required: true,
                    type: 'email',
                    inputMode: 'email',
                    autoComplete: 'email',
                    placeholder: 'voce@empresa.com',
                    error: 'Informe um e-mail válido.',
                  })}
                </div>
                <div className="form__actions">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      if (validateStep(1)) setStep(2);
                    }}
                  >
                    Continuar
                    <ArrowIcon />
                  </button>
                </div>
                <p className="form__alt">
                  Prefere falar direto?{' '}
                  <a
                    className="link-arrow"
                    style={{ fontSize: '.875rem' }}
                    href={whatsappHref(waMessages.geral)}
                    target="_blank"
                    rel="noopener"
                    data-track="whatsapp_click"
                  >
                    Chamar no WhatsApp
                  </a>
                </p>
              </fieldset>

              <fieldset className={step === 2 ? 'form__step is-active' : 'form__step'}>
                <legend className="visually-hidden">Sobre o evento</legend>
                <div className="fields">
                  {field('cidade', 'Cidade e estado', {
                    required: true,
                    placeholder: 'Ex.: Vitória/ES',
                    error: 'Informe cidade e estado.',
                  })}
                  {field('data', 'Data prevista', { placeholder: 'Ex.: Março/2027' })}
                  <div className="field">
                    <label htmlFor="f-formato">Formato</label>
                    <select
                      id="f-formato"
                      name="formato"
                      value={values.formato}
                      onChange={(e) => set('formato', e.target.value)}
                    >
                      <option value="A definir">A definir</option>
                      <option value="Presencial">Presencial</option>
                      <option value="Online">Online</option>
                    </select>
                  </div>
                  {field('participantes', 'Participantes', {
                    inputMode: 'numeric',
                    placeholder: 'Ex.: 200 pessoas',
                  })}
                  {field('publico', 'Perfil do público', {
                    full: true,
                    placeholder: 'Ex.: operacional, lideranças, misto',
                  })}
                  {field('mensagem', 'Objetivo do evento', {
                    full: true,
                    textarea: true,
                    placeholder:
                      'O que a empresa espera com a palestra? Contexto, desafios, tipo de evento (SIPAT, convenção, congresso)…',
                  })}
                </div>

                <div style={{ position: 'absolute', left: -9999 }} aria-hidden="true">
                  <label htmlFor="f-site">Não preencha</label>
                  <input
                    id="f-site"
                    name="site"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.site}
                    onChange={(e) => setValues((v) => ({ ...v, site: e.target.value }))}
                  />
                </div>

                <div className="form__actions">
                  <a
                    className="btn"
                    href={waHref}
                    target="_blank"
                    rel="noopener"
                    onClick={guard('whatsapp')}
                  >
                    Enviar pelo WhatsApp
                    <ArrowIcon />
                  </a>
                  <a className="btn btn--ghost" href={mailHref} onClick={guard('email')}>
                    Enviar por e-mail
                  </a>
                  <button type="button" className="btn btn--ghost" onClick={() => setStep(1)}>
                    Voltar
                  </button>
                </div>
              </fieldset>

              <div className={step === 3 ? 'form__step form__done is-active' : 'form__step form__done'}>
                <div className="ok" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m4 12.5 5 5L20 6.5" />
                  </svg>
                </div>
                <h3 className="h3">Mensagem pronta.</h3>
                <p className="muted" style={{ marginTop: 12, maxWidth: '40ch', marginInline: 'auto' }}>
                  Abrimos o WhatsApp com todos os dados do seu evento já escritos. Se a janela não
                  abriu, é só usar o botão abaixo — o retorno costuma acontecer no mesmo dia útil.
                </p>
                <div
                  style={{
                    marginTop: 24,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 12,
                    justifyContent: 'center',
                  }}
                >
                  <a className="btn btn--sm" href={waHref} target="_blank" rel="noopener">
                    Abrir a conversa no WhatsApp
                  </a>
                  <a className="btn btn--ghost btn--sm" href={mailHref}>
                    Abrir por e-mail
                  </a>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={() => setStep(1)}>
                    Revisar os dados
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
