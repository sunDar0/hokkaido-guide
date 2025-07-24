# 홋카이도 인터랙티브 여행 가이드

이 프로젝트는 홋카이도의 주요 명소들을 인터랙티브 지도에 표시하고, 각 명소에 대한 자세한 정보를 제공하는 웹 기반 여행 가이드입니다.

🌐 **[라이브 데모 보기](https://sunDar0.github.io/hokkaido-guide)**

## ✨ 주요 기능

-   **인터랙티브 지도:** Leaflet.js를 활용하여 홋카이도 지도를 표시합니다.
-   **명소 마커:** 홋카이도 내 다양한 명소들이 지도에 마커로 표시됩니다.
-   **상세 정보 패널:** 마커 클릭 시 해당 명소의 이름과 상세 설명이 사이드 패널에 나타납니다.
-   **지역별 필터링:** 삿포로, 오타루, 하코다테 등 지역별로 명소를 필터링하여 볼 수 있습니다.

## 🚀 기술 스택

-   HTML5
-   CSS3
-   JavaScript
-   [Leaflet.js](https://leafletjs.com/) (인터랙티브 지도 라이브러리)

## ⚙️ 프로젝트 실행 방법

1.  **저장소 클론 (선택 사항):**
    ```bash
    git clone <저장소_URL> # 이 프로젝트가 Git 저장소에 있다면
    cd hokkaido-guide
    ```
2.  **파일 열기:**
    `index.html` 파일을 웹 브라우저에서 직접 엽니다. (예: Chrome, Firefox 등)
    또는, Live Server와 같은 개발 서버를 사용하여 실행할 수 있습니다.

    ```bash
    # VS Code 사용자의 경우
    # VS Code 확장 마켓플레이스에서 'Live Server'를 설치 후
    # index.html 파일에서 우클릭 -> 'Open with Live Server' 선택
    ```

## 📁 프로젝트 구조

```
hokkaido-guide/
├── index.html      # 웹 페이지의 기본 구조 및 콘텐츠
├── style.css       # 웹 페이지의 스타일 정의
└── script.js       # 지도 초기화, 마커 추가, 필터링 및 정보 표시 로직
└── README.md       # 프로젝트 설명 (현재 파일)
```

### GitHub Pages 활성화
1. GitHub 리포지토리 페이지에서 **Settings** 탭 클릭
2. 좌측 메뉴에서 **Pages** 클릭
3. **Source** 섹션에서 **Deploy from a branch** 선택
4. **Branch**를 **main**으로, **Folder**를 **/ (root)**로 설정
5. **Save** 클릭

