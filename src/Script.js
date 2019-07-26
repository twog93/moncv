import $ from 'jquery'
import Term from './Terminal.js';
import Terminal from "./Terminal";
$(function() {
  
  // Set the command-line prompt to include the user's IP Address
 // $('.prompt').html('[' + codehelper_ip["IP"] + '@HTML5] # ');
    $('.prompt').html('[gd@gd] # ');


  // Initialize a new terminal object
  new Term('#input-line .cmdline', '#container output');
  //term.init();

  // Update the clock every second
  setInterval(function() {
    function r(cls, deg) {
      $('.' + cls).attr('transform', 'rotate('+ deg +' 50 50)')
    }
    var d = new Date()
    r("sec", 6*d.getSeconds())  
    r("min", 6*d.getMinutes())
    r("hour", 30*(d.getHours()%12) + d.getMinutes()/2)
  }, 1000);
  console.log($('#typed').length);
});

export function closeCurrentWindow() {
  window.close();
}
export default closeCurrentWindow;
