const newBlogFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const title = document.querySelector('#blog-title').value.trim();
    const body = document.querySelector('#blog-body').value.trim();

    if (title && body) {
        const response = await fetch("api/blog", {
            method: "POST",
            body: JSON.stringify({ title, body }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};



document
    .querySelector('.newBlog-form')
    .addEventListener('submit', newBlogFormHandler);


