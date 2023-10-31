const data = [
    // {
    //     'num': 1,
    //     'id': 'no-poverty',
    //     'title': 'No Poverty',
    //     'desc': 'The first Sustainable Development Goal (SDG) is to eradicate poverty in all its forms globally. It encompasses ambitious targets to uplift those living in extreme poverty, ensure social protection, and promote equal access to resources, education, and healthcare. By addressing the multidimensional aspects of poverty, this goal strives to empower vulnerable communities, providing them with the means to improve their living standards and opportunities for a better future.',
    //     'color': 'noPoverty'
    // },
    // {
    //     'num': 2,
    //     'id': 'zero-hunger',
    //     'title': 'Zero Hunger',
    //     'desc': 'SDG 2 focuses on ending hunger, achieving food security, improving nutrition, and promoting sustainable agriculture worldwide. It targets ensuring access to safe, nutritious, and sufficient food for all people, especially the vulnerable and marginalized. SDG 2 emphasizes investing in rural infrastructure, agricultural research, and technology to increase productivity.',
    //     'color': 'zeroHunger'
    // },
    // {
    //     'num': 3,
    //     'id': 'good-health',
    //     'title': 'Good Health and Well-being',
    //     'desc': 'SDG 3 focuses on ensuring healthy lives and promoting well-being for all at all ages. It addresses a wide range of health issues, including maternal and child health, infectious diseases, mental health, and non-communicable diseases. SDG 3 aims to reduce child mortality, improve maternal health, combat major diseases like HIV/AIDS, malaria, and tuberculosis, and promote mental health awareness. By strengthening healthcare systems, increasing access to essential medicines, and supporting health education, this goal strives to create a world where everyone can access quality healthcare, leading to longer and healthier lives.',
    //     'color': 'goodHealth'
    // },
    // {
    //     'num': 4,
    //     'id': 'quality-education',
    //     'title': 'Quality Education',
    //     'desc': 'SDG 4 aims to ensure inclusive and equitable quality education for all, promoting lifelong learning opportunities. This goal emphasizes access to early childhood development, quality primary and secondary education, and affordable technical, vocational, and higher education. SDG 4 also focuses on enhancing education quality, ensuring safe and inclusive learning environments, and promoting education for sustainable development and global citizenship.',
    //     'color': 'qualityEducation'
    // },
    // {
    //     'num': 5,
    //     'id': 'gender-equality',
    //     'title': 'Gender Equality',
    //     'desc': 'SDG 5 focuses on achieving gender equality and empowering women and girls worldwide. It aims to eliminate discrimination, violence, and harmful practices against women and girls. SDG 5 advocates for equal opportunities in education and employment, ensuring women\'s participation in decision-making processes. By addressing social norms and legal disparities, this goal seeks to create a society where women and men have equal rights, enabling women\'s empowerment and contributing to sustainable development and social progress.',
    //     'color': 'genderEquality'
    // },
    {
        'num': 1,
        'id': 'clean-water',
        'title': 'Clean Water and Sanitation',
        'img': 'https://cdn.discordapp.com/attachments/818175522840379453/1168631214236774511/E_WEB_06.png',
        'desc': 'SDG 6 focuses on ensuring access to clean water and sanitation for all. It addresses the global water crisis, emphasizing the importance of safe drinking water, sanitation facilities, and hygiene practices. SDG 6 aims to improve water quality, reduce water scarcity, and eliminate open defecation. By investing in water infrastructure, promoting water-use efficiency, and ensuring hygiene education, this goal strives to enhance public health, alleviate poverty, and promote sustainable ecosystems, creating a healthier and more equitable world for present and future generations.',
        'color': 'cleanWater',
    },
    {
        'num': 2,
        'id': 'affordable-energy',
        'title': 'Affordable and Clean Energy',
        'img': 'https://cdn.discordapp.com/attachments/818175522840379453/1168631214685569084/E_WEB_07.png',
        'desc': 'SDG 7 focuses on ensuring access to affordable, reliable, sustainable, and modern energy for all. It emphasizes the need to expand renewable energy sources, enhance energy efficiency, and provide electricity to underserved communities. SDG 7 addresses energy poverty, aiming to foster economic growth, improve healthcare and education, and mitigate climate change. By promoting clean energy technologies and investing in energy infrastructure, this goal strives to create a sustainable energy future, driving innovation and facilitating social development, while also addressing environmental concerns.',
        'color': 'affordableEnergy'
    },
    // {
    //     'num': 8,
    //     'id': 'decent-work',
    //     'title': 'Decent Work and Economic Growth',
    //     'desc': 'SDG 8 focuses on promoting sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all. It addresses issues such as job creation, entrepreneurship, labor rights, and workplace safety. SDG 8 emphasizes policies that encourage economic diversification, innovation, and investment in education and skills training. By fostering decent working conditions and ensuring fair wages, this goal aims to reduce poverty, inequality, and social instability. Achieving SDG 8 is essential for building strong economies, providing livelihood opportunities, and ensuring that economic progress benefits all, leading to stable and prosperous societies.',
    //     'color': 'decentWork'
    // },
    // {
    //     'num': 9,
    //     'id': 'industry-innovation',
    //     'title': 'Industry, Innovation, and Infrastructure',
    //     'desc': 'SDG 9 aims to build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation. It focuses on upgrading transport systems, promoting industry diversification, and encouraging research and development. SDG 9 emphasizes the need for affordable and equitable access to information and communication technologies. By investing in infrastructure, fostering industrialization, and enhancing technological capabilities, this goal drives economic growth, job creation, and sustainable development.',
    //     'color': 'innovationInfrastructure'
    // },
    // {
    //     'num': 10,
    //     'id': 'reduced-inequality',
    //     'title': 'Reduced Inequality',
    //     'desc': 'SDG 10 focuses on reducing inequalities within and among countries. It addresses disparities in income, gender, disability, age, and other factors that lead to social exclusion. SDG 10 advocates for policies that empower and promote the social, economic, and political inclusion of all, regardless of their background. By implementing progressive taxation, ensuring equal opportunities, and promoting social protection policies, this goal aims to create societies where every individual\'s voice is heard, fostering cohesion, stability, and sustainable development.',
    //     'color': 'reducedInequalities'
    // },
    {
        'num': 3,
        'id': 'sustainable-cities',
        'title': 'Sustainable Cities and Communities',
        'img': 'https://cdn.discordapp.com/attachments/818175522840379453/1168631215541202944/E_WEB_11.png',
        'desc': 'SDG 11 focuses on creating sustainable cities and communities. It addresses challenges related to urbanization, including slums, pollution, inadequate housing, and lack of basic services. SDG 11 advocates for inclusive, safe, resilient, and sustainable cities and settlements. By investing in urban planning, affordable housing, public transportation, and green spaces, this goal aims to create cities where people can live in harmony with nature, fostering social cohesion, economic growth, and environmental sustainability.',
        'color': 'sustainableCities'
    },
    {
        'num': 4,
        'id': 'responsible-consumption',
        'title': 'Responsible Consumption and Production',
        'img': 'https://cdn.discordapp.com/attachments/818175522840379453/1168631212546457610/E_WEB_12.png',
        'desc': 'SDG 12 focuses on responsible consumption and production patterns. It addresses the pressing need to minimize waste, promote sustainable practices, and reduce environmental impact. SDG 12 advocates for efficient resource use, waste reduction, recycling, and eco-friendly innovations. By encouraging companies and consumers to adopt sustainable lifestyles, this goal aims to decouple economic growth from environmental degradation, promoting green technologies and sustainable supply chains for a more sustainable future.',
        'color': 'responsibleConsumption'
    },
    {
        'num': 5,
        'id': 'climate-action',
        'title': 'Climate Action',
        'img': 'https://cdn.discordapp.com/attachments/818175522840379453/1168631212940734617/E_WEB_13.png',
        'desc': 'SDG 13 centers on climate action. It addresses the urgent need to combat climate change and its impacts by strengthening resilience, reducing greenhouse gas emissions, and promoting sustainable development practices. SDG 13 calls for international cooperation, policy implementation, and public awareness to mitigate climate-related disasters and protect vulnerable communities. By transitioning to renewable energy, enhancing climate education, and supporting climate adaptation efforts, this goal aims to secure a sustainable future, safeguarding ecosystems and ensuring the well-being of present and future generations.',
        'color': 'climateAction'
    },
    {
        'num': 6,
        'id': 'life-below-water',
        'title': 'Life Below Water',
        'img': 'https://cdn.discordapp.com/attachments/818175522840379453/1168631213465010186/E_WEB_14.png',
        'desc': 'SDG 14 focuses on life below water, emphasizing the conservation and sustainable use of oceans, seas, and marine resources. SDG 14 addresses issues such as overfishing, pollution, and the loss of marine biodiversity. It advocates for marine protected areas, responsible fishing practices, and efforts to reduce plastic waste. By promoting sustainable management of marine ecosystems and supporting marine conservation initiatives, this goal aims to preserve marine life, safeguard coastal communities, and maintain the overall health of the world\'s oceans, critical for global biodiversity and climate regulation.',
        'color': 'lifeBelowWater'
    },
    {
        'num': 7,
        'id': 'life-on-land',
        'title': 'Life On Land',
        'img': 'https://cdn.discordapp.com/attachments/818175522840379453/1168631213880262676/E_WEB_15.png',
        'desc': 'SDG 15 focuses on life on land, emphasizing the conservation, restoration, and sustainable use of terrestrial ecosystems. SDG 15 addresses issues such as deforestation, desertification, and loss of biodiversity. It advocates for the protection of forests, restoration of degraded lands, and efforts to combat poaching and trafficking of protected species. By promoting sustainable land management practices and biodiversity conservation, this goal aims to preserve terrestrial habitats, protect endangered species, and ensure the sustainable use of land resources for present and future generations, crucial for ecosystem services and climate resilience.',
        'color': 'lifeOnLand'
    },
    // {
    //     'num': 16,
    //     'id': 'peace-justice',
    //     'title': 'Peace, Justice and Strong Institutions',
    //     'desc': 'SDG 16 focuses on promoting peace, justice, and strong institutions. SDG 16 aims to reduce violence, corruption, and exploitation globally. It advocates for accountable and transparent institutions, access to justice, and the rule of law. By fostering peaceful and inclusive societies, ensuring access to legal services, and combating organized crime, this goal seeks to build resilient institutions, promote human rights, and create a foundation for sustainable development and social harmony.',
    //     'color': 'peaceJustice'
    // },
    // {
    //     'num': 17,
    //     'id': 'partnerships-goals',
    //     'title': 'Partnerships for the Goals',
    //     'desc': 'SDG 17 emphasizes the importance of global partnerships for sustainable development. SDG 17 underscores the need for collaboration between governments, businesses, and civil society to achieve the other 16 goals. It advocates for international cooperation, technology transfer, and financial support to address shared challenges. By fostering partnerships, encouraging knowledge sharing, and promoting innovative solutions, this goal aims to create a collective framework for achieving sustainable development, ensuring that no one is left behind in the pursuit of a better future.',
    //     'color': 'partnershipsgoals'
    // }
];

export default data;
