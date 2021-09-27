import React, { Component } from 'react'
import imgTest from './Photos/img1.jpeg'
import img1 from './SamplePhotolios/SamplePhoto_1.jpeg'
import img2 from './SamplePhotolios/SamplePhoto_2.jpeg'
import img3 from './SamplePhotolios/SamplePhoto_3.jpeg'
import img4 from './SamplePhotolios/SamplePhoto_4.jpeg'
import img5 from './SamplePhotolios/SamplePhoto_5.jpeg'
import img6 from './SamplePhotolios/SamplePhoto_6.jpeg'
import PdfResume from './Documents/GarrettWestonResume.pdf'


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'www.photolio.com',
  title: 'photolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Garrett Weston',
  role: 'Photographer',
  description:
    'I love to explore the intersection of new media, classical techniques, and see how people respond to them. In some ways, this could be editing modern digital photos to have a vintage feel. Or taking 6mm film photographs and currating them in a custom digital repository. In this case, a simple photographic portfolio of some of my work.',
  resume: 'NaNbREAd',
  social: {
    linkedin: 'https://linkedin.com/in/garrettweston',
    github: 'https://github.com/gkweston',
  },
}

const projects = [
  // if there are no projects, Projects section won't show up

  // make a path for each, have the function render that

  {
    imgImport: img1,
    /*
    description:
      'Description for tile 1 here...',
    stack: ['stack1', 'stack2', 'stack3'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    */
  },
  {
    imgImport: img2,
    /*
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    */
  },
  {
    imgImport: img3,
    /*
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    */
  },
  {
    imgImport: img4,
  },
  {
    imgImport: img5,
  },
  {
    imgImport: img6,
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
