// Project portfolio data — real work from the studio portfolio plus
// representative Web Design / Development / Campaigns projects.
// Cover images for real work are sourced from the portfolio CDN.

const CDN = "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3";

export const PROJECTS = [
  {
    id: "vertex-studio",
    title: "Web Design / Development",
    client: "Various Clients",
    category: "Web Design / Development",
    categories: ["Web Design / Development"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/450bfc066_Screenshot2026-09-22at105141PM.png",
    year: "2024",
    description:
      "Custom website design and development — editorial layouts, immersive galleries, and refined interfaces that let each brand's work breathe.",
    skills: ["UI Design", "UX Strategy", "Web Design", "Front-End Development"],
    overview:
      "End-to-end web work spanning discovery, wireframes, visual design, and some front-end builds — crafting sites that are as usable as they are beautiful.",
    challenge:
      "Presenting each brand's imagery and content beautifully without sacrificing performance or mobile usability.",
    approach:
      "A responsive grid with broken alignments, lazy-loaded galleries, and motion that guides rather than distracts.",
    result:
      "Fast, elegant websites that elevate the work and drive qualified inquiries.",
    tools: ["Figma", "React", "Tailwind CSS"],
    liveUrl: "https://yotiesoglobalconsulting.com/",
    gallery: [
      { src: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/450bfc066_Screenshot2026-09-22at105141PM.png", url: "https://yotiesoglobalconsulting.com/", title: "Yotieso Global Consulting" },
      { src: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/68598aa3a_Screenshot2026-09-23at120320AM.png", url: "https://www.ceapittsburgh.org/solidarity", title: "Day of Black Male Solidarity", visitLabel: "Click to visit live page", visitAction: "Visit Page" },
      { src: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/55aad23ed_Screenshot2026-09-23at121058AM.png", url: "https://www.takeactionadvocacygroup.org/environmental-justice", title: "Take Action Advocacy Group — Environmental Justice", visitLabel: "Click to visit live page", visitAction: "Visit Page" },
      { src: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/bbea6a689_djv_logowhitebkgnd.png", title: "DejaVuAI", to: "/projects/vertex-studio/dejavuai" },
    ],
    subProjects: [
      {
        slug: "dejavuai",
        title: "DejaVuAI",
        cover: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/bbea6a689_djv_logowhitebkgnd.png",
        light: true,
        hideCard: true,
        role: "Frontend Developer · Next.js, TypeScript, React 19, Tailwind v4, DaisyUI",
        subtitle: "DejaVu AI: ClearSeek visual search platform",
        stack: ["Next.js", "TypeScript", "React 19", "Tailwind v4", "DaisyUI"],
        description: [
          "At DejaVu AI, I was a frontend developer on ClearSeek, a visual search platform that lets users search large image and video collections with images instead of keywords. I worked across a monorepo of three apps with a shared component library, and owned features from early UX design through to production code.",
          "My main work was ClearSeek's video and image search tools. I designed and built a video frame extractor that turns video into searchable images. Users browse a filmstrip, select frames or whole ranges, and get results grouped by where they appear in the video, with caching that keeps the browser fast on long videos. I also built freehand and marquee lasso tools for searching one region of an image, segmentation class filtering, a theater-mode result viewer, and export to CSV, PDF, Word and JSON.",
          "I led the design system across the platform. I built a light and dark mode system on semantic color tokens, consistent across browsers with no flash of the wrong theme on load. I also standardized typography, moved components onto a shared library, and made the interface responsive across more than ten device breakpoints, from small phones to large tablets.",
          "I also strengthened the platform's foundations. I migrated the codebase to TypeScript and the App Router, set up the Docker and API proxy dev environment, built camera bucket management for the Validator app, and fixed session issues between the apps. I worked closely with backend and product teammates, producing interactive prototypes, wireframes, design docs and architecture proposals that guided engineering and leadership decisions.",
        ],
        tools: ["Next.js", "TypeScript", "React 19", "Tailwind v4", "DaisyUI"],
        workDetails: [
          {
            title: "Light and dark mode",
            body: "Led theming across three apps, with shared design tokens, consistent dark mode across browsers, standardized type and a shared component library. Also made the platform work across 10+ device breakpoints, from small phones to large tablets.",
            videoUrl: "https://media.base44.com/videos/public/6aa974d5b6276f4a026f44f6/7e651615c_Light_DarkModesDJV.mp4",
            videoCaption: "I added light and dark mode by building a set of semantic color tokens, such as page background, sidebar and main text. Each token is stored as a CSS custom property with a light and a dark value, and registered with Tailwind so components use meaningful names instead of hard-coded colors. A small script runs before the page renders and applies the saved theme, so there's no flash of the wrong mode on load. I also set the CSS color-scheme property so built-in browser elements like scrollbars and form controls match the theme, which fixed differences between Safari and Chrome. Later I extended the system across the Validator app with a consistent slate color scale and shared components, so both apps look and behave the same in either mode.",
          },
          {
            title: "Video search and annotation tools",
            body: "Designed and built a tool for scrubbing through video and pulling frames for search, with multi-select, batch browsing, results grouped by time window, and memory-safe caching. It pairs with freehand and marquee lasso selection, segmentation class filtering, a theater-mode result viewer, and export to CSV, PDF, Word and JSON.",
            videoUrl: "https://media.base44.com/videos/public/6aa974d5b6276f4a026f44f6/4131635df_DJV_VFE_Video.mp4",
            videoCaption: [
              {
                title: "Video frame extractor",
                paragraphs: [
                  "The video frame extractor turns a video into searchable images. When a user adds a video to a search, a lightbox opens with a filmstrip of the whole video. It's built for picking frames, not for playback. Users set an extraction interval, such as a number of frames per second or per minute, then click single frames or shift+click to select whole ranges. Behind the scenes, a hidden video element jumps to each chosen timestamp and draws that frame onto a canvas, which is saved as an image. The search backend then handles each frame like any other uploaded image.",
                  "For whole-video searches, results are grouped into time-window drawers, so users can see where in the video each match came from without being buried in hundreds of frames. To keep the browser fast, the app keeps a capped cache of extracted frames and clears out the oldest ones as new ones come in.",
                ],
              },
              {
                title: "Lasso and marquee tools",
                paragraphs: [
                  "The lasso tools let users search for one specific part of an image instead of the whole thing. The freehand lasso traces any shape, and the marquee draws a quick rectangle. The selected region is cropped and sent as the search query. Both tools work on the main search page and inside the video frame lightbox, and they behave the same in both places.",
                  "Selections are stored as coordinates relative to the image, not as screen pixels. That means a selection stays in the right spot when the window is resized or when a user switches between images and comes back. Segmentation class choices also carry over between lasso and crop searches, so users don't have to set them again each time.",
                ],
              },
            ],
          },
        ],
        images: [],
      },
    ],
  },
  {
    id: "apps",
    title: "Apps",
    client: "Various Clients",
    category: "Apps",
    categories: ["Apps"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/006267547_generated_image.png",
    year: "2024",
    description:
      "Mobile app design and development — intuitive interfaces, smooth flows, and polished experiences built to feel native on every device.",
    skills: ["App Design", "UX Strategy", "Prototyping", "Front-End Development"],
    overview:
      "End-to-end app work spanning discovery, wireframes, visual design, and front-end build — crafting products that are as usable as they are beautiful.",
    challenge:
      "Designing flows that feel effortless on small screens while keeping performance and accessibility front and center.",
    approach:
      "A user-first process: map the journey, prototype the key flows, then design and build a clean, scalable interface system.",
    result:
      "Apps that load fast, feel considered, and keep users coming back — from first open to daily habit.",
    tools: ["Figma", "React", "React Native", "Tailwind CSS"],
    gallery: [
      { src: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/ea27aa940_Screenshot2026-09-24at91728PM.png", title: "Dish-Dashers", comingSoon: true },
    ],
  },
  {
    id: "logos",
    title: "Logos",
    client: "Various Clients",
    category: "Logos",
    categories: ["Logos"],
    image: `${CDN}/eed7afa5-c8cf-4f2a-89e8-0a8b29803a96_rw_1200.png?h=994478f64b1510aed7791c21528505ac`,
    year: "2023",
    description:
      "A collection of custom logos created for personal clients and businesses by Tanesha, Graphic designer.",
    skills: ["Logo Design", "Brand Identity", "Typography"],
    overview:
      "Logo work spanning small businesses, creatives, and community brands, each designed for clarity, scalability, and longevity.",
    challenge:
      "Creating marks that feel unique in crowded markets while staying simple enough to work anywhere.",
    approach:
      "Sketch-first process, geometric refinement, and careful type pairing to build marks that scale from favicon to signage.",
    result:
      "A versatile set of logos each backed by a clear system for color, spacing, and usage.",
    tools: ["Illustrator", "Photoshop"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/3950116d5_ListenUpLogo_final2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/6037aa669_1d554fa1-d980-4f7f-a025-88e2f949ba59.png",
      `${CDN}/eed7afa5-c8cf-4f2a-89e8-0a8b29803a96_rw_1200.png?h=994478f64b1510aed7791c21528505ac`,
      `${CDN}/e53c181f-bbf8-480d-8408-2dd1ccc89fa5_rw_1920.png?h=cd0af03e87a0f9a80071a7b8b6e9c3b3`,
      `${CDN}/232c3a05-600c-4f7a-88bf-53895837c973_rw_1920.jpg?h=05646da3b99ca01f8f41ed1e9aa651d3`,
      `${CDN}/31dc8a60-6a8f-4c63-ad9d-6c971cc55ee4_rw_1920.png?h=b50cfa2a4bb2b4348b7b93550dccbaee`,
      `${CDN}/10e6878d-72c4-4f2a-b263-dcf92ca52654_rw_1200.jpg?h=a5ac086584f0a8b860000e3e78a79115`,
      `${CDN}/4745924b-4ec2-47ff-b1fd-ba13de843b7b_rw_1920.png?h=dbd26a9e90aa0ee3bbe6ca0c06eef11e`,
      `${CDN}/b1e48151-1a1b-4e4f-bab5-4b4716741c2d_rw_1200.jpg?h=b0a3e666eade15b077722c10737e02d6`,
      `${CDN}/6bcff2dd-7538-4508-b876-fe6f22d99f47_rw_1920.png?h=6d68aea19d560dda8fa8399b7875260a`,
      `${CDN}/c8c9f3bf-97cf-422b-b22d-2c9758030a65_rw_600.png?h=87b4e8d0145279330a87db8c311cddf8`,
      `${CDN}/d6eddff2-0a88-4cff-a5e7-8f35f1f87f77_rw_600.png?h=aee00c77c1c53d0bc9dd2b57ab6dec55`,
      `${CDN}/0fda7706-5da0-4d70-8b33-7afbd7adb7b7_rw_1200.jpg?h=7bb05e8aa6ced3e845845f5b5b26bd05`,
      `${CDN}/ffd27420-1819-42ab-b183-18dd450e6bc6_rw_1200.jpg?h=fdc555341154158fb67b1a9f6f60171a`,
      `${CDN}/2dfbb70f-bb76-4a36-ad09-4b4c3a8ea6fd_rw_1920.png?h=a927cdcc411c34d339a73a311ab77401`,
      `${CDN}/37b22490-3f43-4cc9-a6f5-92d45e8b76b4_rw_1920.png?h=fb3f0372523e71e986d5983dd6329d6e`,
      `${CDN}/965fa46d-2916-40fa-87fc-54d1f826bf87_rw_1920.jpg?h=02db609eb4ed74aecfad7097e3842c64`,
      `${CDN}/73546ab9-9276-457d-af1e-5c6396b4061c_rw_1920.png?h=7dab1eca887fd7b80ba32f83b04fcef8`,
      `${CDN}/2986cc11-d120-44e8-8055-5521b6874174_rw_1920.png?h=b38744471740a60f64df00072f68fc4f`,
      `${CDN}/4224d137-495c-4b84-afaa-3d0c309d6687_rw_1920.png?h=4f6e48fa438bab6378d89deaaf536db7`,
    ],
  },
  {
    id: "business-cards",
    title: "Business Cards",
    client: "Various Clients",
    category: "Business Cards",
    categories: ["Business Cards"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/c82ab598c_LuxuryConcreteRoseBusinessCards.png",
    year: "2023",
    description:
      "Print-ready business card designs — tactile, memorable, and built to make a strong first impression in hand.",
    skills: ["Print Design", "Layout", "Typography"],
    overview:
      "Business card systems pairing clean typography with considered material and finish choices for a premium feel.",
    challenge:
      "Standing out in a wallet while staying readable and on-brand.",
    approach:
      "Restrained layouts, generous whitespace, and a focus on tactile details like stock and edge finish.",
    result:
      "Cards that feel intentional and leave a lasting impression with every exchange.",
    tools: ["Illustrator", "Photoshop"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/c82ab598c_LuxuryConcreteRoseBusinessCards.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a766339dc_ChatGPTImageOct1202601_25_20PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f696d4b3f_ChatGPTImageOct1202601_25_22PM-3.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/bc8bf1bf5_ChatGPTImageOct1202601_25_24PM-4.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/87ed7f5ab_ChatGPTImageSep28202607_50_51PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/49f30f23b_ChatGPTImageSep28202607_50_52PM-2.png",
    ],
  },
  {
    id: "soleil-brand-essentials",
    title: "Social Media Post",
    client: "Various Clients",
    category: "Social Media",
    categories: ["Social Media"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f7f81827e_Screenshot2026-09-22at95854PM.png",
    year: "2022",
    description:
      "Social media post designs — templated, on-brand, and built to keep a feed consistent across formats.",
    skills: ["Social Media Design", "Content Templates", "Branding"],
    overview:
      "A set of social posts establishing a flexible visual language across feed and stories for each brand.",
    challenge:
      "Maintaining brand consistency across formats while keeping each post fresh and engaging.",
    approach:
      "A flexible template system with editable components, consistent type, and a unified color story.",
    result:
      "A cohesive social presence that makes each brand instantly recognizable at a glance.",
    tools: ["Photoshop", "Figma"],
    gallery: [
      `${CDN}/40caedd0-916d-48fd-b19b-6a640583c76a_rw_1200.jpg?h=29a2d78b0855e15cb29e8b935e299c2b`,
      `${CDN}/a02b532c-9b04-47aa-9c3d-f52a4f29f0f9_rw_1200.jpg?h=ea316a0cea3ba570f91075498237d4fb`,
      `${CDN}/a27314fd-8428-49c9-ad22-493d97d65c9e_rw_1200.png?h=6cc71809bd475c809eb44c4002ac1aad`,
      `${CDN}/e140c415-7741-4f9d-8fcd-362d59e0367d_rw_1200.jpg?h=f634176f52543daaefc56636c28e11c1`,
      `${CDN}/061348ad-e8fd-46a0-936f-659f6e03daf1_rw_1920.jpg?h=0481ea587518a6eb7a144cea5e93af1d`,
      `${CDN}/7caf7119-307c-4475-bd07-18fa386175d9_rw_1200.jpg?h=3d57010b2445dd1d36cc6c916149e952`,
      `${CDN}/3aa3ccbc-dd23-404a-afe1-f5cfdc3bb1b9_rw_1200.jpg?h=925ba61b1ef4b4f489fb17bc57a4470d`,
      `${CDN}/51e5313e-133f-486f-a866-7ae4fe0254dc_rw_1200.jpg?h=596d6e1199bf07073265671a23d5c6f0`,
      `${CDN}/2f1ce16e-79c4-41ed-8367-356860677dee_rw_1200.jpg?h=c287628f20b02b07e5084690d33afe87`,
      `${CDN}/96bb9872-7c0b-4fc6-b718-244e62ab4812_rw_1200.jpg?h=6e94c260968ad86dedd6cf5b3b4a520e`,
      `${CDN}/5b86d949-81f1-438f-b143-19b29dc07135_rw_1200.jpg?h=952d78c690ffa7595e7ae577b192f886`,
      `${CDN}/8e039a4b-dbcf-4d07-9255-3ccf92fbce9f_rw_1200.jpg?h=592e072a6cb26e0402bb6ebb1d5491e9`,
      `${CDN}/740520c5-6a8f-4fa6-a276-c227a75e0624_rw_1200.jpg?h=208562acba3a5b0b16b3a2abc82243fa`,
      `${CDN}/15fa2864-02cd-469d-94e2-f06d9ae22b78_rw_1200.jpg?h=69ba4755d1f4a66bd341fac277143c0d`,
    ],
    galleryGroups: [
      {
        title: "Orlana - Hall Of Fame Fathers",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/e08bbaa86_HonorFarhers_NameOnlycopy_evan.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/9dbd43b42_HonorFarhers_EvanF.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/1e0e94f68_HonorFarhers_NameOnly_BobbyE.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/21293bc45_HonorFarhers_BobbyE.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/9f051969f_HonorFarhers_NameOnly_WilliamC.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/dcfd3b65d_HonorFarhers_WilliamC.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/6eeb3fdd9_HonorFarhers_NameOnly_EdG.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/3939fee08_HonorFarhers_EdG.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8b719d8e1_HonorFarhers_NameOnly_JoeyP.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/5dd431371_HonorFarhers_JoeyP.png",
        ],
      },
      {
        title: "Success Magazine — Orlana Darkins Drewery",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/81720b4b9_Screenshot2026-09-28at73104PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8b0a4b3f9_Screenshot2026-09-28at73113PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/87e6f9867_Screenshot2026-09-28at73122PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/62b595bb5_Screenshot2026-09-28at73131PM.png",
        ],
      },
      {
        title: "She Matters",
        parent: "Gwen's Girls",
        images: [
          `${CDN}/061348ad-e8fd-46a0-936f-659f6e03daf1_rw_1920.jpg?h=0481ea587518a6eb7a144cea5e93af1d`,
          `${CDN}/7caf7119-307c-4475-bd07-18fa386175d9_rw_1200.jpg?h=3d57010b2445dd1d36cc6c916149e952`,
          `${CDN}/3aa3ccbc-dd23-404a-afe1-f5cfdc3bb1b9_rw_1200.jpg?h=925ba61b1ef4b4f489fb17bc57a4470d`,
        ],
      },
      {
        title: "Motivational Monday",
        parent: "Gwen's Girls",
        images: [
          `${CDN}/40caedd0-916d-48fd-b19b-6a640583c76a_rw_1200.jpg?h=29a2d78b0855e15cb29e8b935e299c2b`,
          `${CDN}/a02b532c-9b04-47aa-9c3d-f52a4f29f0f9_rw_1200.jpg?h=ea316a0cea3ba570f91075498237d4fb`,
          `${CDN}/a27314fd-8428-49c9-ad22-493d97d65c9e_rw_1200.png?h=6cc71809bd475c809eb44c4002ac1aad`,
          `${CDN}/e140c415-7741-4f9d-8fcd-362d59e0367d_rw_1200.jpg?h=f634176f52543daaefc56636c28e11c1`,
        ],
      },
      {
        title: "She Matters Equity Summit",
        parent: "Gwen's Girls",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/b1e9bb305_JoinUs1.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/34bb9dfec_Artboard1.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f9c5a8ca2_Artboard1copy.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f00d0da14_Artboard1copy2.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/9ab181ed8_Artboard1copy3.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f1778f3a2_Artboard1copy4.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/77a4860c9_JoinUs1copy.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/167023565_JoinUs1copy2.png",
        ],
      },
      {
        title: "BWPC — Listen to Black Women",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8a81580a6_Screenshot2026-09-28at12115PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/3d3ab33f1_BWPC_ListenToBlackWomenFlyer.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/13fa7c8c3_Screenshot2026-09-28at11659PM.png",
        ],
      },
      {
        title: "Gifted Touch From Above",
        images: [
          `${CDN}/51e5313e-133f-486f-a866-7ae4fe0254dc_rw_1200.jpg?h=596d6e1199bf07073265671a23d5c6f0`,
          `${CDN}/2f1ce16e-79c4-41ed-8367-356860677dee_rw_1200.jpg?h=c287628f20b02b07e5084690d33afe87`,
          `${CDN}/96bb9872-7c0b-4fc6-b718-244e62ab4812_rw_1200.jpg?h=6e94c260968ad86dedd6cf5b3b4a520e`,
          `${CDN}/5b86d949-81f1-438f-b143-19b29dc07135_rw_1200.jpg?h=952d78c690ffa7595e7ae577b192f886`,
          `${CDN}/8e039a4b-dbcf-4d07-9255-3ccf92fbce9f_rw_1200.jpg?h=592e072a6cb26e0402bb6ebb1d5491e9`,
          `${CDN}/740520c5-6a8f-4fa6-a276-c227a75e0624_rw_1200.jpg?h=208562acba3a5b0b16b3a2abc82243fa`,
          `${CDN}/15fa2864-02cd-469d-94e2-f06d9ae22b78_rw_1200.jpg?h=69ba4755d1f4a66bd341fac277143c0d`,
        ],
      },
    ],
  },
  {
    id: "flyers",
    title: "Flyers",
    client: "Various Clients",
    category: "Flyers",
    categories: ["Flyers"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/067b93598_Screenshot2026-09-22at100105PMpng-Edited.png",
    year: "2023",
    description:
      "Promotional flyer designs for events, services, and campaigns — built to grab attention and drive response.",
    skills: ["Flyer Design", "Layout", "Typography"],
    overview:
      "Flyer work spanning nightlife, community events, and small-business promotions, each tuned to its audience.",
    challenge:
      "Fitting a lot of information onto a single page without losing hierarchy or impact.",
    approach:
      "Clear visual hierarchy, bold headlines, and a strong focal point to guide the eye quickly.",
    result:
      "Flyers that cut through the noise and clearly communicate the who, what, and when.",
    tools: ["Photoshop", "Illustrator"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/98115fecd_ChatGPTImageSep28202609_13_21PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/1f6dbeea6_ChatGPTImageSep28202609_13_21PM-2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/df28001ac_ChatGPTImageSep28202609_13_22PM-3.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/374ccdfb9_ChatGPTImageSep28202609_13_22PM-4.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f4d109617_ChatGPTImageSep28202609_13_23PM-5.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/345abe26a_ChatGPTImageSep28202606_59_18PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/69be1b7c6_ChatGPTImageSep28202606_59_19PM-2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/33a035e09_ChatGPTImageSep28202606_59_19PM-3.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f95c1bdf9_ChatGPTImageSep28202606_59_20PM-4.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/95d2f31de_ChatGPTImageSep28202606_59_21PM-5.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/71255bf43_ChatGPTImageSep28202606_48_26PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/7ee360761_ChatGPTImageSep28202606_48_27PM-2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/6e0e44486_ChatGPTImageSep28202606_48_27PM-3.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/c85e6f9b6_ChatGPTImageSep28202606_48_28PM-4.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/5baed9182_ChatGPTImageSep28202606_48_29PM-5.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a42c5b23d_ChatGPTImageSep28202606_48_30PM-6.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/fe60d61ff_ChatGPTImageSep28202606_48_30PM-7.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/067b93598_Screenshot2026-09-22at100105PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/051b12461_Screenshot2026-09-22at100454PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f98ef8fdb_Screenshot2026-09-22at100456PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0d9205cc8_Screenshot2026-09-22at100507PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/f739ff0dd_Screenshot2026-09-22at100509PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/632f04ab9_Screenshot2026-09-22at100513PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/2966ee9d0_Screenshot2026-09-22at100519PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0341313cd_Screenshot2026-09-22at100525PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/75aa4dc04_Screenshot2026-09-22at100534PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/e32d61f3f_Screenshot2026-09-22at100546PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0250926e5_Screenshot2026-09-22at100557PMpng-Edited.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8fb226e37_Screenshot2026-09-22at100558PMpng-Edited.png",
    ],
  },
  {
    id: "cutz-by-camp",
    title: "Brand Identity",
    client: "Various Clients",
    category: "Brand Identity",
    categories: ["Brand Identity"],
    image: "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/c217e0d0-6824-47e6-9a46-a39eae57f1fc_rw_1200.jpg?h=bcaef025f677dcc01061fb5f2d09c7db",
    year: "2022",
    description:
      "Full brand identity systems — logo, color, type, and supporting visuals built to give each brand a sharp, memorable presence.",
    skills: ["Brand Identity", "Logo Design", "Art Direction"],
    overview:
      "Brand identity work spanning barbershops, salons, and lifestyle brands, each built around a cohesive system for logo, color, typography, and real-world application.",
    challenge:
      "Giving each brand a distinctive look that holds up across signage, social, and print.",
    approach:
      "A bold wordmark, a tight color palette, and supporting graphics that translate across every touchpoint.",
    result:
      "Cohesive identities that give each brand a professional, memorable presence from storefront to feed.",
    tools: ["Illustrator", "Photoshop"],
    gallery: [],
    subProjects: [
      {
        title: "Frequency",
        slug: "frequency",
        year: "2020",
        cover: "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/cd673297-fbe3-4d32-878f-bffb2d8fa09b_carw_4x3x5120.jpg?h=e7fcc213a7f6b7d70f4c014fdc587b1e",
        images: [
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/c217e0d0-6824-47e6-9a46-a39eae57f1fc_rw_1200.jpg?h=bcaef025f677dcc01061fb5f2d09c7db",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/324bfb3e-cdbe-4d04-9ce9-685d95d9766e_rw_1200.jpg?h=b473ee6d8c045577a7b1d9ff1d75b23c",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/5f184b48-2aea-4e85-8b9e-26e285264543_rw_1920.png?h=d5274d201ff10e4163fc71c375ff9d44",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/12dedeac-4412-4aae-a103-096a1611a2aa_rw_1200.jpg?h=ced58c61619464437cbf50a58ae8535a",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/2d839179-043a-4966-ad61-82db88a59bc4_rw_1200.jpg?h=085d0616dadcc0bca3c0893506fdf48e",
        ],
      },
      {
        title: "KisaWisa Braids",
        slug: "kisawisa-braids",
        year: "2022",
        cover: "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/7698b3c9-9a70-4d2c-ad2a-eb9e96d7add3_rw_1200.png?h=22ad1b6cd6ba9cb953aabe54191de8e4",
        images: [
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/7698b3c9-9a70-4d2c-ad2a-eb9e96d7add3_rw_1200.png?h=22ad1b6cd6ba9cb953aabe54191de8e4",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/be023a0f-f717-4c81-b844-98e8410ea312_rw_1200.png?h=c70e5857b6eb6590f3f2e969bae8243e",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/09a1a74b-4a03-45cc-8e80-494d307d6f04_rw_1200.jpg?h=acd1122269ace35e6e0826c47dc9783f",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/b6299706-083c-48ca-95e9-0734f8b63fe8_rw_1920.png?h=aaddd6c4ea11cec02aa86ed389b177e0",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/669279ce-8716-44b4-8084-dc712d4675fc_rw_1920.png?h=ac00147a36fabbb093897557eda3d2b5",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/b0d39bbd-67fa-4375-9442-1d30d54da6b1_rw_1920.png?h=5340c5048730e63b1b535f08b9bb0a9f",
          "https://cdn.myportfolio.com/fb234b7a-1521-4ef1-860c-4988b53290d3/a208ae50-d31a-4c96-a942-7b7d7a5c80d6_rw_600.png?h=e49eec2321dd275daba5b467f5a7065e",
        ],
      },
      {
        title: "A Fight for Mommy",
        slug: "a-fight-for-mommy",
        year: "2024",
        cover: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/70c52592c_Screenshot2026-09-28at84634PM.png",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/70c52592c_Screenshot2026-09-28at84634PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8e6f7c49e_Screenshot2026-10-01at20921PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/cc8d4f1b7_Screenshot2026-10-01at20929PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/731232b38_Screenshot2026-10-01at20945PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0ccf7e6fd_ChatGPTImageSep28202608_48_22PM-1.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a25e31c46_Screenshot2026-10-01at20914PM.png",
        ],
      },
      {
        title: "Healing in the Fight",
        slug: "healing-in-the-fight",
        year: "2025",
        cover: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/1f81f37a1_Fawn_bookLaunchFlyer2.png",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/1f81f37a1_Fawn_bookLaunchFlyer2.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/5e61cc706_ChatGPTImageSep28202607_44_21PM-1.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a2e5c48ae_ChatGPTImageSep28202608_48_22PM-2.png",
        ],
      },
      {
        title: "Merry Stitchmas",
        slug: "merry-stitchmas",
        year: "2025",
        cover: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/076b76501_stitch2.png",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/076b76501_stitch2.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/7460de170_Screenshot2026-10-01at10029PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/de83f22fb_Screenshot2026-10-01at10119PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/c60921325_ybmkqStitchmastshirt.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/020a5a543_generated_image.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8520ebdd9_stitch.png",
        ],
      },
      {
        title: "9th Annual YBMKQ Gala",
        slug: "9th-annual-ybmkq-gala",
        year: "2024",
        cover: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/7c0ee49ea_YoungBlackMotivatedAnniversarySponsorBackdrop.png",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/7c0ee49ea_YoungBlackMotivatedAnniversarySponsorBackdrop.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/658f8db97_Screenshot2026-10-01at81036PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/39ab78d7d_Screenshot2026-10-01at80954PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/14b7237ee_Screenshot2026-10-01at80741PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/3b7e9950c_Screenshot2026-10-01at74616PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/b222f54ef_ThankYouSponsorsEventPoster.png",
        ],
      },
    ],
  },
  {
    id: "obituary",
    title: "Obituaries / Programs",
    client: "Various Clients",
    category: "Obituaries / Programs",
    categories: ["Obituaries / Programs"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/b5f18e9bb_Screenshot2026-09-27at122306PM.png",
    year: "2022",
    description:
      "Memorial program and obituary designs — respectful, elegant, and crafted to honor a life with care.",
    skills: ["Print Design", "Layout", "Typography"],
    overview:
      "Printed obituary programs and event booklets designed to feel tender and considered while clearly guiding attendees through the service.",
    challenge:
      "Balancing emotional sensitivity with clear, readable structure.",
    approach:
      "Soft typography, generous spacing, and a calm layout that lets the content breathe.",
    result:
      "Keepsake programs that families can hold onto as a meaningful tribute.",
    tools: ["Illustrator", "Photoshop"],
    gallery: [],
    subProjects: [
      {
        title: "Obituaries",
        slug: "obituaries",
        year: "2022",
        cover: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/b5f18e9bb_Screenshot2026-09-27at122306PM.png",
        images: [],
        liveLinks: [
          {
            name: "Mother Maggie L. Washington",
            url: "https://simplebooklet.com/mswashingtonobituaryrevised2",
            cover:
              "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/6f4f86fd5_ScreenShot2022-09-02at120307PM.png",
          },
          {
            name: "Tanika Burgess",
            url: "https://simplebooklet.com/burgessobit",
            cover:
              "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/2e11c62ea_Screenshot2026-09-27at122529PM.png",
          },
          {
            name: "Harold Berry, Jr.",
            url: "https://simplebooklet.com/haroldberry",
            cover:
              "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/b5f18e9bb_Screenshot2026-09-27at122306PM.png",
          },
        ],
      },
      {
        title: "Programs",
        slug: "programs",
        year: "2022",
        cover: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/d2042b947_Screenshot2026-09-27at10025PM.png",
        images: [],
        liveLinks: [
          {
            name: "The 16th Annual Shyne Awards",
            url: "https://simplebooklet.com/2025shyneawardsbooklet",
            cover:
              "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/d2042b947_Screenshot2026-09-27at10025PM.png",
          },
          {
            name: "Gwen's Girls Naming Opportunity",
            url: "https://simplebooklet.com/gewnsgirlnamingopportunity",
            cover:
              "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/abc7ff2d3_Screenshot2026-09-27at10739PM.png",
          },
        ],
      },
    ],
  },
  {
    id: "posters",
    title: "Posters",
    client: "Various Clients",
    category: "Posters",
    categories: ["Posters"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0e1cf3a84_ChatGPTImageSep28202608_03_06PM-1.png",
    year: "2020",
    description:
      "High-impact poster design — event, sponsor, and community posters built to grab attention and communicate at a glance.",
    skills: ["Poster Design", "Art Direction", "Typography"],
    overview:
      "Poster work spanning community events, sponsor recognition, and mental-health conversations, each tuned to its audience and message.",
    challenge:
      "Fitting layered information — sponsors, speakers, branding — into a single, readable composition.",
    approach:
      "Bold central visuals, clear hierarchy, and considered typography that reads from across the room.",
    result:
      "Posters that cut through the noise and clearly communicate the who, what, and why.",
    tools: ["Photoshop", "Illustrator"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0e1cf3a84_ChatGPTImageSep28202608_03_06PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8e9acc1b9_ChatGPTImageSep28202608_03_06PM-2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8c7c195a1_ChatGPTImageSep28202608_03_07PM-3.png",
    ],
  },
  {
    id: "backdrops-step-and-repeats",
    title: "Backdrops / Step and Repeats",
    client: "Various Clients",
    category: "Backdrops / Step and Repeats",
    categories: ["Backdrops / Step and Repeats"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0d13b37bd_ChatGPTImageSep28202607_44_21PM-2.png",
    year: "2022",
    description:
      "Step-and-repeat backdrops and branded event walls — repeating logo grids built for red-carpet moments and photo ops.",
    skills: ["Backdrop Design", "Art Direction", "Typography"],
    overview:
      "Large-format backdrops for galas, summits, and community events, each carrying a repeating branded pattern that photographs cleanly.",
    challenge:
      "Balancing logo repetition and spacing so the backdrop looks intentional on camera, not cluttered.",
    approach:
      "A measured grid, high-contrast logo art, and durable tensioned fabric production for crisp, repeatable results.",
    result:
      "Backdrops that turn any event wall into a branded photo moment.",
    tools: ["Photoshop", "Illustrator"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0d13b37bd_ChatGPTImageSep28202607_44_21PM-2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/6881ab93b_ChatGPTImageSep28202607_28_31PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a85821910_ChatGPTImageSep28202607_28_32PM-2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/e2f3a6009_ChatGPTImageSep28202607_28_33PM-3.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/59aceedc2_YoungKingsCommunityCenterBanner.png",
    ],
  },
  {
    id: "banners",
    title: "Banners",
    client: "Various Clients",
    category: "Banners",
    categories: ["Banners"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a369a0f77_ChatGPTImageSep28202607_44_21PM-1.png",
    year: "2023",
    description:
      "Retractable and standing banners — portable, on-brand displays built to make a strong impression at events and pop-ups.",
    skills: ["Banner Design", "Layout", "Typography"],
    overview:
      "Retractable banner work for authors, events, and organizations, each designed to read clearly up close and from a distance.",
    challenge:
      "Designing tall, narrow formats that hold hierarchy and impact without feeling cramped.",
    approach:
      "A strong top focal point, scannable body copy, and a clear call-to-action anchored at the base.",
    result:
      "Banners that travel well and draw people in at every event.",
    tools: ["Photoshop", "Illustrator"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a369a0f77_ChatGPTImageSep28202607_44_21PM-1.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/0160dd858_ChatGPTImageSep28202607_20_06PM-2.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/68a3c3a60_ChatGPTImageSep28202607_20_07PM-3.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/e82498fb9_ChatGPTImageSep28202607_21_21PM.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/bb012f5dc_ChatGPTImageSep28202610_01_56PM.png",
    ],
  },
  {
    id: "billboards",
    title: "Billboards",
    client: "Various Clients",
    category: "Billboards",
    categories: ["Billboards"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/fe053ef87_YBMKQ_My1stBillboard.png",
    year: "2020",
    description:
      "Outdoor billboard design — bold, high-contrast visuals built to read in seconds at highway scale.",
    skills: ["Billboard Design", "Art Direction", "Typography"],
    overview:
      "Large-format outdoor work designed for maximum legibility and impact at distance, from roadside to city placement.",
    challenge:
      "Making a single message land in the few seconds a viewer has while passing by.",
    approach:
      "Oversized type, a single focal visual, and ruthless restraint to keep the read instant.",
    result:
      "Billboards that stop the scroll of everyday traffic and make the message stick.",
    tools: ["Photoshop", "Illustrator"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/fe053ef87_YBMKQ_My1stBillboard.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/9889f1f44_IMG_2896.jpg",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/315202017_IMG_2897.jpg",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/3078d5aa4_Screenshot2026-10-01at64609PM.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/481a8cfd1_CaringConnectionsHighwayBillboard.png",
    ],
  },
  {
    id: "book-covers",
    title: "Book Covers",
    client: "Various",
    category: "Book Covers",
    categories: ["Book Covers"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/c9951e571_mockup-of-a-book-standing-on-three-books-a17398png-Edited.png",
    year: "2024",
    description:
      "Custom book cover design and mockups — visually striking covers that capture a title's tone and draw readers in across print and digital.",
    skills: ["Cover Design", "Art Direction", "Typography"],
    overview:
      "Considered cover concepts that pair the right imagery, palette, and typography to reflect a book's spirit and stand out on any shelf or screen.",
    challenge:
      "Distilling a title's meaning into a single, resonant image that reads clearly at thumbnail size.",
    approach:
      "A tailored visual direction for each project — layered typography, mood-driven color, and purposeful composition built for print and digital rollout.",
    result:
      "Covers and mockup sets that feel intentional and on-brand, ready for publication.",
    tools: ["Photoshop", "Illustrator"],
    gallery: [],
    galleryGroups: [
      {
        title: "She Believed God, So She Moved — Shaasia Nance",
        images: [
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/8e1ccd8e4_Screenshot2026-09-28at72254PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/753af00ce_Screenshot2026-09-28at72219PM.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/b3675ef44_minimal-mockup-featuring-the-front-and-back-of-a-book-301-el.png",
          "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/3e708500a_mockup-of-a-book-standing-on-three-books-a17398.png",
        ],
      },
    ],
  },
  {
    id: "product-labels",
    title: "Product Labels",
    client: "Various Clients",
    category: "Product Labels",
    categories: ["Product Labels"],
    image: "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/28b60f53c_ChatGPTImageSep28202608_26_00PM.png",
    year: "2024",
    description:
      "Custom product label design — front and back labels that balance brand identity, regulatory copy, and shelf impact.",
    skills: ["Label Design", "Packaging", "Art Direction", "Typography"],
    overview:
      "Product label work spanning personal care and consumer goods, each pairing a bold front-panel mark with clear, considered back-panel information.",
    challenge:
      "Fitting dense regulatory copy — ingredients, directions, warnings — onto a small back label without losing hierarchy or readability.",
    approach:
      "A strong front-panel identity, a calm back-panel grid, and a consistent type system that keeps every detail legible at a glance.",
    result:
      "Labels that feel premium on the shelf and clear in the hand, ready for production.",
    tools: ["Illustrator", "Photoshop"],
    gallery: [
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/28b60f53c_ChatGPTImageSep28202608_26_00PM.png",
      "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/a5e81fa1b_ChatGPTImageSep28202608_37_46PM.png",
    ],
  },
];

export const GRAPHIC_DESIGN_IDS = [
  "vertex-studio",
  "apps",
  "logos",
  "business-cards",
  "soleil-brand-essentials",
  "flyers",
  "cutz-by-camp",
  "obituary",
  "posters",
  "backdrops-step-and-repeats",
  "banners",
  "billboards",
  "book-covers",
  "product-labels",
];

export const PROJECT_FILTERS = [
  "All",
  "Brand Identity",
  "Web Design / Development",
  "Apps",
  "Logos",
  "Business Cards",
  "Flyers",
  "Obituaries / Programs",
  "Posters",
  "Backdrops / Step and Repeats",
  "Banners",
  "Billboards",
  "Social Media",
  "Book Covers",
  "Product Labels",
];