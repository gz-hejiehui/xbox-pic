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
                    <div v-if="products">
                        <b-tabs content-class="mt-3">
                            <b-tab
                                v-for="(product, index) in products"
                                :title="product.id"
                                :active="index === 0"
                            >
                                <div class="row">
                                    <div
                                        class="col-md-3"
                                        v-for="screenshot in product.images
                                            .screenshots"
                                    >
                                        <b-card
                                            class="card mb-4 shadow-sm"
                                            no-body
                                            style="max-width: 20rem"
                                            :img-src="screenshot['Uri']"
                                            img-alt="Image"
                                            img-top
                                        >
                                            <div class="card-body p-2">
                                                <div
                                                    class="d-flex justify-content-between align-items-center"
                                                >
                                                    <small class="text-muted">
                                                        {{
                                                            screenshot["Width"]
                                                        }}
                                                        x
                                                        {{
                                                            screenshot["Height"]
                                                        }}
                                                    </small>
                                                    <b-button
                                                        size="sm"
                                                        variant="outline-secondary"
                                                        :href="
                                                            screenshot['Uri']
                                                        "
                                                        :download="
                                                            screenshot[
                                                                'FileId'
                                                            ] + '.jpg'
                                                        "
                                                        target="_blank"
                                                    >
                                                        <b-icon
                                                            icon="download"
                                                        />
                                                    </b-button>
                                                </div>
                                            </div>
                                        </b-card>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
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
import { mapState } from "pinia";
import { useProductStore } from "@/stores/product";

export default {
    setup() {
        return {
            store: useProductStore(),
        };
    },
    data() {
        return {
            loading: false,
            searchTerm: "",
            message: "",
        };
    },
    computed: {
        ...mapState(useProductStore, {
            productCount: "count",
            products: "products",
        }),
        currentYear() {
            return new Date().getFullYear();
        },
    },
    methods: {
        validateSearch() {
            return this.searchTerm.trim().length > 0;
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
                    await this.store.getData(this.searchTerm);
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
