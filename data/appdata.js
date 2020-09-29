const apps = [
  {
    title: "fireblogs",
    description:
      "A Cloud-based blogging app.\
      <br>Easily create blogs and share with everyone.",
    stack: "Flutter | Dart | Firebase REST API",
    images: [
      "./projects/fireblogs.png",
      "./projects/fireblogs2.png",
      "./projects/fireblogs3.png",
    ],
    actions: [
      {
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.fireblogs&hl=en",
      },
      {
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
    stack: "Flutter | Dart | Google Books API | SQL",
    images: [
      "./projects/bookjungle.png",
      "./projects/bookjungle2.png",
      "./projects/bookjungle3.png",
    ],
    actions: [
      {
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.bookjungle&hl=en",
      },
      {
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
    stack: "Flutter | Dart | Google Sheets API | GCP |Firebase",
    images: [
      "./projects/bulkmailer.png",
      "./projects/bulkmailer2.png",
      "./projects/bulkmailer3.png",
    ],
    actions: [
      // {
      //   icon: "fab fa-google-play",
      //   link:
      //     "https://play.google.com/store/apps/details?id=com.adarshverma.bookjungle&hl=en",
      // },
      {
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/Bulk-Mailer",
      },
    ],
  },
  {
    title: "CourseCup",
    description:
      "Find a course that suits your needs from over 2100 free courses available on top online course providers Udacity, Coursera and edx .",
    stack: "Flutter | Dart | Python | Firebase",
    images: [
      "./projects/coursecup.png",
      "./projects/coursecup2.png",
      "./projects/coursecup3.png",
    ],
    actions: [
      {
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.courselister&hl=en",
      },
      {
        icon: "fab fa-github",
        link: "https://github.com/Adarsh0603/CourseCup",
      },
    ],
  },

  {
    title: "notebee",
    description: "A simple note taking app.<br>\
      With label sorting.",
    stack: "Flutter | Dart | SQL",
    images: [
      "./projects/notebee.png",
      "./projects/notebee2.png",
      "./projects/notebee3.png",
    ],
    actions: [
      {
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.notebee&hl=en",
      },
      {
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
    stack: "Flutter | Dart | Owlbot API",
    images: [
      "./projects/dictionary.png",
      "./projects/dictionary2.png",
      "./projects/dictionary.png",
    ],
    actions: [
      {
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.dictionaryapp&hl=en",
      },
      {
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
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.adarshverma.nadtoolkit&hl=en",
      },
      {
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
        icon: "fab fa-google-play",
        link:
          "https://play.google.com/store/apps/details?id=com.refractionstudios.weightconverter&hl=en",
      },
    ],
  },
  {
    title: "Rocks",
    description: "A rock dodging game for android.",
    stack: "Unity | C#",
    images: ["./projects/rocks.jpg"],
    isGame: true,
    actions: [
      {
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
    stack: "Unity | C#",
    images: ["./projects/flappybird.png"],
    isGame: true,
    actions: [
      {
        icon: "fas fa-desktop",
        link: "https://gamejolt.com/games/flappybird/332714",
      },
    ],
  },
  {
    title: "Jump!2",
    description: "A update to an arcade game for desktop. With 2 Players mode",
    stack: "Unity | C#",
    images: ["./projects/jump2.png"],
    isGame: true,
    actions: [
      {
        icon: "fas fa-desktop",
        link: "https://gamejolt.com/games/jump2/325674",
      },
    ],
  },
  {
    title: "PinWars",
    description:
      "A replica of popular mobile game 'aa'.<br> For desktop and android.",
    stack: "Unity | C#",
    images: ["./projects/pinwars.png"],
    isGame: true,
    actions: [
      {
        icon: "fas fa-desktop",
        link: "https://gamejolt.com/games/pinwars/334522",
      },
      {
        icon: "fas fa-mobile",
        link:
          "https://drive.google.com/file/d/1YBrqvnEUxPvDZqMOt6vu4zscPSxjCZ67/view?usp=sharing",
      },
    ],
  },
];

export default apps;
