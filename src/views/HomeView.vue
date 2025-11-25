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

const isModalOpen = ref(false)
const selectedProject = ref(null)

const openModal = (projectData) => {
  selectedProject.value =projectData
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}

const scrollToProjects = () => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }

</script>

<template>
  <main>
    <section id="about" class="main-profile">
      <img src="/profile.png" alt="강지승 프로필 사진" class="profile-img">
      <h1>강지승</h1>
      <p>간단한 한 줄 소개</p>
      <p>전화번호: 010-7164-6663</p>
      <p>이메일: rkdwltmd57@naver.com</p>
      <div class="button-group">
        <a href="컴퓨터정보공학과_강지승_이력서_자기소개서.pdf" class="btn" download="강지승_이력서.pdf">이력서 다운로드</a>
        <button @click="scrollToProjects">프로젝트 보기</button>
      </div>
    </section>

    <hr>
    <section class="about">
      <h1 class="section-title">About Me</h1>

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
      <h1 class="section-title">My Skills</h1>
      <div class="skills">
        <div class="skill-item">
          <img src="/java-logo.png" alt="Java logo">
          <h3>Java</h3>
          <p>숙련도: (숙련도 내용)</p>
          <p>사용 경험: (사용 경험 나열)</p>
        </div>

        <div class="skill-item">
          <img src="/python-logo.png" alt="Python logo">
          <h3>Python</h3>
          <p>숙련도: (숙련도 내용)</p>
          <p>사용 경험: (사용 경험 나열)</p>
        </div>

        <div class="skill-item">
          <img src="/db-logo.png" alt="Database-logo">
          <h3>Database</h3>
          <p>숙련도: (숙련도 내용)</p>
          <p>사용 경험: (사용 경험 나열)</p>
        </div>

        <div class="skill-item">
          <img src="/android-logo.png" alt="Android-logo">
          <h3>Android</h3>
          <p>숙련도: (숙련도 내용)</p>
          <p>사용 경험: (사용 경험 나열)</p>
        </div>
      </div>
    </section>
    <!-- <swiper
    :slides-per-view = "1"
    :space-between = "30"
    :loop = "true"
    :autoplay= "{ delay: 2500, disableOnInteraction: false, }"
    :breakpoints= "{ 
      '640': { slidesPerView: 2, spaceBetween: 20,},
      '1024': { slidesPerView: 3, spaceBetween: 40,}, }"
    :modules = "modules"
    class = "mySwiper">
      <swiper-slide>
        <
      </swiper-slide>
    </swiper> -->

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
    <h1 class="section-title">Contact Me</h1>
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

  .skill-item { 
    background-color: var(--color-background-soft);
    border-radius: 8px;
    padding: 20px;
    /* margin-bottom: 0; */
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
</style>