<template>
    <div id="app">
        <!--页头-->
        <header>
            <b-collapse id="collapse-about" class="bg-dark">
                <b-container>
                    <b-row>
                        <div class="col-sm-8 col-md-7 py-4">
                            <h4 class="text-white">About</h4>
                            <p class="text-muted">
                                Add some information about the album below, the
                                author, or any other background context. Make it
                                a few sentences long so folks can pick up some
                                informative tidbits. Then, link them off to some
                                social networking sites or contact information.
                            </p>
                        </div>
                        <div class="col-sm-4 offset-md-1 py-4">
                            <h4 class="text-white">Contact</h4>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#" class="text-white"
                                        >Follow on Twitter</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="text-white"
                                        >Like on Facebook</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="text-white">Email me</a>
                                </li>
                            </ul>
                        </div>
                    </b-row>
                </b-container>
            </b-collapse>

            <b-navbar toggleable type="dark" variant="dark">
                <b-container>
                    <b-navbar-brand href="#">
                        <b-icon icon="image" class="mr-2" />
                        <strong>XboxPic</strong>
                    </b-navbar-brand>

                    <b-navbar-toggle target="collapse-about">
                        <template #default="{ expanded }">
                            <b-icon v-if="expanded" icon="caret-up" />
                            <b-icon v-else icon="caret-down" />
                        </template>
                    </b-navbar-toggle>
                </b-container>
            </b-navbar>
        </header>

        <!--主体-->
        <main>
            <b-jumbotron class="text-center mb-0">
                <b-container>
                    <h1 class="display-4">XboxPic</h1>
                    <p class="lead">
                        Discover the latest Xbox game images on XboxPic. Browse
                        through a collection of screenshots and get a glimpse of
                        your favorite Xbox games in one place.
                    </p>
                    <b-row class="justify-content-center">
                        <form
                            class="form-inline my-2 my-lg-0"
                            @submit.prevent="searchGames"
                        >
                            <b-input-group>
                                <b-form-input
                                    ref="searchInput"
                                    type="search"
                                    placeholder="Search Game"
                                    aria-label="Search"
                                    v-model="searchTerm"
                                    @blur="validateSearch"
                                ></b-form-input>
                                <b-input-group-append>
                                    <button
                                        :disabled="loading"
                                        class="btn btn-outline-success my-2 my-sm-0"
                                        type="submit"
                                    >
                                        <span v-if="!loading">Search</span>
                                        <span
                                            v-else
                                            class="spinner-border spinner-border-sm"
                                        ></span>
                                    </button>
                                </b-input-group-append>
                            </b-input-group>
                        </form>
                    </b-row>
                </b-container>
            </b-jumbotron>

            <div class="album py-5 bg-light">
                <div class="container">
                    <h2>{{ gameTitle }}</h2>
                    <hr />
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <svg
                                    class="bd-placeholder-img card-img-top"
                                    width="100%"
                                    height="225"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="#55595c"
                                    ></rect>
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="#eceeef"
                                        dy=".3em"
                                    >
                                        Thumbnail
                                    </text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!--页脚-->
        <footer class="text-muted my-5">
            <div class="container">
                <p class="float-right">
                    <a href="#">Back to top</a>
                </p>
                <p>
                    Discover the latest Xbox game images on XboxPic - your
                    ultimate source for Xbox game screenshots
                </p>
                <p>
                    Copyright &copy; {{ currentYear }} XboxPic. All rights
                    reserved.
                </p>
            </div>
        </footer>

        <!--提示信息-->
        <b-modal id="modal-message" title="Message" centered ok-only>
            <p class="my-2">{{ message }}</p>
        </b-modal>
    </div>
</template>

<script>
const apiUrl = "https://displaycatalog.mp.microsoft.com/v7.0/products";

export default {
    data() {
        return {
            loading: false,
            searchTerm: "",
            message: "",
            game: {
                title: "",
            },
        };
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
        gameTitle() {
            return this.game.title === "" ? "None" : this.game.title;
        },
    },
    methods: {
        validateSearch() {
            const verified = this.searchTerm.trim().length !== 0;
            // if (verified) {
            //     this.$refs.searchInput.classList.remove("is-invalid");
            // } else {
            //     this.$refs.searchInput.classList.add("is-invalid");
            // }

            return verified;
        },
        showMesage(message) {
            if (message) {
                this.message = message;
                this.$bvModal.show("modal-message");
            }
        },
        async searchGames() {
            if (this.validateSearch()) {
                try {
                    this.loading = true;

                    const params = {
                        bigIds: this.searchTerm.trim(),
                        market: "US",
                        languages: "en-US",
                        "MS-CV": "DGU1mcuYo0WMMp+F.1",
                    };
                    const response = await this.$http.get(apiUrl, { params });
                    if (response.data.Products.length > 0) {
                        const productTitle =
                            response.data.Products[0]["LocalizedProperties"][0][
                                "ProductTitle"
                            ];
                        this.game.title = productTitle;
                        console.log(response.data.Products);
                    } else {
                        this.showMesage("Sorry, no products found.");
                    }
                } catch (e) {
                    this.showMesage(
                        "There was an error while searching, please try again later."
                    );
                    console.error(e);
                } finally {
                    this.loading = false;
                }
            } else {
                this.showMesage("Search input is required.");
            }
        },
    },
};
</script>
