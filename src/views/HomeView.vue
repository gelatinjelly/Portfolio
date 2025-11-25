<script setup>
import { ref } from 'vue'

// Swiper 관련 기능들 불러오기
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper 스타일 불러오기
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Autoplay, Pagination, Navigation];

const isModalOpen = ref(false)
const selectedProject = ref(null)
const scrollToProjects = () => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }

const openModal = (projectData) => {
  selectedProject.value =projectData
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}

const introState = ref({
  intro: true,
  pros: true,
  exp: true
})

const toggleIntro = (key) => { introState.value[key] = !introState.value[key] }

const projects = ref([
  {
    id: 1,
    title: '비상! 화장실\n(3인 팀 프로젝트)',
    period: '2025.05 ~ 2025.06',
    description: `
    - 사용자 현재 위치 기반 주변 공주화장실 제공
    - 현위치에서 선택한 화장실까지 경로 안내`,
    overview: '이 프로젝트는 낯선 장소에서 화장실을 찾기 어려운 상황을 해결하기 위해 기획되었습니다. 주요 기능으로는 위치 기반 화장실 탐색, 상세 정보 및 길찾기 기능이 있습니다.',
    features: '- 현재 위치 기반 화장실 탐색 기능: 애플리케이션 실행 시 사용자의 현재 위치를 자동으로 추적하여 지도 중심에 표시합니다. 사용자 반경 500m 이내의 공중화장실이 지도에 마커 형태로 시각화 됩니다.\n- 상세 정보 확인 및 길찾기 기능: 마커 클릭시 하단에 정보창이 나타납니다. 이름, 주소, 개방 시간, 기저귀 교환대 유무 등 세부 정보를 제공합니다. 길찾기 버튼을 누르면 Google 지도가 실행되어 경로를 안내합니다.',
    screenshots: ['/toilet_1.png', '/toilet_2.png', '/toilet_3.png'],
    image: '/toilet_1.png',
    techStack: [{ name: 'Java', icon: 'devicon-java-plain colored' }, { name: 'Firebase', icon: 'devicon-firebase-plain colored'}, { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored' }],
    githubLink: '',
  },

  {
    id: 2,
    title: '대중교통 길찾기 앱\n(개인 프로젝트)',
    period: '2025.03 ~ 2025.05',
    description: `
    - 도착 시간 기준으로 길찾기 기능을 제공
    - 경로 정보를 켈리더에 저장 후 해당 날에 알림 제공`,
    overview: '이 프로젝트는 국내 지도 애플리케이션에서는 기본적으로 위치 검색, 현재 시간 기준 길찾기, 특정 시간 기준 길찾기 등의 기능을 기본적으로 제공하고 있지만, 도착 시간을 기준으로 한 길찾기 기능은 지원하지 않고 있어 기획하게 되었습니다. 사용자가 입력한 도착 시간에 맞춰 출발 시간과 최적 경로를 역산하여 제시하는 기능이 있습니다.',
    features: '- 도착지 키워드 검색: 사용자가 입력한 주소 또는 상호명 등의 키워드를 기반으로, Kakao Map API를 이용하여 해당 위치 정보를 검색하고, 지도에 해당 위치를 마커로 시각화합니다.\n- 소요시간 및 출발시간 제공: 사용자가 도착 시간을 선택하면, T Map 대중교통 API를 활용하여 현재 시각 기준 경로 탐색을 수행하고 도착지까지의 예상 소요 시간을 계산 후, 입력된 도착 시간에서 소요 시간을 역산하여 출발 시간을 자동으로 계산하여 사용자에게 제공합니다.\n- 최적 경로 제공: 목적지까지의 다양한 경로 중 최적의 경로를 계산하여 사용자에게 시각화 하여 경로 안내를 합니다.\n- 일정등록 및 알림기능: 사용자가 경록 탬색 결과를 일정으로 등록하면, 해당 정보를 기기 내 캘린더와 연동하여 저장하고 출발 시간이 임박할 경우 사용자에게 출발 시점을 푸시 알림을 통해 사용자에게 알려줍니다.',
    screenshots: ['DT_2.jpg', 'DT_3.jpg', 'DT_4.jpg', 'DT_5.jpg', 'DT_6.jpg', 'DT_7.jpg', 'DT_8.jpg'],
    image: 'DT_1.png',
    techStack: [{ name: 'Java', icon: 'devicon-java-plain colored' }, { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored' }, { name: 'RoomDB', icon: 'RoomDB-icon.png', isImage: true }, { name: 'Restful API', icon: 'Restful-icon.jpg', isImage: true }],
    githubLink: 'https://github.com/gelatinjelly/DT-Map',
  },

  {
    id: 3,
    title: 'PC 부품 커뮤니티 사이트\n(개인 프로젝트)',
    period: '2024.11 ~ 2024.12',
    description: `
    - JSP기반 MVC 아키텍처로 웹 커뮤니티 사이트 제작
    - MySQL과 연동하여 게시글 작성, 조회, 수정, 삭제 등 CRUD구현`,
    overview: '이 프로젝트는 JSP와 MVC 아키텍처로 국내 컴퓨터 커뮤니티를 벤치마킹하여 제작하였습니다. MySQL을 사용하여 사용자 아이디, 비밀번호, 이메일을 저장하여 사용자들을 관리 할 수 있으며, 해당 사용자가 적은 글이나 댓글들을 또한 관리할 수 있습니다.',
    features: '- 회원가입 및 로그인 기능: 기존에 가입하지 않은 사용자라면 아이디, 이메일, 비밀번호를 입력받아 회원 정보를 저장합니다. 회원가입시 이메일 형식이 맞지 않거나, 이미 사용중인 아이디일 경우 회원가입이 불가능하도록 하였습니다. 기존에 가입한 사용자라면 아이디와 비밀번호를 입력받아 로그인 할 수 있습니다.\n- 컴퓨터 관련 정보 제공: 기존에 작성된 컴퓨터 부품, 견적 잡는 방법, 조립 방법 등의 내용을 볼 수 있으며, 댓글에 추가 정보나 의견을 적을 수 있으며, 다른 사용자가 작성한 댓글 또한 볼 수 있습니다.\n- 질문 게시판: 질문 게시판을 통해 사이트에 질문글을 올릴 수 있습니다. 이때 다른 사람의 질문글에 댓글을 달거나 사용자가 직접 질문글을 올릴수 있습니다. 자신이 작성한 게시글의 경우 수정하거나 삭제할 수 있습니다.',
    screenshots: [ 'CC_4.png', 'CC_2.png', 'CC_3.png', 'CC_5.png', 'CC_6.png', 'CC_7.png', 'CC_8.png', 'CC_9.png'],
    image: 'CC_1.png',
    techStack: [{ name: 'HTML5 / CSS3', icon: 'devicon-html5-plain colored'}, { name: 'JSP', icon: 'jsp-icon.png', isImage: true }, { name: 'Java', icon: 'devicon-java-plain colored' }, { name: 'MySQL', icon: 'devicon-mysql-original colored' }, {name: 'eclipse', icon: 'devicon-eclipse-plain-wordmark'}],
    githubLink: 'https://github.com/gelatinjelly/Computer-Community',
  },

  {
    id: 4,
    title: '과제 메모장\n(3인 팀 프로젝트)',
    period: '2024.10 ~ 2024.12',
    description: `
    - 과목, 내용, 제출 날짜를 입력받아 남은 기한 계산
    - Oracle DB를 이용하여 회원가입 / 로그인 페이지 구현`,
    overview: '이 프로젝트는 window환경에서 과제를 쉽고 편리하게 관리할 수 있도록 하기 위해 NetBeans와 Oracle Database를 이용하여 제작하였습니다.',
    features: '- 로그인 / 회원가입 기능: 기존에 가입하지 않은 사용자라면 아이디, 비밀번호를 입력받아 회원 정보를 저장합니다. 이때 CAPTCHA를 입력하게 되는데 만약 입력된 문자가 CAPTCHA와 맞지 않으면 회원가입이 이루어지지 않아 다시 가입을 시도해야합니다.\n- 과제 관리: 과목명, 과제 내용, 제출 날짜를 입력하여 과제를 추가할 수 있습니다. 목록에서 과제를 선택하여 수정할 수 있으며, 과제를 삭제할 수 있습니다. 입력된 과재는 마감 기한이 적게 남음에 따라 자동으로 정렬됩니다. 과제 마감일은 D-Day형식으로 표시됩니다.',
    screenshots: ['TM_2.png', 'TM_3.png', 'TM_4.png', 'TM_5.png', 'TM_6.png', 'TM_7.png', 'TM_8.png'],
    image: 'TM_1.png',
    techStack: [{ name: 'Java', icon: 'devicon-java-plain colored' }, { name: 'Oracle Database', icon: 'devicon-oracle-original colored' }, { name: 'NetBeans', icon: 'devicon-netbeans-plain colored' }],
    githubLink: '',
  },

  {
    id: 5,
    title: '비주얼 노벨 게임 제작\n(2인 팀 프로젝트)',
    period: '2024.08 ~ 2024.12',
    description: `
    - Unity를 활용하여 비주얼 노벨 게임 제작
    - 진행 상황 및 환경 설정 정보를 JSON으로 저장`,
    overview: 'Unity 프로그램을 사용하여 비주얼 노벨 장르의 게임을 제작하였습니다. 게임의 제목은 Nice Requester로, Request는 의뢰라는 의미로, 여기에 -er을 붙여 의뢰자를 의미하고, Nice는 좋다를 의미하는 단어로 이를 합쳐 ‘좋은 의뢰자’를 의미합니다. 게임의 전체적인 구성이 손님(npc)에게 적절한 의뢰를 찾아주고, 그것을 통해 이야기를 진행하는 구조를 시사해줍니다',
    features: '- 게임 배경: 플레이어는 판타지 세계의 길드에서 일하는 종업원의 시점으로 게임을 진행하게 됩니다. 카운터에는 NPC들이 자신에게 맞는 의뢰를 받기 위해 찾아오고, 플레이어는 길드에 의뢰를 받으러 오는 사람들에게 알맞은 의뢰를 찾아주며, 그들의 컨디션을 관리하는 역할을합니다. 길드 창구에서 찾아온 모험가들이랑 이야기를 할 때는 3인칭으로 진행되며, 그 외에는 탑 뷰로 플레이하게 됩니다.\n- 타이틀 화면 구성 요소: 타이틀 화면 메뉴 구성으로 새 게임, 이어하기, 갤러리, 환경설정, 종료가 있습니다. 새 게임은 기존에 플레이한 데이터가 없거나 기존에 진행한 데이터가 있지만 처음부터 진행 하고 싶을 때누르는 버튼이며, 게임을 처음부터 플레이할 수 있습니다. 이어하기는 기존에 플레이한 데이터가 있을 경우 그 지점부터 이어서 플레이 할 수 있는 기능입니다.만약 끝까지 플레이 하였을 경우 새 게임을 눌러 달라는 팝업창을 띄운다. 갤러리는 주인공이나 길드장과 같은 등장인물에 대한 설정과 그림을 볼 수 있는 화면으로 이동하고, 환경설정은 해상도와 소리를 조절할 수 있는 팝업창을 띄워 사용자의 환경에 맞게 조절 할 수 있도록 했습니다. 바탕화면으로는 게임을 종료하고 바탕화면으로 나가는 버튼입니다.\n- 갤러리 화면 구성: 게임을 플레이 하지 않아 데이터가 없을 경우 등장인물들의 실루엣만 보이도록 했으며, 플레이 데이터가 없었을 때 실루엣 이미지를 누를 경우 \'만난 적이 없는 모험가 입니다\'라고 써진 팝업창을 띄웁니다. 모든 모험가를 만난 후 갤러리를 방문할 경우 실루엣이 아닌 정상적인 일러스트가 보이게 되며, 일러스트를 누르게 되면 해당 등장인물에 대한 설정을 볼 수 있습니다. 화면 상단의 화살표 버튼을 눌러 다시 타이틀 화면으로 돌아갈 수 있습니다.',
    screenshots: ['NR_1.png', 'NR_2.png', 'NR_3.png', 'NR_4.png', 'NR_5.png', 'NR_6.png', 'NR_7.png', 'NR_8.png', 'NR_9.png', 'NR_10.png', 'NR_11.png'],
    image: 'NR_1.png',
    techStack: [{ name: 'C#', icon: 'devicon-csharp-plain colored' }, { name: 'JSON', icon: 'devicon-json-plain colored' }, { name: 'Unity', icon: 'devicon-unity-plain colored'}],
    githubLink: 'https://github.com/gelatinjelly/Nice-Requester',
  },

])
</script>

<template>
  <main>
    <section id="about" class="main-profile">
      <img src="/profile.png" alt="강지승 프로필 사진" class="profile-img">
      <h1>강지승</h1>
      <p>전화번호: 010-7164-6663</p>
      <p>이메일: rkdwltmd57@naver.com</p>
      <div class="button-group">
        <a href="컴퓨터정보공학과_강지승_이력서_자기소개서.pdf" class="btn" download="강지승_이력서.pdf">이력서 다운로드</a>
        <button @click="scrollToProjects">프로젝트 보기</button>
      </div>
    </section>

    <hr>
    <section class="about">
      <h1 class="section-title">About</h1>
      <div class = "intro-toggle" @click = "toggleIntro('intro')">
        <h3>1. 자기소개 및 지원 동기</h3>
        <span class = "toggle-icon">{{ introState.intro ? '🔼 접기' : '🔽 펼치기' }}</span>
      </div>
      <div class = "intro-content" v-show = "introState.intro">
        <p>
        저는 새로운 기술을 배우고 적용하는 과정에서 성취감을 느끼는 개발자 강지승입니다. 중학교 시절 단순한 챗봇 코드에 흥미를 가지며 프로그래밍을 시작했고, 대학에 진학한 이후에는 웹, 앱, 서버 등 다양한 프로젝트를 수행하였습니다.<br><br>
        특히 API 연동과 데이터베이스 설계를 통해 안정적이고 실용적인 시스템을 구현하는 과정에서 큰 흥미를 느꼈습니다. JSP 기반 커뮤니티 사이트, Android 대중교통 길찾기 앱, Python Discord 봇 개발을 통해 웹·앱·DB 전반에 대한 경험을 확장할 수 있었습니다.<br><br>
        앞으로 새로운 기술을 능동적으로 학습하고 적용하며, 안정적이고 신뢰할 수 있는 시스템을 구축하는 개발자로 성장하고자 합니다.
        </p>
      </div>

      <div class = "intro-toggle" @click = "toggleIntro('pros')">
        <h3>2. 성격의 장단점</h3>
        <span class = "toggle-icon">{{ introState.pros ? '🔼 접기' : '🔽 펼치기' }}</span>
      </div>
      <div class = "intro-content" v-show = "introState.pros">
        <p>
          저의 가장 큰 장점은 문제 해결 과정 자체를 즐긴다는 점입니다. 오류 메시지를 추적하거나 요청·응답 구조를 분석하여 원인을 밝혀내는 과정에서 오히려 재미를 느끼고, 이를 통해 더 안정적인 결과물을 만들어낼 수 있었습니다.<br><br>
          반면, 문제 해결에 지나치게 몰입하다 보니 일정 관리가 부족했던 경험도 있었습니다. 이를 보완하기 위해 프로젝트 초기에 목표를 세분화하고 우선순위를 정해 관리하는 습관을 들였고, 이후에는 기한 내에 높은 완성도로 결과를 낼 수 있었습니다.
        </p>
      </div>

      <div class = "intro-toggle" @click = "toggleIntro('exp')">
        <h3>3. 지원분야와 관련된 활동 및 학습경험</h3>
        <span class = "toggle-icon">{{ introState.exp ? '🔼 접기' : '🔽 펼치기' }}</span>
      </div>
      <div class = "intro-content" v-show = "introState.exp">
        <p>
          다양한 프로젝트를 수행하며 백엔드와 데이터베이스 중심의 역량을 키워왔습니다. JSP 기반의 커뮤니티 사이트를 제작하며, MySQL과의 연동을 통해 CRUD 기능과 세션 관리 기능을 직접 구현하였습니다. 이를 통해 웹 서비스의 기본 구조를 이해하고, DB와 서버 로직을 연결하는 경험을 쌓았습니다.<br><br>
          또한 Android 플렛폼에서는 대중교통 길찾기 앱을 개발하였습니다. Kakao Map과 T Map 대중교통 API를 연동하여 도보·버스·지하철 경로를 시각화 하고, RoomDB를 활용해 경로 및 일정을 저장·관리하는 기능을 구현하였습니다. 이 과정을 통해 외부 API 문서를 분석하여 서비스에 적용하는 능력과 로컬 및 클라우드 데이터베이스를 효율적으로 활용하는 방법을 익혔습니다.<br><br>
          특히 대중교통 길찾기 앱은 단순한 학습 프로젝트에 그치지 않고 개발 과정을 정리해 논문으로 작성하여 한국컴퓨터정보학회 하계 학술대회에서 우수논문상을 수상하는 성과로 이어졌습니다. 이를 통해 학습한 내용을 실질적인 결과로 발전시키는 경험을 얻을 수 있었고, 앞으로 자기주도적 학습과 도전을 통해 전문성을 지속적으로 강화해 나가고자 합니다.
        </p>
      </div>
      
      <hr class = "divider">
      <h3 class = "table-h3">📜 자격증</h3>
      <table>
        <thead>
          <tr>
            <th>자격증 이름</th>
            <th>발급 기관</th>
            <th>취득일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> - </td>
            <td> - </td>
            <td> - </td>
          </tr>
        </tbody>
      </table>

      <h3 class = "table-h3">🏆 수상 경력</h3>
      <table>
        <thead>
          <tr>
            <th>상장구분</th>
            <th>대회명</th>
            <th>대회 일자</th>
            <th>대회 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>우수상</td>
            <td>한국컴퓨터정보학회 하계 학술대회</td>
            <td>2025.07.11</td>
            <td>도착 시간 기준 최적 경로 제공 Map 구현 논문 작성</td>
          </tr>
        </tbody>
      </table>
      <h3 class = "table-h3">🪖 병역</h3>
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>군별</th>
            <th>복무 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>육군 (만기전역)</td>
            <td>병장</td>
            <td>2021.12.20 ~ 2023.06.19</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr> 
    <section id="skills">
      <h1 class="section-title">Skills</h1>
      <div class="skills">
        <div class="skill-item">
          <img src="/java-logo.png" alt="Java logo" class = "skill-logo">
          <h3>Java</h3>
          <div class = "skill-bar-container">
            <div class = "skill-row">
              <span class = "skill-label">숙련도</span>
              <div class = "skill-bar-bg">
                <div class = "skill-bar-fill" style = "width: 70%"></div>
              </div>
              <span class = "skill-percent">70%</span>
            </div>
          </div>
          <p class = "skill-desc">사용 경험: (사용 경험 나열)</p>
        </div>

        <div class="skill-item">
          <img src="/python-logo.png" alt="Python logo" class = "skill-logo">
          <h3>Python</h3>
          <div class = "skill-bar-container">
            <div class = "skill-row">
              <span class = "skill-label">숙련도</span>
              <div class = "skill-bar-bg">
                <div class = "skill-bar-fill" style = "width: 60%"></div>
              </div>
              <span class = "skill-percent">60%</span>
            </div>
          </div>
          <p class = "skill-desc">사용 경험: (사용 경험 나열)</p>
        </div>

        <div class="skill-item">
          <img src="/db-logo.png" alt="Database-logo" class = "skill-logo">
          <h3>Database</h3>
          <div class = "skill-bar-container">
            <div class = "skill-row">
              <span class = "skill-label">숙련도</span>
              <div class = "skill-bar-bg">
                <div class = "skill-bar-fill" style = "width: 60%"></div>
              </div>
              <span class = "skill-percent">60%</span>
            </div>
          </div>
          <p class = "skill-desc">사용 경험: (사용 경험 나열)</p>
        </div>

        <div class="skill-item">
          <img src="/android-logo.png" alt="Android-logo" class = "skill-logo">
          <h3>Android</h3>
          <div class = "skill-bar-container">
            <div class = "skill-row">
              <span class = "skill-label">숙련도</span>
              <div class = "skill-bar-bg">
                <div class = "skill-bar-fill" style = "width: 50%"></div>
              </div>
              <span class = "skill-percent">50%</span>
            </div>
          </div>
          <p class = "skill-desc">사용 경험: (사용 경험 나열)</p>
        </div>
      </div>
    </section>
  <hr>

  <section id="projects">
    <h1 class="section-title">Projects</h1>
    <swiper
    :slides-per-view = "1"
    :space-between = "30"
    :loop = "true"
    :pagination = "{ clickable: true }"
    :autoplay= "{ delay: 3000, disableOnInteraction: false, }"
    :breakpoints= "{ 
      '640': { slidesPerView: 2, spaceBetween: 20,},
      '768': { slidesPerView: 2, spaceBetween: 30},
      '1024': { slidesPerView: 3, spaceBetween: 40,}, }"
    :modules = "modules"
    class = "projectSwiper">

      <swiper-slide v-for="project in projects" :key="project.id">
        <div class="project-card">
          <img v-if = "project.image" :src = "project.image" alt = "프로젝트 이미지" class = "project-img"></img>
          <h3 class="pre-line">{{ project.title }}</h3>
          <p class = "project-period">개발 기간: {{ project.period }}</p>
          <p class = "project-desc">간단한 설명: {{ project.description }}</p>
          <button @click="openModal(project)">자세히 보기</button>
        </div>
      </swiper-slide>

    </swiper>
  </section>

  <hr>
  <section id = "education">
    <h1 class = "section-title">Education</h1>
    <div class = "timeline">
      <div class = "timeline-item">
        <div class = "timeline-dot"></div>
        <div class = "timeline-date">2021.02 ~ 2025.12</div>
        <div class = "timeline-content">
          <h3>인하공업전문대학</h3>
          <p class = "major">컴퓨터정보공학과 (전문학사)</p>
          <p class = "gpa">학점: 3.31/4.5</p>
        </div>
      </div>

      <div class = "timeline-item">
        <div class = "timeline-dot"></div>
        <div class = "timeline-date">2018.03 ~ 2021. 01</div>
        <div class = "timeline-content">
          <h3>금곡고등학교</h3>
          <p class = "major">IT콘텐츠학과</p>
          <p>졸업</p>
        </div>
      </div>
    </div>
  </section>

  <hr>
  <section id="contact">
    <h1 class="section-title">Contact</h1>
    <div class = "contact-container">
      <div class = "contact-card">
        <div class = "icon">📧</div>
        <h3>Email</h3>
        <p>rkdwltmd57@naver.com</p>
      </div>
      <div class = "contact-card">
        <div class = "icon">📞</div>
        <h3>Phone</h3>
        <p>010-7164-6663</p>
      </div>
      
      <a href="https://github.com/gelatinjelly" target="_blank" class = "contact-card link-card">
        <div class = "icon">💻</div>
        <h3>GitHub</h3>
        <p>github.com/gelatinjelly</p>
        <span class = "click-hint">Visit 👋</span>
      </a>
    </div>
  </section>

  </main>
  <div class="modal-overlay" v-if="isModalOpen" @click="closeModal">
    <div class="modal-content project-modal" @click.stop>
      <div v-if="selectedProject" class = "modal-body-wrapper">
        <div class="modal-header">
          <h2 class="pre-line">{{ selectedProject.title }}</h2>
          <p class="modal-period">개발 기간: {{ selectedProject.period }}</p>
        </div>

        <div class="modal-main-content">
          <div class="modal-description-col">
            <h3 class="modal-subtitle">프로젝트 개요</h3>
            <p class="modal-text">{{ selectedProject.overview }}</p>
            
            <h3 class="modal-subtitle">주요 기능</h3>
            <p class="modal-text pre-line">{{ selectedProject.features }}</p>
          </div>

          <div class="modal-screenshots-col">
            <h3 class="modal-subtitle">screenshots</h3>
            <div class="screenshots-grid">
              <img v-for="(shot, index) in selectedProject.screenshots" :key="index" :src="shot" alt="스크린샷" class="screenshot-img" />
            </div>
          </div>
        </div>

        <div class="modal-tech-stack">
          <h3 class="modal-subtitle">Tech Stack</h3>
          <div class="tech-icons">
            <div v-for="tech in selectedProject.techStack" :key="tech.name" class="tech-item">
              <img v-if="tech.isImage" :src="tech.icon" alt="icon" class="tech-icon-image" />
              <i :class="tech.icon" class="tech-icon"></i>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <a v-if="selectedProject.githubLink" :href="selectedProject.githubLink" target="_blank" class="btn-github">
            <span class="icon">🐙</span> Github Repository
          </a>
        </div>
        <button class="btn-close" @click="closeModal">닫기</button>
      </div>
    </div>
  </div>
</template>


<style>
  main {
    padding-top: 80px;
    max-width: 960px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  section {
    margin-bottom: 60px;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--color-border-hover);
    margin: 40px 0;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 35px;
    color: var(--color-heading);
  }

  .profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 3px solid var(--color-border);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .main-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .button-group {
    display: flex;
    gap: 15px;
    margin-top: 15px;
    justify-content: center;
  }

  .main-profile .btn, .main-profile button { margin: 5px; }

  .intro-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-soft);
  color: var(--color-heading);
  border: 1px solid var(--color-border);
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.intro-toggle:hover { background-color: rgba(150, 150, 150, 0.1); }

.intro-toggle h3 {
  color: #007bff;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.intro-content p {
  color: var(--color-text);
  margin-bottom: 10px;
}

.toggle-icon {
  font-size: 0.9rem;
  color: var(--color-text);
  white-space: nowrap;
}

.intro-content {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 15px;
  line-height: 1.7;
  animation: fadeIn 0.5s ease;
}

/* .intro-content string {
  color: white;
  font-weight: bold;
} */

 .divider {
  border: 0;
  border-top: 1px dashed #444;
  margin: 30px 0;
 }

 table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  background-color: var(--color-background-soft);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
 }

 th, td {
  padding: 12px, 15px;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.95rem;
 }

 th {
  background-color: #333;
  color: white;
  font-weight: bold;
}

 td { color: var(--color-text); }

 tr:hover td{ background-color: rgba(255, 255, 255, 0.05); }

 .table-h3 { 
  color: var(--color-text);
  margin-bottom: 5px;
}

 .skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .skills {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .button-group {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      gap: 10px;
    }

    .main-profile .btn,
    .main-profile button {
      flex: 1;
      font-size: 13px;
      padding: 12px 0;
      margin: 0;
      white-space: nowrap;
      width: auto;
    }

    .intro-toggle { padding: 12px 15px; }

    .intro-toggle h3 { 
      font-size: 1rem; 
      margin-right: 5px;
    }

    .toggle-icon { font-size: 0.8rem; }
  }

  .skill-item { 
    background-color: var(--color-background-soft);
    border-radius: 8px;
    padding: 20px;
    height: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill-logo {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .skill-bar-container {
    width: 100%;
    margin: 15px 0;
  }

  .skill-row {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin: 15px 0;
  }

  .skill-label {
    font-size: 0.9rem;
    color: var(--color-text);
    white-space: nowrap;
    min-width: 45px;
  }

  
  .skill-bar-bg {
    flex-grow: 1;
    height: 8px;
    background-color: #444;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .skill-bar-fill {
    height: 100%;
    background-color: #007bff;
    border-radius: 10px;
    transition: width 1s ease-in-out;
  }
  
  .skill-percent {
    font-size: 0.9rem;
    font-weight: bold;
    color: #007bff;
    min-width: 35px;
    text-align: right;
  }

  .skill-desc {
    font-size: 0.9rem;
    color: var(--color-text);
    margin-top: 5px;
    text-align: center;
  }

  .projectSwiper {
    width: 100%;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .project-card {
    background-color: var(--color-background-soft);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s; 
  }

  .project-card:hover { transform: translateY(-5px); }

  .project-img { 
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .project-period {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  .project-desc {
    flex-grow: 1;
    margin-bottom: 20px;
    line-height: 1.5;
    white-space: pre-line;
  }

  .skill-item:hover,
  .project-card:hover { transform: translateY(-5px); }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;
  }

  .timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: var(--color-border);
    top: 5px;
    bottom: 0;
    left: 20px;
    margin-left: -1px;
  }

  .timeline-item {
    padding: 0 0 0 40px;
    position: relative;
    margin-bottom: 40px;
  }

  .timeline-dot {
    width: 16px;
    height: 16px;
    border-radius: 50px;
    background-color: #007bff;
    border: 4px solid var(--color-background);
    position: absolute;
    left: 12px;
    top: 0px;
    z-index: 1;
    box-shadow: 0 0 0 2px #007bff;
  }

  .timeline-date {
    font-size: 1rem;
    color: #007bff;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1;
  }

  .timeline-content {
    background-color: var(--color-background-soft);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }

  .timeline-content h3 { margin-bottom: 5px; }

  .timeline-content .major {
    font-weight: bold;
    color: #555;
  }

  .timeline-content .gpa {
    font-size: 0.9rem;
    color: #777;
  }

  .contact-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }

  .contact-card {
    background-color: var(--color-background-soft);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    width: 250px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
    text-decoration: none;
    color: inherit;
    border: 1px solid transparent;
  }

  .contact-card:hover { transform: translateY(-10px); }

  .link-card:hover {
    border-color: #007bff;
    background-color: #f0f7ff;
  }

  .contact-card .icon {
    border-color: #007bff;
    /* background-color: #f0f7ff; */
  }

  .contact-card h3 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .contact-card p {
    font-size: 0.95rem;
    color: #555;
    word-break: break-all;
  }

  .click-hint {
    display: block;
    margin-top: 15px;
    font-size: 0.8rem;
    color: #007bff;
    font-weight: bold;
  }

  .btn,
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    font-weight: 500;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
    transition: background-color 0.2s;

    text-decoration: none;
    display: inline-block;
    margin-right: 10px;
  }

  .btn:hover,
  button:hover { background-color: #0056b3; }

  img {
    width: 50px; /* 아이콘 크기 조절 */
  }

  /* 모달(팝업) 스타일 */
.modal-overlay {
  position: fixed; /* 화면에 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 검은색 반투명 배경 */
  display: flex; /* 자식 요소를 중앙 정렬하기 위해 */
  justify-content: center;
  align-items: center;
  z-index: 100; /* 최상단에 보이도록 */
}

.modal-content {
  background-color: #333; /* 어두운 배경과 어울리게 */
  color: white; /* 글자색 */
  padding: 30px;
  border-radius: 10px;
  width: 80%; /* 화면 너비의 80% */
  max-width: 600px; /* 최대 너비 제한 */
  z-index: 101;
}

.project-modal {
  background-color: #1a1a1a;
  color: #e0e0e0;
  width: 90%;
  max-width: 1000px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header { margin-bottom: 30px; }
.modal-header h2 { font-size: 2.5rem; margin-bottom: 10px; color: white; }
.modal-period { color: #888; font-size: 1rem; }

.modal-main-content {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.modal-description-col { flex: 1; /* 왼쪽 1 비율 */ }
.modal-screenshots-col { flex: 1.2; /* 오른쪽 1.2 비율 (좀 더 넓게) */ }

.modal-subtitle {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 15px;
  margin-top: 25px;
}

.modal-subtitle:first-child { margin-top: 0; }

.modal-content button {
  background-color: #555;
  margin-top: 20px;
}

.modal-text {
  line-height: 1.7;
  color: #ccc;
  font-size: 1rem;
}

.pre-line { white-space: pre-line; /* 줄바꿈 적용 */ }

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 반응형 그리드 */
  gap: 15px;
}

.screenshot-img {
  width: 100%;
  border-radius: 10px;
  border: 2px solid #333;
  transition: transform 0.3s;
}

.screenshot-img:hover { transform: scale(1.02); }

.modal-tech-stack { margin-bottom: 40px; }

.tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tech-icon {
  font-size: 1.2rem;
  margin-right: 8px;
  vertical-align: middle;
}

.tech-item {
  background-color: #252525;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid #444;
  display: flex;
  align-items: center;
}

.tech-icon-image {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  object-fit: contain;
}

.tech-name { color: #ddd; }

.modal-footer {
  display: flex;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #333;
}

.btn-github {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #2a60cf; /* 이미지 속 파란색 버튼 */
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.btn-close {
  padding: 12px 25px;
  border-radius: 30px;
  border: 1px solid #555;
  background-color: transparent;
  color: #ddd;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.btn-github:hover { background-color: #1e4bad; }

.btn-close:hover { background-color: #333; color: white; }

.modal-content button:hover { background-color: #333; }

@media (max-width: 768px) {
  .project-modal { padding: 25px; }
  .modal-main-content { flex-direction: column; gap: 30px; }
  .modal-header h2 { font-size: 2rem; }
  .screenshots-grid { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
}

 @keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
 }
</style>