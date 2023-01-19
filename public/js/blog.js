
const newCommentFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the form

    const comment = document.querySelector('#post-comment').value.trim();
    const blogId = document.querySelector(".sub-btn").getAttribute("data-id");
    
    if (comment) {
        const response = await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ comment, blogId }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};



document
    .querySelector('.newComment-form')
    .addEventListener('submit', newCommentFormHandler);


