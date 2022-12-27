// your-app-name/src/RelayEnvironment.js
import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import fetchGraphQL from "./fetchGraphql";

type FetchRelayParams = {
  name: string;
  text: string;
};

async function fetchRelay(params: FetchRelayParams, variables: Object) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay as FetchFunction),
  store: new Store(new RecordSource()),
});
