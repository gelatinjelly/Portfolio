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
    title: '프로젝트 명 1',
    period: '2023.01 ~ 2023.02',
    description: '프로젝트 설명',
    details: '상세 설명'
  },

  {
    id: 2,
    title: '프로젝트 명 2',
    period: '2023.01 ~ 2023.02',
    description: '프로젝트 설명',
    details: '상세 설명' 
  },

  {
    id: 3,
    title: '프로젝트 명 3',
    period: '2023.01 ~ 2023.02',
    description: '프로젝트 설명',
    details: '상세 설명' 
  },

  {
    id: 4,
    title: '프로젝트 명 4',
    period: '2023.01 ~ 2023.02',
    description: '프로젝트 설명',
    details: '상세 설명' 
  }
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
          다양한 프로젝트를 수행하며 백엔드와 데이터베이스 중심의 역량을 키워왔습니다. JSP 기반의 커뮤니티 사이트를 제작하며, MySQL과의 연동을 통해 CRUD 기능과 세션 관리 기능을 직접 구현하였습니다. 이를 통해 웹 서비스의 기본 구조를 이해하고, DB와 서버 로직을 연결하는 경험을 쌓았습니다.<br>
          또한 Android 플랫폼에서는 대중교통 길찾기 앱을 개발하였습니다. 외부 API 문서를 분석하여 서비스에 적용하는 능력과 로컬 및 클라우드 데이터베이스를 효율적으로 활용하는 방법을 익혔습니다. 특히 이 프로젝트로 한국컴퓨터정보학회 하계 학술대회에서 우수논문상을 수상하며, 학습한 내용을 실질적인 성과로 발전시키는 경험을 얻었습니다.
        </p>
      </div>
      
      <hr class = "divider">
      <h3>📜 자격증</h3>
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

      <h3>🏆 수상 경력</h3>
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
            <td>(OOO 공모전)</td>
            <td>(202X.XX.XX)</td>
            <td>(OOO 시스템 개발)</td>
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
          <h3>{{ project.title }}</h3>
          <p>개발 기간: {{ project.period }}</p>
          <p>간단한 설명: {{ project.description }}</p>
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
  <div class="modal-overlay" v-if="isModalOpen">
    <div class="modal-content" @click.stop>
      <div v-if="selectedProject">
        <h2>{{ selectedProject.title }}</h2>
        <p><strong>개발 기간:</strong> {{ selectedProject.period }}</p>
        <p><strong>상세 내용:</strong></p>
        <p>{{ selectedProject.details }}</p>
      </div>

      <button @click="closeModal">닫기</button>
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

.modal-content button {
  background-color: #555;
  margin-top: 20px;
}

.modal-content button:hover { background-color: #333; }

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

 @keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
 }
</style>