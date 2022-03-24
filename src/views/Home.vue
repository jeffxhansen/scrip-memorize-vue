<template>
<div>
    <div class="container">
        <div v-if="empty">
            <div class="container">
                <div class="card">
                    <div class="card-content">
                        <p>You currently have no scriptures that you are working on.
                            Please add a scripture.</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="carousel carousel-slider" id="card-carousel">
                <div class="carousel-item" v-for="scripture in scriptures" v-bind:key="scripture.id">
                    <div class="container">
                        <div class="card large blue-grey lighten-5">
                            <div class="card-content">
                                {{ scripture.text }}
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">{{ scripture.ref }}<i class="material-icons right">close</i></span>
                                <span class="card-content grey-text text-darken-3">{{ content }}</span>
                                <input type="range" min="0" max="10" value="10">
                            </div>
                            <div class="card-action">
                                <span style="font-style: italic; font-size: 14px;" class="left">{{ scripture.ref }}</span>
                                <a class="modal-trigger" v-on:click="updateScripIndex(scripture.id)" href="#confirmation">Pass Off</a>
                                <a class="activator" href="#">Test</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    <div id="confirmation" class="modal">
        <div class="modal-content">
            <h4>Are you sure you want to pass-off this scripture?</h4>
            <!-- <p>{{this.scriptureIndex}}</p> -->
        </div>
        <div class="modal-footer">
            <a href="" class="modal-close waves-effect waves-red btn-flat">No</a>
            <a href="" class="modal-close waves-effect waves-green btn-flat"><a v-on:click="passOffScripture()">Yes</a></a>
            <!-- v-on:click="passOffScripture()" -->
        </div>
    </div>

    <div class="row center">
        <div class="col s1"></div>
        <a href="" id="set-scripture" class="btn-large waves-effect waves-light orange col s5">Set Scripture</a>
        <router-link to="/AddScripture" class="col s5">
            <a href="" id="add-scripture" class="btn-large waves-effect waves-light orange">Add Scripture</a>
        </router-link>
        <div class="col s1"></div>
    </div>
</div>
</template>

<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script>
import M from 'materialize-css'

export default {
    name: 'Home',
    data() {
        return {
            scriptureIndex: 0,
            sliderSetting: 10
        }
    },
    mounted() {
        var elems = document.querySelectorAll('.carousel');
        var options = { fullWidth: true, indicators: true, noWrap: true, padding: -80, duration: 50, draggable: false };
        var instances = M.Carousel.init(elems, options);

        elems = document.querySelectorAll('.modal');
        options = {};
        instances = M.Modal.init(elems, options);
    },
    computed: {
        scriptures() {
            var scriptures = this.$root.$data.getCurrentScriptures();
            console.log(scriptures);
            return scriptures;
        },
        empty() {
            var scriptures = this.$root.$data.getCurrentScriptures();
            return (scriptures.length === 0);
        },
        content(scripId) {
            return "41 And moreover, I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God." + scripId;
        }
    },
    methods: {
        updateScripIndex(scriptureId) {
            console.log(scriptureId);
            this.scriptureIndex = scriptureId;
        },
        passOffScripture() {
            console.log(this.$root.$data.scriptures[this.scriptureIndex]);
            console.log(this.$root.$data.scriptures[this.scriptureIndex].passedOff);
            this.$root.$data.scriptures[this.scriptureIndex].passedOff = true;
            //alert(this.$root.$data.scriptures[this.scriptureIndex].passedOff);
        }
    }
};
</script>

<style src="../../public/styles.css"></style>