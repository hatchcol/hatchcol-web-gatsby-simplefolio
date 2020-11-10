import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'the hatchling collective', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'lifting up neurodiverse folks thru code & tech', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'the hatchling collective',
  name: 'neurodiverse people have superpowers',
  subtitle: 'we want to help them grow thru software and tech',
  cta: 'what even?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/hatchcol/hatchcol-web-gatsby-simplefolio', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anna.me@hey.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/manic_anna',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
