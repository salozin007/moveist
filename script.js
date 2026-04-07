/* ===================================================
   ASDP Móveis — script.js
=================================================== */

/* ── 0. DADOS DE MÓVEIS POR AMBIENTE ─────────────── */
const mobiliasData = {

  cozinha: [
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Armazenamento',           img: 'imagem/coz3.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Base',                    img: 'imagem/coz1.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Ilha',                    img: 'imagem/coz2.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Armazenamento',           img: 'imagem/coz4.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Decoração',               img: 'imagem/coz5.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Destaque',                img: 'imagem/coz6.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Jantar',                  img: 'imagem/coz7.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Eletros',                 img: 'imagem/coz8.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Pia',                     img: 'imagem/coz9.jpeg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Organização',             img: 'https://s3-sa-east-1.amazonaws.com/img.panorama/blog/173387/cozinha-planejada-7-body.jpg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Adega',                   img: 'https://finger.ind.br/wp-content/uploads/2024/10/explorando-modelos-de-cozinha-planejada-encontre-o-seu-estilo-1-1024x683.jpg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Organização',             img: 'https://lojadec.com.br/wp-content/uploads/2018/03/moveis-planejados-para-cozinha-1.jpg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Armazenamento',           img: 'https://blog.yticon.com.br/wp-content/uploads/2024/05/moveis-planejados-cozinha.jpg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Decoração',               img: 'https://storage.panoverse-cdn.com.br/img.panorama/produto/97749/cozinha-completa-line-9-portas-1-gaveta-gris-freijo-kits-parana-778211-600x600-cover.jpg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Bancada',                 img: 'https://sturemoveis.com.br/wp-content/uploads/2024/02/armario-de-cozinha-planejado-moderno.jpg' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Entretenimento',          img: '' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Lavabo',                  img: '' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Iluminação',              img: '' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Canto',                   img: '' },
    { nome: 'Armário Cozinha',       desc: 'Móveis de MDF sob medida, o preço pode variar.',        preco: 'R$ 25.000',    tag: 'Eletros',                 img: '' },
  ],

  sala: [
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'TV & Mídia',    img: 'imagem/sala2.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Decoração',     img: 'imagem/sala1.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Estante',       img: 'imagem/sala3.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Aparador',      img: 'imagem/sala4.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Adega',         img: 'imagem/sala5.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Sofá',          img: 'imagem/sala6.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Mesa',          img: 'imagem/sala7.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Home Theater',  img: 'imagem/sala8.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Cristaleira',   img: 'imagem/sala9.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Nichos',        img: 'imagem/sala10.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Prateleiras',   img: 'imagem/sala11.jpeg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Hall',          img: 'https://static.wixstatic.com/media/305816_959ba01a14944a4da86c2d21d4e4af19~mv2.jpg/v1/fill/w_677,h_582,al_c,lg_1,q_85/305816_959ba01a14944a4da86c2d21d4e4af19~mv2.jpg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Divisória',     img: 'https://finger.ind.br/wp-content/uploads/2019/08/moveis-planejados-para-sala-por-que-investir-nessa-tendencia.jpg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Bancada',       img: 'https://kbplanejados.com.br/wp-content/uploads/2022/07/sala-planejada-11.jpg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 2.100',  tag: 'Armazenamento', img: 'https://finger.ind.br/wp-content/uploads/2024/03/4-tipos-de-ambientes-para-usar-os-moveis-planejados-1024x683.jpg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Assento',       img: 'https://s2.glbimg.com/KnLYh4vFv_993wXDE2qMntIzq5Q=/e.glbimg.com/og/ed/f/original/2020/04/28/rack-jacira_pinheiro___estante___foto_1.jpg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Arte',          img: 'https://www.simonetto.com.br/arquivos/blog/167/blog_167_884_170c_1000.jpg' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Jantar',        img: '' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Bar',           img: '' },
    { nome: 'Móvel de sala',          desc: 'Móveis de MDF sob medida, o preço pode variar.',       preco: 'R$ 25.000', tag: 'Lareira',       img: '' },
  ],

  quarto: [
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Guarda-Roupa', img: 'imagem/qua1.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Cama',         img: 'imagem/qua2.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Cômoda',       img: 'imagem/qua3.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Criado-Mudo',  img: 'imagem/qua4.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Closet',       img: 'imagem/qua5.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Penteadeira',  img: 'imagem/qua6.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'TV & Mídia',   img: 'imagem/qua7.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Sapateira',    img: 'imagem/qua8.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Estudo',       img: 'imagem/qua9.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Nichos',       img: 'imagem/qua10.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Baú',          img: 'imagem/qua11.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Espelho',      img: 'imagem/qua12.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Embutido',     img: 'imagem/qua13.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Closet',       img: 'imagem/qua14.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Prateleiras',  img: 'imagem/qua15.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Decoração',    img: 'imagem/qua16.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Divisória',    img: 'imagem/qua17.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Rack',         img: 'imagem/qua18.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Assento',      img: 'imagem/qua19.jpeg' },
    { nome: 'Móvel de quarto',    desc: 'Móveis de MDF sob medida, o preço pode variar.',          preco: 'R$ 25.000', tag: 'Infantil',     img: 'imagem/qua20.jpeg' },
  ],

  homeoffice: [
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Mesa',          img: 'imagem/hom1.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Estante',       img: 'imagem/hom2.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Armazenamento', img: 'imagem/hom3.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Organização',   img: 'imagem/hom4.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Gaveteiro',     img: 'imagem/hom5.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Prateleiras',   img: 'imagem/hom6.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Reunião',       img: 'imagem/hom7.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Decoração',     img: 'https://bartzen.com.br/wp-content/uploads/capa-blog-BTZ-as-vantagens-do-home-office-com-moveis-planejados.jpg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Nichos',        img: 'https://italinea.com.br/blog/wp-content/uploads/2024/10/1.webp' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Divisória',     img: 'https://decorarambientes.com.br/wp-content/uploads/2022/10/Rectangle-51.jpg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Apoio',         img: 'https://artcloset.com.br/blog/wp-content/uploads/2025/04/home-office-planejado-laca-branca-com-painel-de-tv-art-closet.webp' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Acessório',     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFvcFziYFLp1PhVDWU_c_9yUpKRGfNApNVw&s' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Tecnologia',    img: 'https://lirp.cdn-website.com/96484850/dms3rep/multi/opt/WhatsApp+Image+2025-03-21+at+16.38.30-640w.jpeg' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Documentos',    img: 'https://hannamoveisplanejados.com.br/wp-content/uploads/2024/08/ESTATICO-Hanna-300x222.png' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Produtividade', img: '' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Armazenamento', img: '' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Ergonomia',     img: '' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Iluminação',    img: '' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Apresentação',  img: '' },
    { nome: 'Móvel de home office',    desc: 'Móveis de MDF sob medida, o preço pode variar.',      preco: 'R$ 25.000', tag: 'Espera',        img: '' },
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
const palavras = ['seu ambiente', 'sua cozinha', 'seu quarto', 'sua sala', 'seu home office'];
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
