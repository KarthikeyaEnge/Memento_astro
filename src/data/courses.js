const data = {
  courses: [
    {
      name: "Apollo Graph Developer - Associate ",
      img: "https://media.licdn.com/dms/image/C560BAQFQY9ETMnWBGQ/company-logo_200_200/0/1646068661294?e=1702512000&v=beta&t=iFEu-ILk4Km5dNgWM8eWZikt6RIDZI_FCZuE3LU3rlk",
      course_img:
        "https://raw.githubusercontent.com/KarthikeyaEnge/KarthikeyaEnge/main/graphql.png",
      iby: "Apollo GraphQL",
      id: "2023",
      credentials:
        "https://www.apollographql.com/tutorials/certifications/9ddd9eb4-6938-4e32-ab1e-50beaebad872",
      desc: "Get to know various advantages of GraphQL and how can it be helpful for various developer working on multiple datasources, data caching, mutations etc. Learn the amazing Apollo client and server tools to manage your app with GraphQL.",
      course_link: "https://www.apollographql.com/tutorials/",
      skills: ["GraphQL", "Apollo GraphQL", "RestAPIs"],
    },

    {
      name: "Principals of UX/UI Design",
      img: "https://media.licdn.com/dms/image/C4E0BAQFdNatYGiBelg/company-logo_200_200/0/1636138753911?e=1700697600&v=beta&t=tdubJehhjtCbzaICaUOIqOe2sbECND7m6raJg8DBVuM",
      course_img:
        "https://raw.githubusercontent.com/KarthikeyaEnge/Memento/main/src/assets/Meta-Logo.png",
      iby: "Meta",
      id: "2023",
      desc: "This is a beginner course for learners who would like to prepare themselves for a career in UX/UI development.",
      course_link: "https://www.coursera.org/learn/principles-of-ux-ui-design",
      credentials:
        "https://www.coursera.org/account/accomplishments/certificate/HBJKQZPUEJSH",
      skills: ["Web Design", "Front-End Development", "UI/UX", "Accessibility"],
    },
    {
      name: "MongoDB Node.js Developer Path",
      img: "https://media.licdn.com/dms/image/C4D0BAQFKe8PwqzyHyA/company-logo_200_200/0/1635171226731?e=1700697600&v=beta&t=0sxKc7Z_2HkaJu2VCavOvZR2CohQCLQ2mtBkuMt0i1s",
      course_img:
        "https://raw.githubusercontent.com/KarthikeyaEnge/Memento/main/src/assets/mongodb.png",
      iby: "MongoDB",
      id: "2023",
      desc: "MongoDb Node.js Developer Path course helps developers to learn MongoDB Node.js Drivers and also teaches various topics like Data Modeling, Indexing, Document Model etc.",
      course_link:
        "https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path",
      credentials:
        "https://www.credly.com/badges/24357bcf-9130-4f62-a0e2-c7c6595912ae/linked_in_profile",
      skills: [
        "MongoDB",
        "Node.js",
        "CRUD",
        "Drivers",
        "Data Modeling",
        "Indexes",
        "MongoDB Atlas",
      ],
    },
    {
      name: "Foundations of Git ",
      img: "https://media.licdn.com/dms/image/D560BAQH7kMFduqTX1Q/company-logo_200_200/0/1691785849994?e=1701302400&v=beta&t=nVLqL4Is-cb5TqfrzKCa46iCA9iHcLaKgyKMUVhBgEk",
      course_img:
        "https://media.licdn.com/dms/image/D5622AQFrEPgoyc_ffw/feedshare-shrink_1280/0/1692960574953?e=1695859200&v=beta&t=-N9YLZhobFz9RqnLU1z-AQrTAOvWm9SKjiz2Hh0Df74",
      iby: "GitKraken",
      id: "2023",
      credentials: "https://learn.gitkraken.com/certificates/y7wvgzpw5s",
      desc: "Eleveate your Git knowledge through various video classes and examples you learn various git features(i.e squash,stash,cherry pick, worktrees etc.) and tools like Gitkraken client",
      course_link: "https://learn.gitkraken.com/courses/git-foundations",
      skills: ["Git"],
    },
    {
      name: "Build and Secure Networks in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      course_img:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/gcp.png",
      iby: "Google Cloud",
      id: "2021",
      desc: "Learn Building and Securing Networks in Google Cloud",
      course_link: "https://www.cloudskillsboost.google/quests/128",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1439099?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Create and Manage Cloud Resources",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      course_img:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/gcp.png",
      iby: "Google Cloud",
      id: "2021",
      desc: "Learn creating and Managing Cloud Resources in GCP",
      course_link: "https://www.cloudskillsboost.google/quests/120",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1294006?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Deploy and Manage Cloud Environments with Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      course_img:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/gcp.png",
      iby: "Google Cloud",
      id: "2021",
      desc: "Learn deploying and managing Cloud Environments with Google Cloud",
      course_link: "https://www.cloudskillsboost.google/quests/121",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1433175?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Deploy to Kubernetes in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      course_img:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/gcp.png",
      iby: "Google Cloud",
      id: "2021",
      desc: "Learn how deploy to Kubernetes in Google Cloud ",
      course_link: "https://www.cloudskillsboost.google/quests/116",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1442921?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing", "Kubernetes"],
    },
    {
      name: "Perform Foundational Infrastructure Tasks in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      course_img:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/gcp.png",
      iby: "Google Cloud",
      id: "2021",
      desc: "Learn how to do perform Foundational Infrastructure Tasks in Google Cloud",
      course_link: "https://www.cloudskillsboost.google/quests/118",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1317010?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Set Up and Configure a Cloud Environment in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      course_img:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/gcp.png",
      iby: "Google Cloud",
      id: "2021",
      desc: "Learn how to set Up and Configure a Cloud Environment in Google Cloud",
      course_link: "https://www.cloudskillsboost.google/quests/119",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1378983?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Introduction to Java and Object-Oriented Programming",
      img: "https://www.pinpng.com/pngs/m/554-5544599_university-of-pennsylvania-logo-png-transparent-png.png",
      course_img:
        "https://upload.wikimedia.org/wikipedia/commons/9/92/UPenn_shield_with_banner.svg",
      iby: "University of Pennsylvania",
      id: "2021",
      desc: "This is a begineer course to learn Java ans Oops concepts through various intense programming tests. ",
      course_link:
        "https://www.coursera.org/learn/java-object-oriented-programming",
      credentials:
        "https://coursera.org/share/1b03102019a3a79048c4452f557acefd",
      skills: [
        "Java Tools",
        "Unit Testing",
        "Java Programming",
        "Object-Oriented Programming (OOP)",
        "Java Syntax",
      ],
    },
    {
      name: "Inheritance and Data Structures in Java",
      img: "https://www.pinpng.com/pngs/m/554-5544599_university-of-pennsylvania-logo-png-transparent-png.png",
      course_img:
        "https://upload.wikimedia.org/wikipedia/commons/9/92/UPenn_shield_with_banner.svg",
      iby: "University of Pennsylvania",
      id: "2022",
      desc: "This course digs deep into java and the data structures it provides and various api like collections etc.",
      course_link:
        "https://www.coursera.org/learn/java-inheritance-data-structures",
      credentials:
        "https://coursera.org/share/a749dc16fc6627fab93d79c0b14b2cf4",
      skills: [
        "Debugging",
        "Problem Solving",
        "Java Programming",
        "Data Structure",
        "Inheritance",
      ],
    },
  ],
};

export default data;
