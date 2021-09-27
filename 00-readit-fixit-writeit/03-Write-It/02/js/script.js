const movies = [
    "Gate to heaven",
    "Tout s'est bien passé",
    "Wolfwalkers",
    "Dune",
    "Délicieux",
    "Benedetta",
    "Respect",
    "Titane",
    "Give me liberty",
    "In the heights",
    "Des hommes",
    "Paw patrol: de film",
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;
movies.reverse();
document.write(`<ul>`);
movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ul>`);