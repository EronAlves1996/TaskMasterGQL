import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";

interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  company: string;
  projects: string[];
}

export type CtxType = [
  User | null,
  React.Dispatch<React.SetStateAction<User | null>>
];

function App() {
  const [user, setUser] = useState<User | null>(null);

  return <Outlet context={[user, setUser]} />;
}

export default App;
