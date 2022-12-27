import { useState } from "react";

export function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState({
    disabled: true,
    msg: "Senhas não conferem",
  });

  const register = () => {};

  return (
    <div>
      <form>
        <label>Seu Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Seu Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Escolha uma senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Repita a senha</label>
        <input
          type="password"
          onChange={(e) => {
            if (e.target.value !== password)
              setMatchPassword({ disabled: true, msg: "Senhas não conferem" });
            else setMatchPassword({ disabled: false, msg: "" });
          }}
        />
        {matchPassword.disabled && <p>{matchPassword.msg}</p>}
        <button
          type="button"
          disabled={matchPassword.disabled && !(name && email && password)}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
