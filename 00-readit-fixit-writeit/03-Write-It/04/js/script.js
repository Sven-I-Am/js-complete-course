const bestActor = [
    {
        actor: "Forest Whitaker",
        film: "The Last King of Scotland",
        age: 45
    }, {
        actor: "Daniel Day-Lewis",
        film: "There Will Be Blood",
        age: 50
    }, {
        actor: "Sean Penn",
        film: "Milk",
        age: 48
    }, {
        actor: "Jeff Bridges",
        film: "Crazy Heart",
        age: 60
    }, {
        actor: "Colin Firth",
        film: "The King's Speech",
        age: 50
    }, {
        actor: "Jean Dujardin",
        film: "The Artist",
        age: 39
    }, {
        actor: "Daniel Day-Lewis",
        film: "Lincoln",
        age: 55
    }, {
        actor: "Matthew McConaughey",
        film: "Dallas Buyers Club",
        age: 44
    }, {
        actor: "Eddie Redmayne",
        film: "The Theory of Everything",
        age: 33
    }, {
        actor: "Leonardo DiCaprio",
        film: "The Revenant",
        age: 41
    }
]

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;
const actors = bestActor.map(winner => winner.actor);
const lastName = [];

for (i=0; i<actors.length; i++) {
    const fullname = actors[i];
    const splitName = fullname.split(' ');
    lastName[i] = splitName[1];
    console.log(splitName[1]);
}

lastName.sort();
document.write('<ol>');
lastName.forEach(winner => document.write(wrapWithTag(winner, `li`)));
document.write('</ol>');
