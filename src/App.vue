<template>
    <div id="app">
        <!--页头-->
        <page-header :title="title"></page-header>

        <!--主体-->
        <main>
            <b-jumbotron class="text-center mb-0">
                <b-container>
                    <h1 class="display-4">{{ title }}</h1>
                    <p class="lead">
                        Discover the latest Xbox game images on {{ title }}.
                        Browse through a collection of screenshots and get a
                        glimpse of your favorite Xbox games in one place.
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
                    <div v-if="product.images">
                        <b-tabs content-class="mt-3">
                            <b-tab
                                v-for="(images, purpose) in product.images"
                                :title="purpose"
                                :active="purpose === 'ScreenShot'"
                            >
                                <div class="row">
                                    <div
                                        class="col-md-3"
                                        v-for="image in images"
                                    >
                                        <image-card :image="image" />
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </main>

        <!--页脚-->
        <page-footer :title="title"></page-footer>

        <!--提示信息-->
        <b-modal id="modal-message" title="Message" centered ok-only>
            <p class="my-2">{{ message }}</p>
        </b-modal>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useProductStore } from "@/stores/product";
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import ImageCard from "@/components/ImageCard.vue";

export default {
    setup() {
        return {
            store: useProductStore(),
        };
    },
    components: { PageHeader, PageFooter, ImageCard },
    data() {
        return {
            title: "XboxPic",
            loading: false,
            searchTerm: "",
            message: "",
        };
    },
    computed: {
        ...mapState(useProductStore, {
            product: "product",
        }),
    },
    methods: {
        validateSearch() {
            const pattern = /^[A-Za-z0-9]{12}$/;
            return pattern.test(this.searchTerm.trim());
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
                    await this.store.getData(this.searchTerm.trim());
                } catch (e) {
                    this.showMesage(
                        "There was an error while searching, please try again later."
                    );
                    console.error(e);
                } finally {
                    this.loading = false;
                }
            } else {
                this.showMesage(
                    "The value is not valid, it should be 12 characters long and contains letters or numbers"
                );
            }
        },
    },
};
</script>
