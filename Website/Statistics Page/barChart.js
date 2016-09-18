var d = new Date();
var day = d.getDate();
var month = d.getMonth()+1;
var year = d.getFullYear();

var interest = 0;
var visit = 0;

console.log(day);
console.log(month);
console.log(year);

// for subscriber
$.ajax({
    type:'GET',
    url:"https://incognito.uqcloud.net/stat/tester?year="+year+"&month="+month+"&date="+day,
      success:function(data,status,xhr){
        // for visitor
        $.ajax({
          type:'GET',
          url:"https://incognito.uqcloud.net/stat/counter?year="+year+"&month="+month+"&date="+day,
          success:function(data2,status2,xhr2){
            // for social media
          $.ajax({
              type:'GET',
              url:"https://incognito.uqcloud.net/stat/counter?year="+year+"&month="+month+"&date="+day,
              success:function(data3,status3,xhr3){
                visit = data2.count;
                console.log(data);
                interest = data.count;
                console.log(interest);
                console.log(visit);
                var list = [];
                list.push("Total Clicked");
                list.push(visit);
                list.push(interest);
                list.push(3);
                list.push(2);
                list.push(3);

                
                $(document).ready(function (){
                  $('#totalsubscription').html("Total Subscribers: "+data.testers.length);
                    $('.tg tr').remove();
                    $('.tg').append('<tr>'+
                      '<th class="tg-sd1">Number</th>'+
                      '<th class="tg-sd2">Date Subscribed</th>'+
                      '<th class="tg-sd3">Full Name</th>'+
                      '<th class="tg-sd4">E-mail</th>'+
                    '</tr>');
                    for (var i=0; i<data.testers.length; i++){

                      var row = data.testers[i];
                      console.log(row);
                      $('.tg').append('<tr >'+
                                '<td class="tg-sd">'+(i+1)+'</td>'+
                                '<td class="tg-sd">'+row.created_at+'</td>'+
                                '<td class="tg-sd">'+row.name+'</td>'+
                                '<td class="tg-sd">'+row.email+'</td>'+
                            '</tr>');

                    }

                })
                $(document).on('change', '#select', function(){
                  var val = document.getElementById("select");
                  var value = val.options[val.selectedIndex].value;
                  if(value=="subscriber"){
                    $('#totalsubscription').html("Total Subscribers: "+data.testers.length);
                    $('.tg tr').remove();
                    $('.tg').append('<tr>'+
                      '<th class="tg-sd1">Number</th>'+
                      '<th class="tg-sd2">Date Subscribed</th>'+
                      '<th class="tg-sd3">Full Name</th>'+
                      '<th class="tg-sd4">E-mail</th>'+
                    '</tr>');
                    for (var i=0; i<data.testers.length; i++){

                      var row = data.testers[i];
                      console.log(row);
                      $('.tg').append('<tr >'+
                                '<td class="tg-sd">'+(i+1)+'</td>'+
                                '<td class="tg-sd">'+row.created_at+'</td>'+
                                '<td class="tg-sd">'+row.name+'</td>'+
                                '<td class="tg-sd">'+row.email+'</td>'+
                            '</tr>');

                    }
                  }
                  else if (value=="visitor"){
                    $('#totalsubscription').html("Total Visitor: "+data2.testers.length);
                    $('.tg tr').remove();
                    $('.tg').append('<tr>'+
                      '<th class="tg-sd1">Number</th>'+
                      '<th class="tg-sd2">Date Visited</th>'+
                      '<th class="tg-sd3">IP Address</th>'+
                    '</tr>');
                    for (var i=0; i<data2.testers.length; i++){
                      var row = data2.testers[i];
                      console.log(row);
                      $('.tg').append('<tr >'+
                                '<td class="tg-sd">'+row.id+'</td>'+
                                '<td class="tg-sd">'+row.created_at+'</td>'+
                                '<td class="tg-sd">'+row.ip_address+'</td>'+
                            '</tr>');

                    }
                  }
                })
                
                


                google.charts.load('current', {'packages':['bar']});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {
                  var data = google.visualization.arrayToDataTable([
                    ['Total Clicked', 'Website', 'Interested', 'Youtube', 'Facebook', 'Twitter'],
                    list,
                    
                  ]);

                  var options = {
                    chart: {
                      title: 'Total of Interest of Customer',
                      subtitle: 'Collected by recording the number of click in promotional website',
                      backgroundColor: '#ED5356',
                      is3D: true,
                    }
                  };

                  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

                  chart.draw(data, options);
                }
                    
            },

              complete:function(status3,xhr3){
                  if(xhr!=='success'){
                      console.log('xhr');
                  }
              }
            
            });
        },

          complete:function(status2,xhr2){
              if(xhr!=='success'){
                  console.log('xhr');
              }
          }
        
        });

      },
        complete:function(status,xhr){
            if(xhr!=='success'){
                console.log('xhr');
            }
        }
    
});


