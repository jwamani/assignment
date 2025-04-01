const newsListItem = document.getElementById("news");
const news_description = document.getElementById("description");
const notification = document.getElementById("notification");
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("preview");
const imageDescription = document.getElementById("image_description");
const previewText = document.querySelector("span");


const searchInput = document.getElementById('newsSearch');
const categoryFilter = document.getElementById('categoryFilter');


function renderNewsList() {
    const newsListItem = document.getElementById('news');
    newsListItem.innerHTML = '';
    const searchTerm = document.getElementById('newsSearch').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;

    try {
        const filteredNews = newslist.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        filteredNews.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("newsitem");
            li.category = item.category;
            li.textContent = item.name;

            li.addEventListener("click", () => {
                document.querySelectorAll('.newsitem').forEach(item =>
                    item.classList.remove('active'));
                li.classList.add('active');

                document.getElementById('image_description').src = item.image;
                document.getElementById('description').textContent = item.description;
            });

            newsListItem.appendChild(li);
        });
    } catch (error) {
        console.error('Error rendering news:', error);

    }
}
document.getElementById('newsSearch').addEventListener('input', renderNewsList);
document.getElementById('categoryFilter').addEventListener('change', renderNewsList);

// Initial render
renderNewsList();

imageInput.addEventListener("change", (e) => {
    console.log(e);
    const imageFile = e.target.files[0];

    if (imageFile) {
        const reader = new FileReader();
        // console.log(reader);
        reader.onload = (event) => {
            // console.log(event);
            imagePreview.src = event.target.result;
            imagePreview.style.display = "block";
            previewText.style.display = "none";
        };
        reader.readAsDataURL(imageFile);
    }
});

document.addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const newsTitle = form.querySelector('[name="title"]').value;
    const newsDescription = form.querySelector('[name="description"]').value;
    const imageFile = form.querySelector('[name="image"]').files[0];
    // console.log(imageFile);

    const getImageSource = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            // console.log(reader);
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
        });
    };
    try {
        const imgSrc = await getImageSource(imageFile);
        // console.log(imgSrc);
        const newsObject = {
            name: newsTitle,
            description: newsDescription,
            image: imgSrc,
        };

        newslist.push(newsObject);

        // console.log(newsObject);
        // console.log(newslist);

        renderNewsList();

        showNotification("Your news feed has been censored and acknowleged");

        form.reset();
        imagePreview.style.display = "none";
        previewText.style.display = "block";

    } catch (error) {
        console.log(error);
    }
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hide');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
    }, 3000);
}
const newsBody = document.getElementById('news-body')
darkModeToggle.addEventListener('click', function () {
    newsBody.classList.toggle('dark-mode')
})
