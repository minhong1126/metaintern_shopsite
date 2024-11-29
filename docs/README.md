# 가이드라인
 </br>

# 프로젝트 개요
- 슈킹 사의 신발 판매 사이트입니다. 모바일 친화적인 UI로 설계되었습니다. 

# 시스템 아키텍처
- docs: 작성한 문서 목록들이 정리되어 있습니다.
- components: 컴포넌트들이 정리되어 있습니다. 카드 추가 모듈, 결제 모듈, 상품 모듈로 나뉘어 있습니다.
- assets: 상품 사진들이 담겨 있습니다.
- pages: 페이지들이 구현되어 있습니다.
- state: Atom들이 정리되어 있습니다.

# 개발 환경 설정 및 규칙
## Branch
- main
- docs: 문서
- feature/product: 기본 페이지
- feature/cart: 장바구니 페이지
- feature/link: 페이지 간 연동 및 제품 상세 페이지
- feature/payment: 결제 및 카드 추가 페이지
- pages: 배포용 브랜치
- gh-pages: Github actions 배포
- test: 테스트 코드 추가

# 프로젝트에서 중요했던 지점
- 상태 관리는 Recoil로 구현했습니다.
- 변수의 안전성을 위해 Typescript를 사용했습니다.
- css의 효율적인 관리를 위해 TailwindCSS를 사용했습니다.
- 효율적인 테스트를 위해 Cypress를 사용했습니다.

# 다른 문서를 어떻게 참고하면 좋을지에 대한 가이드
https://github.com/ssac-dev/shooking