function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();
  var modal = document.getElementById("myModal");
  var closeBtn = document.getElementById("btnClose");

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    modal.style.display = "block";
  }
}

function closeModal()
{
  var modal = document.getElementById("myModal");
  
  modal.style.display = "none"
}
