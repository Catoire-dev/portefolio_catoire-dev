type IRoutesInfo = {
    prevText: string;
    text: string;
    nextText: string;
    prevPath: string;
    path: string;
    nextPath: string;
}

const homeInfo = {
    text : "Acceuil",
    path : import.meta.env.VITE_HOME_PATH
  }
  const aboutInfo = {
    text : "Qui suis-je?",
    path : import.meta.env.VITE_ABOUT_PATH
  }
  const projInfo = {
    text : "Mes projets",
    path : import.meta.env.VITE_PROJECTS_PATH
  }
  const studInfo = {
    text : "Mes formations",
    path : import.meta.env.VITE_STUDIES_PATH
  }
  const careerInfo = {
    text : "Mon parcours Professionnel",
    path : import.meta.env.VITE_CAREER_PATH
  }
  const contactInfo = {
    text : "Contactez moi",
    path : import.meta.env.VITE_CONTACT_PATH
  }

  export const routesInfo: {[key: string]: IRoutesInfo} = {
    [homeInfo.path] : {
      prevText: "",
      text: homeInfo.text,
      nextText: aboutInfo.text,
      prevPath: "",
      path: homeInfo.path,
      nextPath: aboutInfo.path
    },

    [aboutInfo.path] : {
      prevText: homeInfo.text,
      text: aboutInfo.text,
      nextText: projInfo.text,
      prevPath: homeInfo.path,
      path: aboutInfo.path,
      nextPath: projInfo.path
    },
    [projInfo.path] : {
      prevText: aboutInfo.text,
      text: projInfo.text,
      nextText: studInfo.text,
      prevPath: aboutInfo.path,
      path: studInfo.path,
      nextPath: studInfo.path,
    },
    [studInfo.path] : {
      prevText: projInfo.text,
      text: studInfo.text,
      nextText: careerInfo.text,
      prevPath: projInfo.path,
      path: studInfo.path,
      nextPath: careerInfo.path,
    },
    [careerInfo.path] : {
      prevText: studInfo.text,
      text: careerInfo.text,
      nextText: contactInfo.text,
      prevPath: studInfo.path,
      path: careerInfo.path,
      nextPath: contactInfo.path,
    },
    [contactInfo.path] : {
      prevText: careerInfo.text,
      text: contactInfo.text,
      nextText: "",
      prevPath: careerInfo.path,
      path: contactInfo.path,
      nextPath: "",
    }
  };