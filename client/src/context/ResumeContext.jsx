import { createContext, useReducer } from 'react';
import { resumeReducers } from '../reducers/resumeReducers';

const INITIAL_STATE = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    address: '',
    links: [
      {
        type: '',
        url: '',
      },
    ],
  },

  education: [
    {
      institute: '',
      degree: '',
      location: '',
      field: '',
      startYear: '',
      endYear: '',
      score: {
        type: '',
        value: '',
      },
    },
  ],

  expereince: [
    {
      company: '',
      title: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    },
  ],

  skills: {
    programmingLanguages: [],
    librariesOrFrameworks: [],
    tools: [],
    databases: [],
  },

  projects: [
    {
      title: '',
      technologiesUsed: [],
      githubURL: '',
      liveDemoURL: '',
      youtubeURL: '',
      description: '',
    },
  ],

  certifications: [
    {
      title: '',
      link: '',
      issuedBy: '',
    },
  ],
  achievements: [],
};

export const ResumeContext = createContext();

// eslint-disable-next-line react/prop-types
const ResumeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducers, INITIAL_STATE);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
