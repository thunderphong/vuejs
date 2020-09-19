<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr />
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <h2 slot="title">{{ quoteTitle }}</h2>
                        <p>A wonderful quote</p>
                    </component>
                </keep-alive>
                <!-- <appQuote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>A wonderful quote</p>
                </appQuote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "./components/Quote";
import New from "./components/New";
import Author from "./components/Author";

export default {
    data: function() {
        return {
            quoteTitle: "aasdasd Quote",
            selectedComponent: "appQuote",
        };
    },
    components: {
        appQuote: Quote,
        appAuthor: Author,
        appNew: New,
    },
};
</script>

<style></style>
