import axios from "axios";
import { defineStore } from "pinia";
const apiUrl = "https://displaycatalog.mp.microsoft.com/v7.0/products";

export const useProductStore = defineStore("product", {
    state: () => {
        return {
            bigId: "",
            data: {},
        };
    },
    getters: {
        product: (state) => {
            if (state.data["LocalizedProperties"]) {
                const info = state.data["LocalizedProperties"][0];
                const images = info["Images"].reduce((result, image) => {
                    const purpose = image["ImagePurpose"];
                    if (!result[purpose]) {
                        result[purpose] = [];
                    }

                    result[purpose].push({
                        url: "https:" + image["Uri"],
                        width: image["Width"],
                        height: image["Height"],
                        alt: image["FileId"],
                        purpose: image["ImagePurpose"],
                    });
                    return result;
                }, {});

                return {
                    id: state.data["ProductId"],
                    name: info["ProductTitle"],
                    developer: info["DeveloperName"],
                    publisher: info["PublisherName"],
                    images: images,
                };
            } else {
                return {
                    id: "",
                    name: "",
                    developer: "",
                    publisher: "",
                    images: [],
                };
            }
        },
    },
    actions: {
        async getData(bigId) {
            this.bigId = bigId.trim();

            const params = {
                bigIds: this.bigId,
                market: "US",
                languages: "en-US",
                "MS-CV": "DGU1mcuYo0WMMp+F.1",
            };

            try {
                const response = await axios.get(apiUrl, { params });
                if (response.data.Products.length > 0) {
                    this.data = response.data.Products[0];
                } else {
                    this.data = [];
                }
            } catch (error) {
                return error;
            }
        },
    },
});
