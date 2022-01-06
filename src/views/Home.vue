<template>
<div>
    <div class="container">
        <div class="carousel carousel-slider" id="card-carousel">
            <div class="carousel-item">
                <div class="container">
                    <div class="card large blue-grey lighten-5">
                        <div class="card-content">
                            41 And moreover, I would desire that ye should consider on the blessed and happy state of those that keep the
                            commandments of God. For behold, they are bblessed in all things, both temporal and spiritual; and if they hold out
                            faithful to the end they are received into heaven, that thereby they may dwell with God in a state of never-ending
                            happiness. O remember, remember that these things are true; for the Lord God hath spoken it.
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Scripture Reference<i class="material-icons right">close</i></span>
                            <input type="range" min="0" max="10" value="10">
                        </div>
                        <div class="card-action">
                            <div class="row">
                                <div class="card-action-item col s6 m6 l6">
                                    <span style="font-style: italic;" class="left">Scripture Reference</span>
                                </div>
                                <div class="card-action-item col s6 m6 l6">
                                    <a href="#">Pass Off</a>
                                    <a class="activator" href="#">Test</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="card large blue-grey lighten-5">
                        <div class="card-content">
                            17 And behold, I tell you these things that ye may learn awisdom; that ye may learn that when ye are in the service of
                            your fellow beings ye are only in the service of your God.
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Scripture Reference<i class="material-icons right">close</i></span>
                            <input type="range" min="0" max="10" value="10">
                        </div>
                        <div class="card-action">
                            <div class="row">
                                <div class="card-action-item col s6 m6 l6">
                                    <span style="font-style: italic;" class="left">Scripture Reference</span>
                                </div>
                                <div class="card-action-item col s6 m6 l6">
                                    <a href="#">Pass Off</a>
                                    <a class="activator" href="#">Test</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row center">
        <a href="" id="set-scripture" class="btn-large waves-effect waves-light orange">Set Scripture</a>
        <a href="" id="add-scripture" class="btn-large waves-effect waves-light orange">Add Scripture</a>
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
        return {}
    },
    mounted() {
        var elems = document.querySelectorAll('.carousel');
        var options = { fullWidth: true, indicators: true, noWrap: true, padding: -80, duration: 50, draggable: false };
        var instances = M.Carousel.init(elems, options);
    }
};
</script>

<style src="../../public/styles.css"></style>