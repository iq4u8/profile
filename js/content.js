/* =========================================================
   SAARA CONTENT YAHAN — projects / skills / edu / certs / links
   Bas values change karo, page khud update ho jayega.
   ========================================================= */
window.SITE = {
    roles: ["FinTech & Web Developer", "Python Automation Builder", "Accounting Tech Coder", "Privacy-First Developer"],

    chips: ["JAVASCRIPT", "PYTHON", "HTML5/CSS3", "TALLY ERP 9", "ADVANCED EXCEL", "FINTECH & BRS", "GST COMPLIANCE", "DATA ANALYTICS", "OFFLINE-FIRST"],

    stats: [{ n: "06", l: "Core Projects" }, { n: "08+", l: "Certifications" }, { n: "4.0", l: "GPA · B.Com" }],

    skills: [
        { name: "JavaScript / Web Apps", pct: 90 },
        { name: "Python / Win32 / Tkinter", pct: 88 },
        { name: "Tally ERP 9 / Adv. Excel", pct: 95 },
        { name: "FinTech & GST Compliance", pct: 90 }
    ],

    marquee: ["JAVASCRIPT (ES6+)", "PYTHON 3", "WIN32 API", "HTML5 / CSS3", "FINTECH APPS", "BANK RECONCILIATION", "TALLY ERP 9", "ADVANCED EXCEL", "GST & TDS", "DATA ANALYTICS", "OFFLINE-FIRST", "PRIVACY-FIRST"],

    socials: [
        { key: "github", href: "https://github.com/iq4u8", label: "GitHub" },
        { key: "linkedin", href: "https://linkedin.com/in/iq4u8", label: "LinkedIn" },
        { key: "email", href: "mailto:priyanshupandey8301@gmail.com", label: "Email" },
        { key: "instagram", href: "https://instagram.com/iq4u8", label: "Instagram" },
        { key: "telegram", href: "https://t.me/iq4u8", label: "Telegram" },
        { key: "playstore", href: "https://play.google.com/store/apps/developer?id=Paradox+Protocol", label: "Play Store" },
        { key: "webpage", href: "https://iq4u8.shop", label: "Webpage" }
    ],

    projects: [
        {
            n: "01",
            title: "SOS Phonebook",
            badge: "SHIPPED · ANDROID & PLAY STORE",
            tone: "mint",
            desc: "Offline-first Android emergency response directory built with React 19, Vite, and Capacitor 8. Features native geolocation, haptics, instant offline search across thousands of emergency contacts, and zero data collection.",
            tags: ["REACT 19", "CAPACITOR 8", "ANDROID APK/AAB", "OFFLINE-FIRST", "NATIVE GEOLOCATION"],
            repoUrl: "https://github.com/iq4u8/SOS-Phonebook",
            demoUrl: "https://github.com/iq4u8/SOS-Phonebook",
            demoLabel: "📱 Android App",
            repoLabel: "GitHub Repo",
            href: "https://github.com/iq4u8/SOS-Phonebook"
        },
        {
            n: "02",
            title: "CLM Sensor (Privacy Sentinel)",
            badge: "SHIPPED · WINDOWS UTILITY",
            tone: "mint",
            desc: "Real-time privacy monitoring desktop utility for Windows 10/11. Uses Python 3 and native Win32 APIs to detect active camera, microphone, and location hardware access via sub-millisecond Windows registry polling with dark/light studio GUI.",
            tags: ["PYTHON 3", "WIN32 API", "TKINTER STUDIO", "SECURITY & PRIVACY", "MULTITHREADING"],
            repoUrl: "https://github.com/iq4u8/CLM-Sensor",
            demoUrl: "https://github.com/iq4u8/CLM-Sensor",
            demoLabel: "📥 Setup .exe",
            repoLabel: "GitHub Repo",
            href: "https://github.com/iq4u8/CLM-Sensor"
        },
        {
            n: "03",
            title: "AI Step-by-Step Calculator",
            badge: "SHIPPED · WEB & ANDROID ENGINE",
            tone: "mint",
            desc: "Intelligent offline calculator featuring a custom recursive-descent BODMAS parsing engine that generates detailed, human-readable math solutions simulating a handwritten notebook tutor. Built for Android WebView & Progressive Web App.",
            tags: ["ALGORITHMS", "PARSER ENGINE", "BODMAS LOGIC", "ANDROID PWA", "SPEECH RECOGNITION"],
            repoUrl: "https://github.com/iq4u8/ai-calculator",
            demoUrl: "https://github.com/iq4u8/ai-calculator",
            demoLabel: "⚡ Webapp / Repo",
            repoLabel: "GitHub Repo",
            href: "https://github.com/iq4u8/ai-calculator"
        },
        {
            n: "04",
            title: "Smart Bank Reconciliation App",
            badge: "SHIPPED · LIVE ON VERCEL",
            tone: "mint",
            desc: "Autonomous, zero-knowledge client-side FinTech platform with 5-pass heuristic reconciliation, Rule-of-9 transposition error audit, 14-language localization, and instant statutory ICAI BRS export. Live on Vercel.",
            tags: ["FINTECH", "HEURISTIC ENGINE", "RULE-OF-9 AUDIT", "ICAI STATUTORY BRS", "LIVE ON VERCEL"],
            repoUrl: "https://github.com/iq4u8/smart-recon",
            demoUrl: "https://iqsmartrecon.vercel.app",
            demoLabel: "⚡ Live Demo",
            repoLabel: "GitHub Repo",
            href: "https://iqsmartrecon.vercel.app"
        },
        {
            n: "05",
            title: "Tally Data Visualizer",
            badge: "SHIPPED · LIVE ON VERCEL",
            tone: "mint",
            desc: "Executive 4D FinTech BI dashboard transforming raw Tally ERP 9 / TallyPrime DayBooks, XML exports, and CSVs into real-time C-suite visual analytics, 30-day debtor/creditor aging heatmaps, and cash flow liquidity curves with zero-knowledge client-side privacy. Live on Vercel.",
            tags: ["FINTECH BI", "CHART.JS V4", "TALLY ERP 9 / PRIME", "4D COCKPIT", "LIVE ON VERCEL"],
            repoUrl: "https://github.com/iq4u8/tally-data-visualizer",
            demoUrl: "https://tally-data-visualizer.vercel.app",
            demoLabel: "⚡ Live Demo",
            repoLabel: "GitHub Repo",
            href: "https://tally-data-visualizer.vercel.app"
        },
        {
            n: "06",
            title: "Automated GST & Invoice Validator",
            badge: "SHIPPED · STATUTORY ENGINE",
            tone: "mint",
            desc: "Autonomous FinTech compliance workstation and invoice auditor engineered against 10 statutory rules: Modulo 36 Luhn GSTIN checksum, Place of Supply tax-split validation, Section 16(2) ITC Pre-Flight check, and 1-Click Auto-Fix for precision rounding drift.",
            tags: ["GST COMPLIANCE", "MODULO 36 LUHN", "TAX AUTOMATION", "FINTECH", "1-CLICK AUTO-FIX"],
            repoUrl: "https://github.com/iq4u8/Automated-GST-Validator",
            demoUrl: "https://github.com/iq4u8/Automated-GST-Validator",
            demoLabel: "⚡ Workstation Repo",
            repoLabel: "GitHub Repo",
            href: "https://github.com/iq4u8/Automated-GST-Validator"
        }
    ],

    education: [
        { yr: "2024", title: "B.Com — A.C.S. College, Maharashtra", sub: "Kavayitri Bahinabai NMU · Grade A · GPA 4.0" },
        { yr: "2020", title: "Intermediate (12th) — Don Bosco Sec. School", sub: "Haldwani, Uttarakhand" },
        { yr: "2018", title: "High School (10th) — Don Bosco Sr. Sec. School", sub: "Haldwani, Uttarakhand" }
    ],

    certs: [
        { title: "Diploma in Web Development (12 Months)", by: "STP Computer Education" },
        { title: "HTML Course", by: "STP Computer Education" },
        { title: "Advanced Excel Course", by: "STP Computer Education" },
        { title: "Tally ERP 9 Course", by: "STP Computer Education" },
        { title: "Google Cybersecurity Professional", by: "Google (Coursera)" },
        { title: "Google Data Analytics Professional", by: "Google (Coursera)" },
        { title: "Meta Database Engineer", by: "Meta (Coursera)" },
        { title: "Cybersecurity for Everyone", by: "Univ. of Maryland (Coursera)" }
    ]
};