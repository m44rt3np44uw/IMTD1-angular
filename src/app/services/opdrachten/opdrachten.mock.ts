import {Opdracht} from "../../interfaces/opdrachten/opdracht";

export const OPDRACHTEN: Opdracht[] = [
  {
    id: 1,
    name: "Apple iDrive",
    quote: "Ride into the future",
    summary: [
      "Deze opdracht betreft het ontwerpen van een advertentie voor de Apple iDrive. Dit is een zelfrijdende auto die op 1 juli 2017 wordt gelanceerd. In de advertentie moet het product worden aangekondigd waarbij een sterk gevoel bij de consument moet worden opgeroepen; ik moet deze auto hebben!"
    ],
    excerpt: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
    ],
    images: [
      "assets/opdrachten/opdracht-1/images/opdracht-1-mockup.png"
    ],
    essay: "assets/opdrachten/opdracht-1/essay/opdracht-1-essay.pdf",
    peer_review: {
      inkomend: 'assets/opdrachten/opdracht-2/2-peer-review/inkomend/opdracht-2-2-peer-review-inkomend.pdf',
      uitgaand: 'assets/opdrachten/opdracht-1/2-peer-review/uitgaand/opdracht-1-2-peer-review-uitgaand.pdf'
    },
    opdracht: "assets/opdrachten/opdracht-1/opdracht/opdracht-1.png",
    is_even: false
  },
  {
    id: 2,
    name: "Lunchroom Bakker",
    quote: "Kleine trek, grote trek & enorme trek",
    summary: [
      "De opdrachtgever, familie Bakker, bezorgt al sinds 1910 lunches via hun bedrijf Lunchroom Bakker. Om mee te gaan met de moderne tijd willen zij deze ook via een Android applicatie verkopen. De opdracht betreft het maken van een schermontwerp voor het welkomstscherm van deze applicatie.",
      "Dit welkomstscherm moet aan een aantal opgegeven eisen voldoen. Zo moet het scherm een menu knop hebben en een zoekmogelijkheid. Ook moeten de verschillende lunches van Lunchroom Bakker vermeld worden, inclusief de bijbehorende prijzen en bestel knop.",
    ],
    excerpt: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
    ],
    images: [
      "assets/opdrachten/opdracht-2/images/opdracht-2-mockup.png"
    ],
    essay: "assets/opdrachten/opdracht-2/essay/opdracht-2-essay.pdf",
    peer_review: {
      inkomend: 'assets/opdrachten/opdracht-3/2-peer-review/inkomend/opdracht-3-2-peer-review-inkomend.pdf',
      uitgaand: 'assets/opdrachten/opdracht-2/2-peer-review/uitgaand/opdracht-2-2-peer-review-uitgaand.pdf'
    },
    opdracht: "assets/opdrachten/opdracht-2/opdracht/opdracht-2.png",
    is_even: true
  },
  {
    id: 3,
    name: "Augmented Albert",
    quote: "Een experiment met augmented reality",
    summary: [
      "Deze opdracht gaat over Albert Heijn. Als aanvulling op hun zelfscanner wil deze supermarkt gaan experimenteren augmented reality. Hiervoor willen zij een applicatie ontwikkeld hebben voor tablets. Aan mij was het de taak om een ontwerp te maken waarbij een extra laag over het camerabeeld wordt gelegd die de gebruiker de weg wijst door de winkel en extra informatie geeft over de producten."
    ],
    excerpt: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
    ],
    images: [
      "assets/opdrachten/opdracht-3/images/opdracht-3-mockup.png"
    ],
    essay: "assets/opdrachten/opdracht-3/essay/opdracht-3-essay.pdf",
    peer_review: {
      inkomend: 'assets/opdrachten/opdracht-4/2-peer-review/inkomend/opdracht-4-2-peer-review-inkomend.pdf',
      uitgaand: 'assets/opdrachten/opdracht-3/2-peer-review/uitgaand/2-peer-review-uitgaand.pdf'
    },
    opdracht: "assets/opdrachten/opdracht-3/opdracht/opdracht-3.png",
    is_even: false
  },
  {
    id: 4,
    name: "Pecha Kucha",
    quote: "Joseph Muller-Brockmann",
    summary: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
    ],
    excerpt: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean commodo ligula eget dolor! Aenean massa! Cum sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus? Donec quam felis, ultricies nec, pellentesqueeu, pretium quis, sem; Nulla consequat massa quis enim! Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu! In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
    ],
    images: [
      "assets/opdrachten/opdracht-4/images/opdracht-4-slide-1.png",
      "assets/opdrachten/opdracht-4/images/opdracht-4-slide-2.png",
      "assets/opdrachten/opdracht-4/images/opdracht-4-slide-3.png",
      "assets/opdrachten/opdracht-4/images/opdracht-4-slide-4.png",
      "assets/opdrachten/opdracht-4/images/opdracht-4-slide-5.png",
      "assets/opdrachten/opdracht-4/images/opdracht-4-slide-6.png"
    ],
    essay: "assets/opdrachten/opdracht-4/essay/opdracht-4-essay.pdf",
    opdracht: "assets/opdrachten/opdracht-4/opdracht/opdracht-4.pdf",
    is_even: true
  }
];
