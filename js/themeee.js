let st = document.getElementById('st');
function theme() {
  let th = document.getElementById('theme');
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
}
st.href = localStorage.getItem('theme');
