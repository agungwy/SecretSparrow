$(function(){

    /* Doughnut */

    var doughnutData = [
        {
            value: 50,
            color: "#216C2A",
            highlight: "#85BB65",
            label: "Purchase"
        },
        {
            value: 100,
            color: "#800080",
            highlight: "#9370DB",
            label: "I'm Interested"
        },
        {
            value: 250,
            color: "#FFD700",
            highlight: "#FFDEAD",
            label: "Video"
        },
        {
            value: 120,
            color: "#00008B",
            highlight: "#0000CD",
            label: "Facebook"
        },
        {
            value: 80,
            color: "#1E90FF",
            highlight: "#87CEFA",
            label: "Twitter"
        },
        {
            value: 40,
            color:"#FF0000",
            highlight: "#DC143C",
            label: "Youtube"
        }
    ];

    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});

});