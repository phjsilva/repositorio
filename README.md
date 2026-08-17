# Portfólio Profissional e Acadêmico — Fatec DSM Jacareí

Este é um modelo de portfólio completo, moderno, responsivo e de alto padrão estético para estudantes do curso de **Desenvolvimento de Software Multiplataforma (DSM)** da **Fatec Jacareí**.

O projeto foi projetado com foco em máxima facilidade de manutenção: **100% dos dados textuais, links e mídias do site são configurados em um único arquivo (`js/data.js`)**. Você não precisará alterar nenhum arquivo HTML para atualizar seu portfólio!

---

## 🚀 Tecnologias Utilizadas

Para garantir a simplicidade na publicação (GitHub Pages) e o funcionamento local imediato (sem processos de compilação), o projeto foi desenvolvido estritamente com:
* **HTML5** (Semântico e acessível)
* **CSS3** (Variáveis CSS para controle centralizado de temas)
* **JavaScript Puro** (Vanilla JS, sem dependências externas)

---

## 📁 Estrutura de Pastas

A organização dos arquivos segue as melhores práticas de desenvolvimento web:

```text
portfolio/
│
├── index.html          # Estrutura semântica principal e hooks do JavaScript
│
├── css/
│   ├── reset.css       # Normalização de estilos entre navegadores
│   ├── variables.css   # Definição de temas (Claro e Escuro) e variáveis globais
│   ├── style.css       # Estilização geral dos componentes desktop e modal
│   └── responsive.css  # Ajustes de layouts para dispositivos móveis e tablets
│
├── js/
│   ├── data.js         # BANCO DE DADOS LOCAL (Todos os textos, links e dados)
│   └── main.js         # Lógica de renderização dinâmica, filtros, modal e tema
│
└── assets/
    ├── images/
    │   ├── profile/    # Imagem de foto de perfil
    │   └── projects/   # Capas e imagens de demonstração dos projetos
    └── icons/          # Ícones estáticos (se necessário)
```

---

## ⚙️ Como Personalizar Seu Portfólio

Para adequar o portfólio com suas próprias informações, você precisa realizar alterações apenas em **dois arquivos específicos**:

### 1. Alterar Textos, Projetos e Links (`js/data.js`)
Abra o arquivo [data.js](file:///c:/Users/phjs2/Organizacao/01_Projetos/pe2/js/data.js) no seu editor e edite o objeto `portfolioData`:

* **`seo`**: Configure o título do site e a descrição curta que aparece no Google e nas pré-visualizações de compartilhamento de link.
* **`personal`**: Insira seu nome completo, área de atuação, link para e-mail (`pedro.henrique@fatec.sp.gov.br`), perfil do GitHub, LinkedIn e caminho da sua foto de perfil.
  > [!TIP]
  > Se você deixar o campo `profileImage: ""` vazio, o sistema gera automaticamente um círculo degradê elegante com suas iniciais (ex: "PH") no lugar da foto!
* **`about`**: Modifique a sua descrição curta, a lista de interesses profissionais e seus objetivos de carreira.
* **`skills`**: Adicione ou remova tecnologias dentro das categorias correspondentes (`languages`, `frontend`, `backend`, `database`, `tools`). As categorias vazias não quebram o layout.
* **`academic` & `education`**: Personalize com seu semestre atual na Fatec Jacareí e inclua outros cursos complementares.
* **`experience`**: Adicione suas experiências profissionais anteriores.
  > [!IMPORTANT]
  > Se você não possuir experiências profissionais ainda, basta deixar o array vazio (`experience: []`). A seção inteira de experiências desaparecerá automaticamente do menu de navegação e do layout, mantendo a integridade visual do portfólio.
* **`projects`**: Crie arrays de objetos contendo os seus projetos acadêmicos e pessoais. Siga o modelo estrutural:
  ```javascript
  {
      title: "Título do Projeto",
      description: "Descrição simplificada do produto desenvolvido...",
      contribution: "Explicação clara do seu papel individual no projeto...",
      technologies: ["Node.js", "Express", "SQLite"],
      semester: "2º Semestre", // Ou "Pessoal" / "Profissional"
      type: "Acadêmico",       // Pode ser "Acadêmico", "Pessoal" ou "Profissional"
      github: "https://github.com/seuusuario/repositorio",
      demo: "https://seuusuario.github.io/link-demonstracao/", // Opcional
      image: "assets/images/projects/capa.jpg" // Opcional (se vazio, usa fallback estético)
  }
  ```

### 2. Alterar Paleta de Cores e Estilos (`css/variables.css`)
Caso queira modificar as cores primárias do site (como trocar o Indigo/Violeta padrão por outra cor), abra o arquivo [variables.css](file:///c:/Users/phjs2/Organizacao/01_Projetos/pe2/css/variables.css) e ajuste as seguintes variáveis:

* Para o **Tema Claro**, edite sob a regra `:root`:
  * `--accent`: Cor principal de destaque (botões, links e marcadores ativos).
  * `--background` / `--surface`: Cor do fundo da página e dos cartões.
* Para o **Tema Escuro**, edite sob a regra `[data-theme="dark"]`:
  * `--accent`: Cor ativa ajustada para melhor contraste em fundos escuros.

---

## 🖥️ Como Executar Localmente

Como o projeto utiliza exclusivamente tecnologias nativas do navegador e carrega arquivos JS de maneira global, **você não precisa de um servidor local Node.js para rodá-lo**.

1. Navegue até a pasta do projeto.
2. Dê dois cliques no arquivo [index.html](file:///c:/Users/phjs2/Organizacao/01_Projetos/pe2/index.html) para abri-lo diretamente em seu navegador.
3. Se preferir usar extensões de desenvolvimento (como a *Live Server* do VS Code), sinta-se à vontade para rodar e visualizar atualizações automáticas.

---

## 🌐 Como Publicar no GitHub Pages

O portfólio está 100% pronto para publicação gratuita no GitHub Pages:

1. Crie um novo repositório no seu GitHub (recomendável nomeá-lo como `seu-usuario.github.io` ou `portfolio`).
2. Envie todos os arquivos deste projeto para o repositório (com o `index.html` na raiz).
3. No GitHub, vá nas configurações do repositório (**Settings**).
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Build and deployment**, selecione a branch `main` e a pasta `/ (root)` e clique em **Save**.
6. Aguarde alguns minutos e o seu portfólio estará online no endereço `https://seu-usuario.github.io/`!
