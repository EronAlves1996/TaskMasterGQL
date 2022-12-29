import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CtxType } from "../App/App";

export function AccountSettings() {
  const [user, setUser] = useOutletContext<CtxType>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [errMess, setErrMess] = useState("");
  const [formsVisibility, setFormsVisibility] = useState({
    name: false,
    password: false,
  });
  const [enableSendButton, setEnableSendButton] = useState(false);

  const validateSendButton = () => {
    const { name, password } = formsVisibility;
    if (name && password) return !!username && enableSendButton;
    if (name) return !!username;
    return enableSendButton;
  };

  return (
    <>
      <ul>
        <li>
          <b>Nome:</b> {user?.name}{" "}
          {!formsVisibility.name ? (
            <button
              type="button"
              onClick={() =>
                setFormsVisibility({ ...formsVisibility, name: true })
              }
            >
              Mudar nome
            </button>
          ) : (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
        </li>
        <li>
          <b>Email:</b> {user?.email}
        </li>
      </ul>
      {!formsVisibility.password ? (
        <button
          type="button"
          onClick={() => {
            setFormsVisibility({ ...formsVisibility, password: true });
          }}
        >
          Mudar senha
        </button>
      ) : (
        <div>
          <div>
            Senha Antiga:{" "}
            <input
              type="password"
              value={password.oldPassword}
              onChange={(e) =>
                setPassword({ ...password, oldPassword: e.target.value })
              }
            />
          </div>
          <div>
            Senha Nova:{" "}
            <input
              type="password"
              value={password.newPassword}
              onChange={(e) =>
                setPassword({ ...password, newPassword: e.target.value })
              }
            />
          </div>
          <div>
            Repita a Senha:{" "}
            <input
              type="password"
              onChange={(e) => {
                if (e.target.value === password.newPassword) {
                  setErrMess("");
                  setEnableSendButton(true);
                } else {
                  setErrMess("Senhas não batem");
                  setEnableSendButton(false);
                }
              }}
            />
            {errMess && <p>{errMess}</p>}
          </div>
        </div>
      )}
      <button type="button" disabled={!validateSendButton()}>
        Salvar meus dados
      </button>
    </>
  );
}
