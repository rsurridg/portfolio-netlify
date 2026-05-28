/* ── Card data ───────────────────────────────────────────────────
   To reorder the grid: move objects in CARDS.
   To add a card:       append or insert an object.
   Card types: 'image' | 'writing' | 'gallery' | 'code'
──────────────────────────────────────────────────────────────── */

const EYEBROW = {
  traditional: 'Traditional Art',
  digital:     'Digital Art',
  photography: 'Photography',
  writing:     'Writing',
  code:        'Code',
};

const CARDS = [

  /* ── Row 1 ── */
  { type:'image', col:2, category:'traditional',
    img:'images/final2-99.jpg', title:'Ellie', meta:'Graphite on Paper · 2025' },

  { type:'image', col:2, category:'digital',
    img:'images/Untitled_Artwork_5.jpg', title:'Ramona', meta:'Procreate on iPad · 2020',
    imgPosition:'center 20%' },

  /* ── Row 2 ── */
  { type:'writing', col:2, category:'writing', tint:true,
    title:'The Wilderlands',
    body:'“It is beautiful here, arid and desolate in the quiescence of winter. The light is silver and clear. The cows wander in the scrubland amongst prickly pear and laurel. The prairie grass is silver-green with russet tips; it shimmers like water in the wind.”',
    link:'https://merakiae.substack.com/p/the-wilderlands',
    linkText:'Read on Substack →' },

  { type:'writing', col:2, category:'writing',
    title:'The Charity of Performance',
    body:'“The mature artist self-effaces, allowing the audience to inhabit the medium by proxy, and thereby exercise their own imagination within and beyond the scope of the work.”',
    link:'https://merakiae.substack.com/p/alysa-liu-the-charity-of-performance',
    linkText:'Read on Substack →' },

  /* ── Row 3 ── */
  { type:'image', col:1, category:'digital',
    img:'images/MaxU_Paper_ColdPress_3.jpg', title:'Moonlight', meta:'Procreate on iPad · 2025' },

  { type:'image', col:1, category:'traditional',
    img:'images/IMGP4995.jpg', title:'The Matriarch', meta:'Watercolor and Mixed Media · 2026' },

  { type:'image', col:1, category:'traditional',
    img:'images/IMGP4954.jpg', title:'Aaron Westerberg Master Study', meta:'Oil on Canvas · 2025' },

  { type:'code', col:1, category:'code',
    title:'This Site',
    body:'Pure HTML/CSS/JS portfolio site. Clean, static, simple. $8/year for domain, $0/month for hosting.',
    link:'https://github.com/rsurridg/portfolio-netlify',
    linkText:'View on GitHub →' },

  /* ── Row 4 ── */
  { type:'image', col:2, category:'traditional',
    img:'images/IMGP2682.jpg', title:'Stalwart', meta:'Oil on Canvas · 2025' },

  { type:'gallery', col:2, category:'photography',
    title:'Brazoria County Fair 2025',
    gridCols:'2fr 1fr', gridRows:'1fr 1fr 1fr',
    images:[
      { src:'images/DSC_1521.jpg', alt:'Brazoria County Fair — Rider',        gridRow:'span 3' },
      { src:'images/DSC_2006.jpg', alt:'Brazoria County Fair — Beer Barn' },
      { src:'images/DSC_1893.jpg', alt:'Brazoria County Fair — Barrel Racing' },
      { src:'images/DSC_1858.jpg', alt:'Brazoria County Fair — 1858',          objectPosition:'35% center' },
    ] },

  /* ── Row 5 ── */
  { type:'image', col:2, category:'digital',
    img:'images/final2-100.jpg', title:'At the Rodeo', meta:'Procreate on iPad · 2024' },

  { type:'image', col:2, category:'digital',
    img:'images/MaxU_Paper_ColdPress_4.jpg', title:'Dragon Study', meta:'Procreate on iPad · 2021' },

  /* ── Row 6 ── */
  { type:'image', col:2, category:'traditional',
    img:'images/IMGP4961.jpg', title:'A Gentle Hand', meta:'Graphite on Paper · 2025' },

  { type:'image', col:2, category:'digital',
    img:'images/MaxU_Paper_ColdPress_2.jpg', title:'Forever', meta:'Procreate on iPad · 2025' },

  /* ── Row 7 ── */
  { type:'image', col:2, category:'traditional',
    img:'images/final2-97.jpg', title:'Susan Lyon Master Study', meta:'Chalk Pastel on Paper · 2026' },

  { type:'gallery', col:2, category:'photography',
    title:'The Ranch',
    gridCols:'2fr 1fr', gridRows:'1fr 1fr 1fr',
    images:[
      { src:'images/IMGP3923.jpg', alt:'Ranch — Horse', gridRow:'span 3' },
      { src:'images/IMGP3792.jpg', alt:'Ranch' },
      { src:'images/IMGP3868.jpg', alt:'Ranch' },
      { src:'images/IMGP3901.jpg', alt:'Ranch' },
    ] },

  /* ── Row 8 ── */
  { type:'gallery', col:4, category:'photography',
    title:'Houston Botanic Gardens',
    gridCols:'2fr 1fr 1fr', gridRows:'1fr 1fr 1fr', gridHeight:'560px',
    images:[
      { src:'images/final2-83.jpg', alt:'Blue agave',           gridRow:'span 3' },
      { src:'images/final2-85.jpg', alt:'Prickly pear and sky' },
      { src:'images/final2-87.jpg', alt:'Fountain grass' },
      { src:'images/final2-89.jpg', alt:'Green anole' },
      { src:'images/final2-84.jpg', alt:'Prickly pear garden',  gridRow:'span 2' },
      { src:'images/final2-92.jpg', alt:'Red celosia' },
    ] },

];

/* ── Render functions ────────────────────────────────────────── */

function renderImageCard(c) {
  const hasMinH = c.col >= 2;
  const imgStyle = `width:100%;height:100%;object-fit:cover;display:block;${c.imgPosition ? `object-position:${c.imgPosition};` : ''}`;
  return `
    <div class="card work-card col-${c.col}"
         data-category="${c.category}"
         data-img="${c.img}"
         data-title="${c.title}"
         data-meta="${c.meta}"
         style="padding:0;overflow:hidden;">
      <div class="img-frame" style="border-radius:var(--radius);border:none;flex:1;${hasMinH ? 'min-height:200px;' : ''}">
        <img src="${c.img}" alt="${c.title}" style="${imgStyle}" />
      </div>
      <div style="padding:1rem 1.25rem 1.25rem;">
        <div class="card-eyebrow">${EYEBROW[c.category]}</div>
        <div class="card-title">${c.title}</div>
        <div class="card-meta">${c.meta}</div>
      </div>
    </div>`;
}

function renderWritingCard(c) {
  return `
    <div class="card work-card col-${c.col}${c.tint ? ' tint' : ''}" data-category="${c.category}">
      <div class="card-eyebrow">${EYEBROW[c.category]}</div>
      <div class="card-title">${c.title}</div>
      <div class="card-body">${c.body}</div>
      <a class="card-link" href="${c.link}" target="_blank" rel="noopener">${c.linkText}</a>
    </div>`;
}

function renderGalleryCard(c) {
  const gridStyle = `display:grid;grid-template-columns:${c.gridCols};grid-template-rows:${c.gridRows};gap:.5rem;${c.gridHeight ? `height:${c.gridHeight};` : 'flex:1;'}`;
  const imgs = c.images.map(img => {
    const divStyle = `border-radius:10px;overflow:hidden;cursor:pointer;${img.gridRow ? `grid-row:${img.gridRow};` : ''}`;
    const imgStyle = `width:100%;height:100%;object-fit:cover;display:block;${img.objectPosition ? `object-position:${img.objectPosition};` : ''}`;
    return `
      <div class="gallery-img"
           data-img="${img.src}"
           data-title="${c.title}"
           data-meta="Photography"
           style="${divStyle}">
        <img src="${img.src}" alt="${img.alt}" style="${imgStyle}" />
      </div>`;
  }).join('');
  return `
    <div class="card work-card col-${c.col}" data-category="${c.category}" style="gap:.75rem;">
      <div class="card-eyebrow">${EYEBROW[c.category]}</div>
      <div class="card-title" style="font-size:1rem;">${c.title}</div>
      <div style="${gridStyle}">${imgs}
      </div>
    </div>`;
}

function renderCodeCard(c) {
  return `
    <div class="card work-card col-${c.col} dark" data-category="${c.category}">
      <div class="card-eyebrow">${EYEBROW[c.category]}</div>
      <div class="card-title">${c.title}</div>
      <div class="card-body">${c.body}</div>
      <a class="card-link" href="${c.link}" target="_blank" rel="noopener">${c.linkText}</a>
    </div>`;
}

function renderCard(c) {
  switch (c.type) {
    case 'image':   return renderImageCard(c);
    case 'writing': return renderWritingCard(c);
    case 'gallery': return renderGalleryCard(c);
    case 'code':    return renderCodeCard(c);
    default:        return '';
  }
}

function renderGrid() {
  document.getElementById('work-grid').innerHTML = CARDS.map(renderCard).join('');
}

/* ── Filter ──────────────────────────────────────────────────── */

function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const grid    = document.getElementById('work-grid');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      grid.querySelectorAll('.work-card').forEach(card => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
      });
    });
  });
}

/* ── Lightbox ────────────────────────────────────────────────── */

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbTitle  = document.getElementById('lightbox-title');
  const lbMeta   = document.getElementById('lightbox-meta');

  function open(img, title, meta) {
    lbImg.src            = img;
    lbImg.alt            = title || '';
    lbTitle.textContent  = title || '';
    lbMeta.textContent   = meta  || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  const grid = document.getElementById('work-grid');

  // Image cards
  grid.addEventListener('click', e => {
    const card = e.target.closest('.work-card[data-img]');
    if (card && !e.target.closest('.gallery-img')) {
      open(card.dataset.img, card.dataset.title, card.dataset.meta);
    }
  });

  // Gallery thumbnails
  grid.addEventListener('click', e => {
    const thumb = e.target.closest('.gallery-img');
    if (thumb) {
      e.stopPropagation();
      open(thumb.dataset.img, thumb.dataset.title, thumb.dataset.meta);
    }
  });

  document.getElementById('lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── Init ────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('yr').textContent = new Date().getFullYear();
  renderGrid();
  initFilter();
  initLightbox();
});
