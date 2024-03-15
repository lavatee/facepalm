let st = document.getElementById('st');
let th = document.getElementById('theme');
if (st.getAttribute("href") == "css/style.css" || st.getAttribute("href") == "https://lavatee.github.io/kazino/css/style.css") {
    th.textContent = "СВЕТЛАЯ ТЕМА";
}
else {
    th.textContent = "ТЕМНАЯ ТЕМА";
};
function theme() {
  if (st.getAttribute("href") == "css/masterlight.css" || st.getAttribute("href") == "https://lavatee.github.io/kazino/css/masterlight.css") {
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
