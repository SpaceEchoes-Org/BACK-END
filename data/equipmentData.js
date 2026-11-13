const equipmentData = [
  // 1. InSight Lander
  {
    name: "InSight Lander",
    slug: "insight-lander",
    type: "Lander",
    celestialBody: "Mars",

    description:
      "NASA's InSight was a robotic lander designed to study the deep interior of Mars and understand how rocky planets form and evolve.",

    purpose:
      "Study the internal structure of Mars, including its crust, mantle, and core, by measuring marsquakes, heat flow, and changes in the planet's rotation.",

    launchDate: "May 5, 2018",
    arrivalDate: "November 26, 2018",
    endDate: "December 15, 2022",

    status: "Mission complete",

    discoveries: [
      "Detected and measured more than 1,300 marsquakes.",
      "Provided evidence about the size and structure of the Martian core.",
      "Detected seismic waves that helped scientists study the planet's interior.",
      "Measured heat flow and provided information about the thermal properties of Mars.",
      "Recorded seismic activity caused by meteorite impacts.",
    ],

    interestingFacts: [
      "InSight stands for Interior Exploration using Seismic Investigations, Geodesy and Heat Transport.",
      "It carried the first seismometer ever placed directly on the surface of another planet.",
      "Its robotic arm placed scientific instruments onto the Martian surface.",
      "The lander operated for more than four years on Mars.",
      "NASA ended the mission after dust accumulation prevented the solar-powered lander from generating enough electricity.",
    ],

    images: [
      {
        url: "/images/insight-lander/insight.jpg",
        caption: "NASA InSight Lander on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/insight/",
      },
      {
        url: "/images/insight-lander/insight (2).jpg",
        caption: "NASA InSight Lander on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/insight/",
      },
      {
        url: "/images/insight-lander/insight (3).jpg",
        caption: "NASA InSight Lander on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/insight/",
      },
    ],

    sources: [
      "https://science.nasa.gov/mission/insight/",
      "https://www.jpl.nasa.gov/missions/insight/",
    ],
  },

  // 2. Mars Pathfinder
  {
    name: "Mars Pathfinder",
    slug: "mars-pathfinder",
    type: "Lander",
    celestialBody: "Mars",

    description:
      "Mars Pathfinder was a NASA mission that successfully demonstrated a new and affordable way to land spacecraft on Mars and deliver a small robotic rover called Sojourner.",

    purpose:
      "Demonstrate a low-cost landing system and investigate the Martian surface, rocks, soil, and atmosphere using the Pathfinder lander and Sojourner rover.",

    launchDate: "December 4, 1996",
    arrivalDate: "July 4, 1997",
    endDate: "September 27, 1997",

    status: "Mission complete",

    discoveries: [
      "Provided important information about the composition of Martian rocks and soil.",
      "Studied the atmosphere and weather conditions on Mars.",
      "Showed that the landing area had a complex geological history.",
      "Demonstrated the use of airbags to safely land a spacecraft on Mars.",
      "Returned thousands of images and scientific measurements.",
    ],

    interestingFacts: [
      "Sojourner was the first successful wheeled rover to operate on another planet.",
      "Sojourner was designed for a seven-day mission but operated for 83 days.",
      "The landing system used airbags to cushion the spacecraft during landing.",
      "The Pathfinder mission helped establish technologies used in later Mars rover missions.",
      "The lander and rover worked together to study the Martian environment.",
    ],

    images: [
      {
        url: "/images/mars-pathfinder/pathfinder.jpg",
        caption: "Mars Pathfinder lander and Sojourner rover",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/mars-pathfinder/",
      },
      {
        url: "/images/mars-pathfinder/pathfinder (2).jpg",
        caption: "Mars Pathfinder lander and Sojourner rover",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/mars-pathfinder/",
      },
      {
        url: "/images/mars-pathfinder/pathfinder (3).jpg",
        caption: "Mars Pathfinder lander and Sojourner rover",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/mars-pathfinder/",
      },
    ],

    sources: [
      "https://science.nasa.gov/mission/mars-pathfinder/",
      "https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner-rover/",
    ],
  },

  // 3. Apollo 11 Lunar Module - Eagle
  {
    name: "Apollo 11 Lunar Module (Eagle)",
    slug: "apollo-11-eagle",
    type: "Lunar Module",
    celestialBody: "Moon",

    description:
      "Eagle was the Apollo 11 Lunar Module that carried astronauts Neil Armstrong and Buzz Aldrin from lunar orbit to the surface of the Moon during the first crewed lunar landing.",

    purpose:
      "Transport astronauts from lunar orbit to the Moon's surface and safely return them to the Command Module after completing lunar surface activities.",

    launchDate: "July 16, 1969",
    arrivalDate: "July 20, 1969",
    endDate: "July 21, 1969",

    status:
      "The descent stage remained at the Apollo 11 landing site on the Moon. The ascent stage carried the astronauts back to lunar orbit.",

    discoveries: [
      "Enabled the first human landing on the Moon.",
      "Supported the collection of lunar rock and soil samples.",
      "Supported deployment of scientific experiments on the lunar surface.",
      "Enabled astronauts to photograph and investigate the lunar environment.",
      "Provided engineering experience for later Apollo lunar landing missions.",
    ],

    interestingFacts: [
      "Eagle landed in the Sea of Tranquility on July 20, 1969.",
      "Neil Armstrong and Buzz Aldrin were the two astronauts who descended to the lunar surface.",
      "Michael Collins remained in lunar orbit aboard the Command Module Columbia.",
      "The famous message 'The Eagle has landed' confirmed the successful landing.",
      "The Lunar Module had separate descent and ascent stages.",
    ],

    images: [
      {
        url: "/images/apollo-11-eagle/Apollo_11.jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (2).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (3).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (4).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (5).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (6).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (7).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (8).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
      {
        url: "/images/apollo-11-eagle/Apollo_11 (9).jpg",
        caption: "Apollo 11 Lunar Module Eagle",
        credit: "NASA",
        sourceUrl:
          "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      },
    ],

    sources: [
      "https://www.nasa.gov/missions/apollo/apollo-11-mission-overview/",
      "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo11info.html",
    ],
  },

  // 4. Lunar Roving Vehicle
  {
    name: "Lunar Roving Vehicle (LRV)",
    slug: "lunar-roving-vehicle",
    type: "Rover",
    celestialBody: "Moon",

    description:
      "The Lunar Roving Vehicle was an electric vehicle used by Apollo astronauts to explore larger areas of the lunar surface and transport scientific equipment and lunar samples.",

    purpose:
      "Allow astronauts to travel farther from the Lunar Module, explore lunar terrain, carry scientific instruments, and collect more samples.",

    launchDate:
      "Apollo 15: July 26, 1971; Apollo 16: April 16, 1972; Apollo 17: December 7, 1972",

    arrivalDate: "First lunar drive: July 31, 1971, during Apollo 15",

    endDate: "",

    status:
      "Three Lunar Roving Vehicles were used during Apollo 15, Apollo 16, and Apollo 17. They were left on the Moon after their missions.",

    discoveries: [
      "Enabled astronauts to collect more lunar rock and soil samples.",
      "Apollo 15 rover traverse distance: approximately 27.8 km.",
      "Apollo 16 rover traverse distance: approximately 26.7 km.",
      "Apollo 17 rover traverse distance: approximately 35.9 km.",
      "Helped astronauts investigate geological features across a wider area of the Moon.",
    ],

    interestingFacts: [
      "The Lunar Roving Vehicle was powered by electricity.",
      "It had four independently driven wheels.",
      "It could carry two astronauts and scientific equipment.",
      "Its wheels were specially designed for the lunar surface.",
      "Three rovers were driven on the Moon during Apollo 15, 16, and 17.",
    ],

    images: [
      {
        url: "/images/lunar-roving-vehicle/Lunar_Roving.jpg",
        caption: "Apollo Lunar Roving Vehicle on the Moon",
        credit: "NASA",
        sourceUrl:
          "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      },
      {
        url: "/images/lunar-roving-vehicle/Lunar_Roving (2).jpg",
        caption: "Apollo Lunar Roving Vehicle on the Moon",
        credit: "NASA",
        sourceUrl:
          "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      },
      {
        url: "/images/lunar-roving-vehicle/Lunar_Roving (3).jpg",
        caption: "Apollo Lunar Roving Vehicle on the Moon",
        credit: "NASA",
        sourceUrl:
          "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      },
      {
        url: "/images/lunar-roving-vehicle/Lunar_Roving (4).jpg",
        caption: "Apollo Lunar Roving Vehicle on the Moon",
        credit: "NASA",
        sourceUrl:
          "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      },
      {
        url: "/images/lunar-roving-vehicle/Lunar_Roving (5).jpg",
        caption: "Apollo Lunar Roving Vehicle on the Moon",
        credit: "NASA",
        sourceUrl:
          "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      },
    ],

    sources: [
      "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo15info.html",
      "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo16info.html",
      "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo17info.html",
    ],
  },

  // 5. Apollo 15 ALSEP Scientific Packages
  {
    name: "Apollo 15 ALSEP Scientific Packages",
    slug: "apollo-15-alsep",
    type: "Scientific Experiment Package",
    celestialBody: "Moon",

    description:
      "The Apollo 15 Apollo Lunar Surface Experiments Package (ALSEP) was a collection of scientific instruments deployed by astronauts on the Moon to study its physical properties and environment.",

    purpose:
      "Perform long-term scientific measurements on the lunar surface, including seismic activity, magnetic fields, solar wind, heat flow, and charged particles.",

    launchDate: "July 26, 1971",
    arrivalDate: "July 31, 1971",
    endDate: "September 30, 1977",

    status:
      "The ALSEP instruments transmitted scientific data until NASA terminated the experiment operations on September 30, 1977.",

    discoveries: [
      "Collected seismic measurements to help scientists study the Moon's internal structure.",
      "Measured the magnetic field at the Apollo 15 landing site.",
      "Studied solar wind particles reaching the lunar surface.",
      "Collected heat-flow measurements from beneath the lunar surface.",
      "Provided long-term scientific observations of the lunar environment.",
    ],

    interestingFacts: [
      "ALSEP stands for Apollo Lunar Surface Experiments Package.",
      "The package was deployed by Apollo 15 astronauts at the Hadley-Apennine landing site.",
      "It included a central station that supplied power and transmitted data.",
      "The experiments included a passive seismometer and a lunar surface magnetometer.",
      "ALSEP instruments continued transmitting data for several years after the astronauts returned to Earth.",
    ],

    images: [
      {
        url: "/images/apollo-15-aslep/Apollo_15.jpg",
        caption: "Apollo 15 Lunar Surface Experiments Package",
        credit: "NASA",
        sourceUrl:
          "https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3",
      },
      {
        url: "/images/apollo-15-aslep/Apollo_15 (2).jpg",
        caption: "Apollo 15 Lunar Surface Experiments Package",
        credit: "NASA",
        sourceUrl:
          "https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3",
      },
      {
        url: "/images/apollo-15-aslep/Apollo_15 (3).jpg",
        caption: "Apollo 15 Lunar Surface Experiments Package",
        credit: "NASA",
        sourceUrl:
          "https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3",
      },
      {
        url: "/images/apollo-15-aslep/Apollo_15 (4).jpg",
        caption: "Apollo 15 Lunar Surface Experiments Package",
        credit: "NASA",
        sourceUrl:
          "https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3",
      },
    ],

    sources: [
      "https://pds.nasa.gov/ds-view/pds/viewContext.jsp?identifier=urn%3Anasa%3Apds%3Acontext%3Ainstrument_host%3Aspacecraft.a15a&version=1.3",
      "https://www.nasa.gov/missions/apollo/apollo-15-mission-details/",
      "https://www.nasa.gov/wp-content/uploads/2023/03/sp-4009vol4.pdf",
    ],
  },

  // 6. Spirit Rover
  {
    name: "Spirit Rover (MER-A)",
    slug: "spirit-rover",
    type: "Rover",
    celestialBody: "Mars",

    description:
      "Spirit was one of NASA's twin Mars Exploration Rovers. It explored the Martian surface to investigate rocks, soil, and evidence of ancient water.",

    purpose:
      "Study Martian geology and search for evidence that liquid water once existed on Mars, using cameras and scientific instruments.",

    launchDate: "June 10, 2003",
    arrivalDate: "January 3, 2004",
    endDate: "May 25, 2011",

    status:
      "Mission complete. Spirit stopped communicating with Earth on March 22, 2010. NASA ended attempts to contact the rover on May 25, 2011.",

    discoveries: [
      "Found a nearly pure silica-rich patch called Gertrude Weise.",
      "Discovered evidence of past water activity in the Columbia Hills.",
      "Found sulfur-rich soil that provided clues about water-related processes.",
      "Investigated geological formations at Home Plate.",
      "Helped scientists understand the history of water and volcanic activity on Mars.",
    ],

    interestingFacts: [
      "Spirit was designed to operate for 90 Martian days but lasted more than six years.",
      "It traveled approximately 7.73 km across the Martian surface.",
      "Spirit was the twin rover of Opportunity.",
      "A damaged front wheel helped uncover silica-rich soil.",
      "Dust devils sometimes cleaned its solar panels and increased available power.",
    ],

    images: [
      {
        url: "/images/spirit/spirit.jpg",
        caption: "Spirit rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/mer-spirit/",
      },
      {
        url: "/images/spirit/spirit(1).jpg",
        caption: "Spirit rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/mer-spirit/",
      },
      {
        url: "/images/spirit/spilit&opportunity.jpg",
        caption: "Spirit rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl:
          "https://assets.science.nasa.gov/content/dam/science/missions/mars2020/2026/JPL_DrivingDistanceRecord_GraphicRecreation_August2026_v3.png",
      },
      {
        url: "/images/spirit/spirit&opportunity.jpg",
        caption: "Spirit rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl:
          "https://science.nasa.gov/wp-content/uploads/2024/03/mer-bythenumbers-infographic-feb2019.jpg",
      },
    ],

    sources: [
      "https://science.nasa.gov/mission/mer-spirit/",
      "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
    ],
  },

  // 7. Opportunity Rover
  {
    name: "Opportunity Rover (MER-B)",
    slug: "opportunity-rover",
    type: "Rover",
    celestialBody: "Mars",

    description:
      "Opportunity was NASA's Mars Exploration Rover that investigated the Martian surface for geological evidence of past water and conditions that may once have supported life.",

    purpose:
      "Study rocks and soil on Mars, investigate evidence of past water activity, and explore the geological history of the planet.",

    launchDate: "July 7, 2003",
    arrivalDate: "January 24, 2004",
    endDate: "February 13, 2019",

    status:
      "Mission complete. Opportunity last communicated with Earth on June 10, 2018, during a planet-wide dust storm. NASA declared the mission ended on February 13, 2019.",

    discoveries: [
      "Found hematite-rich spheres nicknamed blueberries.",
      "Discovered gypsum veins that provided evidence of ancient underground water.",
      "Found clay minerals associated with water conditions that were less acidic.",
      "Identified rocks and geological formations shaped by past water activity.",
      "Found Heat Shield Rock, an iron-nickel meteorite on Mars.",
    ],

    interestingFacts: [
      "Opportunity was designed for a 90-Martian-day mission but operated for almost 15 years.",
      "It traveled approximately 45.16 km across Mars.",
      "It was the first rover to travel more than a marathon distance on another world.",
      "Opportunity was the twin of Spirit.",
      "Its final resting place is in Perseverance Valley on the rim of Endeavour Crater.",
    ],

    images: [
      {
        url: "/images/opportunity/opportunity.jpg",
        caption: "Opportunity rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/mer-opportunity/",
      },
      {
        url: "/images/opportunity/opportunity (2).jpg",
        caption: "Opportunity rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl: "https://science.nasa.gov/mission/mer-opportunity/",
      },
      {
        url: "/images/opportunity/spilit&opportunity.jpg",
        caption: "Opportunity rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl:
          "https://assets.science.nasa.gov/content/dam/science/missions/mars2020/2026/JPL_DrivingDistanceRecord_GraphicRecreation_August2026_v3.png",
      },
      {
        url: "/images/opportunity/spirit&opportunity.jpg",
        caption: "Opportunity rover on Mars",
        credit: "NASA/JPL-Caltech",
        sourceUrl:
          "https://science.nasa.gov/wp-content/uploads/2024/03/mer-bythenumbers-infographic-feb2019.jpg",
      },
    ],

    sources: [
      "https://science.nasa.gov/mission/mer-opportunity/",
      "https://science.nasa.gov/missions/mer/six-things-to-know-about-nasas-opportunity-rover/",
    ],
  },
];

module.exports = equipmentData;
