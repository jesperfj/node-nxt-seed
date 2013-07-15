I pull out my old NXT 1 brick from time to time and I always find myself spending a day getting basic stuff running.

This repo is an attempt to give me (and perhaps others) a failsafe way to get started next time I go undust this thing.

I have used many languages over the years: nqx, Java (nxj), Ruby and now Javascript / Node.js. I picked Node this time because the nature of the NXT is inherently real-time and evented and because the Node toolchain is more sane than Ruby and perhaps Java.

# Environment

I use Mac OS X, so that's what I'll document here. I am currently on 10.8 (Mountain Lion).

## Node.js and npm

Node.js and npm are required. You can install via [installers](http://nodejs.org/), homebrew (`brew install node`) or [from source](https://github.com/joyent/node). I recently installed from source and will probably continue to do that. Installing from source gives you both node and npm.


# Bluetooth Connection

It's pretty straight forward to pair your NXT1 on Mac OS X 10.8.

1. Ensure that NXT is discoverable

Go to Bluetooth menu:

![](http://cl.ly/image/1c2d0o1T1J2i/ClouDrop%20Jul%2015,%202013,%2012%3A21%3A29%20AM.png)

Select Visibility

![](http://cl.ly/image/002u2n2A1A3U/ClouDrop%20Jul%2015,%202013,%2012%3A21%3A32%20AM.png)

Check that it's set to 'Visible'

![](http://cl.ly/image/0J1h3j1H0a0v/ClouDrop%20Jul%2015,%202013,%2012%3A21%3A34%20AM.png)

2. Open up the Bluetooth Setup in Mac OSX Preferences

![](http://cl.ly/image/312q41342f2W/Image%202013.07.15%2012%3A15%3A20%20AM.png)

2. Add a New Device

![](http://cl.ly/image/2j252e040E35/Image%202013.07.15%2012%3A18%3A41%20AM.png)

3. NXT should show up

![](http://cl.ly/image/0U3y403P3o2y/Screen%20Shot%202013-07-15%20at%2012.12.57%20AM.png)

4. Pair the devices

Your computer will attempt to pair with the NXT and if things are going well, the NXT display will show a code entry dialog:

![](http://cl.ly/image/1w2n083e2f3m/ClouDrop%20Jul%2015,%202013,%2012%3A29%3A59%20AM.png)

But at this point, you don't know what code to punch in. Simply wait until the pairing attempt times out. Now you are given the option to set the passcode use by your computer:

![](http://cl.ly/image/1C2t0o0x010Z/Image%202013.07.15%2012%3A34%3A59%20AM.png)

Pick a code of your choice. The easiest one is 1234 which is what the NXT expects by default. Pick another one if you're paranoid. Now, on the NXT, accept the default 1234 code or type in the code you've chosen and then hit the orange key:

![](http://cl.ly/image/1w2n083e2f3m/ClouDrop%20Jul%2015,%202013,%2012%3A29%3A59%20AM.png)

The pairing should now be completed:

![](http://cl.ly/image/451d1o1r2u28/Screen%20Shot%202013-07-15%20at%2012.33.30%20AM.png)

5. Check the TTY name

Once the devices are paired, your Mac will create a new tty device file. Check what it's called with:

    $ ls /dev/tty.NXT*
    /dev/tty.NXT-DevB

The name returned here is what I get most often. But your name may look different, so be sure to check.


# Run this app

Now that your computer is hooked up to the NXT, you can test out this program. First clone the repo:

    $ git clone git://github.com/jesperfj/nxt1-seed.git
    ...
    $ cd nxt1-seed

Run npm install to do any rebuilding if necessary:

    $ npm install
    npm http GET https://registry.npmjs.org/serialport/1.1.1
    npm http 304 https://registry.npmjs.org/serialport/1.1.1
    npm http GET https://registry.npmjs.org/bindings/1.1.0
    npm http GET https://registry.npmjs.org/async/0.1.18
    npm http GET https://registry.npmjs.org/sf/0.1.6
    npm http GET https://registry.npmjs.org/optimist
    npm http 304 https://registry.npmjs.org/bindings/1.1.0
    npm http GET https://registry.npmjs.org/bindings/-/bindings-1.1.0.tgz
    npm http 304 https://registry.npmjs.org/sf/0.1.6
    npm http 304 https://registry.npmjs.org/async/0.1.18
    npm http 304 https://registry.npmjs.org/optimist
    npm http GET https://registry.npmjs.org/async/-/async-0.1.18.tgz
    npm http 200 https://registry.npmjs.org/bindings/-/bindings-1.1.0.tgz
    npm http 200 https://registry.npmjs.org/async/-/async-0.1.18.tgz
    npm http GET https://registry.npmjs.org/wordwrap
    npm http 304 https://registry.npmjs.org/wordwrap

    > serialport@1.1.1 install /Users/jesper/nxt/node/nxt1-seed/node_modules/mindstorms_bluetooth/node_modules/serialport
    > node-gyp rebuild

      CXX(target) Release/obj.target/serialport/src/serialport.o
      CXX(target) Release/obj.target/serialport/src/serialport_unix.o
      SOLINK_MODULE(target) Release/serialport.node
      SOLINK_MODULE(target) Release/serialport.node: Finished
    mindstorms_bluetooth@0.0.2 node_modules/mindstorms_bluetooth
    └── serialport@1.1.1 (bindings@1.1.0, sf@0.1.6, async@0.1.18, optimist@0.3.7)

(this is example output. Yours may look slightly different)

Set the `NXT_PORT` environment variable:

    $ export NXT_PORT=/dev/tty.NXT-DevB

Now run the app with

    $ node test.js
    serial port opened
    MOTOR 0: tacholimit=0, tachocount=0, blocktachocount=0, rotationcount=0
    MOTOR 1: tacholimit=0, tachocount=1031, blocktachocount=1031, rotationcount=1031
    MOTOR 2: tacholimit=0, tachocount=0, blocktachocount=0, rotationcount=0
    MOTOR 0: tacholimit=0, tachocount=0, blocktachocount=0, rotationcount=0
    MOTOR 1: tacholimit=0, tachocount=1031, blocktachocount=1031, rotationcount=1031
    MOTOR 2: tacholimit=0, tachocount=0, blocktachocount=0, rotationcount=0
    MOTOR 0: tacholimit=0, tachocount=0, blocktachocount=0, rotationcount=0
    MOTOR 1: tacholimit=0, tachocount=1031, blocktachocount=1031, rotationcount=1031
    MOTOR 2: tacholimit=0, tachocount=1696, blocktachocount=1696, rotationcount=1696

Try change the position of the motors while it's running (like in this example). The output should reflect the changes.
