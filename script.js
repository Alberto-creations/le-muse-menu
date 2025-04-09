
document.addEventListener('DOMContentLoaded', function () {
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
      "Allergene": "Allergen"
    },
    fr: {
      "Menu": "Menu",
      "Informazioni e Allergeni": "Informations sur les allergènes",
      "Si avvisa la gentile clientela...": "Veuillez noter que les aliments et boissons servis ici peuvent contenir des allergènes ou des substances associées.",
      "Un nostro Responsabile incaricato...": "Un membre de notre équipe est à votre disposition pour toute information complémentaire.",
      "Elenco degli ingredienti allergenici utilizzati...": "Liste des ingrédients allergènes utilisés dans cet établissement selon le règlement UE n. 1169/2011 – 'Substances ou produits provoquant des allergies ou intolérances'",
      "Allergene": "Allergène"
    }
  };

  const allergeni = [
    "Cereali contenenti glutine",
    "Crostacei",
    "Uova",
    "Pesce",
    "Arachidi",
    "Soia",
    "Latte",
    "Frutta a guscio",
    "Sedano",
    "Senape",
    "Semi di sesamo",
    "Solfiti",
    "Lupini",
    "Molluschi"
  ];

  function renderMenu(lang) {
    menuIndex.innerHTML = '';
    menuContainer.innerHTML = '';

    const sections = ["Antipasti", "Primi Piatti", "Secondi", "Pizze", "Bevande"];
    sections.forEach(section => {
      const translatedTitle = translations[lang]?.[section] || section;
      const sectionId = section.replace(/\s+/g, '-');

      const link = document.createElement('a');
      link.href = `#${sectionId}`;
      link.textContent = translatedTitle;
      menuIndex.appendChild(link);

      const h2 = document.createElement('h2');
      h2.textContent = translatedTitle;
      h2.id = sectionId;
      menuContainer.appendChild(h2);

      const item = document.createElement('div');
      item.className = 'menu-item';
      item.innerHTML = `<span>${section} Item di esempio</span><span>€ 0,00</span>`;
      menuContainer.appendChild(item);
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
      if (el) {
        el.textContent = t["Allergene"] ? `${t["Allergene"]} ${i}` : `Allergene ${i}`;
      }
    }

    renderMenu(lang);
  });

  renderMenu('it');
});
