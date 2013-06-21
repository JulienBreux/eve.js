/**
 * eve.js - is another javascript event handler but does not use DOM
 * @author Julien Breux <julien.breux@gmail.com>
 * @version 1.0
 */
(function(window) {
  /**
   * Event object
   * @param  {string} name Event name
   */
  var Event = function(name) {
    this.name = name;
    this.callbacks = [];
  };

  /**
   * Register event callback
   * @param  {Function} callback Event callback
   */
  Event.prototype.registerCallback = function(callback) {
    this.callbacks.push(callback);
  };

  /**
   * Event dispatcher
   */
  window.EventDispatcher = function() {
    this.events = {};
  };

  /**
   * Add listener to event dispatcher
   * @param  {string}   name     Event name
   * @param  {Function} callback Event callback
   */
  window.EventDispatcher.prototype.addListener = function(name, callback) {
    if (!this.events.hasOwnProperty(name)) {
      this.events[name] = new Event(name);
    }
    this.events[name].registerCallback(callback);
  };

  /**
   * Dispatch events of event dispatcher
   * @param  {string} name Event name
   * @param  {object} args Arguments
   * @throws {Unknown} If the event is unknonw
   */
  window.EventDispatcher.prototype.dispatch = function(name, args) {
    if (!this.events.hasOwnProperty(name)) {
      throw 'Event "'+name+'" unknown';
    }
    this.events[name].callbacks.forEach(function(callback) {
      callback(args);
    });
  };
})(window);
