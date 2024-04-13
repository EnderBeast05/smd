const searchBar = document.getElementById('search');
const searchResults = document.getElementById('search-results');
const personNameDisplay = document.getElementById('person-name');
const personRankDisplay = document.getElementById('person-rank');
const personGroupDisplay = document.getElementById('person-group');
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');

const people = [
    { name: 'iFlixyy', rank: 'Caporal Maggiore', group: 'Esercito' },
    { name: 'preistoria', rank: 'Sergente', group: 'Esercito' },
    { name: 'mattia_59', rank: 'Allievo Maresciallo', group: 'Carabinieri' },
    { name: 'zTonno', rank: 'Appuntato Scelto Q.S.', group: 'Finanza' },
    { name: 'JustGiorgia', rank: 'Brigadiere', group: 'Carabinieri' },
    { name: 'ByToon_', rank: 'Comandante', group: 'Carabinieri' },
    { name: 'hassan_adham', rank: 'Comandante', group: 'SMD' },
    { name: 'Alex1sBack', rank: 'Finanziere', group: 'Finanza' },
    { name: 'polluz98', rank: 'Finanziere Scelto', group: 'Finanza' },
    { name: 'zReaperPvP', rank: 'Generale d\'Armata', group: 'Carabinieri' },
    { name: '_ImShinee', rank: 'Luogotenente C.S.', group: 'Carabinieri' },
    { name: 'Xandeer_', rank: 'Maresciallo', group: 'Esercito' },
    { name: 'XertyMax', rank: 'Primo Caporal Maggiore', group: 'Esercito' },
    { name: 'restapiergi__', rank: 'S.M.C.', group: 'Esercito' },
    { name: 'Neduxx', rank: 'Vice Brigadiere', group: 'Carabinieri' },
    { name: 'liuk993', rank: 'Vice Comandante', group: 'Carabinieri' },
    { name: 'Obetto_19', rank: 'Vice Comandante', group: 'SME' },
    { name: '_ttodgers', rank: 'Vice Comandante', group: 'SMD' },
    { name: 'stefex78', rank: 'All. Maresciallo', group: 'Carabinieri' },
    { name: 'KeYz3', rank: 'Maresciallo', group: 'Carabinieri' },
    { name: 'Gabriele654321', rank: 'Maresciallo', group: 'Esercito' },
    { name: 'Il_grillo69', rank: 'Finanziere', group: 'Finanza' },
    { name: 'IoSonoUnaPapera', rank: 'Finanziere', group: 'Finanza' },
    { name: '_Aury_', rank: 'Finanziere Scelto', group: 'Finanza' },
    { name: 'blaxel05', rank: 'Appuntato Scelto', group: 'Carabinieri' },
    { name: 'Aristocrazia', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: 'Chri21', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: 'framatte_', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: 'GabFunghetto', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: 'IlFiorellino', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: '_ImNotIsaxc', rank: 'Soldato', group: 'Esercito' },
    { name: 'TheLoxyGamer', rank: 'Soldato', group: 'Esercito' },
    { name: 'gianlu006', rank: 'All. Maresciallo', group: 'Esercito' },
    { name: 'JustNoPhysiX', rank: 'Appuntato', group: 'Finanza' },
    { name: 'PathBateman_', rank: 'Appuntato Scelto', group: 'Carabinieri' },
    { name: 'NonSonoFili', rank: 'Appuntato Scelto', group: 'Carabinieri' },
    { name: 'manciolin', rank: 'Caporal Maggiore', group: 'Esercito' },
    { name: 'todyh', rank: 'Caporal Maggiore Capo', group: 'Esercito' },
    { name: 'Daniel_clap_y', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: 'Its_Piko', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: 'kairioct', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: 'Mass1mo10', rank: 'Carabiniere', group: 'Carabinieri' },
    { name: '_Mxrte', rank: 'Finanziere', group: 'Finanza' },
    { name: 'perlino999', rank: 'Finanziere', group: 'Finanza' },
    { name: 'GetVino', rank: 'Finanziere Scelto', group: 'Finanza' },
    { name: 'polluz98', rank: 'Finanziere Scelto', group: 'Finanza' },
    { name: 'nyObito_', rank: 'Vice Comandante', group: 'Finanza' },
    { name: 'Mao_Zedong', rank: 'Maresciallo Ord.', group: 'Esercito' },
    { name: 'Aliikee', rank: 'Sergente', group: 'Esercito' },
    { name: 'dagAFlame', rank: 'Soldato', group: 'Esercito' },
    { name: 'FastlyCrafter', rank: 'Soldato', group: 'Esercito' },
    { name: 'ricdeste', rank: 'Soldato', group: 'Esercito' },
    { name: 'xKeza', rank: 'Soldato', group: 'Esercito' },
    { name: 'zVqpe_', rank: 'Soldato', group: 'Esercito' },
    { name: 'spilluz', rank: 'Soldato', group: 'Esercito' }
];



searchBar.addEventListener('input', updateSearchResults);
filterCheckboxes.forEach(checkbox => checkbox.addEventListener('change', updateSearchResults));

function updateSearchResults() {
    const searchValue = searchBar.value.trim().toLowerCase();
    const selectedGroups = Array.from(filterCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const matchingPeople = people.filter(person => {
        return person.name.toLowerCase().includes(searchValue) && selectedGroups.includes(person.group);
    });

    renderSearchResults(matchingPeople);
}

function renderSearchResults(results) {
    // Rimuovi tutte le opzioni precedenti dalla tendina
    searchResults.innerHTML = '';

    // Creiamo un'opzione vuota per indicare la selezione di default
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Seleziona una persona...';
    searchResults.add(defaultOption);

    results.forEach(person => {
        // Creiamo un'opzione per ciascuna persona trovata e la aggiungiamo alla tendina
        const option = document.createElement('option');
        option.text = person.name;
        searchResults.add(option);
    });

    // Mostra o nasconde la tendina a seconda se ci sono risultati
    searchResults.style.display = results.length > 0 ? 'block' : 'none';
}

// Funzione per visualizzare i dettagli della persona selezionata
searchResults.addEventListener('change', function() {
    const selectedName = searchResults.value;
    const selectedPerson = people.find(person => person.name === selectedName);
    if (selectedPerson) {
        personNameDisplay.textContent = selectedPerson.name;
        personRankDisplay.textContent = selectedPerson.rank;
        personGroupDisplay.textContent = selectedPerson.group;
    }
});
