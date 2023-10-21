import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  SiNextdotjs,
  SiFramer,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';
import { SiAdobexd, SiAdobephotoshop } from 'react-icons/si';


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <span key="html"><FaHtml5 /></span>,
          <span key="html"><FaCss3 /></span>,
          <span key="html"><FaJs /></span>,
          <span key="html"><FaReact /></span>,
          <span key="html"><SiNextdotjs /></span>,
          <span key="html"><SiFramer /></span>,
          <span key="html"><FaWordpress /></span>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
