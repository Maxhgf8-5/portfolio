const scrollBtn = document.querySelector(".scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 🌊 défilement fluide
  });
});

// gestion du defilement des images

// mode dark
const toggleBtn = document.getElementById("themeToggle");

// Charger le mode sauvegardé
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// Toggle thème + sauvegarde
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", currentTheme);
});


// 🔢 Animation des compteurs
const counters = document.querySelectorAll(".count");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 50;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
// ⏱️ Animation Témoignages
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial() {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
  index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 4000); // change toutes les 4s

// 🧠 Logique du quiz
const questions = [
  {
    q: "Quel framework backend est basé sur Java ?",
    options: ["Laravel", "Spring Boot", "Django"],
    answer: "Spring Boot",
  },
  {
    q: "Quel outil utilise-t-on pour tester les APIs ?",
    options: ["Docker", "Postman", "React"],
    answer: "Postman",
  },
  {
    q: "PHP est un langage côté ___ ?",
    options: ["Client", "Serveur", "Mobile"],
    answer: "Serveur",
  },
];

let currentIndex = 0;

function loadQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").innerText = q.q;
  const choices = document.getElementById("choices").children;
  for (let i = 0; i < choices.length; i++) {
    choices[i].innerText = q.options[i];
    choices[i].style.background = "rgba(255, 255, 255, 0.05)";
  }
  document.getElementById("result").innerText = "";
}

function checkAnswer(el) {
  const q = questions[currentIndex];
  if (el.innerText === q.answer) {
    el.style.background = "#09440bff";
    document.getElementById("result").innerText = "✅ Bonne réponse !";
  } else {
    el.style.background = "#ef9a9a";
    document.getElementById("result").innerText = "❌ Essaie encore.";
  }
  currentIndex = (currentIndex + 1) % questions.length;
}

// Initialiser le quiz
loadQuestion();
// modal
function openModal() {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// effet machine a ecrire
const element = document.getElementById("typewriter");
const text = "alut, je suis Gnansa,";
let i = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && i <= text.length) {
    element.innerHTML = text.substring(0, i);
    i++;
  } else if (isDeleting && i >= 0) {
    element.innerHTML = text.substring(0, i);
    i--;
  }

  if (i === text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200); // pause avant effacement
    return;
  }

  if (i === 0 && isDeleting) {
    isDeleting = false;
    setTimeout(typeEffect, 1200); // pause avant réécriture
    return;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100); // vitesse différente
}

typeEffect();

document.querySelectorAll(".project-card").forEach((card, i) => {
  const close = card.querySelector(".out");
  const btn = card.querySelector(".toggleProjectBtn");
  const info = card.querySelector(".project-info");
  const carousel = card.querySelector(".project-carousel");
  const image = card.querySelector(".carousel-image");
  const left = card.querySelector(".chevron.left");
  const right = card.querySelector(".chevron.right");

  // Tes images pour chaque projet (tableau par carte)
  const galleries = [
    [],
    [],
    [
      "image/ecole-1.png",
      "image/ecole-2.png",
      "image/ecole-3.png",
      "image/ecole-4.png",
      "image/ecole-5.png",
      "image/ecole-6.png",
      "image/ecole-7.png",
      "image/ecole-8.png",
      "image/ecole-9.png",
      "image/ecole-10.png",
      "image/ecole-11.png",
      "image/ecole-12.png",
      "image/ecole-13.png",
    ],
  ];

  let index = 0;

  btn.addEventListener("click", () => {
    info.classList.add("hide");
    carousel.classList.add("show");
    image.src = galleries[i][index];
  });
  close.addEventListener("click", () => {
    info.classList.remove("hide");
    carousel.classList.remove("show");
  });
  left.addEventListener("click", () => {
    index = (index - 1 + galleries[i].length) % galleries[i].length;
    image.src = galleries[i][index];
  });

  right.addEventListener("click", () => {
    index = (index + 1) % galleries[i].length;
    image.src = galleries[i][index];
  });
});

document.querySelectorAll(".tech-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
