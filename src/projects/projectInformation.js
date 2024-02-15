const allProjects = [
    {
          id: 1,
          name: "Altın Terazi",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
          category: ""
    },
    {
          id: 2,
          name: "Sinop Residence",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
          category: ""
    },
    {
          id: 3,
          name: "Başbereket Villa",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
          category: ""
    },
    {
      id: 4,
      name: "Angora Villa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
      category: ""
},
    {
          id: 5,
          name: 'guneriApartment',
          description: 'guneriApartmentDescription',
          category: "",
          
    },
    {
          id: 6,
          name: 'guneriVilla',
          description: 'guneriVillaDescription',
          category: "",

    },
    {
          id: 7,
          name: 'zekeriyakoyVilla',
          description: 'zekeriyakoyVillaDescription',
          category: "",
    },
    {
          id: 8,
          name: 'konutkentFlat',
          description: 'konutkentFlatDescription',
          category: "",
    },
    {
          id: 9,
          name: 'tinyHouseSapanca',
          description: 'tinyHouseSapancaDescription',
          category: "",
    },
    {
          id: 10,
          name: 'hobbyGardenAyas',
          description: 'hobbyGardenAyasDescription',
          category: "",
    },
    {
          id: 11,
          name: 'tinyHouseBolu',
          description: 'tinyHouseBoluDescription',
          category: "",
    },
    {
          id: 12,
          name: 'bodrumOffice',
          description: 'bodrumOfficeDescription',
          category: "",
    },
    {
          id: 13,
          name: 'aspatHousingProject',
          description: 'aspatHousingProjectDescription',
          category: "",
    },
]


const constructionProjects = allProjects.filter(project => project.category === "construction")
const renovationProjects = allProjects.filter(project => project.category === "renovation")
const designProjects = allProjects.filter(project => project.category === "design")


export { constructionProjects, renovationProjects, designProjects, allProjects } 



          