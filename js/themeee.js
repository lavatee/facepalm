let st = document.getElementById('st');
let th = document.getElementById('theme');
if (st.getAttribute("href") == "css/masterlight.css") {
    localStorage.setItem('theme1', "СВЕТЛАЯ ТЕМА");
}
else {
    localStorage.setItem('theme1', "ТЕМНАЯ ТЕМА");
};
function theme() {
  if (st.getAttribute("href") == "css/masterlight.css") {
    st.href = "css/style.css";
    th.textContent = "СВЕТЛАЯ ТЕМА";
  }
  else {
    st.href = "css/masterlight.css";
    th.textContent = "ТЕМНАЯ ТЕМА";
  };
  localStorage.removeItem('theme');
  localStorage.setItem('theme', st.href);
  localStorage.removeItem('theme1');
  localStorage.setItem('theme1', th.textContent);
}
st.href = localStorage.getItem('theme');
th.textContent = localStorage.getItem('theme1');
