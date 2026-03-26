import type { BiographyPageContent } from "./types";

const biographyEn: BiographyPageContent = {
    metadata: {
        title: "Biography — Muhammad Osimi",
        description:
            "Read the biography of Muhammad Osimi — scholar, philosopher, science organizer, public figure, and President of the Academy of Sciences of Tajikistan.",
    },
    hero: {
        label: "Biography",
        title: "Muhammad Osimi",
        subtitle:
            "A life shaped by science, philosophy, public service, and cultural memory",
        intro: "Muhammad Saifiddinovich Asimov — known to history as Muhammad Osimi — was born on August 25, 1920 in Khujand, Tajikistan. Over the course of seven decades, he became one of the most significant intellectual and public figures of the twentieth century in Central Asia: a physicist who grew into a philosopher, an institution builder who shaped modern Tajik science, and a humanist whose voice carried across borders.",
        portraitAlt: "Portrait of Muhammad Osimi",
        portraitCaption: "Muhammad Saifiddinovich Asimov · Osimi",
    },
    overview: {
        paragraphs: [
            "Muhammad Osimi devoted his life to the conviction that knowledge, culture, and education are the foundations of a just and enduring society. He worked in physics and philosophy, built institutions from the ground up, led the Academy of Sciences of Tajikistan for twenty-three years, and forged lasting scholarly connections between his country and the world.",
            "He participated in the Second World War, returned to rebuild academic life in postwar Tajikistan, and rose through every level of public leadership — from rector and minister to president of the Academy and senior representative at UNESCO. His intellectual work ranged from the philosophy of matter to the history of Central Asian civilization, and his legacy lives on in the institutions, publications, and documentary work that bear his name.",
            "This biography follows his life through nine chapters — from his origins in Khujand to the last months of his life, when he continued working in Paris on a major UNESCO publication he had championed for decades.",
        ],
    },
    sectionNav: {
        label: "Navigate sections",
        title: "Contents",
        sections: [
            { id: "early-life", label: "Early Life and Education" },
            { id: "war-service", label: "War Years and Service" },
            {
                id: "academic-formation",
                label: "Academic Formation and Philosophy",
            },
            { id: "institution-building", label: "Institution Building" },
            {
                id: "public-leadership",
                label: "Public Leadership and State Service",
            },
            {
                id: "academy-presidency",
                label: "Academy of Sciences Presidency",
            },
            {
                id: "international-work",
                label: "International and UNESCO Work",
            },
            { id: "thought-culture", label: "Thought, Culture, and Humanism" },
            { id: "final-years", label: "Final Years and Legacy" },
        ],
    },
    sections: [
        {
            id: "early-life",
            title: "Early Life and Education",
            paragraphs: [
                "Muhammad Saifiddinovich Asimov was born on August 25, 1920 in Khujand — one of the oldest cities of Central Asia, situated in the fertile Fergana Valley of what was then the Tajik Soviet Socialist Republic. He came from a peasant family and grew up in a time of profound social transformation across the Soviet Union.",
                "He completed his secondary education at the workers' faculty of the Khujand Agricultural Institute (1934–1937), where he received recognition for academic achievement. He then enrolled at the Physics and Mathematics Faculty of the Uzbek State University in Samarkand, graduating in 1941 with the qualification of physicist.",
                "While still a student, from 1939 to 1941, he taught physics and mathematics at secondary school No. 5 in Samarkand — the beginning of a lifelong dedication to education that would define his public role as much as his scholarship.",
            ],
            images: [
                {
                    src: "/images/biography/CP_IMG_20170904_0015.jpg",
                    alt: "Monand Osimi with family members holding young children",
                    caption:
                        "Monand Osimi (wife) holding Mustafo; her mother Khonzoda Mahmudova holding Sarvar; Asliddin Osimi (brother) holding Muzaffar.",
                    credit: "Family Archive",
                    placement: "inline-left",
                },
                {
                    src: "/images/biography/CP_IMG_20170922_0085.jpg",
                    alt: "Muhammad Osimi with a friend during his student years in Samarkand, 1941",
                    caption:
                        "Muhammad Osimi with a friend during his student years. Samarkand, Uzbekistan, 1941.",
                    credit: "Family Archive",
                    placement: "inline-right",
                },
            ],
        },
        {
            id: "war-service",
            title: "War Years and Service",
            callout: {
                text: 'During the siege of Leningrad — one of the longest and most deadly in history — Asimov lost his brother Zainiddin. He would later cite the medal "For the Defense of Leningrad" as among his most personal honors.',
            },
            paragraphs: [
                "In 1941, immediately upon completing his university studies, Muhammad Asimov was called into military service in the Soviet Army. He served for five years on the Eastern Front of the Second World War, including on the Leningrad Front — one of the most brutal theaters of the conflict. During the siege of Leningrad he lost his brother, Zainiddin Asimov.",
                'He was awarded the Order of the Patriotic War (1st degree) and the medal "For the Defense of Leningrad" in 1944, as well as the medal "For Victory over Germany in the Great Patriotic War 1941–1945." Over the following decades he received multiple commemorative military honors, including a second Order of the Patriotic War (1st degree) in 1985 and the anniversary medal "50 Years of Victory" in 1995.',
                "He joined the Communist Party of the Soviet Union in 1945, while still in military service. The war years shaped his worldview profoundly — the experience of destruction and sacrifice deepened his commitment to education, culture, and the building of a peaceful, knowledge-based society.",
            ],
        },
        {
            id: "academic-formation",
            title: "Academic Formation and Philosophy",
            callout: {
                text: 'His candidate\'s thesis — "Space and Time as the Basic Forms of Matter Existence" — marked the turn from physics to philosophy that would define the rest of his intellectual life.',
            },
            paragraphs: [
                "After demobilization in 1946, Asimov returned to Tajikistan and took up academic positions at the Leninabad State Pedagogical Institute, serving as head of the Department of Physics and then as deputy director for academic affairs (1946–1952).",
                'In 1952 he left for Moscow to pursue postgraduate study at the Academy of Social Sciences under the Central Committee of the Communist Party. There he wrote and successfully defended his candidate\'s thesis on "Space and Time as the Basic Forms of Matter Existence" (1952–1955). This dissertation — at the intersection of physics and philosophy — would set the direction of his intellectual life for decades to come.',
                'Returning to Leninabad in 1955, he continued teaching and research. He later completed his doctoral dissertation on "The Concept of Matter and the Problem of Physical Reality" (1970), was awarded the title of Professor of Philosophy in 1971, and became one of the most respected philosopher-scientists in the Soviet republic system. His trajectory from physicist to philosopher-culturologist was unusual and distinguished.',
            ],
        },
        {
            id: "institution-building",
            title: "Institution Building",
            callout: {
                text: "The institute Asimov built was later renamed the Tajik Technical University in his honor — a recognition extended in his lifetime, a rare distinction among scholars.",
            },
            paragraphs: [
                "In 1956 Muhammad Asimov was appointed the first rector of the newly founded Tajik State Polytechnic Institute in Dushanbe — the first technical institute of independent standing in Tajikistan. He threw himself into its construction: assembling faculty, organizing laboratories and workshops, establishing curricula across three initial faculties, and building the administrative structures of a functioning institution.",
                "The appointment came at the initiative of Bobojon Gafurov, the leading scholar and political figure of Tajikistan, who recognized in Asimov the rare combination of scientific authority, organizational energy, and civic commitment needed to build something from nothing. The partnership between Gafurov and Asimov — one based in Moscow as director of the Institute of Oriental Studies of the Soviet Academy of Sciences, the other building institutions in Dushanbe — would shape Tajik science and culture for generations.",
                "The Polytechnic Institute thrived under Asimov's leadership and laid the foundation for a generation of Tajik engineers and scientists. It was later renamed the Tajik Technical University in his honor. In early 1962, following the Institute's first successful graduation, Asimov was appointed Minister of Public Education of the Tajik SSR.",
            ],
        },
        {
            id: "public-leadership",
            title: "Public Leadership and State Service",
            paragraphs: [
                "As Minister of Public Education in 1962, Asimov represented Tajikistan at the UNESCO International Conference on Education in Geneva — his first contact with the organization that would become central to his international work. Later that year he was appointed to a remarkable triple role: Secretary of the Central Committee of the Communist Party of Tajikistan, Deputy Chairman of the Council of Ministers, and Chairman of the Party and State Control Committee — a structure of oversight created during the Khrushchev thaw to address abuses of institutional power.",
                "He was elected deputy to the Supreme Soviet of the Tajik SSR (6th convocation, 1963–1967) and to the Supreme Soviet of the USSR at multiple convocations, representing constituencies in Tajikistan. He participated in inter-parliamentary delegations to Iran, Italy, Switzerland, Canada, and the United States.",
                "Throughout his years of public service Asimov received numerous state honors, including the Order of Lenin (1961 and 1980), the Order of the October Revolution (1975), and the Order of the Red Banner of Labor (1965 and 1970). His public career was always understood by him as inseparable from his scholarly mission: political authority in service of education, science, and cultural life.",
            ],
        },
        {
            id: "academy-presidency",
            title: "Academy of Sciences Presidency",
            callout: {
                text: "Twenty-three years at the helm of the Academy of Sciences — the longest presidency in its history — an era that saw the founding of five major institutions and the completion of the eight-volume Tajik Soviet Encyclopedia.",
            },
            image: {
                src: "/images/biography/CP_IMG_20170906_0041.jpg",
                alt: "Muhammad Osimi in discussion with a representative of the Academy of Sciences of Afghanistan in Dushanbe, October 1983",
                caption:
                    "Muhammad Osimi in discussion with a representative of the Academy of Sciences of Afghanistan. Dushanbe, October 1983.",
                credit: "Family Archive",
                placement: "inline-right",
            },
            paragraphs: [
                "In 1965 Muhammad Asimov was elected a full academician of the Academy of Sciences of the Tajik SSR and simultaneously appointed its President — the position vacated by the distinguished physicist and mechanician Sultan Umarov. He would hold this post for twenty-three years, from 1965 to 1988.",
                "During his long presidency the Academy expanded significantly. New scientific institutions were established under his leadership, including the Pamir Biological Institute (1969), the Institute of Oriental Studies (1970), the Mathematical Institute with Computing Center (1973), and the main editorial office of the Tajik Soviet Encyclopedia (1969). Dushanbe gradually emerged as the scientific capital of the republic, with leading research centers in physics, mathematics, biology, chemistry, history, and philosophy.",
                'Asimov served simultaneously as chief scientific editor of the Tajik Soviet Encyclopedia — a monumental eight-volume publication completed in 1978 — and as chairman of the Republican Committee for the State Prize named after Abu Ali Ibn Sino. He also chaired the Society "Znanie" (Knowledge) of the Tajik SSR (1977–1987) and led several coordination councils for scientific research across the natural and social sciences.',
                "In 1974 he was elected a corresponding member of the Academy of Sciences of the USSR. In 1977 he was awarded the honorary title Honored Worker of Science of the Tajik SSR. He received the International Jawaharlal Nehru Prize in 1983, and in 1987 was elected Honorary Academician of the Academy of Sciences of Afghanistan.",
            ],
        },
        {
            id: "international-work",
            title: "International and UNESCO Work",
            callout: {
                text: "The six-volume History of Civilizations of Central Asia — published by UNESCO between 1992 and 2005 — remains the most comprehensive international scholarly work on the region ever undertaken.",
            },
            paragraphs: [
                "Asimov's international presence began in earnest with the first major symposium on the Kushan civilization, held in Dushanbe in 1968 under the auspices of the International Association for the Study of the Cultures of Central Asia (IASCCA) — an organization that operated within the UNESCO framework. Asimov co-led the organizing committee alongside Gafurov and brought the full resources of the Tajik Academy to bear on the event.",
                'Following Gafurov\'s death in 1977, Asimov became President of IASCCA and its primary representative to UNESCO. Under his leadership the association directed a decades-long effort to produce the six-volume UNESCO publication "The History of Civilizations of Central Asia" — the most comprehensive international scholarly work on the region ever undertaken. Asimov chaired the International Scientific Committee established in 1980 to oversee the project, and guided it from conception through the publication of multiple volumes by the year 2000.',
                'He also contributed as co-editor of Volume IV of the UNESCO publication "The History of Mankind: Scientific and Cultural Development" — writing the chapter on Transoxiana in the 7th–15th centuries together with colleague N.N. Negmatov.',
                "Asimov attended and presented at major international congresses in Switzerland, France, India, the Netherlands, Romania, Japan, Bulgaria, England, the United States, Cuba, Italy, and many other countries. He headed Soviet Academy delegations abroad on numerous occasions and forged lasting scholarly relationships with universities and academies across Asia, Europe, and the Americas.",
            ],
        },
        {
            id: "thought-culture",
            title: "Thought, Culture, and Humanism",
            callout: {
                text: "Men of culture are the Hosts of History, men of politics are the Guests.",
                attribution: "Muhammad Osimi",
            },
            paragraphs: [
                'Muhammad Osimi\'s intellectual work defied easy categorization. His published books span the philosophy of natural science, the history of philosophical thought, the conceptual problems of physical reality, dialectical materialism, and the cultural heritage of Central Asian civilization. His major works include "Matter and the Physical Picture of the World" (Dushanbe, 1966), "The Concept of Matter and the Problem of Physical Reality" (Moscow, 1970), and "The Origin and Development of Philosophical Thinking" (Dushanbe, 1970). His books were published in Russian, English, German, Farsi, and Arabic.',
                "He made significant contributions to the study of the lives and thought of the great classical scholars of the Persian-Tajik tradition: Abu Rayhan Biruni, Abu Ali Ibn Sino, Abdurrahman Jami, Shamsiddin Hafiz, Ahmad Donish, and Sadriddin Aini — bringing their philosophical and scientific contributions to international scholarly attention. He organized and participated in jubilee congresses dedicated to these figures across multiple countries.",
                "His humanist vision was rooted in the belief that culture — language, literature, art, memory — constitutes the deepest continuity of a people. He was an advocate for the unity of the Farsi-Tajik literary language across Iran, Afghanistan, and Tajikistan, speaking on this theme at the Sorbonne in Paris in April 1996 — only weeks before his death. He called for a shared scientific-terminological body to regulate language questions across the three countries, a proposal that was accepted by the seminar participants.",
                'In his later years, after Tajikistan\'s independence, he became an outspoken advocate for national unity and the Tajik renaissance, working through the cultural association "Paivand" to call for reconciliation and the building of a new democratic homeland.',
            ],
        },
        {
            id: "final-years",
            title: "Final Years and Legacy",
            paragraphs: [
                "The last years of Muhammad Osimi's life coincided with the dissolution of the Soviet Union, the independence of Tajikistan, and the terrible civil war that followed. He continued to work — writing, lecturing, representing Tajik scholarship internationally — even as the country he had spent his life building was torn apart.",
                'In April 1996, at the age of seventy-five, he traveled to Paris for a series of events at UNESCO headquarters. He reviewed chapters of the fourth volume of the "History of Civilizations of Central Asia," took part in a conference on the culture of the Timurid epoch, and delivered a paper at the Sorbonne on the Farsi language in the modern world. These were among his final public acts.',
                "Muhammad Saifiddinovich Asimov died on September 27, 1996. He was seventy-six years old.",
                'His legacy endures through the institutions he built — among them the Tajik Technical University, which bears his name — the publications he led, and the international scholarly networks he sustained. The documentary film "Osimi" presents his life to new audiences, and the ongoing archival work in his name continues the task of preservation he championed throughout his career. He remains one of the defining intellectual figures of twentieth-century Central Asia.',
            ],
        },
    ],
    closing: {
        title: "A Legacy That Endures",
        paragraphs: [
            "Muhammad Osimi's life was one of remarkable continuity: from a physics student in wartime Samarkand to a philosopher-statesman building institutions for a new nation, to a UNESCO figure connecting Central Asia to the world's scholarly community. He understood science, culture, and public service not as separate vocations but as expressions of a single humanist commitment.",
            "His work — in classrooms, in lecture halls, in the halls of government and international organization — was always animated by the belief that a just society is built on knowledge, that memory and culture are the foundations of dignity, and that the next generation is always the truest measure of what we have built.",
        ],
    },
    relatedLinks: {
        title: "Continue Exploring",
        items: [
            {
                href: "/timeline",
                label: "Timeline",
                description:
                    "A chronological view of key events, appointments, and milestones.",
            },
            {
                href: "/works",
                label: "Works and Ideas",
                description:
                    "Explore his published books, editorial projects, and philosophical contributions.",
            },
            {
                href: "/documentary",
                label: "Documentary",
                description:
                    "Watch the documentary film presenting his life and legacy.",
            },
            {
                href: "/archive",
                label: "Archive",
                description:
                    "Discover the broader effort to preserve his papers, photographs, and memory.",
            },
        ],
    },
};

export default biographyEn;
