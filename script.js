// Scroll suave ao clicar nos links do menu
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Destaque ativo no menu conforme a rolagem
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Botão "Ver mais" na seção Sobre
const btnSobre = document.getElementById('btn-sobre');
const conteudoSobre = document.getElementById('conteudo-sobre');


if (btnSobre && conteudoSobre) {
  btnSobre.addEventListener('click', () => {
    conteudoSobre.classList.toggle('oculto');
    btnSobre.textContent = conteudoSobre.classList.contains('oculto') ? 'Ver mais' : 'Ver menos';
  });
}

// Animação nos cards de produtos ao entrar na tela
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));
document.querySelectorAll('.link-menu').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
});

const secoes = document.querySelectorAll(
  '.historia, .depoimentos, .galeria, .atuacao, .parceiros'
);

const observerSecoes = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('secao-ativa');
    }
  });
}, { threshold: 0.3 });

secoes.forEach(secao => observerSecoes.observe(secao));
function enviarParaWhatsApp() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const texto = `Olá, meu nome é ${nome}.\nEmail: ${email}\nMensagem: ${mensagem}`;
  const numero = "5511985320301"; // Substitua pelo número real com DDI e DDD
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
}






