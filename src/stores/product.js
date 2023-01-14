import axios from "axios";
import { defineStore } from "pinia";
const apiUrl = "https://displaycatalog.mp.microsoft.com/v7.0/products";

export const useProductStore = defineStore("product", {
    state: () => {
        return {
            bigIds: "",
            data: [],
        };
    },
    getters: {
        products: (state) =>
            state.data.map((item) => {
                const info = item["LocalizedProperties"][0];

                let imagesFilted = function (purpose) {
                    return info["Images"]
                        .filter((img) => img["ImagePurpose"] === purpose)
                        .map((img) => {
                            return {
                                url: "https:" + img["Uri"],
                                width: img["Width"],
                                height: img["Height"],
                                alt:
                                    item["ProductId"] +
                                    "_" +
                                    img["ImagePurpose"] +
                                    "_" +
                                    img["FileId"],
                            };
                        });
                };

                return {
                    id: item["ProductId"],
                    name: info["ProductTitle"],
                    developer: info["DeveloperName"],
                    publisher: info["PublisherName"],
                    images: {
                        poster: imagesFilted("Poster"),
                        screenshots: imagesFilted("Screenshot"),
                    },
                };
            }),
        count: (state) => state.data.length,
    },
    actions: {
        async getData(bigIds) {
            this.bigIds = bigIds;

            const params = {
                bigIds: this.bigIds.trim(),
                market: "US",
                languages: "en-US",
                "MS-CV": "DGU1mcuYo0WMMp+F.1",
            };

            try {
                const response = await axios.get(apiUrl, { params });
                if (response.data.Products.length > 0) {
                    this.data = response.data.Products;
                } else {
                    this.data = [];
                }
            } catch (error) {
                return error;
            }
        },
    },
});
