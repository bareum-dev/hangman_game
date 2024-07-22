const questions = [
  { tomorrow: "What is always coming but never arrives?" },
  { promise: "What can be broken but never held?" },
  {
    secret:
      "If you have one, you want to share it. But once you share it, you do not have it. What is it?",
  },
  {
    nothing:
      "What is greater than God and more evil than the devil. Rich people want it, poor people have it. And if you eat it, you will die.",
  },
  {
    candle:
      "I start out tall, but the longer I stand, the shorter I grow. What am I?",
  },
  { window: "Thanks to me, you can see straight through the wall. What am I?" },
  { conversation: "What can you hold without touching it at all?" },
  { noise: "What can you make that no one—not even you—can see?" },
  {
    silence:
      "I am so fragile that if you say my name, you will break me. What am I?",
  },
  { stamp: "What travels the world while stuck in one spot?" },
  { shadow: "What is as big as an elephant but weighs absolutely nothing?" },
  { amazon: 'What company was originally called "Cadabra"?' },
  { yellow: "Aureolin is a shade of what color?" },
  { raphael: "What Renaissance artist is buried in Rome's Pantheon?" },
  { venus: "Which planet in the Milky Way is the hottest?" },
  { porsche: "What sports car company manufactures the 911?" },
  { brazil: "What country has won the most World Cups?" },
  { ukraine: "In what country is the Chernobyl nuclear plant located?" },
  { heights: "What is acrophobia a fear of?" },
  { nokia: "What phone company produced the 3310?" },
  { africa: "What is the only continent with land in all four hemispheres?" },
  {
    redwoods: "What is the tallest type of tree?",
  },
  { bermuda: "Which country features a shipwreck on its national flag?" },
  { gymnastics: "Simone Biles is famous for her skill in what sport?" },
  { wimbledon: "What sporting event has a strict dress code of all-white?" },
  { mulan: "`I'll Make a Man Out of You` is a song from which movie?" },
  { Tarantino: "Who directed 'Pulp Fiction'?" },
  { batman: "Prince recorded the soundtrack to which 1989 movie?" },
  { pharaoh: "What title was given to the rulers of Ancient Egypt?" },
  {
    italy: "Benito Mussolini was a dictator who ruled which European country?",
  },
  { queensland: "Brisbane is located in which Australian state?" },
  { rabat: "What is the capital of Morocco?" },
  { prague: "What is the capital of Czech Republic?" },
  {
    binary:
      "What is the name of the system where numbers and values are expressed as 0 or 1?",
  },
  { australia: "Which country are wombats native to?" },
  { subway: "“Eat Fresh” is the slogan for which fast food chain?" },
  { arborio: "What type of rice is traditionally used to make risotto?" },
  { cranberries: "Wensleydale cheese is commonly made with which fruit?" },
  { eggplants: "What are aubergines referred to as in North America?" },
  { grendel: "What is the name of the monster fought by Beowulf?" },
  { troll: "What did Professor Quirrell release into the dungeon?" },
  { tatooine: "What is Luke Skywalker’s home planet called?" },
  { carbonite: "What material was Han Solo frozen in?" },
  { ecuador: "Which South American country has the capital city of Quito?" },
  { labyrinth: "David Bowie starred in which 1980s cult classic?" },
  {
    badger:
      "Which animal is the mascot for Hufflepuff house in the Harry Potter books?",
  },
  { seaweed: "Nori is which type of sushi ingredient?" },
  { piano: "Ray Charles was famous for playing which instrument?" },
  { amphibians: "What biological order do frogs belong to?" },
  { graffiti: "Banksy is an artist known for working with which medium?" },
  { energy: "What is the joule a unit of?" },
  { nevermore: "What does the raven say in Edgar Allen Poe’s The Raven?" },
  { flowers: "What was a frequent subject in Georgia O'Keeffe's paintings?" },
  { topaz: "What is the November birthstone?" },
  {
    impressionism:
      "Which art movement were painters Monet, Renoir, Cézanne, and Degas most closely associated with?",
  },
  { herbivore: "Which type of eater is a Rhino?" },
  {
    chloroplasts:
      "How do plants store the energy of sunlight for the photosynthesis process?",
  },
  { aries: "What is the first astrological sign in the zodiac?" },
  { reptile: "What type of animal is the Geico mascot?" },
  { circumference: "Which term refers to the distance around a circle?" },
  { hearts: "What card suit is the Queen in Alice and Wonderland?" },
  { fingers: "What does the term 'phalanges' refer to?" },
  { taiwan: "Bubble tea originated in which country?" },
  { obtuse: "If an angle is wider than 90 degrees, what is it called?" },
  {
    narnia:
      "Where does the wardrobe lead to in C.S. Lewis’s The Lion, the Witch, and the Wardrobe?",
  },
  { alexandria: "Where was the Great Library in ancient Egypt?" },
  { cilantro: "What herb is known as coriander in some parts of the world?" },
  {
    accordion:
      "Ever since he was a kid, which instrument did Weird Al practice?",
  },
  {
    baklava:
      "Which Greek delicacy is traditionally composed of phyllo pastry, honey, and crushed nuts?",
  },
  { capulet: "In 'Romeo and Juliet' what family is Juliet from?" },
  {
    volcanoes:
      "The Hawaiian islands were formed by which type of natural disaster?",
  },
  { numerator: "What's the top number on a fraction called?" },
  { extrasolar: "What is a planet outside our solar system called?" },
  { seeker: "What position does Harry play in Quidditch?" },
  { crookshanks: "What is Hermione's cat's name?" },
  { muggle: "What is the British term for a nonmagical person?" },
  { transfiguration: "What class does Professor McGonagall teach?" },
  { merope: "What is Voldemort's mother's name?" },
  { raspberry: "What is Dumbledore’s favorite flavor of jam?" },
  { dobby: "Who tells Harry about the Room of Requirement?" },
  {
    paris:
      "In Home Alone, where are the McCallisters going on vacation when they leave Kevin behind?",
  },
  { button: "What was Frosty the Snowman's nose made out?" },
  {
    tinsel:
      "What holiday decoration was originally made with strands of silver?",
  },
  {
    alabama:
      "What was the first state to declare Christmas an official holiday?",
  },
  { scar: "Who is the antagonist in the 'Lion King'?" },
  { spike: "What is the dog’s name in the series “Tom and Jerry”?" },
  { minnie: "What is the name of the Mickey Mouse’s girlfriend?" },
  {
    bambi:
      "'Little April Shower' is the song featuring in which cartoon of Disney?",
  },
  {
    pineapple:
      "Cartoon character Spongebob Squarepants lives in a what under the sea?",
  },
  {
    carrot:
      "What vegetable is Warner Bros. character Bugs Bunny often portrayed eating?",
  },
  {
    satine:
      "What is the name of the courtesan played by Nicole Kidman in Moulin Rouge?",
  },
  { joker: "What is the highest-grossing R-rated movie of all time?" },
  {
    napalm:
      "In Apocalypse Now, Robert Duvall says, 'I love the smell of _____ in the morning.'",
  },
  {
    gladiator:
      "Joaquin Phoenix received his first Oscar nomination for playing Roman emperor Commodus in what 2000 Oscar-winning epic?",
  },
  {
    psycho:
      "Which Alfred Hitchcock thriller is notorious for its shocking 'shower scene'?",
  },
  {
    avatar:
      "What is the highest-grossing movie of all time when not taking inflation into account?",
  },
  {
    parasite:
      "What is the first foreign-language movie to win the Oscar for Best Picture?",
  },
  { tiger: "Name the National animal of India?" },
  { tibet: " Name the place known as the Roof of the World?" },
  { diwali: "Which festival is known as the festival of light?" },
  { ostrich: "Name a bird that lays the largest eggs?" },
  { baseball: "Name the National game of the USA?" },
  { diamond: "Name the hardest substance available on Earth?" },
];

export default questions;
