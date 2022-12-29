import { Outlet } from "react-router-dom";
import "./App.css";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

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

  return (
    <ErrorBoundary fallback={<p>Algo deu errado</p>}>
      <Suspense fallback={<p>Carregando...</p>}>
        <Outlet context={[user, setUser]} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
