import React, { Component } from 'react'

import img1 from './Photos/img1.jpg'
import img2 from './Photos/img2.jpg'
import img3 from './Photos/img3.jpg'
import img4 from './Photos/img4.jpg'
import img5 from './Photos/img5.jpg'
import img6 from './Photos/img6.jpg'
import img7 from './Photos/img7.jpg'
import img8 from './Photos/img8.jpg'
import img9 from './Photos/img9.jpg'
import slide1 from './SlideImages/Slide1.jpg'
import slide2 from './SlideImages/Slide2.jpg'



const header = {
  // all the properties are optional - can be left empty or deleted
  website: 'www.bokehbox.us',
  title: 'photolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Garrett Weston',
  role: 'Photographer',
  description:
    'I love to explore the intersection of new media, classical techniques, and see how people respond to them. In some ways, this could be editing modern digital photos to have a vintage feel. Or taking 6x6 film photographs and currating them in a custom digital repository. In this case, a simple photographic portfolio of some of my work.',
  resume: 'NaNbREAd',
  social: {
    linkedin: 'https://linkedin.com/in/garrettweston',
    github: 'https://github.com/gkweston',
  },
}

const gallery = [
  // if there are no gallery, gallery section won't show up
  // make a path for each, have the function render that

  { 
    imgImport: img1, 
  },
  { 
    imgImport: img2, 
  },
  {
    imgImport: img3,
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
  {
    imgImport: img7,
  },
  {
    imgImport: img8,
  },
  {
    imgImport: img9,
  },
]

const slides = [
  // rendered by visualBlogs.js in the section of the website
  slide1,
  slide2,
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gkweston@tamu.edu',
}

export { header, about, gallery, slides, contact }
