export const metadata = {
  title: "Notas personales",
};

export default function Notas() {
  return (
    <>
      <h1>About US</h1>
      <h2>Voy a precisar comsumir API de Wikipedia</h2>
      <p>
        Programmers should be considered like musicians or writers: they take
        elements of a certain language and put them toghether to create an
        artwork. Who do you believe are the 100 most talented programmers in the
        whole history?
      </p>
      Que los usuarios vayan poniendo sus candidatos. La idea es poner un form
      en el que los usuario vayan postulando sus programadores. Al final del
      form hay un checkbox con el que el usuario inicia sesión con Google,
      GitHub o Facebook. Sólo un check box.
      <p>
        Asumimos que los postulados, debido a sus contribuciones a la
        disciplina, se ganaron la distinción de estar en Wikipedia
      </p>
      <p>Form:</p>
      <p>Candidato (poner filtro con el array de candidatos)</p>
      <p>
        Radio button, o checkbox o loguitos para iniciar sesión con Google, FB,
        o Github
      </p>
      <p>Para programadores: poner link al github del proyecto</p>
    </>
  );
}
