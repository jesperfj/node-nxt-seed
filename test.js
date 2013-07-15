var Nxt = require('mindstorms_bluetooth').Nxt;

if(!process.env.NXT_PORT) {
  console.log("NXT_PORT environment variable not set. Using /dev/tty.NXT-DevB")
  var NXT_PORT = '/dev/tty.NXT-DevB'
} else {
  var NXT_PORT = process.env.NXT_PORT
}

var n = new Nxt(NXT_PORT, function() {
    console.log('serial port opened')
    //n.get_battery_level()

    n.register_callback('getoutputstate', function(data) {
      console.log('MOTOR '+data[3]+': tacholimit='+hex2int(data,9)+
                                   ', tachocount='+hex2int(data,13)+
                                   ', blocktachocount='+hex2int(data,17)+
                                   ', rotationcount='+hex2int(data,21)
                                   )
    });


    // spread out the calls a bit. Otherwise they will step on each other.

    setInterval(function() {
      n.get_output_state(n.MOTOR_A)

    }, 7200);

    setTimeout(function() {
      setInterval(function() {
        n.get_output_state(n.MOTOR_B)

      }, 7200);
    }, 600);

    setTimeout(function() {
      setInterval(function() {
        n.get_output_state(n.MOTOR_C)

      }, 7200);
    }, 1200);



});


function hex2int(arr, offset) {
     return arr[offset] + (arr[offset+1] << 8) + (arr[offset+2] << 16) + (arr[offset+3] << 24)

}
