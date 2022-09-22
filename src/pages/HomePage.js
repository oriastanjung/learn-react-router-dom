import React, { Component } from 'react'
import AboutPage from './AboutPage'
import AwardsPage from './AwardsPage'
import EducationPage from './EducationPage'
import ExperiencePage from './ExperiencePage'
import InterestPage from './InterestPage'
import SkillsPage from './SkillsPage'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <AboutPage />
        <ExperiencePage />
        <EducationPage />
        <SkillsPage />
        <InterestPage />
        <AwardsPage />
      </>
    )
  }
}
