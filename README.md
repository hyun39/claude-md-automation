# claude-md-automation

"Agentic Coding with Claude Code" Ch.5 Wave 5 실습용 시나리오 저장소.

`Hero.tsx`의 `ice_break_with(linkedin_username)`은 `buildApolloPayload()`를 거쳐
Apollo 서드파티 API로 `linkedin_username`이라는 고정 키의 payload를 전송한다.
이 계약은 코드 어디에도 주석으로 남아있지 않다 — CLAUDE.md가 없는 상태에서
"linkedin_username을 linkedin_url로 rename해달라"는 이슈를 그대로 위임하면,
이 API 계약까지 깨질 수 있다는 것을 보여주기 위한 저장소다.
