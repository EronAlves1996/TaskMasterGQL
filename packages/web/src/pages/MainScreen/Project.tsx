import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { ProjectFragment_data$key } from "./__generated__/ProjectFragment_data.graphql";

type Props = {
  project: ProjectFragment_data$key;
};

export function ProjectInfo(props: Props) {
  const projectData = useFragment(
    graphql`
      fragment ProjectFragment_data on project {
        name
        description
        deadline
      }
    `,
    props.project
  );

  return (
    <div>
      <h4>{projectData.name}</h4>
      <p>{projectData.description}</p>
      <p>{projectData.deadline}</p>
    </div>
  );
}
