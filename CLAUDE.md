# CLAUDE.md

## 아키텍처 노트

- `Hero.tsx`의 `ice_break_with(linkedin_username)`은 `buildApolloPayload()`를 거쳐
  Apollo 서드파티 API(`https://api.apollo.io/v1/icebreaker`)로 그대로 전송된다.
- `buildApolloPayload`가 반환하는 객체의 키 `linkedin_username`은 Apollo API 스펙에
  고정되어 있다. 함수 인자·props·지역 변수 이름은 자유롭게 바꿔도 되지만,
  `buildApolloPayload`가 만드는 payload 객체의 키 이름(`linkedin_username`)만은
  절대 바꾸면 안 된다 — 바꾸면 실제 Apollo 호출이 깨진다.
