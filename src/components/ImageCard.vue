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
                    @click="downloadImage(image)"
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
    methods: {
        async downloadImage(image) {
            const imageName = image.alt + ".jpg";
            try {
                const response = await this.$http.get(image.url, {
                    responseType: "blob", // important
                });

                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", imageName);
                document.body.appendChild(link);
                link.click();
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
