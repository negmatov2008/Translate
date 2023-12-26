let son = 0;
function darkk() {
  son++;
  if (son == 1) {
    dark.setAttribute("src", "./images/Group (5).svg");
    body.classList.add("text-[#fff]");
    cont.classList.add("bg-[#050505]");
    html.classList.add("bg-[#050505]");
    navbar.classList.add("bg-[#050505]");
    nav.classList.add("bg-[#050505]");
    inp.classList.add("bg-[#1F1F1F]");
    body.classList.add("bg-[#050505]");
  } else {
    dark.setAttribute("src", "./images/icons.svg");
    body.classList.remove("text-[#fff]");
    cont.classList.remove("bg-[#050505]");
    html.classList.remove("bg-[#050505]");
    navbar.classList.remove("bg-[#050505]");
    nav.classList.remove("bg-[#050505]");
    inp.classList.remove("bg-[#1F1F1F]");
    body.classList.remove("bg-[#050505]");
  }
  if (son == 2) {
    son = son - 2;
  }
}
