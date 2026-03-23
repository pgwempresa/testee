const produtos = [
    { 
        id: 1, nome: "Conjunto Amanda", precoOriginal: "289,90", badge: "NOVO",
        descricao: "Uma peça desenhada para mulheres que amam elegância sem abrir mão do conforto. O Conjunto Amanda tem um caimento impecável que valoriza a silhueta, sendo a escolha perfeita tanto para um dia no escritório quanto para um jantar especial.",
        caracteristicas: ["Tecido em Alfaiataria Premium", "Modelagem de cintura alta", "Não marca e não apresenta transparência", "Costuras invisíveis reforçadas"],
        imagem: "images/conjunto011preto.webp",
        variantes: [
            { id: "preto", cor: "Preto", img: "images/conjunto011preto.webp" },
            { id: "branco", cor: "Branco", img: "images/conjunto011branco.webp" },
            { id: "vermelho", cor: "Vermelho", img: "images/conjunto011vermelho.webp" },
            { id: "azul", cor: "Azul", img: "images/conjunto011azul.webp" }
        ]
    },
    { 
        id: 2, nome: "Vestido Luana", precoOriginal: "319,90", badge: "FAVORITO",
        descricao: "O Vestido Luana traz a essência do frescor e da delicadeza. Com tecido leve e toque macio, ele flui com os seus movimentos. O design acentua levemente a cintura, garantindo um look incrivelmente sofisticado.",
        caracteristicas: ["Toque de seda suave na pele", "Decote altamente sedutor e sofisticado", "Fibra respirável e elástica", "Caimento sereia que alonga o visual"],
        imagem: "images/conjunto013preto.webp",
        variantes: [
            { id: "preto", cor: "Preto", img: "images/conjunto013preto.webp" },
            { id: "azul", cor: "Azul", img: "images/conjunto013azul.webp" }
        ]
    },
    { 
        id: 3, nome: "Conjunto Beatriz", precoOriginal: "249,90", badge: "",
        descricao: "Despojado e ultra moderno, o Conjunto Beatriz foi feito para mulheres confiantes. Seu tecido premium não amassa com facilidade, trazendo praticidade absoluta para a rotina.",
        caracteristicas: ["Baixo índice de amasso (Easy Care)", "Ajuste na panturrilha", "Cor de alta fidelidade que não desbota", "Perfeito para combinações Urbanas"],
        imagem: "images/conjunto014cinza.webp",
        variantes: [
            { id: "cinza", cor: "Cinza", img: "images/conjunto014cinza.webp" },
            { id: "vermelho", cor: "Vermelho", img: "images/conjunto014vermelho.webp" }
        ]
    },
    { 
        id: 4, nome: "Vestido Camila", precoOriginal: "199,90", badge: "ESGOTANDO",
        descricao: "Sensualidade na medida certa. O Vestido Camila conta com fendas desenhadas milimetricamente e um caimento que abraça o corpo de forma sublime.",
        caracteristicas: ["Fenda lateral com acabamento duplo", "Elasticidade de 5% de Elastano", "Comprimento alongado esguio", "Não necessita de passadoria pesada"],
        imagem: "images/conjunto02preto.webp",
        variantes: [
            { id: "preto", cor: "Preto", img: "images/conjunto02preto.webp" },
            { id: "vermelho", cor: "Vermelho", img: "images/conunto02vermelho.webp" },
            { id: "cereja", cor: "Vermelho Cereja", img: "images/conjunt022vermelho.webp" }
        ]
    },
    { 
        id: 5, nome: "Conjunto Daniela", precoOriginal: "349,90", badge: "",
        descricao: "Luxo e versatilidade definem o Conjunto Daniela. Você pode usar as peças juntas para um visual monocromático poderoso, ou separadas para multiplicar opções.",
        caracteristicas: ["Tecido Duplo no Busto", "Acabamento de Alta Costura", "Zíper invisível super resistente", "Caimento exato e alinhado na cintura"],
        imagem: "images/conjunto05preto.webp",
        variantes: [
            { id: "preto", cor: "Preto", img: "images/conjunto05preto.webp" },
            { id: "marrom", cor: "Marrom", img: "images/conjunto05marrom.webp" },
            { id: "azul", cor: "Azul", img: "images/conjunto5azul.webp" },
            { id: "ciano", cor: "Ciano", img: "images/conjunto05cianeto.webp" }
        ]
    },
    { 
        id: 6, nome: "Vestido Elena", precoOriginal: "279,90", badge: "NOVO",
        descricao: "Inspirado no charme europeu, o Vestido Elena possui um corte romântico inesquecível. Detalhes minuciosos na costura trazem toda a feminilidade de uma peça de grife.",
        caracteristicas: ["Estilo Europeu Minimalista", "Estrutura leve e totalmente respirável", "Excelente para dias quentes e eventos chiques", "Qualidade extrema que dura anos"],
        imagem: "images/conjunto07rosa.webp",
        variantes: [
            { id: "rosa", cor: "Rosa", img: "images/conjunto07rosa.webp" },
            { id: "branco", cor: "Branco", img: "images/conjunto07branco.webp" },
            { id: "marrom", cor: "Marrom", img: "images/conjunto07marrom.webp" }
        ]
    },
    { 
        id: 7, nome: "Conjunto Fernanda", precoOriginal: "229,90", badge: "",
        descricao: "Clássico reimaginado. Fernanda é o conjunto que une conforto urbano com rigor fashionista. Estética encantadora e extremamente macia.",
        caracteristicas: ["Fibra tratada com fios macios", "100% Livre de transparência", "Tonalidades raras e exclusivas", "Garante muito conforto e dinamismo para o trabalho"],
        imagem: "images/conjunto08preto.webp",
        variantes: [
            { id: "preto", cor: "Preto", img: "images/conjunto08preto.webp" },
            { id: "rosa", cor: "Rosa", img: "images/conjunto08rosa.webp" },
            { id: "azul", cor: "Azul", img: "images/conjunto08azul.webp" }
        ]
    },
    { 
        id: 8, nome: "Vestido Gabriela", precoOriginal: "189,90", badge: "FAVORITO",
        descricao: "A prova de que menos é mais. Com linhas limpas e silhueta clássica, o Gabriela molda perfeitamente através de uma malha inovadora e altamente resistente.",
        caracteristicas: ["Gola desenhada e muito delicada", "Corte Reto que não embola a peça", "Zero Pilling (tecido não faz bolinhas)", "Perfeito para sapatos abertos ou tênis"],
        imagem: "images/conjunto09preto.webp",
        variantes: [
            { id: "preto", cor: "Preto", img: "images/conjunto09preto.webp" },
            { id: "vermelho", cor: "Vermelho", img: "images/conjunto09vermelho.webp" },
            { id: "azul", cor: "Azul", img: "images/conjunto09azul.webp" }
        ]
    },
    { 
        id: 9, nome: "Conjunto Helena", precoOriginal: "299,90", badge: "",
        descricao: "Elegância pura moldada no seu corpo. A modelagem incrível de Helena conta com recortes frontais pensados para quem vive uma rotina dinâmica.",
        caracteristicas: ["Ajuste ergonômico no quadril não prendendo os movimentos", "Leque de cores Premium", "Alta retenção do tingimento (A cor não desbota nunca)", "Toque geladinho na pele"],
        imagem: "images/conjunto10vermelho.webp",
        variantes: [
            { id: "vermelho", cor: "Vermelho", img: "images/conjunto10vermelho.webp" },
            { id: "branco", cor: "Branco", img: "images/conjunto10branco.webp" },
            { id: "azul", cor: "Azul", img: "images/conjunto10azul.webp" }
        ]
    },
    { 
        id: 10, nome: "Vestido Isabela", precoOriginal: "359,90", badge: "NOVO",
        descricao: "Sofisticação absoluta. Feito com um dos tecidos mais desejados da temporada, o modelo Isabela tem decote charmoso e comprimento que esbanja finesse e classe de sobra pra você não passar despercebida.",
        caracteristicas: ["Estampa de alta resolução que não trinca", "Costuras que modelam as curvas e disfarçam o abdômen", "Extremamente luxuoso de ver ao vivo", "Caimento imponente de passarela de alta moda"],
        imagem: "images/conjunto01.webp", variantes: []
    },
    { 
        id: 11, nome: "Conjunto Juliana", precoOriginal: "219,90", badge: "",
        descricao: "Procurando um visual prático e lindo? O Conjunto Juliana promete ser a sua roupa preferida! Macio ao toque, é perfeito para combinar com acessórios elegantes ou deixá-lo dominar sozinho.",
        caracteristicas: ["Extremamente confortável", "Fácil de combinar", "Caimento leve e solto", "Estilo casual chic"],
        imagem: "images/conjunto03.webp", variantes: []
    },
    { 
        id: 12, nome: "Vestido Karla", precoOriginal: "389,90", badge: "FAVORITO",
        descricao: "Com muita fluidez graças ao corte esguio da marca, o modelo Karla é capaz de encantar quem o veste! A peça possui caimento que remete aos vestidos de grife refinados do alto verão europeu.",
        caracteristicas: ["Fluidez excepcional da malha", "Estampa clássica e luxuosa", "Conforto térmico no calor", "Alonga o contorno feminino"],
        imagem: "images/conjunto06.webp", variantes: []
    },
    { 
        id: 13, nome: "Conjunto Letícia", precoOriginal: "259,90", badge: "",
        descricao: "Versátil, dinâmico e indispensável. Adotamos novos padrões de conforto e a modelagem exclusiva faz de Letícia aquele conjunto que você vai desejar ter de todas as cores do mundo.",
        caracteristicas: ["Padrão de corte reto e contemporâneo", "Molda a cintura perfeitamente", "Absoluto conforto das dobras e costuras", "Praticidade absoluta"],
        imagem: "images/conjunto012.webp", variantes: []
    },
    { 
        id: 14, nome: "Vestido Mariana", precoOriginal: "289,90", badge: "",
        descricao: "Com uma estética primorosa e uma textura muito macia, Mariana desenha a silhueta da mulher moderna e proporciona conforto sem precedentes o dia, ou a noite toda.",
        caracteristicas: ["Padrão Black and White chique", "Corte elegante e moderno", "Caimento fluído que não marca o corpo", "Alta durabilidade"],
        imagem: "images/conjunto016.webp", variantes: []
    },
    { 
        id: 15, nome: "Conjunto Natália", precoOriginal: "319,90", badge: "NOVO",
        descricao: "Feito para os dias em que o estilo não pode faltar, Natália traz tecidos terrosos sofisticados misturados a um caimento exato de alfaiataria premium.",
        caracteristicas: ["Tom terroso em alta tendência internacional", "Acabamento primoroso", "Zero transparência mesmo no sol", "Design atemporal"],
        imagem: "images/conjunto13marrom.webp", variantes: []
    },
    { 
        id: 16, nome: "Vestido Olivia", precoOriginal: "339,90", badge: "",
        descricao: "Todo o poder num clássico vestido preto de corte primoroso. O Vestido Olivia tem o poder de deixar o olhar concentrado unicamente no brilho que só você tem.",
        caracteristicas: ["Preto absoluto que não desbota nas lavagens", "Não acumula pelos ou penugens", "Caimento perfeito", "Perfeito tanto com salto quanto rasteirinha"],
        imagem: "images/conjunto14preto.webp", variantes: []
    },
    { 
        id: 17, nome: "Conjunto Paula", precoOriginal: "199,90", badge: "ESGOTANDO",
        descricao: "Frescor, vivacidade e charme na medida certa. Trazendo um corte descontraído, maravilhoso para eventos sociais ou passeios relaxantes nos finais de semana.",
        caracteristicas: ["Tom vibrante estilo Verão", "Leve e esvoaçante", "Costuras duplas firmes", "Ajuste na cintura valoriza os quadris"],
        imagem: "images/conjuntoverde01.webp", variantes: []
    },
    { 
        id: 18, nome: "Vestido Renata", precoOriginal: "229,90", badge: "",
        descricao: "Com um tom iluminado fantástico, Renata destaca os tons de pele e atrai os olhos pela beleza inquestionável. Excelente para quem tem personalidade forte.",
        caracteristicas: ["Tom mostarda requintado", "Fluidez natural incrível na perna", "Comprimento ajustado perfeitamente", "Tecido premium altamente macio"],
        imagem: "images/conjuntoamarelo01.webp", variantes: []
    },
    { 
        id: 19, nome: "Conjunto Sabrina", precoOriginal: "279,90", badge: "",
        descricao: "O minimalismo no seu ápice com detalhes que agregam um charme irresistível. O corte alonga a silhueta com sua costura lateral reforçada e oculta habilidosamente.",
        caracteristicas: ["Verde menta exclusivo", "Não requer passadoria complexa", "Ideal para dias livres ou escritório casual", "Acabamentos extremamente delicados"],
        imagem: "images/conjuntoverde011.webp", variantes: []
    },
    { 
        id: 20, nome: "Vestido Tatiana", precoOriginal: "249,90", badge: "NOVO",
        descricao: "Modelagem clássica, elegância permanente. Ideal para ambientes de trabalho casuais requintados até a moda de final de semana! Confortável a cada segundo do uso.",
        caracteristicas: ["Tonalidade terrosa fácil de compor", "Fibra super macia", "Garante mobilidade solta pro corpo inteiro", "Altamente estiloso"],
        imagem: "images/conjunt055marrom.webp", variantes: []
    }
];
