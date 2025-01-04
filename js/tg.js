import tg from "./themeee"
const backend = "http://77.222.63.142:8000"
//const tg = window.Telegram.WebApp;
const userId = tg.initDataUnsafe.user.id;
console.log(userId)
// const tg = {
//   initDataUnsafe: {
//     user: {
//       id: 1234
//     }
//   }
// }
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Введите имя ученика");
  }
  else if (inputValue.indexOf(' ') < 1) {
    alert("Ученик без имени или фамилии");
  }
  else {
    document.getElementById("myUL1").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  const liElem = document.querySelectorAll('li');
  cl = document.getElementById('input').value;
  te = `${tg.initDataUnsafe.user.id}`;
  var number = parseInt(cl);
  var letter = cl.substr(parseInt(cl).toString().length);
  if (liElem.length != 0 && cl != "" && te != "" && number > 0 && number < 12 && letter.length == 1) {
    let sav = document.getElementById('save1');
    sav.style.display = 'block';
  }
  if (liElem.length == 0) {
    let pp = document.getElementById('uch');
    if(pp) {
      pp.remove();
    }
    let li = document.createElement("p");
    let t = document.createTextNode("В классе отсутствуют ученики");
    li.id = "uch";
    li.appendChild(t);
    document.getElementById("myUL2").appendChild(li);
    let sav = document.getElementById('save1');
    sav.style.display = 'none';
  }
  if (cl == "" || number < 0 || number > 12 || letter.length != 1) {
    let pp = document.getElementById('cla');
    if(pp) {
      pp.remove();
    }
    let li = document.createElement("p");
    let t = document.createTextNode("Некорректно введен класс");
    li.id = "cla";
    li.appendChild(t);
    document.getElementById("myUL2").appendChild(li);
    let sav = document.getElementById('save1');
    sav.style.display = 'none';
  }
  if (te == "") {
    let pp = document.getElementById('tea');
    if(pp) {
      pp.remove();
    }
    let li = document.createElement("p");
    let t = document.createTextNode("Некорректное id учителя");
    li.id = "tea";
    li.appendChild(t);
    document.getElementById("myUL2").appendChild(li);
    let sav = document.getElementById('save1');
    sav.style.display = 'none';
  }
  if (liElem.length > 0) {
    let pp = document.getElementById('uch');
    if(pp) {
      pp.remove();
    }
  }
  if (cl != "" && number > 0 && number < 12 && letter.length == 1) {
    let pp = document.getElementById('cla');
    if(pp) {
      pp.remove();
    }
  }
  if (te != "") {
    let pp = document.getElementById('tea');
    if(pp) {
      pp.remove();
    }
  }
  else {
    let sav = document.getElementById('save1');
    sav.style.display = 'none';
  };

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      const liElem = document.querySelectorAll('li');
      cl = document.getElementById('input').value;
      te = document.getElementById('teacher').value;
      var number = parseInt(cl);
      var letter = cl.substr(parseInt(cl).toString().length);
      if (liElem.length != 0 && cl != "" && te != "" && number > 0 && number < 12 && letter.length == 1) {
        let sav = document.getElementById('save1');
        sav.style.display = 'block';
      }
      if (liElem.length == 0) {
        let pp = document.getElementById('uch');
        if(pp) {
          pp.remove();
        }
        let li = document.createElement("p");
        let t = document.createTextNode("В классе отсутствуют ученики");
        li.id = "uch";
        li.appendChild(t);
        document.getElementById("myUL2").appendChild(li);
        let sav = document.getElementById('save1');
        sav.style.display = 'none';
      }
      if (cl == "" || number < 0 || number > 12 || letter.length != 1) {
        let pp = document.getElementById('cla');
        if(pp) {
          pp.remove();
        }
        let li = document.createElement("p");
        let t = document.createTextNode("Некорректно введен класс");
        li.id = "cla";
        li.appendChild(t);
        document.getElementById("myUL2").appendChild(li);
        let sav = document.getElementById('save1');
        sav.style.display = 'none';
      }
      if (te == "") {
        let pp = document.getElementById('tea');
        if(pp) {
          pp.remove();
        }
        let li = document.createElement("p");
        let t = document.createTextNode("Некорректное id учителя");
        li.id = "tea";
        li.appendChild(t);
        document.getElementById("myUL2").appendChild(li);
        let sav = document.getElementById('save1');
        sav.style.display = 'none';
      }
      if (liElem.length > 0) {
        let pp = document.getElementById('uch');
        if(pp) {
          pp.remove();
        }
      }
      if (cl != "" && number > 0 && number < 12 && letter.length == 1) {
        let pp = document.getElementById('cla');
        if(pp) {
          pp.remove();
        }
      }
      if (te != "") {
        let pp = document.getElementById('tea');
        if(pp) {
          pp.remove();
        }
      }
      else {
        let sav = document.getElementById('save1');
        sav.style.display = 'none';
      };
    }
  }
}

function newElementt() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Введите имя ученика");
  }
  else if (inputValue.indexOf(' ') < 1) {
    alert("Ученик без имени или фамилии");
  }
  else {
    document.getElementById("myUL1").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  const liElem = document.querySelectorAll('li');
  cl = document.getElementById('class').value;
  te = `${tg.initDataUnsafe.user.id}`;
  if (liElem.length != 0 && cl != "" && te != "") {
    let sav = document.getElementById('save2');
    sav.style.display = 'block';
  }
  else {
    let sav = document.getElementById('save2');
    sav.style.display = 'none';
  };

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      const liElem = document.querySelectorAll('li');
      cl = document.getElementById('class').value;
      te = document.getElementById('teacher').value;
      if (liElem.length != 0 && cl != "" && te != "") {
        let sav = document.getElementById('save2');
        sav.style.display = 'block';
      }
      else {
        let sav = document.getElementById('save2');
        sav.style.display = 'none';
      };
    }
  }
}



function iff() {
  const liElem = document.querySelectorAll('li');
  cl = document.getElementById('input').value;
  te = `${tg.initDataUnsafe.user.id}`;
  var number = parseInt(cl);
  var letter = cl.substr(parseInt(cl).toString().length);
  if (liElem.length != 0 && cl != "" && te != "" && number > 0 && number < 12 && letter.length == 1) {
    let sav = document.getElementById('save1');
    sav.style.display = 'block';
  }
  if (liElem.length == 0) {
    let pp = document.getElementById('uch');
    if(pp) {
      pp.remove();
    }
    let li = document.createElement("p");
    let t = document.createTextNode("В классе отсутствуют ученики");
    li.id = "uch";
    li.appendChild(t);
    document.getElementById("myUL2").appendChild(li);
    let sav = document.getElementById('save1');
    sav.style.display = 'none';
  }
  if (cl == "" || number < 0 || number > 12 || letter.length != 1) {
    let pp = document.getElementById('cla');
    if(pp) {
      pp.remove();
    }
    let li = document.createElement("p");
    let t = document.createTextNode("Некорректно введен класс");
    li.id = "cla";
    li.appendChild(t);
    document.getElementById("myUL2").appendChild(li);
    let sav = document.getElementById('save1');
    sav.style.display = 'none';
  }
  if (liElem.length > 0) {
    let pp = document.getElementById('uch');
    if(pp) {
      pp.remove();
    }
  }
  if (cl != "" && number > 0 && number < 12 && letter.length == 1) {
    let pp = document.getElementById('cla');
    if(pp) {
      pp.remove();
    }
  }
  else {
    let sav = document.getElementById('save1');
    sav.style.display = 'none';
  };
}
function ifff() {
  const liElem = document.querySelectorAll('li');
  cl = document.getElementById('class').value;
  te = `${tg.initDataUnsafe.user.id}`;
  console.log(te)
  if (liElem.length != 0 && cl != "" && te != "") {
    let sav = document.getElementById('save2');
    sav.style.display = 'block';
  }
  else {
    let sav = document.getElementById('save2');
    sav.style.display = 'none';
  };
}


async function saveli() {
  let sa = document.getElementById('save1');
  

  const liElements = document.querySelectorAll('li');
  const textValues = [];

  liElements.forEach(element => {
    let isExist = false
    textValues.forEach(name => {
      if (name == element.textContent.replace('×', '')) {
        isExist = true
      }
    })
    if (!isExist) {
      textValues.push(element.textContent.replace('×', ''));
    }
    
  });

  console.log(textValues);

  const data = {
    name: textValues,
    class: document.getElementById('input').value,
    teacher: tg.initDataUnsafe.user.id
  };
  
  // const checkIfExists = async () => {
  //   const response = await fetch('https://65e9d389c9bf92ae3d3a5a5a.mockapi.io/api/v1/students');
  //   const students = await response.json();

  //   const johnExists = students.some(student => student.class === document.getElementById('input').value);

  //   if (!johnExists) {
  //     sendData();
  //   } else {
  //     alert("Класс " + document.getElementById('input').value + " уже существует");
  //   }
  // }

  const sendData = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    await fetch(`${backend}/api/classes`, requestOptions)
      .then(response => {
        if (response.status == 200) {
          sa.style.display = 'none';
        }
        return response.json()
      })
      .then(data => console.log(data))
      .catch(error => {
        console.error('Error', error)
        alert("Класс " + document.getElementById('input').value + " уже существует");
      });
  }
  sendData()
}

async function findclass() {
  try {
    const response = await fetch(`${backend}/api/classes/${document.getElementById('class').value}`)
  console.log(response)
  const data = await response.json()
  console.log(data)
    for ( persons of data.name ) {
        console.log(persons);
        var li1 = document.createElement("li");
        var inputValue1 = persons;
        var t1 = document.createTextNode(inputValue1);
        li1.appendChild(t1);
        document.getElementById("myUL1").appendChild(li1);
        var span1 = document.createElement("SPAN");
        var txt1 = document.createTextNode("\u00D7");
        span1.className = "close";
        span1.appendChild(txt1);
        li1.appendChild(span1);

        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.remove();
          }
        }
      }
      let sav = document.getElementById('save2');
      sav.style.display = 'block';
  } catch (error) {
    console.log(error)
  }
  
}

async function saveli1() {
  let sa = document.getElementById('save2');
  const liElements = document.querySelectorAll('li');
  const textValues = [];
  liElements.forEach(element => {
    textValues.push(element.textContent.replace('×', ''));
  });
  console.log(textValues);
  const data = { name: textValues, class: document.getElementById('class').value, teacher: tg.initDataUnsafe.user.id};
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch(`${backend}/api/classes`, requestOptions)
    .then(response => {
      if (response.status == 200) {
        sa.style.display = 'none';
      }
      return response.json()
    })
    .then(data => console.log(data))
    .catch(error => alert("Вы не являетесь классным руководителем этого класса"));
}
