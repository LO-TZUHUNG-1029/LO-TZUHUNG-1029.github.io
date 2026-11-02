/* ============================================================
   這是網站「內容」的總設定檔：文字、連結、圖片都在這裡改。
   ------------------------------------------------------------
   換照片的方法：
   1. 把照片放進 src/assets/images/ 資料夾
      （檔名用英文、不要空格，例如 uav-hero.jpg）
   2. 把對應的 image: "https://placehold.co/..." 整串換成
      image: require("./assets/images/uav-hero.jpg"),
   ⚠️ 照片請用 .jpg / .png / .webp，不要用 .svg（會顯示不出來）
   目前的灰色方塊是線上暫時圖，上面寫著建議放什麼照片。
   ------------------------------------------------------------
   網站主軸：UAV flight control — from simulation to real flight
   每一區都在支撐這句話：
   首頁＝你是誰 → 代表作＝最強證據 → 經歷＝在哪裡做 →
   專案＝做出什麼 → 獎項＝外部肯定
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
  username: "Tzu-Hung Lo",
  title: "Hi, I'm Jacob. (LO, TZUHUNG)",
  subTitle:
    "Mechanical Engineering student at National Taiwan University. I work on UAV flight control — integrating controllers onto real quadrotors and testing them in flight.",
  // 📷 你本人 + 四旋翼，在 OptiTrack 飛行場或實驗桌前（4:3 橫式）
  image:
    "https://placehold.co/1200x900/f5f5f7/6b6b6b?text=You+%2B+quadrotor+in+lab+4:3",
  imageAlt: "Tzu-Hung Lo with a quadrotor in the lab",
  // 放英文版履歷 PDF（命名 resume.pdf，放進 src/containers/greeting/）
  resumeLink: "resume.pdf",
  displayGreeting: true
};

// ========== 社群連結 ==========
const socialMediaLinks = {
  github: "https://github.com/LO-TZUHUNG-1029",
  linkedin: "", // 有 LinkedIn 再填
  gmail: "lojacob2020@gmail.com",
  display: true
};

// ========== 技能 ==========
const skillsSection = {
  title: "What I do",
  subTitle: "FLIGHT CONTROL · EMBEDDED SYSTEMS · MODELING & SIMULATION",
  // 📷 實驗桌特寫：Pixhawk 6C + Zynq 板 + 線材（4:3，俯拍、乾淨桌面）
  image:
    "https://placehold.co/1200x900/f5f5f7/6b6b6b?text=Pixhawk+%2B+FPGA+on+bench+4:3",
  imageAlt: "Pixhawk flight controller and FPGA board on a lab bench",
  skills: [
    "Integrate flight controllers on real quadrotors with PX4 and ROS 2, and validate them in flight with OptiTrack motion capture",
    "Build simulation environments in PX4 SITL and Gazebo to study how sensor noise and sampling rate affect flight",
    "Model and analyze vehicle dynamics in MATLAB / Simulink and IPG CarMaker"
  ],
  // 依主軸排序：飛控 → 嵌入式 → 建模 → 機械
  softwareSkills: [
    {skillName: "PX4", fontAwesomeClassname: "fas fa-helicopter"},
    {skillName: "ROS 2", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "Gazebo", fontAwesomeClassname: "fas fa-cubes"},
    {skillName: "OptiTrack", fontAwesomeClassname: "fas fa-crosshairs"},
    {skillName: "FPGA (Vivado/Vitis)", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "MATLAB / Simulink", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "SolidWorks", fontAwesomeClassname: "fas fa-cube"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"}
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
// 網站不放 GPA，改放飛控相關課程成績（強項）
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National Taiwan University",
      // 換成台大校徽：require("./assets/images/ntuLogo.png")
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.S. in Mechanical Engineering",
      duration: "Sep 2024 – Present",
      desc: "Transferred from National Cheng Kung University (2023–2024). Coursework focused on flight systems and embedded control.",
      descBullets: [
        // 課名請對照成績單上的官方英文名稱
        "Design, Simulation and Integration of Flight and Space Systems — A-",
        "Microprocessor Control Systems — A-",
        "Fluid Mechanics — A"
      ]
    }
  ]
};

// ========== 經歷 ==========
// 經歷卡寫「在哪裡、負責什麼」；做出來的東西放到下面的專案卡
// 卡片上方色帶會從 logo 取色，請各自換成單位的 logo
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Undergraduate Researcher",
      company: "NASA Lab, NTU EE",
      // 換成實驗室 logo（沒有就用台大校徽）
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Feb 2026 – Present",
      desc: "Advised by Prof. Cheng-Wei Chen. I integrate an FPGA-based MPC flight controller, developed by senior lab members, into a real quadrotor and test it in flight.",
      descBullets: [
        "Migrated low-level flight control from the Zynq PS to PX4 (Pixhawk 6C), recalibrating the IMU, optical-flow sensor, motors and wiring",
        "Built the ROS 2 communication between the FPGA MPC solver and PX4",
        "Validated the new setup in indoor flights with OptiTrack motion capture as ground truth"
      ]
    },
    {
      role: "Simulation Engineer, Industry Project",
      company: "ELAN Microelectronics × NASA Lab",
      // 換成義隆 logo（公開前請先確認能否具名，見回覆說明）
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Feb 2026 – Present",
      desc: "Simulation support for ELAN's in-house flight-controller chip.",
      descBullets: [
        "Set up a PX4 SITL environment and injected sensor noise to mimic real measurement error",
        "Analyzed how IMU sampling rate (125–1000 Hz) affects flight performance, as input for the chip's specifications"
      ]
    },
    {
      role: "Vehicle Dynamics Engineer",
      company: "NTU Racing Team",
      // 換成賽車隊 logo
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Sep 2025 – Present",
      desc: "Vehicle dynamics modeling and parameter studies for the team's race car.",
      descBullets: [
        "Built a lap-time simulator in MATLAB and swept center-of-gravity position to find the best CG height range",
        "Converted the pushrod suspension into an equivalent heave / roll model in IPG CarMaker"
      ]
    },
    {
      role: "Lead",
      company: "NTU MEIC — Study Abroad Guide",
      // 換成 NTU MEIC logo
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Sep 2025 – Present",
      desc: "Leading a student-run platform that helps NTU ME students plan study abroad.",
      descBullets: [
        "Interviewed 6 alumni studying overseas and published their stories with the department newsletter",
        "Organized 4 application info sessions and resume clinics for 40 attendees",
        "Started a mentor program matching 20 alumni with students planning to go abroad"
      ]
    },
    {
      role: "International Student Ambassador & Team Lead",
      company: "Office of International Affairs, NTU",
      // 換成台大國際處 logo 或台大校徽
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Feb 2025 – Present",
      desc: "Helping incoming international and exchange students settle in at NTU.",
      descBullets: [
        "Led a team of 3 ambassadors to plan and run campus tours for new international students",
        "Helped dozens of students check in for the Chinese proficiency test",
        "Supported 4 international and exchange students one-on-one with pre-arrival registration, course selection and housing"
      ]
    }
  ]
};

// GitHub 開源專案區塊：已關閉
const openSource = {
  showGithubProfile: "false",
  display: false
};

// ========== 代表作：黑底大圖區塊（Apple 風格）==========
const featuredProject = {
  display: true,
  eyebrow: "FEATURED PROJECT",
  title: "FPGA-MPC Quadrotor",
  subtitle:
    "Taking an FPGA-accelerated model predictive controller from the bench to real flight. I moved low-level control onto PX4, built the ROS 2 link to the FPGA solver, and validated the system with OptiTrack motion capture.",
  // 📷 四旋翼懸停在飛行場中，暗背景、機體在畫面中央（16:9）
  image:
    "https://placehold.co/1600x900/1d1d1f/a1a1a6?text=Quadrotor+hovering+16:9",
  imageAlt: "FPGA-MPC quadrotor hovering in the motion-capture arena",
  // 🎬 有懸停影片的話（10–15 秒、無聲、不超過約 10 MB）：
  // video: require("./assets/images/uav-flight.mp4"),
  video: null,
  // 有追蹤誤差數據後，把其中一格換成數字，例如 {value: "X cm", label: "Position error"}
  highlights: [
    {value: "FPGA", label: "MPC solver on Zynq UltraScale+"},
    {value: "PX4", label: "Low-level control on Pixhawk 6C"},
    {value: "OptiTrack", label: "Ground-truth flight validation"}
  ],
  links: [
    // {name: "Watch the flight", url: "https://youtube.com/..."}
  ]
};

// ========== 專案卡片 ==========
// 點卡片會打開詳細視窗：上方照片可左右切換，下方文字可捲動
// 不想讓某個專案可以點開，就把它的 details、images、footerLink 都刪掉
const bigProjects = {
  title: "Projects",
  subtitle: "THINGS I HAVE DESIGNED AND BUILT",
  projects: [
    {
      projectName: "Project One",
      // 卡片和視窗標題下方的小字：時間、單位
      meta: "2024–2025 · Lab or Course Name, NTU",
      // 卡片上的一句話簡介
      projectDesc: "What it is, what you did, and one key result.",
      // 卡片封面照片（建議 16:9）
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Project+cover+16:9",
      // 視窗裡可以左右切換的照片（數量不限，第一張會先顯示）
      // 換成自己的照片：require("./assets/images/project1-1.jpg"),
      images: [
        "https://placehold.co/1600x1000/f5f5f7/6b6b6b?text=Photo+1",
        "https://placehold.co/1600x1000/f5f5f7/6b6b6b?text=Photo+2",
        "https://placehold.co/1600x1000/f5f5f7/6b6b6b?text=Photo+3"
      ],
      // 視窗裡的詳細說明：每一段有標題，內容可以用 text（一段文字）或 bullets（條列），也可以兩個都用
      details: [
        {
          heading: "Overview",
          text: "Two or three sentences describing the project and your role."
        },
        {
          heading: "Project Goals",
          bullets: ["Goal one", "Goal two", "Goal three"]
        },
        {
          heading: "Methods",
          bullets: [
            "Mechanism: how it is built",
            "Control: how it is controlled",
            "Modeling: how you analyzed or verified it"
          ]
        },
        {
          heading: "Results",
          bullets: [
            "Result with a number, e.g. reduced error by 87%",
            "Another measurable outcome"
          ]
        }
      ],
      // 視窗最下方的連結（影片、報告等），不需要就留空 []
      footerLink: [
        // {name: "Demo video", url: "https://youtube.com/..."},
        // {name: "Report (PDF)", url: "https://drive.google.com/..."}
      ]
    },
    {
      projectName: "Project Two",
      meta: "2024 · Course Name",
      projectDesc: "What it is, what you did, and one key result.",
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Project+cover+16:9",
      images: [
        "https://placehold.co/1600x1000/f5f5f7/6b6b6b?text=Photo+1",
        "https://placehold.co/1600x1000/f5f5f7/6b6b6b?text=Photo+2"
      ],
      details: [
        {
          heading: "Overview",
          text: "Two or three sentences describing the project and your role."
        },
        {
          heading: "Results",
          bullets: ["Key result one", "Key result two"]
        }
      ],
      footerLink: []
    },
    {
      projectName: "Project Three",
      meta: "2023 · Club or Competition",
      projectDesc: "What it is, what you did, and one key result.",
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Project+cover+16:9",
      images: [],
      details: [
        {
          heading: "Overview",
          text: "Two or three sentences describing the project and your role."
        }
      ],
      footerLink: []
    }
  ],
  display: true
};

// ========== 獎項與證照 ==========
const achievementSection = {
  title: "Awards & Certifications",
  subtitle: "Competitions and language certificates.",
  achievementsCards: [
    {
      title: "2nd Place — Compassion Tech Innovation Competition",
      subtitle:
        "College Charity Track, 2026. Also received the Special Award and the Most Popular Award for our search-and-rescue drone.",
      // 📷 團隊領獎照或獎狀（正方形裁切）
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Award ceremony",
      footerLink: []
    },
    {
      title: "TOEFL iBT 5.0 (CEFR C1)",
      subtitle: "Reading 4.5 · Listening 5.5 · Writing 5.0 · Speaking 4.0",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "TOEFL",
      footerLink: []
    },
    {
      title: "German — Goethe A2 (in progress)",
      subtitle: "Currently learning German, aiming for the Goethe-Zertifikat A2 in March 2027.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "German",
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

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// ========== 聯絡 ==========
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Working on flight control, UAV testbeds, or just want to talk about drones? My inbox is open.",
  number: "",
  email_address: "lojacob2020@gmail.com",
  // 📷 個人照（半身、自然光、單色背景，4:3）
  image:
    "https://placehold.co/1200x900/f5f5f7/6b6b6b?text=Profile+photo+4:3",
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