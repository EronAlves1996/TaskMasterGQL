import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { useOutletContext } from "react-router-dom";
import { CtxType } from "../App/App";
import { ProjectInfo } from "./Project";
import { MainScreenQuery } from "./__generated__/MainScreenQuery.graphql";
import { ProjectFragment_data$key } from "./__generated__/ProjectFragment_data.graphql";

export function MainScreen() {
  const [user, setUser] = useOutletContext<CtxType>();

  const query = useLazyLoadQuery<MainScreenQuery>(
    graphql`
      query MainScreenQuery($company: String, $projects: [String]) {
        getCompany(_id: $company) {
          name
        }
        getProjectsById(_ids: $projects) {
          ...ProjectFragment_data
        }
      }
    `,
    { company: user?.company, projects: user?.projects }
  );

  return (
    <>
      <section className="company">
        <h3>{query.getCompany?.name}</h3>
      </section>
      <section className="projects">
        {query.getProjectsById?.map((proj) => (
          <ProjectInfo project={proj as ProjectFragment_data$key} />
        ))}
      </section>
    </>
  );
}
