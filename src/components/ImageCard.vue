<template>
    <b-card
        class="card mb-4 shadow-sm"
        no-body
        style="max-width: 20rem"
        :img-src="image.url"
        :img-alt="image.alt"
        img-top
    >
        <div class="card-body p-2">
            <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">
                    {{ image.width }}
                    x
                    {{ image.height }}
                </small>
                <b-button
                    size="sm"
                    variant="outline-secondary"
                    :href="image.url"
                    :download="image.alt + '.jpg'"
                    target="_blank"
                >
                    <b-icon icon="download" />
                </b-button>
            </div>
        </div>
    </b-card>
</template>

<script>
export default {
    name: "ImageCard",
    props: {
        image: {
            type: Object,
            required: true,
            default: () => ({
                url: "",
                width: "",
                height: "",
                alt: "",
            }),
        },
    },
};
</script>
