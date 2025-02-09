const library = [
	{
		book: {
			title: "El Señor de los Anillos",
			pages: 1200,
			genre: "Fantasía",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
			synopsis: "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
			year: 1954,
			ISBN: "978-0618640157",
			author: {
				name: "J.R.R. Tolkien",
				otherBooks: [
					"El Hobbit",
					"El Silmarillion"
				]
			}
		}
	},
	{
		book: {
			title: "Juego de Tronos",
			pages: 694,
			genre: "Fantasía",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
			synopsis: "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
			year: 1996,
			ISBN: "978-0553103540",
			author: {
				name: "George R. R. Martin",
				otherBooks: [
					"Choque de Reyes",
					"Tormenta de Espadas",
					"Festín de Cuervos"
				]
			}
		}
	},
	{
		book: {
			title: "Harry Potter y la piedra filosofal",
			pages: 223,
			genre: "Fantasía",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
			synopsis: "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
			year: 1997,
			ISBN: "978-0747532699",
			author: {
				name: "J.K. Rowling",
				otherBooks: [
					"Harry Potter y la cámara secreta",
					"Harry Potter y el prisionero de Azkaban",
					"Harry Potter y el cáliz de fuego"
				]
			}
		}
	},
	{
		book: {
			title: "1984",
			pages: 328,
			genre: "Ciencia ficción",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
			synopsis: "Una inquietante visión de un futuro distópico y totalitario.",
			year: 1949,
			ISBN: "978-0451524935",
			author: {
				name: "George Orwell",
				otherBooks: [
					"Rebelión en la granja"
				]
			}
		}
	},
	{
		book: {
			title: "Apocalipsis Zombie",
			pages: 444,
			genre: "Zombies",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg",
			synopsis: "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
			year: 2001,
			ISBN: "978-4444532611",
			author: {
				name: "Manel Loreiro",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Dune",
			pages: 412,
			genre: "Ciencia ficción",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
			synopsis: "En el inhóspito planeta desértico de Arrakis, una gran intriga política y familiar se desarrolla.",
			year: 1965,
			ISBN: "978-0441172719",
			author: {
				name: "Frank Herbert",
				otherBooks: [
					"El mesías de Dune",
					"Hijos de Dune"
				]
			}
		}
	},
	{
		book: {
			title: "La Guía del Autoestopista Galáctico",
			pages: 216,
			genre: "Ciencia ficción",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg",
			synopsis: "Un viaje absurdo y cómico por el espacio, con toallas.",
			year: 1979,
			ISBN: "978-0345391803",
			author: {
				name: "Douglas Adams",
				otherBooks: [
					"El restaurante del fin del mundo",
					"La vida, el universo y todo lo demás"
				]
			}
		}
	},
	{
		book: {
			title: "Neuromante",
			pages: 271,
			genre: "Ciencia ficción",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
			synopsis: "Una visión profética de la ciber-realidad y la inteligencia artificial.",
			year: 1984,
			ISBN: "978-0441569595",
			author: {
				name: "William Gibson",
				otherBooks: [
					"Conde Cero",
					"Mona Lisa Acelerada"
				]
			}
		}
	},
	{
		book: {
			title: "Fahrenheit 451",
			pages: 249,
			genre: "Ciencia ficción",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
			synopsis: "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
			year: 1953,
			ISBN: "978-1451673319",
			author: {
				name: "Ray Bradbury",
				otherBooks: [
					"Crónicas marcianas",
					"El hombre ilustrado"
				]
			}
		}
	},
	{
		book: {
			title: "El resplandor",
			pages: 688,
			genre: "Terror",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
			synopsis: "Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
			year: 1977,
			ISBN: "978-0307743657",
			author: {
				name: "Stephen King",
				otherBooks: [
					"Carrie",
					"It"
				]
			}
		}
	},
	{
		book: {
			title: "Drácula",
			pages: 418,
			genre: "Terror",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
			synopsis: "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
			year: 1897,
			ISBN: "978-0486411095",
			author: {
				name: "Bram Stoker",
				otherBooks: [
					"La joya de las siete estrellas",
					"La madriguera del gusano blanco"
				]
			}
		}
	},
	{
		book: {
			title: "Frankenstein",
			pages: 280,
			genre: "Terror",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg",
			synopsis: "Un científico obsesionado crea una criatura viva a partir de partes de cuerpos robadas, con consecuencias desastrosas.",
			year: 1818,
			ISBN: "978-0486282114",
			author: {
				name: "Mary Shelley",
				otherBooks: [
					"El último hombre",
					"Valperga"
				]
			}
		}
	},
	{
		book: {
			title: "La llamada de Cthulhu",
			pages: 43,
			genre: "Terror",
			cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
			synopsis: "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
			year: 1928,
			ISBN: "978-1542461690",
			author: {
				name: "H.P. Lovecraft",
				otherBooks: [
					"El horror de Dunwich",
					"En las montañas de la locura"
				]
			}
		}
	},
	{
		book: {
			title: "Caídos del Mapa",
			pages: 111,
			genre: "Literatura adolescente",
			cover: "https://m.media-amazon.com/images/I/91Ccauvz7EL._SY425_.jpg",
			synopsis: "Los protagonistas de este libro, el primero, de una saga de 11 titulos son cuatro adolescentes compañeros de séptimo grado. Un día, aburridos en la clase de Geografía, deciden escaparse y esconderse en el sótano de la escuela. Todo parece diversión hasta que los descubre la buchona del grado, que amenaza con contar su travesura si no la aceptan en el grupo. ¿Aceptarán los chicos o se arriesgarán a las consecuencias? Aventura, convivencia en el ambito escolar, amistad, amor, familia son el eje principal de estos relatos.",
			year: 1995,
			ISBN: "978-9875040274",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caídos del Mapa 2",
					"Caídos del Mapa 3"
				]
			}
		}
	},
	{
		book: {
			title: "Caídos del Mapa 2",
			pages: 223,
			genre: "Literatura adolescente",
			cover: "https://m.media-amazon.com/images/I/710O1uBr-AL._SY342_.jpg",
			synopsis: "Los cuatros amigos que conocimos esta a punto de terminar el septimo grado. Es tiempo de prepararse para el viaje, aun si sus padres y maestros interfieren en sus planes, y septumo grado A y B viajaran juntos?",
			year: 1995,
			ISBN: "978-9875040281",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caídos del Mapa",
					"Caídos del Mapa 3"
				]
			}
		}
	},
	{
		book: {
			title: "Caídos del Mapa 3",
			pages: 256,
			genre: "Literatura adolescente",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_798068-MLA32734390662_112019-F.webp",
			synopsis: "Nuestros cuatro amigos de Caídos del Mapa y Caídos del Mapa II, emprenden el tan ansiado viaje de egresados a La Falda. El viaje en micro, con un escondido tripulante y las vicisitudes que este personajeles ocasiona, nos entretienen y apasionan.",
			year: 1997,
			ISBN: "978-9509187931",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caídos del Mapa",
					"Caídos del Mapa 2"
				]
			}
		}
	},
	{
		book: {
			title: "La Casa De Bernarda Alba",
			pages: 41,
			genre: "Dramatico",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_770394-MLA41971004733_052020-F.webp",
			synopsis: "Tras la muerte de su segundo esposo, Bernarda Alba se recluye e impone un luto riguroso y asfixiante por ocho años, prohibiendo a sus cinco hijas a que vayan a la fiesta. Cuando Angustias, la primogénita y la única hija del primer marido, hereda una fortuna, atrae a un pretendiente, Pepe el Romano. El joven se compromete con Angustias, pero simultáneamente enamora a Adela, la hermana menor, quien está dispuesta a ser su amante. Durante un encuentro clandestino de los amantes, María Josefa, la madre de Bernarda que mantienen encerrada por su locura, sale con una ovejita en los brazos y canta una canción absurda pero llena de verdades. Cuando Bernarda se entera de la relación entre Adela y Pepe, estalla una fuerte discusión y Bernarda le dispara a Pepe, pero éste se escapa. Tras escuchar el disparo, Adela cree que su amante se haya muerto y se ahorca. Al final de la obra, Bernarda dice que Adela se murió virgen para guardar apariencias, y exige silencio, como en el comienzo de la obra.",
			year: 1945,
			ISBN: "978-3903352513",
			author: {
				name: "Federico García Lorca",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Los Paleolocos",
			pages: 160,
			genre: "Literatura adolescente",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_627574-MLA70483286875_072023-F.webp",
			synopsis: "Los paleontólogos se hacen muchas preguntas acerca de los dinosaurios. Matías y Santiago, con sus hermanos y amigos, realizarán el viaje más increíble de sus vidas y, al regresar, traerán algunas respuestas.",
			year: 2006,
			ISBN: "978-9500110389",
			author: {
				name: "Rodolfo Otero",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Los arboles mueren De pie",
			pages: 136,
			genre: "Dramatico",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_912432-MLA54358971332_032023-F.webp",
			synopsis: "Alejandro Casona juega con la fantasía y la realidad en el teatro. Estamos, y se ve desdela primera escena, ante una escenificación del teatro dentro del tetaro, no al modo pirandelliano, sino instrumentando elementos del vodevil. Esta obra nos ofrece un mundo tocado de fantasía y unos personajes que ejemplifican una idea moral. Desde la escena pretenden mostrar y demostrar al espectador el bien, la belleza, la vida en su expresión más genuina, bondadosa y maravillosa. Su función es orientar hacia el sendero de las fuentes cristalianas y limpias de una vida mejor.",
			year: 1949,
			ISBN: "978-8475059044",
			author: {
				name: "Alejandro Casona",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Los vecinos mueren en las novelas",
			pages: 140,
			genre: "Thriller",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_960962-MLA30765625267_052019-F.webp",
			synopsis: "Un joven escritor de novelas policiales, visita a una anciana, luego de que su mujer fuese a visitar a su padre; aunque en realidad se iba a ver con su amante. Ya en la casa de la vecina le cuenta que la va a matar con el fin de encubrir el asesinato que próximamente va a cometer contra su mujer.",
			year: 2000,
			ISBN: "097-89875457171",
			author: {
				name: "Sergio Aguirre",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "La increible y triste historia de cándida Eréndira y de su abuela desalmada",
			pages: 160,
			genre: "Realismo magico",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_904839-MLA32686544711_102019-F.webp",
			synopsis: "Es una obra en la que se trata ampliamente el tema de la prostitución de menores en el Caribe Sudamericano. Narra la historia extendida de Eréndira, una joven criada por su abuela desde que murió su padre.",
			year: 1972,
			ISBN: "978-0307350480",
			author: {
				name: "Gabriel García Márquez",
				otherBooks: [
					"Crónica de una muerte anunciada",
					"100 años de soledad"
				]
			}
		}
	},
	{
		book: {
			title: "Crónica de una muerte anunciada",
			pages: 118,
			genre: "Realismo magico",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_660968-MLA52574289790_112022-F.webp",
			synopsis: "Crónica de una muerte anunciada relata la historia del asesinato de Santiago Nasar, un joven de 21 años, con ascendencia árabe y católico, quien gobernaba la hacienda de su difunto padre y estaba comprometido con Flora Miguel.",
			year: 1981,
			ISBN: "978-1400034956",
			author: {
				name: "Gabriel García Márquez",
				otherBooks: [
					"La increible y triste historia de cándida Eréndira y de su abuela desalmada",
					"100 años de soledad"
				]
			}
		}
	},
	{
		book: {
			title: "100 años de soledad",
			pages: 132,
			genre: "Realismo magico",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_974987-MLA54937839449_042023-F.webp",
			synopsis: "Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo.",
			year: 1967,
			ISBN: "978-9871138142",
			author: {
				name: "Gabriel García Márquez",
				otherBooks: [
					"Crónica de una muerte anunciada",
					"La increible y triste historia de cándida Eréndira y de su abuela desalmada"
				]
			}
		}
	},
	{
		book: {
			title: "El Túnel",
			pages: 158,
			genre: "Thriller",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_949326-MLA28782785400_112018-F.webp",
			synopsis: "En una trama de amor y muerte que aborda la soledad del individuo contemporáneo, el pintor Juan Pablo Castel se debate por comprender las causas que lo arrastraron a matar a la mujer que amaba, María Iribarne, y que era su única vía de salvación.\nEn este alucinante drama de la vida interior, seres intrincados en la bestial búsqueda de sentido ceden a la mentira, la hipocresía y los celos desmedidos. Aventura amorosa, aventura onírica, aventura del ser que brinda testimonio de un asesinato, de cierta memoria culpable y de una valiente introspección.\nPara quien todavía no la leyó, El túnel es la mejor introducción al universo prodigioso de Ernesto Sabato; para quien la conoce, un clásico de las letras del continente, una historia sobre el drama del hombre arrojado en el sinsentido más doloroso: la conciencia de la nada.",
			year: 1948,
			ISBN: "978-9875806023",
			author: {
				name: "Ernesto Sábato",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "El Puente",
			pages: 160,
			genre: "Dramatico",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_908801-MLA26944580848_032018-F.webp",
			synopsis: "Dos escenarios bien distintos pero continuos. La casa de una familia bien acomodada por un lado, y la vereda, por fuera de la misma casa, por el otro. En cada lugar, sus integrantes esperan la llegada de dos personas que trabajan en la construcción de un puente y desde la noche anterior no han regresado a sus hogares. La familia de la casa espera la llegada del ingeniero. Los chicos de la barra, junto a la madre y su hermana, esperan a Andrés, un joven obrero. El puente de la construcción, como alegoría, nos muestra una utopía de unión entre las clases, pero que sin embargo, se termina derrumbando.",
			year: 1993,
			ISBN: "978-9505811069",
			author: {
				name: "Carlos Gorostiza",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "La nona",
			pages: 112,
			genre: "Dramatico",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_800709-MLA51042541960_082022-F.webp",
			synopsis: "Es la historia de la decadencia de una familia que al tener que mantener a una vieja de cien años (La Nona), que a medida que pasa el tiempo tiene más hambre y vitalidad, cae en la ruina económica.",
			year: 1977,
			ISBN: "978-9500515368",
			author: {
				name: "Roberto Cossa",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Gaturro y los piratas del tesoro perdido",
			pages: 126,
			genre: "Literatura Infantil",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_915080-MLC51247857501_082022-F.webp",
			synopsis: "Un viernes muy atípico en la oficina del padre, la empresa decide realizar una extraña competencia: el que comiera la mayor cantidad de panchos, ganaría ¡un viaje en crucero por el Caribe para toda su familia! Y lo gana nada más y nada menos que el padre de Gaturro. Toda la familia se embarca en el lujoso crucero, pero avanzado el camino Gaturro y su pandilla empieza a encontrar pistas y descubren que ese barco esconde el mapa de un gran tesoro hundido en el fondo del mar. Cuando Gaturro y Ágatha encuentran ese mapa son descubiertos por un pirata que luego de perseguirlos logra raptar a la gata y con eso obliga a a Gaturro a bajar al fondo del mar para rescatar el tesoro, ¡con lo que les gusta el agua a los gatos! Pero eso no es lo más tenebroso, sino que ese gran tesoro está custodiado por monstruos marinos y nadie ha sobrevivido a semejante prueba. ¿Sobrevivirá Gaturro para contarla?",
			year: 2013,
			ISBN: "097-89500758949",
			author: {
				name: "Nik",
				otherBooks: [
					"Gaturro y la mansión del terror",
					"Gaturro y el misterio de las cinco Agathas"
				]
			}
		}
	},
	{
		book: {
			title: "Gaturro y la mansión del terror",
			pages: 128,
			genre: "Literatura Infantil",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_632543-MLA40288458320_122019-F.webp",
			synopsis: "Los amigos de Gaturro planean un picnic para festejar su cumpleaños, pero de camino al campo, los sorprende una tormenta y deben refugiarse en la única casa que hay en los alrededores: una mansión un tanto sospechosa. Los reciben allí un mayordomo y una cocinera, y para sorpresa de los gatitos, la dueña de casa, que los confunde sus propios gatos perdidos, los llama con otros nombres y los mima y los alimenta en exceso... no es que tantas buenas atenciones le molesten a Gaturro, pero cuánto pueden valer como para soportar una noche de pesadilla: con fantasmas que los quieren ahuyentar, un camionero loco que los persigue y un mayordomo y una cocinera que intentan servirlos, ¡pero para la cena!",
			year: 2008,
			ISBN: "978-9500757478",
			author: {
				name: "Nik",
				otherBooks: [
					"Gaturro y los piratas del tesoro perdido",
					"Gaturro y el misterio de las cinco Agathas"
				]
			}
		}
	},
	{
		book: {
			title: "Gaturro y el misterio de las cinco Agathas",
			pages: 123,
			genre: "Literatura Infantil",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_671565-MLA54287695184_032023-F.webp",
			synopsis: "Una noche, Gaturro escucha la llamada desesperada de Ágatha, la gata de sus sueños, y se mete en la alcantarilla para buscarla. La búsqueda lo lleva hasta una isla encantada, en donde encuentra no a una si no a cinco gatas, todas idénticas. Así emprende un recorrido para descifrar las pistas que liberarán a la verdadera Ágatha.",
			year: 2008,
			ISBN: "978-9500757461",
			author: {
				name: "Nik",
				otherBooks: [
					"Gaturro y los piratas del tesoro perdido",
					"Gaturro y la mansión del terror"
				]
			}
		}
	},
	{
		book: {
			title: "Gaturro y la maldición de Tutangatón",
			pages: 126,
			genre: "Literatura Infantil",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_760550-MLU32604832184_102019-F.webp",
			synopsis: "La tía abuela Irene recibe un jarrón del Antiguo Egipto decorado con piedras incrustadas y jeroglíficos.\nGaturro nunca antes había visto nada semejante y no tuvo mejor idea que meter las garras. Una de las más fantásticas aventuras jamás vivida por una mascota del siglo XXI entre pirámides, faraones, catacumbas y maldiciones.",
			year: 2009,
			ISBN: "978-9500730013",
			author: {
				name: "Nik",
				otherBooks: [
					"Gaturro y el Regreso de los Zombis",
					"Gaturro y La Invasion Extraterrestre"
				]
			}
		}
	},
	{
		book: {
			title: "Gaturro y el Regreso de los Zombis",
			pages: 144,
			genre: "Literatura Infantil",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_645421-MLU43036207715_082020-F.webp",
			synopsis: "Es el séptimo título de esta exitosísima serie que tiene a Gaturro como protagonista. Siempre presentes, la aventura y el humor también acompañan a Gaturro en esta nueva historia: un relato repleto de zombis, conjuros y pócimas mágicas y muchos espectros que salen de sus tumbas. ¿Podrán Gaturro, gatha y Gachicera reconvertir a los zombis ?",
			year: 2012,
			ISBN: "978-9500760638",
			author: {
				name: "Nik",
				otherBooks: [
					"Gaturro y la maldición de Tutangatón",
					"Gaturro y La Invasion Extraterrestre"
				]
			}
		}
	},
	{
		book: {
			title: "Gaturro y La Invasion Extraterrestre",
			pages: 128,
			genre: "Literatura Infantil",
			cover: "https://http2.mlstatic.com/D_NQ_NP_2X_631712-MLA41521245926_042020-F.webp",
			synopsis: "Gaturro descubre que quienes habitan en los cuerpos de su familia son extraterrestres que han venido a la Tierra para destruirla. Gaturro toma rápidamente una decisión: emprender un viaje a través del espacio para salvar a la Tierra y a su querida familia.",
			year: 2013,
			ISBN: "978-9500757966",
			author: {
				name: "Nik",
				otherBooks: [
					"Gaturro y la maldición de Tutangatón",
					"Gaturro y el Regreso de los Zombis"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 4",
			pages: 252,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040304_1.jpg?id_com=1113",
			synopsis: "El último día llegó. Séptimo era un descontrol. Los chicos se abrazaban y lloraban. La alegría de fin de curso, la tristeza por la separación, las ganas y el temor al secundario, todo se mezclaba en charlas a los gritos.",
			year: 2001,
			ISBN: "978-9875040304",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 5",
					"Caidos del mapa 6"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 5",
			pages: 256,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040458_1.jpg?id_com=1113",
			synopsis: "Graciela se aburrió de buscar información en la compu y entró al Messenger. Echó una mirada a la lista de nombres conectados; ninguno le pareció interesante. Compañeros de teatro, de la escuela y... Miriam como siempre pidiendo que la incluya en la lista. Estaba a punto de desconectarse cuando la sorprendió un nuevo mensaje. -¿Fede?- se dijo extrañada. ¿Era el que ella pensaba? Nuestros cuatro amigos han comenzado una nueva etapa: el secundario. Separados por el colegio, distanciados por ciertas peleas, se vuelven a unir para festejar el súper cumpleaños de Paula.\nCon aventuras que incluyen intrigas por e-mail, un intento de hacerle creer a Miriam que sería 'secuestrada' por extraterrestres y hasta un sorprendente rescate, continúa esta divertidísima saga.\nCon más acción, algo de romance y mucha amistad, esta historia, actual y divertida, atrapará a jóvenes lectores.",
			year: 2004,
			ISBN: "978-9875040458",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 4",
					"Caidos del mapa 6"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 6",
			pages: 254,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040465_1.jpg?id_com=1113",
			synopsis: "Graciela cumple quince años y está preparando su gran fiesta. Por supuesto, quiere que Fabián, Federico y Paula compartan este momento con ella, pero Paula tiene prohibido, desde hace un año, cualquier tipo de contacto con sus amigos. Los padres la vigilan, cortaron Internet, la llevan y la traen de la escuela y no la dejan atender el teléfono.\nPaula lo intenta todo pero sin éxito por el momento.\nAventuras y desventuras de cuatro amigos que se jugarán por su amistad.\nComo en los libros anteriores, no podrás parar de leer, ya que te sentirás partícipe en esta gran novela pensada y escrita para vos.",
			year: 2005,
			ISBN: "978-9875040465",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 4",
					"Caidos del mapa 5"
				]
			}
		}
	},
	{
		book: {
			title: "LA SCALONETA",
			pages: 72,
			genre: "Literatura Infantil",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789878151632_1.jpg?id_com=1113",
			synopsis: "Un libro para conocer a fondo a Scaloni, al cuerpo técnico y a cada uno de los jugadores que formaron parte de este equipo inolvidable. Descubrí datos curiosos e inéditos de cada uno de ellos. ¡Y que la felicidad de Qatar 2022 no se termine nunca.\nNadie nace campeón. ¡Tampoco un equipo de fútbol! La Scaloneta se formó, creció, entrenó duro y superó muchos obstáculos hasta alcanzar la victoria. En el camino, mantuvo casi sin aliento a millones de argentinos y argentinas de todas las edades, pegados a la pantalla, hinchando en cada partido, cantando Muchachos una y mil veces.\nMillones de chicos y chicas como vos, soñando con sumar una estrella más a la camiseta.",
			year: 2023,
			ISBN: "978-9878151632",
			author: null
		}
	},
	{
		book: {
			title: "MESSI, CAMPEON DEL MUNDO",
			pages: 48,
			genre: "Literatura Infantil",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789878151335_1.jpg?id_com=1113",
			synopsis: "Sabes quien era el idolo de Messi cuando era chico? Conoces todos los titulos que gano Leo a lo largo de su carrera? Queres conocer todo lo que paso en este Mundial? Pone a prueba los conocimientos sobre tu idolo y dejate sorprender con la historia del mejor jugador del Mundial Qatar 2022, campeon de la Copa America y de la Copa del Mundo.",
			year: 2023,
			ISBN: "978-9878151335",
			author: null
		}
	},
	{
		book: {
			title: "DIBU MARTINEZ: PASION POR EL FUTBOL",
			pages: 112,
			genre: "Literatura Infantil",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789878940182_1.jpg?id_com=1113",
			synopsis: "El fútbol es su gran pasión, eso Dibu Martinez lo sabe desde que era muy chico. En la playa con su hermano y los Mostris, el fútbol era cosa de todos los días. La preparación y el compromiso fueron siempre sus guías. ¿Cómo se llega a ser uno de los mejores arqueros del mundo? ¿Cómo se persiguen los sueños? Siempre para adelante, siempre poniendo garra y esforzándose. íY que la pasión te lleve a la gloria! «Emi logró transitar un camino exitoso. Tuvo obstáculos, pero los fue atravesando con paciencia y grandeza. La pasión y la determinación lo llevaron a donde está hoy y por eso es un gran ejemplo para todos». Pepe Santoro",
			year: 2022,
			ISBN: "978-9878940182",
			author: {
				name: "Emiliano Martinez",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "7. Komi-San no puede comunicarse",
			pages: 400,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788419600516_1.jpg?id_com=1113",
			synopsis: "Hitohito Tadano acaba de empezar bachillerato anhelando que sea un período de paz y tranquilidad, pero sus planes se truncan cuando acaba sentado al lado de la perfecta Shoko Komi. Ella es guapa, inteligente, educada y hasta huele bien. Pero tiene 0 dotes sociales y no sabe cómo narices comunicarse con los demás. Es ahí cuando Tadano decide tomar cartas en el asunto y se propone ayudar a su compañera hasta que consiga cien amigos, y con suerte algo más.",
			year: 2023,
			ISBN: "978-8419600516",
			author: {
				name: "Oda Tomohito",
				otherBooks: [
					"1. Komi-San no puede comunicarse",
					"2. Komi-San no puede comunicarse"
				]
			}
		}
	},
	{
		book: {
			title: "1. Komi-San no puede comunicarse",
			pages: 400,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788418837791_1.jpg?id_com=1113",
			synopsis: "Hitohito Tadano acaba de empezar bachillerato anhelando que sea un período de paz y tranquilidad, pero sus planes se truncan cuando acaba sentado al lado de la perfecta Shoko Komi. Ella es guapa, inteligente, educada y hasta huele bien. Pero tiene 0 dotes sociales y no sabe cómo narices comunicarse con los demás. Es ahí cuando Tadano decide tomar cartas en el asunto y se propone ayudar a su compañera hasta que consiga cien amigos, y con suerte algo más.",
			year: 0,
			ISBN: "978-8418837791",
			author: {
				name: "Oda Tomohito",
				otherBooks: [
					"2. Komi-San no puede comunicarse",
					"7. Komi-San no puede comunicarse"
				]
			}
		}
	},
	{
		book: {
			title: "2. Komi-San no puede comunicarse",
			pages: 400,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788418963513_1.jpg?id_com=1113",
			synopsis: "Hitohito Tadano acaba de empezar bachillerato anhelando que sea un período de paz y tranquilidad, pero sus planes se truncan cuando acaba sentado al lado de la perfecta Shoko Komi. Ella es guapa, inteligente, educada y hasta huele bien. Pero tiene 0 dotes sociales y no sabe cómo narices comunicarse con los demás. Es ahí cuando Tadano decide tomar cartas en el asunto y se propone ayudar a su compañera hasta que consiga cien amigos, y con suerte algo más.",
			year: 2021,
			ISBN: "978-8418963513",
			author: {
				name: "Oda Tomohito",
				otherBooks: [
					"1. Komi-San no puede comunicarse",
					"7. Komi-San no puede comunicarse"
				]
			}
		}
	},
	{
		book: {
			title: "3. Mieruko - Chan",
			pages: 200,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788419451910_1.jpg?id_com=1113",
			synopsis: "Mieruko es una chica normal y corriente de instituto que vive su vida tranquila mente hasta que un día empieza a ver horribles monstruos allá donde va y es la única consciente de su presencia. Aunque tenga miedo, decide que lo mejor es no hacerles caso y continuar con su vida como si no pasara nada. Ignorar a los monstruos, a cada cual más grotesco y espantoso, no significa que la pobre no sufra con las terroríficas apariciones y a veces tenga que ac tuar para que los seres no se ensañen con sus amigos y su familia, pero todo lo hace desde la posición más estoica posible. ¿Por qué Mieruko es capaz de ver a esas criaturas y además es la única que puede hacerlo ?",
			year: 2022,
			ISBN: "978-8419451910",
			author: {
				name: "Izumi Tomoki",
				otherBooks: [
					"2. Mieruko - Chan"
				]
			}
		}
	},
	{
		book: {
			title: "2. Mieruko - Chan",
			pages: 200,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788419383662_1.jpg?id_com=1113",
			synopsis: "Mieruko es una chica normal y corriente de instituto que vive su vida tranquila mente hasta que un día empieza a ver horribles monstruos allá donde va y es la única consciente de su presencia. Aunque tenga miedo, decide que lo mejor es no hacerles caso y continuar con su vida como si no pasara nada. Ignorar a los monstruos, a cada cual más grotesco y espantoso, no significa que la pobre no sufra con las terroríficas apariciones y a veces tenga que ac tuar para que los seres no se ensañen con sus amigos y su familia, pero todo lo hace desde la posición más estoica posible. ¿Por qué Mieruko es capaz de ver a esas criaturas y además es la única que puede hacerlo?",
			year: 2022,
			ISBN: "978-8419383662",
			author: {
				name: "Izumi Tomoki",
				otherBooks: [
					"3. Mieruko - Chan"
				]
			}
		}
	},
	{
		book: {
			title: "4. Konosuba !",
			pages: 400,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788419010384_1.jpg?id_com=1113",
			synopsis: "Kono Subarashii Sekai ni Shukufuku wo!, popularmente conocido como Konosuba, es uno de los isekai que más ha dado que hablar por su desternillante y surrealista humor mezclado con elementos roleros.\nKazuma Sato es un hikikomori que disfruta como un bellaco con los videojuegos, el manga y el anime. Un día decide salir de su casa, sufre un desafortunado accidente y fallece. Cuál es su sorpresa al ver que aparece en un limbo junto a una diosa llamada Aqua que le ofrece enviarlo a un nuevo mundo con tintes roleros y -además- concederle un deseo. Pero antes, Aqua se ocupa de humillarlo porque la muerte que él pensaba que había sido heroica salvando a una chica de ser atropellada, resulta ser lo más patética y cutre que te puedas echar a la cara. Lo único que se le ocurre al bueno de Kazuma es usar su deseo para que Aqua lo acompañe al nuevo mundo y se una a él en sus peripecias para derrotar al Rey Demonio.",
			year: 2021,
			ISBN: "978-8419010384",
			author: {
				name: "Watari Masahito",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "4. Somos Quintillizas",
			pages: 200,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788418271489_1.jpg?id_com=1113",
			synopsis: "Fûtarô Uesugi, un estudiante de bachillerato, lleva una vida de penurias económicas con su padre y su hermana pequeña… hasta que un día recibe la oportunidad de ser profesor particular, ¡y el sueldo no está nada mal!\nNo obstante, resulta que sus alumnas son unas chicas de su mismo instituto y, por si fuera poco, ¡son quintillizas! Todas son muy guapas, pero detestan estudiar y están al borde del fracaso escolar… ¡¿Conseguirá Fûtarô guiarlas a todas en su arduo camino hasta la graduación?!",
			year: 2020,
			ISBN: "978-8418271489",
			author: {
				name: "Haruba Negi",
				otherBooks: [
					"5. Somos Quintillizas"
				]
			}
		}
	},
	{
		book: {
			title: "5. Somos Quintillizas",
			pages: 230,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788418450570_1.jpg?id_com=1113",
			synopsis: "Fûtarô Uesugi, un estudiante de bachillerato, lleva una vida de penurias económicas con su padre y su hermana pequeña… hasta que un día recibe la oportunidad de ser profesor particular, ¡y el sueldo no está nada mal!\nNo obstante, resulta que sus alumnas son unas chicas de su mismo instituto y, por si fuera poco, ¡son quintillizas! Todas son muy guapas, pero detestan estudiar y están al borde del fracaso escolar… ¡¿Conseguirá Fûtarô guiarlas a todas en su arduo camino hasta la graduación?!",
			year: 2021,
			ISBN: "978-8418450570",
			author: {
				name: "Haruba Negi",
				otherBooks: [
					"4. Somos Quintillizas"
				]
			}
		}
	},
	{
		book: {
			title: "Superman : Arriba , En El Cielo",
			pages: 400,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789877247985_1.jpg?id_com=1113",
			synopsis: "¡Superman echa a volar en esta emocionante aventura!. Unos alienígenas han abducido a una niña llamada Alice, y Superman está decidido a localizarla en algún punto del cielo. El Hombre de Acero hará lo indecible durante la búsqueda y aceptará numerosos desafíos. Boxeará contra Mighto, evitará un ataque con misiles espaciales y combatirá junto al Sargento Rock en la Segunda Guerra Mundial. Mientras esté fuera, se preocupará por los habitantes de Metropolis y también por Lois Lane, el amor de su vida, y no podrá evitar plantearse un dilema filosófico importante: ¿es correcto salvar a una sola persona en lugar de centrarse en salvar a miles?",
			year: 2023,
			ISBN: "978-9877247985",
			author: {
				name: "King Tom",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Batman : El Detective",
			pages: 160,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789878190099_1.jpg?id_com=1113",
			synopsis: "¡Nueva miniserie! ¡Nuevos villanos! ¡Nuevos aliados! ¡Una emocionante aventura del Caballero Oscuro narrada por los creadores superestrella Tom Taylor y Andy Kubert! Una terrible tragedia ocurrida en el Reino Unido pone en alerta al Caballero Oscuro. ¡Batman viaja al otro lado del Atlántico para investigar! Lejos de Gotham City, el Caballero Oscuro se enfrentará con la ayuda de nuevos aliados a un complicado caso y a adversarios nunca vistos.",
			year: 2022,
			ISBN: "978-9878190099",
			author: {
				name: "Kubert Taylor",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Batman / Fortnite: Punto Cero",
			pages: 152,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789877249798_1.jpg?id_com=1113",
			synopsis: "¡Cada número de la miniserie incluye un código de descarga que puedes canjear en tu partida de Fortnite! ¡Consigue contenidos exclusivos de DC! ¡Todo termina aquí! Batman y Catwoman tienen una oportunidad de regresar a su mundo natal. Pero para hacerlo, tendrán que regresar a la batalla infinita que se libra en la Isla y rescatar a alguien que tiene la clave de todo: ¡la mismísima Harley Quinn! ¿Quien está detrás de la llegada de los personajes de DC a Fornite? La respuesta está en esta última entrega. Fortnite y el Universo DC están a punto de cambiar para siempre.",
			year: 2022,
			ISBN: "978-9877249798",
			author: {
				name: "Gage Christos",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Wonder Woman : Sensacional Wonder Woman",
			pages: 160,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789877249620_1.jpg?id_com=1113",
			synopsis: "¡UNA SENSACIONAL CELEBRACIÓN DE WONDER WOMAN!\nCelebrando el 80 aniversario de Wonder Woman, Sensacional Wonder Woman explora todo lo que vuelve a la Amazona la sensacional heroína amada por el mundo. ¡Incluye historias de Stephanie Phillips, Meghan Hetrick, Andrea Shea, Meghan Hetrick, Colleen Doran, Dani Strips, Alyssa Wong y muchos otros increíbles dibujantes!",
			year: 2022,
			ISBN: "978-9877249620",
			author: null
		}
	},
	{
		book: {
			title: "Liga De La Justicia Infinita : El Espejo Quebrado",
			pages: 160,
			genre: "Cómics y Manga",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789878190068_1.jpg?id_com=1113",
			synopsis: "Un ser atraviesa el universo buscando su verdadero propósito, ¡pero lo que encuentre en la otra punta del cosmos no solo afectará a nuestra realidad, sino a muchas más! En todo el planeta, la gente empieza a desaparecer y ser reemplazada por individuos similares, ¡y eso incluye a Superman! ¿Quién es su malvada contraparte, el monstruoso Overman?",
			year: 2022,
			ISBN: "978-9878190068",
			author: null
		}
	},
	{
		book: {
			title: "Caidos del mapa 7",
			pages: 240,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040472_1.jpg?id_com=1113",
			synopsis: "Graciela se tiene que ir a vivir a España con su familia. La noticia causa gran conmoción en el grupo, especialmente en Paula, que a toda costa quiere hacer algo para evitar el viaje. Pero Graciela está deprimida y malhumorada. ¿Qué va a pasar ahora con Federico? Ni siquiera quiere oír hablar del tema. Todos buscan soluciones y lo único que encuentran son problemas. Para colmo, Miriam, como siempre, complica mucho más las cosas.\n¿Encontrarán la forma de hacer que Graciela se quede o tendrán que separarse para siempre?",
			year: 2007,
			ISBN: "978-9875040472",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 8",
					"Caidos del mapa 9"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 8",
			pages: 250,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040250_1.jpg?id_com=1113",
			synopsis: "¿Cuánto cuesta un pasaje de idea y vuelta a Madrid? Los cuatro amigos están separados, y esta vez, por un océano entero. MIentras Graciela intenta adaptarse a su nueva vida en España, Paula Fabián y Fede planean secretamente su mejor y más arriesgada aventura: conseguir pasajes a Madrid y sorprender a su amiga con un reencuentro ''de película''. Como era de imaginar, juntar el dinero no será el único inconveniente para llegar a destino... Nuevos trabajos, viejos enemigos, interminables sorpresas. ¿Lograrán los chicos cumplir su sueño? La famosa saga de María Inés Falconi está llegando a su fin. ¡No te pierdas la oportunidad de formar parte de esta aventura!.",
			year: 2009,
			ISBN: "978-9875040250",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 7",
					"Caidos del mapa 9"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 9",
			pages: 272,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040489_1.jpg?id_com=1113",
			synopsis: "Paula, Federico y Fabián acababan de llegar a España, a Zamora, donde Graciela vivía ahora, junto a su familia. No habían llegado solos: Miriam y su mamá los acompañaban.\nDesde Buenos Aires, todos juntos. En Zamora, todos juntos.\nEn la casa de Graciela, todos juntos. No era difícil sospechar por qué estaban tan callados... ¿Cómo lograr que Miriam no esté presente en cada charla, en cada momento? En el noveno libro de la saga Caídos del Mapa, los cuatro amigos viven un reencuentro soñado... hasta que entienden que convivir con Miriam también es parte del viaje. Con secretos inconfesables de por medio y nuevos planes descabellados, el grupo tendrá que superar varios problemas para compartir las vacaciones perfectas. Finalmente, ¿volverá Graciela a la Argentina?",
			year: 2010,
			ISBN: "978-9875040489",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 7",
					"Caidos del mapa 8"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 10",
			pages: 286,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040687_1.jpg?id_com=1113",
			synopsis: "Una vez más, el grupo encabezado por Paula, Graciela, Fede y Fabián, unos acá y otros allá, en España, se ven envueltos en un mar de confusiones y malos entendidos.\nEncuentro y desencuentros, provocados por el robo del celular de Fede, se entremezclan y ponen de relieve algunas de las formas actuales de comunicarse a distancia. En este caso, una de las formas de incomunicación, porque al no tener su celu, Fede pierde los números de sus padres, de sus amigos, íy de Graciela! Entonces, todos, hasta la policía, se ven envueltos en una serie de complicaciones a las que la intervención de la eterna 'metida' de Miriam convierte en contratiempos.\nLos seguidores de esta saga se divertirán y disfrutarán, como siempre, con las aventuras de este increíble grupo.",
			year: 2012,
			ISBN: "978-9875040687",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 11",
					"Caidos del mapa 12"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 11",
			pages: 240,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875040991_1.jpg?id_com=1113",
			synopsis: "Todo empieza con un mensaje publicado en Facebook donde la escuela Belgrano anuncia que organiza una gran fiesta de despedida. Quien escribe esas líneas invita a los alumnos, ex alumnos, docentes, padres y amigos a la reunión.\nAsí, la comunidad escolar de ayer y de hoy, se entera de que alguien se va, tal vez, para siempre. Entonces, Paula, Graciela, Miriam, Fede, Fabián y alguien más que aparece en medio de un encuentro sorpresivo se movilizan.\nLa escuela vuelve a ser el escenario que despierta recuerdos y emociones. Muchos encuentros hacen revivir a los chicos la eterna historia que los une o los separa.\nEn esta aventura, que puede ser la última, el grupo divierte con sus insólitas ocurrencias una vez más. Y, una vez más, los caídos del mapa confirman su pacto incondicional de amistad.",
			year: 2013,
			ISBN: "978-9875040991",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 10",
					"Caidos del mapa 12"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 12",
			pages: 160,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875041776_1.jpg?id_com=1113",
			synopsis: "Se cumplen 10 años de egresados de séptimo grado y… ¡Miriam se propone festejarlo en grande! Para eso, invita a sus compañeros a una fiesta en la cual la única condición es llevar un objeto y una anécdota de la Primaria para compartir con el grupo. Aunque la vida los está llevando por caminos diferentes, Fede, Fabián, Graciela y Paula se encontrarán una vez más recordando viejos tiempos, travesuras, amores, desamores, historias y secretos nunca antes revelados, en el medio de una guerra cibernética de fotos trucadas y hackers que los pondrá en guardia y volverá a unirlos como antes. ¿Podrán los chicos descubrir quién es el hacker? ¿Qué ocurrirá con la reunión de egresados? Y, finalmente, ¿serán los amigos, amigos por siempre?",
			year: 2016,
			ISBN: "978-9875041776",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 10",
					"Caidos del mapa 11"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 13",
			pages: 144,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875043909_1.jpg?id_com=1113",
			synopsis: "Los años pasaron y los chicos crecieron. Luego de su última aventura en Caídos del Mapa 12, Paula, Fabián, Federico, Graciela y Miriam son ahora adultos con trabajos, responsabilidades e hijos. Y es acerca de ellos que trata esta nueva historia.  \nJulieta, la hija de Fede y Graciela, está muy emocionada porque sus amigas irán a una movilización importante y no puede esperar para sumar su voz y, por supuesto, compartir el momento con ellas. Pero con lo que no cuenta es que sus padres no están de acuerdo con que vaya. Ante esto, ¡Julieta se escapa del colegio! Todo es un caos: llamadas, mensajes, desencuentros y el recuerdo de las travesuras de cuando ellos eran niños hacen que este momento sea tragicómico.\nMaría Inés Falconi nos trae nuevas aventuras de los personajes más queridos de la exitosa saga Caídos del Mapa con un agregado especial, la nueva generación. La generación Z.",
			year: 2020,
			ISBN: "978-9875043909",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 12",
					"Caidos del mapa 14"
				]
			}
		}
	},
	{
		book: {
			title: "Caidos del mapa 14",
			pages: 160,
			genre: "Literatura adolescente",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789875044807_1.jpg?id_com=1113",
			synopsis: "Año 2020. En todo el mundo se desata una pandemia, por culpa de un virus mortal, que obliga a todas las personas a cuidarse quedándose en sus casas, sin salidas, salvo para ir a comprar lo indispensable para la vida. La convivencia ENCERRADOS se vuelve imposible: compartir computadoras, reuniones virtuales todo el tiempo, cables por toda la casa, pilas y pilas de cajas con comida, desinfectantes, barbijos y alcohol en gel. A pesar de todo esto, Graciela, Federico, Paula, Fabián y Miriam tratan de pasarlo lo mejor posible, aunque los hijos no opinan igual. Entre tanta comunicación virtual por redes sociales, Agustina esconde un problema a los demás: su mejor amiga la presiona para que grabe videos comprometedores para subir a TikTok. ¿Quién ve estos videos? Julieta, Francisco y Felipe notan que algo raro pasa y deciden intervenir asustados por la situación.\nUna historia que sigue a la nueva generación de Caídos del Mapa en medio de una pandemia global. ¡Bienvenidos a la generación Z!",
			year: 2022,
			ISBN: "978-9875044807",
			author: {
				name: "María Inés Falconi",
				otherBooks: [
					"Caidos del mapa 13",
					"Caidos del mapa 12"
				]
			}
		}
	},
	{
		book: {
			title: "El Amor Es Imposible",
			pages: 416,
			genre: "Filosofia",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789501204070_1.jpg?id_com=1113",
			synopsis: "Qué significa que el único amor verdadero sea el amor imposible? ¿Es el amor lo que suponemos que es? O antes que eso, ¿es lo imposible aquello definido como lo inalcanzable, lo inconsumable, lo inenarrable? ¿Y si fueran las preguntas lo que hay que cambiar porque es en la imposibilidad del encuentro amoroso donde radica su verdad?\nEste libro es una propuesta de deconstrucción radical sobre uno de los eventos más radicales de nuestra existencia. Ocho tesis que tienen el arrojo de devenir en una serie de desvelos, nuevas intuiciones, destellos que nos inviten a temblar. Es la puesta en página de una práctica política concreta, que increpa a ese amor comercial, romántico, que se nos vende como domi-nante, como único y normativo. Es ir a martillazos contra esa arquitectura sentimental sostenida por el sentido común, por definiciones y naturalezas forzadas. Y entonces, sí: categorías cristalizadas como la pareja, la familia, la media naranja y el primer amor, entre otras, son puestas en evidencia, caen bajo su propio peso: se rompen.\nEl amor es imposible conduce al insomnio, y de ahí a una revolución íntima y perturbadora comandada por el deseo genuino de la intranquilidad: no queremos estar en donde estamos. Un trabajo de años, de lecturas y de diálogos en el que Darío Sztajnszrajber pone una vez más, al alcance de quienes estén dispuestos a jugar el juego, las herramientas de la filosofía para desandar lo andado, rebelarse y exigir siempre, aunque suene a destiempo y desubicado, animarse a lo imposible.",
			year: 2023,
			ISBN: "978-9501204070",
			author: {
				name: "Sztajnszrajber Dario",
				otherBooks: [
					"Filosofia A Martillazos Tomo 1",
					"¿ Para Que Sirve La Filosofia ?"
				]
			}
		}
	},
	{
		book: {
			title: "¿ Para Que Sirve La Filosofia ?",
			pages: 344,
			genre: "Filosofia",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789501297072_1.jpg?id_com=1113",
			synopsis: "Para qué sirve la filosofía? La pregunta que da título a este libro es la primera de una serie que se abre a lo largo de sus páginas. ¿Quién dijo que debería servir para algo? Si buscamos una primera respuesta en la definición misma de la palabra ¿la filosofía como amor al saber?, antes debemos elegir entre dos alternativas: ¿se trata de buscar el saber y alegrarnos cuando creemos haberlo encontrado o de aceptar que no vamos a encontrar lo que estamos buscando?\nLa historia de la filosofía occidental está estructurada sobre la base de un pensamiento de opuestos que necesitó de ciertos conceptos para decir lo suyo: el bien y el mal, lo verdadero y lo falso, el ser y la nada, lo útil y lo inútil. Según esta lógica, no vendría a servir para nada. ¿Pero si, como propusieron los filósofos contemporáneos, fuera posible salir de esa dicotomía? Es en esta grieta donde se sitúa Darío Sztajnszrajber para demostrar que la filosofía no es más que una manera de pensar. De los presocráticos a Derrida y de Platón a Heidegger, el autor sigue la pista del crujido que escuchamos cuando sentimos que las cosas tal vez no sean como creíamos. Contra el método y cualquier tipo de sistema, y en un afán por devolverle su espíritu original, ¿Para qué sirve la filosofía? recorre la historia de la disciplina, demuele ideas y nuestra propia vida.",
			year: 2018,
			ISBN: "978-9501297072",
			author: {
				name: "Sztajnszrajber Dario",
				otherBooks: [
					"Filosofia A Martillazos Tomo 1",
					"El Amor Es Imposible"
				]
			}
		}
	},
	{
		book: {
			title: "Filosofia A Martillazos Tomo 1",
			pages: 312,
			genre: "Filosofia",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789501298284_1.jpg?id_com=1113",
			synopsis: "Es un día laboral, es de noche, es invierno: ¿quién asistiría a una clase de filosofía? Contra el sentido común, los oyentes colmaron teatros y auditorios al aire libre para escuchar a Darío Sztajnszrajber hablar de temas eternos, como el amor, o contemporáneos, como la posverdad, desde una perspectiva filosófica.\nEl autor de Filosofía en 11 frases (el título más vendido en la Argentina de 2018) retoma ahora la tradición de clases públicas que luego se convierten en libros y elige seis para dar forma al primer tomo de esta Filosofía a martillazos, un texto que conserva la frescura del tono coloquial de sus exposiciones, incluidos sus diálogos con el público amplio que fue a escucharlo.\nEsta introducción a grandes temas y grandes autores -de Platón a Jacques Derrida, de Friedrich Nietzsche a Karl Marx, de san Pablo a Roberto Esposito- lleva al lector no especializado en filosofía, animadamente, con toques de humor y los desvíos propios de las conversaciones, hacia las complejidades de un saber que se brinda así a pensar la vida cotidiana. Una travesía fascinante por cuestiones claves que es, a la vez, una introducción y un examen profundo.",
			year: 2029,
			ISBN: "978-9501298284",
			author: {
				name: "Sztajnszrajber Dario",
				otherBooks: [
					"El Amor Es Imposible",
					"¿ Para Que Sirve La Filosofia ?"
				]
			}
		}
	},
	{
		book: {
			title: "Messi Crack",
			pages: 128,
			genre: "Literatura Infantil",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788419743237_1.jpg?id_com=1113",
			synopsis: "Conocé cómo fue su infancia en Rosario y los primeros pasos en el fútbol local, el ascenso fenomenal de su carrera en el Bar §a, donde se consagró como figura y leyenda, y el sorprendente pase al PSG. Por su talento inigualable y su extraordinario rendimiento, conquistó los títulos más importantes de la historia del fútbol y obtuvo los premios más grandes, entre ellos el Balón de Oro en siete oportunidades. Y aun así, continuó trabajando hasta alcanzar su mayor sueño: íser campeón del mundo con la selección argentina!",
			year: 2023,
			ISBN: "978-8419743237",
			author: {
				name: "Mugford Simon",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Algun Tiempo Atras : La Vida De Gustavo Cerati",
			pages: 608,
			genre: "Musica",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789500768764_1.jpg?id_com=1113",
			synopsis: "La perfección es inalcanzable. Sin embargo, Gustavo Cerati la buscó con fuerza y pasión en su arte. En conexión con ese espíritu irreductible, Algún tiempo atrás. La vida de Gustavo Cerati aborda el recorrido vital y creativo del hombre y del artista con la misma conciencia -la de que hay enigmas de imposible resolución- pero sin limitarse jamás en su afanosa investigación.\nDecidido a recuperar la parte más luminosa de esta figura única, la de uno de los músicos argentinos de mayor proyección internacional, Sergio Marchi no deja rincón sin visitar: en procura tanto del compositor e intérprete que trascendió masivamente con Soda Stereo y luego se reinventó en una extraordinaria carrera solista, como del hijo de una familia trabajadora que -dato que suele olvidarse bajo el prejuicioso mito del \"cheto\"- llegó desde el interior del país a la Buenos Aires de los 50; del niño travieso, curioso y activo; del adolescente insaciable que conoció la ebullición rockera de los 70; de ese muchacho que supo que habría de hacerse a sí mismo a fuerza de talento y también de trabajo.\nDel ser enamoradizo que encontró en las mujeres un manantial inagotable de inspiración, mucho amor y no pocos padecimientos; del marido y padre que anheló ser. Del obrero musical que muy poca gente conoció; que experimentó con el rock, el pop, la electrónica, con la tecnología y con sus pelos. Y de la estrella hábil, escurridiza y audaz que lidió con adversidades externas e internas y supo sortear muchas de las trampas de la fama. Del hombre que transitó varias lunas y unas cuantas vidas.\nEn virtud de una investigación minuciosa, una multitud de entrevistas exclusivas a otros artistas, amigos y allegados, y un archivo personal enorme forjado a través de una relación de años que fue un vínculo profesional pero también de afecto y complicidad, Marchi pone en juego las múltiples dimensiones de este hacedor de universos, desbarata algunas falsas creencias y recupera la magia de un personaje a la vez mítico",
			year: 2023,
			ISBN: "978-9500768764",
			author: {
				name: "Marchi Sergio",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Infancia Y Juventud",
			pages: 400,
			genre: "Musica",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789504977421_1.jpg?id_com=1113",
			synopsis: "Asi comienza: \"De niño conoci el olor de la muerte\". Y asi (logicamente) termina: \"Continuara...\". En el medio, cuatrocientas paginas de memorias cuyo etiquetado frontal debiera advertir: altas en emocion, agudisimas en cultura pop, refinadas, bestiales, amorosas, explicitas.\nFito Paez paso el encierro pandemico recordando y escribiendo, repasando y puliendo episodios, ajustando cuentas y desarreglando todo lo demas, en un ejercicio de instrospeccion al que la palabra 'prodigioso' le queda pintada.\nDe la infancia rosarina narrada en travelling virtuoso al apogeo de su juventud con la locura de El amor despues del amor, el recorrido es, como los mejores caminos, largo y sinuoso. Infinidad de escenarios, nombres, lugares, viajes, anecdotas, homenajes, borracheras... y la tragedia y el amormarcando el ritmo de un relato que parece rapsodia: una sumade partes que hace de este libro de memorias una larga cancion perfecta.",
			year: 2021,
			ISBN: "978-9504977421",
			author: {
				name: "Fito Paez",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "La Musica De Astor Piazzolla",
			pages: 272,
			genre: "Musica",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789873823701_1.jpg?id_com=1113",
			synopsis: "¿ Quien fue Astor Piazzolla? Un compositor de tango con competencias ampliadas por su formación academica o un académico que decidió volcar sus intereses hacia la musica popular? Renovadora, rupturista y polemica, su obra es significativa en ambos mundos. Mucho se ha escrito sobre la vida de este innegable expositor del genero porteño en el mundo, pero nunca antes de este libro se habia abordado su musica de manera integral.\nLuego de treinta años de labor pionera en el análisis musicológico del tango, de la musica popular y de Piazzolla en particular, Omar Garca Brunelli nos propone pensar al gran bandoneonista desde una perspectiva que combina su faceta académica y popular, y nos guia en un recorrido por los mecanismos, innovaciones y derivas que hacen que su musica se mantenga vital y vigente.\nLa musica de Astor Piazzolla es lectura obligatoria para expertos e iniciados, pero también una puerta de entrada para quienes se acercan por primera vez a esta apasionante musica.",
			year: 2017,
			ISBN: "978-9873823701",
			author: {
				name: "Garcia Brunelli Omar",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Freddie Mercury . La Historia Del Gran Mito Del Rock.",
			pages: 176,
			genre: "Musica",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788494879951_1.jpg?id_com=1113",
			synopsis: "Junto a Mick Jagger, Robert Plant y Roger Daltrey, Freddie Mercury ha encarnado al prototipo de \"animal escénico\" total, y ha dejado una huella indeleble en el imaginario colectivo de, como mínimo, tres generaciones de amantes de la música. Además de una propensión innata por la teatralidad y una voz única, de su personaje excesivo, irónico e intencionadamente provocador se han señalado siempre características que poco tenían que ver ni con el hombre ni con el artista.\nEn general, los comentarios se han inclinado por el cotilleo sobre aspectos de su vida, más que por su música. Peor, y más frecuente, ha sido la poca atención que se le ha prestado en tanto que músico excelente. Bastaría con un tema genial e inmortal, \"Bohemian Rhapsody\", para desmentir la idea de que Mercury era solo un buen cantante y un intérprete asombroso, pero la lista de éxitos que ascendieron en las clasificaciones y las perlas diseminadas en todos los álbumes de Queen son más explícitas que cualquier análisis.\nFreddie era único, porque unía un timbre reconocible al instante con una gran capacidad para utilizar una voz fuera de lo común. Además de ser un genio absoluto de la música. Pensemos en su manera de tocar el piano, rompía esquemas y era personal como pocos. Su desaparición conmovió a buena parte del mundo y contribuyó de manera decisiva a la lucha contra una enfermedad que, hasta ese momento, se trataba con desprecio. \"Siempre echaremos de menos tu sensibilidad y tu inspiración, y conservaremos aquel toque de locura que hicimos nuestro adorando tu manera de ser artista. Pero nunca dejaremos de cantar tus canciones.\"",
			year: 2022,
			ISBN: "978-8494879951",
			author: {
				name: "Garro Luca",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Adios Cachorra",
			pages: 208,
			genre: "Romance",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789504979395_1.jpg?id_com=1113",
			synopsis: "No estar en pareja esta bien, separarse esta bien, tener apps de citas esta bien, salir y divertirse esta bien. Lo que no esta bien bajo ningún punto de vistas es que sigamos permitiendo que la frustración que nos genera el ghosting, las cancelaciones de los encuentros a último momento, los chats abandonados, las promesas incumplidas por parte de gente que recién habíamos comenzado a conocer nos llenen de inseguridades, dudas y autoboicot.\nEn esta graciosa ficción, tres mujeres con distintas personalidades y a quienes el mundo de las primeras citas les resulta un enigma se conocerán en un viaje. Ava, una australiana de treinta años que decide irse a Paris despues de una última salida fallida con uno de Tinder que la rechazó y que encima olía a salchichas, huevo y arroz. Oli, una arquitecta de veintisiete años, estadounidense y millonaria que resuelve irse a la Ciudad Luz luego de descubrir que Ben, uno con el que se vió una vez por semana durante dos años y que supuestamente 'no estaba para nada serio', se puso de novio con otra. Elsa, una española que atraviesa una crisis existencial porque se divorcio de su marido de toda la vida y sus hijos ya son grandes y no la demandan como antes.\nAllí conocerán a Lili, una argentina de cuarenta años que en su pasado lo único que tenia eran miles de intentos de relaciones fallidas y no entendía por que. Esa frustración la llevo a buscar soluciones en libros de sociología, psicología, neurociencia y divulgacion feminista. Su investigación la condujo a encontrar respuestas a su dilema y desde entonces sus citas son siempre un éxito. Lili las ayudara a entender por que no consiguen pasar de los primeros encuentros y les dará herramientas para lograr ser autenticas y vistas en todas esas oportunidades. Y vos, lectora, estas lista para hackear el mundo citero?.",
			year: 2023,
			ISBN: "978-9504979395",
			author: {
				name: "Numer Lucia",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Farsa de amor a La Española",
			pages: 512,
			genre: "Romance",
			cover: "https://contentv2.tap-commerce.com/cover/large/9789877478518_1.jpg?id_com=1113",
			synopsis: "Catalina esta desesperada. Cuatro semanas no son demasiado para que encuentre a alguien dispuesto a acompañarla a la boda de su hermana al otro lado del Atlantico, y menos aun que finja que la ama. Pero lo mas ridiculo de todo es que sea Aaron Blackford, su compañero de trabajo al que no soporta, quien se ofrezca a hacerlo. Ahora Lina deberá sopesar que es peor: aguantar a Aaron, con su aire petulante y sus ojos de hielo, o admitirle a su familia que ha mentido y que es todo una farsa. Como diría su abuela: que Dios nos pille confesados.",
			year: 2022,
			ISBN: "978-9877478518",
			author: {
				name: "Elena Armas",
				otherBooks: [
				]
			}
		}
	},
	{
		book: {
			title: "Amor Inesperado",
			pages: 392,
			genre: "Romance",
			cover: "https://contentv2.tap-commerce.com/cover/large/9788418509018_1.jpg?id_com=1113",
			synopsis: "Solo se una cosa con certeza: no puedo enamorarme de Jake Connelly. Reconozco que nunca se me ha dado bien atacar las normas, pero tengo muy claro que no puedo traicionar la confianza de mi padre. Es el entrenador del equipo de hockey sobre hielo de la Universidad Briar, y eso me impide confraternizar con el arrogante y atractivo Jake Connelly, la estrella del equipo de Harvard, nuestro máximo rival.\nPero el destino es caprichoso y Jake es el único que puede ayudarme a conseguir unas practicas como periodista deportiva. Cual es el plan? Pedirle que se haga pasar por mi novio para que me den el puesto. El inconveniente? Jake quiere salir conmigo de verdad, y ese es el precio que debere pagar por su ayuda... Cada vez me cuesta mas resistirme a los encantos de Jake, pero me niego a enamorarme de mi gran rival: es un riesgo que no estoy dispuesta a correr. La nueva entrega de la autora best seller de Kiss Me.",
			year: 2022,
			ISBN: "978-8418509018",
			author: {
				name: "Kennedy Elle",
				otherBooks: [
				]
			}
		}
	}
];
const total = 70;
const genres = [
	"Fantasía",
	"Ciencia ficción",
	"Zombies",
	"Terror",
	"Literatura adolescente",
	"Dramatico",
	"Thriller",
	"Realismo magico",
	"Literatura Infantil",
	"Cómics y Manga",
	"Filosofia",
	"Musica",
	"Romance"
];
const BOOKS = {
	library: library,
	total: total,
	genres: genres
};

function getAllGenres(){

    // const genres = new Set();

    // BOOKS.library.forEach(({book}) => {

    //     genres.add(book.genre);
    // });

    // console.log(genres)

    // return genres;

    return BOOKS.genres;
}



function getBooksByISBN(ISBN){

    return BOOKS.library.filter(({book}) => {

        return book.ISBN === ISBN;
    })
}


//? Get books with filters

const COMPARATORS = {

    genre: (book, genre) => {

        if(genre.match(/Todos/i)) return true;//<---

        return book.genre === genre;
    },

    pages: (book, pages) => {

        pages = Number(pages);

        return book.pages <= pages;
    }
};

function getBooksBy(filters = {}){

    const queries = Object.entries(filters).filter(([key, value]) => value);

    if(queries.length === 0) return BOOKS.library;


    return BOOKS.library.filter(({book}) => {

        let flag = true;

        queries.forEach(([key, value]) => {

            const compareFn = COMPARATORS[key];

            if(compareFn){

                flag &&= compareFn(book, value);
            }
        });

        return flag;
    });
}



//? Search

function searchBooks(search, filters = {}){

    const resultSearch = BOOKS.library.filter(({book}) => {

        let flag = false;

        const regex = new RegExp(`${search}`, 'gi');

        const targets = [book.title, book.genre, book.author?.name];

        targets.forEach(value => {

            if(value){

                const normalizedValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                const match = normalizedValue.match(regex);

                if(match) flag = true;
            }
        });

        return flag;
    });


    //* Applying filters
    const queries = Object.entries(filters).filter(([key, value]) => value);

    if(queries.length === 0) return resultSearch;

    return resultSearch.filter(({book}) => {

        let flag = true;

        queries.forEach(([key, value]) => {

            const compareFn = COMPARATORS[key];

            if(compareFn){

                flag &&= compareFn(book, value);
            }
        });

        return flag;
    });
}

const get = async ({params, request}) => {

    const ISBN = params.ISBN;

    const [book] = getBooksByISBN(ISBN);

    if(!book) return new Response(null, {

        status: 404,
        statusText: 'Libro no encontrado'
    });

    return new Response(JSON.stringify(book), {

        status: 200,

        headers: {
            "Content-Type": "application/json"
        }
    })
};

const _ISBN_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get
}, Symbol.toStringTag, { value: 'Module' }));

export { _ISBN_ as _, getBooksBy as a, getBooksByISBN as b, getAllGenres as g, searchBooks as s };
