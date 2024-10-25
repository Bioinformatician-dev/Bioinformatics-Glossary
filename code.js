const terms = [
    { term: "Genomics", definition: "The study of the genome, the complete set of DNA within an organism.", example: "Genomics allows for the identification of genetic disorders.", category: "genomics" },
    { term: "Proteomics", definition: "The study of the proteome, the entire set of proteins expressed by a genome.", example: "Proteomics can help in understanding disease mechanisms.", category: "proteomics" },
    // More terms...
];

function displayTerms(filteredTerms) {
    const glossary = document.getElementById("glossary");
    glossary.innerHTML = "";
    filteredTerms.forEach(term => {
        glossary.innerHTML += `<div class="term">
            <h3>${term.term}</h3>
            <p><strong>Definition:</strong> ${term.definition}</p>
            <p><strong>Example:</strong> ${term.example}</p>
        </div>`;
    });
}

function searchTerms() {
    const query = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("category").value;
    const filteredTerms = terms.filter(term => 
        (term.term.toLowerCase().includes(query) || term.definition.toLowerCase().includes(query)) &&
        (category === "all" || term.category === category)
    );
    displayTerms(filteredTerms);
}

document.getElementById("search").addEventListener("input", searchTerms);
document.getElementById("category").addEventListener("change", searchTerms);

document.getElementById("contribute-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const newTerm = {
        term: document.getElementById("term").value,
        definition: document.getElementById("definition").value,
        example: document.getElementById("example").value,
        category: "other" // Adjust as needed
    };
    terms.push(newTerm);
    displayTerms(terms);
    e.target.reset();
});

// Initial display
displayTerms(terms);
