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
  title: "I make Drones fly — For Real.",
  subTitle:
    "Hi, I'm Tzu-Hung. A Mechanical Engineering student at National Taiwan University. I work on UAV flight control — taking controllers from simulation to real flight.",
  // 📷 hero.jpg 要先放進 src/assets/images/，否則網站會報錯
  image: require("./assets/images/hero.jpg"),
  imageAlt: "Tzu-Hung Lo testing a quadrotor in lab.",
  // 網站版履歷（無電話）：命名 resume.pdf，放進 src/containers/greeting/
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
    "Model vehicle dynamics in MATLAB / Simulink and IPG CarMaker, and prototype mechatronic systems with Arduino"
  ],
  // 依主軸排序：飛控 → 嵌入式 → 建模 → 機械
  softwareSkills: [
    {skillName: "PX4", fontAwesomeClassname: "fas fa-helicopter"},
    {skillName: "ROS 2", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "Gazebo", fontAwesomeClassname: "fas fa-cubes"},
    {skillName: "OptiTrack", fontAwesomeClassname: "fas fa-crosshairs"},
    {skillName: "Vivado / Vitis", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "C / C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "MATLAB / Simulink", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "IPG CarMaker", fontAwesomeClassname: "fas fa-car"},
    {skillName: "Arduino", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "SolidWorks", fontAwesomeClassname: "fas fa-cube"}
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
// 與英文 CV 一致
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National Taiwan University",
      // 換成台大校徽：require("./assets/images/ntu-logo.png")
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.S. in Mechanical Engineering",
      duration: "Sep 2024 – Dec 2027 (Expected)",
      desc: "Coursework focused on control, embedded systems and flight systems.",
      descBullets: [
        "Overall GPA: 3.5 / 4.3",
        "Relevant courses: Automatic Control, Microprocessor Controlled Systems, Flight and Space Systems Integration"
      ]
    },
    {
      schoolName: "National Cheng Kung University",
      // 換成成大校徽：require("./assets/images/ncku-logo.png")
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.S. in Mechanical Engineering (Transferred to NTU)",
      duration: "Sep 2023 – Jun 2024",
      desc: "",
      descBullets: [
        "Overall GPA: 4.06 / 4.3",
        "Outstanding Student Award, Fall 2023"
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
      desc: "FPGA-Accelerated MPC Flight Controller for Indoor UAV · Supervisor: Prof. Cheng-Wei Chen",
      descBullets: [
        "Migrated low-level flight control from the Zynq PS to PX4 on a Pixhawk 6C, recalibrating the IMU, optical-flow sensor, motors and power wiring",
        "Built the ROS 2 link between PX4 and the lab's FPGA-based MPC solver (developed by senior members)",
        "Validated the system in indoor flight with OptiTrack motion capture as ground truth"
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
      role: "Vehicle Dynamics Division",
      company: "NTU Racing Team (Formula Student)",
      // 換成賽車隊 logo
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Sep 2025 – Present",
      desc: "Vehicle dynamics modeling and parameter analysis for the team's race car.",
      descBullets: [
        "Built a MATLAB lap-time simulator and swept center-of-gravity position to find the optimal CG height range",
        "Converted the pushrod suspension into an equivalent heave / roll model in IPG CarMaker"
      ]
    },
    {
      role: "President",
      company: "NTU ME International Compass (NTUMEIC)",
      // 換成 NTUMEIC logo
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Sep 2025 – Present",
      desc: "Leading a nonprofit that bridges the information gap for NTU students pursuing graduate study abroad.",
      descBullets: [
        "Published dozens of alumni experience-sharing articles on Instagram and Medium",
        "Organized 4 info sessions and CV review clinics for 40 attendees",
        "Started a mentor program pairing 20 alumni with department applicants"
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
// 照片統一 16:9、乾淨背景、同一套色調
const bigProjects = {
  title: "Projects",
  subtitle: "THINGS I HAVE DESIGNED, BUILT AND FLOWN",
  projects: [
    {
      // 📷 無人機實機（含投放機構）或飛行中照片
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Rescue+drone+16:9",
      projectName: "Search-and-Rescue Drone",
      projectDesc:
        "A drone that builds a heat map of disaster areas and air-drops rescue balls. I handled flight testing and the drop-release control module. 2nd place, Compassion Tech Innovation Competition 2026.",
      footerLink: []
    },
    {
      // 📷 白底折線圖：IMU 取樣率 vs 姿態誤差（或 Gazebo 模擬截圖）
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=IMU+rate+plot+16:9",
      projectName: "IMU Sampling-Rate Study",
      projectDesc:
        "How fast does a flight controller need to read its IMU? I injected realistic sensor noise into PX4 SITL and compared flight performance from 125 to 1000 Hz.",
      footerLink: []
    },
    {
      // 📷 MATLAB 圖：重心高度 vs 圈速（或賽車實車照）
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Lap+time+vs+CG+plot+16:9",
      projectName: "Lap-Time Simulator",
      projectDesc:
        "A MATLAB lap-time simulator for NTU Racing, used to sweep center-of-gravity position and find the best CG height range, paired with a heave / roll suspension model in IPG CarMaker.",
      footerLink: []
    },
    {
      // 📷 堆高機實車，或 IR 感測陣列特寫
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Forklift+robot+16:9",
      projectName: "Automated Guided Forklift",
      projectDesc:
        "A line-following forklift built for Microcontroller Systems. I designed a five-channel IR tracking array and calibrated servo timing so the forks line up with rack slots for repeatable pickup and drop-off.",
      footerLink: []
    },
    {
      // 📷 氣動肌肉裝置照片
      image:
        "https://placehold.co/1600x900/f5f5f7/6b6b6b?text=Pneumatic+muscle+16:9",
      projectName: "Pneumatic Muscle Leg Device",
      projectDesc:
        "A stair-climbing assist device at HER Lab. I built pneumatic artificial muscles with Arduino pressure control, reaching 6 cm contraction at 250 kPa against a 2 cm target.",
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