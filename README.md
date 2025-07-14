# Py# Developers Portfolio Website

This is the official portfolio website for Py# Developers, a team of dedicated software engineers. It is a fully responsive, single-page application designed to showcase our skills, featured projects, and professional capabilities to potential clients and employers.

---

## ✨ Features

This website is built with a focus on modern design, interactivity, and an excellent user experience.

* **Professional & Responsive Design**: Adapts seamlessly to all screen sizes, from mobile phones to desktop monitors.
* **Light/Dark Theme Toggle**: Allows users to switch between a light and dark theme, with their preference saved in their browser for future visits.
* **Interactive Hero Section**: Features a dynamic typing animation to immediately engage visitors.
* **Dynamic Project Showcase**: Project details are displayed in an elegant modal window, allowing users to view more information without leaving the page.
* **Interactive Team Cards**: Team member cards feature a polished hover effect that reveals social media links.
* **Smooth Scrolling & Navigation**: Includes a "Back to Top" button and smooth scrolling for a pleasant user journey.
* **Live Form Validation**: The contact form provides real-time feedback for email validation to prevent submission errors.
* **Polished UI/UX**: Features like a navbar that changes on scroll and a custom-styled scrollbar create a highly polished user experience.

---

## 🚀 Live Demo

A live version of the website is hosted and available for viewing.

**[View Live Demo](https://https://p-sharp.vercel.app/)**

---

## 🛠️ Tech Stack

The project leverages core web technologies to create a fast, efficient, and maintainable website.

* **HTML5**: For the structure and content of the website.
* **CSS3**: For all styling, including the responsive layout, theme variables, and animations.
* **JavaScript (ES6+)**: For all interactive features, including the theme toggle, project modals, and dynamic animations.
* **Typed.js**: A lightweight JavaScript library for the typing animation in the hero section.
* **Font Awesome**: For high-quality icons used throughout the site.

---

## 📂 File Structure

The project is organized into a clean and intuitive file structure.


/
|-- index.html          # The main HTML file containing all content and structure.
|-- index.css           # The main stylesheet with all styling rules.
|-- script.js           # The main JavaScript file for all interactive functionality.
|-- /Images/            # Folder for all images (team photos, project images, etc.).
|-- README.md           # This file.


---

## 🚀 Setup and Usage

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://https://github.com/Cynthia-Motaung/p-sharp
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```
3.  **Open `index.html` in your browser:**
    You can do this by simply double-clicking the `index.html` file or by using a live server extension in your code editor (like Live Server for VS Code) for the best development experience.

---

## ✏️ Customization

This portfolio is designed to be easily customized.

### Updating Projects

To add, remove, or edit a project:

1.  Open `index.html`.
2.  Navigate to the `<div class="project-grid">`.
3.  Each project is a `<div class="project-card">`. You can duplicate, edit, or remove these blocks.
4.  Update the following `data-*` attributes for the modal content:
    * `data-title`: The project's title.
    * `data-img`: The path to the project's image.
    * `data-desc`: The detailed project description for the modal.
    * `data-tech`: A comma-separated list of technologies used.
    * `data-link`: The URL to the live project or prototype.
5.  Update the visible content inside the card (the `<h3>`, `<p>`, and `.tech-tag` elements).

### Updating Team Members

To change team member information:

1.  Open `index.html`.
2.  Navigate to the `<div class="team-members">`.
3.  Each member is a `<div class="team-member">`.
4.  Update the `<img>` `src` for the member's photo and the `href` attributes in the social media links (`<a>` tags).

### Updating Contact Form

To receive messages from the contact form:

1.  Go to [Formspree](https://formspree.io/).
2.  Create a new form and get your unique form ID.
3.  In `index.html`, find the `<form>` element and replace `https://formspree.io/f/your_form_id` with your new URL.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
