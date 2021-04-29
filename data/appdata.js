const apps = [
  {
    title: "Two Bullets",
    description:
      "A Fast-paced arcade game. Shoot, catch and re-shoot only 2 bullets to get as many kills as possible.",
    stack: "Unity",
    images: ["./projects/2bulletsheader.png"],
    isLs: true,

    actions: [
      {
        image: "desktop",

        icon: "fas fa-desktop",
        link: "https://adarshverma.itch.io/two-bullets",
      },
    ],
  },
  {
    title: "Chartify",
    description: "Easily create and download customised charts in seconds.",
    stack: "Angular",
    isLs: true,
    images: [
      "./projects/chartify.png",
      "./projects/chartify1.png",
      "./projects/chartify2.png",
      "./projects/chartify3.png",
    ],
    actions: [
      {
        image: "browser",
        icon: "fas fa-external-link-square-alt",
        link: "https://chartify.ml",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/Chartify",
      },
    ],
  },
  {
    title: "Gym Admin Panel",
    description: "Complete Gym and Ecommerce Site Management (Frontend)",
    stack: "Angular",
    isLs: true,
    images: [
      "./projects/h2oa1.webp",
      "./projects/h2oa2.webp",
      "./projects/h2oa3.webp",
      "./projects/h2oa4.webp",
      "./projects/h2oa5.webp",
      "./projects/h2oa6.webp",
      "./projects/h2oa7.webp",
      "./projects/h2oa8.webp",
    ],
    actions: [
      // {
      //   image: "browser",
      //   icon: "fas fa-external-link-square-alt",
      //   link: "https://chartify.ml",
      // },
      // {
      //   image: "github",
      //   icon: "fab fa-github",
      //   link: "https://github.com/Adarsh0603/Chartify",
      // },
    ],
  },
  {
    title: "Firevotes",
    description:
      "A Realtime Polling App.\
      <br>Conduct online polls and share results easily.",
    stack: "Flutter | Firebase Cloud Firestore",
    images: [
      "./projects/firevotes.png",
      "./projects/firevotes2.png",
      "./projects/firevotes3.png",
      "./projects/firevotes4.png",
    ],
    actions: [
      {
        image: "playstore",
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.firevote",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/Firevote",
      },
    ],
  },
  {
    title: "fireblogs",
    description:
      "A Cloud-based blogging app.\
      <br>Easily create blogs and share with everyone.",
    stack: "Flutter | Firebase REST API",
    images: [
      "./projects/fireblogs.png",
      "./projects/fireblogs2.png",
      "./projects/fireblogs3.png",
    ],
    actions: [
      {
        image: "playstore",
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.fireblogs&hl=en",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/fireblogs",
      },
    ],
  },
  {
    title: "bookjungle",
    description:
      "Search from millions of free and paid books.<br>\
    With various categories and New York Times Bestsellers",
    stack: "Flutter | Google Books API | SQL",
    images: [
      "./projects/bookjungle.png",
      "./projects/bookjungle2.png",
      "./projects/bookjungle3.png",
    ],
    actions: [
      {
        image: "playstore",
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.bookjungle&hl=en",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/bookjungle",
      },
    ],
  },
  {
    title: "Bulk Mailer",
    description:
      "Send bulk mails easily from spreadsheets.<br>\
    Integrated with Google Sheets.",
    stack: "Flutter | Google Sheets API | GCP | Firebase",
    images: [
      "./projects/bulkmailer.png",
      "./projects/bulkmailer2.png",
      "./projects/bulkmailer3.png",
    ],
    actions: [
      {
        image: "playstore",

        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.bulk_mailer&hl=en_IN",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/Bulk-Mailer",
      },
    ],
  },
  {
    title: "CourseCup",
    description:
      "Find a course that suits your needs from over 2100 free courses available on top online course providers Udacity, Coursera and edx .",
    stack: "Flutter | Python | Firebase",
    images: [
      "./projects/coursecup.png",
      "./projects/coursecup2.png",
      "./projects/coursecup3.png",
    ],
    actions: [
      {
        image: "playstore",
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.courselister&hl=en",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/CourseCup",
      },
    ],
  },

  {
    title: "notebee",
    description: "A simple note taking app.<br>\
      With label sorting.",
    stack: "Flutter | SQL",
    images: [
      "./projects/notebee.png",
      "./projects/notebee2.png",
      "./projects/notebee3.png",
    ],
    actions: [
      {
        image: "playstore",

        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.notebee&hl=en",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/notebee",
      },
    ],
  },

  {
    title: "Dictionary",
    description:
      "Simple, sleek dictionary app.\
      Get every definition of a word with usage examples.",
    stack: "Flutter | Owlbot API",
    images: [
      "./projects/dictionary.png",
      "./projects/dictionary2.png",
      "./projects/dictionary.png",
    ],
    actions: [
      {
        image: "playstore",

        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.dictionaryapp&hl=en",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/DictionaryApp",
      },
    ],
  },
  {
    title: "NAD Toolkit",
    description:
      "A toolkit for solving  root finding problems in Numerical Analysis and Design.",
    stack: "Android Native | Java",
    images: [
      "./projects/nad.png",
      "./projects/nad2.png",
      "./projects/nad3.png",
    ],
    actions: [
      {
        image: "playstore",

        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.nadtoolkit&hl=en",
      },
      {
        image: "github",
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/nadtoolkit",
      },
    ],
  },
  {
    title: "Number Converter",
    description: "An app for number system conversion.",
    stack: "Android Native | Java",
    images: ["./projects/nc.png", "./projects/nc2.png", "./projects/nc3.png"],
    actions: [
      {
        image: "drive",
        icon: "fab fa-google-drive",
        link:
          "https://drive.google.com/file/d/1TDKfMqwxWHV_qr1lZVjpGXyfhbydP_di/view",
      },
    ],
  },
  {
    title: "WeightsApp",
    description: "With 13 weight conversions.",
    stack: "Android Native | Java",
    images: ["./projects/wa.png"],
    actions: [
      {
        image: "playstore",
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.refractionstudios.weightconverter&hl=en",
      },
    ],
  },
  {
    title: "Rocks",
    description: "A rock dodging game for android.",
    stack: "Unity",
    images: ["./projects/rocks.jpg"],
    isLs: true,

    actions: [
      {
        image: "playstore",

        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.refractionstudios.rocks&hl=en_IN",
      },
    ],
  },
  {
    title: "Flappy Bird Friends",
    description:
      "Different version of the popular flappy bird game for desktop.<br>With 2 birds mode.",
    stack: "Unity",
    images: ["./projects/flappybird.png"],
    isLs: true,

    actions: [
      {
        image: "desktop",
        icon: "fas fa-desktop",
        link: "https://gamejolt.com/games/flappybird/332714",
      },
    ],
  },
  {
    title: "Jump!2",
    description: "A update to an arcade game for desktop. With 2 Players mode",
    stack: "Unity",
    images: ["./projects/jump2.png"],
    isLs: true,

    actions: [
      {
        image: "desktop",

        icon: "fas fa-desktop",
        link: "https://gamejolt.com/games/jump2/325674",
      },
    ],
  },
  {
    title: "PinWars",
    description:
      "A replica of popular mobile game 'aa'.<br> For desktop and android.",
    stack: "Unity",
    images: ["./projects/pinwars.png"],
    isLs: true,

    actions: [
      {
        image: "desktop",

        icon: "fas fa-desktop",
        link: "https://gamejolt.com/games/pinwars/334522",
      },
      {
        image: "phone",
        icon: "fas fa-mobile",
        link:
          "https://drive.google.com/file/d/1YBrqvnEUxPvDZqMOt6vu4zscPSxjCZ67/view?usp=sharing",
      },
    ],
  },
];

export default apps;
