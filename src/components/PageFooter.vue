<template>
    <footer class="text-muted my-5">
        <div class="container">
            <p class="float-right">
                <a href="#">Back to top</a>
            </p>
            <p>
                Discover the latest Xbox game images on {{ title }} - your
                ultimate source for Xbox game screenshots
            </p>
            <p>
                Copyright &copy; {{ currentYear }} {{ title }}. All rights
                reserved.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "PageFooter",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>
