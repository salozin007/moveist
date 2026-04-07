/* ===================================================
   ASDP Móveis — script.js
=================================================== */

/* ── 0. DADOS DE MÓVEIS POR AMBIENTE ─────────────── */
const mobiliasData = {

  cozinha: [
    { nome: 'Armário Cozinha',    desc: 'Portas em MDF lacado, perfil slim e dobradiças silenciosas.',        preco: 'R$ 1.890',  tag: 'Armazenamento',         img: 'imagem/coz3.jpeg' },
    { nome: 'Armário Cozinha',  desc: 'Com gaveteiro full extension e espaço para eletrodomésticos.',       preco: 'R$ 2.450',  tag: 'Base',                    img: 'imagem/coz1.jpeg' },
    { nome: 'Armário Cozinha',    desc: 'Bancada em porcelanato com nichos abertos e fechados.',              preco: 'R$ 4.200',  tag: 'Ilha',                  img: 'imagem/coz2.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Coluna com cestos organizadores e prateleiras ajustáveis.',          preco: 'R$ 2.100',  tag: 'Armazenamento',      img: 'imagem/coz4.jpeg' },
    { nome: 'Armário Cozinha', desc: 'Revestimento em ripas de MDF com suportes e nichos.',               preco: 'R$ 980',    tag: 'Decoração',                 img: 'imagem/coz5.jpeg' },
    { nome: 'Armário Cozinha',      desc: 'Portas de vidro com iluminação LED interna integrada.',              preco: 'R$ 3.100',  tag: 'Destaque',            img: 'imagem/coz6.jpeg' },
    { nome: 'Armário Cozinha',  desc: 'Mesa em tampo frisado com suporte de parede fixo.',                  preco: 'R$ 1.650',  tag: 'Jantar',                  img: 'imagem/coz7.jpeg' },
    { nome: 'Armário Cozinha',  desc: 'Nicho sob medida para forno com tampo em aço escovado.',             preco: 'R$ 880',    tag: 'Eletros',                 img: 'imagem/coz8.jpeg' },
    { nome: 'Armário Cozinha',           desc: 'Cuba embutida com armário inferior e torneira inclusa.',             preco: 'R$ 1.980',  tag: 'Pia',            img: 'imagem/coz9.jpeg' },
    { nome: 'Armário Cozinha',        desc: 'Nicho suspenso com porta magnética e porta-temperos.',               preco: 'R$ 420',    tag: 'Organização',       img: '' },
    { nome: 'Armário Cozinha',            desc: 'Compartimento climatizado para até 18 garrafas.',                    preco: 'R$ 2.800',   tag: 'Adega',        img: '' },
    { nome: 'Armário Cozinha',         desc: 'Gavetas com divisórias internas em MDF e trilho soft close.',        preco: 'R$ 760',    tag: 'Organização',      img: '' },
    { nome: 'Armário Cozinha',        desc: 'Espaço para vassouras e materiais de limpeza embutido.',             preco: 'R$ 1.290',    tag: 'Armazenamento',   img: '' },
    { nome: 'Armário Cozinha', desc: 'Prateleiras em madeira natural sobre o balcão.',                     preco: 'R$ 540',   tag: 'Decoração',                 img: '' },
    { nome: 'Armário Cozinha',              desc: 'Tampo contínuo em granito com duas frentes de trabalho.',            preco: 'R$ 3.600',   tag: 'Bancada',    img: '' },
    { nome: 'Armário Cozinha',   desc: 'Suporte embutido para TV com fiação oculta e nicho.',               preco: 'R$ 1.100', tag: 'Entretenimento',           img: '' },
    { nome: 'Armário Cozinha',          desc: 'Espaço para lava-louças embutido com gabinete inferior.',            preco: 'R$ 2.200', tag: 'Lavabo',           img: '' },
    { nome: 'Armário Cozinha',    desc: 'Suporte de aço inox com iluminação direta para bancada.',            preco: 'R$ 390',   tag: 'Iluminação',             img: '' },
    { nome: 'Armário Cozinha', desc: 'Solução de canto com prateleiras giratórias internas.',              preco: 'R$ 1.480', tag: 'Canto',                     img: '' },
    { nome: 'Armário Cozinha',        desc: 'Nicho planejado para frigobar com arremate em MDF.',                 preco: 'R$ 720',   tag: 'Eletros',            img: '' },
  ],

  sala: [
    { nome: 'Rack para TV 75"',          desc: 'Painel suspenso com tampo flutuante e nichos LED.',                  preco: 'R$ 2.900', tag: 'TV & Mídia',    img: 'imagem/sala2.jpeg' },
    { nome: 'Painel Ripado Sala',        desc: 'Parede ripada em MDF com iluminação embutida warm white.',           preco: 'R$ 1.800', tag: 'Decoração',     img: 'imagem/sala1.jpeg' },
    { nome: 'Estante de Sala Modular',   desc: 'Módulos combináveis com portas, nichos e prateleiras.',              preco: 'R$ 3.400', tag: 'Estante',       img: 'imagem/sala3.jpeg' },
    { nome: 'Aparador Planejado',        desc: 'Buffet sob medida com tampo em carvalho natural.',                   preco: 'R$ 1.950', tag: 'Aparador',      img: 'imagem/sala4.jpeg' },
    { nome: 'Adega de Embutir',          desc: 'Painel com adega climatizada e gaveteiro inferior.',                 preco: 'R$ 4.100', tag: 'Adega',         img: 'imagem/sala5.jpeg' },
    { nome: 'Sofá Planejado em L',       desc: 'Estrutura fixa de madeira com estofado sob encomenda.',              preco: 'R$ 5.800', tag: 'Sofá',          img: 'imagem/sala6.jpeg' },
    { nome: 'Mesa de Centro Suspensa',   desc: 'Tampo em vidro temperado com base em madeira natural.',              preco: 'R$ 1.200', tag: 'Mesa',          img: 'imagem/sala7.jpeg' },
    { nome: 'Painel Home Theater',       desc: 'Conjunto com rack, colunas laterais e iluminação LED.',              preco: 'R$ 5.200', tag: 'Home Theater',  img: 'imagem/sala8.jpeg' },
    { nome: 'Cristaleira Sala',          desc: 'Armário de vidro com espelho interno e LED cor ajustável.',          preco: 'R$ 2.700', tag: 'Cristaleira',   img: 'imagem/sala9.jpeg' },
    { nome: 'Nicho Decorativo Modular',  desc: 'Conjunto de nichos geométricos pintados em fosco.',                  preco: 'R$ 680',   tag: 'Nichos',        img: 'imagem/sala10.jpeg' },
    { nome: 'Prateleiras Flutuantes',    desc: 'Série de prateleiras em MDF branco com suporte invisível.',          preco: 'R$ 490',   tag: 'Prateleiras',   img: 'imagem/sala11.jpeg' },
    { nome: 'Console de Entrada',        desc: 'Bancada estreita com espelho e porta-chaves embutido.',              preco: 'R$ 1.100', tag: 'Hall',          img: '' },
    { nome: 'Divisória Ripada',          desc: 'Painel divisório ripado para separar sala e jantar.',                preco: 'R$ 2.300', tag: 'Divisória',     img: '' },
    { nome: 'Bancada Suspensa Lateral',  desc: 'Mesa de apoio suspensa com prateleira inferior.',                    preco: 'R$ 870',   tag: 'Bancada',       img: '' },
    { nome: 'Armário de Sala Fechado',   desc: 'Armazenamento discreto com portas em laca fosca.',                   preco: 'R$ 2.100', tag: 'Armazenamento', img: '' },
    { nome: 'Poltrona com Baú',          desc: 'Estrutura embutida com assento estofado e espaço interno.',          preco: 'R$ 1.600', tag: 'Assento',       img: '' },
    { nome: 'Painel Quadros Embutido',   desc: 'Área dedicada para quadros com iluminação direcional.',              preco: 'R$ 940',   tag: 'Arte',          img: '' },
    { nome: 'Mesa de Jantar sob Medida', desc: 'Tampo em madeira maciça com até 8 lugares.',                         preco: 'R$ 3.800', tag: 'Jantar',        img: '' },
    { nome: 'Bar Embutido',              desc: 'Módulo de bar com espelho, nichos e gaveta frigobar.',               preco: 'R$ 3.200', tag: 'Bar',           img: '' },
    { nome: 'Lareira Planejada',         desc: 'Painel de lareira elétrica embutido com madeira ripada.',            preco: 'R$ 4.500', tag: 'Lareira',       img: '' },
  ],

  quarto: [
    { nome: 'Guarda-Roupa 6 Portas',    desc: 'Cabideiro duplo, gaveteiro e espelho interno completo.',             preco: 'R$ 4.800', tag: 'Guarda-Roupa', img: 'imagem/qua1.jpeg' },
    { nome: 'Cabeceira Estofada',        desc: 'Cabeceira capitonê em veludo com iluminação LED embutida.',          preco: 'R$ 1.600', tag: 'Cama',         img: 'imagem/qua2.jpeg' },
    { nome: 'Cômoda 6 Gavetas',          desc: 'Cômoda sob medida com espelho fixo e tampo em granito.',             preco: 'R$ 2.100', tag: 'Cômoda',       img: 'imagem/qua3.jpeg' },
    { nome: 'Criado-Mudo Flutuante',     desc: 'Par de criados-mudos suspensos com led de ambiente.',                preco: 'R$ 980',   tag: 'Criado-Mudo',  img: 'imagem/qua4.jpeg' },
    { nome: 'Closet Planejado',          desc: 'Armário em U com sapateira, cabideiro e gaveteiro.',                 preco: 'R$ 7.500', tag: 'Closet',       img: 'imagem/qua5.jpeg' },
    { nome: 'Penteadeira com Espelho',   desc: 'Mesa de maquiagem com bancada iluminada e gaveteiro.',               preco: 'R$ 2.300', tag: 'Penteadeira',  img: 'imagem/qua6.jpeg' },
    { nome: 'Painel de TV Quarto',       desc: 'Painel ripado com nicho para TV, prateleiras e LED.',                preco: 'R$ 2.200', tag: 'TV & Mídia',   img: 'imagem/qua7.jpeg' },
    { nome: 'Sapateira Embutida',        desc: 'Módulo com calçadeira, espelho e 24 pares de calçados.',             preco: 'R$ 1.450', tag: 'Sapateira',    img: 'imagem/qua8.jpeg' },
    { nome: 'Bancada de Estudos',        desc: 'Mesa fixada na parede com prateleiras superiores.',                  preco: 'R$ 1.100', tag: 'Estudo',       img: 'imagem/qua9.jpeg' },
    { nome: 'Nicho de Cabeceira',        desc: 'Conjunto de nichos simétricos ao redor da cama.',                   preco: 'R$ 780',   tag: 'Nichos',       img: 'imagem/qua10.jpeg' },
    { nome: 'Baú de Pé de Cama',         desc: 'Baú estofado com estrutura de madeira e dobradiça suave.',           preco: 'R$ 920',   tag: 'Baú',          img: 'imagem/qua11.jpeg' },
    { nome: 'Espelho de Corpo Inteiro',  desc: 'Espelho com moldura em MDF e suporte de encosto.',                   preco: 'R$ 640',   tag: 'Espelho',      img: 'imagem/qua12.jpeg' },
    { nome: 'Armário de Embutir',        desc: 'Armário no vão da parede com portas de correr em espelho.',          preco: 'R$ 3.900', tag: 'Embutido',     img: 'imagem/qua13.jpeg' },
    { nome: 'Gaveteiro de Closet',       desc: 'Módulo de gavetas em laca brilhante para closet.',                   preco: 'R$ 1.200', tag: 'Closet',       img: 'imagem/qua14.jpeg' },
    { nome: 'Prateleiras de Quarto',     desc: 'Série de prateleiras flutuantes para livros e objetos.',             preco: 'R$ 460',   tag: 'Prateleiras',  img: 'imagem/qua15.jpeg' },
    { nome: 'Painel Ripado Quarto',      desc: 'Revestimento ripado atrás da cama com LED integrado.',               preco: 'R$ 1.400', tag: 'Decoração',    img: 'imagem/qua16.jpeg' },
    { nome: 'Divisória de Quarto',       desc: 'Painel perfurado para separar quarto e closet.',                     preco: 'R$ 1.700', tag: 'Divisória',    img: 'imagem/qua17.jpeg' },
    { nome: 'Rack Suspenso',             desc: 'Módulo de rack suspenso para objetos decorativos.',                  preco: 'R$ 590',   tag: 'Rack',         img: 'imagem/qua18.jpeg' },
    { nome: 'Poltrona de Quarto',        desc: 'Poltrona planejada no canto com prateleira lateral.',                preco: 'R$ 1.800', tag: 'Assento',      img: 'imagem/qua19.jpeg' },
    { nome: 'Guarda-Roupa Infantil',     desc: 'Módulo colorido com cabideiro baixo e nichos lúdicos.',              preco: 'R$ 2.900', tag: 'Infantil',     img: 'imagem/qua20.jpeg' },
  ],

  homeoffice: [
    { nome: 'Mesa de Trabalho em L',        desc: 'Bancada em L com passagem de cabos e suporte de monitor.',      preco: 'R$ 2.100', tag: 'Mesa',          img: 'imagem/hom1.jpeg' },
    { nome: 'Estante de Livros',            desc: 'Estante aberta com 5 prateleiras em MDF carvalho.',             preco: 'R$ 1.400', tag: 'Estante',       img: 'imagem/hom2.jpeg' },
    { nome: 'Armário Fechado de Escritório',desc: 'Armário alto com chave para documentos e materiais.',           preco: 'R$ 2.500', tag: 'Armazenamento', img: 'imagem/hom3.jpeg' },
    { nome: 'Painel Perfurado Organizador', desc: 'Painel pegboard em MDF com acessórios inclusos.',               preco: 'R$ 490',   tag: 'Organização',   img: 'imagem/hom4.jpeg' },
    { nome: 'Gaveteiro de Mesa',            desc: 'Gaveteiro com 3 gavetas e trava, trilho telescópico.',          preco: 'R$ 720',   tag: 'Gaveteiro',     img: 'imagem/hom5.jpeg' },
    { nome: 'Prateleiras Suspensas',        desc: 'Conjunto de 4 prateleiras flutuantes acima da mesa.',           preco: 'R$ 580',   tag: 'Prateleiras',   img: 'imagem/hom6.jpeg' },
    { nome: 'Bancada Dupla para Reunião',   desc: 'Mesa de reunião planejada para até 6 pessoas.',                 preco: 'R$ 3.400', tag: 'Reunião',       img: 'imagem/hom7.jpeg' },
    { nome: 'Painel Ripado Home Office',    desc: 'Fundo ripado com nicho central para monitor e objetos.',        preco: 'R$ 1.600', tag: 'Decoração',     img: '' },
    { nome: 'Nicho Organizador Modular',    desc: 'Série de nichos quadrados combináveis em fosco.',               preco: 'R$ 640',   tag: 'Nichos',        img: '' },
    { nome: 'Divisória Acústica',           desc: 'Painel divisor com absorção acústica e revestimento premium.',  preco: 'R$ 2.800', tag: 'Divisória',     img: '' },
    { nome: 'Mesa Lateral de Apoio',        desc: 'Mesa pequena suspensa ao lado da bancada principal.',           preco: 'R$ 480',   tag: 'Apoio',         img: '' },
    { nome: 'Suporte para Headphone',       desc: 'Suporte em madeira e metal fixado sob a mesa.',                 preco: 'R$ 150',   tag: 'Acessório',     img: '' },
    { nome: 'Rack para Servidor/CPU',       desc: 'Módulo inferior com ventilação para CPU e HDs externos.',       preco: 'R$ 560',   tag: 'Tecnologia',    img: '' },
    { nome: 'Fichário Embutido',            desc: 'Módulo suspenso para pastas e documentos com porta.',           preco: 'R$ 890',   tag: 'Documentos',    img: '' },
    { nome: 'Quadro Branco Embutido',       desc: 'Área de quadro branco integrada ao painel de escritório.',      preco: 'R$ 740',   tag: 'Produtividade', img: '' },
    { nome: 'Armário Alto de Escritório',   desc: 'Coluna com escaninhos abertos e fechados com chave.',           preco: 'R$ 1.900', tag: 'Armazenamento', img: '' },
    { nome: 'Mesa Elevável Planejada',      desc: 'Bancada com sistema de regulagem de altura sentado/em pé.',     preco: 'R$ 3.100', tag: 'Ergonomia',     img: '' },
    { nome: 'Iluminação Embutida de Mesa',  desc: 'Faixa de LED embutida sob o armário acima da bancada.',         preco: 'R$ 320',   tag: 'Iluminação',    img: '' },
    { nome: 'Painel com Tela de Projeção',  desc: 'Painel com tela retrátil embutida para apresentações.',         preco: 'R$ 2.200', tag: 'Apresentação',  img: '' },
    { nome: 'Sofá de Espera Planejado',     desc: 'Sofá 2 lugares com base de madeira planejada ao espaço.',       preco: 'R$ 2.600', tag: 'Espera',        img: '' },
  ],

};

const ambienteLabels = {
  cozinha:    { titulo: 'Móveis de Cozinha',    tag: 'Cozinhas Planejadas'     },
  sala:       { titulo: 'Móveis de Sala',        tag: 'Salas Planejadas'        },
  quarto:     { titulo: 'Móveis de Quarto',      tag: 'Quartos Planejados'      },
  homeoffice: { titulo: 'Móveis de Home Office', tag: 'Home Office Planejado'   },
};

/* ── MODAL: ABRIR / FECHAR ───────────────────────── */
const modalMoveis = document.getElementById('modal-moveis');
const modalTitulo = document.getElementById('modal-titulo');
const modalTagEl  = document.getElementById('modal-tag');
const modalBody   = document.getElementById('modal-body');
const modalClose  = document.getElementById('modal-close');

function resolverImgSrc(img) {
  if (!img) return 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?w=500&q=80';
  if (img.startsWith('http') || img.startsWith('imagem/')) return img;
  return 'https://images.unsplash.com/' + img + '?w=500&q=80';
}

function abrirModalMoveis(ambiente) {
  const label = ambienteLabels[ambiente];
  const itens = mobiliasData[ambiente];
  if (!label || !itens) return;

  modalTagEl.textContent  = label.tag;
  modalTitulo.textContent = label.titulo;

  modalBody.innerHTML = itens.map((item, i) => `
    <div class="movel-card" style="animation-delay:${i * 40}ms">
      <img
        class="movel-card-img"
        src="${resolverImgSrc(item.img)}"
        alt="${item.nome}"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1556911220-bda9f7f7597e?w=500&q=80'"
      />
      <div class="movel-card-body">
        <span class="movel-card-tag">${item.tag}</span>
        <h4>${item.nome}</h4>
        <p>${item.desc}</p>
        <div class="movel-card-footer">
          <span class="movel-preco">${item.preco}</span>
          <button class="movel-btn" onclick="scrollContato()">Solicitar</button>
        </div>
      </div>
    </div>
  `).join('');

  modalMoveis.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalMoveis.scrollTop = 0;
}

function fecharModalMoveis() {
  modalMoveis.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', fecharModalMoveis);
modalMoveis.addEventListener('click', (e) => {
  if (e.target === modalMoveis) fecharModalMoveis();
});

/* Disparar modal ao clicar nos cards de ambiente */
document.querySelectorAll('.card[data-ambiente]').forEach(card => {
  card.addEventListener('click', () => abrirModalMoveis(card.dataset.ambiente));
});

/* ── 1. PRELOADER ────────────────────────────────── */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader.classList.add('hidden'), 600);
});

/* ── 2. BARRA DE PROGRESSO ───────────────────────── */
const progressBar = document.getElementById('progress-bar');
function atualizarProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
}

/* ── 3. HEADER SCROLL ────────────────────────────── */
const header = document.getElementById('header');
function atualizarHeader() {
  header.classList.toggle('scrolled', window.scrollY > 60);
}

/* ── 4. BOTÃO TOPO ───────────────────────────────── */
const btnTopo = document.getElementById('btn-topo');
btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
function atualizarBtnTopo() {
  btnTopo.classList.toggle('visible', window.scrollY > 400);
}

/* ── 5. SCROLL ÚNICO ─────────────────────────────── */
window.addEventListener('scroll', () => {
  atualizarProgress();
  atualizarHeader();
  atualizarBtnTopo();
}, { passive: true });

/* ── 6. ANIMAÇÕES DE ENTRADA ─────────────────────── */
const revelarObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('ativo');
    revelarObs.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.revelar').forEach(el => revelarObs.observe(el));

const revelarItemObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.revelar-item').forEach((item, i) => {
      setTimeout(() => item.classList.add('ativo'), i * 120);
    });
    revelarItemObs.unobserve(entry.target);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.diferenciais').forEach(el => revelarItemObs.observe(el));

/* ── 7. MENU MOBILE ──────────────────────────────── */
const menuBtn = document.getElementById('menu-mobile-btn');
const menu    = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuBtn.classList.toggle('open');
});
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.classList.remove('open');
  });
});

/* ── 8. DARK MODE ────────────────────────────────── */
const darkToggle = document.getElementById('dark-toggle');
const darkIcon   = darkToggle.querySelector('i');

function aplicarDark(dark) {
  document.body.classList.toggle('dark', dark);
  darkIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
}
aplicarDark(localStorage.getItem('dark') === 'true');

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('dark', isDark);
  darkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  darkToggle.style.transform = 'rotate(360deg)';
  setTimeout(() => darkToggle.style.transform = '', 400);
});

/* ── 9. TYPEWRITER ───────────────────────────────── */
const palavras = ['ambiente', 'cozinha', 'quarto', 'sala', 'home office'];
let twIdx = 0, charIdx = 0, apagando = false;
const twEl = document.getElementById('typewriter');

function typewriter() {
  const alvo = palavras[twIdx];
  if (!apagando) {
    twEl.textContent = alvo.slice(0, ++charIdx);
    if (charIdx === alvo.length) {
      apagando = true;
      setTimeout(typewriter, 1800);
      return;
    }
  } else {
    twEl.textContent = alvo.slice(0, --charIdx);
    if (charIdx === 0) { apagando = false; twIdx = (twIdx + 1) % palavras.length; }
  }
  setTimeout(typewriter, apagando ? 55 : 100);
}
typewriter();

/* ── 10. CONTADORES ──────────────────────────────── */
function animarContador(el) {
  const alvo = +el.dataset.target;
  const inicio = performance.now();
  function step(agora) {
    const p    = Math.min((agora - inicio) / 2000, 1);
    const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
    el.textContent = Math.floor(ease * alvo).toLocaleString('pt-BR');
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = alvo.toLocaleString('pt-BR') + (alvo >= 100 ? '+' : '');
  }
  requestAnimationFrame(step);
}
const statsObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.counter').forEach(animarContador);
    statsObs.unobserve(entry.target);
  });
}, { threshold: 0.4 });
const statsSection = document.querySelector('.stats');
if (statsSection) statsObs.observe(statsSection);

/* ── 11. SLIDER DE DEPOIMENTOS ───────────────────── */
const slides   = document.querySelectorAll('.slide');
const dotsWrap = document.getElementById('slider-dots');
let sliderIdx = 0, autoplay;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => irParaSlide(i));
  dotsWrap.appendChild(dot);
});

function irParaSlide(idx) {
  slides[sliderIdx].classList.remove('active');
  dotsWrap.children[sliderIdx].classList.remove('active');
  sliderIdx = (idx + slides.length) % slides.length;
  slides[sliderIdx].classList.add('active');
  dotsWrap.children[sliderIdx].classList.add('active');
  reiniciarAutoplay();
}
slides[0].classList.add('active');
document.getElementById('next-slide').addEventListener('click', () => irParaSlide(sliderIdx + 1));
document.getElementById('prev-slide').addEventListener('click', () => irParaSlide(sliderIdx - 1));
function reiniciarAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => irParaSlide(sliderIdx + 1), 4500);
}
reiniciarAutoplay();

/* ── 12. LIGHTBOX ────────────────────────────────── */
const lightbox  = document.getElementById('lightbox');
const imgGrande = document.getElementById('img-grande');
const lbCounter = document.getElementById('lightbox-counter');
const galeriaItems = Array.from(document.querySelectorAll('.galeria-item'));
const galeriaImgs  = galeriaItems.map(item => ({
  src: item.querySelector('img').src,
  alt: item.querySelector('img').alt,
}));
let lbIdx = 0;

function abrirLightbox(idx) {
  lbIdx = idx;
  imgGrande.src = galeriaImgs[lbIdx].src;
  imgGrande.alt = galeriaImgs[lbIdx].alt;
  lbCounter.textContent = `${lbIdx + 1} / ${galeriaImgs.length}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function fecharLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
function navLightbox(dir) {
  lbIdx = (lbIdx + dir + galeriaImgs.length) % galeriaImgs.length;
  imgGrande.style.animation = 'none';
  requestAnimationFrame(() => {
    imgGrande.style.animation = '';
    imgGrande.src = galeriaImgs[lbIdx].src;
    imgGrande.alt = galeriaImgs[lbIdx].alt;
    lbCounter.textContent = `${lbIdx + 1} / ${galeriaImgs.length}`;
  });
}
galeriaItems.forEach((item, i) => item.addEventListener('click', () => abrirLightbox(i)));
document.getElementById('lightbox-close').addEventListener('click', fecharLightbox);
document.getElementById('lightbox-next').addEventListener('click', () => navLightbox(1));
document.getElementById('lightbox-prev').addEventListener('click', () => navLightbox(-1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) fecharLightbox(); });
document.addEventListener('keydown', (e) => {
  if (modalMoveis.classList.contains('open')) {
    if (e.key === 'Escape') fecharModalMoveis();
    return;
  }
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     fecharLightbox();
  if (e.key === 'ArrowRight') navLightbox(1);
  if (e.key === 'ArrowLeft')  navLightbox(-1);
});

/* ── 13. 3D TILT NOS CARDS ───────────────────────── */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const dx   = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const dy   = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    card.style.transform = `perspective(800px) rotateX(${dy * -8}deg) rotateY(${dx * 8}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform  = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => card.style.transition = '', 500);
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease';
  });
});

/* ── 14. SCROLL PARA CONTATO ─────────────────────── */
function scrollContato() {
  fecharModalMoveis();
  setTimeout(() => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

/* ── 15. FORMULÁRIO ──────────────────────────────── */
const form      = document.getElementById('form');
const feedback  = document.getElementById('mensagem-feedback');
const btnSubmit = form.querySelector('.btn-submit');

function validarCampo(input) {
  const grupo  = input.closest('.form-group');
  if (!grupo) return true;
  const valido = input.checkValidity() && input.value.trim() !== '';
  grupo.classList.toggle('error', !valido);
  return valido;
}

form.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('blur',  () => validarCampo(input));
  input.addEventListener('input', () => {
    if (input.closest('.form-group').classList.contains('error')) validarCampo(input);
  });
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let valido = true;
  form.querySelectorAll('input[required], textarea[required]').forEach(input => {
    if (!validarCampo(input)) valido = false;
  });
  if (!valido) {
    feedback.textContent = 'Por favor, corrija os campos destacados.';
    feedback.className   = 'erro';
    return;
  }
  btnSubmit.classList.add('loading');
  feedback.textContent = '';
  feedback.className   = '';
  await new Promise(r => setTimeout(r, 1800));
  btnSubmit.classList.remove('loading');
  feedback.textContent = '✓ Mensagem enviada! Entraremos em contato em até 24h.';
  feedback.className   = 'sucesso';
  form.reset();
  form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
});
