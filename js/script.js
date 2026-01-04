 
// Smooth scroll + active link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => a.classList.remove("active"));
    link.classList.add("active");
  });
});

// Copy portfolio link
const copyBtn = document.getElementById("copyPortfolio");
const toast = document.getElementById("copyToast");
const portfolioURL = "https://maxhgf8-5.github.io/portfolio";
copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(portfolioURL);
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 2200);
  } catch (err) {
    alert("Impossible de copier. Voici le lien : " + portfolioURL);
  }
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
      setTimeout(updateCount, 90);
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

setInterval(showTestimonial, 4000); //

// effet machine a ecrire
const element = document.getElementById("typewriter");
const text = "alut, je suis Magnouréwa,";
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

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

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
    [],
    []
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
