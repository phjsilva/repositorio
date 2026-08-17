const portfolioData = {
    seo: {
        title: "Pedro Henrique — Desenvolvedor de Software Multiplataforma",
        description: "Portfólio acadêmico e profissional de Pedro Henrique, estudante de DSM na Fatec Jacareí. Projetos de software, tecnologias e experiências.",
        image: "assets/images/profile/profile.jpg",
        keywords: ["Fatec", "Jacareí", "DSM", "Desenvolvimento de Software Multiplataforma", "Dev", "Full Stack"]
    },

    personal: {
        name: "Pedro Henrique",
        role: "Desenvolvedor de Software",
        location: "Jacareí, SP",
        description: "Estudante de Desenvolvimento de Software Multiplataforma na Fatec Jacareí. Apaixonado por solucionar problemas através de código limpo, arquitetura escalável e interfaces elegantes.",
        profileImage: "assets/images/profile/profile.png", // Deixe em branco "" para testar o fallback de iniciais ("PH")
        email: "pedro.henrique@fatec.sp.gov.br",
        github: "https://github.com/ph-dsm-fatec",
        linkedin: "https://linkedin.com/in/pedro-henrique-dsm"
    },

    about: {
        title: "Sobre mim",
        description: "Atualmente curso o 2º semestre de Desenvolvimento de Software Multiplataforma (DSM) na Fatec Jacareí. Meu foco principal está em projetar e construir aplicações web modernas, seguras e bem estruturadas. Tenho grande interesse na cultura DevOps, boas práticas de código (Clean Code) e metodologias ágeis.",
        interests: [
            "Arquitetura de Software",
            "Desenvolvimento Full Stack",
            "Banco de Dados Relacionais e NoSQL",
            "DevOps & Nuvem",
            "UX/UI Minimalista"
        ],
        objectives: [
            "Conquistar uma oportunidade de estágio ou júnior em desenvolvimento de software.",
            "Aprofundar conhecimentos em ecossistemas de microsserviços e APIs RESTful.",
            "Contribuir ativamente em projetos de código aberto (Open Source)."
        ]
    },

    skills: {
        languages: ["JavaScript (ES6+)", "TypeScript", "SQL", "Python"],
        frontend: ["HTML5", "CSS3", "React", "Vanilla JS", "Tailwind CSS"],
        backend: ["Node.js", "Express", "Python Flask"],
        database: ["PostgreSQL", "SQLite", "MongoDB"],
        tools: ["Git", "GitHub", "Docker", "VS Code", "Figma"]
    },

    academic: {
        course: "Desenvolvimento de Software Multiplataforma",
        institution: "Fatec Jacareí",
        semester: "2º Semestre",
        startYear: "2025",
        status: "Em andamento"
    },

    // Deixe vazio [] para ocultar automaticamente a seção de Experiência no portfólio
    experience: [
        {
            company: "Tech Solution Jacareí",
            role: "Estagiário de Suporte Técnico",
            period: "Jun 2025 - Presente",
            description: "Auxílio no suporte ao usuário final, manutenção de sistemas internos, gerenciamento de banco de dados e automação de rotinas de backup utilizando scripts em Python."
        },
        {
            company: "Freelance",
            role: "Desenvolvedor Web Front-end",
            period: "Jan 2024 - Dez 2024",
            description: "Desenvolvimento de landing pages institucionais e e-commerces simples para comércios locais de Jacareí utilizando HTML, CSS, JavaScript e integração com APIs de pagamento."
        }
    ],

    education: [
        {
            course: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
            institution: "Faculdade de Tecnologia de Jacareí (Fatec)",
            period: "2025 - 2027"
        },
        {
            course: "Curso Completo de Git e GitHub (12h)",
            institution: "Curso em Vídeo",
            period: "2024"
        },
        {
            course: "Algoritmos e Lógica de Programação",
            institution: "Udemy",
            period: "2023"
        }
    ],

    projects: [
        {
            title: "API Fatec - Sistema de Gerenciamento Escolar",
            description: "Projeto de Aprendizagem Integradora em Projetos (API) desenvolvido no 1º semestre de DSM. Consiste em uma plataforma web para controle de faltas e notas.",
            contribution: "Fui responsável pelo desenvolvimento do front-end em HTML/CSS semânticos, lógica de manipulação do DOM em JS e pela modelagem inicial do banco de dados relacional.",
            technologies: ["HTML5", "CSS3", "JavaScript", "SQL", "SQLite"],
            semester: "1º Semestre",
            type: "Acadêmico",
            github: "https://github.com/ph-dsm-fatec/api-gerenciamento-escolar",
            demo: "",
            image: "assets/images/projects/project.png" // Deixe em branco para fallback visual elegante do card
        },
        {
            title: "Task-Flow Kanban",
            description: "Um quadro Kanban interativo pessoal para gerenciamento de tarefas com salvamento automático e suporte para arrastar e soltar (drag and drop).",
            contribution: "Desenvolvimento individual completo, focando na usabilidade da interface e na persistência robusta local utilizando LocalStorage.",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            semester: "Pessoal",
            type: "Pessoal",
            github: "https://github.com/ph-dsm-fatec/task-flow-kanban",
            demo: "https://ph-dsm-fatec.github.io/task-flow-kanban/",
            image: ""
        },
        {
            title: "Catalogo de Filmes e Séries (CineSearch)",
            description: "Aplicação para busca de filmes, listagem de detalhes, recomendações e filtros por gênero.",
            contribution: "Consumo de API de terceiros para busca de dados e criação de um layout moderno com carregamento sob demanda (infinite scrolling).",
            technologies: ["React", "CSS Modules", "JavaScript"],
            semester: "Pessoal",
            type: "Pessoal",
            github: "https://github.com/ph-dsm-fatec/cinesearch",
            demo: "",
            image: ""
        },
        {
            title: "Sistema Integrado de Vendas (SIV)",
            description: "Plataforma de ponto de venda (PDV) de nível profissional para gerenciar estoque, registrar vendas e imprimir recibos.",
            contribution: "Projeto em equipe onde atuei na arquitetura do backend, estruturando rotas RESTful e a segurança dos dados com validação de tokens.",
            technologies: ["Node.js", "Express", "PostgreSQL", "React"],
            semester: "Profissional",
            type: "Profissional",
            github: "https://github.com/ph-dsm-fatec/siv-ponto-de-venda",
            demo: "",
            image: ""
        }
    ]
};
