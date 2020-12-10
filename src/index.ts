import HomePage from "./page/home/HomePage.vue";

window.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("app");
    if (target) {
        const page = new HomePage();

        page.$mount("#app");
        // page.$mountTo("#app") // this won't compile as $mountTo does not exist.
    }
});
