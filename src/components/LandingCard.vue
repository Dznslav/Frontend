<template>
    <RouterLink :to="link" class="link">
        <div class="landingCard">
            <h1>{{ mainText }}</h1>
        </div>
    </RouterLink>
</template>

<script>
export default {
    name: 'LandingCard',
    props: {
        mainText: String,
        link: String,
        required: true,
    }
};
</script>

<style scoped>
.landingCard {
    min-width: 300px;
    height: 25vh;
    background-image: url('../public/sec-land-pic.jpg');
    background-size: cover;
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 15px;
    color: #161d1c;
    text-decoration: none;
}
.link{
    text-decoration: none;
}
.landingCard:hover{
    transform: scale(1.05);
    transition: transform 0.5s ease;
}

</style>