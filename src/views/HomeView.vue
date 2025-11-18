<script setup>
import { ref } from 'vue'

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
      <h1>강지승</h1>
      <p>간단한 한 줄 소개</p>
      
      <p>전화번호: 010-7164-6663</p>
      <p>이메일: rkdwltmd57@naver.com</p>
      
      <a href="/컴퓨터정보공학과_강지승_이력서_자기소개서.pdf" class="btn" download="강지승_이력서.pdf">이력서 다운로드</a>
      <button @click="scrollToProjects">프로젝트 보기</button>
    </section>

    <hr> <section class="about">
      <h2>About Me</h2>

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

    <hr> <section id="skills">
    <div class="skills">
    <h1>My Skills</h1>
    
    <div class="skill-item">
      <!-- <img src="/java-logo.png" alt="Java"> -->
      <h3>Java</h3>
      <p>숙련도: (숙련도 내용)</p>
      <p>사용 경험: (사용 경험 나열)</p>
    </div>

    <div class="skill-item">
      <!-- <img src="/python-logo.png" alt="Python"> -->
      <h3>Python</h3>
      <p>숙련도: (숙련도 내용)</p>
      <p>사용 경험: (사용 경험 나열)</p>
    </div>

    <div class="skill-item">
      <!-- <img src="/db-logo.png" alt="Database"> -->
      <h3>Database</h3>
      <p>숙련도: (숙련도 내용)</p>
      <p>사용 경험: (사용 경험 나열)</p>
    </div>

    <div class="skill-item">
      <!-- <img src="/android-logo.png" alt="Android"> -->
      <h3>Android</h3>
      <p>숙련도: (숙련도 내용)</p>
      <p>사용 경험: (사용 경험 나열)</p>
    </div>
  </div>
  </section>

  <hr>
  <section id="projects">
  <div class="projects">
    <h1>Projects</h1>

    <div class="project-card" 
    v-for="project in projects":key="project.id">
      <h3>{{ project.title }}</h3>
      <p>개발 기간: {{ project.period }}</p>
      <p>간단한 설명: {{ project.description }}</p>
      <button @click="openModal(project)">자세히 보기</button>
    </div>
  </div>
  </section>

  <hr><section id="education">
  <div class="education">
    <h1>Education</h1>

    <div class="education-item">
      <h3>인하공업전문대학</h3>
      <p>학과: 컴퓨터정보공학과</p>
      <p>재학 기간: 2021.02 ~ 2025.12</p>
      <p>학점: 3.31/4.5</p>
    </div>

    <div class="education-item">
      <h3>금곡고등학교</h3>
      <p>재학 기간: 2018.03 ~ 2021. 01</p>
    </div>
  </div>
  </section>

  <hr><section id="contact">
  <div class="contact">
    <h1>Contact Me</h1>
    <p>아래 방법으로 편하게 연락주세요.</p>

    <div class="contact-item">
      <h3>📧 이메일</h3>
      <p>rkdwltmd57@naver.com</p>
    </div>

    <div class="contact-item">
      <h3>📞 연락처</h3>
      <p>010-7164-6663</p>
    </div>
    
    <div class="contact-item">
      <h3>💻 GitHub</h3>
      <a href="https(GitHub 주소 입력)" target="_blank">
        (GitHub 주소 입력, 예: https://github.com/YourID)
      </a>
    </div>
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

  .skill-item { 
    background-color: var(--color-background-soft);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
  }

  .project-card {
    background-color: var(--color-background-soft);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out; 
  }

  .skill-item:hover,
  .project-card:hover { transform: translateY(-5px); }

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