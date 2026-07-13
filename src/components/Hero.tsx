import { buildApolloPayload } from "../lib/thirdPartyApi";

export function ice_break_with(linkedin_url: string) {
  const payload = buildApolloPayload(linkedin_url);
  return fetch("https://api.apollo.io/v1/icebreaker", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function Hero({ linkedin_url }: { linkedin_url: string }) {
  return (
    <button onClick={() => ice_break_with(linkedin_url)}>
      Break the ice
    </button>
  );
}
