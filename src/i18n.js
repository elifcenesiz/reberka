// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: 'Home',
          about: 'About Us', 
      projects: 'Projects',
      references: 'References',
      contact: 'Contact',
      photos: 'Photos',
      corporate: 'Corporate',
      contactCapital: 'CONTACT',
      contactUs: 'CONTACT US',
      getConnected: 'Get connected with us on social networks:',
      name: 'Name',
      yourMessage: 'Your Message',
      send: 'Send',
      construction: 'Construction',
      rennovation: 'Rennovation',
      landscape: 'Landscape',
      realEstate: 'Real Estate',
      design: 'Design',
      project: 'Project',    
      projects: 'Projects',
      workingAreas: 'Work Fields',
      whoWeAre: 'Who We Are',
      whoWeAreText:  'REBERKA Construction has been inspiring people and making their dreams come true since its inception. We are a company that aims to make a difference. We do not leave you alone in our projects that we carry out with great care. We dream together with you and become your solution partner in both turnkey and restoration projects.',
      aboutUs: 'ABOUT US',

      aboutTitle1: 'WHO WE ARE',
      aboutText1: 'REBERKA Construction is a company that has been dedicated to inspiring people and making their dreams come true since its inception. Our goal is to make a difference, and we actively engage with you throughout our projects, providing support from start to finish. Whether it\'s turnkey projects or restoration initiatives, we envision and partner with you to bring your dreams to life.',

      aboutTitle2: 'EVERY STRUCTURE IS A WORK OF ART FOR US',
      aboutText2: 'Reliability, quality, and excellence are our fundamental values as Construction and Architecture Solutions. We prioritize both aesthetics and comfort. REBERKA Construction is a contemporary, innovative, environmentally conscious, dynamic, and customer satisfaction-oriented construction company known for its deep industry experience, expert team, and successful performance in projects.',

      aboutTitle3: 'QUALITY FROM FOUNDATION TO CEILING',
      aboutText3: 'REBERKA Construction aims to leave a commitment to a more livable world for future generations by employing environmentally friendly and sustainable construction methods. The company, based on core values, has gained recognition over the years for its focus on quality and reliability, achieving success in numerous projects and building a broad customer base.',

      aboutTitle4: 'STRONG FOUNDATIONS, SECURE FUTURE',
      aboutText4: 'Our vision is to enhance our cities with modern and sustainable construction projects, focusing on customer satisfaction to become a leading and trustworthy brand in the industry. REBERKA is a construction company that is sensitive, planned, innovative, and solution-oriented.',

      aboutTitle5: 'CREATIVE SOLUTIONS, SOLID FOUNDATIONS',
      aboutText5: 'At the core of our success is surpassing customer expectations by providing excellent service and producing sustainable construction solutions. With its expert and experienced team, REBERKA Construction has established itself as a dynamic, enduring, trustworthy, and visionary company in the industry.',

      aboutTitle6: 'QUALITY CONSTRUCTION, QUALITY LIFE',
      aboutText6: ' REBERKA is a construction company that has made a name for itself in the industry with its dynamic team, planned, quality, contemporary, experienced, women\'s empowerment, and sustainability-oriented approach. It has won customer satisfaction with its alternative solution proposals and has signed many projects.',

      homeAboutText: "REBERKA Construction, from its inception to the present, has been committed to inspiring people and realizing their dreams, with the aim of making a difference. The company emphasizes gender equality, providing privileges to female employees and drawing attention to employment. With completed projects highlighting sustainable design, the company has succeeded in using recyclable materials for construction and furniture production, making a difference in interior design. The projects, contributing to the economy with material choices and extending building usage, have received very positive feedback. Our commitment to environmental considerations, such as insulation and climate conditions, is as significant as our commitment to human needs.",
      homeAboutText2: "We do not leave you alone in our projects that we carry out with great care. In our turnkey and restoration projects, we dream together with you and become your solution partner with our unique perspectives and points of view.",
      corporateText: "REBERKA Construction has successfully made a difference in its projects designed and implemented from the past to the present, both with its experienced expert team and its experience. As a solution partner, it aims to increase the quality and value of the companies it works with and prioritizes people's needs. By preserving historical structures through restoration, it has preserved values and also aimed to bring European architecture to Turkey by following modern architectural and engineering trends. \n The most important principle of our company profile is customer satisfaction. We dream together with you and become your solution partner with our unique perspectives and points of view. We keep our customers in constant communication with our working team and follow the process from start to finish. REBERKA Construction has received great appreciation and strong references over the years due to its strong communication skills and the quality of the work it delivers. Dream, and we will make it happen.",
      qualityCertificatesText: "REBERKA Construction, with its expert team that has received education in Turkey, America, and Europe, has achieved a difference. By closely following and emphasizing architecture and engineering, the company has created its own difference by blending innovative trends and design concepts, making a name for itself with many successful projects.",
      qualityCertificates: 'Quality Certificates',

      phone: 'Phone',   
      email: 'Email',
      address: 'Address',
      addressLine1: 'Mustafa Kemal, 2118. Cd. Maidan Plaza A Blok Kat: 10, No: 109, 06510 Çankaya/Ankara',

      greeting: ' High Quality Construction \n Reliable Solutions',
      greeting1: 'High Quality Construction',
      greeting2: 'Reliable Solutions',
          
      tableName: 'Completed Projects',
      constructionFirm: 'Construction',
      tableHeader2: 'Project Name',
      tableHeader3: 'Location',
      tableHeader1: 'Project Type',

      interiorDesign: 'Interior Design',
      interiorDesignDescription: 'Design is the planning of the interior space in a functional and aesthetic way. We offer bold and functional designs that will make you feel free, less stressed, and happier.',
      constructionDescription: 'Well planned and executed construction projects are the key to success. We build your future on solid foundations and make your dreams come true.',
      investment: 'Investment',
      investmentDescription: 'Investing is a risky and essential part of any business. We are here to be your solution partner in your real estate and investment projects.',
      landscapeDescription: 'The first step to your living space starts from the outside. Therefore, we create ideal residences with designs that bring colors and important elements together in harmony.',
      projects: 'Projects',
      constructionProjects: 'Construction Projects',
      rennovationProjects: 'Rennovation Projects',
      investmentProjects: 'Investment Projects',
      constructionInteriorDesignProjects: 'Construction and Interior Design Projects',
      landscapeProjects: 'Landscape Projects',
      projectContacting: 'Project Contracting',
      applicationDesign: 'Application Design',
      projectManagementConsultancy: 'Project Management and Consultancy',
      projectManagementDescription: 'Project management is the planning, organization, management, and control of the processes required for a project to be successfully completed.',
      rennovationTitle: 'Rennovation and Restoration',
      healthFacilityConstruction: 'Health Facility Construction',
      industrialPlantInfrastructureConstruction: 'Industrial Plant and Infrastructure Construction',
      steelConstruction: 'Steel Construction',
      prefabricatedStructures: 'Prefabricated Structures',
      infrastructureSuperstructureConstructions: 'Infrastructure and Superstructure Constructions',
      housingProjects: 'Housing Projects',
      realEstateInvestments: 'Real Estate Investments',
      publicPrivateInvestments: 'Public and Private Investments',
      angoraVilla : 'Angora Villa',
      guneriApartment: 'Güneri Apartment',
      guneriVilla: 'Güneri Villa - Sinop',
      zekeriyakoyVilla: 'Zekeriyaköy NSG Villa ',
      konutkentFlat: 'Konutkent BK Flat',
      sinopFlat: 'Sinop Karakum NG Flat',
      tinyHouseSapanca: 'Tiny House Sapanca',
      hobbyGardenAyas: 'Hobby Garden Ayaş',
      tinyHouseBolu: 'Tiny House Bolu',
      bodrumOffice: 'Bodrum Akyarlar Ofis Tourism',
      aspatHousingProject: 'Aspat Housing Project Ortakent',
      viewCatalog: 'View Catalog',

      projectTitle1: 'Altinterazi',
      projectText1: 'Our villa project located in the Altinterazi site stands out with its unique design, bold colors, and sustainable materials, despite being a typical villa.',

      projectTitle2: 'Sinop',
      projectText2: 'Our apartment project located in the heart of Sinop impresses with its minimalist design, simple tones, offering both comfort and elegant aesthetics.',

      projectTitle3: 'Başbereket',
      projectText3: 'With its original structure and transparent design, our Villa Project in Başbereket aims for a design in harmony with nature by using large windows and supporting ecological balance.',

      projectTitle4: 'Angora',
      projectText4: 'In our villa project in Angora, we use pastel colors to create a harmonious blend of contrasting tones, making our biophilic design and textured wallpapers stand out as unique and distinctive.',

      success: 'Your message has been sent successfully.',
      error1: 'Please fill in the required fields: \n name, phone, email',
      error2: 'An error occurred while sending your message. Please try again later.',
        },
      },


      tr: {
        translation: {
          home: 'Ana Sayfa',
            about: 'Hakkımızda',
            projects: 'Projeler',
            references: 'Referanslar',
            contact: 'İletişim',
            photos: 'Fotoğraflar',
            corporate: 'Kurumsal',
            contactCapital:'İLETİŞİM',
            contactUs: 'BİZE ULAŞIN',
            getConnected: 'Sosyal Medyada Bizi Takip Edin',
            name: 'İsminiz',
            yourMessage: 'Mesajınız',
            send: 'Gönder',
            construction: 'İnşaat',
            rennovation: 'Restorasyon',
            landscape: 'Peyzaj',
            realEstateInvestments: 'Gayrimenkul Yatırımları',
            design: 'Tasarım',
            project: 'Proje',
            projects: 'Projeler',
            workingAreas: 'Faaliyet Alanlarımız',
            whoWeAre: 'BİZ KİMİZ',
            whoWeAreText: 'REBERKA İnşaat faaliyet göstermeye başladığı zamandan günümüze kadar insanlara ilham vermeyi, '+
            'hayallerini gerçekleştirmeyi ilke edinmiş , amacı fark '+
            'yaratmak olan bir firmadır. Büyük bir titizlikle ' +
            'yürüttüğümüz projelerimizde baştan sona kadar sizi ' +
            'yalnız bırakmıyoruz. Gerek anahtar teslim, gerek ' +
            'restorasyon projelerimizde sizlerle birlikte hayal ' +
            'ediyor, çözüm ortağınız oluyoruz. ',
            aboutUs: 'HAKKIMIZDA',

            aboutTitle1: 'Biz Kimiz',
            aboutText1: 'REBERKA İnşaat faaliyet göstermeye başladığı zamandan günümüze kadar insanlara ilham vermeyi, hayallerini gerçekleştirmeyi ilke edinmiş bir firmadır. Amacı fark yaratmak olan REBERKA İnşaat, büyük bir özveriyle yürüttüğümüz projelerimizde baştan sona kadar sizi yalnız bırakmıyoruz. Gerek anahtar teslim, gerek restorasyon projelerimizde sizlerle birlikte hayal ediyor, çözüm ortağınız oluyoruz.',

            aboutTitle2: 'HER YAPI BİZİM İÇİN SANAT ESERİDİR',
            aboutText2: 'Güvenilirlik, kalite ve mükemmeliyet; İnşaat ve Mimarlık Çözümleri olarak temel değerlerimizdir. Hem estetiğe hem konfora önem veriyoruz. REBERKA İnşaat sektördeki köklü deneyimi, uzman kadrosu ve projelerdeki başarılı performansıyla tanınan çağdaş, yenilikçi, çevreye duyarlı, dinamik ve müşteri memnuniyetine önem veren alternatif çözüm odaklı bir inşaat şirketidir.',

            aboutTitle3: 'TEMELDEN TAVANA KALİTE',
            aboutText3: 'REBERKA İnşaat olarak çevreye duyarlı ve sürdürülebilir inşaat yöntemleri kullanarak, gelecek nesillere daha yaşanabilir bir dünya bırakma taahhüdü vermeyi hedefliyoruz. Şirket etik değerlere dayalı, kaliteli ve güvenilir olmaya verdiği önem sayesinde yıllar içinde birçok başarılı projeye imza atmış ve geniş bir müşteri portföyüne sahip olmuştur.',

            aboutTitle4: 'GÜÇLÜ TEMELLER, GÜVENLİ GELECEK',
            aboutText4: 'Müşteri memnuniyetini esas alarak, modern ve sürdürülebilir inşaat projeleriyle şehirlere değer katmayı ve sektörde öncü ve güvenilir bir marka olmayı temel vizyonumuz olarak belirledik. REBERKA, duyarlı, planlı, yenilikçi ve alternatif çözüm odaklı bir inşaat şirketidir.',

            aboutTitle5: 'YARATICI ÇÖZÜMLER, SAĞLAM TEMELLER',
            aboutText5: 'Başarımızın temelinde, müşterilere mükemmel hizmet sunarak onların beklentilerini aşmak ve sürdürülebilir inşaat çözümleri üretmek bulunmaktadır. Alanında uzman ve deneyimli ekibi sayesinde REBERKA İnşaat, dinamik, kalıcı, güven veren ve vizyon sahibi bir şirket olarak sektörde adını duyurmuştur.',

            aboutTitle6: 'KALİTELİ İNŞAAT, KALİTELİ YAŞAM',
            aboutText6: 'REBERKA, dinamik kadrosuyla planlı, kaliteli, çağdaş, tecrübeli, kadınların desteklenmesine önem veren, sürdürülebilirliği esas alan sektörde adını duyurmuş bir inşaat şirketidir. Yarattığı alternatif çözüm önerileriyle müşteri memnuniyetini kazanmış ve birçok projeye imza atmıştır.',


            homeAboutText: "REBERKA İnşaat faaliyet göstermeye başladığı zamandan günümüze kadar insanlara ilham vermeyi, hayallerini gerçekleştirmeyi ilke edinmiş, amacı fark yaratmak olan bir firmadır. Kadın eşitliğine önem veren, kadın çalışanlara ayrıcalıklar sağlayıp istihdam sağlamaya dikkat çekmiştir. Tamamladığı projelerde sürdürülebilir tasarıma dikkat çeken firma, geri dönüştürülebilir malzemelerden inşaat tamamlamış, bu malzemelerden mobilya üretimine kadar başarıya imza atmış ve iç mimarlık alanında da fark yaratmayı başarmıştır. Ekonomiye katkı sağlayacak malzeme seçimleri ve aynı zamanda bina kullanım süresini uzatma konusunda gerçekleştirdiği projeler ile çok olumlu geri dönüşler almıştır. REBERKA İnşaat olarak ısı yalıtımına ve iklim koşullarına bağlı olarak çevreye verdiğimiz önem, en az insanların ihtiyacına verdiğimiz önem kadar fazladır.",
            homeAboutText2: "Büyük bir titizlikle yürüttüğümüz projelerimizde baştan sona kadar sizi yalnız bırakmıyoruz. A’dan Z'ye olan Anahtar teslim inşaat, restorasyon projelerimizde sizlerle birlikte hayal ediyor, eşi benzeri olmayan perspektif ve bakış açılarımız ile çözüm ortağınız oluyoruz.",
            corporateText: "REBERKA İnşaat, geçmişten günümüze tasarladığı ve uyguladığı projelerde gerek deneyimli uzman kadrosu ile gerek tecrübesiyle fark yaratmayı başarmıştır. Çözüm ortağı olarak beraber çalıştığı firmaların kalitesini ve değerini arttırmayı hedeflemiş ve insanların ihtiyaçlarını esas almıştır. Tarihi yapıları koruyarak restore etmiş böylelikle değerleri korumuş aynı zamanda modern mimarlık ve mühendislik trendlerini takip etmiş ve Avrupa Mimarisini Türkiye’ye taşımayı hedef haline getirmiştir.\n  Şirket profilimizin en önemli ilkesi müşteri memnuniyetidir. Sizlerle birlikte hayal edip, sizi anlayarak hayallerinizi gerçeğe dönüştürüyoruz.Çalışma ekibimiz ile müşterilerimizi sürekli iletişim halinde tutup süreci baştan sona takip ediyoruz ve devamlılık sağlıyoruz. REBERKA İnşaat, bugüne dek tamamladığı tüm projelerde gerek iletişim becerilerinin kuvvetli oluşu gerek teslim ettiği işlerin kalitesi sebebiyle büyük beğeni almış ve güçlü referanslar toplamıştır.  Siz hayal edin, biz gerçekleştirelim.",
            qualityCertificatesText: "Şirket bünyesinde bulunan Türkiye, Amerika ve Avrupa'da eğitim almış, yüksek lisanslarını tamamlamış ve konularında uzman kadrosu ile fark yaratmayı başarmış olan REBERKA İnşaat, mimariyi ve mühendisliği yakından takip ederek ve ön planda tutarak, yenilikçi trendleri ve tasarım anlayışını harmanlayarak kendi farkını yaratmış ve birçok başarılı projeyle adını duyurmuş bir firmadır.",
            qualityCertificates: 'Kalite Belgeleri',

            phone: 'Telefon',
            email: 'E-posta',
            address: 'Adres',
            addressLine1: 'Mustafa Kemal, 2118. Cd. Maidan Plaza A Blok Kat: 10, No: 109, 06510 Çankaya/Ankara',
            greeting: 'Kaliteli İnşaat \n Güvenilir Çözümler',
            greeting1: 'Kaliteli İnşaat',
            greeting2: 'Güvenilir Çözümler',

            tableName: 'Bitirilen İşler Listesi',
            constructionFirm : 'İnşaat Şirketi',
            tableHeader1: 'İhale Türü / Sektör',
            tableHeader2: 'Bitirilen İşin Adı',
            tableHeader3: 'Lokasyon',

            project1Description: 'Bu, projenin bir açıklamasıdır, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            project2Description: 'Bu, projenin bir açıklamasıdır, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            project3Description: 'Bu, projenin bir açıklamasıdır, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            interiorDesign: 'İç Mimarlık',
            interiorDesignDescription: ' Tasarım, iç mekanın işlevsel ve estetik olarak planlanmasıdır. Kendinizi özgür, daha stressiz ve mutlu hissetmenizi sağlayacak cesur ve fonksiyonel tasarımlar sunuyoruz.',
            constructionDescription: 'İyi planlanmış ve uygulanmış inşaat projeleri başarının anahtarıdır. Geleceğinizi sağlam temeller üzerine kuruyor, hayallerinizi gerçeğe dönüştürüyoruz.',
            investment: 'Yatırım',
            investmentDescription: 'Yatırım, her işletmenin riskli ve vazgeçilmez bir parçasıdır. Gayrimenkul ve yatırım projelerinizde çözüm ortağı olmak için buradayız.',
            landscapeDescription: 'Yaşam alanınıza ilk adım dış mekandan başlar. Bu nedenle renkleri ve mühim unsurları bir araya getirerek uyum yaratan tasarımlara ideal meskenler yaratıyoruz.',
            projects: 'Projeler',
            constructionProjects: 'İnşaat Projeleri',
            interiorDesignProjects: 'İç Mimarlık Projeleri',
            rennovationProjects: 'Restorasyon Projeleri',
            constructionInteriorDesignProjects: 'İnşaat ve İç Mimarlık Projeleri',
            landscapeProjects: 'Peyzaj Uygulamaları ve Tasarımları',
            projectContacting: 'Proje-Taahhüt',
            applicationDesign: 'Uygulama Tasarım',
            projectManagementConsultancy: 'Proje Yönetimi ve Danışmanlık Hizmeti',
            projectManagementDescription: 'Proje yönetimi, bir projenin başarılı bir şekilde tamamlanması için gerekli olan süreçlerin planlanması, organizasyonu, yönetimi ve kontrolüdür.',
            rennovationTitle: 'Tadilat ve Restorasyon',
            healthFacilityConstruction: 'Sağlık Tesisleri İnşaat ',
            industrialPlantInfrastructureConstruction: 'Endüstriyel İşletme Tesis Altyapı ve İnşaat ',
            steelConstruction: 'Çelik Konstrüksiyon',
            prefabricatedStructures: 'Prefabrik Yapı ve Hobi Bahçeleri ',
            infrastructureSuperstructureConstructions: 'Altyapı-Üstyapı İnşaatları',
            housingProjects: 'Konut Projeleri',
            realEstateInvestments: 'Gayrimenkul Yatırımları',
            publicPrivateInvestments: 'Kamu-Özel Yatırımları',
            angoraVilla : 'Angora Villa',
            guneriApartment: 'Güneri Apartmanı',
            guneriVilla: 'Güneri Villa - Sinop',
            zekeriyakoyVilla: 'Zekeriyaköy NSG Villa ',
            konutkentFlat: 'Konutkent BK Daire',
            sinopFlat: 'Sinop Karakum NG Daire',
            tinyHouseSapanca: 'Tiny House Sapanca',
            hobbyGardenAyas: 'Hobi Bahçesi Ayaş',
            tinyHouseBolu: 'Tiny House Bolu',
            bodrumOffice: 'Bodrum Akyarlar Ofis Turizm',
            aspatHousingProject: 'Aspat Konut Projesi Ortakent',
            viewCatalog: 'İncele',
            
            projectTitle1: 'Altınterazi',
            projectText1: 'Altınterazi sitesinde bulunan villa projemiz, tipik bir villa olmasına rağmen benzersiz tasarımıyla cesur renklerimiz ve sürdürülebilir malzemelerimizle öne çıkıyor.',

            projectTitle2: 'Sinop',
            projectText2: 'Sinop’un gözbebeğinde bulunan daire projemiz, minimalist tasarımıyla ve sade tonlamalarıyla hem konforlu hem de şık bir tasarım ortaya çıkarıyor.',

            projectTitle3: 'Başbereket',
            projectText3: 'Başbereket’te bulunan Villa Projemiz, özgün yapısı ve saydam tasarımıyla büyük camlar kullanmayı ve mümkün olduğunca ekolojik dengeyi desteklemek adına doğayla iç içe bir tasarım yapmayı hedefledik.',

            projectTitle4: 'Angora',
            projectText4: 'Angora’da bulunan villa projemizde pastel renkler kullanarak kontrast tonları bir araya getirip ahenk yaratıyoruz. Biyofilik tasarım ve dokulu duvar kağıtları tasarımımızı farklı ve özgün kılıyor.',

            success: 'Mesajınız başarıyla gönderildi.',
            error1: 'Lütfen zorunlu alanları doldurunuz: \n isim, telefon, e-posta',
            error2: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.',

            

            

                        

        },
      },  //cyrillic
      rs: {
        translation: {
            home: 'Почетна',
            about: 'О нама',
            references: 'Референце',
            aboutUs: 'О нама',
            projects: 'Пројекти',
            contact: 'Контакт',
            photos: 'Фотографије',
            corporate: 'Корпоративно',
            contactCapital: 'Контакт',
            contactUs: 'Контактирајте нас',
            getConnected: 'Повежите се са нама',
            name: 'Име',
            yourMessage: 'Ваша порука',
            send: 'Пошаљи',
            construction: 'Грађевинарство',
            rennovation: 'Реновирање',
            landscape: 'Пејзаж',
            realEstateInvestments: 'Инвестиције у некретнине',
            design: 'Дизајн',
            projects : 'Пројекти',
            projects: 'Пројекти',
            workingAreas: 'Радне области',
            aboutUs: 'О нама',

            aboutTitle1: 'КТО МЫ',
      aboutText1: 'REBERKA Construction - это компания, которая посвятила себя вдохновению людей и воплощению их мечтаний с момента своего основания. Наша цель - делать разницу, и мы активно взаимодействуем с вами на протяжении всего процесса наших проектов, предоставляя поддержку от начала до конца. Будь то проекты под ключ или реставрационные инициативы, мы разделяем ваши мечты и становимся вашими партнерами в их воплощении.',

      aboutTitle2: 'КАЖДОЕ ЗДАНИЕ - ЭТО ШЕДЕВР ДЛЯ НАС',
      aboutText2: 'Надежность, качество и совершенство - это наши основные ценности как строительных и архитектурных решений. Мы придаем значение как эстетике, так и комфорту. REBERKA Construction - это современная, инновационная, экологически осознанная, динамичная компания, ориентированная на удовлетворение клиентов, известная своими глубокими отраслевыми знаниями, опытной командой и успешным выполнением проектов.',

      aboutTitle3: 'КАЧЕСТВО ОТ ОСНОВАНИЯ ДО ПОТОЛКА',
      aboutText3: 'REBERKA Construction стремится оставить обязательство о более жизнеспособном мире для будущих поколений, используя экологически чистые и устойчивые методы строительства. Благодаря своим корпоративным ценностям компания завоевала признание за годы фокуса на качестве и надежности, достигнув успеха во многих проектах и построив широкий круг клиентов.',

      aboutTitle4: 'ТВЕРДЫЕ ОСНОВЫ, БЕЗОПАСНОЕ БУДУЩЕЕ',
      aboutText4: 'Наша цель - улучшать города современными и устойчивыми строительными проектами, сосредотачиваясь на удовлетворении клиентов, чтобы стать ведущей и надежной маркой в отрасли. REBERKA - это строительная компания, чувствительная, спланированная, инновационная и ориентированная на альтернативные решения.',

      aboutTitle5: 'ТВОРЧЕСКИЕ РЕШЕНИЯ, КРЕПКИЕ ОСНОВЫ',
      aboutText5: 'В основе нашего успеха лежит превосходство ожиданиям клиентов, предоставление отличного сервиса и создание устойчивых строительных решений. Благодаря опытной команде REBERKA Construction утвердилась как динамичная, долговечная, надежная и видениеориентированная компания в отрасли.',

      aboutTitle6: 'КАЧЕСТВЕННОЕ СТРОИТЕЛЬСТВО, КАЧЕСТВЕННАЯ ЖИЗНЬ',
      aboutText6: 'REBERKA - это строительная компания, которая сделала себе имя в отрасли благодаря своей динамичной команде, спланированному, качественному, современному, опытному, ориентированному на женщин подходу и устойчивости. Он завоевал удовлетворение клиентов своими альтернативными предложениями решений и подписал множество проектов.',

      homeAboutText: "Строительная компания REBERKA с момента своего основания и до настоящего времени стремится вдохновлять людей и воплощать их мечты, с целью делать разницу. Компания акцентирует внимание на гендерном равенстве, предоставляя привилегии женским сотрудникам и привлекая внимание к трудоустройству. С завершенными проектами, подчеркивающими устойчивый дизайн, компания успешно использует перерабатываемые материалы для строительства и производства мебели, добиваясь успеха в области интерьерного дизайна. Проекты, способствующие экономике с выбором материалов и продлением срока службы зданий, получили очень положительные отзывы. Наша преданность охране окружающей среды, такой же важной, как наше внимание к потребностям людей.",
      homeAboutText2: "Большой тщательностью мы не оставляем вас во время наших проектов. Мы вместе с вами мечтаем, становимся вашими партнерами в воплощении ваших мечтаний с нашими уникальными перспективами и точками зрениями.",
      corporateText: "Строительная компания REBERKA успешно создает разницу в своих проектах, созданных и реализованных с прошлого времени до настоящего времени, как с опытной экспертной командой, так и с опытом. Как партнер по решениям, она стремится повысить качество и ценность компаний, с которыми сотрудничает, и придает первостепенное значение потребностям людей. Сохраняя и восстанавливая исторические структуры, она сохраняет ценности, следит за современными тенденциями в архитектуре и инженерии и принимает на себя цель перенести европейскую архитектуру в Турцию. \n Основным принципом нашего профиля компании является удовлетворенность клиентов. Мы вместе с вами мечтаем, становимся вашими партнерами в воплощении ваших мечтаний. Мы поддерживаем наших клиентов в постоянном контакте с нашей рабочей группой, следим за процессом с начала до конца и обеспечиваем непрерывность. REBERKA Construction получила большое удовлетворение клиентов за все выполненные проекты благодаря своим коммуникативным навыкам и качеству выполненных работ. Вы мечтаете, мы воплощаем.",
      qualityCertificatesText: "Компания REBERKA Construction, благодаря своей экспертной команде, прошедшей обучение в Турции, Америке и Европе, добилась разницы. Тесно следя и акцентируя внимание на архитектуре и инженерии, компания создала свою уникальность, смешивая инновационные тренды и концепции дизайна, завоевав имя с многими успешными проектами.",
      qualityCertificates: 'Сертификаты качества',

            phone: 'Телефон',
            email: 'Е-пошта',
            address: 'Адреса',
            addressLine1: 'Mustafa Kemal, 2118. Cd. Maidan Plaza A Blok Kat: 10, No: 109, 06510 Çankaya/Ankara',
            greeting1:  'Поверљива решења',
            greeting2: 'Квалитетни пројекти',

            tableName: 'Листа завршених послова',
            constructionFirm : 'Грађевинска компанија',
            tableHeader1: 'Тип пројекта',
            tableHeader2: 'Име пројекта',
            tableHeader3: 'Локација',

            interiorDesign:  'Интериорни дизајн',
            interiorDesignDescription: 'Дизајн интеријера је функционално и естетски планирање интеријера. Нудимо вам смеле и функционалне дизајне који ће вас учинити слободним, мање напетим и срећнијим. ',
            constructionDescription: 'Добро планирани и примењени грађевински пројекти кључ су успеха. Постављамо темеље за вашу будућност, претварамо ваше снове у реалност. ',
            investment:  'Инвестиција',
            investmentDescription: 'Инвестиција је ризичан и неопходан део сваког пословања. Ми смо овде да будемо ваш партнер у вашим пројектима некретнина и инвестиција. ',
            landscapeDescription: 'Први корак у ваш простор за живот је спољни простор. Зато стварамо идеалне домове са дизајном који спаја боје и важне елементе. ',
            projects: 'Пројекти',
            whoWeAre: 'Ко смо ми',
            whoWeAreText: 'Реберка, 2010. године Анкара, Турска, основана је компанија. ' +
                  'Компанија је заснована са циљем да пружи услуге у области грађевинарства, дизајна и инвестиција у некретнине. ' +
                  'Од свог оснивања, компанија је потписала многе успешне пројекте и има широку базу клијената. ' +
                  'Реберка је компанија која је планирана, квалитетна, савремена, искусна, која подржава жене и која је позната у свом сектору. ',
            constructionProjects: 'Пројекти грађевине',
            interiorDesignProjects: 'Пројекти интериорног дизајна',
            rennovationProjects: 'Пројекти реновирања',
            constructionInteriorDesignProjects: 'Пројекти грађевине и интериорног дизајна',
            landscapeProjects: 'Пројекти пејзажа',
            projectContacting: 'Пројектирање',
            applicationDesign: 'Пројектирање',
            projectManagementConsultancy: 'Управљање пројектом и консалтинг',
            projectManagementDescription: 'Управљање пројектом је планирање, организација, управљање и контрола процеса неопходних за успешно завршавање пројекта. ',
            rennovationTitle: 'Реновирање',
            healthFacilityConstruction: 'Здравствена установа грађевине',
            industrialPlantInfrastructureConstruction: 'Индустријска постројења инфраструктуре грађевине',
            steelConstruction: 'Челична конструкција',
            prefabricatedStructures: 'Предфабриковане структуре',
            infrastructureSuperstructureConstructions: 'Инфраструктура и суперструктура грађевине',
            housingProjects: 'Становање пројекти',
            realEstateInvestments: 'Инвестиције у некретнине',
            publicPrivateInvestments: 'Јавне и приватне инвестиције',
            angoraVilla : 'Angora Villa',
            guneriApartment: 'Güneri Apartmanı',
            guneriVilla: 'Güneri Villa - Sinop',
            zekeriyakoyVilla: 'Zekeriyaköy NSG Villa ',
            konutkentFlat: 'Konutkent BK Daire',
            sinopFlat: 'Sinop Karakum NG Daire',
            tinyHouseSapanca: 'Tiny House Sapanca',
            hobbyGardenAyas: 'Hobi Bahçesi Ayaş',
            tinyHouseBolu: 'Tiny House Bolu',
            bodrumOffice: 'Bodrum Akyarlar Ofis Turizm',
            aspatHousingProject: 'Aspat Konut Projesi Ortakent',
            viewCatalog: 'Каталог',

            projectTitle1: 'Альтинтерази',
            projectText1: 'Наш вилльный проект, расположенный на сайте Altinterazi, выделяется своим уникальным дизайном, смелыми цветами и устойчивыми материалами, несмотря на типичность виллы.',

            projectTitle2: 'Синоп',
            projectText2: 'Наш проект апартаментов, расположенный в самом сердце Синопа, впечатляет своим минималистическим дизайном, простыми оттенками, предлагая комфорт и элегантность.',

            projectTitle3: 'Башберекет',
            projectText3: 'С оригинальной структурой и прозрачным дизайном наш Проект Вилл в Başbereket стремится создать дизайн в гармонии с природой, используя большие окна и поддерживая экологическое равновесие.',

            projectTitle4: 'Ангора',
            projectText4: 'В нашем вилльном проекте в Ангоре мы используем пастельные цвета, создавая гармоничное сочетание контрастных тонов, что делает наш дизайн биофильским и обои с текстурой выделяются как уникальные и оригинальные.',

            success: 'Ваше сообщение успешно отправлено.',
            error1: 'Пожалуйста, заполните обязательные поля: \n имя, телефон, электронная почта',
            error2: 'Произошла ошибка при отправке вашего сообщения. Пожалуйста, попробуйте позже.',
        },
      },
    },
    lng: 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
