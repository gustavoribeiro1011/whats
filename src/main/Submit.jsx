const Submit = function Submit(nome, email, coment) {
  if (nome !== "" && email !== "") {
    const mobile = "+554399262702";
    const api = "https://api.whatsapp.com/";
    const sendPhone = "send?phone=" + mobile;
    const text = (
      "Nome: " +
      nome +
      " E-mail: " +
      email +
      " Comentários: " +
      coment
    ).replace(" ", "%20");

    //Submit
    window.open(api + sendPhone + "&text=" + text, "_blank");
  }
};

export default Submit;
