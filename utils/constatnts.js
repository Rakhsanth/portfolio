import { PlayArrow } from '@material-ui/icons';

export const primaryColor = '#353A41';
export const secondaryColor = '#A43735';
export const lightTextColor = '#8a8d90';
export const fullStarColor = '#ffc700';
export const emptySTarColor = '#171c23';
export const projects = [
    {
        image: '/img/projects/natours.png',
        title: 'Natours',
        description:
            'A responsive landing page for a tour/itenarary discovery website',
        link: 'https://rakhsanth.github.io/Natours/',
        githubLink:
            'https://github.com/Rakhsanth/Rakhsanth.github.io/tree/master/Natours',
        projectFeatures: [
            'Simple single landing page with pure HTML and CSS',
            'No frameworks like bootstrap used for styling',
            'Responsive with most device sizes',
        ],
        learnings: [
            'HTML',
            'CSS - Basics',
            'CSS - Animations',
            'CSS precompiler - SASS / SCSS',
            'CSS - media queries',
        ],
        techStacks: ['HTML 5', 'CSS 3', 'Vannila JS', 'SASS / SCSS'],
    },
    {
        image: '/img/projects/techNetwork.png',
        title: 'Tech Network',
        description:
            'A fullstack MERN stack web app of a very basic social network',
        link: 'https://simple-social-network-288007.el.r.appspot.com/',
        githubLink: 'https://github.com/Rakhsanth/simple-social-network',
        projectFeatures: [
            'A social network app with basic functionality',
            'Can connect with people',
            'Can like, comment and share posts',
            'JWT token based authentication',
            'Implemented payment gateway to accept donations',
        ],
        learnings: [
            'To use React framework / library',
            'NodeJS and ExpressJS for backend',
            'MongoDB as database with mongoose ODM',
            'Redux for global state management',
        ],
        techStacks: [
            'React',
            'Redux',
            'Express',
            'MongoDb using mongooseJS',
            'Google Cloud (Storage, deployment) Basics',
        ],
    },
    {
        image: '/img/projects/homeRental.png',
        title: 'Home Rental',
        link: 'https://rakhsanth.github.io/Home_Rentals/',
        githubLink:
            'https://github.com/Rakhsanth/Rakhsanth.github.io/tree/master/Home_Rentals',
        description: 'A responsive landing page for a home rantal website',
        projectFeatures: [
            'A single landing page with pure HTML, CSS and Vannila JS',
            'NO CSS or JS frameworks involved',
            'Custom animations',
            'Responsive for most of the device sizes',
        ],
        learnings: [
            'CSS - Flexbox',
            'CSS - Grid',
            'CSS - Animations with keyframes',
        ],
        techStacks: ['HTML 5', 'CSS 3', 'Vannila JS', 'SASS / SCSS'],
    },
    {
        image: '/img/projects/mockdemy.png',
        title: 'Mockdemy',
        description: 'A responsive MERN stack E-learning app similar to Udemy',
        link: 'https://mockdemy.vercel.app/',
        githubLink: 'https://github.com/Rakhsanth/bootcamp-ecommerce-app',
        githubLink2: 'https://github.com/Rakhsanth/udemyMockBackend',
        projectFeatures: [
            'An E-learning platform similar to udemy (most of the design is cloned from udemy)',
            'JWT token based authentication',
            'FOrgot password functionality with temporary password sent to email',
            'Can enroll to course if logged in as user',
            'Can create courses if logged in as publisher',
            '90% of functionality of udemy is being cloned',
            'Geo location to search courses found based on location of the logged in user',
            'Dynamic location marking on map generated with D3 JS based on the nearest courses found',
            'No CSS frameworks, 100% pure CSS to achieve the design',
            'Payment gateway for buying courses during checkout of shopping cart',
        ],
        learnings: [
            'To use React framework / library',
            'To upload and retrive assets to Google CLoud Platform storage bucket',
            'NodeJS and ExpressJS for backend',
            'MongoDB as database with mongoose ODM',
            'Redux for global state management',
            'D3 JS for marking geo-location data',
        ],
        techStacks: [
            'Pure frameworkless CSS',
            'React',
            'Redux',
            'Express',
            'MongoDb using mongooseJS',
            'Google Cloud',
            'D3 JS',
        ],
    },
    {
        image: '/img/projects/tetrisClone.png',
        title: 'Basic Tetris',
        description:
            'A simple tetris game clone to learn Javascript basics and syntax',
        link: 'https://rakhsanth.github.io/basic_tetris_clone/',
        githubLink:
            'https://github.com/Rakhsanth/Rakhsanth.github.io/tree/master/basic_tetris_clone',
        projectFeatures: [
            'Basic tetris game',
            'Basic play, pause, resume and playagain functionality',
        ],
        learnings: [
            'DOM with vannila JS',
            'JS timing functions',
            'JS event listeners',
            'Higher order array methods',
            'ES-6 syntax',
        ],
        techStacks: ['Vannila Javascript'],
    },
    {
        image: '/img/projects/notesPro.png',
        title: 'Notes Pro',
        description: 'A simple responsive fullstack CRUD app using Next JS',
        link: 'https://notes-pro.vercel.app/',
        githubLink:
            'https://github.com/Rakhsanth/notes-pro-with-nextjs-front-end',
        githubLink2:
            'https://github.com/Rakhsanth/notes-pro-with-nextjs-back-end',
        projectFeatures: [
            'Basic CRUD app to create, edit and delete notes',
            'Server side rendering of page, JWT token based authentication',
        ],
        learnings: [
            'Server side rendering with NextJS',
            'Responsive material design based framework (Material UI)',
        ],
        techStacks: [
            'Next JS',
            'Material UI',
            'Express',
            'MongoDb using mongooseJS',
        ],
    },
];
export const skills = [
    {
        skill: 'HTML 5',
        description:
            'Familiar with creating layouts of pages provided the design(in the form of design files like figma or adobe tools etc)',
        stars: 4,
    },
    {
        skill: 'CSS 3',
        description:
            'Profecient in providing modern design using latest CSS features(flexbox, grid, keyframe animations). Familiar with various CSS frameworks(Bootstrap, Semantic UI and Material UI etc) and customizing on top of them',
        stars: 3,
    },
    {
        skill: 'Javascript',
        description:
            'Familiar with DOM, basics of vannila Javascript(timing, event listeners, ES-6 fundamentals etc). Flexible to learn any upcoming Javascript frameworks and extending my skills further beyond my current limits and dive into open sourcing also.',
        stars: 3,
    },
    {
        skill: 'React JS',
        description:
            'Familiar with basic React framework for creating single page web applications and looking forward to dive deeper and get better at it. Have done hand full of projects with React to get confident in using it.',
        stars: 3,
    },
    {
        skill: 'Redux',
        description:
            'Almost in all my projects involving React, have used Redux for global state management of the application so, I am pretty confident and familiar with it.',
        stars: 4,
    },
    {
        skill: 'NodeJs',
        description:
            'NodeJS is the only backend technology I have worked on to provide backend functionalities for my web apps and with my good understanding of Javascript I belive I can get almost any business logic implemented with it. FLexible to learn any other modern backend technology(Like Deno etc).',
        stars: 3,
    },
    {
        skill: 'Sass / Scss',
        description:
            'Familiar with these CSS pre-processors and have implemented in most of my frontend design part. I feel pretty confident and simpler to write CSS using these pre-processors as it makes the process easier.',
        stars: 3,
    },
    {
        skill: 'Python 3',
        description:
            'Have learned and experienced the capability of python in machine learning(especially in computer vision as part of my final year project in college). Do not have much exposure but if the requirement of amy future projects needs to be implemented with Python, willing to see what it takes to be a python developer.',
        stars: 1.5,
    },
    {
        skill: 'Java',
        description:
            'The good old JAVA that anyone can say "Hey I kow JAVA". Familiar with JAVA and currently working on a JAVA based tool where the syntax would be a little bit different. Except for syntax and my current usage I can confidently say I can be trusted to get the job done using JAVA provided a little self learning time along with the work.',
        stars: 2.5,
    },
    {
        skill: 'C++',
        description:
            'Here comes the all time fastest language in the history of programming and also my all time favorite as game industry is powered by this language(Who does not like playin games?). Familiar with STL and other data structure. I still used to practice problem solving with C++ as it has a lot of template which can help in this aspect.',
        stars: 3.5,
    },
    {
        skill: 'Mongo DB',
        description:
            'One of the most popular No-SQL database. In almost all of my fullstack projects, I have used MongoDB as database with Mongoose ODM.',
        stars: 3,
    },
    {
        skill: 'Next JS',
        description:
            'Recently got to know about Server Side Rendered(SSR) web applications which has a lot of advantages over Client Side Rendered(CSR) apps like React or Angular. So tried in getting my hand dirty with this popular SSR framework which uses React as the scripting language.',
        stars: 3,
    },
    {
        skill: 'Git',
        description:
            'Familiar with basic git command and have used it for all of my projects to keep pushing changes and for continous deployment into hosting services like Heroku and Vercel etc.',
        stars: 3,
    },
    {
        skill: 'Anime JS',
        description:
            'Have tried this animation engine to put its capabilities into the test for achieving cool animations. This engine is used in animating certain parts of this current portfolio you are looking at.',
        stars: 2,
    },
    {
        skill: 'D3 JS',
        description:
            'Got to know about this library recently(Used to draw charts, graphs, maps and almost anything driven by data to be shown to users) and not much familiar and willing to explore more. Leanerd as part of one of my most complicated personal web application where lots of dynamic data driven UI markings are needed.',
        stars: 1,
    },
    {
        skill: 'React Native',
        description:
            'Want and willing to explore the area of cross-platform native application building frameworks. Chose React Native as I am already familiar with React so that the learning curve would be less.',
        stars: 0,
    },
    {
        skill: 'Tensorflow JS',
        description:
            'While exploring Python got to know about this framework as part of my journey. As this is a powerful open source machine learning and deep learning framwork this grabbed my interest and would like to learn it at some stage in my career.',
        stars: 0,
    },
    {
        skill: 'Tensorflow.PY',
        description:
            'As this was first introduced for Python, if there comes a reason to work in python looking forward to learn as AI amd ML is anyway going drive future web and other applications.',
        stars: 0,
    },
];
