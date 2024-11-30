## 📌 기본 정보
### 프로젝트명: 
인턴 IN 메타 3기 응용소프트웨어 개발 프로젝트 페이지
> 모바일 친화 신발 판매 사이트 구현

### 링크: https://minhong1126.github.io/metaintern_shopsite/

### 사용한 기술: 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

### Branch
- main
- docs: 문서 파일 저장
- feature/product: 기본 페이지
- feature/cart: 장바구니 페이지
- feature/link: 페이지 간 연동 및 제품 상세 페이지
- feature/payment: 결제 및 카드 추가 페이지
- pages: 배포용 브랜치
- gh-pages: Github actions 배포
- test: 테스트 코드 추가

### 중점에 둔 사항
- 다양한 기술을 사용하는데에 중점을 두었습니다.
  - 타입 안정성을 위해 기본 React에서 Typescript를 응용했습니다.
  - 빠른 개발 속도를 위해 TailwindCSS를 사용했습니다.
  - 상태 관리를 해야 하는 변수가 적어 Recoil을 사용했습니다.
- 정확하고 세세한 테스트를 위해 노력했습니다.
  - 간편하고 자동화된 테스트를 위해 Cypress를 사용했습니다.
  - 컴포넌트 단위보다는 사용자의 사용 중 경험의 오류가 더 치명적이라 생각해 E2E 테스트 방식을 사용했습니다.
  - 성공, 사용 및 입력 중 중단 등의 케이스로 나눴습니다. 추후 입력값 오류 등 오류 상황에서의 테스트 코드를 추가할 예정입니다.
- 안정적인 배포를 위해 Github Pages를 사용했습니다.
- 원할한 유지보수를 생각했습니다.
  - docs 브랜치에 기능 별 요구사항 분석서, 고객 요구사항, 리뷰 문서를 제작했습니다.
  - 주기적인 리팩토링을 위해 버그 issue를 생성했습니다. 

### 디자인:
https://www.figma.com/design/DKeR5wR65RkxcAWReoBccl/%EC%9D%91%EC%9A%A9%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%95%88?node-id=0-1&node-type=canvas&t=gePNHR5wXMkmvlEh-0

## 참고
https://github.com/ssac-dev/shooking
