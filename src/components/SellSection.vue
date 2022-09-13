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
        <button class="button start-listing">Create Listing</button>
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
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20rem;
    height: 30rem;

    input {
        margin-bottom: 0.8rem;
    }

    h2 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    button {
        width: 50%;
    }
}

.input {
    font-size: 1rem;
    height: 2.5rem;
    width: 100%;
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

    label {
        width: 9rem;
    }
}

.short-input {
    width: 9rem;
}

.lengths-div {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-bottom: 1rem;
}


input[type="radio"] {
    cursor: pointer;
    appearance: none;
    background-color: #fff;
    margin: 0.5rem 1rem 1rem 0;
    font: inherit;
    color: black;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid grey;
    border-radius: 5px;
    transform: translateY(0.1em);
    display: grid;
    place-content: center;
}

input[type="radio"]:hover {
    border: 2px solid grey;
}

input[type="radio"]:checked {
    border: 1px solid black;
}

input[type="radio"]::before {
    content: "";
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 2rem 2rem;
}

input[type="radio"]:checked::before {
    transform: scale(1);
    color: black;
}
</style>