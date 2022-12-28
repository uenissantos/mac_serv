import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MenuSecundario } from "../../components/MenuSecundario/MenuSecundario";
import * as Styled from "./styles";
import { app } from "../../FaribaseConfig/Firebase";
import solucao from "../../assets/solucao.png";
import pdf from "../../assets/pdf.png";
import { Button } from "../../components/Buttom/Button";
import { Image } from "../../components/Image";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { storage } from "../../FaribaseConfig/Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const TrabalheConosco = () => {
  const [admin, setadmin] = useState(false);

  let email = "uenis@gmail.com";
  let password = "12345678";
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      email;
      password;
      const user = userCredential.user;

      setadmin(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  /////////////////////////////////////////////////////////
  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setPorgessPorcent] = useState("Anexar");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState(false);
  const [curriculo, setcurriculo] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(app);
  const usersCollectionRef = collection(db, "candidato");

  async function criarDado() {
    try {
      const user = await addDoc(collection(db, "candidato"), {
        name,
        curriculo,
        imgURL,
      });

      resetDados();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function resetDados() {
    setImage("");
    setImgURL("");
    setName("");
    setcurriculo("");
    setPorgessPorcent("curriculo enviado");
    location.reload();
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  async function deleteUser(id) {
    const userDoc = doc(db, "candidato", id);
    await deleteDoc(userDoc);
  }

  const handleSubmit = (event) => {
    if (imgURL !== "") {
      criarDado();
    }

    event.preventDefault();

    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  const menu = [
    { children: "Home/", href: "/", newTab: false },

    {
      children: "Trabalhe Conosco",
      href: "",
      newTab: false,
      classe: "thisPage",
    },
  ];

  useEffect(() => {
    tratar(), [progressPorcent];
  });

  function tratar() {
    if (progressPorcent === 100) {
      setPorgessPorcent("enviar curriculo");
      setSuccess(true);
    }
  }

  return (
    <Styled.TrabalheConosco>
      {/*    <div className="Administrador">
        <Button>Administrador</Button>
      </div>

      <div className="login">
        <form>
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="senha" />
        </form>
      </div> */}

      <MenuSecundario menu={menu} title={"Tabalhe conosco"} />

      {admin == false && (
        <div className="formulario">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={curriculo}
            onChange={(e) => setcurriculo(e.target.value)}
          />
          <input
            type="text"
            placeholder="curriculo"
            value={imgURL}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      )}
      {admin == false && (
        <form onSubmit={handleSubmit}>
          <input type="file" className="input4" />
          {success && (
            <p>
              informações anexadas com sucesso , a pagina será atualizada ao
              enviar
            </p>
          )}
          <button id="enviar"> {progressPorcent}</button>
        </form>
      )}

      <div className="admin">
        {admin &&
          users.map((user) => {
            return (
              <ul key={user.id}>
                <li className="name"> {user.name}</li>
                <li className="email">
                  {" "}
                  <a href={`mailto:${user.curriculo}`}>{user.curriculo} </a>
                </li>

                <li className="curriculo">
                  <p className="baixar"> visualizar curriculo</p>
                  <a href={user.imgURL} download>
                    {" "}
                    <Image src={pdf} alt="baixar curriculo" />{" "}
                  </a>
                </li>
                <button onClick={() => deleteUser(user.id)}>Deletar</button>
              </ul>
            );
          })}
      </div>
      <Image className={"image"} src={solucao} />
    </Styled.TrabalheConosco>
  );
};
