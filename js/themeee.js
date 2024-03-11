let st = document.getElementById('st');
function theme() {
  let th = document.getElementById('theme');
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
}
st.href = localStorage.getItem('theme');
