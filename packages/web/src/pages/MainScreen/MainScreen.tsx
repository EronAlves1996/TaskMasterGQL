import { graphql } from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { Link } from "react-router-dom";
import { MainScreenQuery } from "./__generated__/MainScreenQuery.graphql";

export function MainScreen() {
  const query = useLazyLoadQuery<MainScreenQuery>(
    graphql`
      query MainScreenQuery {
        allUsers {
          id
          name
          email
        }
      }
    `,
    {}
  );

  const { allUsers } = query;

  return (
    <>
      <Link to={"/conta"}>Minha conta</Link>
      <Suspense fallback={<p>Carregando...</p>}>
        <div>
          {allUsers?.map((user) => (
            <div key={user?.id}>
              <p>{user?.id}</p>
              <p>{user?.name}</p>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
}
