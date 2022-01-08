<template>
<div>
    <div class="container">
        <div v-if="!submited">
            <h3 class="center">Add a Scripture</h3>
        </div>
        <div v-else>
            <h3 class="center">Add Another Scripture</h3>
        </div>
        <form class="container">
            <div class="row"></div>
            <div class="row">
                <div class="input-field col s12">
                    <input v-model="ref" id="scripture_ref" type="text" class="validate">
                    <label for="scripture_ref">Scripture Reference</label>
                </div>
                <div class="input-field col s12">
                    <label for="textarea1">Scripture Text</label>
                    <textarea v-model="text" class="materialize-textarea" id="textarea1"></textarea>
                </div>
            </div>
            
            <br>

            <div class="row center">
                <div class="col s1"></div>
                <router-link to="/">
                    <a id="submit-scripture" class="col s4 btn-large waves-effect waves-light light-blue lighten-1">Back</a>
                </router-link>
                <div class="col s1"></div>
                <a id="submit-scripture" class="col s4 btn-large waves-effect waves-light orange" v-on:click.prevent="addScripture()">Add</a>
                <div class="col s2"></div>
            </div>
        </form>
    </div>
</div>
</template>

<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script>
export default {
    name: "AddScripture",
    data() {
        return {
            creating: true,
            ref: "",
            text: "",
            submited: false
        }
    },
    methods: {
        toggleForm() {
            this.creating = !this.creating;
        },
        addScripture() {
            this.$root.$data.addScripture(this.ref, this.text);
            this.ref = "";
            this.text = "";
            this.creating = !this.creating;
            this.submited = true;
            M.toast({html: "Scripture added succesfully!"})
        }
    }
}
</script>

<style src="materialize-css/dist/css/materialize.css"></style>
