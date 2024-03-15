let st = document.getElementById('st');
let th = document.getElementById('theme');
function theme() {
  if (st.getAttribute("href") == "master.css") {
    st.href = "masterlight.css";
    th.textContent = "ТЕМНАЯ ТЕМА";
  }
  else {
    st.href = "master.css";
    th.textContent = "СВЕТЛАЯ ТЕМА";
  };
  localStorage.removeItem('theme');
  localStorage.setItem('theme', st.href);
  localStorage.removeItem('theme1');
  localStorage.setItem('theme1', th.textContent);
}
st.href = localStorage.getItem('theme');
th.textContent = localStorage.getItem('theme1');
