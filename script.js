const langSelect = document.getElementById('lang-select');
const menuIndex = document.getElementById('menu-index');
const menuContainer = document.getElementById('menu-container');

const translations = {
  it: {},
  en: {
    "Menu": "Menu",
    "Informazioni e Allergeni": "Allergen Information",
    "Si avvisa la gentile clientela...": "Please be advised that foods and beverages served here may contain allergens or related substances.",
    "Un nostro Responsabile incaricato...": "A staff member is available to provide further information upon request.",
    "Elenco degli ingredienti allergenici utilizzati...": "List of allergenic ingredients used in this venue as per EU Regulation 1169/2011 – 'Substances or products causing allergies or intolerances'",
    "Cereali contenenti glutine o prodotti derivati (grano, segale, orzo, avena, farro, kamut)": "Cereals containing gluten or products (wheat, rye, barley, oats, spelt, kamut)",
    "Crostacei e prodotti a base di crostacei": "Crustaceans and crustacean-based products",
    "Uova e prodotti a base di uova": "Eggs and egg-based products",
    "Pesce e prodotti a base di pesce": "Fish and fish-based products",
    "Arachidi e prodotti a base di arachidi": "Peanuts and peanut-based products",
    "Soia e prodotti a base di soia": "Soy and soy-based products",
    "Latte e prodotti a base di latte": "Milk and milk-based products",
    "Frutta a guscio e loro prodotti (mandorle, nocciole, noci, noci di acagiù, di pecan, del Brasile, pistacchi, noci di macadamia)": "Nuts and derived products (almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachios, macadamia)",
    "Sedano e prodotti a base di sedano": "Celery and celery-based products",
    "Senape e prodotti a base di senape": "Mustard and mustard-based products",
    "Semi di sesamo e prodotti a base di sesamo": "Sesame seeds and sesame-based products",
    "Solfiti in concentrazioni superiori a 10 mg/Kg": "Sulphites in concentrations above 10 mg/Kg",
    "Lupini e prodotti a base di lupini": "Lupins and lupin-based products",
    "Molluschi e prodotti a base di molluschi": "Molluscs and mollusc-based products"
  },
  fr: {
    "Menu": "Menu",
    "Informazioni e Allergeni": "Informations sur les allergènes",
    "Si avvisa la gentile clientela...": "Veuillez noter que les aliments et boissons servis ici peuvent contenir des allergènes ou des substances associées.",
    "Un nostro Responsabile incaricato...": "Un membre de notre équipe est à votre disposition pour toute information complémentaire.",
    "Elenco degli ingredienti allergenici utilizzati...": "Liste des ingrédients allergènes utilisés dans cet établissement selon le règlement UE n. 1169/2011 – 'Substances ou produits provoquant des allergies ou intolérances'",
    "Cereali contenenti glutine o prodotti derivati (grano, segale, orzo, avena, farro, kamut)": "Céréales contenant du gluten ou produits dérivés (blé, seigle, orge, avoine, épeautre, kamut)",
    "Crostacei e prodotti a base di crostacei": "Crustacés et produits à base de crustacés",
    "Uova e prodotti a base di uova": "Œufs et produits à base d'œufs",
    "Pesce e prodotti a base di pesce": "Poissons et produits à base de poisson",
    "Arachidi e prodotti a base di arachidi": "Arachides et produits à base d’arachides",
    "Soia e prodotti a base di soia": "Soja et produits à base de soja",
    "Latte e prodotti a base di latte": "Lait et produits à base de lait",
    "Frutta a guscio e loro prodotti (mandorle, nocciole, noci, noci di acagiù, di pecan, del Brasile, pistacchi, noci di macadamia)": "Fruits à coque et produits dérivés (amandes, noisettes, noix, noix de cajou, noix de pécan, noix du Brésil, pistaches, noix de macadamia)",
    "Sedano e prodotti a base di sedano": "Céleri et produits à base de céleri",
    "Senape e prodotti a base di senape": "Moutarde et produits à base de moutarde",
    "Semi di sesamo e prodotti a base di sesamo": "Graines de sésame et produits à base de sésame",
    "Solfiti in concentrazioni superiori a 10 mg/Kg": "Sulfites à des concentrations supérieures à 10 mg/Kg",
    "Lupini e prodotti a base di lupini": "Lupins et produits à base de lupins",
    "Molluschi e prodotti a base di molluschi": "Mollusques et produits à base de mollusques"
  }
};
const originalSections = [
  "Antipasti",
  "Insalate",
  "Primi Piatti",
  "Secondi Piatti Pesce",
  "Secondi Piatti Carne",
  "Contorni",
  "Pizze",
  "Supplementi",
  "Dessert",
  "Frutta",
  "Bevande",
  "Birre",
  "Vini Bianchi",
  "Frizzanti",
  "Vini Spumante Metodo Classico",
  "Vini Rossi",
  "Vini al Calice"
];
const menuData = {
  "Antipasti": [
    { it: "Insalata di mare*", en: "Seafood salad*", fr: "Salade de fruits de mer*", prezzo: "16,00" },
    { it: "Misto di pesce crudo marinato", en: "Mixed marinated raw fish", fr: "Poisson cru mariné assorti", prezzo: "16,00" },
    { it: "Fritturina di paranza di calamaretti, gamberetti, pesciolini", en: "Mixed fried seafood: baby squid, shrimp, small fish", fr: "Friture de poissons: petits calamars, crevettes, poissons", prezzo: "16,00" },
    { it: "Pepata di cozze", en: "Peppered mussels", fr: "Moules au poivre", prezzo: "13,00" },
    { it: "Souté di frutti di mare", en: "Sautéed seafood", fr: "Fruits de mer sautés", prezzo: "16,00" },
    { it: "Insalata di polpo*, sedano, ciliegino e tocchetti di patate", en: "Octopus salad* with celery, cherry tomatoes and potato cubes", fr: "Salade de poulpe*, céleri, tomates cerises et dés de pommes de terre", prezzo: "13,50" },
    { it: "Rollini di salmone norvegese ripieni di cous cous di verdurine e top di crema di aceto balsamico", en: "Norwegian salmon rolls filled with vegetable couscous and balsamic cream topping", fr: "Roulés de saumon norvégien farcis de couscous aux légumes et nappés de crème balsamique", prezzo: "12,50" }
  ],
  "Insalate": [
    { it: "Insalata di bresaola con rucola e grana", en: "Bresaola salad with rocket and parmesan", fr: "Salade de bresaola avec roquette et parmesan", prezzo: "12,00" },
    { it: "Caprese con mozzarella, pomodoro e basilico", en: "Caprese salad with mozzarella, tomato and basil", fr: "Salade caprese avec mozzarella, tomate et basilic", prezzo: "11,00" }
  ],
  "Primi Piatti": [
    { it: "Cous cous di pesce con mandorle tostate", en: "Fish couscous with toasted almonds", fr: "Couscous de poisson aux amandes grillées", prezzo: "21,00" },
    { it: "Risotto alla Marinara", en: "Seafood risotto", fr: "Risotto aux fruits de mer", prezzo: "16,00" },
    { it: "Spaghetti alle vongole", en: "Spaghetti with clams", fr: "Spaghetti aux palourdes", prezzo: "16,00" },
    { it: "Spaghetti ai ricci", en: "Spaghetti with sea urchins", fr: "Spaghetti aux oursins", prezzo: "24,00" },
    { it: "Spaghetti all’astice", en: "Spaghetti with lobster", fr: "Spaghetti au homard", prezzo: "30,00" },
    { it: "Spaghetti agli scampi", en: "Spaghetti with scampi", fr: "Spaghetti aux langoustines", prezzo: "18,00" },
    { it: "Penne alla norma", en: "Penne alla Norma (eggplant and ricotta)", fr: "Pennes alla Norma (aubergines et ricotta)", prezzo: "10,00" }
  ],
  "Secondi Piatti Pesce": [
    { it: "Gamberoni* alla griglia", en: "Grilled king prawns*", fr: "Gambas grillées*", prezzo: "15,00" },
    { it: "Trancio di pesce alla griglia (secondo disp. giornaliera)", en: "Grilled fish fillet (based on daily availability)", fr: "Filet de poisson grillé (selon disponibilité)", prezzo: "19,00" },
    { it: "Pesce spada alla griglia", en: "Grilled swordfish", fr: "Espadon grillé", prezzo: "14,00" },
    { it: "Calamari* fritti o alla griglia", en: "Fried or grilled squid*", fr: "Calmars frits ou grillés*", prezzo: "14,00" },
    { it: "Tagliata di tonno con sesamo su letto di soncino e patate grigliate", en: "Sesame tuna steak on lamb’s lettuce and grilled potatoes", fr: "Tataki de thon au sésame, lit de mâche et pommes de terre grillées", prezzo: "21,00" },
    { it: "Involtini di pesce spada alla siciliana con caponatina", en: "Sicilian swordfish rolls with caponata", fr: "Roulés d'espadon à la sicilienne avec caponata", prezzo: "15,00" },
    { it: "Grigliata mista della Riviera", en: "Mixed grilled seafood from the Riviera", fr: "Grillade mixte de la Riviera", prezzo: "18,50" },
    { it: "Pesce in esposizione al kg.", en: "Displayed fish per kg", fr: "Poisson en vitrine au kg", prezzo: "68,00" }
  ],
  "Secondi Piatti Carne": [
    { it: "Bistecca di vitello alla griglia con rucola, scaglie di grana e verdure grigliate", en: "Grilled veal steak with rocket, parmesan flakes and grilled vegetables", fr: "Steak de veau grillé avec roquette, copeaux de parmesan et légumes grillés", prezzo: "15,00" }
  ],
  "Contorni": [
    { it: "Insalata mista", en: "Mixed salad", fr: "Salade mixte", prezzo: "6,50" },
    { it: "Verdure grigliate", en: "Grilled vegetables", fr: "Légumes grillés", prezzo: "8,00" },
    { it: "Patatine* fritte", en: "French fries*", fr: "Frites*", prezzo: "5,00" },
    { it: "Caponata siciliana", en: "Sicilian caponata", fr: "Caponata sicilienne", prezzo: "8,00" }
  ],
  "Pizze": [
    { it: "Bianca – mozzarella, olio", en: "Bianca – mozzarella, olive oil", fr: "Bianca – mozzarella, huile d'olive", prezzo: "6,00" },
    { it: "Margherita – mozzarella, pomodoro, olio, origano, basilico", en: "Margherita – mozzarella, tomato, olive oil, oregano, basil", fr: "Margherita – mozzarella, tomate, huile d'olive, origan, basilic", prezzo: "7,00" },
    { it: "Al Salmone – mozzarella, salmone, cipollina fresca, rucola, olio", en: "Salmon – mozzarella, salmon, fresh spring onion, arugula, olive oil", fr: "Saumon – mozzarella, saumon, oignon nouveau, roquette, huile d'olive", prezzo: "14,00" },
    { it: "Tersicore – ciliegino, bufala, crudo di Parma, rucola, scaglie di grana, olio, origano (tutto a crudo)", en: "Tersicore – cherry tomatoes, buffalo mozzarella, Parma ham, arugula, parmesan flakes, olive oil, oregano (all raw)", fr: "Tersicore – tomates cerises, mozzarella di bufala, jambon de Parme, roquette, copeaux de parmesan, huile d'olive, origan (tout à cru)", prezzo: "14,00" },
    { it: "Patatina – pomodoro, mozzarella, wurstel, patatine*, olio, origano", en: "Patatina – tomato, mozzarella, sausage, French fries*, olive oil, oregano", fr: "Patatina – tomate, mozzarella, saucisse, frites*, huile d'olive, origan", prezzo: "11,00" },
    { it: "Friarielli – mozzarella, salsiccia, friarielli, olive, olio", en: "Friarielli – mozzarella, sausage, Neapolitan broccoli, olives, olive oil", fr: "Friarielli – mozzarella, saucisse, brocoli napolitain, olives, huile d'olive", prezzo: "12,50" },
    { it: "Tonnara – ciliegino, mozzarella, tonno, cipollina fresca, olive, olio, origano", en: "Tonnara – cherry tomatoes, mozzarella, tuna, fresh spring onion, olives, olive oil, oregano", fr: "Tonnara – tomates cerises, mozzarella, thon, oignon nouveau, olives, huile d'olive, origan", prezzo: "12,00" },
    { it: "Piccante – pomodoro, mozzarella, salame piccante, olive, cipolla, olio, origano", en: "Spicy – tomato, mozzarella, spicy salami, olives, onion, olive oil, oregano", fr: "Piquante – tomate, mozzarella, salami piquant, olives, oignon, huile d'olive, origan", prezzo: "11,00" },
    { it: "Norma – pomodoro, melanzane fritte, ricotta salata, olio, origano, basilico", en: "Norma – tomato, fried eggplant, salted ricotta, olive oil, oregano, basil", fr: "Norma – tomate, aubergines frites, ricotta salée, huile d'olive, origan, basilic", prezzo: "9,50" },
    { it: "Genovese – ciliegino, bufala, pesto alla genovese, crudo di Parma, scaglie di grana, olio", en: "Genovese – cherry tomatoes, buffalo mozzarella, Genoese pesto, Parma ham, parmesan flakes, olive oil", fr: "Gênoise – tomates cerises, mozzarella di bufala, pesto génois, jambon de Parme, copeaux de parmesan, huile d'olive", prezzo: "14,00" },
    { it: "Vegetariana – ciliegino, mozzarella, zucchine, radicchio, melanzane, olio", en: "Vegetarian – cherry tomatoes, mozzarella, zucchini, radicchio, eggplant, olive oil", fr: "Végétarienne – tomates cerises, mozzarella, courgettes, radicchio, aubergines, huile d'olive", prezzo: "12,00" },
    { it: "Brontese – mozzarella, mortadella, crema di pistacchio, scaglie di grana, granella di pistacchio", en: "Brontese – mozzarella, mortadella, pistachio cream, parmesan flakes, chopped pistachios", fr: "Brontese – mozzarella, mortadelle, crème de pistache, copeaux de parmesan, éclats de pistache", prezzo: "14,00" },
    { it: "Calzone semplice – pomodoro, mozzarella, prosciutto cotto, olive, olio", en: "Simple calzone – tomato, mozzarella, cooked ham, olives, olive oil", fr: "Calzone simple – tomate, mozzarella, jambon cuit, olives, huile d'olive", prezzo: "10,00" },
    { it: "Capricciosa – pomodoro, mozzarella, funghi, prosciutto cotto, uovo, olio, origano", en: "Capricciosa – tomato, mozzarella, mushrooms, cooked ham, egg, olive oil, oregano", fr: "Capricciosa – tomate, mozzarella, champignons, jambon cuit, œuf, huile d'olive, origan", prezzo: "11,00" },
    { it: "Estiva – mozzarella, rucola, gamberetto, ciliegino", en: "Summer – mozzarella, arugula, shrimp, cherry tomatoes", fr: "Estivale – mozzarella, roquette, crevettes, tomates cerises", prezzo: "13,50" },
    { it: "Porcina – pomodoro, mozz., salsiccia, porcini*, pepato fresco, cipollina fresca, scaglie di grana, olive, olio, origano", en: "Porcina – tomato, mozzarella, sausage, porcini mushrooms*, fresh pepato cheese, spring onion, parmesan flakes, olives, olive oil, oregano", fr: "Porcina – tomate, mozzarella, saucisse, cèpes*, fromage pepato frais, oignon nouveau, copeaux de parmesan, olives, huile d'olive, origan", prezzo:"13,50" },
    { it: "Parmigiana – pomodoro, mozz., prosciutto cotto, melanzane, uovo, scaglie di grana, basilico, olio, origano", en: "Parmigiana – tomato, mozzarella, cooked ham, eggplant, egg, parmesan flakes, basil, olive oil, oregano", fr: "Parmigiana – tomate, mozzarella, jambon cuit, aubergines, œuf, copeaux de parmesan, basilic, huile d'olive, origan", prezzo: "13,00" },
    { it: "Calzone Siculo – mozzarella, pepato fresco, cipollina, olive, acciughe, olio", en: "Sicilian calzone – mozzarella, fresh pepato cheese, spring onion, olives, anchovies, olive oil", fr: "Calzone sicilien – mozzarella, fromage pepato frais, oignon nouveau, olives, anchois, huile d'olive", prezzo: "12,00" },
    { it: "Stracchina – mozzarella, stracchino, crudo di Parma, ciliegino a crudo, olio", en: "Stracchina – mozzarella, stracchino cheese, Parma ham, raw cherry tomatoes, olive oil", fr: "Stracchina – mozzarella, stracchino, jambon de Parme, tomates cerises crues, huile d'olive", prezzo: "14,00" }
  ],
  "Supplementi": [
    { it: "Ingrediente semplice", en: "Simple ingredient", fr: "Ingrédient simple", prezzo: "1,00" },
    { it: "Bufala, crudo di Parma, bresaola, porcini*, crema di pistacchio, scaglie di grana", en: "Buffalo mozzarella, Parma ham, bresaola, porcini mushrooms*, pistachio cream, parmesan flakes", fr: "Mozzarella di bufala, jambon de Parme, bresaola, cèpes*, crème de pistache, copeaux de parmesan", prezzo: "2,00" },
    { it: "Salmone, gamberetto", en: "Salmon, shrimp", fr: "Saumon, crevette", prezzo: "3,50" }
  ],
  "Dessert": [
    { it: "Sorbetto artigianale al limone", en: "Homemade lemon sorbet", fr: "Sorbet artisanal au citron", prezzo: "3,50" },
    { it: "Cassata siciliana", en: "Sicilian cassata cake", fr: "Cassata sicilienne", prezzo: "6,00" },
    { it: "Torta al limone", en: "Lemon cake", fr: "Gâteau au citron", prezzo: "6,00" },
    { it: "Torta al pistacchio", en: "Pistachio cake", fr: "Gâteau à la pistache", prezzo: "6,00" },
    { it: "Dolci del giorno", en: "Desserts of the day", fr: "Desserts du jour", prezzo: "7,00" }
  ],
  "Frutta": [
    { it: "Fragole", en: "Strawberries", fr: "Fraises", prezzo: "5,00" },
    { it: "Fragoline di bosco", en: "Wild strawberries", fr: "Fraises des bois", prezzo: "7,00" },
    { it: "Ananas", en: "Pineapple", fr: "Ananas", prezzo: "6,00" }
  ],
  "Bevande": [
    { it: "Acqua minerale 100 cl", en: "Mineral water 100 cl", fr: "Eau minérale 100 cl", prezzo: "3,00" },
    { it: "Acqua minerale 50 cl", en: "Mineral water 50 cl", fr: "Eau minérale 50 cl", prezzo: "1,50" },
    { it: "Bibite", en: "Soft drinks", fr: "Boissons gazeuses", prezzo: "3,00" },
    { it: "Liquori", en: "Liqueurs", fr: "Liqueurs", prezzo: "4,00" },
    { it: "Liquori pregiati", en: "Fine liqueurs", fr: "Liqueurs raffinées", prezzo: "7,00" },
    { it: "Caffè", en: "Coffee", fr: "Café", prezzo: "1,50" }
  ],
  "Birre": [
    { it: "Moretti 33 cl", en: "Moretti 33 cl", fr: "Moretti 33 cl", prezzo: "3,00" },
    { it: "Moretti 66 cl", en: "Moretti 66 cl", fr: "Moretti 66 cl", prezzo: "4,50" },
    { it: "Birra dello Stretto 33 cl", en: "Birra dello Stretto 33 cl", fr: "Birra dello Stretto 33 cl", prezzo: "5,00" },
    { it: "Birra Messina Cristalli di Sale 33 cl", en: "Birra Messina Sea Salt Crystals 33 cl", fr: "Bière Messina Cristaux de Sel 33 cl", prezzo: "5,00" },
    { it: "Herdinger 50 cl", en: "Herdinger 50 cl", fr: "Herdinger 50 cl", prezzo: "8,00" },
    { it: "Amurusa bianca artigianale siciliana 33 cl", en: "Amurusa white Sicilian craft beer 33 cl", fr: "Amurusa blanche artisanale sicilienne 33 cl", prezzo: "6,00" },
    { it: "Amurusa ambrata artigianale siciliana 33 cl", en: "Amurusa amber Sicilian craft beer 33 cl", fr: "Amurusa ambrée artisanale sicilienne 33 cl", prezzo: "6,00" },
    { it: "Amurusa rossa artigianale siciliana 33 cl", en: "Amurusa red Sicilian craft beer 33 cl", fr: "Amurusa rouge artisanale sicilienne 33 cl", prezzo: "6,00" }
  ],
  "Vini Bianchi": [
    { it: "Santagostino - Cantine Firriato (Catarratto 50% Chardonnay 50%)", en: "Santagostino - Firriato Wineries (50% Catarratto, 50% Chardonnay)", fr: "Santagostino - Cantine Firriato (50% Catarratto, 50% Chardonnay)", prezzo: "25,00" },
    { it: "Maria Costanza - Az. Agr. Milazzo", en: "Maria Costanza - Milazzo Winery", fr: "Maria Costanza - Domaine Milazzo", prezzo: "30,00" },
    { it: "Etna bianco doc - Cantine Tornatore (Carricante 60% Catarratto 40%)", en: "Etna White DOC - Tornatore Wineries (60% Carricante, 40% Catarratto)", fr: "Etna blanc AOC - Cantine Tornatore (60% Carricante, 40% Catarratto)", prezzo: "25,00" },
    { it: "Etna bianco Pietrarizzo - Cantine Tornatore (Carricante-Catarratto)", en: "Etna White Pietrarizzo - Tornatore Wineries (Carricante-Catarratto)", fr: "Etna blanc Pietrarizzo - Cantine Tornatore (Carricante-Catarratto)", prezzo: "33,00" },
    { it: "Blandine - Cantine Judeka (MullerThurgau/Viogner/Zibibbo)", en: "Blandine - Judeka Wineries (Muller Thurgau / Viognier / Zibibbo)", fr: "Blandine - Cantine Judeka (Muller Thurgau / Viognier / Zibibbo)", prezzo: "20,00" },
    { it: "Bianco d'Alcamo - Cantine Principe di Corleone (Catarratto)", en: "Alcamo White - Principe di Corleone (Catarratto)", fr: "Blanc d'Alcamo - Cantine Principe di Corleone (Catarratto)", prezzo: "20,00" },
    { it: "Principe di Corleone Chardonnay", en: "Principe di Corleone Chardonnay", fr: "Principe di Corleone Chardonnay", prezzo: "22,00" },
    { it: "Anthilia - Cantine di Donnafugata", en: "Anthilia - Donnafugata Wineries", fr: "Anthilia - Cantine Donnafugata", prezzo: "18,00" },
    { it: "La Fuga - Cantine di Donnafugata (Chardonnay)", en: "La Fuga - Donnafugata Wineries (Chardonnay)", fr: "La Fuga - Cantine Donnafugata (Chardonnay)", prezzo: "24,00" },
    { it: "Sur Sur - Cantine di Donnafugata (Grillo)", en: "Sur Sur - Donnafugata Wineries (Grillo)", fr: "Sur Sur - Cantine Donnafugata (Grillo)", prezzo: "23,00" },
    { it: "Leone d'Almerita - Conte Tasca d'Almerita", en: "Leone d'Almerita - Conte Tasca d'Almerita", fr: "Leone d'Almerita - Conte Tasca d'Almerita", prezzo: "23,00" },
    { it: "Chiaramonte - Cantine Firriato (Insolia)", en: "Chiaramonte - Firriato Wineries (Insolia)", fr: "Chiaramonte - Cantine Firriato (Insolia)", prezzo: "21,00" },
    { it: "Pinot Grigio - Cantine Santa Margherita", en: "Pinot Grigio - Santa Margherita Winery", fr: "Pinot Grigio - Cantine Santa Margherita", prezzo: "23,00" }
  ],
  "Frizzanti": [
    { it: "Charme - Cantine Firriato (Blend vitigni autoctoni)", en: "Charme - Firriato Wineries (Blend of native grapes)", fr: "Charme - Cantine Firriato (Assemblage de cépages autochtones)", prezzo: "24,00" },
    { it: "Frabianco - Cantine Judeka", en: "Frabianco - Judeka Wineries", fr: "Frabianco - Cantine Judeka", prezzo: "21,00" },
    { it: "Bianco di Nera - Az. Agr. Milazzo (Blend di vitigni autoctoni)", en: "Bianco di Nera - Milazzo Winery (Blend of native grapes)", fr: "Bianco di Nera - Domaine Milazzo (Assemblage de cépages autochtones)", prezzo: "24,00" },
    { it: "Prosecco di Valdobbiadene - Spumanti Valdo", en: "Valdobbiadene Prosecco - Valdo", fr: "Prosecco de Valdobbiadene - Valdo", prezzo: "22,00" },
    { it: "Murgo Brut - Cantine del Conte Scammacca del Murgo (Nerello Mascalese)", en: "Murgo Brut - Conte Scammacca del Murgo (Nerello Mascalese)", fr: "Murgo Brut - Conte Scammacca del Murgo (Nerello Mascalese)", prezzo: "29,00" },
    { it: "Valdemone - Cantine Tornatore (Nerello Mascalese)", en: "Valdemone - Tornatore Wineries (Nerello Mascalese)", fr: "Valdemone - Cantine Tornatore (Nerello Mascalese)", prezzo: "25,00" }
  ],
  "Vini Spumante Metodo Classico": [
    { it: "Ferrari", en: "Ferrari", fr: "Ferrari", prezzo: "35,00" },
    { it: "Murgo Brut - Cantine del Conte Scammacca del Murgo (Nerello Mascalese)", en: "Murgo Brut - Conte Scammacca del Murgo (Nerello Mascalese)", fr: "Murgo Brut - Conte Scammacca del Murgo (Nerello Mascalese)", prezzo: "29,00" },
    { it: "Champagne", en: "Champagne", fr: "Champagne", prezzo: "90,00" }
  ],
  "Vini Rossi": [
    { it: "Santagostino - Cantine Firriato (Syrah Nero d’Avola)", en: "Santagostino - Firriato Wineries (Syrah Nero d’Avola)", fr: "Santagostino - Cantine Firriato (Syrah Nero d’Avola)", prezzo: "25,00" },
    { it: "Etna rosso doc - Cantine Tornatore (Nerello Mascalese 80% Nerello Cappuccio 20%)", en: "Etna Red DOC - Tornatore Wineries (80% Nerello Mascalese, 20% Nerello Cappuccio)", fr: "Etna rouge AOC - Cantine Tornatore (80% Nerello Mascalese, 20% Nerello Cappuccio)", prezzo: "25,00" },
    { it: "Etna rosso Pietrarizzo - Cantine Tornatore (Nerello Mascalese)", en: "Etna Red Pietrarizzo - Tornatore Wineries (Nerello Mascalese)", fr: "Etna rouge Pietrarizzo - Cantine Tornatore (Nerello Mascalese)", prezzo: "35,00" },
    { it: "Etna rosso Trimarchisa - Cantine Tornatore (Nerello Mascalese 80% Nerello Cappuccio 20%)", en: "Etna Red Trimarchisa - Tornatore Wineries (80% Nerello Mascalese, 20% Nerello Cappuccio)", fr: "Etna rouge Trimarchisa - Cantine Tornatore (80% Nerello Mascalese, 20% Nerello Cappuccio)", prezzo: "60,00" },
    { it: "Passo delle Mule - Duca di Salaparuta (Nero d’Avola)", en: "Passo delle Mule - Duca di Salaparuta (Nero d’Avola)", fr: "Passo delle Mule - Duca di Salaparuta (Nero d’Avola)", prezzo: "24,00" },
    { it: "Sherazade - Cantine di Donnafugata (Nero d’Avola)", en: "Sherazade - Donnafugata Wineries (Nero d’Avola)", fr: "Sherazade - Cantine Donnafugata (Nero d’Avola)", prezzo: "22,00" },
    { it: "Jurah - Cantine Judeka (Syrah)", en: "Jurah - Judeka Wineries (Syrah)", fr: "Jurah - Cantine Judeka (Syrah)", prezzo: "21,00" },
    { it: "Cygnus - Conte Tasca d’Almerita (Nero d’Avola 50% Cabernet Sauvignon 50%)", en: "Cygnus - Conte Tasca d’Almerita (50% Nero d’Avola, 50% Cabernet Sauvignon)", fr: "Cygnus - Conte Tasca d’Almerita (50% Nero d’Avola, 50% Cabernet Sauvignon)", prezzo: "30,00" },
    { it: "Floramundi Cerasuolo di Vittoria doc - Cantine di Donnafugata", en: "Floramundi Cerasuolo di Vittoria DOC - Donnafugata Wineries", fr: "Floramundi Cerasuolo di Vittoria AOC - Cantine Donnafugata", prezzo: "23,00" },
    { it: "Bell’Assai - Cantine di Donnafugata (Frappato)", en: "Bell’Assai - Donnafugata Wineries (Frappato)", fr: "Bell’Assai - Cantine Donnafugata (Frappato)", prezzo: "23,00" },
    { it: "Mille e una Notte - Cantine di Donnafugata", en: "Mille e una Notte - Donnafugata Wineries", fr: "Mille et une Nuits - Cantine Donnafugata", prezzo: "65,00" },
    { it: "Vittoria - Cantine Judeka (Nero d’Avola d’appassimento)", en: "Vittoria - Judeka Wineries (Dried Nero d’Avola grapes)", fr: "Vittoria - Cantine Judeka (Nero d’Avola en passerillage)", prezzo: "21,00" },
    { it: "Maria Costanza Rosso", en: "Maria Costanza Red", fr: "Maria Costanza Rouge", prezzo: "35,00" }
  ],
  "Vini al Calice": [
    { it: "Chardonnay", en: "Chardonnay", fr: "Chardonnay", prezzo: "6,00" },
    { it: "Grillo", en: "Grillo", fr: "Grillo", prezzo: "5,50" },
    { it: "Etna bianco doc", en: "Etna White DOC", fr: "Etna blanc AOC", prezzo: "5,50" },
    { it: "Prosecco", en: "Prosecco", fr: "Prosecco", prezzo: "5,00" },
    { it: "Nero d’Avola", en: "Nero d’Avola", fr: "Nero d’Avola", prezzo: "5,50" },
    { it: "Etna rosso doc", en: "Etna Red DOC", fr: "Etna rouge AOC", prezzo: "5,50" }
  ]
};
function renderMenu(lang) {
  menuIndex.innerHTML = '';
  menuContainer.innerHTML = '';

  originalSections.forEach(section => {
    const translatedTitle = translations[lang]?.[section] || section;
    const sectionId = section.replace(/\s+/g, '-');

    // Crea voce nel menu-index (navigazione in alto)
    const link = document.createElement('a');
    link.href = `#${sectionId}`;
    link.textContent = translatedTitle;
    menuIndex.appendChild(link);

    // Titolo sezione
    const h2 = document.createElement('h2');
    h2.textContent = translatedTitle;
    h2.id = sectionId;
    menuContainer.appendChild(h2);

    // Piatti
    if (menuData[section]) {
      menuData[section].forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `<span>${item[lang] || item.it}</span><span>€ ${item.prezzo}</span>`;
        menuContainer.appendChild(div);
      });
    }
  });
}
langSelect.addEventListener('change', e => {
  const lang = e.target.value;
  const t = translations[lang] || {};

  document.getElementById('menu-title').textContent = t["Menu"] || "Menu";
  document.getElementById('allergen-title').textContent = t["Informazioni e Allergeni"] || "Informazioni e Allergeni";
  document.getElementById('allergen-desc').textContent = t["Si avvisa la gentile clientela..."] || "Si avvisa la gentile clientela...";
  document.getElementById('allergen-info').textContent = t["Un nostro Responsabile incaricato..."] || "Un nostro Responsabile incaricato...";
  document.getElementById('allergen-legal').textContent = t["Elenco degli ingredienti allergenici utilizzati..."] || "Elenco degli ingredienti allergenici utilizzati...";

  for (let i = 1; i <= 14; i++) {
    const el = document.getElementById("a" + i);
    if (el && t[el.textContent]) {
      el.textContent = t[el.textContent];
    }
  }

  renderMenu(lang);
});
// Avvio iniziale
renderMenu('it');

