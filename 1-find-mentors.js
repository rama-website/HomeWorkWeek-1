// 1-hyf-program
const possibleMentorsForModule = (moduleName) => {
    const mentorsForModule = mentors.filter((mentor) =>
      mentor.modules.includes(moduleName)
    );
  
    const mentorNames = mentorsForModule.map((mentor) => mentor.name);
  
    return mentorNames;
  };
  
  console.log(possibleMentorsForModule('using-apis'));
  

  const findMentorForModule = (moduleName) => {
    const mentorsForModule = mentors.filter((mentor) =>
      mentor.modules.includes(moduleName)
    );
  
    if (mentorsForModule.length === 0) {
      return 'No mentor available for this module';
    }
  
    const randomIndex = Math.floor(Math.random() * mentorsForModule.length);
    const randomMentor = mentorsForModule[randomIndex];
  
    return randomMentor.name;
  };
  
  console.log(findMentorForModule('javascript'));

  //2-class-list
  const getPeopleOfClass = (className) => {
    const classInfo = classes.find((cls) => cls.title === className);
  
    if (!classInfo) {
      return [];
    }
  
    const studentsInClass = students
      .filter((student) => student.class === className)
      .map((student) => ({ name: student.name, role: 'student' }));
  
    const mentorsInClass = mentors
      .filter((mentor) => mentor.nowTeaching === classInfo.currentModule)
      .map((mentor) => ({ name: mentor.name, role: 'mentor' }));
  
    return [...studentsInClass, ...mentorsInClass];
  };
  
  console.log(getPeopleOfClass('class34'));

  const getActiveClasses = () => {
    const activeClasses = classes.filter((cls) => cls.isActive);
  
    const activeClassPeople = {};
  
    activeClasses.forEach((cls) => {
      const peopleInClass = getPeopleOfClass(cls.title);
      activeClassPeople[cls.title] = peopleInClass;
    });
  
    return activeClassPeople;
  };
  
  console.log(getActiveClasses());
  