// Cross Orign Resource Sharing
function getCORS(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}


// Access JSON file
getCORS('blog.json', function(request){

    var response = request.currentTarget.response || request.target.responseText;

    // Parse the response as JSON
    var blogJson = JSON.parse(response);

    // Create a blog post for each entry in JSON file
    for(var i = 0; i < blogJson.posts.length; i++) {


        var heading = blogJson.posts[i].heading;
        var subHeading = blogJson.posts[i].subHeading;
        var author = blogJson.posts[i].author;
        var date = blogJson.posts[i].date;
        var content = blogJson.posts[i].content;

        // Declare HTMl element variables
        var postContainer;
        var headingEl;
        var subHeadingEl;
        var authorEl;
        var dateEl;
        var contentEl;


        // Create the post elements
        function createPostElements() {

            postContainer = document.createElement('div');
            headingEl = document.createElement('h1');
            subHeadingEl = document.createElement('h2');
            authorEl = document.createElement('h3');
            dateEl = document.createElement('h3');
            contentEl = document.createElement('p');

        }

        // Set the element IDs
        function setElementIds() {

            postContainer.setAttribute("id", "postContainer");
            headingEl.setAttribute("id", "heading");
            subHeadingEl.setAttribute("id", "subHeading");
            authorEl.setAttribute("id", "author");
            dateEl.setAttribute("id", "date");
            contentEl.setAttribute("id", "content");

        }

        // Inject JSON content into the elemtns
        function injectContent() {

            headingEl.innerHTML = heading;
            subHeadingEl.innerHTML = subHeading;
            authorEl.innerHTML = author;
            dateEl.innerHTML = date;
            contentEl.innerHTML = content;

        }

        // Append the contenct to the DOM
        function appendContent() {

            document.body.appendChild(postContainer);
            postContainer.appendChild(headingEl);
            postContainer.appendChild(subHeadingEl);
            postContainer.appendChild(authorEl);
            postContainer.appendChild(dateEl);
            postContainer.appendChild(contentEl);

        }

        // Call the functions
        createPostElements();
        setElementIds();
        injectContent();
        appendContent();

    } // end the For loop

});
