'use strict'
var net = require('net')
var debug = require('debug')('mqttjs:tcp')

/*
  variables port and host can be removed since
  you have all required information in opts object
*/
function streamBuilder (client, opts) {
  var port, host
  opts.port = opts.port || 1883
  opts.hostname = opts.hostname || opts.host || 'localhost'

  port = opts.port
  host = opts.hostname

  debug('port %d and host %s', port, host)

  let stream = net.createConnection(port, host)
  stream.setNoDelay(true);

  console.log(`************************| NO DEPLAY SET |************************`);

  return stream
}

module.exports = streamBuilder
