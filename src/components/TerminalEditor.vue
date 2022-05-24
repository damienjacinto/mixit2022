<template>
  <div class="box">
    <div id="xterm"></div>
  </div>
</template>

<script>
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { checkCommand } from '../utils/helper.js';

import 'xterm/css/xterm.css'
import 'xterm/lib/xterm.js'

export default {
  name: "terminal-editor",
  data() {
    return {
      term: "",
      socket: "",
      command: "",
      promptDefault: "",
      currentCommand: 0,
      history: []
    };
  },
  props: {
    exercice: {
      type: String,
      default: ""
    }
  },
  mounted() {
    let url ="ws://localhost:9999";
    this.init(url);
  },
  beforeUnmount() {
    this.close();
  },
  methods: {
    initXterm() {
      this.term = new Terminal({
        rendererType: "canvas", //type of rendering
        rows: 35, // number of rows
        convertEol : true, // enabled, the cursor is set to the beginning of the next line
        scrollback : 200, // rollback amount of the terminal
        disableStdin : false, // whether to disable input
        cursorStyle : "underline", // Cursor Style
        cursorBlink : true, // cursor blinks
        theme : {
          foreground: "yellow", // font
          background : "#060101", // Background color
        }
      });
      this.term.open(document.getElementById("xterm"));

      const fitAddon = new FitAddon();
      this.term.loadAddon(fitAddon);
      fitAddon.fit();

      var _this = this;
      this.term.onData(e => {
        switch (e) {
          case '\x1b[A':
            if (_this.history.length) {
              _this.term.write('\x1b[2K\r')
              _this.currentCommand--;
              if (_this.currentCommand < 0) {
                _this.currentCommand = _this.history.length-1;
              }
              _this.command = _this.history[_this.currentCommand];
              _this.term.write('$ '+ _this.command);
            }
            break;
          case '\x1b[B':
            _this.currentCommand++;
            if (_this.currentCommand >= _this.history.length) {
              _this.term.write('\x1b[2K\r');
              _this.currentCommand = this.history.length;
              _this.command = "";
              _this.term.write('$ ');
            } else {
              _this.term.write('\x1b[2K\r');
              _this.command = _this.history[_this.currentCommand];
              _this.term.write('$ '+ _this.command);
            }
            break;
          case '\u0003': // Ctrl+C
            _this.term.write('^C');
            _this.prompt();
            break;
          case '\r': // Enter
            _this.addCommand();
            _this.runCommand();
            _this.command = '';
            break;
          case '\u007F': // Backspace (DEL)
            // Do not delete the prompt
            if (_this.term._core.buffer.x > 2) {
              _this.term.write('\b \b');
              if (_this.command.length > 0) {
                _this.command = _this.command.substr(0, _this.command.length - 1);
              }
            }
            break;
          default: // Print all other characters for demo
            if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
              _this.command += e;
              _this.cursor +=1;
              _this.term.write(e);
            }
        }
      });
    },
    init(url) {
      // instantiate socket
      this.socket = new WebSocket(url);
      // listening socket connection
      this.socket.onopen = this.open;
      // Listening socket error
      this.socket.onerror = this.error;
      // listening socket message
      this.socket.onmessage = this.getMessage;
      // sending socket message
      this.socket.onsend = this.send;
    },
    open: function() {
      this.socket.onsend(JSON.stringify({start: this.exercice}));
      this.initXterm();
    },
    error: function() {
      alert("Serveur indisponible !");
    },
    close: function() {
      this.socket.close();
    },
    getMessage: function(msg) {
      console.log(JSON.parse(msg.data).output);
      if (this.promptDefault == "") {
        this.promptDefault = JSON.parse(msg.data);
      }
      this.term.write(JSON.parse(msg.data).output);
    },
    send: function(order) {
      this.socket.send(order);
    },
    prompt: function() {
      this.command = '';
      this.currentCommand = this.history.length;
      this.term.write('\r\n')
      this.term.write(this.promptDefault.output.length);
    },
    runCommand: function() {
      if (this.command.length) {
        if (checkCommand(this.command)) {
          this.socket.onsend(JSON.stringify({input: this.command}));
        } else {
          this.term.write('\r\nCette commande n\'est pas disponible \r\n');
        }
      }
      this.prompt();
    },
    addCommand: function() {
      if (this.command.length) {
        this.history.push(this.command);
      }
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>