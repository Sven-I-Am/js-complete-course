/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        console.log(geteverything());
        console.log(commentArray());



    });

    async function geteverything() {
        let articles = (await window.lib.getPosts());
        let articlesArray = articles.map(getArticle);
        function getArticle(article) {
            let articleInfo = {
                id: article.id,
                title: article.title,
                content: article.content,
                comments: commentArray()
            }
            return articleInfo;
        }
        return articlesArray
    }
    async function commentArray(){
        let comments =  (await window.lib.getComments());
        let comment = comments.map((comment) => comment.content);
        return (comment);
    }

})();
