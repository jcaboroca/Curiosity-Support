const facts = {
    en: [
        "A day on Venus is longer than a year on Venus.",
        "Apples float because they are 25% air.",
        "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.",
        "A shrimp's heart is in its head.",
        "Snails can sleep for up to three years.",
        "Footprints on the Moon will stay there for millions of years.",
        "The sun makes up 99.86% of the mass in the solar system.",
        "Bananas are berries, but strawberries aren't.",
        "Octopuses have three hearts and blue blood.",
        "A cloud can weigh more than a million pounds.",
        "Wombat poop is cube-shaped to prevent it from rolling away.",
        "The total weight of all ants on Earth is roughly equal to all humans.",
        "The tongue of a blue whale weighs as much as an elephant.",
        "Saturn could float on water because it's mostly gas.",
        "Venus is the hottest planet, even though Mercury is closer to the sun.",
        "Cows have 'best friends' and get stressed when separated.",
        "Human teeth are as strong as shark teeth.",
        "A bolt of lightning is five times hotter than the sun's surface.",
        "Butterflies taste with their feet.",
        "Polar bears have black skin and clear fur.",
        "The Earth's core is as hot as the surface of the sun.",
        "Sloths can take up to a month to digest a single meal.",
        "Koalas have unique fingerprints, much like humans.",
        "Sea otters hold hands while sleeping to stay together.",
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "A teaspoon of a neutron star would weigh 6 billion tons.",
        "Some metals are so reactive they explode on contact with water.",
        "The Great Wall of China is not visible from space with the naked eye.",
        "There are more trees on Earth than stars in the Milky Way.",
        "Your brain uses 20% of your body's total energy.",
        "Water can boil and freeze at the same time in specific conditions.",
        "A day on Jupiter is only 10 hours long.",
        "Rabbits and parrots can see behind them without turning their heads.",
        "Antarctica is the largest desert in the world.",
        "Glaciers and ice sheets hold about 69% of the world's freshwater.",
        "The average person spends 6 months of their life waiting for red lights.",
        "Your heart beats about 100,000 times a day.",
        "There are 206 bones in an adult human body.",
        "The smallest bone in your body is in your ear.",
        "Sharks have been around longer than trees.",
        "Hot water freezes faster than cold water (Mpemba effect).",
        "The smell of freshly cut grass is a plant distress call.",
        "Humans and bananas share about 50% of their DNA.",
        "Plastic bottles can take 450 years to decompose in the ocean.",
        "Hummingbirds are the only birds that can fly backwards.",
        "A group of flamingos is called a 'flamboyance'.",
        "The moon is moving away from Earth at 3.8 cm per year.",
        "A jellyfish is 95% water.",
        "Dogs' nose prints are as unique as human fingerprints.",
        "The fingerprints of a koala are so similar to humans they have confused crime scenes."
    ],
    es: [
        "Un día en Venus dura más que un año en Venus.",
        "Las manzanas flotan porque tienen un 25% de aire.",
        "La miel nunca se echa a perder. Se ha encontrado miel comestible en tumbas egipcias.",
        "El corazón de un camarón está en su cabeza.",
        "Los caracoles pueden dormir hasta tres años.",
        "Las huellas en la Luna durarán millones de años.",
        "El Sol representa el 99,86% de la masa del sistema solar.",
        "Los plátanos son bayas, pero las fresas no.",
        "Los pulpos tienen tres corazones y sangre azul.",
        "Una nube puede pesar más de 500 toneladas.",
        "La caca de los wombats es cúbica para que no ruede.",
        "El peso total de todas las hormigas es igual al de todos los humanos.",
        "La lengua de una ballena azul pesa tanto como un elefante.",
        "Saturno flotaría en el agua porque es principalmente gas.",
        "Venus es el planeta más caliente, aunque Mercurio esté más cerca del Sol.",
        "Las vacas tienen 'mejores amigas' y se estresan si se separan.",
        "Los dientes humanos son tan fuertes como los de un tiburón.",
        "Un rayo es cinco veces más caliente que la superficie del Sol.",
        "Las mariposas saborean con los pies.",
        "Los osos polares tienen la piel negra y el pelaje transparente.",
        "El núcleo de la Tierra es tan caliente como la superficie del Sol.",
        "Los perezosos pueden tardar un mes en digerir una sola comida.",
        "Los koalas tienen huellas dactilares únicas, como los humanos.",
        "Las nutrias marinas se dan la mano al dormir para no separarse.",
        "La Torre Eiffel puede medir 15 cm más en verano.",
        "Una cucharada de una estrella de neutrones pesaría 6.000 millones de toneladas.",
        "Algunos metales explotan al contacto con el agua.",
        "La Gran Muralla China no se ve desde el espacio a simple vista.",
        "Hay más árboles en la Tierra que estrellas en la Vía Láctea.",
        "Tu cerebro consume el 20% de la energía total del cuerpo.",
        "El agua puede hervir y congelarse al mismo tiempo en ciertas condiciones.",
        "Un día en Júpiter dura solo 10 horas.",
        "Conejos y loros pueden ver detrás de ellos sin girar la cabeza.",
        "La Antártida es el desierto más grande del mundo.",
        "Glaciares y capas de hielo contienen el 69% del agua dulce del mundo.",
        "Pasamos unos 6 meses de nuestra vida esperando semáforos en rojo.",
        "Tu corazón late unas 100.000 veces al día.",
        "Hay 206 huesos en el cuerpo humano adulto.",
        "El hueso más pequeño del cuerpo está en el oído.",
        "Los tiburones existían antes que los árboles.",
        "El agua caliente se congela más rápido que la fría (efecto Mpemba).",
        "El olor a hierba recién cortada es una señal de auxilio de la planta.",
        "Humanos y plátanos comparten el 50% de su ADN.",
        "Las botellas de plástico tardan 450 años en descomponerse en el mar.",
        "Los colibríes son las únicas aves que pueden volar hacia atrás.",
        "Un grupo de flamencos se llama una 'flamboyancia'.",
        "La Luna se aleja de la Tierra 3,8 cm cada año.",
        "Una medusa es un 95% agua.",
        "La nariz de los perros es tan única como nuestra huella dactilar.",
        "Las huellas de los koalas han llegado a confundir escenas del crimen."
    ],
    ca: [
        "Un dia a Venus dura més que un any a Venus.",
        "Les pomes suren perquè contenen un 25% d'aire.",
        "La mel no es fa malbé mai. S'ha trobat mel comestible en tombes egípcies.",
        "El cor d'una gamba és al seu cap.",
        "Els cargols poden dormir fins a tres anys.",
        "Les petjades a la Lluna duraran milions d'anys.",
        "El Sol representa el 99,86% de la massa del sistema solar.",
        "Els plàtans són baies, però les maduixes no.",
        "Els pops tenen tres cors i sang blava.",
        "Un núvol pot pesar més de 500 tones.",
        "La caca dels uombats és cúbica perquè no rodi.",
        "El pes total de totes les formigues és igual al de tots els humans.",
        "La llengua d'una balena blava pesa tant com un elefant.",
        "Saturn suraria a l'aigua perquè és principalment gas.",
        "Venus és el planeta més calent, encara que Mercuri estigui més a prop del Sol.",
        "Les vaques tenen 'millors amigues' i s'estressen si se separen.",
        "Les dents humanes són tan fortes com les d'un tauró.",
        "Un llamp és cinc vegades més calent que la superfície del Sol.",
        "Les papallones Flower sabregen amb els peus.",
        "Els óssos polars tenen la pell negra i el pelatge transparent.",
        "El nucli de la Terra és tan calent com la superfície del Sol.",
        "Els perezosos poden trigar un mes a digerir un sol àpat.",
        "Els koales tenen empremtes dactilars úniques, com els humans.",
        "Les llúdries marines s'agafen de les mans al dormir per no separar-se.",
        "La Torre Eiffel pot ser 15 cm més alta durant l'estiu.",
        "Una cullerada d'una estrella de neutrons pesaria 6.000 milions de tones.",
        "Alguns metalls exploten al contacte amb l'aigua.",
        "La Gran Muralla Xinesa no es veu des de l'espai a ull nu.",
        "Hi ha més arbres a la Terra que estrelles a la Via Làctia.",
        "El teu cervell consumeix el 20% de l'energia total del cos.",
        "L'aigua pot bullir i congelar-se al mateix temps en certes condicions.",
        "Un dia a Júpiter dura només 10 hores.",
        "Conills i lloros poden veure darrere seu sense girar el cap.",
        "L'Antàrtida és el desert més gran del món.",
        "Glaceres i capes de gel contenen el 69% de l'aigua dolça del món.",
        "Passem uns 6 mesos de la nostra vida esperant semàfors en vermell.",
        "El teu cor batega unes 100.000 vegades al dia.",
        "Hi ha 206 ossos en el cos humà adult.",
        "L'os més petit del cos és a l'orella.",
        "Els taurons existien abans que els arbres.",
        "L'aigua calenta es congela més ràpid que la freda (efecte Mpemba).",
        "L'olor d'herba acabada de tallar és un senyal d'auxili de la planta.",
        "Humans i plàtans comparteixen el 50% del seu ADN.",
        "Les ampolles de plàstic triguen 450 anys a descompondre's al mar.",
        "Els colibrís són els únics ocells que poden volar cap enrere.",
        "Un grup de flamencos es diu una 'flamboyància'.",
        "La Lluna s'allunya de la Terra 3,8 cm cada any.",
        "Una medusa és un 95% aigua.",
        "El nas dels gossos és tan únic com la nostra empremta dactilar.",
        "Les empremtes dels koales han arribat a confondre escenes del crim."
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const lang = document.documentElement.lang || 'en';
    const currentFacts = facts[lang] || facts['en'];

    let currentIndex = Math.floor(Math.random() * currentFacts.length);

    function showNewFact() {
        factText.classList.add('fade-out');

        setTimeout(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * currentFacts.length);
            } while (nextIndex === currentIndex);

            currentIndex = nextIndex;
            factText.textContent = currentFacts[currentIndex];
            factText.classList.remove('fade-out');
        }, 500);
    }

    // Initial fact
    factText.textContent = currentFacts[currentIndex];

    // Auto rotation
    setInterval(showNewFact, 5000);
});
