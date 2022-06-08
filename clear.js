document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('ClearSitesBtn');
    button.addEventListener('click', function() {
    // onClick's logic below:
        localStorage.clear();
        location.reload();
    });
});
