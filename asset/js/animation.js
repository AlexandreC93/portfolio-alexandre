const wrapper = document.getElementsByClassName("profil-name");

wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");

const spans = wrapper.getElementsByTag