import { buildApolloPayload } from "../lib/thirdPartyApi";

export function ice_break_with(linkedin_username: string) {
  const payload = buildApolloPayload(linkedin_username);
  return fetch("https://api.apollo.io/v1/icebreaker", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function Hero({ linkedin_username }: { linkedin_username: string }) {
  return (
    <button onClick={() => ice_break_with(linkedin_username)}>
      Break the ice
    </button>
  );
}
