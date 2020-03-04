import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PhotoBgText from '../components/PhotoBGText';
import PhotoBgSvg from '../components/PhotoBgSvg';

import ImageBg from '../images/bg-patagonia.jpg';
import ImageLogoEng from '../images/logo_uky-portrait_eng.svg';
// import ImageLogoEsp from '../images/logo_uky-portrait_esp.svg';
// import Typist from 'react-typist';
// import ReactHtmlParser from 'react-html-parser';

import styled from 'styled-components';

const Investigacion = styled.p`
	color: black !important;
	font-family: 'Courier New', Courier, monospace;
	text-align: left;
	max-width: 80vw;
	padding-top: 5vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	a {
		color: black !important;
		&::before {
			content: " ";
		}
		&::after {
			content: " ";
		}
	}
`;

const VimeoIframe = styled.div`
	text-align: center;
	margin: 0 auto;
	background: black;
	padding: 5rem;
`;

class Research extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<Layout>
				<Seo
					title="Uky y Lola - En tierra del Fuego"
					keywords={[ `Uky & Lola`, `Land of Fire`, `3d animation`, `digital` ]}
				/>
				<PhotoBgSvg imageUrl={ImageLogoEng} propsBgImage={ImageBg} />
				<PhotoBgText text="Investigación Periodística y documental" propsBgImage="" />

				<VimeoIframe>
					<iframe
						src="https://player.vimeo.com/video/10588852"
						width="100%"
						height="360"
						frameborder="0"
						allow="autoplay; fullscreen"
						allowfullscreen
					/>
				</VimeoIframe>

				<Investigacion>
					<h2>Introducción</h2>
					<p>
						Desde de un punto de vista histórico y artístico, la cultura indígena de los Selk'nam de Tierra
						del Fuego, tiene una carga simbólica muy poderosa, ya sea en términos de su compleja cosmología
						y estética, pero también un legado perdido que nos muestra una manera diferente de entender la
						vida.
					</p>

					<p>
						“Uky y Lola, en tierra del Fuego” es una película de animación 3D, ambientada en 1890 en Tierra
						del Fuego. La historia se centra en un niño de 14 años llamado Uky, miembro de una tribu
						Selk'nam de la Patagonia. Basada en hechos reales, es a su vez una interpretación libre de la
						historia dentro de un universo fantástico, en donde la mitología y los espíritus y elementos de
						la naturaleza cobran vida.
					</p>
					<p>
						En este documento se encuentra la investigación antropológica, histórica, geográfica y cultural,
						además de la descripción en detalle de los personajes, localizaciones y la estructura base del
						guión para el film.
					</p>
					<p>
						Se encuentran también varias referencias de la época como el trabajo de Martín Gusinde y Anne
						Chapman, documentando los relatos de Lola Kiepja, quien co - protagoniza, el film , sumado a los
						sucesos históricos como la llegada del buscador de oro Julius Popper, entre otros; de esta
						forma, busca crear una reflexión sobre la desaparición de un modo de vida y una cultura
						totalmente diferente a las conocidas en la época.
					</p>

					<iframe
						width="300"
						height="300"
						src="https://www.youtube.com/embed/JjuE4LEsolE"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<h2>Investigación Antropológica</h2>

					<p>
						Los Selk'nam eran un pueblo nómada de cazadores y recolectores. La base de la organización era
						la familia: padre, madre e hijos, pero a ésta se incorporan los parientes que ocupaban el mismo
						territorio, llamado haruwen (tribu). Había muchos territorios perfectamente delimitados.
					</p>
					<p>
						Formaban "clanes" patrilineales de 40 a 120 miembros con jurisdicción sobre un territorio de
						caza.
					</p>
					<p>
						Dada las características insulares del territorio fueguino, el espacio fue organizado en función
						a su división, por medio de los
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DHaruwen%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720899000">
							haruwen
						</a>
						('nuestra tierra', 'nuestra patria'), que constituyeron la base de la organización social.
					</p>

					<p>2.1.1. Organización Política</p>
					<p>
						Su territorio estaba dividido en distintas porciones llamadas haruwen. En cada una de ellas
						vivían grupos de familias emparentadas, que se mudaban siguiendo la ruta de los animales que
						cazaban.
					</p>
					<p>
						• Las mujeres se encargaban de realizar las tareas domésticas, cuidar a los niños, transportar
						e instalar las viviendas, además de la recolección de mariscos y frutos silvestres.
					</p>

					<p>• Los hombres cazaban, confeccionaban armas y tomaban las decisiones importantes.</p>

					<p>
						• Por su parte los niños jugaban con arcos y flechas parecidos a los de sus papás y las niñas
						con muñecas hechas con madera y piel de guanaco.
					</p>
					<p>
						• Entre los Selk'nam no existían jefes permanentes sin embargo respetaban mucho a los ancianos,
						que conocían la historia de su pueblo y que podían curar a los enfermos.
					</p>

					<p>2.1.2. Organización Social</p>

					<p>
						El concepto de territorialidad del pueblo Selk'nam era extraordinariamente fuerte. Los
						individuos de un territorio o haruwen podían disponer libremente y de un modo racional de los
						recursos que existían en su interior, sin provocar su sobreexplotación y deterioro.
					</p>
					<p>
						Los Selk'nam estaban constituidos por dos grupos: los Selk'nam que habitaban el sector norte y
						central de la isla de Tierra del Fuego y los haush , localizados en el extremo sureste.
					</p>

					<p>
						Su economía de subsistencia estuvo basada en la caza terrestre, recolección de frutos
						silvestres, como la murtilla y el calafate y algunos productos marinos. La actividad de la caza,
						fue sin duda la base más importante en la alimentación, siendo el guanaco la presa más
						importante, tanto por su carne como por su piel, que constituía la vestimenta base. Fueron muy
						hábiles en el uso del arco y la flecha, su arma principal. En el sector norte de la isla la
						presa de caza más importante fue un pequeño roedor llamado cururo, muy abundante en la zona.
					</p>

					<p>
						Dentro de la organización social, un personaje de singular importancia era el chamán , a quien
						se atribuía poderes sobrenaturales y que hacía las veces de curandero, mago o brujo. Practicaban
						ritos de pasaje o transición, para celebrar el paso de una vida a otra, siendo la más
						trascendente la llamada hain, que tenía lugar cuando hombres y mujeres pasaban a la pubertad.
					</p>

					<p>2.1.3. Alimentación</p>

					<p>
						Como expertos en el uso del arco y la flecha, se dedicaban a la caza de guanacos, que usaban
						como vestimenta y alimentación, incluyendo también, zorros y aves como caiquenes, patos
						silvestres, cisnes y flamencos (por su carne o huevos), pero sobre todo el cururo, un roedor que
						abundaba en la zona.
					</p>

					<p>
						También, se dedicaban a la recolección de frutos silvestres, como la murtilla y el calafate,
						además de algunos vegetales.
					</p>

					<p>
						Los Selk'nam complementariamente extraían productos del litoral marino, como choritos, lapas,
						almejas y caracoles, además de la pesca con arpones de hueso de ballena.
					</p>

					<p>2.1.4. Armas y Utensilios</p>

					<p>
						Según los hallazgos arqueológicos en Tierra del Fuego y las conclusiones de algunas
						investigaciones antropológicas, las armas y utensilios que empleaban eran los siguientes :
					</p>

					<p>2.1.4.1 Boleadoras: Hechas de piedra y cuero de guanaco trenzado.</p>

					<p>2.1.4.2. Raspadores para cuero: P iedra pequeña para separar el cuero.</p>

					<p>2.1.4.3.Cuchillos: Hechos de valvas a filadas de choro gigante.</p>

					<p>
						2.1.4.4. Arpones de hueso de ballena: Hechos de una o dos barbas y que se usaban para la pesca.
					</p>

					<p>
						2.1.4.5. Flechas de pluma de ave: Los Selk'nam poseían una avanzada tecnología en la fabricación
						de flechas. La flechas eran construidas con dos barbas de pluma de ave que quemaban en sus
						bordes para emparejarlas y así alcanzar mayores distancias y precisión. Las ataban con tendones
						de guanaco ablandados por masticación, puntas de flecha del tipo ‘Cola de Pescado’, fabricadas
						de piedra y hueso de ballena.
					</p>

					<p>2.1.5. Vestimenta</p>
					<p>
						Era normal para los Selk'nam ir desnudos, pero para protegerse del frío y la lluvia, usaban una
						larga capa de piel de guanaco (podía ser de zorro o cururo), que los cubría desde el cuello
						hasta las rodillas o hasta los tobillos La empleaban con la piel hacia fuera y la llamaban
						chonhkoli.
					</p>

					<p>
						Usaban mocasines, zapatos fabricados con la piel de las extremidades del guanaco, cosidos con el
						pelo hacia fuera.
					</p>

					<p>
						Al pasar a la vida adulta, usaban una tiara triangular hecha de piel de guanaco que
						supuestamente los ayudaba a tener buena suerte en la cacería.
					</p>

					<p>2.1.6. Vivienda</p>
					<p>
						Construían dos tipos de viviendas: una para el invierno y otra para el verano. En invierno
						clavaban en el piso palos inclinados, formando un círculo y después los cubrían con cueros de
						guanaco. En el techo siempre quedaba una abertura para que saliera el humo de las fogatas que
						hacían. En verano estas casas eran más abiertas, con mayor ventilación.
					</p>
					<p>
						Cuando se mudaban, enrollaba los cueros alrededor de los palos y se llevaban la casa con ellos.
					</p>
					<p>2.3. Investigación Cultural</p>

					<p>2.3.1. Lenguaje Selk'nam</p>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/A1VV5jey904"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<p>
						El lenguaje Selk'nam recibía el mismo nombre del pueblo, es decir Selk'nam, se trata de una
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lenguas_chon&amp;sa=D&amp;ust=1562476720903000">
							lengua chon
						</a>
						extinta. Este idioma contaba con palabras de sonidos fuertes y difíciles de pronunciar.
					</p>

					<p>
						Las lenguas chon forman una familia de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lenguas_ind%25C3%25ADgenas_de_Am%25C3%25A9rica&amp;sa=D&amp;ust=1562476720904000">
							lenguas indígenas
						</a>
						de la
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Patagonia&amp;sa=D&amp;ust=1562476720904000">
							Patagonia
						</a>
						en
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Am%25C3%25A9rica_del_Sur&amp;sa=D&amp;ust=1562476720904000">
							América del Sur
						</a>
						. El grupo con el nombre tshon y en la forma que se lo concibe actualmente incluye al
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Idioma_tehuelche&amp;sa=D&amp;ust=1562476720904000">
							idioma
						</a>
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Idioma_tehuelche&amp;sa=D&amp;ust=1562476720905000">
							tehuelche
						</a>
						, hablado en
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Argentina&amp;sa=D&amp;ust=1562476720905000">
							Argentina
						</a>
						y cercano a la extinción, al
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DIdioma_teushen%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720905000">
							teushen
						</a>
						cercano al tehuelche y a las lenguas extintas de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Archipi%25C3%25A9lago_de_Tierra_del_Fuego&amp;sa=D&amp;ust=1562476720905000">
							Tierra del Fuego
						</a>
						, el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Selknam&amp;sa=D&amp;ust=1562476720905000">
							Selk'nam
						</a>
						y el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Mannekenk&amp;sa=D&amp;ust=1562476720906000">
							haush
						</a>
						. El término chon se tomó de la raíz que significa 'gente' en estas lenguas (
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Idioma_tehuelche&amp;sa=D&amp;ust=1562476720906000">
							tehuelche
						</a>
						č'ōnk 'gente','hombre'
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lenguas_chon%23cite_note-ref_duplicada_1-0&amp;sa=D&amp;ust=1562476720906000">
							1
						</a>
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Idioma_selk%2527nam&amp;sa=D&amp;ust=1562476720906000">
							Selk'nam
						</a>
						c'ón 'hombre ).
					</p>

					<p>Algunas palabras, con su correspondiente traducción al Castellano:</p>
					<p>Sol: Kran</p>
					<p>Luna: Kréen</p>
					<p>Noche: Kauk’n</p>
					<p>Día: Kerren</p>
					<p>Hombre: Chohn</p>
					<p>Mujer: Naa</p>

					<p>2.3.2. Cosmología</p>

					<p>
						Los Selk'nam pudieron considerarse monoteistas, ya que creían en un espíritu bondadoso supremo
						llamado Temáukel , que mantenía al mundo en orden. A él se encomedaban para pedir buena
						salud, un clima favorable y la abundancia de alimentos.
					</p>

					<p>
						Por otra parte los espíritus malos o Kaspei causaban enfermedades, accidentes y escasez de
						alimentos.
					</p>
					<p>
						El sol y la luna, tenían gran importancia para ellos. El sol, esposo de la luna, corría tras
						ella para castigarla sin alcanzarla, porque se consideraba que la luna era un espíritu maligno,
						representando la eterna lucha de los géneros desde la perspectiva patriarcal de los Selk'nam.
					</p>

					<p>
						Al chamán o sacerdote le llamaban Xo’on y era capaz de comunicarse con los espíritus. Además,
						conocía todas las hierbas necesarias para curar a los enfermos.
					</p>

					<p>
						Los Soortes se conformaron con posterioridad a la ejecución de las mujeres, estos eran siete de
						los hombres Selk'nam más fuertes los que constituyeron una choza en un lugar llamado Maustas, en
						donde celebraron la ceremonia del hain por primera vez, luego de su muerte se transformaron en
						seres del entorno natural.
					</p>

					<p>
						Los chamanes eran considerados los más importantes en la escala de jerarquía social. Casi nunca
						eran mujeres.
					</p>
					<p>
						La choza del Hain, era el microcosmos del Universo, y la ceremonia misma tenía cuatro objetivos:
					</p>
					<p>- Iniciar y entrenar a los jóvenes varones kokleten.</p>
					<p>- Disciplinar e intimidar a las mujeres.</p>
					<p>- Facilitar la interrelación social.</p>
					<p>- Cumplir una función religiosa.</p>
					<p>
						Estas funciones eran cumplidas y controladas por los chamanes, estableciendo lo sagrado y
						profano:
					</p>
					<p>
						- Lo sagrado: vincula la ceremonia ritual y la sociedad misma con sus orígenes mitológicos y con
						los poderes que emanan de la Naturaleza a través de poderes sobrenaturales.
					</p>
					<p>
						- Lo profano sirve a fines pragmáticos: iniciar a los jóvenes, disciplinar a las mujeres y
						divertir e intensificar el placer y la alegría de reunirse.
					</p>
					<p>
						Enlazan de esta manera lo sagrado y lo profano en la ceremonia, como sucede con el rito y el
						teatro.
					</p>
					<p>2.3.2.1. Mito de Kuanip</p>
					<p>
						En Hauwepen, cerca del Lago Cahme, apareció Kuanip, héroe libertador, hace ahora mucho tiempo.
					</p>
					<p>
						Algunos lo creyeron hijo del lago y de la montaña roja, pero en verdad era hijo de Kreeh (Luna)
						y Krren (Sol) enviado por Temaukel (Ser Supremo) en quien viven todos los seres.
					</p>
					<p>
						Kuanip vino a adoctrinar a los indios Selk'nam para liberarlos del horror antártico. A semejanza
						de Prometeo, trajo el fuego. Encendió el hogar, enseñó a las mujeres a educar a los niños y
						enseñó a los hombres a construir sus canoas, a armar el arco y las flechas, a pescar, a sobar la
						piel del guanaco, a husmear los rumbos, a soportar el frío, a presentir los vientos y a curar
						las enfermedades. Además, se encargó de adoctrinar a los primeros chamanes.
					</p>
					<p>
						Dio a los Selk'nam preceptos morales para regirse en la vida fundando en ellos la jerarquía,
						para que fueran gobernados por maestros. Explicó la esencia espiritual de las fuerzas naturales
						y el secreto de los Mehnes , espíritus invisibles que perduran en transformaciones y
						transmigraciones interminables.
					</p>
					<p>
						El mayor antagonismo de Kuanip en la persecución de los malos fue contra el demoníaco Siaskel,
						que vivía enterrado y cuya sangre era veneno.
					</p>
					<p>
						Así la naturaleza se humanizó en la religión de los Selk'nam y su visión del mundo se hizo
						maravillosa en belleza y de un animismo dramatizado.
					</p>
					<p>
						Cuando Kuanip terminó sus hazañas, se dirigió al interior de la Isla, hacia la parte del
						estrecho que hoy llaman de Le maire, retornó a su origen y se transformó en una estrella que
						puede verse en la noche del cielo austral.
					</p>

					<p>2.3.2.2. Los Espíritus (Kaspei)</p>

					<p>
						En el mundo Selk'nam los espíritus eran representados por hombres disfrazados; era posible
						reconocer a cada uno de los personajes por sus máscaras, pinturas características y por los
						movimientos de baile correspondientes. La particularidad y actuación de cada espíritu era
						determinada por la tradición y entre éstos existían grandes diferencias.
					</p>

					<p>2.3.2.2.1 Temáukel</p>

					<p>
						Temáukel, es el ser supremo en quien viven todos los seres, es el poder universal, es un ser que
						siempre fue y será, ya que jamás tuvo principio y nadie lo formó; y aunque todo en el universo
						se extinga, él siempre existirá y no tendrá fin.
					</p>

					<p>
						Temáukel, ya existía como un espíritu puro e infinito, más allá del principio de todo, en la
						nada misma; y en una de las cuatro cordilleras invisibles del cielo, conocida como Wintek ,
						Temáukel ejerce el poder universal. Ningún ser humano sabe cómo es Temáukel, ya que él nunca ha
						estado en la Tierra.
					</p>

					<p>
						En un principio, cuando no existía nada a excepción de Temáukel, el primero de los howenh
						(antiguos ancestros), él creó la cúpula celestial, el firmamento, que antes estaba desprovisto
						de estrellas. Posteriormente Temaukel enviaría a su hijo Kénos a dar forma y vida sobre la
						superficie del mundo y que se encargará de distribuir las tierras y sustentar la vida, y muy
						especialmente, que se ocupará de atender a la gente. Así, Temáukel observa a los seres humanos,
						pero no mantiene relaciones directas con ellos.
					</p>

					<p>2.3.2.2.2 Kenos</p>

					<p>
						Los Selk'nam mantenían el mito según el cual Kénos es una deidad con aspecto de anciano, quien
						fue el creador del mundo y posteriormente fue enviado a la Tierra por el espíritu Temaukel, su
						padre. Una vez en la Tierra, él había creado al Hombre.
					</p>

					<p>2.3.2.2.3 Xalpen</p>

					<p>
						El más importante de los espíritus malignos era Xalpen, ser femenino de gran poder y temido por
						hombres y mujeres. Vivía bajo la tierra y llamaba a los hombres para satisfacer deseos
						lujuriosos. “Se trata de un ser extremadamente peligroso, irritable, caprichosamente
						imprevisible, que con gran placer causa a los hombres las molestias más diversas. Los alterna
						para satisfacer con ellos sus deseos sexuales, sin tener en cuenta que bajo tierra, están
						permanentemente a su disposición, los iniciados del kloketen.
					</p>
					<p>
						En el término de un brevísimo lapso, y como resultado de estas uniones, da a luz un hijo llamado
						Keternen, por lo que se la considera una mujer de gran fuerza creadora. Se hace visible dos o
						tres veces como máximo durante la ceremonia del hain, bajo la forma de una ballena que se
						desliza un muy corto trecho por el suelo. A causa de sus arbitrariedades es odiada por las
						mujeres, sin embargo, éstas deben esforzarse para calmarla por consideraciones hacia sus esposos
						e hijos.”
					</p>
					<p />
					<p>
						Este personaje era representado con una pintura y un llamado o grito característico. El anuncio
						de su llegada se daba con un fuerte y agudo ¡WA ! Su figura tenía gruesas líneas transversales
						de color blanco sobre un fondo rojo oscuro. No era representada por un actor, sino que por una
						fila de cueros de
					</p>
					<p>
						aproximadamente seis metros de largo puestos sobre el suelo de la choza formando un bulto de
						forma cilíndrica regular que evocaba una ballena. (Gusinde 1990).
					</p>

					<p>
						Cada una de las siete regiones del territorio Selk'nam tenía una Xalpen acompañada de su esposo
						Soorte. Por esto, Soorte es el espíritu más vinculado a Xalpen y vive con ella bajo tierra. De
						él existen diferentes representantes, principales y secundarios.
					</p>
					<p />
					<p>2.3.2.2.4. Tanu</p>

					<p>
						Tanu era la hermana de Xalpen. Representaba su autoridad, actuando como mensajera y testigo de
						lo que ocurría en el Hain. Su figura consiste en una capa con punta triangular a la altura
						rostro claro de la cabeza y rectangular hacia las canillas. Es de color negro en la parte
						superior con puntos blancos alineados y una franja blanca horizontal a modo de cuello y en la
						parte superior tenía forma cónica. Exhibía una figura extraordinaria. Llevaba pinturas que
						simbolizaban uno de los cuatro cielos. Muy alta, su cuerpo era ancho, casi rectangular.
					</p>

					<p>
						Cuando surge desde el inframundo en el interior del Hain, los hombres silban. Caminaba de
						espaldas, dando pasos laterales con mucha lentitud, luchando con la pesada carga de su atavío,
						siempre acompañada de un anciano que la guía e impide que tropiece.
					</p>

					<p>2.3.2.2.5.Kotaix</p>

					<p>
						Llamado Halaháches por las mujeres y Kotaix por los hombres, es en cierto sentido el contrario
						de Xalpen. Es un espíritu masculino del cielo. Le arrebata la supremacía a Xalpen. Cuando
						aparece en el Hain, ella retorna de inmediato a las profundidades de la tierra.
					</p>

					<p>
						A veces, en medio de los arrebatos de cólera de Xalpen, los hombres empiezan a llamarlo,
						secundados por las mujeres que cantan su nombre para darle la bienvenida porque saben que al
						presentarse hará desaparecer a Xalpen. A su vez preparan una cantidad de bolas de nieve para
						arrojarlas, ya que tiene una personalidad cambiante y puede dar muerte a los varones.
					</p>
					<p>
						Halaháches es grotesco e inspira temor, pero si está de buen ánimo es cómico. Cuando sale del
						Hain con un gran salto, el público ve un ser de cuernos largos y más bien gruesos, que se vuelve
						con rapidez, belicosidad y mirada torva. Los cuernos según la mitología, resultan del antepasado
						mítico que desempeñaba este papel y se transformó en un pez con cuernos.
					</p>
					<p>
						Se sujeta el mentón con la mano izquierda y el codo levantado, mientras aferrando un palo largo
						con la otra va describiendo semicírculos en movimientos arrasadores. Avanza con amplios saltos
						laterales separando las piernas, con el torso inclinado hacia adelante y las rodillas un poco
						flexionadas.
					</p>
					<p>
						El cuerpo es blanco y lleva rayas rojas, con su máscara ajustada a la cabeza y cuello. No se
						suelta nunca el mentón y jamás varía su postura más bien gacha ni su mirada fija. Sacude de
						continuo la cabeza de un lado a otro y, en sus saltos laterales se mueve siempre impulsandose
						con el brazo derecho. Es ágil para esquivar las bolas de nieve que le arrojan las mujeres.
					</p>

					<p>
						A diferencia de Xalpen , Halaháches aniquila a los hombres a plena vista del público sobre el
						escenario. Los va matando de dos en dos, dándoles golpes mortales con un garrote. Los saca del
						Hain, arrastrando en pares a sus futuras víctimas y les da muerte en medio de una arremetida de
						proyectiles de nieve y gritos femeninos. Finalizada la tarea, los arrastra de vuelta a la choza
						ceremonial, donde el pequeño Olum obrará prestamente sus milagros.
					</p>

					<p>2.3.2.2.6.Matan</p>

					<p>
						Matan es el gran bailarín del Hain. Cuando desciende del cielo es aclamado con entusiasmo por el
						público y más aún cuando ejecuta sus asombrosos saltos verticales.
					</p>
					<p>
						Se lo presenta con cuatro dibujos pintados de distinta manera, representando cada uno de los
						"cielos" (puntos cardinales). Un chamán precede a Matan para anunciar su llegada a las mujeres,
						que acuden presurosas al borde del escenario aclamando su nombre. Matan entra con un gran salto.
						Las mujeres le solicitan se acerque más a ellas, él cautiva a todos los presentes.
					</p>

					<p>2.3.2.2.7.Kosmenk</p>

					<p>Esposo de Kulan. Habita en las alturas, es apacible y no molesta demasiado a los</p>
					<p>asistentes. Visita cuando la noche recién se inicia.</p>

					<p>
						Personificado por cuatro espíritus, cada uno pintado de manera diferente para simbolizar los
						cuatro puntos cardinales. A menudo dos de ellos aparecen disputándose los favores de Kulan. El
						"marido" , hace el papel de un cornudo y provoca las risas entre las mujeres que lo saludan
						cantando.
					</p>
					<p>
						Permanece de pie a poca distancia de la choza ceremonial, erguido e inmóvil, por lapsos de dos
						hasta cuatro horas. No hace movimiento alguno, y solamente cada diez minutos da señales de vida,
						saltando de dos a cuatro veces en el mismo sitio. Cuando Koshménk echa de menos a su mujer,
						corre de un lado a otro y la busca en la choza ceremonial o junto a ella. Luego llegará al
						campamento y mediante gestos característicos, expresa la suposición de que su mujer ha sido
						raptada por los Selk'nam.
					</p>
					<p>
						Si al regresar a la choza ceremonial, ve allá a su esposa, se conforma con esto. Pero si no la
						encuentra, y en la rueda de los hombres observa un vacío, monta en cólera. Su excitación se
						descarga inmediatamente contra los hombres presentes. En el paroxismo de la ira arroja a un
						hombre fuera de la choza, y lo hace con tal violencia, que éste sigue rodando un buen trecho. A
						otro lo carga y lo lleva bajo un árbol cercano. Allí lo arroja al aire con tanta fuerza, que el
						hombre queda sentado en las ramas. A un tercero lo cuelga de un poste de la entrada. Algunos
						hombres salen corriendo y se esconden rápidamente en el campamento. Los últimos que quedan dejan
						escuchar fuertes gritos de terror. Este tormento de los hombres dura muchas horas, y a veces se
						prolonga durante toda la noche.
					</p>
					<p>
						Cuando Kulan regresa junto a su marido, su frenesí se detiene; se muestra calmo y consolado, y
						regresa junto a su mujer hacia las alturas como si nada hubiera ocurrido.
					</p>
					<p>
						Sus intérpretes deben ser muy ágiles, capaces de dar grandes saltos en el aire mientras se
						golpean las nalgas con los pies a la vez que sujetan la máscara con ambas manos. En líneas
						generales, la aparición de los Koshménk proporciona a los ocupantes del campamento mucha
						diversión.
					</p>

					<p>2.3.2.2.8. Kulpush</p>

					<p>
						Kulpush (o Kulpus ) es un espíritu femenino de la tierra. Vive bajo ella, siempre sola; se
						presenta en el Hain para tener relaciones sexuales con los hombres.
					</p>
					<p>
						Tiene cuatro manifestaciones, una por cada cielo, aunque nunca se presenta en persona ante la
						gente, y por lo tanto, nadie conoce su aspecto. Pero cuando exige la realización de los
						espectáculos que le agradan, creen las mujeres (las que no le tienen simpatía) que aparece en la
						choza ceremonial.
					</p>
					<p>
						Cuando Kulpush emerge de la tierra, es anunciada por cantos por los hombres; ella exigirá una
						pesada serie de actividades.
					</p>
					<p>
						En una de ellas los kloketen van saliendo desnudos de la choza ceremonial en fila, con el cuerpo
						pintado de fondo rojo y franjas granates o negras y la cara pintada de negro. Arrancan con el
						pie izquierdo, avanzan marchando con saltos rítmicos, cantando e inclinados como si llevasen una
						pesada carga. Las jóvenes, por su parte, forman otra fila. Con las manos en la cadera de la
						muchacha de adelante, se acercan, riéndose, a la fila masculina. Cuando las dos hileras se
						tocan, la danza se vuelve juego y cada fila puja intentando irrumpir en la otra. Todos apuntan a
						un “oponente” del sexo opuesto, para derribarlo.
					</p>
					<p>
						Gusinde comenta que los participantes disfrutan enormemente de este burlón juego de amor. En
						ocasiones, este juego se celebra por la noche en el centro del escenario, alrededor de una gran
						fogata.
					</p>
					<p>
						Xalpen envía a su hermana Tanu para que observe; finalizadas las actividades, Kulpush vuelve a
						su hogar en el inframundo.
					</p>

					<p>2.3.2.2.8.Kulan</p>

					<p>
						Kulan , es la "mujer fatal" del Hain. Personaje interesante en una sociedad patriarcal que
						trataba de controlar a las mujeres, ella hacía el amor con cualquiera, pese a ello no han
						llegado registros fotográficos de Martín Gusinde.
					</p>
					<p>
						Oculta en los bosques, acecha a aquellos que resultan de su agrado y los seduce. Con frecuencia
						lleva al cielo a sus amantes por varios días, obligándolos a mantener con ella relaciones
						sexuales en forma ininterrumpida. Para mantener el vigor de estos hombres, los alimenta con
						huevos de pingüino emperador, aves que siempre la acompañan.
					</p>

					<p>
						Se presenta a menudo en Hain, siempre de noche, sólo en algunas ocasiones los hombres anuncian
						su descenso de los cielos cantando.
					</p>
					<p>
						En el escenario lleva puesta una máscara cónica, pintada comúnmente de rojo, con una franja
						blanca que va desde la punta de la cabeza hasta los genitales que tiene cubiertos por un
						taparrabo. Sus delicados pechos (bolsitas de cuero rellenas) apenas se insinúan. Por ser joven y
						delgada es personificada por un kloketen.
					</p>
					<p>
						Una vez que los hombres ya no sirven a sus propósitos, los devuelve a su campamento. Los hombres
						regresan tambaleantes, salpicados de bosta de pingüino. Jamás se acuerdan de lo que les pasó
						estando en el cielo, razón por la cual sus esposas no les hacen preguntas, se han limitado a
						entonar un canto para hacerla que regrese y deje en libertad a los hombres.
					</p>

					<p>El marido de la lujuriosa Kulan es Koshménk " el cornudo".</p>

					<p>2.3.2.2.9.Ulem</p>

					<p>
						Espíritu masculino del sector norte de la Isla de Tierra del Fuego. Rápido y ágil como el
						viento, visible sólo parcialmente demostrando su sorprendente velocidad.
					</p>
					<p>
						El cuerpo es de color rojo oscuro y sobre él lineas horizontales blancas, dejando cortos tramos
						intermedios. En forma vertical desde el cuello pasando por el ombligo baja una línea blanca. La
						máscara es de color rojo más claro con tres líneas blancas en la parte superior.
					</p>
					<p>
						Su participación en la ceremonia del Hain es más teatral que ritual, es decir más profana que
						sagrada.
					</p>

					<p>2.3.2.2.10.Ketemen</p>

					<p>
						Es una criatura débil e infantil, hijo de Xalpen y engendrado por las relaciones de ésta con los
						kloketen, igualmente temido por su vínculo materno. Su cuerpo es pintado con un rojo aguado, los
						antebrazos, piernas y pies llevan pintura blanca y líneas rojas hechas con tierra colorante y
						grasa. Desde el cuello hasta los órganos genitales se extiende una línea blanca, sobre la cual
						se pintan líneas horizontales blancas y rojas. Todo es cubierto con taponcitos de plumas
						adheridos sobre el colorante y la grasa.
					</p>
					<p>
						También mencionado como K’terrnen. Hijo de Xalpen , fruto de sus relaciones con los kloketen ,
						puede ser hombre o mujer. Su nacimiento sigue al episodio de la restauración de la vida por
						parte de Olum.
					</p>
					<p>
						Es el espíritu más luminoso y enternecedor del Hain. Unión entre la tradición y las nuevas
						generaciones; su aparición marca la culminación de la gran ceremonia del Hain y el comienzo de
						un nuevo ciclo vital.
					</p>
					<p>
						Se lo representa con el cuerpo cubierto de plumón, en hileras paralelas que van desde el extremo
						del bonete a la punta de los pies. Las plumas diminutas, están pegadas a la pintura roja del
						cuerpo, lo que por contraste produce un efecto de resplandor que lo hace aparecer aún más
						sobrenatural.
					</p>
					<p>
						Se presentará en el escenario entre cinco y siete veces; su preparación ha exigido mucho tiempo
						y se trata de aprovechar todo lo posible el arduo trabajo; además su contemplación provoca
						deleite entre las mujeres. Ellas anticipan su presencia con cantos de bienvenida para que lo
						saquen del Hain y así poder ser admirado.
					</p>
					<p>
						Como recién nacido debe ser sostenido, ya que apenas puede caminar. Esa tarea la debe llevar a
						cabo el chamán o el consejero del Hain , o ambos que para el evento utilizan una vincha de
						plumas y una capa vuelta hacia adentro. Keternen da pequeños pasitos, mientras los demás dan
						golpes al suelo con el talón derecho. Avanza de costado, hasta el límite del escenario, de cara
						al público; tiene la mirada fija hacia adelante, con los brazos firmes contra el cuerpo.
					</p>
					<p>
						Las mujeres cantan su admiración y alegría durante toda la escena, pudiendo acercarse más que en
						otras a la choza ceremonial. Al volver a entrar al Hain , los hombres saludan al recién nacido
						con un suave batir de palmas.
					</p>
					<p>
						Luego de la su última presentación, Keternen regresa a la choza y desde entonces permanece
						invisible para siempre. Las mujeres creen que este espíritu infantil continúa su vida junto a
						Xalpen en el inframundo.
					</p>

					<p>2.3.2.2.11. Hóshtan</p>

					<p>
						Es un espíritu femenino que nunca se muestra. Cuando surge en el Hain y los hombres anuncian su
						llegada con cantos especiales, las mujeres se arriman al límite del campamento y allí aguardan
						su danza preferida. Hóshtan ordena se realice esta danza que Anne Chapman denomina "juego de la
						venganza de las mujeres".
					</p>
					<p>
						Un pequeño grupo de hombres sale del Hain dando saltitos al modo de los pingüinos, con el rostro
						y el cuello pintados de negro y el resto del cuerpo desnudo y sin pintar. Llevan el pelo en tres
						o cuatro crenchas atadas con juncos finos. Vuelven saltando a la choza ceremonial y traen otros
						tres o cuatro compañeros, así hasta que todos los participantes queden en el escenario. Allí, en
						cuclillas, imitando a los pingüinos vuelven a cantar. Entonces las mujeres, en especial las más
						jóvenes los embisten.
					</p>
					<p>
						Cada una se dirige a un varón determinado, generalmente un pariente que admita la chanza, y
						riendo tironea con ambas manos de las mechas hasta tumbarlo. Él forcejea con ella resistiéndose,
						y por último cae gritando como si lo mataran. La vencedora se yergue y recorre el campo con la
						vista, en busca de otra víctima. El juego continúa hasta que todos los hombres sean "matados".
					</p>

					<p>2.3.2.2.12. Shoort o Soortes</p>

					<p>
						Shoort es el espíritu más dinámico del Hain , y el más temido por las mujeres. Su esposa es
						Xalpen , con quien vive bajo la tierra.
					</p>
					<p>
						Es el único espíritu que actúa todos los días (si el clima lo permite); y también es el único
						espíritu ataviado que se interna en el campamento entre las mujeres y los niños.
					</p>

					<p>
						Aparece con diferentes atributos, a veces de a dos. Hay siete "Shoort principales ", por cada
						uno de los siete postes de la choza ceremonial y por ende cada uno de los siete "cielos" de
						filiación territorial y de linaje de cada Selk'nam y haush.
					</p>
					<p>
						Existen ocho denominaciones que se atribuyen a los Shoort , de acuerdo al momento del día en que
						se presenta. Así, si lo hace en las primeras horas de la tarde, su atuendo representará el lapso
						de tiempo que recorre el sol en el cielo en ese trance.
					</p>
					<p>
						A cada uno de los Shoort le corresponde un nombre individual y un dibujo con pintura distintiva.
						En todos los casos estará adornado con círculos dibujados con tiza. La pintura de la máscara es
						complemento de la pintura del cuerpo. Antiguamente la máscara pudo haber sido cónica, como en la
						mayor parte de los otros espíritus, pero en 1923 se parecía a un gorro puntiagudo que le ceñía
						la cabeza y el cuello.
					</p>

					<p>
						El espíritu del Shoort era de piedra, quien lo representara no debía dar señales de que
						respirara. Se presenta siempre con los puños cerrados, el dorso de la mano vuelto hacia afuera.
						Al salir del Hain y al volver a entrar, se detiene, mira al público y hace el mismo ademán: alza
						los brazos con los puños hacia arriba como si flexionara los bíceps. Sus movimientos son rígidos
						y tajantes como para amedrentar al público.
					</p>

					<p>
						Antes de que Shoort salga del Hain para realizar su visita diaria al campamento, los hombres lo
						anuncian con cantos. Las mujeres entonces a excepción de las madres de los kloketen -las únicas
						que el espíritu trata con consideración-, se quedan en sus chozas y se ocultan cubriéndose con
						pieles de guanaco.
					</p>
					<p>
						Cuando Shoort llega, siempre viene acompañado de un chamán que no se separa de su lado, quizás
						para conferir mayor autoridad. Si hay nieve en el suelo, el chamán irá cubriendo discretamente
						las pisadas del "espíritu" a medida que avanza, pues no puede dejar huellas de pies humanos.
					</p>

					<p>
						No todos los Shoort entran directamente al campamento: al que lo hace se le exige un gran
						adiestramiento y aptitud. Como se desplaza entre las mujeres y los niños, no puede permitirse ni
						el menor descuido, puesto que cualquier ademán que revelara su condición de hombre traicionaría
						“el secreto”.
					</p>
					<p>
						Estas visitas traen momentos de gran tensión para las mujeres, viene a amenazarlas y castigarlas
						si no han mantenido un comportamiento de esposa sumisa, trabajadora y hacendosa.
					</p>
					<p>
						Si por cualquier razón, un hombre no está satisfecho con la conducta de su mujer, se lo confía a
						Shoort en la choza del Hain. En la próxima visita al campamento, el espíritu la buscará, tal vez
						sólo procure amedrentarla sacudiendo la choza o arrojándole una canasta, mientras ella se
						acurruca bajo una capa de guanaco. Puede ser que la pinche con un palito, o que la golpee con
						mayor saña y, en el peor de los casos, llegue a derribar la choza. Acomoda el castigo a lo que
						le hayan contado el marido u otros hombres, así como a su propio parecer o estado de ánimo.
					</p>

					<p>
						Cuando Shoort abandona el campamento, las mujeres –las madres de los kloketen adelante– se
						precipitan hacia el límite del prado. Cantan, para despedirlo. Antes de entrar de nuevo al Hain
						, Shoort flexiona los bíceps y luego desaparece por un costado con un gran salto hacia adelante
						lanzando los pies para atrás como si se zambullera en la tierra.
					</p>

					<p>2.3.3. Cantos Selk'nam</p>

					<p>
						Los Selk'nam poseían una variada cantidad de cantos chamánicos que reviven el mito de la era
						hoowin actuando como memoria mítica del pueblo.
					</p>
					<p>
						La doctora Chapman recopila 47 cantos chamánicos y lamentos, interpretados por Lola Kiepja en
						Tierra del Fuego, cuatro meses antes de su muerte. La traducción es realizada un año más tarde
						(1967) por Angela Loij. Al ser Lola una chamán, conocía algunas palabras secretas que Angela
						nunca logró traducir. Algunos cantos son anteriores a la llegada de los colonizadores y otros,
						una mezcla entre cantos originales y otros aprendidos en las misiones salesianas. De los cantos
						exclusivamente Selk'nam tomaremos el número trece del Volumen I de los dos discos grabados por
						Anne Chapman. En este canto, Kiepja hace mención de su poder para curar enfermedades.
					</p>

					<p>
						“(...)Tengo aquí mi arco. Aquellos que partieron me lo entregaron... vocalización.... He
						adquirido suficiente (poder) para sacar (en castellano en el original) (con el significado de
						extraer) para curar (con mi poder) sola. El que se fue comía (cantaba) solo. Aquellos que se
						fueron (evocación). Mis dos padres (tíos) me lo entregaron. Aquellos que se fueron murieron de
						enfermedad..., vocalización... Digo que yo puedo sacar (en castellano en el original) la
						enfermedad de la persona que acude a mí... (...) La mujer ésta (Lola), tiene el arco. El arco
						está dentro de mí, el arco de los dos que murieron de enfermedad, los que se fueron.... (...)”.
					</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.cybertesis.cl/tesis/uchile/2004/cattaneo_c/html/index-notes.html%23Noteftn121&amp;sa=D&amp;ust=1562476720923000" />
					</p>
					<p>
						Este canto chamánico revela de manera evidente el simbolismo del arco como instrumento de
						sanación. El arco utilizado por los chamanes era el símbolo de su poder sobrenatural, utilizando
						los cantos, acompañados por movimientos especiales para entrar en trance:
					</p>
					<p>
						“Al comenzar a cantar una melodía, normalmente solía estar sentado en un cuero con las piernas
						cruzadas y el torso ligeramente inclinado hacia adelante, imprimiéndose un movimiento de vaivén
						lateral como un péndulo. Al mismo tiempo mantenía baja la mirada, dejando caer los brazos a los
						costados. Todo ese proceso de cantar y ensoñar era parte de un enorme esfuerzo de concentración
						de todas sus fuerzas espirituales y se llevaba a cabo a fin de que el Xo’on (chamán) alcanzara
						el estado de autosugestión”.
					</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.cybertesis.cl/tesis/uchile/2004/cattaneo_c/html/index-notes.html%23Noteftn122&amp;sa=D&amp;ust=1562476720924000" />
					</p>
					<p>Otro canto chamánico de Kiepja decía:</p>
					<p>
						“Estoy aquí cantando, el viento me lleva, estoy siguiendo las pisadas de aquellos que se fueron.
						Se me ha permitido venir a la montaña del poder. He llegado a la gran cordillera del cielo,
						camino hacia la casa del cielo. El poder de aquellos que se fueron vuelve a mí. Yo entro en la
						casa de la gran cordillera del cielo. Los del infinito me han hablado”.
					</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.cybertesis.cl/tesis/uchile/2004/cattaneo_c/html/index-notes.html%23Noteftn123&amp;sa=D&amp;ust=1562476720924000" />
					</p>
					<p>
						En el segundo volumen de los cantos de Kiepja se encuentran los de la Ceremonia del Hain. Los 41
						cantos fueron recopilados en la misma época de los del disco anterior, cantados por Lola a los
						90 años de edad. De los 41 cantos, 25 se asocian con los espíritus, danzas y juegos del Hain.
						Los 16 restantes son K’méyu : cantos ejecutados por las madres de los kloketen.
					</p>
					<p>
						Durante un Hain, siempre se comenzaba con cantos llamando al amanecer. Cuando el campamento era
						alumbrado por los primeros rayos del sol, las mujeres cantaban Yóroheu (amanecer), para dar la
						bienvenida a la luz del día y despedir a la oscuridad, este canto era la repetición de la
						palabra yóroheu en una extensa línea melódica.
					</p>
					<p>2.3.4. Danza</p>
					<p>
						La danza y la plástica no eran ajenas a la Ceremonia del Hain, la gran cantidad de bailes que
						allí se ejecutaban eran repeticiones corporales y gestuales del mito hoowin que servían de
						vehículo a la comunicación y a la entretención.
					</p>

					<p>
						Una de las danzas favoritas que se ejecutaba espontáneamente honraba a Kulpush quien era un
						espíritu femenino de la tierra que jamás se mostraba en público. Era soltera y venía con
						frecuencia al Hain a establecer relaciones sexuales con los hombres. Cuando asciende desde el
						inframundo los hombres cantan y se realizan cuatro danzas en su honor. “(...) Las danzas del
						Brinco, Ondulante, del Pingüino y del Empujón. Todas deleitan y divierten al público, y en
						especial a los jóvenes que actúan.”
						<a href="https://www.google.com/url?q=http://www.cybertesis.cl/tesis/uchile/2004/cattaneo_c/html/index-notes.html%23Noteftn125&amp;sa=D&amp;ust=1562476720925000" />
						La danza del Brinco la realizaban los hombres dando saltos cortos con el pie derecho; la danza
						Ondulante se realizaba durante largas horas, los hombres bajaban una colina formando una extensa
						línea, abrazados y moviéndose muy lentamente produciendo una leve ondulación; observados desde
						abajo parecían una gigantesca serpiente descendiendo lánguidamente. La danza del Pingüino,
						también realizada por hombres, consistía en imitar los pasos y saltos de esta ave. La danza del
						Empujón solía representarse de noche, alrededor de una fogata en el centro del ‘escenario’ (en
						las afueras de la choza del Hain). Consistía en una fila de hombres que salían de la choza del
						Hain, avanzando agachados, como soportando un gran peso, con el pie izquierdo constantemente
						adelante. El primero de la fila ponía sus manos en las caderas y los demás sobre los hombros de
						sus compañeros. Las mujeres hacían una fila similar, paralela, y la danza consistía en darse
						empujones entre ambas filas y resistirlos.
					</p>
					<p>
						Otras danzas ceremoniales eran la danza fálica, las danzas de los hombres y mujeres pintados, y
						las danzas que ejecutaba Matan. Los movimientos de los espíritus eran precisos y ágiles, los
						hombres requerían de un gran estado físico y resistencia.
					</p>

					<p>2.3.5 Pintura Corporal Selk’nam</p>
					<p>
						La plástica se expresa a través de dibujos corporales que eran repeticiones de líneas y puntos
						simétricamente ubicados para representar a los diversos espíritus y la rica simbología de los
						cielos a los cuales pertenecían todos los Selk'nam; esta simetría testimonia un mundo en armonía
						con las leyes universales. Las mujeres tenían la obligación de proveer pintura a los hombres
						mientras duraba la Ceremonia del Hain. Las pinturas se hacían con arcilla, los colores eran
						negro, blanco, amarillo y rojo. Pintaban sus cuerpos enteros con dos o tres colores, cubriendo
						los antebrazos y piernas de blanco y el resto de otro color, o cada mitad del tórax con
						diferente color.
					</p>

					<p>
						El significado de cada diseño era conocido por cada uno de los participantes del ritual; como
						regla general el predominio del color rojo, en la pintura de los espíritus, indica la
						proveniencia del cielo del Oeste; el blanco, del cielo del Sur; el negro, del Norte; el cielo
						del Este se identificaba por un dibujo determinado y no por un color preciso.
					</p>

					<p>
						Las máscaras de los espíritus poseían el mismo dibujo que el de los cuerpos de éstos, en cambio,
						los hombres y mujeres que no representaban espíritus, se pintaban el rostro con un dibujo
						determinado, y el resto con otro.
					</p>
					<p>
						La pintura se aplicaba con las manos. Para diseños más precisos utilizaban una vara puntiaguda o
						una espátula de madera; cuando el diseño comprendía líneas muy delgadas y unidas se utilizaba la
						mandíbula de un delfín (tonina magallánica). Para lograr el efecto de nubes se llenaban la boca
						con polvo de color y soplaban a través de los dientes sobre el cuerpo del espíritu que
						maquillaban.
					</p>
					<p>
						Antes de la llegada de los blancos, las mujeres se pintaban el cuerpo con diseños ( Tari ) de
						sus cielos o tierras, y si el clima lo permitía, se presentaban desnudas. Durante el Hain de
						1923, las mujeres se pintaron únicamente el tronco y conservaron sus faldas (entregadas por los
						blancos).
					</p>
					<p>
						Los kloketen se pintaban cada día. Los espíritus presentaban una perfecta unidad de estilo y sus
						diseños no cambiaban jamás.
					</p>
					<p>
						La repetición del mito hoowin en cada Ceremonia del Hain, es lo que permitía que ésta fuese un
						rito sagrado, dando sentido a cada escena, que no sólo se utilizará para invocar a los
						espíritus, sino, para reafirmar, consciente e inconscientemente, su historia y la identidad
						colectiva en plena conexión con lo ancestral.
					</p>
					<p>2.4. Investigación Histórica.</p>

					<p>2.4.1 Mitología</p>
					<p>2.4.1.1. El mito del Hain</p>

					<p>
						En los tiempos en los que existían los howenh (antepasados), el sol, la luna, los ríos y las
						estrellas transitaban por el mundo (Gusinde 1990). Las mujeres dominaban a los hombres
						indicándoles lo que debían hacer, subordinándolos y sometiéndolos a sus caprichos; ellos
						obedientemente mantenían la choza, trabajaban los cueros, cuidaban a los niños y cazaban. Las
						decisiones las tomaban las mujeres sin tener ellos opinión, sin embargo, los hombres eran
						fuertes y capaces de rebelarse, lo que las llevó
					</p>
					<p>
						a buscar una forma de mantener esta situación. Entre ellas destacaba la mujer luna; bajo su
						dirección se inventó un secreto juego, que se inició con la construcción de una gran choza
						distante a las viviendas donde permanecían la mayoría del tiempo y a la cual estaba prohibido el
						ingreso de los
					</p>
					<p>
						hombres. En estas reuniones las mujeres iniciaban a las jóvenes en su etapa adulta, momentos en
						los cuales se pintaban el cuerpo con dibujos especiales, cubrían su cara con máscaras de corteza
						pintada y salían de la choza a saltos para que los hombres las vieran desde lejos. Les hicieron
						creer que estos
					</p>
					<p>
						seres descendían del cielo y surgían de la tierra, bajo cuya arbitrariedad estaban todos
						sometidos. La labor de estos espíritus era castigar duramente a quienes se opusieron a las
						órdenes de las mujeres.
					</p>
					<p>
						Entre ellos Xalpen era quien vigilaba el comportamiento de los hombres, los soortes castigaban a
						los que no cumplían los mandatos y junto a éstos, Matan, Kosmenk, Tanu, Kataix y Keternen,
						celebraban el hain.
					</p>

					<p>
						Un día Kran (el hombre sol), esposo de Kra (la mujer luna) , regresando de la caza pasó cerca de
						la gran choza y junto al río observó a dos jóvenes mujeres que lavándose la pintura se
						divertían. Al ver esto comprendió el engaño: los espíritus no eran seres de otro mundo, sino
						auténticas mujeres enmascaradas;
					</p>
					<p>
						furioso volvió al campamento y comentó a los demás lo visto. Seguros del engaño, los hombres se
						organizaron y dirigieron a la gran choza, frente a ella se abalanzaron contra las mujeres
						generando una gran matanza. Sólo dejaron con vida a las niñas que por su temprana edad aún
						desconocían el secreto.
					</p>
					<p>
						Las que lograron arrancar, se transformaron en animales que hasta la actualidad mantienen los
						diseños de dichas pinturas. Desde ese momento, los hombres comenzaron a reunirse en la gran
						choza iniciando a los jóvenes (como kloketen) en el conocimiento del hain y el secreto de los
						espíritus.
					</p>

					<p>2.4.1.2. El mito de los siete soortes principales</p>

					<p>
						Según Gusinde, con posterioridad a la aniquilación de las mujeres, los hombres más capaces e
						influyentes, luego de recorrer los límites este, norte, oeste y sur, se reunieron al este de la
						isla en un lugar llamado Maustas para construir una choza, cada uno con un gran tronco de árbol
						crecido en el lugar de residencia. Con respecto a este punto, Chapman indica que en Maustas la
						choza se había construido de roca, con siete postes de piedras arrastrados desde sus comarcas
						natales. Estos hombres eran howenh, antepasados que en tiempo mítico se transformaron, después
						de su muerte, en distintos seres del entorno natural. Fueron llegando de todo el territorio
						Selk´nam personajes como Ketaixten (la ballena macho), Tase (el cachalote macho), Ksamenk (el
						delfín grande), Koojni (el león marino), Kepeyik (el macho grande del lobo de dos pelos),
						Kojniken (la bandurria macho) y Kran (el hombre sol) entre otros, los cuales deliberaron mucho
						tiempo sobre la manera de organizarlo, celebrando por primera vez el hain en Maustas con la
						misma forma y personajes del rito original realizado por las mujeres.
					</p>

					<p>
						Hombres fuertes y altos fueron los encargados de levantar los siete pilares principales. Primero
						comenzó Wacus, luego Pawus y después Senu. Cuando estos tres primeros pilares estuvieron bien
						asegurados, comenzó a levantar el suyo Sate, luego Talen, después Keyaisk y por último Yoisik.
						Así colocados los
					</p>
					<p>
						primeros siete, cada uno de estos hombres se ubicó bajo el poste que había levantado y como
						hombres altos y bellos asumieron el papel de los siete soortes principales. Además de ellos
						actuaron también otros soortes subordinados, los cuales trajeron más postes para rellenar
						intersticios; cada uno trabajó en el hueco que correspondía a su terruño, espacio que
						posteriormente fue el asiento que le correspondió ocupar en la ceremonia. De esta forma los
						hombres se pusieron de acuerdo, estableciendo un orden que
					</p>
					<p>habría sido el que mantendrían hasta tiempos históricos.</p>

					<p>2.4.1.3. El mito de la difusión del Hain</p>

					<p>
						La difusión del hain se inició en el sudeste del territorio Selk´nam hacia todos los rincones
						habitados (Gusinde 1990). Korior fue kloketen de una de las primeras ceremonias de iniciación
						realizadas en el sur, donde adquirió todos los conocimientos sobre ella. Poseía tierra colorante
						blanca que llevó hacia el norte para obsequiársela a su abuelo, donde enseñó a los hombres a
						hacer todo para un hain. Al realizarlo conoce a Kamsot, al cual se enfrenta en las competencias
						del hain , desarrollando pruebas de fuerza como caminar por largos trayectos, correr y escalar.
						Kamsot, kloketen del norte, había sido vencido en todas las competencias, no obstante, presumido
						de los conocimientos que había adquirido, quería superar a Korior. Una vez, Korior se dirigió al
						norte donde encontró una buena cantidad de tierra colorante blanca y brillante; a la noche
						siguiente Kamsot corrió en la misma dirección y regresó con una hoja de haya verde y otra roja.
						Después de un tiempo, juntos regresaron al sur realizando diversos desafíos, y durante el
						período que permanecieron en la choza grande, Kamsot adquirió nuevos conocimientos que llevó a
						su tierra, desde donde se difundieron hacia otros territorios, organizando la ceremonia al igual
						que la gente del sur. Por último, Korior al envejecer, se transformó en una montaña y Kamsot en
						un papagayo de color verde y rojo.
					</p>

					<p>2.4.1.3.1 Los kloketen</p>

					<p>
						La palabra kloketen significa ‘novicio’; mediante los ritos del Hain éste llegaba a convertirse
						en Maars o ‘adulto’. Todo joven, sin excepción, debía ser iniciado. Cuando los hombres maduros
						estiman que algún joven no estaba preparado para la vida adulta lo mantenían como kloketen dos o
						tres Hain más. Un joven no podía casarse antes de haber sido iniciado. El kloketen era educado
						en el Hain y por esto, a su llegada, los misioneros lo denominaron ‘colegio’. La edad ideal de
						un joven para iniciar su Hain era entre los diecisiete y veinte años, edad en la que poseían
						mayor resistencia física para soportar las pruebas impuestas. Los adultos discutían durante
						horas sobre la madurez de los jóvenes y grados de tolerancia a las mortificaciones que se les
						infligirían. Gusinde comenta:
					</p>
					<p>
						“(...) Primero observamos muy cuidadosamente si el muchacho sabe callar, si muestra poder de
						reflexión y si ya ha dejado de lado la charlatanería de los niños. Si aún nos parece atolondrado
						y excesivamente locuaz, lo posponemos por algunos inviernos, hasta que nos pueda ofrecer la
						seguridad de guardar el secreto”.
					</p>
					<p>
						Una vez elegidos los kloketen, se les enviaba al bosque en grupos o solos, debían traer alimento
						a la choza, esta labor era muy difícil para los incipientes cazadores, a pesar de enviárselas a
						un sector del bosque donde hallarían un guanaco recién muerto, colgando de un árbol. Si el
						animal pesaba mucho no se les obligaba a cargarlo íntegro, aunque sí se les planificaba una ruta
						de regreso larga y difícil. Para asegurar el cumplimiento de las órdenes y de la seguridad de
						los jóvenes, un adulto los siguió durante toda la incursión, no sin antes de partir explicarles
						que si se encontraban con algún espíritu Shoort (encarnación del antepasado hoowin llamado
						K’tétu ), no debían atacarlo ya que éste los mataría inevitablemente; lo que debían hacer era
						trepar a un árbol, ya que a estos espíritus les disgustaba escalar los troncos, que a través de
						sus tejidos hacían circular la savia.
					</p>
					<p>
						Durante la Ceremonia del Hain, la madre o sustituta (si la verdadera madre había muerto), jugaba
						con las otras mujeres imitando el comportamiento de su hijo cuando pequeño. Las demás mujeres
						actuaban como madres de ésta, guiándola y diciéndoles qué hacer. Cuando el kloketen no tenía
						padre vivo, una mujer asumía este rol, entonces se establecía un juego entre ambos ‘padres
						sustitutos’.
					</p>

					<p>2.4.1.4. El Mito del origen del calafate</p>

					<p>
						Cuando los Selk'nam habitaban Tierra de Fuego se agrupaban en diversas tribus, dos de ellas se
						encontraban en gran conflicto, los jefes de ambas comunidades se odiaban hasta la muerte. Uno de
						ellos tenía un joven hijo, que gustaba de recorrer los campos. En una ocasión se encontró con
						una bella niña de ojos negros intensos y se enamoró de ella. Lamentablemente, era la hija del
						enemigo de su padre, la única manera de verse era a escondidas, pero el brujo de la tribu de la
						niña los descubrió. Vio sin embargo, que no podría separarlos y condenó a la niña,
						transformándola en una planta que conservó toda la belleza de sus ojos negros, pero con espinas,
						para que el joven enamorado no pudiera tocarla.
					</p>
					<p>
						Pero el amor era tan fuerte que el joven nunca se separó de esta planta y murió a su lado. Por
						eso cada quien que logre comer el fruto de este arbusto estará destinado a regresar a la
						Patagonia, pues uno no puede separarse del poder de amor que hay en el calafate, nos atrae a él
						y no nos permite que nos marchemos por mucho tiempo.
					</p>

					<p>2.4.2. Historias Relevantes</p>

					<p>2.4.2.1. Genocidio Selk'nam</p>

					<p>
						Por genocidio Selk'nam (o genocidio ona ) se conoce a los hechos ocurridos entre la segunda
						mitad del
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Siglo_XIX&amp;sa=D&amp;ust=1562476720930000">
							siglo XIX
						</a>
						y las primeras décadas del
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Siglo_XX&amp;sa=D&amp;ust=1562476720930000">
							siglo XX
						</a>
						en contra de los Selk'nam, pueblo
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Amerindio&amp;sa=D&amp;ust=1562476720930000">
							amerindio
						</a>
						de la
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Isla_Grande_de_Tierra_del_Fuego&amp;sa=D&amp;ust=1562476720931000">
							isla Grande de Tierra del Fuego
						</a>
						, cuya última representante pura,
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/%25C3%2581ngela_Loij&amp;sa=D&amp;ust=1562476720931000">
							Ángela Loij
						</a>
						, falleció en
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/1974&amp;sa=D&amp;ust=1562476720931000">
							1974
						</a>
						, sobreviviendo actualmente sol, uno de los descendientes mestizos de esta etnia.
					</p>

					<p>
						Tras cientos (y quizás miles) de años de vida seminómada, hacia fines del siglo XIX la isla
						Grande de Tierra del Fuego concitó el interés de grandes compañías ganaderas. La introducción de
						las estancias ovejeras creó fuertes conflictos entre los nativos y los colonos europeos,
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Argentina&amp;sa=D&amp;ust=1562476720931000">
							argentinos
						</a>
						,
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Chile&amp;sa=D&amp;ust=1562476720932000">
							chilenos
						</a>
						y loberos
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Isla_Grande_de_Chilo%25C3%25A9&amp;sa=D&amp;ust=1562476720932000">
							chilotes
						</a>
						, conflicto que adquirió ribetes de guerra de exterminio. Las grandes compañías ovejeras
						llegaron a pagar una
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Libra_esterlina&amp;sa=D&amp;ust=1562476720932000">
							libra esterlina
						</a>
						por cada Selk'nam muerto, lo que era confirmado presentando manos u orejas. Las tribus del norte
						fueron las primeras afectadas, iniciándose una oleada migratoria al extremo sur de la isla para
						escapar a las masacres. En busca de alternativas a la matanza, en
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/1890&amp;sa=D&amp;ust=1562476720932000">
							1890
						</a>
						el Gobierno chileno cedió la
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Isla_Dawson&amp;sa=D&amp;ust=1562476720932000">
							isla Dawson
						</a>
						, en el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Estrecho_de_Magallanes&amp;sa=D&amp;ust=1562476720932000">
							estrecho de Magallanes
						</a>
						, a sacerdotes
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Salesiano&amp;sa=D&amp;ust=1562476720932000">
							salesianos
						</a>
						que establecieron allí una misión, dotada de amplios recursos económicos. Los Selk'nam que
						sobrevivieron al genocidio fueron virtualmente deportados a la isla, la que en un plazo de 20
						años cerró dejando un cementerio poblado de cruces.
					</p>
					<h3>2. 4.2.2. Las mayores masacres</h3>
					<h3>2.4.2.2.1. La matanza de San Sebastián (28 muertos)</h3>
					<ul>
						<li>
							Lugar:
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DPlaya_de_San_Sebasti%25C3%25A1n%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720933000">
								Playa de San Sebastián
							</a>
						</li>
						<li>
							Fecha:
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/25_de_noviembre&amp;sa=D&amp;ust=1562476720933000">
								25 de noviembre
							</a>
							de
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/1886&amp;sa=D&amp;ust=1562476720933000">
								1886
							</a>
						</li>
					</ul>

					<p>
						Es la primera masacre documentada, y se conoce con detalle, cuándo, dónde y cómo ocurrió pues
						fue cometida por un oficial argentino, en una misión de exploración, donde debía registrar su
						accionar en un diario de bitácora. El 25 de noviembre de 1886, el capitán
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Ram%25C3%25B3n_Lista&amp;sa=D&amp;ust=1562476720934000">
							Ramón Lista
						</a>
						desembarcó en la playa de San Sebastián con el fin de explorar la región. Ese mismo día se topa
						con una tribu ona. El capitán intenta tomarlos prisioneros, pero éstos se resisten. Lista ordena
						entonces a sus hombres abrir fuego y matan a 27 onas. Un
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Sacerdote&amp;sa=D&amp;ust=1562476720934000">
							sacerdote
						</a>
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Salesiano&amp;sa=D&amp;ust=1562476720934000">
							salesiano
						</a>
						,
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Jos%25C3%25A9_Fagnano&amp;sa=D&amp;ust=1562476720934000">
							José Fagnano
						</a>
						, 11 que acompañaba a la expedición, enfrenta a Lista y le recrimina por la matanza. Lista
						amenaza con hacerlo fusilar. Días después los hombres de Lista se ensañan con un joven ona al
						que encontraron escondido tras unas rocas, armado tan solo con su
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Arco&amp;sa=D&amp;ust=1562476720934000">
							arco
						</a>
						y su
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Flecha&amp;sa=D&amp;ust=1562476720935000">
							flecha
						</a>
						: lo asesinan de 28 balazos.
					</p>
					<h4>2.4.2.2.2. El envenenamiento de Springhill (500 muertos)</h4>
					<ul>
						<li>
							Lugar:
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DPlaya_de_Springhill%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720935000">
								Playa de Springhill
							</a>
						</li>
						<li>
							Fecha: Imprecisa, primera década del
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Siglo_XX&amp;sa=D&amp;ust=1562476720936000">
								siglo XX
							</a>
						</li>
					</ul>
					<p>
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Siglo_XX&amp;sa=D&amp;ust=1562476720936000" />
					</p>
					<p>
						Una tribu
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Selknam&amp;sa=D&amp;ust=1562476720936000">
							ona
						</a>
						se abalanza sobre una
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Ballena&amp;sa=D&amp;ust=1562476720936000">
							ballena
						</a>
						, varada en la playa. En tan sólo un día, gran parte de la tribu muere. La ballena había sido
						inoculada con veneno.
					</p>
					<h4>2.4.2.2.3. La masacre de Punta Alta (25 muertos)</h4>
					<ul>
						<li>Lugar: Punta Alta</li>
						<li>
							Fecha: Imprecisa, primera década del
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Siglo_XX&amp;sa=D&amp;ust=1562476720937000">
								siglo XX
							</a>
						</li>
					</ul>

					<p>
						Una tribu ona resistió durante casi un día el asedio de los estancieros y sus empleados, hasta
						que sucumbieron.
					</p>
					<h4>2.4.2.2.4. La masacre de la playa de Santo Domingo (300 muertos)</h4>
					<ul>
						<li>
							<h4>Lugar: Playa de Santo Domingo.</h4>
						</li>
						<li>Fecha: Imprecisa, primera década del siglo XX.</li>
					</ul>

					<p>
						Alejandro Maclennan invita a una tribu ona, a la que él había estado hostigando, a un banquete
						para sellar un acuerdo de paz. Durante el banquete, Maclennan sirve grandes cantidades de vino.
						Al comprobar que la mayoría de los indígenas se han embriagado, en especial los hombres,
						Maclennan se aleja del lugar y ordena a sus ayudantes, apostados en las colinas, abrir fuego
						contra toda la tribu.
					</p>
					<h3>2.4.2.2.5. El hallazgo del italiano (80 muertos)</h3>
					<ul>
						<li>Lugar: Impreciso</li>
						<li>Fecha: Imprecisa, primera década del siglo XX</li>
					</ul>

					<p>
						Un inmigrante italiano, que recorría la isla en busca de yacimientos de oro, descubre los
						cadáveres de unos 80 Selk'nams, todos con signos de haber sido balaeados.
					</p>
					<h3>2.4.2.2.6. Las "prácticas de tiro"</h3>
					<p>
						Existen testimonios que indican que durante la segunda mitad del
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Siglo_XIX&amp;sa=D&amp;ust=1562476720938000">
							siglo XIX
						</a>
						y las primeras décadas del
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Siglo_XX&amp;sa=D&amp;ust=1562476720939000">
							siglo XX
						</a>
						, los barcos que pasaban por el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Estrecho_de_Magallanes&amp;sa=D&amp;ust=1562476720939000">
							Estrecho de Magallanes
						</a>
						o por la costas oriental y sur de la isla realizaban prácticas de tiro utilizando como blanco a
						los indios onas: cuando divisaban a lo lejos una fogata, o una toldería, disparaban contra
						ellas. Se ignora la cantidad de víctimas que pudieron haber causado tales prácticas.
					</p>
					<h2>2.4.2.2.7. El rol de las enfermedades</h2>
					<p>
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Tuberculosis&amp;sa=D&amp;ust=1562476720939000" />
					</p>
					<p>
						Cuando los europeos llegaron al Nuevo Mundo, trajeron consigo enfermedades para las cuales los
						indígenas estaban completamente indefensos, pues sus sistemas inmunológicos no estaban
						preparados para ellas. Así, la
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Viruela&amp;sa=D&amp;ust=1562476720939000">
							viruela
						</a>
						, la
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Tuberculosis&amp;sa=D&amp;ust=1562476720939000">
							tuberculosis
						</a>
						y otros males causaron gran cantidad de víctimas entre la población indígena de América y, en
						algunos casos, la desaparición de grupos étnicos enteros.
					</p>

					<p>
						Siendo un fenómeno completamente natural, exculpa al hombre blanco de la desaparición de
						numerosos pueblos aborígenes, pero se conoce al menos un caso en el que el hombre blanco usó las
						enfermedades de manera voluntaria y consciente para exterminar a la población indígena:
					</p>

					<p>
						En
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/1763&amp;sa=D&amp;ust=1562476720940000">
							1763
						</a>
						, Lord
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Jeffrey_Amherst&amp;sa=D&amp;ust=1562476720940000">
							Jeffrey Amherst
						</a>
						, comandante general de las fuerzas británicas en la guerra entre Gran Bretaña y Francia por la
						posesión de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Quebec&amp;sa=D&amp;ust=1562476720940000">
							Quebec
						</a>
						, obsequió a un grupo de aborígenes aliados de los franceses gran número de frazadas. Lo que los
						aborígenes ignoraban era que las frazadas habían sido utilizadas anteriormente en el hospital de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Massachusetts&amp;sa=D&amp;ust=1562476720940000">
							Massachusetts
						</a>
						, en el pabellón de enfermos de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Viruela&amp;sa=D&amp;ust=1562476720940000">
							viruela
						</a>
						: al cabo de un mes, la tribu se había extinguido por completo.
					</p>

					<p>
						No hay indicios de que algo así haya ocurrido en Tierra del Fuego, pero sí se sabe lo siguiente:
					</p>

					<ul>
						<li>
							La
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Misi%25C3%25B3n_Salesiana_(R%25C3%25ADo_Grande)&amp;sa=D&amp;ust=1562476720941000">
								Misión Salesiana
							</a>
							, la única entidad que trabajaba en favor de los onas, y donde los onas recibían tratamiento
							contra la tuberculosis, solicitó insistentemente ayuda material o financiera a las
							autoridades de la isla, y estos siempre se lo negaron.
						</li>
						<li>Al menos en dos ocasiones, las autoridades intentaron cerrar la misión.</li>
					</ul>

					<p>
						Se estima que en los primeros 25 años de funcionamiento de la Misión Salesiana, murieron allí
						unos 200 aborígenes víctimas de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Tuberculosis&amp;sa=D&amp;ust=1562476720941000">
							tuberculosis
						</a>
						.
					</p>
					<h3>2.4.2.2.3. Los cazadores de indios</h3>
					<ul>
						<li>
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Julio_Popper&amp;sa=D&amp;ust=1562476720942000">
								Julio Popper
							</a>
						</li>
						<li>
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Ram%25C3%25B3n_Lista&amp;sa=D&amp;ust=1562476720942000">
								Ramón Lista
							</a>
						</li>
						<li>
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DAlexander_McLennan%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720942000">
								Alexander McLennan
							</a>
						</li>
						<li>"Mister Bond"</li>
						<li>
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DAlejandro_Cameron%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720943000">
								Alejandro Cameron
							</a>
						</li>
						<li>
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DSamuel_Hyslop%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720943000">
								Samuel Hyslop
							</a>
						</li>
						<li>
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DJohn_Mc_Rae%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720944000">
								John Mc Rae
							</a>
						</li>
						<li>
							<a href="https://www.google.com/url?q=http://es.wikipedia.org/w/index.php?title%3DMontt_E._Wales%26action%3Dedit%26redlink%3D1&amp;sa=D&amp;ust=1562476720944000">
								Montt E. Wales
							</a>
						</li>
						<li>Saham: (Sam Ishlop): Ingles</li>
						<li>José Díaz: Portugues, cazador de cabezas selknam</li>
						<li>Kovasich : Yugoeslavo, cazador de cabezas Selk'nam</li>
					</ul>
					<p />

					<p>2.4.2.2.3.1. Alexander MACLENNAN - el Chancho colorado</p>

					<p>
						Criado en Muir de Tarradale como panadero 1889 se unió al ejército (Cameron Highlanders) -
						descargado 9 meses más tarde por razones médicas, en 1895 emigró a la Patagonia; 1895 Río
						Grande, pasó varios meses en la Misión Salesiana; 1896 pasajero en el "Azopardo", encalló en Río
						Grande; Capataz de la Estancia Primera Argentina; Se convirtió en uno de los cazadores indios
						más conocidos - apodado "Chancho Colorado" (literalmente, "Cerdo Rojo"); 1897 herido por la
						flecha en la espina dorsal; 1906 justicia de paz en Rio Grande; re. 1917 Punta Arenas; No se
						casó ni dejó descendencia.
					</p>

					<p>
						En 1896, Alejandro Maclennan fue contratado como capataz en la Estancia primera Argentina, el
						primer gran proyecto ganadero de José Menéndez en el sector argentino de Tierra del Fuego. En
						los primeros años de la ganadería fueguina, los piños de ovejas sufrían pérdidas causadas por
						los indígenas ( Ona / Sélknam ), provocando represalias de los dueños y sus administradores.
						Varios hombres llegaron a ser tristemente "famosos" por sus asesinatos, entre ellos Alejandro,
						reconocido por el apodo " Chancho Colorado ". Circulaban rumores que se pagaba por la muerte de
						cada nativo, bajo presentación de una oreja cortada.
					</p>

					<p>
						Se presumía que todas las empresas ganaderas toleraban este genocidio en mayor o menor escala,
						aunque públicamente instaban a las autoridades argentinas y chilenas a "trasplantar" los
						indígenas a un lugar "menos conflictivo" - por ejemplo, a isla Dawson, que fuera cedida a los
						Salesianos para este propósito.
					</p>

					<p>2.4.2.2.3.2. Julius Popper – El tirano de tierra del fuego</p>

					<p>
						Jul ius Popper fue un aventurero nacido en Rumania, ingeniero y eventual déspota cuya biografía
						se lee más como ficción que como hecho. Su padre era un intelectual y un exitoso distribuidor de
						antigüedades que aparentemente impresionó a Ju lius con historias de tierras y riquezas lejanas.
						Tan pronto como pudo Popper, salió de Bucarest para París, donde estudió ingeniería civil y
						mecánica. Una vez que Popper terminó sus estudios, su vagabundeo lo superó y comenzó a viajar
						por el mundo.
					</p>

					<p>
						Partiendo de París, viajó a Turquía y luego a Egipto, luego a China, India, Japón, Estados
						Unidos y finalmente a Sudamérica. Sus viajes en América Latina lo llevaron a Cuba, donde se le
						atribuye la creación de la huella de la moderna Habana.
					</p>

					<p>
						Mientras exploraba Brasil en 1885, Popper se enteró de la fiebre del oro que se estaba
						produciendo en el sur de Argentina, cerca del estrecho de Magallanes. Rápidamente se dirigió a
						Buenos Aires y luego a Cape Virgin, uno de los primeros campos mineros. Poco después de la
						llegada de Popper, la minería agresiva había agotado la mayoría de las excavaciones, lo que
						llevó a Popper a formar su propia compañía de exploración minera. Comprendía un grupo de 18
						hombres, en su mayoría austríacos, para los que Popper había conseguido suministros y una enorme
						cantidad de armamento, aparentemente para proteger cualquier oro que la compañía pudiera
						encontrar de los puentes de reclamación.
					</p>
					<p>
						A finales de 1886, Popper y sus hombres desembarcaron en Future Bay, en la isla de Tierra del
						Fuego, un lugar que en ese momento estaba más o menos completamente inexplorado. Después de
						aterrizar, el grupo trekked a través de la isla sin encontrar ningunos depósitos de oro ricos.
						Empujando al este, alcanzaron eventual la bahía de San Sebastián donde descubrieron los
						depósitos de la arena negra que recuerda de las arenas ricamente productivas que habían
						contenido el oro en cavar de la Virgen del cabo.
					</p>

					<p>
						Popper y sus hombres continuaron explorando, al regresar a la zona y establecer el asentamiento
						de El Páramo. Suministros y refuerzos llegaron y pronto la compañía de Popper, Lavaderos de Oro
						del Sur - las Arandelas de Oro del Sur - producía oro en cantidad. Un año después de aterrizar
						en Bahia Futuro, los hombres de Popper extrajeron unas impresionantes 154 libras de oro fino.
						Con su nueva riqueza y estatus, los sueños de Popper de la grandeza comenzaron a adquirir una
						vida propia. Los indios de Tierra del Fuego, que se habían enfrentado con los hombres de Popper
						poco después de su llegada a la isla y fueron los primeros en afrontar su megalomanía.
					</p>

					<p>
						Popper los consideraba subhumanos, y él y sus hombres chocaban con ellos frecuentemente. Sin
						armas, los indios estaban indefensos para los mercenarios pesadamente armados de Popper, y los
						informes que él y sus hombres cazaron a indios como el juego pronto comenzaron a circular. Esta
						impresión fue ayudada por una fotografía en la que Popper posó con una pistola, de pie a
						horcajadas sobre el cadáver de una de sus víctimas. Popper volvió a Buenos Aires en 1886 para
						perfeccionar sus reclamaciones a las excavaciones que había establecido en Tierra del Fuego.
						Pasó su tiempo libre enseñando y recaudando fondos para los Lavaderos de Oro del Sur - listando
						a la compañía en la bolsa argentina con gran éxito.
					</p>

					<p>
						En 1889, Popper había regresado a Tierra del Fuego, acompañado por un gran contingente de
						hombres que él comandaba con precisión militar. La noticia de sus exitosas excavaciones se había
						extendido y él y sus hombres comenzaron a tener problemas con proscritos y posibles ladrones,
						algunos de los cuales provenían de Chile. Sus esfuerzos para repeler a estos intrusos fueron
						brutales pero efectivos, y atrajo el interés del gobierno chileno, que montó una expedición para
						librar a Tierra del Fuego del régimen de Popper. Ayudado por el clima extremo de Tierra del
						Fuego, Popper logró someter al ejército chileno, reforzando así su dominio en la isla. Después
						de su choque con los chilenos, parte del oro que Popper y sus hombres minaron en 1889 fue usado
						para acuñar las monedas de las excavaciones de El Páramo. Estas monedas se hicieron en dos
						denominaciones (o quizás más apropiadamente, pesos) 1 Gramo y 5 Gramos. No se sabe exactamente
						cuántas de estas piezas fueron hechas, pero pocas han sobrevivido - menos de diez de un gramo y
						sólo dos o tres de cinco gramos se conservan hoy en dia.
					</p>

					<p>
						En algún momento, Popper trasladó su operación de acuñación a Buenos Aires. Las monedas
						golpeadas allí fueron hechas usando equipo moderno de la acuñación y carecen del encanto crudo
						de los ediciones anteriores de Popper. El autodenominado gobernante de Tierra del Fuego también
						emitió incluso sellos postales en su nombre y fue un clara señal de su poder en la región y pero
						por sobre todo un símbolo de su megalomanía.
					</p>

					<p>
						En junio de 1893, Julius Popper fue encontrado muerto en su departamento de Buenos Aires, la
						aparente víctima de veneno. Si murió por su propia mano, fue víctima de un socio de negocios
						celoso o uno de sus muchos enemigos amargos nunca se ha determinado. Ayudado por el misterio que
						rodea su muerte, el legado de Popper se ha convertido en la materia de la leyenda en América del
						Sur. Él ha sido el tema de varios libros, una película salvajemente imprecisa, una banda de rock
						y una marca de ropa.
					</p>

					<p>2.4.2.3. Los zoológicos humanos</p>

					<p>
						Con la venia del Estado chileno, en 1889, once Selk'nam -entre ellos un niño de 8 años- fueron
						llevados a Europa para ser exhibidos y tratados como animales. Los indígenas patagónicos eran
						una rareza. Así los trataron. Así murieron.
					</p>
					<p>
						A veces les prometían aventuras, y otras, simplemente, se los llevaban sin prometer demasiado.
						Desde las frías costas magallánicas, los galeones zarparon a principios del siglo XIX rumbo al
						Viejo Mundo, con una carga bastante codiciada: decenas de aborígenes para exhibir en parques,
						ferias y museos. En nombre de la ciencia y del progreso, los envíos contaban con la autorización
						del Estado de Chile.
					</p>
					<p>
						Esa fue la suerte que corrieron, entre 1878 y 1900, tres grupos de nativos pertenecientes a las
						etnias Tehuelche, Kawésqar y Selk'nam. Fotografiados, medidos y obligados a actuar en público,
						muchos de ellos no lograron volver a la tierra de la que fueron arrancados.
					</p>

					<p>
						Su idea fue potenciar el fenómeno del zoológico, una mina de oro a fines del siglo XVIII.
						Patentado su invento como “Zoológicos Humanos”, el empresario alemán Carl Hagenbeck aprovechó
						sus contactos con el mundo científico y se dedicó a reclutar aborígenes. Entre ellos, un grupo
						de Tehuelches. Capturado en 1879, el grupo patagón fue el primero en llegar a Europa.
						Interesados por los comentarios de Darwin, quien en la década del 30 describió a los fueguinos
						como seres “abyectos y miserables”, los científicos no escondieron su interés por averiguar si
						eran o no el eslabón perdido entre el ser humano y el simio.
					</p>

					<p>
						Sólo debían actuar de “ellos mismos”. Pero de acuerdo al imaginario de lo salvaje, todos los
						aborígenes chilenos fueron provistos de arcos, flechas, pipas y plumas. El público, que pagaba
						para verlos cantar, tocar instrumentos o hacer rituales, también les arrojaría carne cruda,
						creyendo que se trataba de caníbales. Producto del sarampión o de la viruela, muchos murieron en
						el camino.
					</p>
					<p>
						Las fuentes también constatan el abuso de varias mujeres por parte de los guardias, de quienes
						contrajeron enfermedades venéreas. Luego de ser exhibidos en jaulas en Hamburgo, Berlín y
						Dresden, el grupo de tehuelches retornó tres meses después a tierra chilena. Aparte del trauma,
						no sufrieron mayores daños físicos. Los que siguieron, sin embargo, no tuvieron la misma
						suerte.Con ocasión de los100 años de la “igualdad, libertad y fraternidad”, la Exposición
						Universal de París (1889) tuvo entre sus atracciones una flamante Torre Eiffel y una “Aldea
						Negra”, compuesta por 400 nativos. Once Selk'nam fueron capturados por el ballenero belga
						Maurice Maîtrepara para participar en la muestra, pero sólo nueve sobrevivieron la travesía. Una
						mujer embarazada y un niño llamado Calafate figuran entre los secuestrados.
					</p>
					<p>
						“Todo indica que Calafate se quedó por su propia voluntad”. Tras ser expuestos en París y luego
						en el Royal Aquarium de Londres, los Selk'nams fueron llevados al Museo de Cera de Bélgica.
						Mientras, una entidad cristiana pondría la voz de alerta, provocando un conflicto entre
						diplomáticos y asociaciones humanitarias que les canjearía el pasaje de regreso. Bajo el cuidado
						de un chileno que viajó como guardia desde Tierra del Fuego, Calafate se quedó en Europa durante
						un año.
					</p>
					<p>
						Los archivos salesianos de Roma revelaron a los investigadores el paradero de Calafate:
						acompañado de un sacerdote, regresó a Punta Arenas. Otro artículo, publicado en el diario El
						Magallanes, también se referirá al menor, aunque sin aludir a su paso por los zoológicos
						humanos.
					</p>
					<p />
					<p>
						En el año 2002, el historiador chileno Christian Báez junto a su colega inglés Peter Mason
						encontró una serie de fotografías de indígenas del extremo sur de América exhibidos en París y
						otras capitales de Europa en los llamados “Zoológicos Humanos” en la década de 1880; cuatro años
						después publicaron el libro “Zoológicos Humanos. Fotografías de fueguinos y mapuche en el Jardín
						d’Acclimatation de París, siglo XIX”, (Editorial Pehuén, Santiago) con medio centenar de
						imágenes producto de dicha investigación.
					</p>
					<p>
						Decidieron posteriormente construir un material fílmico denominado Calafate. Esto en razón del
						nombre de un niño Selk'nam de ocho años, encontrado en suelo europeo, al igual que el hallazgo
						de las osamentas de cinco Kawésqar, en el departamento de antropología de la Universidad de
						Zürich, Suiza y gracias a esta extensa investigación, se pudo repatriar las osamentas de los
						kawésqar encontrados.
					</p>

					<p>2.4.2.4. Los Selk'nam esbozan una resistencia ante los estancieros</p>
					<p>
						Alrededor de esta fecha, siete indios intentan robar una caballada y se encuentran
						sorpresivamente con los peones de la estancia de la Sociedad Explotadora de Tierra del Fuego,
						armados con sus rifles, que los estaban esperando para frustrar el asalto. Según el relato del
						historiador Juan Belza la secuencia de hechos continúa con la muerte de dos guardias y la
						sustracción de sus armas.
					</p>
					<p>
						Este relato es parte de una serie de acontecimientos protagonizados por los nativos, que veían
						perder su espacio vital de subsistencia por la persecución y matanza que les propinaron los
						estancieros. Según Alberto De Agostini, “los indios reaccionaron defendiéndose con el arco y la
						flecha, más sus armas eran débiles frente a las del enemigo y bien pronto cayeron aniquilados
						por las balas de los blancos”.
					</p>
					<p>
						El historiador chileno Mateo Martinic relata cómo los Selk'nam fueron respondiendo violentamente
						a los ataques de los mineros o los exploradores y cita numerosos actos de violencia, como fue el
						caso del Selk'nam Capelo, que robó armas, municiones y vestimenta a los blancos, que atacó a un
						grupo de mineros e infligió varias muertes y culminó su historia siendo asesinado por la
						policía.
					</p>
					<p>
						Bridges cuenta en su libro que “Kilkoat estaba más sediento de venganza que nunca. Al poco
						tiempo un grupo de mineros acampó a dieciséis kilómetros del lugar donde fue muerta su mujer;
						Kilkoat observaba y esperaba. Hasta que un día vio a un hombre armado con un rifle que caminaba
						solo a lo largo de la playa (...) lo dejó avanzar unos metros y lo flechó por la espalda. Luego
						tomó el Winchester y las municiones de su víctima y se alejó apresuradamente”.
					</p>
					<p>
						También se producen acciones defensivas ante las persecuciones policiales, donde los Selk'nam
						despliegan las habilidades propias de los grupos cazadores – recolectores en cuanto al
						aprovechamiento del medio como estrategia adecuada para la resistencia.
					</p>
					<p>
						Martín Gusinde consideraba los Selk'nam eran “un pueblo sensible, irritable y vengativo que
						cuida celosamente sus derechos y no deja ni una sola violación sin castigo”.
					</p>

					<p>2.5. Investigación Geográfica.</p>

					<p>2.5.1. Ubicación geográfica</p>

					<p>Habitaban el centro y norte de la actual provincia de Tierra del Fuego.</p>
					<p />
					<p>2.5.2. Landscapes/ Paisaje</p>

					<p>
						La
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Meseta_patag%25C3%25B3nica&amp;sa=D&amp;ust=1562476720949000">
							Región de la Patagonia Extra andina
						</a>
						bioma naturalmente
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Estepa&amp;sa=D&amp;ust=1562476720949000">
							estepario
						</a>
						, semidesértico y
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Des%25C3%25A9rtico&amp;sa=D&amp;ust=1562476720949000">
							desértico
						</a>
						, con helados inviernos. Abundan en esta región el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lama_guanicoe&amp;sa=D&amp;ust=1562476720950000">
							guanaco
						</a>
						, la
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Dolichotis_patagonum&amp;sa=D&amp;ust=1562476720950000">
							mara
						</a>
						, el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Puma_concolor&amp;sa=D&amp;ust=1562476720950000">
							puma
						</a>
						, y hasta mediados del XIX en el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Panthera_onca&amp;sa=D&amp;ust=1562476720950000">
							yaguareté
						</a>
						(en su sector norte). Entre las aves se destacan el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Vultur_gryphus&amp;sa=D&amp;ust=1562476720950000">
							cóndor
						</a>
						(que hasta mediados del siglo XX llegaba hasta el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Oc%25C3%25A9ano_Atl%25C3%25A1ntico&amp;sa=D&amp;ust=1562476720950000">
							Océano Atlántico
						</a>
						en toda esta región)[
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Wikipedia:Verificabilidad&amp;sa=D&amp;ust=1562476720951000">
							cita requerida
						</a>
						], y el choique (
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Rhea_pennata&amp;sa=D&amp;ust=1562476720951000">
							Rhea pennata
						</a>
						). En las lagunas podemos encontrar al
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Flamenco&amp;sa=D&amp;ust=1562476720951000">
							flamenco
						</a>
						, el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Cisne_de_cuello_negro&amp;sa=D&amp;ust=1562476720951000">
							cisne de cuello negro
						</a>
						y macaes como el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Mac%25C3%25A1_tobiano&amp;sa=D&amp;ust=1562476720951000">
							macá tobiano
						</a>
						a los que se suman diversas
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/An%25C3%25A1tidas&amp;sa=D&amp;ust=1562476720951000">
							anátidas
						</a>
						endémicas como son las diferentes especies de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Cauqu%25C3%25A9n&amp;sa=D&amp;ust=1562476720952000">
							cauquenes
						</a>
						("avutardas del sur") o el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Ganso_de_Magallanes&amp;sa=D&amp;ust=1562476720952000">
							ganso de Magallanes
						</a>
						; son frecuentes las
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Aves_de_rapi%25C3%25B1a&amp;sa=D&amp;ust=1562476720952000">
							aves de rapiña
						</a>
						y depredadoras tales como el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Carancho&amp;sa=D&amp;ust=1562476720952000">
							carancho
						</a>
						,
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Caracara&amp;sa=D&amp;ust=1562476720953000">
							caracara
						</a>
						,
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Chimango&amp;sa=D&amp;ust=1562476720953000">
							chimango
						</a>
						y
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Aguilucho&amp;sa=D&amp;ust=1562476720953000">
							aguilucho
						</a>
						. En las estepas abundan la
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Chilla&amp;sa=D&amp;ust=1562476720953000">
							chilla
						</a>
						o
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Zorro_gris_patag%25C3%25B3nico&amp;sa=D&amp;ust=1562476720953000">
							zorro gris patagónico
						</a>
						, y el
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Culpeo&amp;sa=D&amp;ust=1562476720953000">
							culpeo
						</a>
						o
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Zorro_colorado&amp;sa=D&amp;ust=1562476720954000">
							zorro colorado
						</a>
						(una especie de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Zorro&amp;sa=D&amp;ust=1562476720954000">
							zorro
						</a>
						de mayor alzada que todos los otros zorros), en las
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Islas_Malvinas&amp;sa=D&amp;ust=1562476720954000">
							islas Malvinas
						</a>
						abundaba otro
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/C%25C3%25A1nido&amp;sa=D&amp;ust=1562476720954000">
							cánido
						</a>
						: el guará (
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Dusicyon_australis&amp;sa=D&amp;ust=1562476720954000">
							Dusicyon australis
						</a>
						) pero este cánido fue exterminado por los británicos durante la segunda mitad del siglo XIX.
						Las costas de esta región merecen párrafo aparte: en ellas abundan las colonias de diversas
						especies de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Ping%25C3%25BCino&amp;sa=D&amp;ust=1562476720954000">
							pingüinos
						</a>
						, así como
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lobo_marino&amp;sa=D&amp;ust=1562476720955000">
							lobos marinos
						</a>
						y
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Elefante_marino&amp;sa=D&amp;ust=1562476720955000">
							elefantes marinos
						</a>
						(es decir:
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Pinn%25C3%25ADpedos&amp;sa=D&amp;ust=1562476720955000">
							pinnípedos
						</a>
						y
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Phocoenidae&amp;sa=D&amp;ust=1562476720955000">
							focénidos
						</a>
						). En las aguas costeras abundan los
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Cet%25C3%25A1ceos&amp;sa=D&amp;ust=1562476720955000">
							cetáceos
						</a>
						tales como las
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Cephalorhynchus&amp;sa=D&amp;ust=1562476720955000">
							toninas
						</a>
						y los delfines como el cruzado (
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lagenorhynchus_cruciger&amp;sa=D&amp;ust=1562476720956000">
							Lagenorhynchus cruciger
						</a>
						), el austral (
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lagenorhynchus_australis&amp;sa=D&amp;ust=1562476720956000">
							Lagenorhynchus australis
						</a>
						) y el calderón común (
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Globicephala_melas&amp;sa=D&amp;ust=1562476720956000">
							Globicephala melas
						</a>
						). Solo en las costas australes de
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Tierra_del_Fuego&amp;sa=D&amp;ust=1562476720956000">
							Tierra del Fuego
						</a>
						podremos llegar a encontrar alguna nutria marina o chungungo (
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lontra_felina&amp;sa=D&amp;ust=1562476720956000">
							Lontra felina
						</a>
						).
					</p>

					<p>2.5.3. Flora</p>

					<p>
						Solo el 30% de la isla tiene bosque, el cual es clasificado como Magallánico sub polar; el
						noreste de la isla es stepa fresca y semidesértica.
					</p>

					<p>Hay 6 especies de árboles encontrados en Tierra del Fuego:</p>

					<p>2.5.3.1. Canelo o Winter’s Back</p>

					<p>
						2.5.3.2.
						<a href="https://www.google.com/url?q=http://en.wikipedia.org/wiki/Maytenus_magellanica&amp;sa=D&amp;ust=1562476720957000">
							Maytenus magellanica
						</a>
					</p>

					<p>
						2.5.3.3.
						<a href="https://www.google.com/url?q=http://en.wikipedia.org/wiki/Pilgerodendron_uviferum&amp;sa=D&amp;ust=1562476720957000">
							Pilgerodendron uviferum
						</a>
					</p>

					<p>
						2.5.3.4.
						<a href="https://www.google.com/url?q=http://en.wikipedia.org/wiki/Nothofagus_antarctica&amp;sa=D&amp;ust=1562476720957000">
							Nothofagus antarctica
						</a>
					</p>

					<p>
						2.5.3.5.
						<a href="https://www.google.com/url?q=http://en.wikipedia.org/wiki/Nothofagus_pumilio&amp;sa=D&amp;ust=1562476720958000">
							Nothofagus pumilio
						</a>
					</p>

					<p>
						2.5.3.6.
						<a href="https://www.google.com/url?q=http://en.wikipedia.org/wiki/Nothofagus_betuloides&amp;sa=D&amp;ust=1562476720958000">
							Nothofagus betuloides
						</a>
					</p>

					<p>
						Sólo el 30% de las islas tienen bosques, que están clasificados como Magallánico subpolar; El
						noreste se compone de estepa y semidesierto fresco.
					</p>

					<p>
						Existen seis especies de árboles en Tierra del Fuego: Canelo o Corteza de Invierno (Drimys
						winteri), Maytenus magellanica, Pilgerodendron uviferum, la conífera más meridional del mundo, y
						tres tipos de Haya del Sur; Nothofagus antarctica, Nothofagus pumilio y el árbol de hoja perenne
						Nothofagus betuloides. Las frutas crecen en espacios abiertos en estos bosques, como la fresa de
						la playa (Fragaria chiloensis var. Chiloensis formachiloensis) y el calafate (Berberis
						buxifolia), que fueron y son recogidos respectivamente por indios y compatriotas. Estos bosques
						son únicos en el mundo por haberse desarrollado en un clima con veranos tan fríos. La cubierta
						del árbol se extiende muy cerca de la punta más meridional de América del Sur. Los vientos son
						tan fuertes que los árboles en las áreas expuestas al viento crecen retorcidos por la fuerza de
						los vientos, y la gente llama a los árboles "árboles de bandera" para la forma que necesitan
						para tomar en la lucha con el viento. La vegetación arbórea se extiende hasta el sur como la
						Isla de los Estados, la isla Navarino y el norte de la isla Hoste. A altitudes superiores a 500
						m (1.640 pies), se encuentran comunidades de nothofagus enanas. Más al sur, las islas Wollaston
						y el sur de la isla Hoste están cubiertas por la tundra antártica submarina.
					</p>

					<p>2.5.4. Fauna</p>

					<p>
						2.5.4.1. Zorro colorado: Junto con el guanaco es una de las especies autóctonas del lugar. De
						amplia distribución en toda la Cordillera de los Andes, en Tierra del Fuego ocupa principalmente
						las Selk'nam boscosas. Es carnívoro, y el conejo constituye actualmente la fuente principal de
						su dieta, también incluye pequeños roedores y aves. Reconocible por su cola larga y abultada, el
						zorro mide más de un metro (incluyendo la cola) y pesa entre 8 y 13 Kg. El alto valor comercial
						de su piel, sumado a su curiosidad, han hecho del zorro una presa fácil por parte del hombre.
						Actualmente es especie protegida.
					</p>
					<p>
						De hábitos solitarios, su época de celo tiene lugar en agosto y septiembre. Durante el cortejo
						varios machos siguen a una hembra que se aparea con el más fuerte y agresivo. Cavando una cueva
						o utilizando la de otro animal, la hembra da a luz entre tres y seis cachorros, mientras el
						macho se encarga de proveer el alimento a la madre y a sus crías.
					</p>
					<p>
						2.5.4.2. Zorro gris patagónico: Este zorro es de menor porte que el zorro colorado fueguino, sus
						patas son proporcionalmente más cortas. Su color es grisáceo con patas y flancos leonados
						levemente rojizos, y en el extremo de la cola es oscuro al igual que el hocico. Mide
						aproximadamente 80 a 90 cm., abarcando desde su cola 30 a 36 cm.
					</p>
					<p>
						Su distribución es propia de la Patagonia desde Río Negro hasta el Estrecho de Magallanes y Sur
						de Chile.
					</p>
					<p>
						Normalmente se alimenta de insectos, ovinos, aves (como el cauquén, el pato crestón, el
						chimango, la gaviota cocinera) también roedores como el tuco-tuco magallánico, la rata, el
						conejo, el ratón hocico amarillento, aunque también complementan su dieta frutos silvestres,
						reptiles, crustáceos anfípodos y arácnidos.
					</p>
					<p>
						2.5.4.3. Guanaco: Tiene aspecto de llama (llama Glauca) y es uno de los mamíferos más altos de
						la fauna terrestre argentina. Sus patas poseen amplias almohadillas y dos pezuñas bien
						divergentes, su pelo es grueso y largo de color ocre, más o menos amarillento, posee una cola
						proporcionalmente corta que mide unos 27 cm.
					</p>
					<p>
						La distribución del guanaco abarca la zona andina desde el Sur de Bolivia hasta la Patagonia y
						Tierra del Fuego.
					</p>
					<p>
						Es un animal gregario de costumbre diurnas, habitualmente anda en grupos o tropillas integradas
						por un macho adulto con cuatro a diez hembras, aunque a veces forman grupos más grandes (de un
						centenar de animales fuera de la época de cría). Los machos jóvenes se agrupan formando nuevas
						tropillas. Los machos viejos y a veces las hembras con sus crías pueden verse en forma aislada y
						solitaria
					</p>
					<p>
						2.5.4.3. Aguila Mor: Del orden de los falconiformes y de la familia de las accipitridae, el
						águila mora (black chested buzzard eagle) alcanza un tamaño de aproximadamente 53 cm (el macho,
						la hembra, algo más). Es un ave carroñera de vuelo lento (planeo) a gran altura, de manera tal
						que en los avistajes a veces es confundida con el cóndor, sin embargo, sus alas son más
						triangulares y la talla, menor. Ubica sus nidos en lo alto de los acantilados y a veces en
						árboles elevados.
					</p>

					<p>
						La hembra pone uno o dos huevos. Las águilas juveniles son de color marrón con mechas más claras
						y tardan años en desarrollar su plumaje caiquenes, patos silvestres, cisnes y flamencos,
						definitivo color gris claro con el pecho blanco y negro cerca de la cabeza.
					</p>

					<p>2.5.4.4. Bandurria (autóctona ):</p>
					<p>
						La bandurria , del orden de los ardeiformes y de la familia de las threskiornithhidae, puede
						alcanzar un tamaño de unos 60 cm. Se alimenta de de hierbas, gusanos e insectos.
					</p>
					<p>
						Acostumbran a nidificar entre los juncos y en cercanías de las lagunas. Viven siempre en
						Selk'nam húmedas y en invierno, migran hacia Selk'nam más cálidas. Ponen de dos a tres huevos
						por vez. Perteneciente a la familia de los
						<a href="https://www.google.com/url?q=http://www.idoneos.com/index.php/concepts/ibis&amp;sa=D&amp;ust=1562476720960000">
							ibis
						</a>
						es particular el sonido que emiten: nasal, como una bocina. Suelen volcar muy alto.
					</p>

					<p>
						2.5.4.5. Cachaña (autóctona ): La chachaña pertenece al orden de los psittaciformes y a la
						familia de los psittacidae. Su tamaño alcanza los 35 cm. Ubica sus nidos preferentemente en los
						agujeros de los árboles en donde pone de 4 a 6 huevos. Se alimenta de granos y semillas. Su
						hábitat suele hallarse en los bosques, migrando en inverno hacia Selk'nam más descubiertas.
					</p>
					<p />
					<p>
						2.5.4.6. Carancho( autóctona ): Esta ave pertenece al orden de los falconiformes y a la familia
						de los falconidade. Miden aproximadamente 60 cm. Hembras y machos tiene el mismo plumaje. La
						hembra pone de dos a tres huevos y los juveniles se diferencian de los adultos por un plumaje
						crema grisáceo más oscuro cerca de l cabeza. La alimentación de ésta ave es muy variada, su
						dieta incluye carroña pero también presas vivas, como corderos y ovejas enfermas.El carancho es
						un ave atrevida y astuta. En las peleas entre machos en época de apareamiento, con frecuencia
						mueren a causa de las heridas. Sus compañeros no dudan en comerse al mal herido.Un dato
						interesante es que solo forma una pareja a lo largo de su vida. También son fijos sus lugares de
						descanso: el mismo árbol, e incluso, la misma rama.
					</p>

					<p>
						2.5.4.7. Carpintero patagónico (autóctona ): El carpintero patagónico pertenece a la familia de
						los picidae. Su tamaño, puede alcanzar los 40 cm. El macho tiene roja su cabeza y el cuerpo
						negro, mientras que ha hembra, completamente negra, posee plumas blancas en el dorso y el
						penacho algo más pronunciado.
					</p>

					<p>
						Se trata de una ave muy vistosa. El sonido de su martilleo sobre los árboles, permite
						identificarlo con facilidad. Es fácil acercarse a él, porque suele ser una especie muy confiada.
					</p>

					<p>
						Básicamente se alimenta de larvas a las que atrapa después de fuertes picotazos sobre el tronco
						de los árboles. Aprovecha los huecos de los árboles para instalar sus nidos, en donde pone de 3
						a 5 huevos por vez.
					</p>
					<p />
					<p>
						2.5.4.8. Cauquén común(Cloephaga picta): Pertenece al orden de los anseriformes y a la familia
						de las anatidae. Su tamaño es de aproximadamente 75 cm. Se alimenta de pastos verdes y vive
						siempre en las proximidades de los lugares húmedos. Su pareja es estable durante toda la vida.
						Hacia el final del otoño, migran hacia el norte en grandes bandadas.El macho, es de color blanco
						y negro, la hembra, castaña con franjas negras.
					</p>
					<p>
						2.5.4.9. Cisne de cuello negro (autóctona ): Pertenece al orden de los anseriformes y a la
						familia de los anatidae. Puede medir unos 120 cm, alimentándose de plantas acuáticas, insectos
						(y moluscos, en ambiente marino).No existen diferencias morfológicas entre machos y hembras, y
						al igual que el cauquén, mantiene una pareja estable durante toda su vida. Suele vivir en
						ambientes acuáticos, incluso en las costas marinas. Posee un vuelo dificultoso al despegar, pero
						ya en el aire es muy veloz.
					</p>
					<p>
						Es una ave desconfiada frente a los humanos, en efecto, su preciado plumaje fue muy codiciado.
						En caso de peligro, las crías se suben al lomo de sus padres para huir más rápidamente en grupo.
						En invierno migra hacia latitudes más cálidas.
					</p>

					<p>
						2.5.4.10. Chingolo (sornotrichia capensis): El chingolo , uno de los pájaros más frecuentes en
						el territorio patagónico. El macho posee colores algo más vivos que la hembra y también un
						pequeño penacho. La especie pertenece al orden de los passeriforme y la familia de las
						emberizidae. Alcanza un tamaño de 14 cm.se alimenta de granos, larvas e insectos. Es capaz de
						cazar insectos en grandes cantidades cuando está alimentando a sus crías. Se trata de una
						especie muy inquieta y atrevida, capaz de adaptarse tanto a los bosques cordilleranos como a la
						estepa. Merodea los alrededores de los emplazamientos humanos, aunque no es tan urbano como el
						gorrión.
					</p>
					<p />
					<p>
						2.5.4.11. Choique o Ñandú (pterocnemia pennata) : pertenece al orden de los rehinforme y a la
						familia de los rheidae. Los ejemplares machos pueden llegar a medir un metro de alto.
					</p>

					<p>
						Esta especie se alimenta de hierbas e insectos. El
						<a href="https://www.google.com/url?q=http://www.idoneos.com/index.php/concepts/choique&amp;sa=D&amp;ust=1562476720961000">
							choique
						</a>
						es un ave polígama y todas sus hembras ponen huevos en el mismo nido, que fue construido
						previamente por el macho. El macho se ocupa además de incubar los huevos, lo que tiene una
						duración de 40 días. Durante ese período, el macho prácticamente no se levanta del nido. Al
						nacer los pichones o
						<a href="https://www.google.com/url?q=http://www.idoneos.com/index.php/concepts/charos&amp;sa=D&amp;ust=1562476720961000">
							charos
						</a>
						, que pueden alcanzar el número de 40, sigue siendo el padre quien los atiende y acompaña. Si se
						trata de defender a sus crías puede ser muy valiente y se arriesgará a enfrentar a cualquier
						hombre o animal que considere amenazante.
					</p>
					<p>
						El choique es un ave típica de la estepa. Su carne y sus plumas fueron siempre codiciadas por
						los tehuelches
					</p>
					<p>
						Se trata de una especie desconfiada cuya mejor defensa, es la huída, en la que puede alcanzar
						velocidades de hasta 45 km por hora. Pero en cautiverio puede domesticarse fácilmente, llegando
						incluso a seguir a su “amo” con la misma fidelidad de un perro.
					</p>

					<p>
						El ñandú, curiosamente similar al avestruz, no tienen parentesco alguno con el australiano y se
						diferencia notablemente del africano. Por ejemplo, mientras que el avestruz africano tiene tan
						solo dos dedos en las patas, el ñandú, tiene tres.
					</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.biblioteca.clarin.com/pbda/miscelanea/nandu/nandu_03.html&amp;sa=D&amp;ust=1562476720962000" />
					</p>
					<p>
						2.5.4.12. Cóndor: Esta ave es la más grande entre las americanas, llegando a medir hasta 3 m de
						envergadura.
					</p>
					<p>
						El cóndor, emblema de los Andes, realiza su nido en paredones rocosos nunca en árboles. Puede
						planear hasta a 10.000 m de altura. Ave carroñera, también puede cazar excepcionalmente pequeñas
						crías abandonadas por su madre.
					</p>

					<p>3.Locaciones.</p>

					<p>3.1.1.- Tierra del fuego:</p>
					<p>con frío todo el año, con temperaturas medias anuales de 3 a 12 grados C.</p>
					<p>1.6.2.Karukinka : Era el termino Selk'nam para referirse a la tierra.</p>

					<p>3.1.2.- Haruwen: tierra, o pequeña comunidad, choza.</p>

					<p>
						3.1.4.- Estancia Despedida: La estancia despedida perteneció a un magnate ovejero llamado Jose
						Menendez, su capaz MacLennan o chancho colorado. Mataba Selk'nam para evitar que estos cazaran
						sus ovejas.
					</p>

					<p>
						3.1.5.- Barco Prisión: Es el barco en donde los indígenas son llevados para ser expuestos en el
						zoológico humano, varios murieron de viruela durante el viaje
					</p>

					<p>
						3.1.6.- Mision Salesiana La Candelaria: Ubicada en rio grande (Casali y Guichón 2008, MS),
						lugar en el que residieron aborígenes Selk'nam a medida que su territorio era irrumpido a causa
						de la actividad ganadera ovina, fue lugar de evangelización y de muerte por enfermedades.
					</p>

					<p>
						3.1.7.- Ushuaia : Pequeño poblado ubicado al sur del archipiélago, inicialmente creado por
						misioneros británicos , durante el 1880s recibió un gran cantidad de buscadores de oro, debido a
						infundados rumores que de la presencia de grandes cantidades de metal en la zona, en el Don
						Feliz M Paz, gobernador de la provincia, y Antonio A Romero el jefe de la policía territorial
						controlan el pueblo, Para 1904 El gobernador
					</p>

					<p>
						Durante la década de 1880, muchos buscadores de oro llegaron a Ushuaia tras rumores de grandes
						campos de oro, que resultaron ser falsos. El 12 de octubre de 1884, como parte de la expedición
						del Atlántico Sur, el comodoro Augusto Lasserre estableció la subdivisión de Ushuaia, con los
						misioneros y oficiales navales que firmaron el Acta de Ceremonia. Don Feliz M Paz fue nombrado
						gobernador de Tierra del Fuego y en 1885 nombró a Ushuaia su capital. En 1885 se organizó el
						territorio policial bajo la dirección de Antonio A Romero, con sede también en Ushuaia. Pero no
						fue hasta 1904 cuando el Gobierno Federal de Argentina reconoció a Ushuaia como la capital de
						Tierra del Fuego.
					</p>

					<p>4.1.- Contextualización sobre Tierra del Fuego</p>

					<p>
						Es un archipiélago de la punta más meridional del continente sudamericano, a través del Estrecho
						de Magallanes. El archipiélago se compone de una isla principal Isla Grande de Tierra del Fuego
						dividida entre Chile y Argentina con una superficie de 48.100 km2 y un grupo de islas más
						pequeñas incluyendo el Cabo de Hornos. Inicialmente descubierto por la expedición de Ferdinand
						Magallanes en 1520, las islas no fueron colonizadas por personas de ascendencia europea hasta la
						segunda mitad del siglo XIX en el apogeo de la cría de ovejas y auge de la fiebre del oro. La
						actividad económica de hoy en la parte norte de Tierra del Fuego está dominada por la extracción
						de petróleo, mientras que en el sur el turismo, la fabricación y la logística antártica son
						importantes. Los números de los nativos Selk'nam y Yaganes se redujeron en gran medida por las
						enfermedades introducidas y por los conflictos desiguales con los colonos. Hoy en día los
						Selk'nam están prácticamente extintos como una gente distinta, con todos sus muy pocos
						descendientes siendo mestizos y su lengua extinta. Algunos de los pocos Yaganes restantes se han
						establecido en Villa Ukika en la Isla Navarino, otros se han dispersado por Chile y Argentina.
						Tierra del Fuego alberga grandes áreas protegidas como parques nacionales y reservas, la mayoría
						de ellas en el sur montañoso.
					</p>

					<p>4.1.2.- Aprendiendo a ser hombre.</p>

					<p>
						La ceremonia conocida como hain que celebraban los varones, era una especie de escuela donde se
						aprendía a ser hombre. El momento más importante era el kloketen, ceremonia secreta en la cual a
						los hombres se les contaba que antiguamente, cuando los varones maltrataban a las mujeres, eran
						asustados por horrendos espíritus que los obligaban a pedir perdón.
					</p>
					<p>
						Dice la leyenda que cierto día un cazador descubrió que los espíritus eran mujeres disfrazadas,
						contándole al resto. Entonces decidieron dar muerte a todas las mujeres adultas y conservaron
						solo a las pequeñas, que no conocían el secreto. Los hombres se disfrazaron, y cada vez que
						alguna mujer se portaba mal, las asustaban para mantenerlas sumisas.
					</p>

					<p>4.1.3.- Armas y utensilios</p>

					<p>
						Los hallazgos arqueológicos en Tierra del Fuego consisten en puntas de flecha del tipo ‘Cola de
						Pescado’, fabricadas de piedra y hueso de ballena, boleadoras de piedra, raspadores para cuero,
						cuchillos hechos de valvas afiladas de choro gigante y arpones de hueso de ballena de una y dos
						barbas. Los Selk'nam poseían una avanzada tecnología en la fabricación de flechas,
						construyéndose con dos barbas de pluma de ave que quemaban en sus bordes para emparejarlas y así
						alcanzar mayores distancias y precisión, las ataban con tendones de guanaco ablandados por
						masticación.
					</p>

					<p>6.1.- Cronologia Selk’nam</p>

					<p>
						10000 AC(aprox)- Los primeros pobladores humanos de Tierra del Fuego fueron cazadores y
						recolectores nómades que dependían de los recursos terrestres existentes.
					</p>

					<p>
						1040 - Primeros restos arqueológicos que señalan la presencia en Tierra del Fuego de bandas de
						cazadores y recolectores, antepasados de los haush y de los selk'nam
					</p>

					<p>
						1200 - Primeros vestigios arqueológicos sobre pobladores de la Patagonia austral, encontrados en
						la Cueva de Fell, Magallanes
					</p>

					<p>1520 - He rnando de Magallanes descubre Tierra del Fuego</p>

					<p>
						1580 - Expedición de Pedro Sarmiento de Gamboa realiza el primer encuentro entre europeos y
						selk'nam
					</p>

					<p>1619 - Primeros contactos entre europeos y haush</p>

					<p>1826 - Expediciones de Robert Fitz-Roy por el estrecho de Magallanes y Tierra del Fuego</p>

					<p>
						1880 - Buscadores de oro se internan en Tierra de Fuego y realizan las primeras masacres de
						indígenas
					</p>

					<p>
						1883 - Se inicia la colonización de Tierra del Fuego, sobre la base de grandes estancias
						ovejeras. En las dos décadas siguientes, la población indígena fue prácticamente exterminada por
						asesinos a sueldo contratados por los estancieros.
					</p>

					<p>
						1889 - Se instala una misión salesiana en la isla Dawson, hacia donde son deportados cientos de
						selk'nam
					</p>

					<p>
						1896 - Se instala una segunda misión salesiana en Río Grande, en la parte argentina de Tierra
						del Fuego
					</p>

					<p>
						1900 - Se cierra la misión salesiana de isla Dawson, debido a la muerte de toda la población
						indígena deportada allí
					</p>
					<p>
						1903 - Lucas Bridges funda la estancia Viamonte, en la costa norte de Tierra del Fuego, para
						prestar refugio a las últimas familias selk'nam
					</p>

					<p>
						1907 - Charles W. Furlong realiza las primeras grabaciones que se conocen de música ritual
						selk'nam
					</p>

					<p>
						1918 - Martín Gusinde y Wilhelm Koppers realizan un completo registro etnográfico de los
						selk'nam y haush. En 1923 Gusinde asiste a una de las últimas ceremonias del Hain , en la que
						tomó valiosas fotografías y grabó registros sonoros
					</p>

					<p>1936 - Se realiza por última vez la ceremonia del Hain</p>

					<p>
						1965 - La antropóloga Anne Chapman entrevista a Lola Kiepja, una de las últimas sobrevivientes
						selk'nam, y graba cientos de canciones chamánicas y rituales
					</p>

					<p>
						1968 - Anne Chapman filma el documental The Ona People: Life and Death in Tierra del Fuego ,
						sobre los últimos sobrevivientes selk'nam
					</p>

					<p>
						1972 - Se publica el disco Selk'nam Chants of Tierra del Fuego , en el que Anne Chapman recoge
						47 cantos chamánicos y lamentos fúnebres Selk'man cantados por Lola Kiepja
					</p>

					<p>
						1974 - Muere la última representante pura de esta etnia, Ángela Loij. Descendientes mestizos de
						los onas viven en la parte argentina de la isla Grande de Tierra del Fuego formando la Comunidad
						Rafaela Ishton
					</p>

					<p>
						1977 - Se publica la segunda parte del disco Selk'nam Chants of Tierra del Fuego , en donde se
						incluyen 41 cantos de la ceremonia del Hain
					</p>

					<p>
						1982- Anne Chapman publica su obra Drama and power in a hunting society: the selk'nam of Tierra
						del Fuego , en donde realiza un completo análisis de la ceremonia del Hain
					</p>

					<p>6.1.- Bibliográfia</p>

					<p>La misión salesiana en isla dawson ( 1889 - 1911 ) - Fernando Aliaga Rojas</p>

					<p>30 años en Tierra del Fuego - Alberto de Agostini</p>

					<p>
						Contacto Interétnico en el norte de tierra del Fuego: Primera aproximación a las estrategias de
						resistencia Selk’nam - Romina casali
					</p>

					<p>El último confín de la Tierra - E Lucas Bridges</p>

					<p>Cantos Chamanicos Selk’nam - Enrique Flores</p>

					<p>Los indios de tierra del Fuego - Martín Gusinde</p>

					<p>Los Fueguinos - Martín Gusinde</p>

					<p>Fin de un Mundo - Los Selk'name de tierra del Fuego - Anne Chapman</p>

					<p>La pintura Corporal Selk’nam y su Carácter Iconográfico - Itaci Correa y Carola Flores</p>

					<p>Los Shelknam, indígenas de la tierra del fuego 1915 - Juan Bosco</p>

					<p>Memoria del Gobernador de Magallanes - La tierra del Fuego i sus naturales 1896 - M. Señorel</p>

					<p>6.2.- Links de Interés</p>

					<p>Diario de vida de William Blain</p>
					<p>
						<a href="https://www.google.com/url?q=http://patlibros.org/dwb/doc.php?lan%3Desp%26pag%3D1&amp;sa=D&amp;ust=1562476720970000">
							http://patlibros.org/dwb/doc.php?lan=esp&amp;pag=1
						</a>
					</p>

					<p>Referencias música</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.youtube.com/watch?NR%3D1%26feature%3Dendscreen%26v%3DrKsdEBsf5UE&amp;sa=D&amp;ust=1562476720970000">
							http://www.youtube.com/watch?NR=1&amp;feature=endscreen&amp;v=rKsdEBsf5UE
						</a>
					</p>

					<p>Anne chapman video of lola</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.youtube.com/watch?v%3Dns6mIK1eYN0&amp;sa=D&amp;ust=1562476720970000">
							http://www.youtube.com/watch?v=ns6mIK1eYN0
						</a>
					</p>

					<p>Los selk’nam</p>
					<p>
						<a href="https://www.google.com/url?q=http://pueblosoriginarios.com/sur/patagonia/selknam&amp;sa=D&amp;ust=1562476720971000">
							http://pueblosoriginarios.com/sur/patagonia/Selk'nam
						</a>
					</p>

					<p>Espirtus Selk'nams</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.rmm.cl/index_sub2.php?id_contenido%3D14632%26id_portal%3D436%26id_seccion%3D2844&amp;sa=D&amp;ust=1562476720971000">
							http://www.rmm.cl/index_sub2.php?id_contenido=14632&amp;id_portal=436&amp;id_seccion=2844
						</a>
					</p>

					<p>El secreto de los Selk'nams animación</p>
					<p>
						<a href="https://www.google.com/url?q=http://vimeo.com/22456501&amp;sa=D&amp;ust=1562476720971000">
							http://vimeo.com/22456501
						</a>
					</p>

					<p>Grabaciones de Lola Kjeika</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.memoriachilena.cl/archivos2/audio/MC0018710.MP3&amp;sa=D&amp;ust=1562476720972000">
							http://www.memoriachilena.cl/archivos2/audio/MC0018710.MP3
						</a>
					</p>

					<p>Selk'nam</p>
					<p>
						<a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DBbzMx8-gTdc&amp;sa=D&amp;ust=1562476720972000">
							https://www.youtube.com/watch?v=BbzMx8-gTdc
						</a>
					</p>

					<p>Cosmovision</p>
					<p>
						<a href="https://www.google.com/url?q=http://pueblosoriginarios.com/sur/patagonia/selknam/cosmologia.html&amp;sa=D&amp;ust=1562476720972000">
							http://pueblosoriginarios.com/sur/patagonia/Selk'nam/cosmologia.html
						</a>
					</p>

					<p>Chamanismo Selk'nam Beatriz Carbonell</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.ugr.es/~pwlac/G19_09Beatriz_Carbonell.htm&amp;sa=D&amp;ust=1562476720973000">
							http://www.ugr.es/~pwlac/G19_09Beatriz_Carbonell.htm
						</a>
					</p>

					<p>Fauna</p>
					<p>
						<a href="https://www.google.com/url?q=http://patagoniaaustral.idoneos.com/index.php/Fauna_patag&amp;sa=D&amp;ust=1562476720973000">
							http://patagoniaaustral.idoneos.com/index.php/Fauna_patagónica
						</a>
					</p>
					<p>
						<a href="https://www.google.com/url?q=http://zootierliste.de/en/?klasse%3D1%26ordnung%3D110%26familie%3D11009%26art%3D1100901&amp;sa=D&amp;ust=1562476720973000">
							http://zootierliste.de/en/?klasse=1&amp;ordnung=110&amp;familie=11009&amp;art=1100901
						</a>
					</p>

					<p>Historia</p>
					<p>
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Genocidio_Selk%27nam&amp;sa=D&amp;ust=1562476720973000">
							http://es.wikipedia.org/wiki/Genocidio_Selk'nam
						</a>
					</p>

					<p>Lenguaje</p>
					<p>
						<a href="https://www.google.com/url?q=http://es.wikipedia.org/wiki/Lenguas_chon&amp;sa=D&amp;ust=1562476720974000">
							http://es.wikipedia.org/wiki/Lenguas_chon
						</a>
					</p>

					<p>El mundo espiritual Selk'nam, por martin gusinde.</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.beingindigenous.org/archivosdigitales/libros/selknam_1_bibliotecavirtual.pdf&amp;sa=D&amp;ust=1562476720974000">
							http://www.beingindigenous.org/archivosdigitales/libros/Selk'nam_1_bibliotecavirtual.pdf
						</a>
					</p>

					<p>Chapman about Selk'nam mithology (english)</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.thereedfoundation.org/rism/chapman/moon-woman.htm&amp;sa=D&amp;ust=1562476720974000">
							http://www.thereedfoundation.org/rism/chapman/moon-woman.htm
						</a>
					</p>

					<p>Cantos chamánicos</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.rlp.culturaspopulares.org/textos/18/RLP-IX2-04-Flores.pdf&amp;sa=D&amp;ust=1562476720975000">
							http://www.rlp.culturaspopulares.org/textos/18/RLP-IX2-04-Flores.pdf
						</a>
					</p>

					<p>Info Selk'nams</p>
					<p>
						<a href="https://www.google.com/url?q=http://pueblosoriginarios.com/sur/patagonia/selknam/xalpen.html%23&amp;sa=D&amp;ust=1562476720975000">
							http://pueblosoriginarios.com/sur/patagonia/Selk'nam/xalpen.html#
						</a>
					</p>

					<p>Xalpen</p>
					<p>
						<a href="https://www.google.com/url?q=http://pueblosoriginarios.com/sur/patagonia/selknam/xalpen.html%23&amp;sa=D&amp;ust=1562476720975000">
							http://pueblosoriginarios.com/sur/patagonia/Selk'nam/xalpen.html#
						</a>
					</p>

					<p>Anne chapman documentary</p>
					<p>
						<a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DPIIsDHq30Tc&amp;sa=D&amp;ust=1562476720976000">
							https://www.youtube.com/watch?v=PIIsDHq30Tc
						</a>
					</p>

					<p>Sexualidad mapuche</p>
					<p>
						<a href="https://www.google.com/url?q=http://wenewenche.cl/index.php?option%3Dcom_content%26view%3Darticle%26id%3D739%253Acomo-era-la-sexualidad-indigena-en-chile%26catid%3D84%26Itemid%3D120&amp;sa=D&amp;ust=1562476720976000">
							http://wenewenche.cl/index.php?option=com_content&amp;view=article&amp;id=739%3Acomo-era-la-sexualidad-indigena-en-chile&amp;catid=84&amp;Itemid=120
						</a>
					</p>

					<p>Feria Mundial de Paris</p>
					<p>
						<a href="https://www.google.com/url?q=http://lartnouveau.com/belle_epoque/paris_expo_1889.htm&amp;sa=D&amp;ust=1562476720976000">
							http://lartnouveau.com/belle_epoque/paris_expo_1889.htm
						</a>
					</p>

					<p>Tesis, sobre la mujer Selk’nam</p>
					<p>
						<a href="https://www.google.com/url?q=http://www.alhp.org/abstract22.htm&amp;sa=D&amp;ust=1562476720976000">
							http://www.alhp.org/abstract22.htm
						</a>
					</p>

					<p>Naturaleza en patagonia</p>
					<p>
						<a href="https://www.google.com/url?q=http://vimeo.com/48285212&amp;sa=D&amp;ust=1562476720977000">
							http://vimeo.com/48285212
						</a>
					</p>

					<p>Los onas: Vida y muerte en Tierra del Fuego (VV. DD., 1977)</p>
					<p>
						<a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DcWmBVwOglRs&amp;sa=D&amp;ust=1562476720977000">
							https://www.youtube.com/watch?v=cWmBVwOglRs
						</a>
					</p>

					<p>El secreto de los Selk’nam</p>
					<p>
						<a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DHAgcA0JEQkk&amp;sa=D&amp;ust=1562476720977000">
							https://www.youtube.com/watch?v=HAgcA0JEQkk
						</a>
					</p>

					<p>Martin Gusinde</p>
					<p>
						<a href="https://www.google.com/url?q=http://v4.tierradelfuego.org.ar/museo/virtual/gusin1.htm&amp;sa=D&amp;ust=1562476720978000">
							http://v4.tierradelfuego.org.ar/museo/virtual/gusin1.htm
						</a>
					</p>

					<p>Genocidio Selk’nam</p>
					<p>
						<a href="https://www.google.com/url?q=https://huerquenche.wordpress.com/2008/08/21/cien-orejas-x-cien-anos-escrache-a-la-anonima-por-el-genocidio-selknam/&amp;sa=D&amp;ust=1562476720978000">
							https://huerquenche.wordpress.com/2008/08/21/cien-orejas-x-cien-anos-escrache-a-la-anonima-por-el-genocidio-Selk'nam/
						</a>
					</p>
				</Investigacion>
			</Layout>
		);
	}
}

export default Research;
