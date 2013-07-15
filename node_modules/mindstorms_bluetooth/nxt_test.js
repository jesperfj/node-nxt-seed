var Nxt = require("./nxt").Nxt;

function play_sound_test() {
	var nxt = new Nxt("/dev/rfcomm0");
	//nxt.play_tone(440, 1000);
	//nxt.set_output_state(nxt.MOTOR_A, 50, nxt.MOTORON, nxt.REGULATION_MODE_IDLE, 0, nxt.MOTOR_RUN_STATE_RUNNING, 360);
	nxt.debug = true;
	nxt.set_input_state(nxt.INPUT_PORT_2, nxt.SWITCH, nxt.BOOLEANMODE);
	nxt.get_input_values(nxt.INPUT_PORT_2);
	setTimeout(nxt.close_connection(nxt.sp),10000);
}

play_sound_test();
