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
  selectedProject.value = projectData
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}

const projects = ref([
  {
    id: 1,
    title: 'KoDeskAI\n(개인 프로젝트)',
    period: '2026. 03 ~',
    description: `
    - Llama 3.1 8B 파인튜닝 기반 한국어 오프라인 AI 비서
    - 실시간 스트리밍 채팅, 파일 분석, GPU 가속 지원`,
    overview: '인터넷 연결 없이 로컬에서 완전히 동작하는 한국어 특화 AI 비서입니다. Llama 3.1 8B 모델을 한국어 데이터(5,359건)로 QLoRA 파인튜닝하여 한국어 응답에 최적화하였으며, Spring Boot 백엔드와 Python FastAPI를 조합하여 파일 분석 및 한국어 띄어쓰기 교정 기능을 구현했습니다.',
    features: '- 실시간 스트리밍 채팅: Ollama 추론 엔진을 통해 답변이 실시간으로 스트리밍되며, 최근 30개 메시지 컨텍스트를 유지합니다.\n- 파일 분석 기능: 채팅창에서 PDF, Word, Excel, TXT 파일을 첨부하여 바로 질의응답이 가능합니다. Python FastAPI 서버가 파일 파싱을 담당합니다.\n- 한국어 띄어쓰기 교정: Kiwipiepy 기반으로 AI 응답의 한국어 띄어쓰기를 자동 교정합니다.\n- 채팅방 관리: 여러 대화방을 독립적으로 관리하며, 대화 내용을 자동 저장하고 주제에 따라 방 이름이 자동 설정됩니다.\n- 원클릭 설치: install.bat으로 Ollama, Java, Python, 모델 다운로드까지 자동 설치됩니다.',
    screenshots: ['KDA_1.png', 'KDA_2.png', 'KDA_3.png'],
    image: 'KDA_1.png',
    techStack: [
      { name: 'Llama 3.1 (QLoRA)', icon: 'devicon-pytorch-plain colored' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
      { name: 'Python FastAPI', icon: 'devicon-fastapi-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
    githubLink: 'https://github.com/gelatinjelly/KoDeskAI',
  },

  {
    id: 2,
    title: 'Receipt OCR Classifier\n(개인 프로젝트)',
    period: '2025',
    description: `
    - EasyOCR을 CORD v2 데이터셋으로 파인튜닝하여 인식률 53% → 93.8% 달성
    - TPS-ResNet-BiLSTM-Attn 모델 구조 적용`,
    overview: '범용 OCR 모델이 영수증 특유의 폰트, 레이아웃, 약어에 최적화되어 있지 않아 인식률이 낮은 문제를 해결하기 위해, CORD v2 영수증 데이터셋으로 Transfer Learning을 적용하여 영수증 도메인 특화 OCR 모델을 개발한 프로젝트입니다.',
    features: '- 모델 파인튜닝: TPS-ResNet-BiLSTM-Attn 구조로 EasyOCR을 CORD v2 데이터셋(19,367개)으로 파인튜닝하여 Test Accuracy 53.0% → 93.8%로 향상시켰습니다.\n- 데이터 증강: 회전, 노이즈, 밝기, 블러 증강을 적용하여 데이터를 38,734개로 확장하고 최종 93.8% 정확도를 달성했습니다.\n- 이미지 전처리 파이프라인: CLAHE와 적응형 이진화를 적용하여 영수증 이미지 품질을 보정합니다.\n- 텍스트 파싱: OCR로 추출한 텍스트를 줄 그룹핑 및 금액 추출 로직으로 구조화합니다.\n- 모델 비교 실험: TPS-ResNet-BiLSTM-Attn과 None-ResNet-BiLSTM-CTC 두 구조를 비교 실험하여 최적 모델을 선정했습니다.',
    screenshots: ['OCR_1.png', 'OCR_2.png', 'OCR_3.png', 'OCR_4.png'],
    image: 'OCR_1.png',
    techStack: [
      { name: 'PyTorch', icon: 'devicon-pytorch-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'OpenCV', icon: 'devicon-opencv-plain colored' },
    ],
    githubLink: 'https://github.com/gelatinjelly/receipt-ocr-classifier',
  },

  {
    id: 3,
    title: 'PC 하드웨어 성능 분석\n(개인 프로젝트)',
    period: '2025',
    description: `
    - 53,000건 이상의 웹 데이터 수집 및 분석
    - CPU/GPU 성능 트렌드 분석 후 2025년 권장 사양 도출`,
    overview: 'Wikipedia, PassMark, PCGamingWiki에서 대규모 웹 데이터를 수집하여 CPU 및 GPU 성능 변화를 시계열 분석하고, 2025년 게이밍 PC 표준 권장 사양을 데이터 기반으로 도출하는 빅데이터 분석 프로젝트입니다.',
    features: '- 대규모 데이터 수집: Wikipedia에서 하드웨어 제원 정보, PassMark에서 벤치마크 점수, PCGamingWiki에서 53,222개의 게임 요구 사양 데이터를 웹 크롤링으로 수집했습니다.\n- 데이터 정제 및 분석: 수집한 원시 데이터를 정제하고, CPU/GPU 성능의 시계열 변화를 분석하여 성능 트렌드를 도출했습니다.\n- 시각화 및 보고서: Jupyter Notebook 환경에서 분석 결과를 시각화하고, 최종 분석 보고서를 작성했습니다.',
    screenshots: ['HW_1.png', 'HW_2.png', 'HW_3.png', 'HW_4.png'],
    image: 'HW_1.png',
    techStack: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Jupyter', icon: 'devicon-jupyter-plain colored' },
      { name: 'Pandas', icon: 'devicon-pandas-plain colored' },
    ],
    githubLink: 'https://github.com/gelatinjelly/Hardware-Performance-Trend-Analysis',
  },

  {
    id: 4,
    title: 'Winple Notes\n(2인 팀 프로젝트)',
    period: '2025',
    description: `
    - 크로스플랫폼 메모 동기화 앱 (Windows 클라이언트 담당)
    - 클라우드 기반 실시간 메모 동기화 구현`,
    overview: '여러 디바이스 간에 메모를 실시간으로 동기화하는 크로스플랫폼 메모 애플리케이션입니다. 2인 팀 프로젝트로 진행하였으며, Windows 데스크탑 클라이언트 개발을 전담하고 있습니다.',
    features: '- Windows 데스크탑 클라이언트: Windows 환경에 최적화된 네이티브 메모 클라이언트를 개발하였습니다.\n- 클라우드 동기화: 클라우드 서비스를 통해 다른 플랫폼과 메모를 실시간으로 동기화합니다.\n- 크로스플랫폼 지원: Windows, 모바일 등 다양한 플랫폼에서 동일한 메모에 접근할 수 있도록 설계되었습니다.',
    screenshots: ['WN_1.png', 'WN_2.png', 'WN_3.png', 'WN_4.png'],
    image: 'WN_3.png',
    techStack: [
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
      { name: '.NET', icon: 'devicon-dotnetcore-plain colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
    ],
    githubLink: '',
  },

  {
    id: 5,
    title: '대중교통 길찾기 앱\n(개인 프로젝트 · 논문)',
    period: '2025.03 ~ 2025.05',
    description: `
    - 도착 시간 기준 최적 경로 역산 및 제공
    - 한국컴퓨터정보학회 하계 학술대회 우수논문상 수상`,
    overview: '국내 지도 앱에서 제공하지 않는 "도착 시간 기준 길찾기" 기능을 구현한 Android 앱입니다. 사용자가 입력한 도착 시간에 맞춰 출발 시간과 최적 대중교통 경로를 역산하여 제시합니다. 개발 과정을 정리하여 한국컴퓨터정보학회 하계 학술대회에서 논문을 발표하고 우수논문상을 수상했습니다.',
    features: '- 도착 시간 기반 경로 탐색: T Map 대중교통 API를 활용하여 현재 시각 기준 경로를 탐색한 뒤, 도착 시간에서 소요 시간을 역산하여 출발 시간을 자동 계산합니다.\n- 도착지 키워드 검색: Kakao Map API를 이용하여 주소 또는 상호명 기반으로 위치를 검색하고 지도에 마커로 시각화합니다.\n- 최적 경로 시각화: 도보·버스·지하철 경로를 지도 위에 시각적으로 안내합니다.\n- 일정 등록 및 알림: 경로 탐색 결과를 기기 내 캘린더와 연동하여 저장하고, 출발 시간이 임박하면 푸시 알림으로 알려줍니다.',
    screenshots: ['DT_2.jpg', 'DT_3.jpg', 'DT_4.jpg', 'DT_5.jpg', 'DT_6.jpg', 'DT_7.jpg', 'DT_8.jpg'],
    image: 'DT_1.png',
    techStack: [
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored' },
      { name: 'RoomDB', icon: 'RoomDB-icon.png', isImage: true },
      { name: 'Restful API', icon: 'Restful-icon.jpg', isImage: true },
    ],
    githubLink: 'https://github.com/gelatinjelly/DT-Map',
  },

])
</script>

<template>
  <main>
    <section id="about" class="main-profile">
      <img src="/profile.png" alt="강지승 프로필 사진" class="profile-img">
      <h1>강지승</h1>
      <p class="profile-subtitle">AI · 소프트웨어 개발자</p>
      <p class="profile-bio">
        온디바이스 AI, 컴퓨터 비전, 크로스플랫폼 앱 등 다양한 프로젝트 경험을 바탕으로<br>
        실질적인 문제를 해결하는 소프트웨어를 만들고 있습니다.
      </p>
      <div class="button-group">
        <a href="컴퓨터정보공학과_강지승_이력서_자기소개서.pdf" class="btn" download="강지승_이력서.pdf">이력서 다운로드</a>
        <button @click="scrollToProjects">프로젝트 보기</button>
      </div>
    </section>

    <hr>

    <section class="about">
      <h1 class="section-title">About</h1>

      <div class="about-intro">
        <p>
          인하공업전문대학 컴퓨터정보공학과에서 전공심화 과정을 이수하며 학사학위를 취득 중입니다.
          LLM 파인튜닝 기반의 로컬 AI 비서, OCR 모델 전이 학습, 빅데이터 분석 등
          AI/ML 프로젝트를 수행하며 모델 학습부터 서비스 구현까지의 전 과정을 경험했습니다.
        </p>
        <p>
          Windows 데스크탑, Android 앱, 웹 프론트엔드 등 다양한 플랫폼에서의 개발 경험을 갖추고 있으며,
          대학원 진학을 통해 인공지능 분야의 연구 역량을 심화하는 것을 목표로 하고 있습니다.
        </p>
      </div>

      <h3 class="table-h3">🏆 수상 경력</h3>
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
            <td>우수 논문상</td>
            <td>한국컴퓨터정보학회 하계 학술대회</td>
            <td>2025.07.11</td>
            <td>도착 시간 기준 최적 경로 제공 Map 구현 논문 작성</td>
          </tr>
        </tbody>
      </table>

      <h3 class="table-h3">🪖 병역</h3>
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
      <div class="skills-grid">
        <div class="skill-category">
          <h3 class="skill-cat-title">AI / ML</h3>
          <div class="skill-tags">
            <span class="skill-tag"><i class="devicon-pytorch-plain colored"></i> PyTorch</span>
            <span class="skill-tag"><i class="devicon-python-plain colored"></i> Python</span>
            <span class="skill-tag"><i class="devicon-opencv-plain colored"></i> OpenCV</span>
            <span class="skill-tag">Ollama</span>
            <span class="skill-tag">EasyOCR</span>
            <span class="skill-tag">QLoRA</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="skill-cat-title">Backend</h3>
          <div class="skill-tags">
            <span class="skill-tag"><i class="devicon-spring-plain colored"></i> Spring Boot</span>
            <span class="skill-tag"><i class="devicon-fastapi-plain colored"></i> FastAPI</span>
            <span class="skill-tag"><i class="devicon-mysql-original colored"></i> MySQL</span>
            <span class="skill-tag"><i class="devicon-supabase-plain colored"></i> Supabase</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="skill-cat-title">Frontend / App</h3>
          <div class="skill-tags">
            <span class="skill-tag"><i class="devicon-vuejs-plain colored"></i> Vue.js</span>
            <span class="skill-tag"><i class="devicon-javascript-plain colored"></i> JavaScript</span>
            <span class="skill-tag"><i class="devicon-html5-plain colored"></i> HTML / CSS</span>
            <span class="skill-tag"><i class="devicon-java-plain colored"></i> Android (Java)</span>
            <span class="skill-tag"><i class="devicon-csharp-plain colored"></i> C# / .NET</span>
          </div>
        </div>

        <div class="skill-category">
          <h3 class="skill-cat-title">Tools</h3>
          <div class="skill-tags">
            <span class="skill-tag"><i class="devicon-git-plain colored"></i> Git</span>
            <span class="skill-tag"><i class="devicon-github-original"></i> GitHub</span>
            <span class="skill-tag"><i class="devicon-vscode-plain colored"></i> VS Code</span>
            <span class="skill-tag"><i class="devicon-jupyter-plain colored"></i> Jupyter</span>
            <span class="skill-tag"><i class="devicon-unity-plain"></i> Unity</span>
          </div>
        </div>
      </div>
    </section>

    <hr>

    <section id="projects">
      <h1 class="section-title">Projects</h1>
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          '640': { slidesPerView: 2, spaceBetween: 20 },
          '768': { slidesPerView: 2, spaceBetween: 30 },
          '1024': { slidesPerView: 3, spaceBetween: 40 },
        }"
        :modules="modules"
        class="projectSwiper"
      >
        <swiper-slide v-for="project in projects" :key="project.id">
          <div class="project-card">
            <img v-if="project.image" :src="project.image" alt="프로젝트 이미지" class="project-img" />
            <h3 class="pre-line">{{ project.title }}</h3>
            <p class="project-period">개발 기간: {{ project.period }}</p>
            <p class="project-desc">{{ project.description }}</p>
            <button @click="openModal(project)">자세히 보기</button>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <hr>

    <section id="education">
      <h1 class="section-title">Education</h1>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2026.03 ~</div>
          <div class="timeline-content">
            <h3>인하공업전문대학</h3>
            <p class="major">컴퓨터정보공학과 전공심화 (학사학위 과정)</p>
            <p>재학 중</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2021.02 ~ 2025.12</div>
          <div class="timeline-content">
            <h3>인하공업전문대학</h3>
            <p class="major">컴퓨터정보공학과 (전문학사)</p>
            <p class="gpa">학점: 3.31 / 4.5</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2018.03 ~ 2021.01</div>
          <div class="timeline-content">
            <h3>금곡고등학교</h3>
            <p class="major">IT콘텐츠학과</p>
            <p>졸업</p>
          </div>
        </div>
      </div>
    </section>

    <hr>

    <section id="contact">
      <h1 class="section-title">Contact</h1>
      <div class="contact-container">
        <div class="contact-card">
          <div class="icon">📧</div>
          <h3>Email</h3>
          <p>rkdwltmd57@naver.com</p>
        </div>

        <a href="https://github.com/gelatinjelly" target="_blank" class="contact-card link-card">
          <div class="icon">💻</div>
          <h3>GitHub</h3>
          <p>github.com/gelatinjelly</p>
          <span class="click-hint">Visit 👋</span>
        </a>
      </div>
    </section>
  </main>

  <!-- 프로젝트 모달 -->
  <div class="modal-overlay" v-if="isModalOpen" @click="closeModal">
    <div class="modal-content project-modal" @click.stop>
      <div v-if="selectedProject" class="modal-body-wrapper">
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
            <h3 class="modal-subtitle">Screenshots</h3>
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
              <i v-else :class="tech.icon" class="tech-icon"></i>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <a v-if="selectedProject.githubLink" :href="selectedProject.githubLink" target="_blank" class="btn-github">
            <i class="devicon-github-original"></i> GitHub Repository
          </a>
          <button class="btn-close" @click="closeModal">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
main {
  padding-top: 80px;
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

section { margin-bottom: 60px; }

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

/* ── 프로필 ── */
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

.profile-subtitle {
  font-size: 1.1rem;
  color: #007bff;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 10px;
}

.profile-bio {
  color: var(--color-text);
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 15px;
  justify-content: center;
}

.main-profile .btn,
.main-profile button { margin: 5px; }

/* ── About ── */
.about-intro {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  padding: 25px 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  line-height: 1.8;
}

.about-intro p {
  color: var(--color-text);
  margin-bottom: 10px;
}

.about-intro p:last-child { margin-bottom: 0; }

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
  padding: 12px 15px;
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

tr:hover td { background-color: rgba(255, 255, 255, 0.05); }

.table-h3 {
  color: var(--color-text);
  margin-bottom: 5px;
}

/* ── Skills ── */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.skill-category {
  background-color: var(--color-background-soft);
  border-radius: 10px;
  padding: 20px 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.skill-cat-title {
  font-size: 1rem;
  color: #007bff;
  margin-bottom: 15px;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background-color: var(--color-background-mute, #2a2a2a);
  color: var(--color-text);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: transform 0.2s;
}

.skill-tag:hover { transform: translateY(-2px); }

.skill-tag i { font-size: 1rem; }

/* ── Projects ── */
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

/* ── Timeline ── */
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
  top: 0;
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
.timeline-content .major { font-weight: bold; color: #555; }
.timeline-content .gpa { font-size: 0.9rem; color: #777; }

/* ── Contact ── */
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

.contact-card h3 { margin-bottom: 10px; font-weight: bold; }

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

/* ── Buttons ── */
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

img { width: 50px; }

.pre-line { white-space: pre-line; }

/* ── 모달 ── */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: #333;
  color: white;
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  z-index: 101;
}

.project-modal {
  background-color: #1a1a1a;
  color: #e0e0e0;
  width: 90%;
  max-width: 1000px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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

.modal-description-col { flex: 1; }
.modal-screenshots-col { flex: 1.2; }

.modal-subtitle {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 15px;
  margin-top: 25px;
}

.modal-subtitle:first-child { margin-top: 0; }

.modal-text {
  line-height: 1.7;
  color: #ccc;
  font-size: 1rem;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  align-items: center;
  gap: 20px;
  padding-top: 10px;
  border-top: 1px solid #333;
  margin-top: auto;
}

.btn-github {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2a60cf;
  color: white;
  text-decoration: none;
  padding: 0 20px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s;
  border: none;
  height: 45px;
}

.btn-github i { font-size: 1.5rem; margin-right: 8px; }
.btn-github:hover { background-color: #1e4bad; }

.btn-close {
  height: 45px;
  padding: 0 25px;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: #333;
  color: #ddd;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.btn-close:hover { background-color: #444; color: white; }

/* ── 반응형 ── */
@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  .project-modal { padding: 25px; }
  .modal-main-content { flex-direction: column; gap: 30px; }
  .modal-header h2 { font-size: 2rem; }
  .screenshots-grid { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }

  table { font-size: 0.8rem; }
  th, td { padding: 10px 6px; font-size: 0.8rem; word-break: keep-all; }
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

  .btn-github,
  .btn-close { white-space: nowrap; }

  .profile-bio br { display: none; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>