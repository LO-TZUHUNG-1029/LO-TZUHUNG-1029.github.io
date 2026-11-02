/* ============================================================
   這是網站「內容」的總設定檔：文字、連結、圖片都在這裡改。
   ------------------------------------------------------------
   換照片的方法：
   1. 把照片放進 src/assets/images/ 資料夾
      （檔名用英文、不要空格，例如 uav-hero.jpg）
   2. 把對應的 image: "https://placehold.co/..." 整串換成
      image: require("./assets/images/uav-hero.jpg"),
   ⚠️ 照片請用 .jpg / .png / .webp，不要用 .svg（會顯示不出來）
   目前的灰色方塊是線上暫時圖，上面寫著建議的比例。
   ============================================================ */

import splashAnimation from "./assets/lottie/splashAnimation";

// 開場動畫：已關閉
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

// 保留這個設定（部分舊元件會讀取它），不需要修改
const illustration = {
  animated: false
};

// ========== 首頁 ==========
const greeting = {
  username: "Tzu-Hung Lo", // 左上角 logo 的名字
  title: "Hi, I'm Tzu-Hung. You can call me Jacob.",
  subTitle:
    "A Mechanical Engineering student at National Taiwan University, building UAVs and robots that move in interesting ways.",
  // 首頁右側的照片（建議 4:3 橫式）
  image: "https://placehold.co/1200x900/f5f5f7/6b6b6b?text=Hero+photo+4:3",
  imageAlt: "Tzu-Hung Lo working on a UAV",
  // 履歷按鈕：把你的履歷 PDF 命名為 resume.pdf，
  // 放進 src/containers/greeting/ 取代原本的檔案。
  // 不想顯示按鈕就改成 ""
  resumeLink: "resume.pdf",
  displayGreeting: true
};

// ========== 社群連結 ==========
// 留空 "" 的就不會顯示
const socialMediaLinks = {
  github: "https://github.com/LO-TZUHUNG-1029",
  linkedin: "", // 例如 "https://www.linkedin.com/in/xxx/"
  gmail: "lojacob2020@gmail.com",
  display: true
};

// ========== 技能 ==========
const skillsSection = {
  title: "What I do",
  subTitle: "MECHANICAL DESIGN · CONTROL SYSTEMS · ROBOTICS",
  // 左側照片（建議 4:3）
  image: "https://placehold.co/1200x900/f5f5f7/6b6b6b?text=Lab+photo+4:3",
  imageAlt: "Working in the lab",
  skills: [
    "Design and build UAV platforms, from CAD to flight testing",
    "Develop control systems and embedded firmware for robots",
    "Prototype mechanisms with 3D printing and machining"
  ],
  // 技能圖示名稱可到 https://fontawesome.com/v5/search?m=free 搜尋
  softwareSkills: [
    {skillName: "SolidWorks", fontAwesomeClassname: "fas fa-cube"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "C / C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "MATLAB", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "ROS", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "Embedded", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "UAV", fontAwesomeClassname: "fas fa-helicopter"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

// 技能百分比條：已關閉
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// ========== 學歷 ==========
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National Taiwan University",
      // 換成台大校徽，例如 require("./assets/images/ntuLogo.png")
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.S. in Mechanical Engineering",
      duration: "Sep 20XX – Present",
      desc: "Focus on control systems, mechatronics and robotics.",
      descBullets: [
        "Relevant courses: Dynamics, Control Systems, Mechatronics",
        "GPA: X.XX / 4.30"
      ]
    }
  ]
};

// ========== 經歷 ==========
// 卡片上方的色帶會自動從 logo 取色
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Undergraduate Researcher",
      company: "UAV Lab, NTU",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Feb 2025 – Present",
      desc: "One sentence about what you do in this lab.",
      descBullets: [
        "What you built or improved",
        "A result, ideally with a number"
      ]
    },
    {
      role: "Team Member",
      company: "Competition / Club Name",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Sep 2024 – Jun 2025",
      desc: "One sentence about your role and the outcome."
    }
  ]
};

// GitHub 開源專案區塊：已關閉（需要額外設定 token）
const openSource = {
  showGithubProfile: "false",
  display: false
};

// ========== 代表作：黑底大圖區塊（Apple 風格）==========
const featuredProject = {
  display: true,
  eyebrow: "FEATURED PROJECT",
  title: "Autonomous UAV",
  subtitle:
    "One or two sentences on what the UAV does, why it matters, and what you were responsible for.",
  // 大圖（建議 16:9 橫式、乾淨背景）
  image: "https://placehold.co/1600x900/1d1d1f/a1a1a6?text=UAV+photo+16:9",
  imageAlt: "UAV in flight",
  // 有飛行影片的話：把 mp4 放進 src/assets/images/，再把下一行改成
  // video: require("./assets/images/uav-flight.mp4"),
  // 有影片時會顯示影片，沒有（null）就顯示上面的圖片
  video: null,
  // 三個重點數據或特色
  highlights: [
    {value: "XX min", label: "Flight time"},
    {value: "X.X kg", label: "Takeoff weight"},
    {value: "PID", label: "Flight control"}
  ],
  // 按鈕連結，要用時把前面的 // 拿掉
  links: [
    // {name: "Watch the demo", url: "https://youtube.com/..."},
    // {name: "Read the report", url: "https://..."}
  ]
};

// ========== 專案卡片 ==========
const bigProjects = {
  title: "Projects",
  subtitle: "THINGS I HAVE DESIGNED AND BUILT",
  projects: [
    {
      // 專案照片（建議 16:9 橫式）
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Project+photo+16:9",
      projectName: "Project One",
      projectDesc: "What it is, what you did, and one key result.",
      footerLink: [
        // {name: "Demo video", url: "https://..."}
      ]
    },
    {
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Project+photo+16:9",
      projectName: "Project Two",
      projectDesc: "What it is, what you did, and one key result.",
      footerLink: []
    },
    {
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Project+photo+16:9",
      projectName: "Project Three",
      projectDesc: "What it is, what you did, and one key result.",
      footerLink: []
    }
  ],
  display: true
};

// ========== 獎項 ==========
const achievementSection = {
  title: "Awards",
  subtitle: "Competitions, scholarships and recognitions.",
  achievementsCards: [
    {
      title: "Award Name",
      subtitle: "Competition name, year. One line about what you achieved.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Award",
      footerLink: [
        // {name: "Certificate", url: "https://drive.google.com/..."}
      ]
    },
    {
      title: "Award Name",
      subtitle: "Competition name, year. One line about what you achieved.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Award",
      footerLink: []
    }
  ],
  display: true
};

// ========== 以下區塊已關閉 ==========
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

// 選單上的「Resume」連結（會跳到首頁的履歷下載按鈕）
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// ========== 聯絡 ==========
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Interested in working together, or just want to talk about drones? My inbox is open.",
  number: "", // 不想公開電話就留空
  email_address: "lojacob2020@gmail.com",
  // 右側照片（可以放個人照）
  image: "https://placehold.co/1200x900/f5f5f7/6b6b6b?text=Profile+photo+4:3",
  imageAlt: "Tzu-Hung Lo"
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  featuredProject,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};