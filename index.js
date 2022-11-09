const formHtml_form = document.querySelector("form");

const creatPost = async (e) => {
  e.preventDefault();
  const post = {
    nome: formHtml_form.nome.value,
    idade: formHtml_form.idade.value,
    profissao: formHtml_form.profissao.value,
    email: formHtml_form.email.value,
    telefone: formHtml_form.telefone.value,
    datapreenc: formHtml_form.datapreenc.value,
  };
  console.log(post);
  //   window.location.replace("/");
};

formHtml_form.addEventListener("submit", creatPost);
