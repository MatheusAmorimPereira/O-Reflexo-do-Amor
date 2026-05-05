const openCameraBtn = document.getElementById("openCameraBtn");
const cameraVideo = document.getElementById("cameraVideo");
const mirrorPlaceholder = document.getElementById("mirrorPlaceholder");
const mirrorText = document.getElementById("mirrorText");
const confettiLayer = document.getElementById("confettiLayer");
const loveBtn = document.getElementById("loveBtn");
const mirrorGlass = document.getElementById("mirrorGlass");

function createSparkle(x, y) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  const size = Math.random() * 10 + 8;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${x}%`;
  sparkle.style.top = `${y}%`;
  mirrorGlass.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1200);
}

function launchSparkles() {
  for (let i = 0; i < 12; i += 1) {
    const x = 15 + Math.random() * 70;
    const y = 10 + Math.random() * 70;
    setTimeout(() => createSparkle(x, y), i * 100);
  }
}

async function openCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Seu navegador não suporta acesso à câmera.");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    cameraVideo.srcObject = stream;
    cameraVideo.style.display = "block";
    mirrorPlaceholder.style.display = "none";
    mirrorText.classList.remove("hidden");
    openCameraBtn.textContent = "Ver espelho mágico novamente";
    mirrorGlass.classList.add("shine");
    setTimeout(() => mirrorGlass.classList.remove("shine"), 1800);
    launchSparkles();
  } catch (error) {
    console.error(error);
    alert("Permissão negada ou erro ao acessar a câmera.");
  }
}

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart-drop";
  heart.textContent = "❣️";
  const startX = Math.random() * 80 + 10;
  heart.style.left = `${startX}%`;
  heart.style.fontSize = `${Math.random() * 16 + 18}px`;
  confettiLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 1800);
}

loveBtn.addEventListener("click", () => {
  for (let i = 0; i < 8; i += 1) {
    setTimeout(createHeart, i * 120);
  }
});

openCameraBtn.addEventListener("click", openCamera);
