<template>
    <header>
        <b-collapse id="collapse-about" class="bg-dark">
            <b-container>
                <b-row>
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">About</h4>
                        <p class="text-muted">
                            Add some information about the album below, the
                            author, or any other background context. Make it a
                            few sentences long so folks can pick up some
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
                    <strong>{{ title }}</strong>
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
</template>

<script>
export default {
    name: "PageHeader",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>
