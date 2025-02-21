console.log("JavaScript is running!");
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");
    
});


// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get necessary DOM elements
    const settingsButton = document.getElementById("settingsButton");
    const modal = document.getElementById("settingsModal");
    const closeButton = document.querySelector(".close-button");
    const fontSizeSlider = document.getElementById("fontSizeSlider");
    const languageSelect = document.getElementById("languageSelect");
    const readingArea = document.querySelector(".reading-area");
    const playButton = document.getElementById("playButton");  // Existing play button
    const pauseButton = document.getElementById("pauseButton"); // Existing pause button

    // Ensure all elements exist before proceeding
    if (!settingsButton || !modal || !closeButton || !fontSizeSlider || !languageSelect || !readingArea || !playButton || !pauseButton) {
        console.error("One or more elements are missing in the HTML.");
        return;
    }

    // Translations for Chapter 1
    const translations = {
        chapter1: {
            en: {
                title: "Chapter 1: The Horrors of War",
                paragraphs: [
                    "War is a horrid thing. It begins with an argument between two people who confront each other.",
                    "They fight, bringing everything and everyone with them to battle. Either side thinks they’ve won, but in truth, they only lost less.",
                    "They will never understand that when one side is no longer able to fight, and surrenders in hopes of stopping it.",
                    "War doesn’t end with a white flag. It seeps into the homes of families, into the minds of men.",
                    "The fathers who have served bring a piece of war with them when they return. Their children, influenced by it, grow up forever changed.",
                    "The men who return home have lost everything—their comrades, their faith, their hope.",
                    "Nightmares and sleeplessness haunt them, making the idea of home seem like an impossible dream.",
                    "It’s like a twisted trick on their minds, a burden too heavy for mortal men.",
                    "Leaders remain oblivious to the suffering happening in the homes of their people.",
                    "Children inherit their fathers' brokenness, and mothers long to heal what can never be fixed.",
                    "Politicians promise peace, but they’re the biggest keepers of lies. Nations cry for peace yet go to war for it.",
                    "And all of this is done in the name of God.",
                    "A God who watches, but never answers. A deity who’s seen humanity’s terrible deeds and remains silent.",
                    "You start to wonder if any Father could ignore the cries and howls of His children for thousands of years.",
                    "That’s because God is dead, and so, we will be too.",
                    "My name is Dawn. I am one of many. I am not part of any.",
                    "I came from nothing, born into something. Accepted by none, when I was young.",
                    "A boy born with a blessing or a curse. An adopted kid, I was. A cry and howl that made the Gods scowl."
                ]
            },
            es: {
                title: "Capítulo 1: Los Horrores de la Guerra",
                paragraphs: [
                    "La guerra es algo horrible. Comienza con una discusión entre dos personas que se enfrentan.",
                    "Luchan, llevando consigo todo y a todos a la batalla. Cada lado piensa que ha ganado, pero en verdad, solo han perdido menos.",
                    "Nunca entenderán que la guerra no termina cuando un lado ya no puede luchar, y se rinde con la esperanza de detenerla.",
                    "La guerra no termina con una bandera blanca. Se filtra en los hogares de las familias, en las mentes de los hombres.",
                    "Los padres que han servido traen consigo un pedazo de guerra cuando regresan. Sus hijos, influenciados por ella, crecen cambiados para siempre.",
                    "Los hombres que regresan a casa lo han perdido todo: sus camaradas, su fe, su esperanza.",
                    "Las pesadillas y el insomnio los atormentan, haciendo que la idea de hogar parezca un sueño imposible.",
                    "Es como un truco retorcido en sus mentes, una carga demasiado pesada para los hombres mortales.",
                    "Los líderes siguen ajenos al sufrimiento que ocurre en los hogares de su pueblo.",
                    "Los niños heredan la quebradura de sus padres, y las madres anhelan sanar lo que nunca se puede arreglar.",
                    "Los políticos prometen paz, pero son los mayores guardianes de mentiras. Las naciones claman por la paz pero van a la guerra por ella.",
                    "Y todo esto se hace en el nombre de Dios.",
                    "Un Dios que observa, pero nunca responde. Una deidad que ha visto las terribles acciones de la humanidad y permanece en silencio.",
                    "Empiezas a preguntarte si algún Padre podría ignorar los gritos y aullidos de Sus hijos durante miles de años.",
                    "Eso es porque Dios está muerto, y así, nosotros también lo estaremos.",
                    "Mi nombre es Dawn. Soy uno de muchos. No pertenezco a ninguno.",
                    "Vine de la nada, nacido en algo. Aceptado por nadie, cuando era joven.",
                    "Un niño nacido con una bendición o una maldición. Un niño adoptado, lo fui. Un llanto y aullido que hizo fruncir el ceño a los dioses."
                ]
            },
            fr: {
                title: "Chapitre 1 : Les Horreurs de la Guerre",
                paragraphs: [
                    "La guerre est une chose horrible. Elle commence par une dispute entre deux personnes qui s'affrontent.",
                    "Ils se battent, emmenant tout et tout le monde avec eux dans la bataille. Chacun pense avoir gagné, mais en vérité, ils ont seulement moins perdu.",
                    "Ils ne comprendront jamais que la guerre ne se termine pas quand un camp ne peut plus se battre et se rend dans l'espoir de l'arrêter.",
                    "La guerre ne se termine pas avec un drapeau blanc. Elle s'infiltre dans les foyers des familles, dans l'esprit des hommes.",
                    "Les pères qui ont servi rapportent un morceau de la guerre avec eux lorsqu'ils reviennent. Leurs enfants, influencés par cela, grandissent changés à jamais.",
                    "Les hommes qui rentrent chez eux ont tout perdu : leurs camarades, leur foi, leur espoir.",
                    "Les cauchemars et l'insomnie les hantent, rendant l'idée de foyer un rêve impossible.",
                    "C'est comme un tourment cruel dans leur esprit, un fardeau trop lourd pour les hommes mortels.",
                    "Les dirigeants restent indifférents à la souffrance dans les foyers de leur peuple.",
                    "Les enfants héritent des blessures de leurs pères, et les mères aspirent à guérir ce qui ne peut jamais être réparé.",
                    "Les politiciens promettent la paix, mais ce sont les plus grands gardiens du mensonge. Les nations pleurent la paix mais font la guerre pour elle.",
                    "Et tout cela est fait au nom de Dieu.",
                    "Un Dieu qui regarde, mais ne répond jamais. Une divinité qui a vu les actes terribles de l'humanité et reste silencieuse.",
                    "On commence à se demander si un Père pourrait ignorer les cris et les hurlements de Ses enfants pendant des milliers d'années.",
                    "C'est parce que Dieu est mort, et donc nous le serons aussi."
                ]
            },
            de: {
                title: "Kapitel 1: Die Schrecken des Krieges",
                paragraphs: [
                    "Krieg ist eine schreckliche Sache. Er beginnt mit einem Streit zwischen zwei Menschen, die sich gegenüberstehen.",
                    "Sie kämpfen und bringen alles und jeden mit in die Schlacht. Beide Seiten glauben, sie hätten gewonnen, aber in Wahrheit haben sie nur weniger verloren.",
                    "Sie werden nie verstehen, dass der Krieg nicht endet, wenn eine Seite nicht mehr kämpfen kann und in der Hoffnung aufhört.",
                    "Krieg endet nicht mit einer weißen Flagge. Er sickert in die Häuser der Familien, in die Köpfe der Männer.",
                    "Die Väter, die gedient haben, bringen ein Stück des Krieges mit, wenn sie zurückkehren. Ihre Kinder, beeinflusst von ihm, wachsen für immer verändert auf.",
                    "Die Männer, die nach Hause zurückkehren, haben alles verloren—ihre Kameraden, ihren Glauben, ihre Hoffnung.",
                    "Alpträume und Schlaflosigkeit verfolgen sie, sodass die Idee von zu Hause wie ein unerreichbarer Traum scheint.",
                    "Es ist wie ein verdrehter Trick auf ihren Köpfen, eine Last, die zu schwer für sterbliche Männer ist.",
                    "Führer bleiben ahnungslos gegenüber dem Leid, das in den Häusern ihres Volkes geschieht.",
                    "Kinder erben die Zerrissenheit ihrer Väter, und Mütter sehnen sich danach, das zu heilen, was niemals repariert werden kann.",
                    "Politiker versprechen Frieden, aber sie sind die größten Hüter von Lügen. Nationen schreien nach Frieden, gehen aber für ihn in den Krieg.",
                    "Und all das wird im Namen Gottes getan.",
                    "Ein Gott, der zuschaut, aber nie antwortet. Eine Gottheit, die die schrecklichen Taten der Menschheit gesehen hat und schweigt.",
                    "Man beginnt sich zu fragen, ob ein Vater das Weinen und Heulen seiner Kinder tausend Jahre lang ignorieren könnte.",
                    "Das ist, weil Gott tot ist, und wir werden es auch sein."
                ]
            }
        },
        chapter2: {
            en: {
                title: "Chapter 2: The War Beyond",
                paragraphs: [
                    "In this world, there was a great war. We call it the War Beyond",
                    "No one knew what happened in this war, it was before all of us came into this realm",
                    "This realm was called Nod",
                    "It was a realm with an infinite number of worlds ranging from mountains so huge they could block the sun from ever shining",
                    "Seas so deep you’d wonder if it even had a bottom, deserts so hot it was impossible for a normal human to survive for 3 hours there",
                    "And forests so diverse you could never fully explore it",
                    "This is what Nod is. It sounded wonderful for adventurers. In reality, it is hell",
                    "Nod is a realm where people got transported to, to fight, to go to war",
                    "Not with other humans, but with the monsters that inhabit Nod",
                    "Humanity as a species had survived the War Beyond, however, they evolved",
                    "Gaining abilities to help them live in the hellish and barren landscape of Earth",
                    "However, Earth was dying long before the war",
                    "It was after everyone was reborn again that most of us got our powers",
                    "The process was not understood at all, but scientists were getting closer",
                    "All we knew was some people died during their rebirth, while some did not get reborn and remained human",
                    "They were dependent on those who got their powers. Thus, a hierarchy was established"
                ]
            },
            es: {
                title: "Capítulo 2: La Guerra Más Allá",
                paragraphs: [
                    "En este mundo, hubo una gran guerra. La llamamos la Guerra Más Allá",
                    "Nadie sabía lo que sucedió en esta guerra, fue antes de que todos llegáramos a este reino",
                    "Este reino se llamaba Nod",
                    "Era un reino con un número infinito de mundos, desde montañas tan enormes que podían bloquear el sol para que nunca brillara",
                    "Mares tan profundos que te preguntarías si siquiera tenían fondo, desiertos tan calientes que era imposible para un humano normal sobrevivir allí por 3 horas",
                    "Y bosques tan diversos que nunca podrías explorarlos completamente",
                    "Esto es lo que es Nod. Sonaba maravilloso para los aventureros. En realidad, es el infierno",
                    "Nod es un reino al que las personas fueron transportadas, para luchar, para ir a la guerra",
                    "No con otros humanos, sino con los monstruos que habitan Nod",
                    "La humanidad como especie había sobrevivido a la Guerra Más Allá, sin embargo, evolucionaron",
                    "Ganando habilidades para ayudarlos a vivir en el paisaje infernal y árido de la Tierra",
                    "Sin embargo, la Tierra estaba muriendo mucho antes de la guerra",
                    "Fue después de que todos renacieran que la mayoría de nosotros obtuvimos nuestros poderes",
                    "El proceso no se entendía en absoluto, pero los científicos se estaban acercando",
                    "Lo único que sabíamos era que algunas personas murieron durante su renacimiento, mientras que otras no renacieron y permanecieron humanas",
                    "Dependían de aquellos que obtuvieron sus poderes. Así, se estableció una jerarquía"
                ]
            },
            fr: {
                title: "Chapitre 2 : La Guerre Au-delà",
                paragraphs: [
                    "Dans ce monde, il y a eu une grande guerre. Nous l'appelons la Guerre Au-delà",
                    "Personne ne savait ce qui s'était passé dans cette guerre, c'était avant que nous tous arrivions dans ce royaume",
                    "Ce royaume s'appelait Nod",
                    "C'était un royaume avec un nombre infini de mondes allant de montagnes si gigantesques qu'elles pouvaient bloquer le soleil pour qu'il ne brille jamais",
                    "Des mers si profondes que vous vous demanderiez si elles avaient même un fond, des déserts si chauds qu'il était impossible pour un humain normal de survivre pendant 3 heures là-bas",
                    "Et des forêts si diverses que vous ne pourriez jamais les explorer complètement",
                    "Voici ce qu'est Nod. Cela semblait merveilleux pour les aventuriers. En réalité, c'est l'enfer",
                    "Nod est un royaume où les gens sont transportés, pour se battre, pour aller à la guerre",
                    "Pas avec d'autres humains, mais avec les monstres qui habitent Nod",
                    "L'humanité en tant qu'espèce avait survécu à la Guerre Au-delà, cependant, elle a évolué",
                    "Gagnant des capacités pour les aider à vivre dans le paysage infernal et stérile de la Terre",
                    "Cependant, la Terre mourait bien avant la guerre",
                    "C'est après que tout le monde ait été renaît que la plupart d'entre nous avons obtenu nos pouvoirs",
                    "Le processus n'était pas du tout compris, mais les scientifiques s'en approchaient",
                    "Tout ce que nous savions, c'est que certaines personnes sont mortes pendant leur renaissance, tandis que d'autres ne sont pas renaissantes et sont restées humaines",
                    "Ils dépendaient de ceux qui ont obtenu leurs pouvoirs. Ainsi, une hiérarchie a été établie"
                ]
            },
            de: {
                title: "Kapitel 2: Der Krieg Jenseits",
                paragraphs: [
                    "In dieser Welt gab es einen großen Krieg. Wir nennen ihn den Krieg Jenseits",
                    "Niemand wusste, was in diesem Krieg geschah, es war bevor wir alle in dieses Reich kamen",
                    "Dieses Reich wurde Nod genannt",
                    "Es war ein Reich mit einer unendlichen Zahl von Welten, die von so riesigen Bergen reichten, dass sie die Sonne blockieren könnten, sodass sie nie schien",
                    "Meere so tief, dass man sich fragen würde, ob sie überhaupt einen Boden hatten, Wüsten so heiß, dass es für einen normalen Menschen unmöglich war, dort 3 Stunden zu überleben",
                    "Und Wälder so vielfältig, dass man sie nie ganz erkunden könnte",
                    "Das ist, was Nod ist. Es klang wunderbar für Abenteurer. In Wirklichkeit ist es die Hölle",
                    "Nod ist ein Reich, in das Menschen transportiert wurden, um zu kämpfen, um in den Krieg zu ziehen",
                    "Nicht mit anderen Menschen, sondern mit den Monstern, die Nod bevölkern",
                    "Die Menschheit als Spezies hatte den Krieg Jenseits überlebt, aber sie entwickelten sich weiter",
                    "Sie erlangten Fähigkeiten, die ihnen halfen, in der höllischen und öden Landschaft der Erde zu leben",
                    "Die Erde starb jedoch schon lange vor dem Krieg",
                    "Es war, nachdem alle wiedergeboren wurden, dass die meisten von uns ihre Kräfte erhielten",
                    "Der Prozess war überhaupt nicht verstanden, aber die Wissenschaftler kamen dem Ganzen näher",
                    "Alles, was wir wussten, war, dass einige Menschen während ihrer Wiedergeburt starben, während andere nicht wiedergeboren wurden und menschlich blieben",
                    "Sie waren von denen abhängig, die ihre Kräfte erhalten hatten. Daher wurde eine Hierarchie etabliert"
                ]
            }
        }
    };
    function updateLanguage() {
        const selectedLanguage = languageSelect.value;
    
        // Check the current chapter and get the corresponding translation
        let chapter = translations[currentChapter][selectedLanguage];
    
        // Clear previous content before adding new chapter
        readingArea.innerHTML = '';  
    
        if (chapter) {
            readingArea.innerHTML = `<h2>${chapter.title}</h2>`;
            chapter.paragraphs.forEach(paragraph => {
                const p = document.createElement("p");
                p.textContent = paragraph;
                readingArea.appendChild(p);
            });
        }
    }
    


    // Track the current chapter
    let currentChapter = 'chapter1';

    // Function to update text content based on selected language and chapter
    function updateContent() {
        const selectedLanguage = languageSelect.value;
        const chapter = translations[currentChapter][selectedLanguage];

        if (chapter) {
            readingArea.innerHTML = `<h2>${chapter.title}</h2>`;
            chapter.paragraphs.forEach(paragraph => {
                const p = document.createElement("p");
                p.textContent = paragraph;
                readingArea.appendChild(p);
            });
        }
    }

    // Function to update font size
    function updateFontSize() {
        const fontSize = fontSizeSlider.value;
        readingArea.style.fontSize = `${fontSize}px`;
    }

    // Variable to store the speech synthesis instance
    let currentUtterance = null;

    // Function to start text-to-speech
    function startTextToSpeech() {
        const selectedLanguage = languageSelect.value;
        const chapter = translations[currentChapter][selectedLanguage];

        if (chapter) {
            const speechText = [chapter.title, ...chapter.paragraphs].join(' ');

            // Create a new SpeechSynthesisUtterance object
            currentUtterance = new SpeechSynthesisUtterance(speechText);

            // Set the language of the speech based on the selected language
            if (selectedLanguage === 'de') {
                currentUtterance.lang = 'de-DE';  // German
            } else if (selectedLanguage === 'es') {
                currentUtterance.lang = 'es-ES';  // Spanish
            } else if (selectedLanguage === 'fr') {
                currentUtterance.lang = 'fr-FR';  // French
            } else {
                currentUtterance.lang = 'en-US';  // Default to English
            }

            // Speak the text
            window.speechSynthesis.speak(currentUtterance);
        }
    }

    // Function to pause the speech
    function pauseTextToSpeech() {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
        }
    }

    // Function to resume the speech
    function resumeTextToSpeech() {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
    }
    settingsButton.addEventListener("click", () => {
        modal.style.display = "block";
    });
    closeButton.addEventListener("click", () => {
        // Check if modal exists to avoid errors in case it's missing
        if (modal) {
            modal.style.display = "none";
        }
    });
    

    // Event listeners for language selection and chapter navigation
    languageSelect.addEventListener("change", updateContent);
    fontSizeSlider.addEventListener("input", updateFontSize);
    playButton.addEventListener("click", startTextToSpeech);  // Start speech when the play button is clicked
    pauseButton.addEventListener("click", pauseTextToSpeech); // Pause speech when the pause button is clicked

    // Event listeners to switch between chapters
    document.getElementById("chapter1Button").addEventListener("click", () => {
        currentChapter = 'chapter1';  // Set the current chapter to Chapter 1
        updateContent();  // Update the displayed content
    });

    document.getElementById("chapter2Button").addEventListener("click", () => {
        currentChapter = 'chapter2';  // Set the current chapter to Chapter 2
        updateContent();  // Update the displayed content
    });

    // Initialize content for Chapter 1
    updateContent();
});
