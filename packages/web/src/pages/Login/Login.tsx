import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { config } from "../../config";
import { Buffer } from "buffer";
import { CtxType } from "../App/App";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useOutletContext<CtxType>();

  const makeLogin = () => {
    const credentials = email + ":" + password;
    const buffer = Buffer.from(credentials);

    fetch(config.LOGIN_ENDPOINT, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: buffer.toString("base64"),
      },
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error("Unsuccessful login");
      })
      .then((json) => {
        setUser(json);
        navigate("/home");
      })
      .catch((err) =>
        navigate("/", { state: { msg: "Usuário ou Senha incorretos" } })
      );
  };

  return (
    <div>
      {location?.state && <p>{location?.state?.["msg"]}</p>}
      <form>
        <label htmlFor="">E-mail</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={makeLogin}
          disabled={!(email && password)}
        >
          Login
        </button>
      </form>
      <p>
        Ainda não é usuário? <Link to="/register">Cadastrar</Link>
      </p>
    </div>
  );
}
