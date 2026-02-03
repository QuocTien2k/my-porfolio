const lantern = document.getElementById("lantern");
let angle = 0;
let rotation;

/* Hàm quay */
function startRotation() {
  rotation = setInterval(() => {
    angle += 0.4;
    lantern.style.transform = `rotateY(${angle}deg)`;
  }, 20);
}

/* Dừng quay */
function stopRotation() {
  clearInterval(rotation);
}

/* Hover vào đèn thì dừng */
lantern.addEventListener("mouseenter", stopRotation);

/* Rê chuột ra thì quay tiếp */
lantern.addEventListener("mouseleave", startRotation);

/* Chạy ngay khi load trang */
startRotation();
