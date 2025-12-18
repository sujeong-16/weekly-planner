# 개발 노트

### 폴더 명명 규칙 정리
- **대문자 시작 (PascalCase)**: 컴포넌트 폴더
  - `Calendar/`, `Memo/`, `Header/`
  - 컴포넌트 파일과 이름 일치
  - React 프로젝트에서 일반적

- **소문자 (lowercase)**: 일반 폴더
  - `hooks/`, `utils/`, `styles/`
  - 더 전통적인 방식
  - Next.js에서 권장

- **선택**: 둘 다 괜찮지만 컴포넌트 폴더임을 한눈에 알아볼 수 있도록 PascalCase 선택했다. 일관성을 잊지말고 작성하자.

### 배운 점
- 일관성: 프로젝트 컨벤션은 팀마다 다르다.
- 폴더 이름을 대문자로도 사용할 수 있다! 하지만 컴포넌트 폴더가 아니라면 사용x

---

### 컴포넌트 계층
```
App
├── Header
├── Calendar
│   ├── WeekView
│   └── DayColumn
└── Memo
    └── MemoItem
```

### 주요 기능
- 주간 달력 네비게이션
- 오늘 날짜 하이라이트
- 메모 추가/삭제

---

## 자주 보는 명령어

### Git
```bash
git add .
git commit -m "메시지"
git push
```

### 개발
```bash
npm run dev        # 개발 서버
npm run build      # 빌드
npm run preview    # 빌드 미리보기
```

### Firebase
```bash
firebase login
firebase init
firebase deploy
```

---

## 트러블슈팅

### Tailwind PostCSS 경고
- **문제**: `@tailwindcss/postcss` 패키지 필요
- **해결**: `npm install -D @tailwindcss/postcss`
- **또는**: 경고 무시하고 진행 (앱 작동에는 문제 없음)

---

## TODO
- [ ] 드래그 앤 드롭 기능
- [ ] Firebase 데이터 저장
- [ ] 반응형 디자인 개선
- [ ] 다크 모드