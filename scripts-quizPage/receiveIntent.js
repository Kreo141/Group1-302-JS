$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');
    console.log(data);
})