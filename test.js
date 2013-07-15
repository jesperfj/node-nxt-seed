var Nxt = require('mindstorms_bluetooth').Nxt;

var n = new Nxt('/dev/tty.NXT-DevB', function() {
    console.log('serial port opened')
    //n.get_battery_level()

    n.register_callback('getoutputstate', function(data) {
      console.log('MOTOR '+data[3]+': tacholimit='+hex2int(data,9)+
                                   ', tachocount='+hex2int(data,13)+
                                   ', blocktachocount='+hex2int(data,17)+
                                   ', rotationcount='+hex2int(data,21)
                                   )
    });


    setInterval(function() {
      n.get_output_state(n.MOTOR_A)

    }, 7200);

    setTimeout( function() {
      setInterval(function() {
        n.get_output_state(n.MOTOR_B)

      }, 7200);
    }, 600);

    setTimeout( function() {
      setInterval(function() {
        n.get_output_state(n.MOTOR_C)

      }, 7200);
    }, 1200);



});


function hex2int(arr, offset) {
     return arr[offset] + (arr[offset+1] << 8) + (arr[offset+2] << 16) + (arr[offset+3] << 24)

}
