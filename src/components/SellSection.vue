<template>
    <section class="sell-vinyl-section">
        <h2>Sell Some Vinyl</h2>
        <p>Artist</p>
        <input type="text" class="artist input long-input">
        <p>Album</p>
        <input type="text" class="album input long-input">
        <div class="short-inputs">
            <label for="genre">Genre
                <input type="text" id="genre" class="genre input short-input"></label>
            <label for="label">Label
                <input type="text" class="label input short-input">
            </label>
        </div>
        <div class="short-inputs">
            <label for="year">Release Year
                <input type="text" id="year" class="year input short-input"></label>
            <label for="price">Asking Price
                <input v-model="number" id="price" class="price input short-input"></label>
        </div>
        <div class="lengths-div">
            <label for="lp">LP
                <input type="radio" v-model="pick" :value="first" id="lp" name="length" class="length"></label>
            <label for="ep">EP
                <input type="radio" v-model="pick" :value="second" id="ep" name="length" class="length"></label>
        </div>
        <button class="button start-listing">Start Listing</button>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.sell-vinyl-section {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 20rem;
    padding: 1rem;

    input {
        margin-bottom: 0.8rem;
    }

    h2 {
        margin-bottom: 1.5rem;
    }

    button {
        width: 50%;
    }
}

.input {
    font-size: 1rem;
    height: 2.5rem;
    width: 100%;
    padding: none;
    margin-top: 0.5rem;
    margin-bottom: 5px;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid grey;

    .price {
        text-align: right;
    }
}

.short-inputs {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
}

.short-input {
    width: 9rem;
}

.lengths-div {
    display: flex;
    justify-content: space-between;
    width: 20%;
}
</style>