var footer = new Vue({
    el: '[vue="footer"]',
    data() {
        return {
            developers: [
                {
                    fullName: "Kevin Bevil",
                    github: "https://github.com/kevinbevil"
                },
                {
                    fullName: "Justin Chastain",
                    github: "https://github.com/aangl3r"
                },
                {
                    fullName: "Joe Keegan",
                    github: "https://github.com/jwkeegan"
                },
                {
                    fullName: "Donna Kuang",
                    github: "https://github.com/dolaku"
                }
            ]
        }
    },
    template: `
        <nav>
            <ul class=" d-flex justify-content-center">
                <li><a href="https://github.com/KevinBevil/Project2" target="_blank"><i class="fab fa-github fa-3x"></i></a></li>
            </ul>

            <p>
                &copy; Movie Mania, made by:
            </p>
            <div class="dev-wrapper text-center">
                <a v-for="developer in developers" class="developer" v-bind:href="developer.github" target="_blank" rel="noopener noreferrer">
                    {{ developer.fullName }}
                </a>
            </div>
        </nav>
    `
});