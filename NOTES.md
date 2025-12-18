# 개발 노트

## 프로젝트 컨벤션

### 폴더 명명 규칙
- **PascalCase (대문자 시작)**: 컴포넌트 폴더
  - 예: `Calendar/`, `Memo/`
  - 컴포넌트 파일과 이름 일치
  - 한눈에 컴포넌트 폴더임을 알 수 있음
  
- **lowercase (소문자)**: 일반 폴더
  - 예: `hooks/`, `utils/`, `styles/`
  - 유틸리티나 설정 폴더에 사용

**중요**: 일관성을 유지하자!
<br><br>

## 컴포넌트 구조

### 컴포넌트 계층
```
App
├── Header (현재 날짜 표시)
├── Calendar (주간 달력)
│   ├── WeekView (주간 뷰)
│   └── DayColumn (일별 컬럼)
└── Memo (메모 영역)
    └── MemoItem (메모 아이템)
```

### 주요 기능
- 주간 달력 네비게이션 (이전/다음/오늘)
- 오늘 날짜 자동 하이라이트
- 메모 추가/삭제
<br><br>

## 자주 사용하는 명령어

### 개발 서버
```bash
npm run dev        # 개발 서버 실행
npm run build      # 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
```

### Git 기본 작업
```bash
git status              # 변경사항 확인
git add .               # 모든 파일 스테이징
git commit -m "메시지"  # 커밋
git push origin main    # 푸시
```

### Firebase
```bash
firebase login     # Firebase 로그인
firebase init      # 프로젝트 초기화
firebase deploy    # 배포
```
<br><br>

## Git 커밋 메시지 가이드

### 커밋 유형 (Conventional Commits)
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **style**: 코드 스타일 변경 (기능 변화 없음)
- **refactor**: 코드 리팩토링
- **docs**: 문서 수정
- **chore**: 기타 변경사항 (빌드, 설정)

### 커밋 메시지 작성 규칙
1. 첫 줄: 50자 이내, 명령형
2. 본문: 상세 설명이 필요하면 한 줄 띄우고 작성

**형식**:
```
유형: 간단한 설명

- 상세 내용 1
- 상세 내용 2
```

**예시**:
```bash
feat: 기본 컴포넌트 구조 및 레이아웃 구현

- Calendar 컴포넌트 (주간 달력 뷰)
- Memo 컴포넌트 (메모 추가/삭제)
- Header 컴포넌트 (현재 날짜 표시)
- 오늘 날짜 하이라이트 기능
- 주간 네비게이션 (이전/다음/오늘)
```
<br><br>
### 유용한 Git 명령어

#### 마지막 커밋 수정
```bash
git commit --amend           # 커밋 메시지 수정
git push --force             # 강제 푸시 (혼자 작업할 때만!)
```

#### 특정 파일만 커밋
```bash
git add src/components/Calendar/Calendar.jsx
git commit -m "feat: Calendar 컴포넌트 수정"
```

#### 작업 임시 저장
```bash
git stash           # 현재 작업 임시 저장
git stash list      # 저장 목록 확인
git stash pop       # 저장한 작업 복원
```

### 주의사항
- `git push --force`는 혼자 작업하는 브랜치에서만 사용
- 커밋은 의미 있는 단위로 나누기
- 커밋 메시지는 나중에 봐도 이해할 수 있게 명확하게 작성
<br><br>

## 트러블슈팅

### Tailwind PostCSS 경고
**문제**: `@tailwindcss/postcss` 패키지 필요 경고  
**해결**:
1. `npm install -D @tailwindcss/postcss` 설치
2. 또는 경고 무시하고 진행 (앱 작동에는 문제 없음)

---

## TODO
- [ ] 드래그 앤 드롭 기능
- [ ] Firebase 데이터 저장/불러오기
- [ ] 반응형 디자인 개선
- [ ] 다크 모드 지원
<br><br><br>

## Markdown 미리보기 방법
```
Ctrl + Shift + V
```