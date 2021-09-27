import React, { Component } from 'react'
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
  {
    name: 'Tile 1',
    description:
      'Description for tile 1 here...',
    stack: ['stack1', 'stack2', 'stack3'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  'H'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
